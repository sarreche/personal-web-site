---
title: "AI can write code, but it cannot assume engineering responsibility"
description: "Generating software is becoming easier; deciding what to build, controlling its risks, and answering for its consequences remain engineering work."
publishedAt: "2026-08-28"
---

When a system fails in production, somebody has to answer for it.

If a banking system loses money, a critical platform goes down, or a medical system produces a serious error, the question is not which tool generated the code. The question is who made the decisions that led to the outcome.

Artificial intelligence can accelerate implementation enormously. It can write functions, create tests, propose architectures, review changes, and document a repository. None of those capabilities removes the purpose of software engineering.

Engineering exists to turn ambiguous needs into systems that work under real constraints. It also exists to reduce risk, make tradeoffs explicit, and assume responsibility for what is released into the world.

The easier code becomes to produce, the more important it is to distinguish between **generating an implementation** and **building a dependable system**.

## Code was never the whole of engineering

A function can be well written and still belong to the wrong product. It can satisfy a specification while violating the intent behind it. It can pass every test and fail under a condition nobody imagined.

Code answers the problem we expressed. Engineering also asks whether we expressed the right problem.

Before implementation, somebody has to decide:

- Which behavior the user actually needs.
- Which errors are acceptable and which would be catastrophic.
- Which data may be used and how it must be protected.
- Which dependencies are worth introducing.
- Which cost, performance, and availability the product requires.
- What happens when part of the system stops responding.

AI can help us explore every one of these questions. The final decision still affects real people and organizations.

## A plausible answer is not necessarily a correct decision

Generative models are especially good at producing plausible results. In programming, that is extraordinarily useful because much everyday work relies on known patterns.

Important systems, however, are often defined by their exceptions.

Imagine that AI generates the code for processing a bank transfer. Compiling and completing the happy path does not tell us whether the operation is idempotent, what happens under two simultaneous requests, how a partial failure is reconciled, or which evidence remains for an audit.

Those are not minor details to add later. They are part of what “transferring money correctly” means.

The difficulty lies in turning a human need into verifiable properties and discovering what the first description omitted. A better prompt helps, but it does not remove uncertainty from the domain.

## Quality is a collection of decisions

Saying that a system “works” often means only that it produced the expected result in the observed case. Production demands much more.

We need to know how it behaves under load, during an attack, through a network outage, with incomplete data, or after years of changes. Reliability, security, performance, maintainability, accessibility, and observability do not appear automatically because the code was generated.

These attributes also compete with one another. More security can add friction. More availability can raise costs. Optimizing performance can make the system harder to change.

There is no universally perfect answer. There is an appropriate decision for a particular context, set of risks, and collection of priorities. Making those tradeoffs visible and defensible is engineering work.

## Generating faster can also generate more risk

When writing code was slow, implementation capacity limited how many changes could enter a system. With AI, we can produce many more alternatives, integrations, and features in the same amount of time.

That is an enormous advantage, but it also multiplies the surface we need to understand and verify.

A tool can generate an implementation and its tests from the same mistaken assumption. It can reuse a vulnerable dependency, misread a business rule, or introduce behavior that appears only in production.

Verification should therefore scale not with the amount of code but with the risk of the change. An experimental website and a clinical system do not require the same degree of evidence.

NIST’s Secure Software Development Framework reflects this logic: security is not an isolated review at the end but a set of practices integrated across the lifecycle. Automating one stage does not eliminate the others.

## Operation is also part of design

A system does not end when it is deployed.

Traffic, users, threats, and dependencies change in production. Combinations appear that no test environment reproduced. Engineering has to prepare the system to be observed, degrade in a controlled way, and recover.

That requires decisions about:

- Which metrics and events should be recorded.
- Which conditions should trigger an alert.
- Which actions an agent may execute automatically.
- When human confirmation is required.
- How to reverse a change or isolate a component.
- Who coordinates the response to an incident.

AI can also analyze logs, detect anomalies, and propose fixes. Somebody still needs to define its permissions, verify its actions, and decide which level of autonomy is acceptable.

## Accountability does not mean reviewing every line by hand

Assuming responsibility does not require a person to write or inspect every character manually. Engineering has always used abstractions, libraries, compilers, external services, and automation.

It means there is a traceable chain of decisions. We know what the system was meant to accomplish, which risks were accepted, which evidence supported its release, and who has the authority to change or stop it.

The code may come from a model. Evidence may be produced by automated tools. Even some operational decisions may be delegated to agents within defined boundaries.

What we cannot delegate to a tool is the professional obligation to protect affected people. The ACM and IEEE software engineering code of ethics places the public interest and product quality above individual convenience. A tool does not occupy that role; the people who design, approve, and operate the system do.

## The engineer moves away from the keyboard, not the problem

If AI continues to improve, writing syntax will occupy a much smaller share of the work. That does not make the engineer irrelevant. It changes where they create the most value.

The work shifts toward:

- Framing problems and turning them into clear criteria.
- Designing boundaries, interfaces, and control mechanisms.
- Evaluating alternatives under uncertainty.
- Validating results in proportion to their impact.
- Integrating systems created by different actors.
- Operating products, learning from incidents, and evolving them.
- Explaining and owning important decisions.

Perhaps one person will be able to produce what once required a team. That concentration of capability also concentrates responsibility.

## The question that remains

Artificial intelligence is profoundly changing how we program. Writing code is much faster today than it was a few years ago, and it will probably continue to accelerate.

But software engineering was never simply writing code.

It has always been about understanding ambiguous problems, making decisions under uncertainty, designing systems that survive over time, and assuming responsibility for systems that affect real life.

The real question is therefore not whether artificial intelligence will replace engineers.

It is something else:

**What does it mean to be an engineer when writing code is no longer the main challenge?**

## References

- ACM and IEEE Computer Society, [*Software Engineering Code of Ethics and Professional Practice*](https://www.acm.org/code-of-ethics/software-engineering-code).
- NIST, [*Secure Software Development Framework (SSDF), SP 800-218*](https://csrc.nist.gov/pubs/sp/800/218/final).

---

This piece grew out of a script I prepared while experimenting with AI-assisted audiovisual content. You can [watch the original video on YouTube](https://youtu.be/Dm1pm3ipcDI).
