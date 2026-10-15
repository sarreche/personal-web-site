---
title: "What is technical debt and why can AI make it grow faster?"
description: "Generating code got cheap, but maintaining it didn't. Technical debt works like a mortgage, and with AI it's easier than ever to sign one without reading the fine print."
publishedAt: "2026-10-15"
---

There's a question that comes up often in teams and meetings: what exactly is technical debt? People mention it a lot, almost always as a complaint, but rarely does anyone stop to explain it.

The best way I've found to explain it, after more than 24 years working in software, is with a mortgage.

And this week two pieces of news showed why that mortgage can grow much faster when artificial intelligence is involved. Not so much because AI writes bad code, but because it writes a lot of it, very fast, and someone has to pay the installments.

## Technical debt is a mortgage

When you take out a mortgage, you get something today that you couldn't pay for in cash. In exchange, you commit to paying installments for years, with interest.

Software works in a very similar way. You take a shortcut to hit a deadline: you duplicate a function instead of generalizing it, you hard-code a business rule in an odd place, you postpone a test. You get there sooner. But every future change in that area costs a bit more, because first you have to understand, work around or fix what was left half done.

That extra cost is the interest.

Here's something important: debt isn't bad in itself. Just like a mortgage, sometimes borrowing is the right call. Launching earlier, validating an idea, getting to a demo that closes a contract. The problem starts when you borrow without noticing, when nobody knows how much is owed or at what rate.

And that's where AI changes the scale.

## Generating code got cheap

This week Anthropic published how it redesigned its source control. The number that got shared the most is this one: in May 2026 they averaged around 2,500 code changes merged per day, and by September they were merging over 30,000.

At that volume, git became their biggest bottleneck. They built their own system, Scion, and migrated their whole repository in five months. They are clear that their case is very unusual, because they use their models to write code far more than almost any other company. But they also say they expect other organizations to start feeling similar pressure in the coming months.

There's a detail in the same article that I find even more interesting than the numbers. They explain that very often the engineers' role was to tell the model "no," because the agent would sometimes violate core system constraints or over-engineer parts of the system to handle hypothetical concerns.

I raised this in [Too much code: who reviews all of it?](/en/blog/demasiado-codigo-quien-revisa-todo-eso): the bottleneck didn't disappear, it moved. Writing stopped being the expensive part. Understanding, reviewing and sustaining did not.

## Six proposals, two approved

The second case comes from Google. With the launch of Gemini 4 Argon, their team published a very concrete experiment: they asked the model to improve the performance of ADK, their Python agent framework. We're talking about roughly 205,000 lines of code and nearly 17,000 unit tests.

The agent worked alone for 11 hours, overnight. By morning it had proposed six optimizations across 32 files.

In review, the team kept two and rejected four:

- A cache that improved a synthetic benchmark but could return stale data across sessions.
- A check that read a private attribute of another library and could break silently on a minor upgrade.
- A rewrite that made a core part of the code harder to read without improving real latency.
- An index that added complexity and only helped synthetic tests.

Look at that list with mortgage eyes. None of those changes broke anything today. All of them passed, or nearly. But each one was a loan with interest: a hard-to-reproduce bug, a fragile dependency, code the next person would take longer to understand.

Google's own team sums it up in a phrase that stuck with me: the agent explores, the maintainer subtracts.

## The onboarding guide detail

There's another part of the case worth telling. In a first round they gave the model the goal without any instructions about how the team works. The agent found real improvements, but it also accidentally changed a public schema and ran only a fraction of the tests.

For the second round they put the maintainers' guidelines into the repository, like an onboarding guide for a new engineer. With that, the agent read the rules before touching a line and ended up running every test.

I really like that image, because it takes the magic out of it. An agent is a lot like a very capable person who just joined: they can do many things, but they don't know your agreements, your history or what must not be touched. If you don't explain it, they'll sign loans in your name without knowing it.

## What I see in large companies

In large corporations this isn't theory. A lot of the software that keeps big companies running is old, with processes that are heavy to maintain, and that happens often. The debt is already there, and many times nobody really knows how much.

What has worked for me in those contexts is changing the order in which AI gets used.

First, to understand. Ask it to walk through a module, explain what it does, spot dependencies and write the documentation that doesn't exist today.

Then, to verify. Have it propose tests for the current behavior before changing anything, so you know what breaks if you touch something.

Only then, to build. And with a well-crafted definition of done, so it doesn't do more than needed. An agent without clear limits tends to improve things nobody asked for, and every unrequested improvement is a bit more surface to maintain.

Not so much using AI to write faster, but using it to know what you're paying for.

## Questions I'd ask before accepting a change

If your team already works with agents, here are a few simple questions for every big change:

- Can someone on the team explain this change without the code in front of them?
- Does it solve a real problem or improve a benchmark?
- Does it rely on internal details of another library or system?
- Does it add state, caching or complexity we'll have to look after?
- If it fails tomorrow, who owns it?

None of these questions is new. They're plain software engineering. What's new is how many times a day they need to be asked.

And one more, maybe the most uncomfortable: are we measuring how much code comes in, or how much code we understand?

## Closing

AI didn't invent technical debt. What it does is make borrowing much cheaper. A loan that used to take days of work now gets signed in minutes, and it arrives tidy, with reasonable names and green tests.

That's why I think the role gaining the most value isn't the one that generates the most, but the one that knows how to subtract. The person who looks at six proposals and has the judgment to keep two.

If your team generates twice as much code as a year ago, does it also understand twice as much?

## References

- Anthropic, [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control) (October 13, 2026).
- Google Developers Blog, [Optimizing a 200,000-line Python codebase overnight with Gemini 4 Argon](https://developers.googleblog.com/en/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/) (October 13, 2026).

I keep these conversations going on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.
