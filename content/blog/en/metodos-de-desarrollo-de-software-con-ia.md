---
title: "Software development methods gaining relevance with AI"
description: "Prompts, vibe coding, specifications, TDD and agents: what still holds up and what needs a closer look when we delegate implementation to AI."
publishedAt: "2026-09-04"
---

There’s a question I find increasingly interesting when we talk about programming with AI: how do we organize the work when we can delegate much of the implementation?

Asking for code is relatively easy. Things get complicated when that code needs to coexist with an existing system, address a real need, and keep working after the demonstration. Familiar questions return: what are we building, what are we leaving out, how will we test it, and who decides whether it’s ready?

Earlier this year, I prepared a video about different ways of developing software with AI. Returning to the script for this article, I found ideas I would keep and claims I would phrase more carefully today. Especially the suggestion that we’re introducing six new methodologies and leaving everything else behind.

I don’t see such a tidy progression. We’re combining decades-old practices with new tools and ways of delegating that we’re still learning to use. I find that combination considerably more interesting than the search for a methodology that replaces all the others.

## Code generation has a history

Software engineering was never just about organizing people to write code. It also addressed understanding problems, coordinating decisions, managing change, and keeping systems running in production. Treating Agile, Scrum, and DevOps as interchangeable ways of typing faster misses much of their purpose.

