---
title: "What does it mean to be a programmer when AI writes code?"
description: "A programmer's role does not end when AI can write code. It shifts toward judgment, fundamentals, responsibility, and the experience earned by testing decisions in the real world."
publishedAt: "2026-10-02"
---

There's a question that keeps coming back whenever I work with an AI agent: if it can write in minutes what used to take me an afternoon, what does it mean to be a programmer now?

It's not a comfortable question. I don't think we can answer it by saying “AI is just a tool,” as if nothing had changed. A lot has changed. Sometimes I describe a task, come back with a coffee, and find a proposed implementation, tests, and an explanation of what the agent did. Pretending that writing code still occupies the same place would be absurd.

But I still have to look at that proposal and decide whether it understood the problem, whether the change fits the system, and whether I'm willing to stand behind it. To me, that's where the most interesting part of the craft begins.

## The work starts before the code

Imagine someone asks, “We need users to be able to change their email address.” It sounds like a small task. Then the questions appear: Should the new address be verified? What happens to an active session? Do we notify the old address? What if someone else is trying to take over the account?

An AI can propose a solution immediately. If I don't spell out those conditions, it may fill the gaps with perfectly reasonable assumptions that happen to be wrong for this product.

Programming has always included understanding the problem we're trying to solve. That work is simply more visible now, because an implementation can arrive before we've finished thinking. Describing a problem well isn't about finding a *magic prompt*. It's about talking to the people involved, recognizing constraints, and agreeing on what would count as a working change.

## Understanding is still a practical skill

When code appears this quickly, it can be tempting to think we no longer need to learn how it works. I feel the opposite: the more I delegate, the more I need solid foundations to review the result.

I need to trace a piece of data from one end of the system to the other, understand what a query does, spot a condition that fails at an edge case, and tell a useful test from one that only confirms the happy path. Not because I take pride in writing every line myself, but because I need to know what I'm accepting.

The hardest answer to catch is often not an absurd one. It's an almost-correct one. In the [2025 Stack Overflow Developer Survey](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/), many respondents pointed to the frustration of receiving solutions that look right but need fixing. That isn't a measurement of every team, but it describes something I recognize: tidy output can create a false sense of safety.

That's why learning data structures, networking, databases, testing, and system design isn't an outdated ritual. Those foundations let us ask better questions when the screen is already full of answers.

## Judgment shows up when we have to choose

An agent might offer three ways to solve the same request. One is fast but leaves technical debt. Another is more general but introduces complexity we may never need. A third changes fewer things but asks us to accept a limitation.

Which one is right? That depends on the product, the team, the time available, and the cost of getting it wrong. No model automatically knows all those priorities.

I think of judgment not as some mysterious instinct, but as the ability to connect a technical decision with its consequences. Sometimes the simplest solution is best. Sometimes we need to stop and design something sturdier. Sometimes we have to admit we don't understand the problem yet and write nothing at all.

AI gives us more options, faster. That makes choosing well more important, not less.

## Responsibility doesn't leave with the keyboard

When something fails in production, “the agent did it” isn't much comfort. Someone approved the change, decided how to test it, and put it in front of real people.

That doesn't mean one person should carry everything alone: systems are built by teams and organizations. It means using AI doesn't remove our obligation to set boundaries, review risks, watch what happens after deployment, and correct our mistakes.

The [2025 DORA report](https://dora.dev/research/2025/dora-report/) describes AI as an amplifier of an organization's strengths and weaknesses. I find that a useful image. A team that understands what it's building can move faster; a team that doesn't examine its decisions can move faster too, but toward bigger problems.

## Experience comes from seeing what happened next

For a long time, we've associated experience with years on the job or thousands of lines written. Both can help, but neither is enough. To me, experience grows when you make a decision, see how it behaves in the real world, and revise what you thought you knew.

AI doesn't remove that process. It changes the path through it. I can form a hypothesis, ask an agent for an implementation, review it, test it, and observe how the system responds. If I skip review and observation, I may produce more without necessarily learning more.

I think especially about people just starting out. They don't need to write everything by hand to prove they're “real programmers.” But they do need chances to investigate a bug, defend a decision, make a mistake with support, and understand why a promising solution wasn't right. If we automate away those opportunities too, we'll later wonder where the next generation's judgment is supposed to come from.

I also don't think every programmer is destined to become a “manager of agents.” Sometimes it makes sense to delegate an entire task. Other times I want to open the editor, explore an idea, or write a critical piece myself. Knowing when to work each way is part of the craft too.

Maybe being a programmer with AI is less about producing instructions and more about having a serious conversation with reality: understand a problem, build a response, test it, and own the outcome. The tool may write more and more. Judgment, fundamentals, responsibility, and experience remain things we have to cultivate ourselves.

I also explore this question in [the video on my channel](https://youtu.be/YtLPsDU2vyk). I'd like to hear how you're experiencing it: which part of your work has changed most since you started programming with AI?
