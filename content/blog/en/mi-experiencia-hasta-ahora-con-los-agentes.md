---
title: "My experience with AI agents so far"
description: "What I learned using agents to build software: models, uncertainty, cost, code, human oversight, and the importance of a clear process."
publishedAt: "2026-08-29"
---

This is not a definitive guide to artificial intelligence agents.

It is a summary of my experience so far, especially using them to generate software.

I began by paying close attention to every line of code, comparing models, and trying to control every step. Over time, my focus moved elsewhere: toward the product, the process, and the ability to recognize whether the result actually solves the problem.

That shift does not mean trusting AI blindly. It means learning to supervise it differently.

## The model matters less than I expected

When I started, choosing the right model seemed essential.

OpenAI, Anthropic, Google, Microsoft, AI editors, chats, and autonomous agents: every alternative came with benchmarks and claims of being the smartest.

In my everyday use, differences among the leading options began to feel less decisive than I expected. Not because every model is identical or performs equally on every task. Some reason better about certain problems, while others are faster, follow particular instructions more reliably, or integrate differently.

For many standard projects, however, the outcome depends heavily on the complete system:

- How much context it can inspect.
- Which tools it can use.
- How it integrates with the repository.
- How quickly it lets me test and correct.
- How it presents changes.
- Which permissions and confirmations it uses.

I often no longer feel that I am choosing only a model. I am choosing a working experience.

The interface, integration, and speed of the feedback loop can matter more than a small difference on a performance table.

## Habit is part of the tool too

Changing platforms is not just about paying for another subscription.

It means migrating rules, configurations, and workflows. It also requires getting used to how another system interprets instructions, explains decisions, and modifies files.

Over time, we build a kind of coordination with the tool. We learn which information it needs, when a task should be divided, and how to request a correction.

That switching friction helps explain why brand and ecosystem matter. Stability, privacy, and policies governing code and data matter too.

The model scoring one point higher on a benchmark does not always win. The environment in which someone works with greater trust and less friction may win instead.

## We need to lose our fear of nondeterminism

One of my first discomforts was accepting that an agent does not respond like traditional software.

I can provide clear instructions and still receive something different from what I imagined. I can repeat a task and get another approach. Sometimes it solves a complex problem brilliantly and then misses a simple detail.

At first, this creates mistrust. We want to specify everything to recover a feeling of control.

Working with people is not deterministic either. In an office, we explain objectives, share context, review results, and correct interpretations. We do not expect another person to execute our words like a mathematical function.

The comparison does not mean an agent is a person. It means coordinating work begins to resemble writing exact commands less and directing a process with variable outcomes more.

Losing fear does not mean ignoring errors. It means designing a way to detect and correct them.

## The gap between free and paid access concerns me

Another strong impression was the distance between a limited experience and sustained access to more capable models and agents.

A subscription does not buy only better answers. It may provide more context, more iterations, longer tasks, greater speed, and tools capable of completing an entire workflow.

When one person can delegate research, programming, documentation, and review for many hours, the advantage begins to compound.

This raises an uncomfortable question: if these tools become basic infrastructure for working, learning, and competing, what happens to people who cannot afford them?

Prices and plans change too quickly for a current number to become a permanent rule. The concern remains valid, however. Unequal access to artificial intellectual capacity may become a new source of productive inequality.

## I stopped watching every line and started watching the product

At first, I wanted to follow the agent step by step.

I read every change and tried to maintain detailed control over how the code should look. That can be very useful when the objective is learning programming or when a change affects a critical area.

In my experience, however, focusing too early on implementation could pull me away from the product.

Over time, I became better at explaining what I wanted to achieve, testing behavior, and evaluating the outcome. The clearer the problem became, the less I needed to dictate how every line should be written.

That does not make code irrelevant.

Code still matters for security, maintainability, performance, and system evolution. The difference is that I do not always need to review all of it personally the moment it is generated. I can request tests, validation, and focused reviews. I can also use another agent as an auditor to search for specific problems.

Review should be proportional to risk.

A reversible visual change does not deserve the same controls as authentication, payments, personal data, or a database migration.

## Not knowing how to program does not remove responsibility

An agent can allow someone without technical experience to produce a functional application. That is extraordinary.

But being able to generate software does not mean everything generated is correct, secure, or sustainable.

If I cannot read code, I can still test the interface, verify flows, describe errors, and compare behavior with requirements. I can also request explanations, automated tests, and audits.

What I cannot do is assume an application is finished merely because it looks good and compiles.

AI lowers the barrier to building. It does not eliminate validation or responsibility for what we publish.

## The human remains in the loop

The most useful way I have found to work resembles a human-in-the-loop cycle:

```text
person defines the objective
        ↓
agent proposes and executes
        ↓
person tests and evaluates
        ↓
agent corrects
        ↺
```

In practice:

1. **I define the outcome.** I explain which problem I want to solve, for whom, and under which constraints.
2. **The agent proposes.** It generates code, changes files, or designs a solution.
3. **I test the behavior.** I use the product, observe errors, and check the agreed criteria.
4. **I give feedback.** I describe the difference between the expected and actual result.
5. **We verify.** We run tests, builds, reviews, and controls proportional to risk.

I do not need to intervene in every token or approve every line. I need to appear at the points where a wrong interpretation could change the outcome or create a meaningful consequence.

## Process is worth more than a brilliant prompt

My greatest lesson so far was not discovering a magical phrase.

It was confirming that a clear process works.

When the objective is poorly defined, an agent can move very quickly in the wrong direction. When context, boundaries, and success criteria are documented, quality improves significantly.

A good process may include:

- A concrete product description.
- Repository rules.
- Acceptance criteria.
- Verification steps.
- Actions requiring confirmation.
- Limits on which files or systems may be modified.
- A clear definition of completion.

If I do not know how to document this, the agent itself can help me formulate it. It can ask questions, propose a structure, and turn informal decisions into reusable instructions.

The key is not confusing that assistance with final authority. The agent can design the process with me; I still decide which process I want.

## Grant autonomy gradually

My trust in agents did not appear all at once.

At first, I watched almost every move. After seeing results, learning common failure patterns, and building controls, I began delegating longer tasks.

That progression seems healthier than choosing between two extremes: controlling every character or handing over everything and waiting for magic.

Autonomy can grow with evidence:

- Begin with small, reversible tasks.
- Move to complete changes with review.
- Then allow longer workflows with automated controls.
- Always require confirmation for sensitive or difficult-to-reverse actions.

Trust does not mean believing the agent will never fail. It means knowing what it can do, how to check it, and what happens when it makes a mistake.

## My relationship with code changed

I used to think about development primarily as the act of writing code.

Agents made me pay more attention to defining problems, communicating intent, designing boundaries, testing outcomes, and organizing work.

Code did not disappear. My position in relation to it changed.

I can use it as learning material, inspect it when risk demands it, or delegate part of its review to specialized tools. But my contribution does not necessarily consist of personally writing every line.

It consists of ensuring that the system being built makes sense.

So far, that is my most important conclusion: agents do not eliminate human work. They shift part of the effort from execution toward direction, evaluation, and accountability.

Learning to occupy that role well will probably matter more than finding the perfect model.

---

This article summarizes an early stage of my experience building software with agents. My conclusions will surely continue changing along with the tools. You can [watch the original video on YouTube](https://youtu.be/ox5kf_AkBQ8).
