---
title: "What does adding AI to a process really cost?"
description: "The model bill shows part of the cost. Reviewing results, integrating systems, handling errors, and helping people adapt also belong in the calculation."
publishedAt: "2026-10-22"
---

Imagine this situation: a company tries AI to draft replies to customer inquiries. The API bill is tiny. The demonstration works, and the calculation seems complete.

Then someone needs to connect the data, keep it current, review the replies, and decide what happens when the system promises something the company cannot deliver. The person who used to answer now verifies. The technical team has another integration to maintain.

This is a hypothetical example, but it helps frame the question that interests me: what does it cost for that process to work well with AI in it?

The model's price matters. To decide on an implementation, we also need to consider the work surrounding it.

## The visible part of the iceberg

On October 19, MiniMax introduced M3.1 Flash. Its [pricing page](https://platform.minimax.io/docs/pricing/overview) lists USD 0.15 per million input tokens and USD 0.60 per million output tokens. In its [announcement](https://www.minimax.io/blog/minimax-m31f), the company claims a 70% reduction in usage costs. That is a provider's figure, not an estimate of the savings any business would achieve.

Those prices expand what is worth trying. But a rate per million tokens leaves questions unanswered: how many a complete task consumes, how often it is retried, and how much review the result needs.

An agent may make several calls to complete a request. Two models may also use different numbers of tokens to solve it. Comparing rates is a starting point; then we need to measure the full workflow.

I would choose a unit closer to the business: a correctly resolved inquiry, a processed invoice, or a completed case that meets the agreed quality standard.

## What lies below the surface

For that calculation, I would separate at least five costs:

- **Integration:** connecting systems, organizing data, and defining permissions.
- **Supervision:** checking results and handling cases that need a person.
- **Errors:** correcting work and addressing its consequences.
- **Maintenance:** adapting the solution when models, interfaces, prices, or requirements change.
- **People:** learning a tool, changing responsibilities, and agreeing on how to work.

The weight of each depends on the process. In some, API consumption may be significant. In others, a few minutes of review per case may far outweigh the model bill.

We also need to distinguish the initial investment from recurring costs. Preparing an integration once and reviewing every reply every day affect the calculation differently.

The previous way of working has its own costs and errors. The comparison needs to include them to determine whether the new solution improves anything.

A hypothetical calculation: one thousand cases a month, USD 10 for the API, and two minutes of review per case. That is 33 hours and 20 minutes of work. Valuing that time at USD 30 per hour puts review at USD 1,000. API and review already total USD 1.01 per case, before integration, maintenance, or error correction. This values time spent; it is not necessarily additional payroll spending. To decide whether it is worthwhile, we still need to compare it with the previous process's cost and quality.

## A benchmark cannot budget your review work

The MiniMax case invites a question about the relationship between price and reliability. A low rate alone cannot tell us how much supervision a model will require. Its position in a ranking cannot answer that for your process either.

Even metrics need careful reading. In [Artificial Analysis's AA-Omniscience](https://artificialanalysis.ai/evaluations/omniscience?LanguageId=1), the hallucination rate is calculated over non-correct responses, a group that includes partial answers and unattempted questions. It is not the percentage of errors across all questions.

And that benchmark evaluates knowledge and reliability under its own conditions. It does not replace a trial using your documents, your inquiries, and your consequences of error.

To choose, I would suggest using the same cases with each alternative, defining an acceptable result, and recording review time, corrections, and retries. If a cheaper model requires more human work, that work belongs in its cost. If it meets the required quality for less money, the saving is valuable.

The trial needs to allow either outcome to emerge.

## The provider is part of the calculation too

On October 21, OpenAI [announced the expansion of ChatGPT ads to 26 additional countries](https://openai.com/es-ES/index/chatgpt-ads-expands-26-new-countries/). According to the company, advertising helps fund free and low-cost access, and ads appear in Free and Go.

That describes how a product is funded. It is not an API charge or evidence that an answer is lower quality. It does remind us to understand the terms of the service we choose for work.

There is another cost associated with that dependency. A [survey commissioned by Origina and conducted by Censuswide](https://www.origina.com/press-releases/software-tax-research-enterprise-spending?hs_amp=true) reports an average of 28% of software budgets going toward upgrades, migrations, and licensing changes that organizations would not have actively chosen.

The sample includes 2,018 IT decision-makers at large organizations in the United States and United Kingdom. Origina sells independent maintenance. The figure needs that attribution: it does not represent all businesses or specifically measure AI projects.

The question I would bring to an implementation is concrete: if the provider changes something, how much work will adapting or leaving require?

## Learning what to pay for

I have been learning to use these tools without spending recklessly. Part of that learning is understanding which model to use for each task and managing subscriptions.

In [What I learned working with OpenAI models](/en/blog/lo-que-aprendi-trabajando-con-los-modelos-de-openai), I described how I began connecting model choice with difficulty, ambiguity, and the cost of being wrong. That idea still seems more useful to me than looking for one model for everything.

For a business process, I would extend it: review the capability each stage needs, the controls it requires, and which access is worth purchasing. Paying for capability we use can make sense. Keeping subscriptions out of habit also deserves scrutiny.

Changing the tool affects the people working with it. We need to agree on who reviews, who handles an exception, and who can stop the process. Leaving that effort out makes the budget incomplete.

## Do the calculation before scaling

I would start with a narrowly defined process and a baseline of how it works today: cost, time, and quality. Then I would measure the AI alternative, including integration, operations, and exceptions.

Time saved also needs interpretation: freeing hours can let us handle more cases or improve the work, even if it does not automatically reduce payroll spending.

With that information, we can decide what to automate, what to keep under review, and what is not yet worth changing.

**The calculation I want to make is what it costs for the process to work well with the model in it.**

If you are about to add AI to a process and want to work through the full cost, get in touch. I continue these conversations on [my YouTube channel](https://www.youtube.com/@saarreche).

Take care.

## References

- [MiniMax: M3.1 Flash announcement](https://www.minimax.io/blog/minimax-m31f) and [API pricing](https://platform.minimax.io/docs/pricing/overview), accessed October 22, 2026.
- [Artificial Analysis: AA-Omniscience methodology and metrics](https://artificialanalysis.ai/evaluations/omniscience?LanguageId=1).
- [OpenAI: ChatGPT ads expansion, October 21, 2026](https://openai.com/es-ES/index/chatgpt-ads-expands-26-new-countries/).
- [Origina: software change cost survey results and methodology, October 20, 2026](https://www.origina.com/press-releases/software-tax-research-enterprise-spending?hs_amp=true).
