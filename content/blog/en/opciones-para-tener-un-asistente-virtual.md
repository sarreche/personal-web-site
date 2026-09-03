---
title: "I want a virtual assistant: what are my options today?"
description: "A look at Grok Bot, ChatGPT Work, Claude Cowork and OpenClaw: what you need to get started, and what models and infrastructure might cost."
publishedAt: "2026-09-03"
---

It seems perfectly reasonable to look at everything happening with AI and think: “I want one of those assistants. Where do I start?” Then come the subscriptions, models, applications, servers, and twenty names that seem to mean the same thing. A simple question turns into a small research project.

I wanted to organize that landscape for someone who has nothing set up yet. Someone with a computer or phone, their usual accounts, and a few things they would like to delegate: researching a subject, organizing documents, reviewing information, or following up on a task without remembering every step themselves.

This article covers four offerings I’m interested in following: Grok Bot, ChatGPT Work, Claude Cowork, and OpenClaw. I haven’t tested them all under identical conditions, so presenting this as a competition wouldn’t be honest. It’s an overview of the products and their public documentation, with prices checked on **September 3, 2026**, in **US dollars, before taxes**. Availability may vary by account, region, and rollout stage.

## What are we asking an assistant to do?

If I want a conversation, an explanation, or help editing a text, an account and an application may be enough. Things change when I want the assistant to revisit something tomorrow, use my files, or do something in another service.

Then I care about where it works, what it can access, and what happens when I close my laptop. I also care about how much work it takes to keep it running.

It helps to separate three costs. A **subscription** provides access to a product, with its tools and limits. **Model usage through an API** pays for calls made by a system you configure. **Infrastructure** is the computer or server running that system. You don’t always need to pay for all three, and a subscription doesn’t automatically include API credit.

## Grok Bot: an assistant with a cloud computer

