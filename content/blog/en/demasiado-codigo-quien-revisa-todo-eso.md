---
title: "Too much code: who reviews all of it?"
description: "AI made code cheap to generate, but understanding, reviewing, and maintaining it still costs time. The bottleneck simply moved."
publishedAt: "2026-09-15"
---

Imagine a factory where, from one day to the next, a machine begins producing ten times faster.

At first, everybody celebrates. Then the parts pile up in front of quality control, fill the corridor, and cannot be shipped because the next stage is still moving at its usual speed.

The machine improved.

The factory did not necessarily improve with it.

I think something similar is happening in software development. Artificial intelligence has made writing code much faster and cheaper. An agent can take an idea, inspect the repository, modify several files, and deliver a pull request while we do something else.

That is an extraordinary capability. It also leaves us with a much less glamorous question:

**Who reviews all that code?**

Generating is not the same as understanding. And writing code has never been the same as delivering software.

## The studies seem to contradict one another

Looking for a simple answer in the data does not help much either.

GitHub ran a controlled trial with more than two hundred experienced developers. On a bounded task, participants using Copilot were 53.2% more likely to pass all the tests. Their code also showed small but statistically significant improvements in readability, reliability, maintainability, and conciseness.

That is a positive result, and it rules out one overly convenient claim: AI-generated code is not necessarily bad. But it is also [research by the product's vendor](https://github.blog/news-insights/research/does-github-copilot-improve-code-quality-heres-what-the-data-says/), conducted on a specific API task rather than across years of a real product's evolution.

The [2024 DORA report](https://dora.dev/research/2024/dora-report/) found another interesting combination. Greater AI adoption was associated with higher individual productivity, better flow, stronger documentation, and better perceived code quality. At the same time, it was associated with lower stability and delivery performance.

Then there is METR. In an early-2025 experiment, experienced maintainers worked on repositories they knew well. With the AI tools available at the time, they took 19% longer even though they believed they had been faster. Its [2026 update](https://metr.org/blog/2026-02-24-uplift-update/) acknowledges that repeating the measurement has become difficult: some participants no longer wanted to work without AI, they selected which tasks to submit, and they used several agents at once. METR considers it likely that current tools help more, but does not claim to know by how much.

So does AI make developers faster or slower?

The unspectacular answer is that it depends on the person, the task, the repository, and, above all, which part of the process we measure.

## A finished file is not finished software

An agent can produce a feature in minutes that looks complete. The names are reasonable, the diff is tidy, the documentation is present, and every test appears green.

But before the change reaches a user, a few questions remain:

- Does it solve the right problem?
- Did it understand the business rules, or fill the gaps with reasonable but false assumptions?
- Did it duplicate a capability that already existed somewhere else?
- Do the tests cover the important behavior, or merely confirm the interpretation used to generate the code?
- What happens to old data and unusual cases?
- How does it affect security, performance, operations, and cost?
- Who will understand it when it fails six months from now?

These questions are not an argument against AI. They are software engineering. They existed before models and will continue to exist even if an agent can write an entire application.

What changed is the speed at which work can reach this stage.

Writing the change used to consume a substantial portion of the time and act as a natural limit. If every feature required days, fewer features were waiting for review. Today, we can open five, ten, or fifty fronts without multiplying the number of people who can understand them carefully.

The bottleneck did not disappear. It moved.

## When code is cheap, understanding becomes expensive

For a long time, we used lines of code, commits, and pull requests as signs of activity. They were never particularly good metrics. With agents, they can become absurd.

A team can double the amount of code generated without delivering twice the value. It may even create more surface area to maintain, more dependencies, more inconsistencies, and more decisions nobody remembers making.

There is also a psychological effect I recognize in my own work.

When I write a solution line by line, the process forces me to walk through some of its decisions. That does not guarantee I understand it well, but there is friction: I remember why I added a condition, which alternative I tried, and where I hesitated.

When an agent hands me five hundred tidy lines in thirty seconds, it is easy to mistake **visual familiarity for understanding**. Everything looks right. The names seem good. There are comments. The tests pass. My brain starts gliding through the diff instead of questioning it.

Serious review, however, did not become ten times cheaper. It still requires reconstructing intent, following flows, looking for side effects, and thinking about everything outside the happy path.

The new scarcity may not be the ability to write. It may be the ability to pay attention.

## We may accelerate the wrong station

Suppose a team takes two weeks from receiving a need to putting the feature into production.

Perhaps writing the code takes two days. The rest goes into understanding the request, clarifying rules, obtaining permissions, waiting for a decision, reviewing, testing, coordinating with another team, and discovering an exception nobody mentioned.

If an agent reduces those two days to two hours, the productivity demonstration looks remarkable. Yet the total time may still be close to two weeks.

Worse, because we can now produce many more proposed changes, we risk saturating review, integration, and testing. We accelerate one station and congest everything that follows.

This is not limited to programming. A tool's productivity is not automatically an organization's productivity. A writer can generate twenty drafts, but somebody must decide which ones are worth publishing. An analyst can produce one hundred reports, but another person has to read and act on them. Abundant output can create scarce attention.

In software, that scarcity has cumulative consequences. The code we accept today stays with us. It must be updated, operated, protected, and explained to the next person who touches the system.

## The problem with tests that agree with themselves

A common response is: “It does not matter how much code the agent generates if it also generates the tests.”

Tests are essential, but they do not solve the problem by themselves.

If the same reasoning interprets the requirement, implements the solution, and writes the tests, it can make a perfectly consistent mistake. The code does exactly what the tests expect. The tests verify exactly what the code does. And both misunderstood the business need.

It is like a student writing the question, answering it, and then grading the result.

That is why generation and verification should be separated. Important criteria should exist before the code whenever possible. We also need human review, static analysis, integration tests, representative data, and, in some cases, another model with an explicitly critical role.

Using a second agent does not make validation independent by magic. Two models can share the same blind spots. But assigning different roles, distinct sources, and external criteria reduces the chance that the whole system simply congratulates itself.

## What should we measure now?

If producing code is no longer scarce, we need to look at the complete journey.

I would want to know how long it takes from understanding a need to seeing it work in production. How long changes wait for review. How often a release causes an incident or requires rework. How many defects reach users. How quickly the service recovers and, above all, whether the feature improved the outcome it was built for.

I would also measure the inventory of work:

- How many changes are open at once?
- How many were generated but nobody has the capacity to review?
- How much time do they spend waiting instead of moving?
- How much new code replaces something old, and how much is added forever?

And I would add a question that is hard to turn into a dashboard:

**Who understands this change and can take responsibility if it stops working tomorrow?**

If the answer is “the agent,” we do not have an answer yet.

## How to use the speed without losing control

The solution is not to make AI artificially slow. It is to redesign the factory around a much faster machine.

### Work in small changes

The fact that an agent can produce a great deal does not mean it should deliver everything in one block. A bounded change is easier to understand, test, integrate, and reverse. It also lets us correct direction before thousands of lines accumulate on top of a false assumption.

### Invest in the specification first

If we do not know which problem we want to solve, AI can help us build the wrong solution at extraordinary speed. Exploring requirements, constraints, and acceptance criteria may produce more value than asking for code five minutes earlier.

### Design verification separately

Important tests, reviews, and controls should not be decorations generated at the end. They need to express real risks and come from different perspectives. The more autonomous generation becomes, the more deliberate the verification system must be.

### Limit work in progress

If a team can carefully review three changes, opening twenty does not create productivity. It creates a queue. The agent should take on work according to the entire system's capacity, not its own capacity to produce.

### Reward simplification

Sometimes an agent's best result is not writing a thousand new lines. It may be finding a way to remove two thousand, reuse an existing capability, or demonstrate that the feature is unnecessary. When generating becomes easy, saying “this should not exist” becomes an especially valuable contribution.

### Preserve human and team ownership

One person does not need to write every line. Somebody does need to understand the intent, accept the risk, and sustain the result over time. Authorship can be automated. Responsibility does not disappear as easily.

## More code is no longer a victory

Artificial intelligence can improve programming. There are contexts where it increases quality, saves an enormous amount of time, and enables small teams to build things that used to be beyond their reach.

There are also situations where it adds work, creates an illusion of speed, or shifts the effort into review, testing, and integration.

We do not need to choose between celebrating AI and distrusting it. We need to stop looking only at the fast machine and start observing the whole factory.

When writing code becomes cheap, understanding it becomes more valuable. When producing changes is easy, choosing which ones deserve to reach production becomes more important. And when an agent can work for hours without tiring, responsibility for what it leaves running still belongs to someone.

The real leap will not come from the team that generates the most code. It will come from the team that turns this capability into useful, stable, understandable software without filling the future with work nobody knows how to maintain.

In [this video](https://youtu.be/FvHs2juDTg4), I develop the question and connect it to another increasingly visible problem: AI can produce much faster than an organization can decide, review, and learn.
