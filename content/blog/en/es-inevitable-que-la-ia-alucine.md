---
title: "Is AI hallucination inevitable?"
description: "A paper argues that language models will always make things up. The important question is not only whether they can be wrong, but when they should admit they do not know."
publishedAt: "2026-10-01"
---

There is a scene that repeats itself when I work with AI. I ask for a reference, a date, or the name of a study. The answer comes back quickly, neatly written, with a tone that seems to say, “Don't worry, this is right.” Then I open the source and find that the detail was never there—or that the cited paper does not exist.

That mix of fluency and error is what we usually call a *hallucination*. I am not fond of the term—the machine is not having an experience—but it names a real problem: a convincing claim that does not hold up.

That is why a [2024 paper titled *LLMs Will Always Hallucinate, and We Need to Live With This*](https://arxiv.org/pdf/2409.05746) caught my attention. Its thesis is strong: hallucinations are not a passing defect that will vanish when we train a larger model. They are tied to structural limits of these systems.

The idea deserves a serious reading. It also deserves an uncomfortable question: **what exactly does “inevitable” mean?**

## A model cannot have every fact

Part of the argument is intuitive. No training set contains every fact in the world. New research appears, laws change, tomorrow's data has not been published, and some private information was never available to the model.

Even when a fact exists somewhere in its sources, retrieving it correctly is not guaranteed. A model can mix contexts or fill a gap with something plausible. The paper walks through incomplete data, imperfect retrieval, ambiguous interpretation, and generation to explain why improving any single component cannot solve every kind of error.

As a practical warning, I agree with much of that. If I ask an AI anything about any subject at any time, I should not expect it to always know the truth.

But **not knowing is not the same as making something up**.

## A leap the paper does not fully justify

In one of its arguments, the authors treat a true statement that cannot be verified against the model's training set as a hallucination. In my reading, that changes the question. A statement can be true even if the system cannot verify it from its own data. Lack of verification is a reason to express uncertainty, not proof that the statement is false.

The paper also invokes the halting problem to argue that an LLM cannot foresee all its possible outputs. But a general limit on certain programs does not, by itself, show that every response from a particular assistant must contain a factual error. A conversation can have a length limit; a system can stop generation; and, most importantly, it can choose not to answer a question it cannot support.

I do not claim to settle every formal dispute in the paper here. I do think it matters not to turn a provocative preprint into the headline “mathematics has proved that AI always lies.” That goes further than its arguments establish without debate.

## The less dramatic option: say “I don't know”

[Later OpenAI research on hallucinations](https://openai.com/index/why-language-models-hallucinate/) asks us to look at incentives, too. If we reward a model for correct answers but give it no credit for acknowledging uncertainty, guessing can score better than abstaining. Sometimes it will guess right; other times it will invent an answer confidently.

This changes the conversation. If we require an assistant to answer every question, errors about facts it does not know remain a persistent possibility. If it can say “I don't have enough information,” ask for clarification, or consult a checkable source, it can avoid *some* hallucinations. The trade-off is that an assistant that abstains from everything is no longer useful.

So we want neither a machine that always answers nor one that never takes a chance. We want one that can better distinguish when it has grounds to make a claim, when it should verify, and when it should stop.

## Sources help, but they are not magic

Connecting a model to documents or the web reduces an important kind of error: it no longer depends only on what is stored in its parameters. But it can still choose the wrong source, misread it, cite a passage that does not support the claim, or combine two results incorrectly.

Even when writing this blog, finding a link is not the same as checking what the text says. I have to open the source, understand what it actually claims, and separate the facts from my interpretation. That matters even more when the subject is recent or consequential.

For me, the practical answer is neither “don't use AI because it hallucinates” nor “don't worry because it can search now.” It is to build a workflow around uncertainty: request sources for checkable claims, verify the consequential ones, keep a path for correction, and do not hand over an impactful decision without oversight.

The paper leaves me with a valuable warning, even if I do not accept its most absolute conclusion: **fluency is no guarantee of truth**. A good assistant is not one that has an answer for everything. It is one that can help a great deal without hiding the moment it does not know.

There is no dedicated video for this topic yet. If you want to keep exploring these questions about AI and software with me, you can find me on [my YouTube channel](https://www.youtube.com/@saarreche).
