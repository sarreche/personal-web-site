---
title: "Who decides when you make decisions with AI?"
description: "A study with professional analysts shows how an agent's arguments can steer judgment calls, even when the alternatives are both defensible."
publishedAt: "2026-10-29"
---

Imagine finishing an analysis with an agent's help. You check the calculations, choose a recommendation, and write down why it seems reasonable. Returning to the chat, you discover that several of your reasons first appeared there.

That does not invalidate the decision. We learn from other people's arguments all the time. But it raises a question: did you adopt those reasons after comparing them with others, or did the conversation define which options you considered?

Anthropic's study [How AI agents shape experts’ judgment calls](https://www.anthropic.com/research/agents-judgment-calls), published October 27, lets us examine that distinction. It interests me because it shifts the discussion toward decisions with more than one defensible answer.

In those cases, a correct calculation can still leave unanswered what we want to measure, for whom, and using which criteria.

## An experiment about expert decisions

The researchers recruited 61 analysts experienced in causal inference. Eleven chose to work without the agent; the main analysis focused on the 50 who used it. The task was to advise a fictional farming cooperative about continuing and expanding an advisory program.

Four analytical decisions were left open: how to measure productivity, which comparison method to use, which population of farms the estimate should cover, and how to weight them. A final recommendation followed.

For each decision, a random assignment determined which option the agent would lean toward. Participants did not know about that assignment. The agent was instructed to defend its position with the honest arguments the data allowed, without misleading, and to revise it if the evidence required.

That design studies the influence of an experimentally introduced preference. It does not assume that one option is the correct answer.

## What that 86% means

Across the four analytical decisions, choices matched the agent's lean 86% of the time. Without influence from that randomly assigned lean, expected agreement would be 50%.

That 50% comes from randomizing the agent's position. It does not assume the experts were answering randomly. And 86% measures agreement, not correct answers or errors.

In 38 decisions, the analyst had expressed a position before the agent voiced its own. When the agent disagreed, the analyst switched options 60% of the time; when it agreed, 6%. This is a small subset selected by participants' behavior, so the comparison requires more caution than the main result.

The direct effect on the final recommendation was smaller and did not reach statistical significance under the registered primary estimator. That distinction matters: choosing how to construct an estimate and deciding what to recommend from it are different stages.

## The choice starts before the result

I find the question of how to measure productivity particularly interesting. Yield per hectare and yield per unit of operating cost can answer different questions. Choosing a measure requires explaining which goal matters for that decision.

Consider a hypothetical example outside the study: a company compares two ways of serving customers. It could prioritize average response time or the proportion of inquiries resolved at first contact. Both metrics provide information, but choosing one as the primary objective directs the work.

An agent can calculate either impeccably. Deciding what we want to improve still needs a justification tied to the problem and the people affected.

That is why I want to examine the questions preceding the calculation. What was defined as success? Which alternative did we leave out? What assumption connects the number with the recommendation?

Influence can enter there without being examined by a review focused solely on finding errors.

## Recognizing a decision has nuances too

In the post-task survey, 37 of 48 participants, or 77%, reused at least one argument from their agent. Only 15% mentioned it as a source in any answer. And 52% described the recommendation as more their own than the agent's; it was not everyone.

Confidence was also similar between those who had followed the agent on all four decisions and the rest. That does not let us read each participant's mind or conclude that nobody recognized the influence. It does invite us to distinguish a sense of ownership from the history of how a choice was formed.

I can make an argument my own after hearing it from someone else. To me, what matters is being able to explain why it is convincing, under which assumptions it works, and which reasons might lead me to prefer another option.

Owning a decision does not require inventing every argument. It requires being able to examine them and take responsibility for the criteria we ultimately adopt.

## What we can conclude so far

The [full paper](https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf) studies one task, one domain, and one agent, with a deliberately amplified lean. Participants knew causal inference but were new to farming. The figures do not estimate how much any AI influences any everyday decision.

Nor do they let us assign a precise amount of influence to each person. Random assignment identifies an average effect; an initial position was not systematically collected before the intervention. Some participants volunteered one.

Changing your mind in response to a good reason can improve a decision. I would not read the result as a reason to resist the agent on principle. I would read it as a need to distinguish when it helps us explore a problem from when we accept a perspective without having articulated our own.

The study also does not establish that the practices I suggest below eliminate this difficulty. They are ways to make deliberation more visible, whose value should be evaluated in each context.

## Four things I would try before deciding

In [the article about how much control we have when approving an agent's work](/en/blog/cuanto-control-tenemos-cuando-aprobamos-a-un-agente), I focused on the conditions for oversight. Here, I would add attention to where our criteria come from:

1. **Record a provisional position.** Before asking for a recommendation, I would write down the goal that matters, the option I am considering, and what I still do not know. If I have no position yet, I would record that too.
2. **Ask for the strongest case for the alternative.** I would seek to understand why a competent person might choose it and which assumptions they would make. Then I would check its claims against external evidence.
3. **Ask what was left out.** Alongside comparing the options offered, I would consider whether an option is missing or whether we need to consult the people who will face the consequences.
4. **Record why I changed my mind.** I would distinguish new data, an argument from the agent, and a criterion of my own or agreed with the team. That would let me reconstruct the decision later.

I would not turn every small choice into an audit. I would put that effort where different defensible options have important consequences.

**If I am going to sign off on a decision, I want to explain why I chose that option and what would make me revisit it.** That explanation is also part of the work remaining in our hands when we use AI.

I continue these conversations on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.

## References

- [Anthropic: How AI agents shape experts’ judgment calls](https://www.anthropic.com/research/agents-judgment-calls), October 27, 2026.
- [Herdağdelen, Joren, and Tamkin: Who’s Aligned to Whom? How AI Agents Shape Experts’ Research Judgment Calls](https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf). Experimental design, results, and limitations.
