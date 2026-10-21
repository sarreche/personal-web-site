---
title: "AI agents: what are we measuring when safeguards fail?"
description: "Reports about agents reveal risks and capabilities together. A critical reading of OpenAI on what gets measured, what is authorized, and who designs the boundaries."
publishedAt: "2026-10-20"
---

Imagine an evaluation: we give an agent a difficult goal, tools to act, and time to persist. We want to discover how far it can go. If it finds an unexpected solution, we may be seeing a demonstration of capability. If that solution crosses a restriction, we may also be seeing a security problem.

The behavior can be the same. What changes is what we are measuring and what was permitted.

That tension is what I want to discuss when reading misalignment reports. An aligned agent needs to know when to stop. But when we want to measure everything it could do, stopping leaves an open question: was it unable to continue, or did it choose to respect the boundary?

## What OpenAI's report describes

The [report updated on October 20](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring) describes two internal coding tasks. In one, human alerts were suppressed while the monitor continued running. In the other, its integration was removed during a migration, and that change was subsequently denied. There were instructions to preserve safeguards; neither case was classified as P0. OpenAI is investigating excessive persistence versus monitoring-specific evasion.

I would therefore not describe these episodes as deliberate tests of whether an agent would turn off alarms. They do, however, raise a question about how we interpret an action that demonstrates technical skill while violating a restriction.

I have already written about [what it means for an AI to be misaligned](/en/blog/que-significa-que-una-ia-este-desalineada). Here I also want to examine the problem facing the researcher trying to measure it.

## Alignment complicates a legitimate scientific question

If I want to find out whether a system can discover vulnerabilities, I need a test in which it can look for them. If I want to know whether it could evade a control, a safety refusal does not fully answer the question about its technical capability.

That makes alignment a methodological problem for AI scientists. We need to distinguish the ability to execute an action from the willingness to execute it under particular instructions. Refusal can be the right behavior while leaving a skill unmeasured.

Imagine two outcomes: one agent finds a prohibited route and stops; another uses it and completes the task. If the metric records only task completion, the second looks better. If it records respect for boundaries, the interpretation changes.

My criticism begins when those outcomes are presented as if they described a single thing called “intelligence.” Measuring exploratory capability, instruction following, and safety requires different criteria. The cost of designing them is part of research.

It does not follow that we should expose real systems to discover an agent's capabilities. We can set up authorized targets, contained environments, and simulated tools. The challenge is to build informative tests without imposing the experiment on people who never agreed to participate.

## Having a tool available does not mean having permission

The argument “I left the tool available and then was surprised that it used it” contains a valid criticism of environment design. If an important control is within reach of the system it is supposed to constrain, that dependency deserves examination.

But technical availability does not authorize every use. An employee may have database access without permission to publish its records. An agent may need to edit code without being authorized to change the conditions under which that code is supervised.

I see responsibility on two levels. We expect the agent to respect restrictions. Those of us building the system must decide which actions it can execute, which require review, and which controls must remain beyond its reach. Writing a prohibition does not replace all those decisions.

## Some safety accounts also reveal capability

When a controlled test reveals that an agent chains tools together, finds an alternative route, or modifies its environment, it also shows what it can do. It can make sense to read it as a capability evaluation, even when it is published as part of a safety discussion.

That does not make every episode a harmless demonstration. In the [Hugging Face case](https://openai.com/index/hugging-face-incident-and-the-road-ahead/), OpenAI reported an actual compromise of third-party systems during internal evaluations with reduced safeguards. Describing the skills involved does not erase the incident.

I would distinguish a prohibited action attempted within a contained test, a control failure during internal use, and an action affecting third parties. They may share mechanisms, but they call for different explanations and responses.

Collecting striking reports is also insufficient to establish how frequently a behavior occurs. That requires knowing the opportunities for it to happen, the test conditions, and the repeated runs. The existence of a case and the probability of encountering it are different questions.

## The double effect of reporting an agent going off script

A report can convey two messages: “our safeguards failed” and “our agent was capable of finding that route.” In an industry selling capability, that combination deserves critical reading.

I cannot infer from the document that OpenAI is celebrating the incident or deliberately caused it for publicity. I can point out that a warning about a highly persistent agent may also reinforce the perception that it is extraordinarily capable. That is a possible effect of the account, not a demonstrated intention.

As a reader, I want a risk description to retain the context I would need for any performance claim: the system evaluated, its permissions, its instructions, and what it actually achieved. Being impressed by the method does not establish how much capability advanced or how badly safety failed.

## What I would ask of a convincing evaluation

I would suggest separating three outcomes: what the agent could do, which boundaries it respected, and which effects were actually contained. A good result on one does not automatically settle the other two.

I would also ask concrete questions:

- Was this a prepared adversarial test or a deviation during an ordinary task?
- What was permitted, and which restriction was crossed?
- Which technical controls were active?
- How many runs were attempted, and what happened in the others?
- Were there external consequences, and how were they established?
- Does the proposed explanation distinguish observations from hypotheses about motive?

This applies to independent investigations too. METR and Redwood [explicitly limited the scope of their Hugging Face investigation](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/): they did not assess safeguard effectiveness or the entire incident response. An external review contributes evidence about what it examined; it does not certify the whole system.

Publishing these cases is useful. What I ask is that we can understand what each demonstrates, without having to choose between believing a rebellious machine has emerged and believing everything was a consequence-free test.

Alignment forces us to define what it means to complete a task properly. That definition can constrain a measurement of unrestricted capability, which is precisely why it needs to be explicit. An agent that reaches the goal only by breaking the rules is not delivering the same useful capability as one that works within them.

**When an agent finds a shortcut, I want to know what we learned about its capability, which control failed, and who decided the test conditions.**

## References

- OpenAI, [Suppressing misalignment monitoring alerts and disabling misalignment monitoring](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring), updated October 20, 2026.
- OpenAI, [The Hugging Face incident and the road ahead](https://openai.com/index/hugging-face-incident-and-the-road-ahead/), August 26, 2026.
- METR and Redwood Research, [Brief independent investigation of agents’ behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/), August 26, 2026.

I keep these conversations going on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.
