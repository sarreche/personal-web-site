---
title: "Anthropic's terror is a matrix multiplication"
description: "The meme looks like a linear algebra lesson, but it captures much of the anxiety around AI and work. It also leaves a few things out."
publishedAt: "2026-09-14"
coverImage: "/images/blog/el-terror-de-anthropic-multiplicacion-de-matrices.png"
coverAlt: "Meme titled The terror of Anthropic employees showing a matrix multiplication"
---

An image circulating online shows a matrix multiplication. A row from the first matrix meets a column from the second to produce one element of a third.

The caption reads:

**“The terror of Anthropic employees.”**

If you never studied linear algebra, the meme may look like a very specific warning: apparently the people working at one of the world's leading artificial intelligence labs live in fear of a first-year exam.

And honestly, that would not be especially strange. Some things we learn, pass, and return almost untouched to the university. Matrix multiplication is often on that list.

But the joke is pointing somewhere else.

Claude, ChatGPT, Gemini, and virtually every large model in use today exist because of absurd quantities of operations like the one in the image. Beneath the conversation, the friendly tone, and the response that seems to understand exactly what we meant, numbers arranged in matrices are being multiplied at a speed that is difficult to imagine.

The joke is that Anthropic employees are building a machine capable of automating part of intellectual work and, deep down, that machine is a matrix multiplication repeated an outrageous number of times.

It is not Terminator walking through the door.

It is linear algebra with a budget.

## What is happening in the image

The operation in the meme takes one row from the first matrix and one column from the second. It multiplies their elements position by position and adds the results.

In the example, the first value of the final matrix would be:

**c₁ = a₁ × b₁ + a₂ × b₄ + a₃ × b₇**

The procedure is then repeated with other rows and columns until the resulting matrix is complete.

There is no consciousness. There is no intention. The matrix does not stop to wonder whether it wants your job. It does not even know it is Monday.

It simply transforms one set of numbers into another according to a precise rule.

Seen this way, it is hard to believe that this operation has anything to do with systems that can program, translate, analyze documents, generate images, or explain why your plant seems to be dying.

It does, though.

## Why models need so many matrices

To work with language, a model first represents tokens—pieces of words—as vectors of numbers. Those numbers are not dictionary definitions. They are positions inside a mathematical space learned during training.

The model then transforms those representations again and again. It combines them with large weight matrices, applies other operations, compares relationships between tokens, and gradually builds new representations of the context.

In a transformer, even the attention mechanism that helped reshape the entire industry depends on matrix multiplications. Queries and keys are combined to estimate which parts of the context should matter. Those weights are then used to mix values. Between one stage and the next come more layers, more projections, and, yes, more matrices.

If you want to go deeper into that architecture, I have already written about [how LLMs actually work](/en/blog/como-funcionan-realmente-los-llm) and [the *Attention Is All You Need* paper](/en/blog/attention-is-all-you-need-el-paper-que-cambio-la-inteligencia-artificial).

The brutally compressed version would be:

1. Turn language into numbers.
2. Multiply and transform those numbers many, many times.
3. Turn the result back into a probability for the next token.
4. Repeat until a convincing email, a TypeScript function, or an unnecessarily detailed explanation of how to boil an egg appears.

That is the meme's first layer: behind something we call “intelligence” sits an operation many people remember from a classroom board.

## “It is just matrix multiplication”

The internet loves the word **just**.

An airplane is just metal pushing air. A symphony is just air vibrating. A company is just a collection of chats where everyone asks whether somebody can see their screen.

And a language model is just matrix multiplication.

The sentence is not false. It is incomplete in a particularly entertaining way.

Neural networks depend heavily on those operations, but they also need nonlinear functions, attention mechanisms, normalization, tokenization, training algorithms, data, objectives, evaluations, distributed software, and specialized hardware. Then someone must turn the model into a product, give it tools, control permissions, measure errors, and decide what happens when it says something with absolute confidence and absolute imagination.

Saying that Claude is just matrices is a bit like saying a novel is just ink. The raw material is there, but we still have not explained how it produced that effect.

The reduction works as a meme precisely because it compresses an enormous stack of engineering into one visually innocent operation.

## So why is Anthropic afraid?

The caption could mention OpenAI, Google, Microsoft, or almost any company adopting AI. Anthropic works especially well because it builds Claude and speaks publicly about automation, advanced capabilities, and labor effects.

The company itself has studied AI's impact on work. Its [research published in March 2026](https://www.anthropic.com/research/labor-market-impacts) did not find a systematic increase in unemployment among the most exposed professions at that point, though it did find signs that hiring of younger workers had slowed.

In other words, the meme exaggerates, but it did not appear out of nowhere.

The people who build these systems do not live outside the world they are transforming. Programmers, researchers, analysts, designers, and operations teams also perform digital work that a model can accelerate or partially automate.

There is something very human about imagining an Anthropic employee looking at a matrix multiplication and thinking, “Maybe we gave it too much power.”

There is also something very internet about assigning malicious intent to an operation that could not recognize a resignation letter even if you multiplied it by its transpose.

## The part of the joke we should take seriously

The meme compresses an enormous anxiety into an image that fits on a phone screen.

It reminds us that a technology does not need to look human on the inside to create human consequences on the outside. A system can consist of entirely mechanical mathematical operations and still change how we program, write, search for information, or build teams.

Spreadsheets had no ambitions either, but they transformed entire departments. Search engines did not “understand” the internet as a person would, but they changed our relationship with information. Matrices do not want anybody's position; organizations can still decide to reorganize work around them.

So the important question is not whether matrix multiplication has career ambitions.

The question is who decides where it is used, which task gets automated, how productivity is distributed, and what opportunity remains for a person to learn. The risk does not come from a matrix waking up one morning determined to become a product manager. It comes from economic and organizational decisions made by humans who do know which day of the week it is. Usually.

## What the meme leaves out

There is another irony: those matrices do not multiply themselves.

Behind them are people designing architectures, preparing data, building data centers, manufacturing chips, researching algorithms, fixing failures, testing behavior, and keeping all the infrastructure running. Even when an agent completes a task from start to finish, someone defined the environment, permissions, objective, and criteria for accepting the result.

AI can change which people are needed and what tasks they perform. It can reduce some roles, create others, and make certain teams far more productive. What it does not do is magically turn an equation into an autonomous company.

Between the matrix in the meme and Claude lies one of the most complex technical and human constructions of our time.

The fact that it ultimately depends on simple operations repeated at scale does not make it less impressive. In a way, it makes it more so.

## Perhaps the real terror is forgetting how to multiply them

The meme has two audiences.

The first sees the matrix and thinks about job automation.

The second sees it and relives an exam they thought they had emotionally recovered from.

I think that is why it works so well. It combines two contemporary fears: that artificial intelligence may be able to do too much and that somebody might ask us to calculate by hand the operation that makes it possible.

The good news is that you do not need to multiply matrices on paper to use AI thoughtfully. Understanding what happens underneath does help remove some of the magic, though. These models are not digital beings hiding inside a server. They are enormous mathematical systems, trained on data and turned into products through a great deal of human work.

The bad news for Anthropic employees is that the meme is already online. From now on, whenever they see a row approaching a column, they will know somebody is about to generate another token.

And probably a meeting.
