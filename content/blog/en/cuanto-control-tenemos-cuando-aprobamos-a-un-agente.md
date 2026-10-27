---
title: "How much control do we have when we approve an agent's work?"
description: "Overseeing an agent takes context, time, and judgment. A paper invites us to examine what the person responsible for its decisions needs to do that job."
publishedAt: "2026-10-26"
---

Imagine an agent finishes a change and asks for approval. It shows you an orderly summary, a list of files, and the checks it ran. There is a button to continue and another to reject.

Formally, the decision is yours. But do you have what you need to make it? Do you know what changed, what was left out, and what evidence supports the summary? Could you explain what would happen if you accepted?

This is a hypothetical example, but the question is concrete. Placing a person at the end of a process requires thinking about the work we are asking them to do.

That is what I took from [AI Agents Push Humans Out of the Loop](https://arxiv.org/html/2608.23642v3), by Margaret Mitchell, Avijit Ghosh, and Samir Passi. Their thesis: current design can impede oversight and erode the capabilities it requires. They propose technical and organizational support for overseers.

## A warning worth reading carefully

This is a position paper, revised in September 2026. It brings together literature and recommendations; it does not present a new experiment establishing inevitable deterioration from using agents.

I would read it as an invitation to evaluate working conditions. If a system depends on someone catching its errors, we need to establish that the person can do so in the context where we use it.

The question changes with the task. Reviewing a draft lets you stop, consult a source, and return tomorrow. Authorizing an operation that modifies data requires understanding its consequences before execution. The same button can request very different decisions.

I find it particularly useful to bring the debate to those situations. To improve a process, I need to know which decision we are delegating, what remains a human responsibility, and how we will evaluate that intervention.

## Returning to the work takes time

In [my experience with agents](/en/blog/mi-experiencia-hasta-ahora-con-los-agentes), I described gradually granting more autonomy and paying more attention to the product. I still see value in focusing on the result while letting a tool handle part of the implementation.

This paper leads me to add a question: when I need to intervene, how do I reconstruct what happened?

Imagine you let a task proceed and returned when an important decision appeared. To review it, you might need to recover the goal, constraints, changes already made, and assumptions introduced during execution.

I would set aside time for that return. A pause in execution could present the current state, pending decisions, and available alternatives. The summary would be an entry point for review, with access to records and materials that let us verify it.

Without that possibility, asking for approval may shift a decision to someone who does not yet have enough context to assess it.

## A comfortable experience still needs evaluation

A 2021 study cited in the paper, [To Trust or to Think](https://arxiv.org/abs/2102.09692), tested interventions requiring more reflection in AI-assisted decisions. With 199 participants, it found less acceptance of incorrect recommendations than with simple explanatory interfaces. The most effective interventions received worse subjective ratings, and benefits varied among participants.

This was a bounded decision-support study, not a test of today's autonomous agents. Still, it raises an interesting tension: the interface we prefer and the one that helps us decide better may differ.

My practical conclusion would be to evaluate both. I want a tool to be pleasant and efficient, but I also want to know whether I can detect a problem when one appears.

Nor would I add obstacles on principle. Each interruption should justify the decision it needs, the information it provides, and why it appears at that moment. If everything requires urgent attention, it becomes harder to know where to focus.

## Design an approval that supports a decision

For a change that could affect others, I would suggest making these questions answerable during review:

- What specific action are we about to authorize, and on which data or systems?
- What has been checked, and what remains an assumption?
- Where can I inspect the evidence without depending on the agent's account?
- What alternatives do I have, including requesting more information or stopping?
- What can we recover if something goes wrong, and which consequences would be irreversible?

Before a bulk record update, for example, I would want to see its scope, a representative sample, and the recovery procedure. Correcting a sentence in a draft would warrant a much lighter check.

I would also define in advance which operations the agent can perform independently. That authorization would have verifiable limits. We could then devote review to decisions requiring judgment, without turning every step into an identical permission request.

## Reviewing needs a place in the workflow

A good interface helps, but I would also examine how the team is organized. Who reviews? With what expertise? How many tasks are they handling? Can they request a pause without it being interpreted as a productivity problem?

If we assign someone responsibility for catching errors, their schedule needs to include that work. They also need authority to question and stop an operation. Responsibility for approval should come with the means to evaluate it.

I would also reserve opportunities to practice and explain the tasks we delegate. I want the team to be able to review a case, understand a discrepancy, and resolve an exception using its own judgment.

I would propose that as a practice to evaluate, adapted to the domain and each person's experience. We cannot assume one recipe preserves every capability or that all AI use weakens them.

## Check that we can still intervene

Before expanding autonomy, I would run a trial in a controlled environment, with known cases and representative errors. I would examine which errors the team detects, what evidence it consults, and whether it can stop or correct the process.

I would measure the combined result: work quality, review time, errors that pass through, and recovery cost. A fast approval alone tells me little about those properties.

To me, that is the most useful contribution of this reading: **if safety depends on human intervention, the ability to intervene must also be part of what we evaluate.**

The goal is to delegate on sound grounds while preserving the conditions that let us take responsibility when needed.

I continue these conversations on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.

## References

- [Mitchell, Ghosh, and Passi: AI Agents Push Humans Out of the Loop, version 3](https://arxiv.org/html/2608.23642v3), September 6, 2026. Position paper; this article develops an interpretation and proposals based on the text.
- [Buçinca, Malaya, and Gajos: To Trust or to Think](https://arxiv.org/abs/2102.09692), 2021. Research on interventions to reduce overreliance on AI recommendations.
