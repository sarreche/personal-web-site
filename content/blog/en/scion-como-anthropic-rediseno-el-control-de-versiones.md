---
title: "Scion: how Anthropic redesigned source control for agents"
description: "When thousands of agents produce code, obtaining the files also has a cost. Scion's design helps explain how development infrastructure changes."
publishedAt: "2026-10-28"
---

Imagine an automated task that needs to inspect a few files. Before starting, it has to prepare its copy of the code. Now multiply that step by millions of runs: obtaining the material can become a problem in its own right.

That is a useful entry point to [Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control), published October 13 and updated October 15. Anthropic describes Scion, the system that replaced Git in its monorepo, and reports around 25 million daily checkouts for continuous integration.

I want to explore the engineering reasoning: what belongs near the client, what a service can handle, and how the calculation changes when automated processes do much of the work.

## What source control manages

In this context, SCM means source code management. It preserves versions and relationships between changes. It lets us compare states, find where a modification originated, and combine work.

To understand the designs, it helps to examine [how Git stores objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects). A commit references a file tree and its parents; contents live in objects identified by their hashes. Objects are reused: saving a version does not mean duplicating every file.

[Partial cloning](https://git-scm.com/docs/partial-clone) also exists: it lets us omit objects and request them later. Explaining this case therefore requires examining the full pattern of operations alongside repository size.

A long-lived client can reuse downloaded data many times. In an ephemeral environment, we need to decide where to retain it so the next task can reuse it.

## The problem is how much work we repeat

Imagine a hypothetical example: a check takes five seconds, and preparing its files takes twenty. Improving the analysis to one second reduces the total from twenty-five to twenty-one. Reducing preparation to two seconds lets the original analysis finish in seven.

Those figures are invented to illustrate the calculation. What matters is the complete path: download, preparation, execution, and cleanup.

I would separate three questions: how much data each task actually needs, how much the next one requests again, and how much computation the server needs to handle both. Reducing bytes can help, but avoiding repeated CPU work or unnecessary queries matters too.

That perspective helps explain why repository access deserves to be designed as part of the execution infrastructure.

## Scion's proposal

Scion assumes connected clients, moves operations to the server, records changesets containing modified files, and uses derived data for historical queries. It combines API access, sparse or virtualized working copies, and a cache hierarchy.

We can think about those decisions in three layers:

- **The query:** a task may need a difference between versions without needing files on disk.
- **The representation:** recording changes and maintaining indexes separates writing from different ways of reading.
- **The distribution:** consumers can share data already available near where they execute.

That is my map for reading the architecture. It helps distinguish storing history, answering questions, and materializing a working directory: related needs with potentially very different costs.

## Record changes and prepare views

There are public precedents for this representation. [Mononoke](https://github.com/facebook/sapling/blob/main/eden/mononoke/README.md), Sapling's server, was designed for large repositories. Its [Bonsai](https://github.com/facebook/sapling/blob/79071c2a3ea20c36ed71332608535e5801101bba/eden/mononoke/mononoke_types/serialization/bonsai.thrift) format includes parents, metadata, and a map of file changes. Anthropic acknowledges that precedent.

To understand separating records from indexes, imagine a transaction ledger and several lookup cards. The ledger preserves what happened. One card quickly locates changes to a path; another helps navigate relationships between versions.

Building the cards has a cost. We can prepare them when a change arrives or wait until someone needs them. The choice depends on query frequency and how much work we are willing to do in advance.

This analogy explains a common systems decision: organizing data for the question we want to answer. A representation suited to writing does not have to be the only one we use for reading.

## Bring data closer to tasks

A cache allows repeated requests to reuse a response. Imagine two jobs on one machine needing exactly the same version of a file. If the data is already available locally, downloading it again adds little.

Identifying immutable contents facilitates reuse: a particular version can retain the same identity while different tasks query it. That simplifies reasoning about what can be shared, although permissions and availability still need their own design.

On-demand materialization adds another possibility: preparing only the files actually used. Its benefit depends on real access patterns. A task reading everything must obtain everything; one examining a small subset may save substantial preparation.

I think this offers a useful way to evaluate these architectures: observe reads, traffic between layers, and behavior when data is not yet cached. We can then explain where an improvement comes from as well as measure it.

## The results so far

Anthropic reports CPU and memory infrastructure 200 times smaller than its former Git mirrors, checkouts taking seconds instead of minutes, and 25% of CI CPU capacity freed. These are internal results from that environment.

The figures describe different quantities. The first compares distribution infrastructure; the third concerns CI capacity. I would not interpret them as equivalent reductions in the total cost of developing software.

The publication also describes testing after merge and before deployment. That distinction matters: integrating changes, checking them, and publishing a version are stages that can be arranged differently.

To compare another system, I would measure environment preparation, resource consumption, latency, and recovery from failures under a representative workload. That would be a separate evaluation, rather than an extrapolation of the published numbers.

## The engineering conclusion

The case highlights a design question worth keeping: **what does each repository consumer actually need?**

A person exploring history, an agent modifying a module, and an automated check may need different kinds of access. Understanding them helps determine which data to move and which operations to offer as services.

That is my reading of Scion: as our capacity to produce changes increases, the infrastructure that lets us inspect, test, and distribute them also deserves attention. That may be where the next opportunity to improve the process appears.

I continue these conversations on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.

## References

- [Anthropic: Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control), published October 13, 2026, updated October 15. Engineering case and company-reported results.
- [Git: partial cloning](https://git-scm.com/docs/partial-clone) and [object model](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).
- [Mononoke](https://github.com/facebook/sapling/blob/main/eden/mononoke/README.md) and [Bonsai format](https://github.com/facebook/sapling/blob/79071c2a3ea20c36ed71332608535e5801101bba/eden/mononoke/mononoke_types/serialization/bonsai.thrift), public precedents for the design.
