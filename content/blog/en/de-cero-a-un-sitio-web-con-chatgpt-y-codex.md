---
title: "Can I go from zero to a published website using only ChatGPT and Codex?"
description: "A real experiment to discover how much AI can build, where it fails, and when the user becomes the product’s technical director."
publishedAt: "2026-08-16"
---

An idea has been growing quietly: perhaps you no longer need to know how to program to build things on the internet.

With artificial intelligence, good prompts, and enough patience, anyone might be able to go from an idea to a working product.

Honestly, I did not know whether that was true. So I decided to test it.

The objective was simple: create and publish my personal website using ChatGPT and Codex.

I did not want to make a tutorial or follow a prepared recipe. I wanted to conduct a real experiment and observe what happened when I treated AI as my technical team.

The question was:

> Can a person go from an idea to a functional, published website using conversational AI tools?

The short answer is **yes**.

The important answer is that “without programming” does not mean “without deciding, understanding, or taking responsibility.”

## The rules of the experiment

I defined a few rules to make the test meaningful.

### Everything technical would go through AI

If I needed code, Codex would produce it. If something broke, I would try to diagnose it with AI. If I did not understand a concept or needed to choose a direction, I would use the conversation to understand my options.

This was not about pressing a button inside a template builder. AI would have to work on a real project: files, dependencies, configuration, tests, Git, and deployment.

### I would not follow step-by-step tutorials

I would not open twenty tabs and copy fragments without context. Questions would be resolved inside the process and based on the project’s actual state.

### The visual result would not be the only measure

The most interesting question was not only whether the page looked good. I wanted to discover:

- Where AI genuinely accelerates the work.
- Where it misinterprets or invents.
- Which decisions remain human.
- When you stop “not programming” and start directing software.

## The starting point was not code

The first task was explaining what I wanted to communicate.

A personal website is not a collection of components. It has an audience, a proposition, and a next step. Mine needed to present experience in software architecture, artificial intelligence, and technical leadership, show services, and allow an interested person to start a conversation.

ChatGPT was useful for turning scattered ideas into a structure: main proposition, experience, services, projects, YouTube channel, social presence, and contact.

This stage revealed the experiment’s first condition: AI can help organize an intention, but somebody still needs to recognize whether the result truly represents who they are and what they want to offer.

A coherent answer is not always the right answer for you.

## From a conversation to a specification

The next step was turning the desire to “have a website” into verifiable decisions.

The site needed to be:

- Bilingual in Spanish and English.
- Responsive and usable on mobile devices.
- Accessible in its fundamental interactions.
- Visually minimal, modern, and human.
- Easy to maintain without unnecessary infrastructure.
- Capable of displaying public GitHub projects.
- Capable of receiving inquiries through a form.
- Deployable as a real web application.

Defining these conditions changed the quality of execution. AI stopped guessing what “a good website” meant and started working against concrete criteria.

This was one of the most important lessons: a good prompt helps, but a living specification helps much more.

## The role of ChatGPT and the role of Codex

The tools served different purposes during the experiment.

ChatGPT was the space for exploring ideas, clarifying objectives, reviewing messages, and turning intuitions into requirements.

Codex worked directly on the project. It could read files, understand the structure, create components, edit content, install dependencies, run TypeScript and production builds, review changes, use Git, and prepare pull requests.

The difference is similar to discussing a house with someone and working with someone inside the construction site.

According to its official documentation, Codex is a coding agent for building and shipping software. But access to the repository does not automatically answer which product should be built. The agent executes far more effectively when context, boundaries, and acceptance criteria are clear.

## What was actually built

The result was a real site based on Next.js, React, and TypeScript, with a relatively small architecture and no large UI library.

The first version evolved through reviewable iterations. The project eventually incorporated:

- A bilingual professional landing page.
- Mobile-friendly navigation.
- Experience, services, and working-method sections.
- Recent projects loaded from GitHub.
- YouTube and social integrations.
- A bilingual contact form with message delivery.
- A static Markdown blog in Spanish and English.
- SEO metadata and a sitemap.
- TypeScript, lint, and production-build validation.

The article you are reading lives inside that system. This makes the website evidence of the experiment and also its next iteration.

## Where AI accelerated everything

The greatest advantage was not writing one particular line faster. It was reducing the cost of constantly moving between levels.

I could move from a content decision to an interface change, then to a type error, and from there to documentation or Git without coordinating several specialists.

AI was especially useful for:

- Creating a complete first version to react to.
- Applying repetitive changes across languages and components.
- Finding files and understanding existing code.
- Detecting errors through real tools.
- Keeping documentation and behavior aligned.
- Preparing small changes in branches and pull requests.
- Remembering project constraints while we iterated.

The cycle between idea, execution, and review became much shorter.

## Where it started inventing or getting things wrong

AI can fill gaps with plausible decisions nobody requested.

It can select an architecture that is too complex, assume an environment variable exists, invent content, use an outdated API, or create an interface that is technically correct but wrong for the site’s identity.

It can also solve the problem you described rather than the problem you wanted to solve.

The process could not depend on reading an answer and trusting it. I needed to observe the code, run checks, review the result, and compare every change with the objective.

Automated tests help reveal technical inconsistencies. They cannot decide whether the message represents you, whether a section should exist, or whether the experience creates trust.

## The moment you become a technical director

Even if AI generates all the code, somebody has to make decisions:

- Which problem is being solved.
- Which information may be used.
- How much scope is enough.
- Which risks are acceptable.
- When a proposal should be simplified.
- Which result is ready to publish.

That role resembles a technical director or product owner more than a person who writes every line.

You do not need to know syntax from memory to begin. But the more you understand systems, security, data, and quality, the better you can evaluate what AI proposes.

The barrier to entry falls. The need for judgment remains.

## “Only with AI” needs a qualification

The website did not appear in a vacuum.

ChatGPT and Codex helped design, implement, verify, and manage the project. Publishing also required external infrastructure and decisions:

- A GitHub account and repository.
- A hosting and deployment service.
- Credentials for services such as email delivery.
- A public domain or URL.
- Authorization to push code and merge changes.

AI could guide and execute much of the workflow. It did not create the identity, accounts, permissions, or accountability for what was published.

The most honest description is not “AI did everything.” It is “one person directed an AI technical team and reached production without manually writing the code.”

## Can somebody who cannot program do it?

For a bounded, low-risk website, this is increasingly possible.

A person can describe what they need, generate an implementation, see it, request changes, and publish something functional without previously mastering a programming language.

The difficulty rises when payments, sensitive data, permissions, complex integrations, regulation, or serious consequences from an error are involved.

AI can write those parts too. The problem is that a person without technical knowledge may not recognize when a solution appears to work but is insecure, fragile, or expensive to operate.

Not knowing how to program no longer necessarily prevents construction. Not knowing how to evaluate risk remains a limit.

## The real lesson

The experiment confirmed that the distance between an idea and a published product has become extraordinarily short.

It also showed that building is not merely producing files. It means turning an intention into decisions, verifying that those decisions survive reality, and owning the consequences of the result.

ChatGPT and Codex can behave like a surprisingly capable technical team. To use them well, the person does not need to pretend they know everything. They need to ask, observe, decide, and maintain a direction.

So, can I go from zero to a published website using only ChatGPT and Codex?

Yes. This website is the proof.

But the result does not appear because AI removes your role. It appears because AI changes your role: from writing every instruction to directing the system that turns those instructions into a product.

## References

- [Website repository on GitHub](https://github.com/sarreche/personal-web-site).
- OpenAI, [official developer and Codex documentation](https://developers.openai.com/).

---

This article documents the experiment developed in the video. You can [watch the complete process on YouTube](https://youtu.be/sLgPF18inas).