Nor is this the first instance of automatically generated code. Domain-specific languages and their generators have a long history; they already allowed certain solutions to be expressed at a different level from their implementation code. [Martin Fowler on domain-specific languages](https://martinfowler.com/bliki/DomainSpecificLanguage.html).

What interests me about AI is the ability to work with open-ended requests, discuss alternatives, and revise an implementation within the same exchange. That makes it important to notice which decisions we are delegating and which we are leaving implicit without realizing it.

## Working with prompts: the conversation needs to leave something behind

The simplest example would be asking: “Write a function that reads this CSV and calculates statistics.” Then we inspect the result, correct something, and continue the conversation. We can call that *prompt-driven development*, although I see it as a mode of interaction rather than a complete engineering process.

In the original script, I said prompts couldn’t be verified or serve as documentation. That was too categorical. We can save them, version them, and evaluate the results they produce. They can even contain precise requirements. What we shouldn’t expect is that repeating a sentence guarantees an identical implementation, especially if the model, context, or available tools change.

The problem that concerns me is more ordinary: making important decisions in a conversation and never recording them anywhere else.

Back to the CSV. What happens to an incomplete row? Do we discard it, report it, or stop the import? What does an empty field mean? If we settle those questions in chat and they disappear between twenty change requests, the next person working on the system will have to reconstruct the conversation.

I would want those decisions to end up in the repository, in a specification, examples, or tests. A prompt can start the work without being the only place where its explanation lives.

## Vibe coding: exploring an idea without mistaking that for validation

There is something appealing about describing an application, watching it appear, and adjusting whatever feels wrong. That ease has real value when exploring an idea. We can discover that a screen is unnecessary or that a proposed flow is awkward before investing too much in it.

But the term deserves some precision. In Simon Willison’s distinction, *vibe coding* involves paying no attention to the generated code. Using AI while carefully reviewing the implementation is a different way of working. Not all AI-assisted development belongs in the same category. [Agentic Engineering Patterns](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/).

Imagine a booking application. The demo lets you select a time, confirm it, and see a success message. So far, so good. But we still don’t know what happens when two people book the same slot simultaneously, or when someone tries to modify another user’s booking.

That doesn’t make the prototype useless. It tells us what we have: we’ve checked part of the experience, while other questions remain open. The risk comes when we treat the demo as though it has already answered everything.

## Specifications: making decisions visible

*Spec-driven development* gives more weight to describing what we want before generating the implementation. Current tools help organize that process; GitHub Spec Kit, for example, structures a workflow around a specification, a plan, tasks, and implementation. [Spec Kit documentation](https://github.github.com/spec-kit/).

The name interests me less than the conversation it requires.

“I want a booking application” leaves many decisions open. A more useful description might establish that a slot allows only one confirmed booking, cancellations have a deadline, and users can access only their own data. It should also describe what happens when an operation fails.

We don’t need fifty pages for every change. A small feature may only require a few rules and examples. And if implementation reveals that we misunderstood the problem, we need to be able to revise that description.

A natural-language specification can still be ambiguous. It doesn’t prove the code is correct either. Its value is in providing something concrete to discuss and compare with the result, instead of depending on the model having interpreted our intention exactly as we hoped.

## TDD: tests help direct the work, but they also need review

Test-Driven Development used tests to guide design long before today’s assistants. Its cycle includes writing a test that fails because the required behavior is missing, implementing enough to pass it, and refactoring. That last part matters: accumulating code that passes tests isn’t enough to preserve good design. [An explanation of TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html).

With AI, we can divide that work in different ways. A person might define the important cases and ask an agent to implement them. They could also ask it to propose tests, discuss those tests, and only then proceed. The question of what we’re actually checking must remain part of the process.

In the booking example, a test could verify that two concurrent requests cannot both confirm the same slot. That gives a more concrete signal than asking the model to “avoid concurrency errors” and trusting its final explanation.

However, if the agent misunderstands the rule and writes both the test and implementation from that interpretation, they can agree and still be wrong. A test suite also doesn’t automatically cover security, performance, accessibility, or every possible failure.

That’s another sentence I would change from the script: tests aren’t the whole truth of a system. They provide evidence about the cases we chose to check. I like using them to narrow the gap between what we request and what we observe, without treating a green pipeline as permission to stop thinking.

## Working with agents doesn’t require an organization chart

Agent-based development may bring to mind a virtual architect, programmer, and tester passing tasks between themselves. That’s possible, but it isn’t what defines the approach. A single agent can inspect a project, use tools, and continue based on what it finds. Anthropic’s guide to agentic systems explains the distinction between a fixed workflow and an agent choosing its next steps. [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).

For me, the practical difference is how much of the process we delegate. Instead of requesting an isolated function, we can assign a bounded change and expect investigation of the existing code, a proposed solution, and verification results.

The way we assign that work becomes important. “Fix bookings” is an enormous request. “Investigate why duplicate bookings are possible, propose a correction, and don’t change the data schema without checking with me” defines both the objective and the boundaries more clearly.

We can add agents when independent work or a particular review justifies it. But adding them also requires coordinating changes, resolving disagreements, and checking the evidence each one produced. I wouldn’t assume that giving one a tester role creates an independent validation process.

What I want back includes the change, the tests performed, the limitations encountered, and the decisions still pending. That lets me review the work without relying solely on a “done” message.

## Intent is a starting point, not a finished system

*Intent-driven development* is a label I would use cautiously. It can describe an approach organized around objectives, but I wouldn’t present it as a single, settled methodology shared across the industry.

“I want to reduce the number of bookings left unconfirmed” is a good starting point. It tells us which problem matters and leaves room to explore different solutions. Perhaps a reminder is missing. Perhaps the payment flow is confusing. Perhaps we’re asking for too much information.

We still need to understand what’s happening, choose an intervention, and decide how to measure whether it improves anything. If we jump straight from objective to code, AI can also build a very polished solution to the wrong problem.

That’s why I would no longer use the script’s example of asking for a “secure” payments backend and leaving the rest to AI. Words such as security, scale, or compliance open questions; they don’t resolve them. Somebody needs to turn them into concrete decisions and checks.

## How these approaches fit together in real work

I don’t feel we need to choose one label and pledge allegiance to it. Within a single feature, we can discuss the problem, explore an idea through a prototype, record the rules, write tests, and delegate part of the implementation to an agent.

For the booking application, I would first try to understand why duplicates occur. Then I would make the rule we want to preserve explicit, prepare a way to reproduce the failure, and assign a bounded correction. I would review the change and its behavior after deployment. If previously overlooked cases emerge, I would update the tests and the behavior description too.

That process doesn’t lose its value because AI writes much of the code. I think it becomes more necessary when we can produce changes faster than we can understand their consequences.

Returning to this topic, I’m left with an idea that is less spectacular than the original script’s framing, but more useful in my work: specifying, testing, reviewing, and learning from real use still make a great deal of sense. We have additional implementation capacity now, and we need to learn how to use it without letting go of those practices.

I want to be able to delegate more and more. I also want to understand what I’m accepting when I say something is ready. To me, that tension is a substantial part of the software engineering we need to do today.

If you’d like to see the reflection that prompted this article, here is [the video on YouTube](https://youtu.be/fVzUN4-WVuU). I recorded it this year; this version revisits the subject and refines parts of the original framing.