Grok Bot includes the cloud computer as part of the offering. You don’t need to rent a VPS, install the assistant there, or leave your laptop on for it to keep working. Bots use a persistent environment with a browser, files, and a terminal to operate applications and websites. For someone starting with nothing configured, that takes care of a significant part of the initial setup. [Introducing Grok Bot](https://x.ai/bot).

You can message them from the mobile app, assign work, answer questions, and review results. You can also open the computer view to intervene when necessary. Current mobile documentation covers iPhone and Android; some routine-management functions still require the desktop app. [Grok Bot on mobile](https://docs.x.ai/grok-bot/mobile).

Access expanded on August 26 to SuperGrok plans and Cursor Pro and Teams. Entry-price references include **Cursor Pro at USD 20 per month** and **SuperGrok at USD 30 per month**. That expansion came after some help pages that still describe narrower availability. [Access expansion announcement](https://x.ai/news/grok-bot-more-plans), [xAI plans](https://x.ai/pricing).

An important distinction: **each bot has its own screen, but an account’s bots share one computer**, including files and sessions. They can work in parallel; they aren’t independent PCs or isolated environments. [How Grok Bot is organized](https://docs.x.ai/grok-bot/overview). Bot has a separate usage allowance from Grok or Cursor, with limits and eligible additional-consumption arrangements. Included infrastructure doesn’t mean unlimited work. [Frequently asked questions](https://docs.x.ai/grok-bot/faq).

For a beginner, the practical question is which accounts need connecting and what tasks those connections enable. I would distinguish between asking for a draft and authorizing its delivery. They may be adjacent steps, but the responsibility changes considerably.

## ChatGPT Work: delegating work in a familiar environment

Work targets tasks with a concrete deliverable: research, analysis, a presentation, or work involving files. It can use connected tools and, on desktop, local resources. It also supports cloud execution where that option is available, allowing tasks to continue with your computer off. Tasks that depend on local applications or files need that environment. [ChatGPT Work guide](https://learn.chatgpt.com/docs/get-started-with-work).

Published plans include **Free**, **Go at USD 8 per month**, **Plus at USD 20**, and **Pro at USD 100 or USD 200**, with different usage capacity. Work and Codex share limits and credits: the price doesn’t buy a fixed number of completed tasks. Complexity and model choice also affect consumption. [Plans and limits](https://learn.chatgpt.com/docs/pricing).

**You can manage work on a computer from the ChatGPT app on iOS or Android**, using Remote. Pair the computer with the same account and workspace, then start tasks, send instructions, and approve actions from your phone. The Mac or Windows host must be awake, online, and running the desktop app; availability depends on rollout and permissions. [Remote connections](https://learn.chatgpt.com/docs/remote-connections).

For recurring work, check where the automation will run. Local automations require the application and computer to be available; enabled web tasks have their own resources and permissions. [Automations](https://learn.chatgpt.com/docs/automations).

That distinction matters to me because “I left it working” can mean very different things. I wouldn’t want to discover, after leaving home, that I had put the only computer capable of finishing the job to sleep.

## Claude Cowork: documents, tasks, and continuity

Cowork offers another way to delegate work, accessing files and tools according to the permissions you grant. It is available on paid plans. Its cloud mode, in beta, supports continuing sessions across web, desktop, and mobile without keeping your computer on. Access to local resources still has separate requirements. [Getting started with Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).

**Claude Pro costs USD 20 per month**, or **USD 200 paid upfront for a year**. Max starts at **USD 100 per month**. Included capacity deserves attention alongside the price: an extensive task can use considerably more than a short conversation. [Claude plans](https://claude.com/pricing).

**Dispatch lets you assign work through Claude’s own mobile app and receive the result there**, while the connected computer executes it. You don’t need to view its desktop through RDP to send instructions. It requires updated desktop and mobile apps, connectivity, and an awake computer with Claude open. It is in limited beta for eligible Pro and Max accounts. [Dispatch](https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork).

Cowork’s remote recurring tasks, meanwhile, can run while your computer is off, but cannot directly access a local folder. [Recurring tasks](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork).

To me, these conditions matter as much as response quality. If the work lives in a folder on my computer, I need to solve that access problem. If it lives in a connected service, the arrangement may be different. The model’s name alone doesn’t answer that question.

## OpenClaw: an assistant you administer

OpenClaw connects agents to channels such as Telegram, WhatsApp, or Discord, alongside a web interface. Interacting with it can be as familiar as sending a message from your phone. Behind that interaction is an installation somebody needs to configure and maintain. [OpenClaw documentation](https://docs.openclaw.ai/).

Its gateway—the service coordinating the assistant—can run on a Linux server. That server holds the state and working files; private connections such as an SSH tunnel or Tailscale can provide administrative access. The documentation also emphasizes backing up that state. [VPS hosting](https://docs.openclaw.ai/vps).

Once the channel is configured, everyday conversations can happen through Telegram or WhatsApp. You don’t need to open the server’s desktop for every request. Your personal computer can be off if the task depends only on resources available to that server and the model provider.

This opens up decisions a packaged product already made for you: where it runs, which services it connects, which model it uses, and how it is maintained. It also leaves you with those responsibilities. Starting from zero, I would count setup time, updates, and troubleshooting as costs, even when they don’t appear on an invoice.

For the budgets below, I assume API-based model access. I’m not assuming a personal ChatGPT or Claude subscription can fund any integration: that depends on the authentication methods and terms each provider permits.

## Using it from your phone and hosting it are separate decisions

Here is the distinction I find most useful for a beginner: **your phone can be where you give instructions without being the machine doing the work**. An assistant you message from the couch could be running in the provider’s cloud, on your computer, or on a server you rent.

For the options above, the picture looks like this:

- **Grok Bot:** its persistent cloud computer is already included. You don’t add a VPS bill for that environment.
- **ChatGPT Work and Claude Cowork:** there is cloud execution and mobile access to work on a connected computer. Which mode your task uses matters.
- **OpenClaw:** you decide where to host it. The messaging channel is the way into the assistant, not its hosting environment.

Imagine leaving home after requesting some research. If the task runs in the cloud, switching off your laptop doesn’t itself interrupt it. If it runs on your computer, that computer needs to remain available even when you direct it from the mobile app. And if the documents exist only on the powered-off laptop, keeping another server running won’t magically make them accessible.

## When a VPS or dedicated computer becomes an expense

A VPS is a rented virtual computer. It can make sense for keeping your own service running independently of your laptop. If a product already executes the task in its cloud, you may not need additional hosting.

For a concrete reference, DigitalOcean lists basic Linux machines with **2 GiB of RAM at USD 12 per month** and **4 GiB at USD 24**. These are infrastructure examples, not a capacity guarantee for every assistant: browsing with many tabs or running concurrent tasks may need more resources. Backups and other services can add charges. [Droplet pricing](https://www.digitalocean.com/pricing/droplets).

In this arrangement, the VPS runs the assistant software and calls the model provider. You are not hosting an entire frontier model on a USD 12 machine.

For ChatGPT or Claude, a dedicated or rented computer makes sense when you want your own environment to stay available. **You can aim to leave it running and direct the assistant from the mobile app**, using Remote or Dispatch where enabled. Renting the machine doesn’t guarantee it supports those applications: verify compatibility and session requirements first.

Conventional remote desktop remains another tool, useful for installing programs, resolving a sign-in issue, or intervening manually. Chrome Remote Desktop, for example, lets you access your computer from another device. It isn’t a general requirement for talking to an assistant from your phone. [Chrome Remote Desktop](https://remotedesktop.google.com/).

Renting a Windows machine changes the budget. Lightsail lists Windows instances with IPv4 at **USD 44 per month for 4 GB** and **USD 74 for 8 GB**. These are price references, not confirmation that Cowork or Work supports those machines: **Windows Server is not the same as a Windows desktop supported by those applications**. Before renting, verify the operating system, requirements, and remote-session behavior. [Lightsail instance bundles](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-bundles.html).

You can also use a computer you already own. Electricity, connectivity, and maintenance still exist, even without a hosting invoice. To work out the total, I would separate the subscription from the machine: Grok Bot’s cloud environment is part of the product; a setup you host adds infrastructure and usage costs. Using the mobile app is not, by itself, a reason to rent a VPS.

## What might model consumption cost?

APIs typically charge for tokens: pieces of the content entering and leaving the model. A single assignment can trigger many calls, resend context, read documents, and generate intermediate results. I wouldn’t try to turn “ten tasks a day” directly into a price.

For a sense of scale, these are published text rates per **one million uncached input tokens / one million output tokens**:

- **GPT-5.6 Luna:** USD 0.20 / USD 1.20.
- **GPT-5.6 Terra:** USD 2 / USD 12.
- **GPT-5.6 Sol:** USD 4 / USD 20. [OpenAI pricing](https://developers.openai.com/api/docs/models/compare).
- **Grok 4.6:** USD 2 / USD 6 for the context tier below 200,000 tokens per request. Larger contexts use a different rate. [Grok 4.6 specifications](https://docs.x.ai/developers/models/grok-4.6).
- **Claude Opus 5:** USD 5 / USD 25.
- **Claude Fable 5.1:** USD 10 / USD 50. [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing).

Suppose a month uses **one million input tokens and 200,000 billable output tokens**, spread across calls within the standard tier. The calculation gives USD 0.44 with Luna; USD 4.40 with Terra; USD 8 with Sol; USD 3.20 with Grok 4.6; USD 10 with Opus 5; or USD 20 with Fable 5.1.

That is arithmetic for comparing rates, not evidence that every model completes the same work using that volume. It isn’t a forecast of your month either. Billable reasoning, retries, and context size can substantially change consumption; the output you see isn’t always everything you pay for.

At ten times that volume, Terra would cost USD 44, Sol USD 80, and Opus 5 USD 100. Adding the USD 12 VPS brings those examples to **USD 56, USD 92, and USD 112 per month**, respectively. Taxes and potential charges for search, images, audio, storage, or other tools would remain extra. Cache discounts are not included either.

These figures describe an API integration. They don’t calculate how many tasks a Work, Cowork, or Grok Bot subscription includes, or what its additional charges might be.

## What I would want to know before subscribing

After looking at the landscape, I would want to describe my need through a concrete situation: “Check these sources every morning and leave me a summary,” or “Help me prepare this week’s documents.” That makes questions about access, continuity, and limits much more precise than asking for “the best assistant.”

I would also clarify what it can do independently and what requires my approval. Reading a folder, modifying it, and sending it to somebody are different permissions. Initially, I would review results and keep confirmations for consequential actions.

Some offerings handle much of the infrastructure; others let you administer it. Some costs are relatively predictable, while others depend on how much work you generate. I don’t see a universal choice in that landscape. I see different ways to bring assistance into everyday work and share the effort of keeping it useful.

What excites me is that the question can now be made concrete: what I want to delegate, where my information lives, how much control I need, and what I’m willing to spend. With those things on the table, the conversation becomes much more useful.

If you’d like to keep exploring these tools with me, I share experiences and reflections on AI, software, and work on [my YouTube channel](https://www.youtube.com/@sarreche).
