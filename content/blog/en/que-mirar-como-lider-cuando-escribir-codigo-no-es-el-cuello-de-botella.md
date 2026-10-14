---
title: "What should a leader watch when writing code is no longer the bottleneck?"
description: "More code doesn't guarantee better delivery. Decisions about review, shared understanding, priorities, and team capacity when AI accelerates implementation."
publishedAt: "2026-10-14"
---

Imagine a progress meeting where the team shows more activity than ever. There are new changes, features being demonstrated, and agents working in parallel. It feels good until someone asks what reached the people using the product and what improved for them.

Then the outstanding work appears: this change awaits review, that one hasn't been integrated, another needs a decision. The team produced a lot. It's still hard to tell how far it moved forward.

I'm interested in looking at this from the position of someone leading the team. I've already written about [the productivity paradox](https://sarreche.vercel.app/en/blog/la-paradoja-de-la-productividad-quien-se-queda-con-el-tiempo) and [who reviews all the code we generate](https://sarreche.vercel.app/en/blog/demasiado-codigo-quien-revisa-todo-eso). Today the question is which decisions to make when that problem appears in your team.

## What to measure before celebrating

Writing code has never guaranteed delivering value. Before AI, we also built the wrong solutions, accumulated debt, and confused activity with progress. Rapid generation makes it easier to accumulate those decisions before understanding their consequences.

The [working paper by Fiona Chen and James Stratton](https://fion.ac/jellyfish.pdf), using data from 718 firms through March 2026, estimates 30% more lines and 49% longer submission-to-merge time after agent adoption, without a statistically significant rise in resolved tasks. It's observational: that interval includes waiting, and the finding neither proves zero benefit nor directly measures customer value.

So if a review queue grows, I'd examine what each change is waiting for before looking for someone to blame. It might need an available reviewer, a product decision, a test, or information to make sense of it. Each cause calls for a different response.

## Review needs a place in the plan

If someone already has a full week of development assigned and must also review everything their teammates and agents produce, the plan is already in trouble. Review has become invisible work to squeeze between other tasks or do after hours.

As a leader, I'd allocate explicit capacity to it. I'd also limit open changes according to what the team can evaluate and integrate. If a tool can start ten tasks but we can thoughtfully finish two, opening all ten may make delivery worse.

That doesn't mean putting every decision in the hands of the most experienced person. That person can help establish criteria, review alongside colleagues, and explain which risks they're considering. If problems always reach them at the end, exhausted and facing a deadline, we also lose a chance to develop people who could share that responsibility.

Review capacity can be developed too.

## Understand enough to maintain it

I don't expect every team member to memorize the repository. But I'd want important changes to have an owner and someone else who can explain the problem they solve, the decisions behind them, and where to look if they fail.

Automatically generated documentation can help. Having it doesn't establish that anyone has read it, understood it, or checked it against the system. A short conversation about a difficult decision can reveal more than many pages of description.

I'd also pay attention to the size of changes. A focused proposal lets us discuss an assumption before it becomes an entire architecture. When a change takes hours just to reconstruct its intention, it's worth asking whether it arrived too large or too late in the conversation.

Ultimately, I'm trying to preserve something practical: the team's confidence to change what it builds.

## Verification should reflect the risk

I wouldn't require the same process for a text correction as for a data migration, a permissions change, or a payment integration. The technical team needs to help classify that risk and define appropriate checks.

For changes with greater impact, I'd want agreement before implementation on how we'll verify the expected behavior and how we'll roll back if something fails. Having an agent generate tests is useful; we still have to decide whether those tests represent the actual problem.

A second automated review can offer another perspective. Its value depends on what it finds and what we do with the result. Adding controls without examining their effects can also lengthen the queue.

A leader doesn't need to inspect every line. They need technical judgment within the team, time and authority for people to exercise it, and questions that help reveal where the process is losing reliability.

## Change the progress questions

In a meeting, I'd try these questions:

- What reached production, and what evidence do we have that it helped?
- Which work has been waiting longest, and what decision would unblock it?
- Who can explain and maintain each important change?
- How much effort goes into review and rework, and does it fit within working hours?
- What can we simplify, split, or stop doing so we can finish priority work well?

I'd use them to understand the system rather than rank people. If we reward commit counts or closed tasks, the team will probably learn to produce more of those signals. I want people to be able to flag a risk, ask for context, or suggest removing a feature without feeling they're demonstrating lower productivity.

Even reaching production is a stage rather than automatic proof of value. We still need to see whether anyone uses it, whether it improves the original problem, and what maintaining it costs.

## Use speed with a clear intention

For exploring an idea or building a prototype, fast generation can open enormous possibilities. You can compare alternatives and discard a proposal before investing months. That learning has value even if the code ends up in the trash.

What matters is agreeing on when we're exploring and when we're committing to maintenance. If a demo becomes a service customers depend on, the questions about testing, operations, support, and responsibility change. That transition deserves an explicit decision.

I think this is a central part of leading with AI: deciding what deserves to enter the system, giving the team conditions to understand it, and checking whether the result serves its purpose. Buying the capacity to generate more is relatively straightforward. Developing shared judgment takes practice, time, and conversations.

Perhaps one of the best signs of progress is being able to say: we're delivering something useful, and we know how to keep looking after it.

I keep exploring these questions about software, work, and AI on [my YouTube channel](https://www.youtube.com/@saarreche). Sending you a hug.
