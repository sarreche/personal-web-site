---
title: "Zero-shot classification: sorting text without labeled examples"
description: "What zero-shot classification means, how it can sort text into new categories, and what to check before trusting its output."
publishedAt: "2026-09-23"
---

Imagine opening a company's inbox and finding hundreds of unsorted messages. Some are about charges, others about technical problems, and others about cancellations. You want to route each one to the right team.

For a long time, one way to automate that was to collect examples for every category, label them, and train a classifier. It works, but there is an awkward detail: before you can save work, you have to do quite a lot of it. And when a new category appears, you may need to prepare more data.

**Zero-shot classification** offers another possibility: give a model the text and the category names you care about, even when it has never been given labeled examples of *those categories for that specific task*.

It sounds like a trick. It is really a way to use what the model learned earlier.

## What “zero shot” means

A *shot* is an example. Here, *zero shot* means we do not show the model completed examples of the specific classification task when we ask it to classify something.

Suppose the message says, “I was charged twice for this month's subscription.” We give the model these options:

- Billing.
- Technical support.
- Cancellations.

The expected result is **Billing**. We did not have to write a hundred sample emails with matching labels to define that category.

This does not mean the model starts from nothing or has never seen words such as “charge” and “billing.” It was trained beforehand on large amounts of data or other tasks. What is new is the specific application and the set of labels we are presenting now.

That is how [Hugging Face describes the task](https://huggingface.co/tasks/zero-shot-classification): classify text among candidate classes without training the model on those particular classes.

## How it chooses a category

There are several ways to do this. A common approach uses a model trained to judge whether two statements are compatible.

For the billing message, the system might create statements such as “This message is about billing,” “This message is about technical support,” and “This message is about cancellations.” It then compares the original message with each statement. The category with the most compatible statement ranks highest.

You do not need to understand the internal mathematics to use the idea. What matters is that **the names and wording of the categories are part of the input**. “Account issues,” “access,” and “technical support” may overlap. Vague labels can produce vague results.

We can also instruct a language model to classify a message without providing worked examples. That is another zero-shot approach. In both cases, the model applies prior learning to a new task.

## Why it is useful

I find it especially interesting when we are still exploring a problem.

You can try categories for customer requests, comments, documents, or news without building a large labeled dataset on day one. If you later discover that “refunds” needs its own category, you can add it and see what happens.

That flexibility helps us prototype and understand the data. Sometimes the most valuable outcome is not automating the whole workflow. It is discovering which categories actually make sense before investing in a more specialized solution.

One practical detail matters here: a message can belong to more than one class. “I cannot access my account and want to cancel” concerns both access and cancellation. If the system is configured to choose one label, it will force a choice. For such cases, we can allow multiple labels or design a more careful routing rule. The [task documentation](https://huggingface.co/docs/inference-providers/tasks/zero-shot-classification) describes both modes.

## A confidence score is not a guarantee

An interface might display “Billing: 90%.” It is tempting to read that as “there is a 90% chance this classification is correct.” That is not necessarily what it means.

In many systems, the score reflects how the candidate labels we supplied compare with one another. If none fits, one can still come out on top. Changing the list, the wording of the labels, or whether multiple labels are allowed can also change the scores.

That is why I would leave room for **“none of the above”** or send uncertain cases to a person for review. A message about fraud, for example, should not automatically land in “billing” just because it was the least bad option.

Before connecting this technique to real decisions, I would test a representative sample: clear examples, ambiguous messages, new categories, and texts that belong to none. I would look beyond the number of correct answers and ask what kinds of mistakes it makes. Sending a general question to the wrong team is annoying; treating an urgent alert as a routine request can be much worse.

## When it is enough, and when to go further

Zero shot is a useful starting point when labeled examples are scarce, categories change, or we need to learn quickly how our texts are distributed.

If the task becomes stable and the volume grows, it may be worth collecting real cases, reviewing errors, and comparing the result with a classifier trained for that domain. Providing a few worked examples in the instruction may also help. That would be *few shot*: the model sees demonstrations of the task before classifying.

No single technique wins every time. What makes zero shot interesting is how little preparation it takes to begin. It lets us ask a powerful question: **“If these were my categories, how would you sort what I already have?”**

The answer does not replace judgment about the categories or careful error checking. But it can turn a pile of unsorted texts into a useful first conversation about the problem.

If you would like more practical explanations of AI concepts, I share them on [my YouTube channel](https://www.youtube.com/@saarreche).
