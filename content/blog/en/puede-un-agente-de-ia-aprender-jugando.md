---
title: "Can an AI agent learn through play?"
description: "A paper about agents exploring a simulated world raises questions about learning, memory, and how to test whether an experience leaves something useful behind."
publishedAt: "2026-10-23"
---

We usually ask an agent for something: fix this bug, research this topic, prepare this document. Then we check whether it did what we expected.

The paper [Is this machine playing?](https://machineplaying.org/paper/), by Nathan Cloos and colleagues at MIT, changes the question. It studies Eko agents exploring a simulated island, building and trying activities without a specific assigned task.

That question interests me because it makes us consider how much room we leave for exploration before demanding a result. Also because the word “play” invites us to imagine far more than we can establish.

My reading follows that line: look at the evidence for learning and what we might take from the idea when designing agents, without turning striking behavior into a story about what a machine feels.

## A world is also an interface

The project releases [Clawblox](https://github.com/nacloos/clawblox), an open engine for creating agent worlds. Its protocol supports observation and action through HTTP. The main experiment used 13 agents for 30 hours, with textual observations. Context and the island reset hourly; files persisted.

I think it is worth pausing on the interface. When we see a visual representation, we may imagine the agent perceiving that world as we do. We should ask what information it actually receives and which operations it can perform.

I would do the same when evaluating a business demonstration. Does the agent interpret a screen or receive already structured data? Can it act across the whole system or only through a list of operations? What did the model solve, and what did the environment make possible?

Those questions help us understand the capability we are observing and what we would need to reproduce it elsewhere.

## No task does not mean no direction

There was a curiosity-oriented disposition in `SOUL.md` and an orchestrator asking the agent to continue. The authors also tested a variant with fewer instructions.

To me, that distinction is fundamental. We can leave the activity open while designing conditions that favor certain behavior. Permissions, available information, time, and the way a session continues are all part of the experience.

If I wanted to evaluate exploration, I would examine how much behavior changes when those conditions change. I would also ask what happens in other environments and which criteria distinguish varied activity from repetition decorated with different words.

I would not treat “without a specific goal” as a synonym for absolute autonomy. Many human decisions precede execution, and recognizing them helps us discuss the result more precisely.

## Memory needs a test

The work compares experienced and fresh agents: it finds advantages on several tests, not all. Without changing model weights, editing memories changes performance; removing a false belief can improve it.

That is the part that interests me most. To discuss learning, I would look for a measurable difference in what the system can do afterward. A convincing narrative of its progress would be insufficient.

The distinction between model and system also matters. An agent can rely on instructions, notes, tools, and programs. To decide how to improve it, we need to know where the information changing its behavior resides.

In a workflow, that makes a practical question open to inspection: what do we store after an experience, and how do we establish that it is worth keeping?

I would ask for more than a polished summary. I would want the observation, the conditions under which it occurred, and the test supporting the conclusion. That would let us revisit it when the environment changes.

## Saving a conclusion can also preserve an error

Imagine a hypothetical example beyond the island. An agent tries an integration and receives a permissions error. It writes in its notes that the tool cannot retrieve orders. The next session reads that conclusion and chooses a more complicated alternative.

The problem might be temporary or specific to one account. But the note presents it as a general rule.

To avoid that, I would suggest distinguishing observations, hypotheses, and tested procedures in memory. “This call failed with this account” leaves room to investigate. “The tool does not work” may close the investigation too soon.

I would also attach dates and conditions to procedures and define when to review them. Useful memory needs mechanisms to correct, replace, and discard information. Otherwise, we may accumulate context that leads the agent away from a good solution.

This is an implication I would bring to working with agents; it is not a demonstrated result for every business integration.

## Try things where mistakes are manageable

If I wanted to apply this idea, I would start with a bounded test environment: fictional data, limited permissions, and reversible operations. For example, a copy of an order workflow where the agent can explore cases without affecting real customers.

Before starting, I would set a time and compute budget. Then I would evaluate concrete tasks with and without the materials produced during exploration. I would record quality, errors, and total cost.

In [yesterday's article about the cost of adding AI to a process](/en/blog/cuanto-cuesta-de-verdad-poner-ia-en-un-proceso), I discussed including review and maintenance in the calculation. I would do the same here: exploration consumes resources, and only a subsequent evaluation can tell us whether that spending contributed something useful for our case.

I would also make explicit when exploration ends and execution of a task begins. In production, we need agreement on what the agent should do and when it must stop.

## A question worth leaving open

The paper's title asks whether the machine is playing. I would keep that question mark. Describing behavior and attributing enjoyment are different claims; I would not use this experiment to settle the second.

Nor would I turn it into a recipe guaranteed to improve agents in every context. For a practical decision, I would ask for tests on the tasks that actually matter to us.

What it does leave me with is a useful invitation: consider environments where exploration is possible, learning can be retained, and conclusions can be reviewed. **The question I would bring to the next project is how to establish that exploration produced a useful capability.**

I continue these conversations on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.

## References

- [Nathan Cloos and colleagues: Is this machine playing?](https://machineplaying.org/paper/). Methods, evaluations, and memory interventions; accessed October 23, 2026.
- [Clawblox: environment code and documentation](https://github.com/nacloos/clawblox). Project repository; accessed October 23, 2026.
