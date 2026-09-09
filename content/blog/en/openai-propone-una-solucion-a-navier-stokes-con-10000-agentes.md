---
title: "OpenAI proposes a Navier–Stokes solution using 10,000 agents"
description: "What OpenAI's mathematical proposal claims, how its multi-agent organization worked, and why independent review still matters."
publishedAt: "2026-09-10"
---

One of mathematics' most difficult problems has spent nearly a century asking a question that initially sounds quite simple: if a fluid begins moving smoothly, can it reach a point where its velocity becomes mathematically uncontrollable?

On September 8, 2026, OpenAI published a proposed answer.

The news would already be enormous because of the problem involved. But it contains a second story: according to the company, the work did not emerge from one brilliant conversation with a single model. Roughly **10,000 concurrent agents** participated, organized into groups that tested different paths, shared findings, and worked for almost four days.

So there are two questions worth separating.

The first is whether the proposal truly solves the Navier–Stokes problem.

The second is whether we have just seen a new form of research: not an isolated artificial intelligence answering a question, but an entire artificial organization exploring a scientific problem.

Both are fascinating. Neither deserves to have its nuances skipped.

## What the Navier–Stokes equations describe

Navier–Stokes is the name given to a family of equations that attempts to describe how fluids move.

We are talking about water around a ship, air moving over an aircraft wing, blood flowing through an artery, and currents in the atmosphere. Instead of tracking every molecule individually, the equations treat the fluid as a continuous medium and describe how its velocity changes at each point in space and time.

The balance includes acceleration, pressure, external forces, and viscosity—the tendency of a real fluid to smooth out sharp differences in velocity.

It also contains a decisive difficulty. A fluid transports its own motion. Velocity changes velocity, allowing structures at different scales to stretch, interact, and concentrate in extraordinarily complex ways.

We understand the behavior much better in two dimensions. In three dimensions, vortices can stretch and amplify. That is where the great problem lives.

## The million-dollar question

Since Jean Leray's work in 1934, we have known that global solutions exist in a weaker mathematical sense and with finite energy. What remained open was whether a solution beginning in a perfectly smooth state must remain smooth forever in three dimensions.

Perhaps viscosity always dominates and prevents any mathematical catastrophe.

Or perhaps the motion itself can concentrate velocity or vorticity into an increasingly small region until it produces a singularity in finite time.

In this context, a singularity is not necessarily a literal explosion inside a glass of water. It means that some mathematical quantity grows without bound and the smooth solution can no longer continue as before.

In 2000, the Clay Mathematics Institute included this question among its seven Millennium Prize Problems, each associated with a one-million-dollar prize.

The official formulation allows the problem to be settled through more than one path. One may prove that smooth solutions always exist, or construct a counterexample allowed by the statement: smooth initial data and a smooth external force that nevertheless produce a singularity.

This is essential for understanding what OpenAI presented.

## What OpenAI claims to have proved

In its [official publication](https://openai.com/index/navier-stokes-solution/), OpenAI says its system produced an analytical proof and a Lean formalization of a very specific result.

The fluid begins at rest. It then receives a smooth external force. Total energy remains finite, but velocity grows without bound in an increasingly small region and reaches a singularity in finite time.

According to the company, this establishes statements C and D in the official formulation of the Millennium Prize Problem.

Precision matters. The proposal does not say that every everyday flow will blow up, nor does it settle the unforced case. It uses a force, but that force must remain smooth. Introducing an infinite push from the outside and then presenting the resulting singularity as a discovery would not be valid.

The challenge is to construct motion in which the terms of the equation grow while canceling one another so precisely that the final external force remains completely regular.

## The central image: a vortex becoming thinner

The construction is organized around a vortex: a region of fluid that spins, spirals inward, and stretches like a thread.

As the singular time approaches, the core becomes thinner. Rotation and axial motion increase while the volume in which they occur shrinks.

This leads to an idea that initially feels counterintuitive: **velocity can grow without bound while total energy remains bounded**.

Imagine a spike drawn on a graph. At each step it becomes taller but also much narrower. Its height can approach infinity while the total area underneath remains finite.

Something similar occurs in the proposal. Maximum velocity increases inside a region whose volume decreases even faster. Because energy depends on integrating the square of velocity over the entire space, enormous velocity in a sufficiently small location does not by itself force total energy to diverge.

The analogy helps us picture the idea. It does not replace a 166-page proof.

## The difficult part is keeping the force smooth

One could invent almost any fluid motion and then calculate the external force required to sustain it. The problem appears if that force also becomes infinite. In that case, the fluid dynamics did not create the singularity; we merely concealed it inside the push.

The base vortex works in the central region, but connecting it with a calm exterior produces an imbalance in a ring-shaped area. Without a correction, the force needed there would lose its smoothness.

The proposal introduces localized oscillatory pulses. We can picture them as small, carefully oriented ripples. Although each one rises and falls, their nonlinear interaction produces an average effect on the background flow.

Those pulses transport the missing momentum and cancel the dangerous part of the imbalance. Successive corrections then reduce the remaining errors, order by order, until the residual can act as the smooth external force allowed by the problem.

Without equations: the construction attempts to make the fluid's own motion produce the balance it needs instead of demanding an impossible force from outside.

If every step survives scrutiny, the result fits one of the paths expressly accepted by the problem statement.

## A Lean proof does not close the discussion by itself

OpenAI also released a formalization in Lean, a proof assistant that checks whether each step follows from previous definitions and results inside the formal system.

This is considerably stronger than providing only a natural-language explanation. It makes dependencies, definitions, and logical steps inspectable with a precision that is difficult to maintain by hand across such a long construction.

But Lean does not by itself certify that the historical problem is closed.

Reviewers still need to confirm that the formalization represents exactly the relevant statement, that its definitions capture every required condition, and that no subtle difference exists between the formal theorem and the original problem. Then comes review by specialists and, eventually, acceptance by the mathematical community.

OpenAI says the result resolves statements C and D, but it also says it does not intend to claim the Millennium Prize. That is why I prefer to describe it today as a **proposed solution accompanied by a formal proof**, not as a chapter that has definitively ended.

That caution does not diminish its importance. It is part of how mathematics works.

## The model was not Astra

Another detail can easily disappear in the headlines.

The proposal was not primarily generated by GPT-6 Astra. OpenAI says it used an internal model still in training and “significantly more capable” than Astra.

Astra appeared later. According to the publication, it spent another 17 hours formalizing and verifying the result in Lean.

The distinction matters because we are seeing two kinds of work. One system explores, invents, and combines mathematical paths. Another turns the result into a formal structure that can be checked with automated tools.

This is not simply a model giving a better answer to a question. It is a process with stages, distinct functions, and mechanisms for verification.

## How 10,000 agents work on the same problem

The experiment began on September 1. OpenAI wanted to evaluate its internal model on the Millennium Prize Problems and several related questions.

Instead of giving one enormous instruction to a single agent, it divided the work.

Different groups received different versions of the problem. Some tried to prove the existence of smooth solutions. Others searched for a counterexample. Agents also worked on neighboring problems that might provide useful ideas.

One such stepping stone was the regularity problem for the Euler equations, which resemble Navier–Stokes without the viscosity term. Nearly one hundred agents spent approximately 50 hours developing a proposal for that case.

When the path produced something promising, OpenAI shifted resources toward Navier–Stokes and shared the findings with new groups. Codex was used to consolidate ideas from different teams and inject the most useful results back into other lines of work.

The group that eventually produced the proposal grew to involve roughly 10,000 simultaneous agents. The company says they reached the result about 88 hours after the effort began.

During the Navier–Stokes work alone, those agents exchanged 2.7 million messages and produced approximately 130 billion output tokens.

These are figures reported by OpenAI about an internal infrastructure. We cannot fully reconstruct the experiment from outside. Even so, they reveal a scale of work that is difficult to ignore.

## The unit of intelligence is beginning to change

The part that interests me most may not be the existence of 10,000 agents. The number is impressive, but quantity alone solves nothing.

Ten thousand agents repeating the same mistake merely produce a very expensive version of the same mistake.

The decisive element was the organization: dividing the problem, creating diversity of approaches, moving resources toward promising paths, preserving partial findings, exchanging knowledge, and verifying the final construction.

This looks less like chatting with a model and more like directing a temporary research institute.

The unit of work is no longer only the model. It also includes the architecture that decides:

- which questions each group receives;
- which tools it may use;
- when information is shared;
- how useful results are selected;
- when a path is abandoned;
- how the final proposal is checked.

We are seeing something similar in software development. A capable model matters, but the system organizing its work may matter just as much.

## They did not begin from zero

Decades of human mathematics stand behind any result of this kind.

The agents worked with definitions, theorems, techniques, formal libraries, and questions created by people. Mathematicians and researchers selected what to evaluate, designed the system, supervised the process, and prepared the publication.

OpenAI also explains that the project began after hearing rumors related to work by Levent Alpöge and Tristan Buckmaster on the Euler equations. After contacting them, the company determined that their result was different and acknowledged their priority on the forced Euler case.

This does not diminish the potential achievement. It places it inside the actual process of science: a cumulative conversation in which ideas have histories, authors, and contexts.

Saying “AI solved Navier–Stokes” erases both the human organization and the mathematical tradition that made the attempt possible.

## What would truly be historic

If the proposal survives independent review, it would be an extraordinary mathematical result.

Even if reviewers find a repairable error or a deeper difficulty, however, the experiment has already left a signal.

Thousands of agents were able to explore in parallel, specialize, fail along different paths, preserve partial ideas, and assemble them into an extended construction that was then transferred into a formal proof assistant.

Perhaps the next generation of discoveries will not come from asking a superintelligence one question once. It may come from building artificial communities of researchers, critics, coordinators, and verifiers working alongside human scientists.

That opens new questions. How do we audit research produced at this scale? How do we attribute contributions? How do we prevent an incorrect idea from spreading among thousands of agents? Who takes responsibility when an entire artificial organization delivers a conclusion?

The challenge is no longer only to create a model that reasons better. It is also to learn how to organize many intelligences without losing rigor, context, or accountability.

So, did OpenAI solve Navier–Stokes?

Today I would say it presented a concrete, technically ambitious proposal accompanied by an inspectable formalization. The company claims it establishes a finite-time velocity singularity with bounded energy and a smooth external force. Mathematics must now do what it always does with an important proof: review it, attack it, and decide whether every piece holds.

While that happens, we can already pay attention to the second story. We did not see only an AI answering a difficult question. We saw a trial run of a scientific organization made up of thousands of agents.

If the proof is confirmed, we will be looking at a milestone in both mathematics and artificial intelligence. If it needs correction, we will still have a demonstration of where AI-assisted research may be heading.

You can follow the full explanation and tell me what impresses you most—the mathematical proposal, the Lean proof, or the multi-agent scale—in [the original YouTube video](https://youtu.be/1xoghaOmnIs).
