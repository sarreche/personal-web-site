---
title: "The same model, a different agent: why results can change so much"
description: "A reading of Finding the Right Fit and a reflection on choosing agents: the model matters, alongside the tools, verification, and work we want to get done."
publishedAt: "2026-10-13"
---

When we talk about working with AI, one of the first questions is usually which model we're using. It makes sense: we want to know whether we've chosen a tool capable of helping us. But that question leaves out part of the work.

Between making a request and receiving a result, there are files to read, tools to run, errors to interpret, and decisions about when to continue or stop. All of that can go well or badly too.

[*Finding the Right Fit*](https://arxiv.org/abs/2610.00917) compares 66 configurations across three benchmarks and observes rankings changing with the pairing.

## What we're comparing when we compare agents

A *harness* surrounds the model with tools, context, and execution rules. [Table 1 in the paper](https://arxiv.org/html/2610.00917) compares 63 Terminal-Bench 4 tasks:

| Execution system | Claude Opus 5 | GPT-6 Astra |
| --- | --- | --- |
| OpenHands | 57.14% | 49.21% |
| PI | 30.16% | 60.32% |

These are completion percentages. The authors [acknowledge limits](https://arxiv.org/html/2610.00917): one run per task, no measurement of variation across repetitions, and settings that aren't fully matched.

My reading is that we should take the combination we use seriously. Looking only at the first row could leave me with a different impression from looking at the second. To choose a tool for my work, I want to understand the conditions behind the number.

## An error needs to come back as information

Imagine asking an agent to prepare a file, only for a command halfway through the process to wait for a response that never arrives. The model might be capable of finding a solution, but first it needs to learn what happened.

One system could leave it waiting until time runs out. Another could interrupt the command and return a message that helps diagnose the problem. To the person who made the request, both might look like “the AI got stuck.” When we examine them, the questions are different.

This example makes me look at the work between responses. Did the tool return the full error? Could the agent recognize which part had failed? Was the work already completed preserved? These are software design questions, and they can matter a great deal when we delegate longer tasks.

They also remind me of something very human: if we want someone to correct their work, we need to give them useful information about what should change. Repeating “try again” adds little when the person — or agent — is still looking at the same incomplete evidence.

## For the blog, being finished means something concrete

Bringing this back to this space, I wouldn't consider an article finished because an agent says it reviewed it. I need the text to represent what I want to say, read clearly, support its claims with sources, and correspond across both language versions.

Then there's another layer: the pages must build properly and links must lead to the right place. A successful build can check part of that. It can't decide whether a paragraph sounds like me or whether an interpretation of a paper is reasonable.

Something similar happens with video. An exported file can be technically complete and still contain a confusing sentence, a misplaced image, or pacing that doesn't serve the idea. Before automating more steps, I find it useful to define what result I'm willing to accept and how I'll review it.

These are applications I draw from the reading. The paper didn't evaluate my editorial process, and transferring those percentages directly to the blog or channel wouldn't make sense.

## How I'd test a pairing in my own work

I'd choose a few representative tasks: researching a claim with sources, turning a script into an article, reviewing a translation, or fixing a small website issue. I'd use the same materials and criteria to compare alternatives.

Beyond the result, I'd look at how much time I spent clarifying the request, how many corrections were needed, and which errors I had to catch myself. I'd record the cost too. A quick output may leave work behind; a more expensive one might save review time, or simply cost more. I'd rather check using examples I understand.

I'd try repeating some tasks before getting excited about an isolated win. And I'd change one thing at a time when investigating a failure. If I change the model, instructions, and tools together, it's harder to know what helped.

## The question the reading leaves me with

I'm interested in continuing to try new models. I also want to pay closer attention to how I put them to work. Sometimes I'll need more capability; other times, a clearer request, a tool that reports errors properly, or a check that's still missing.

That makes the opening question more interesting. Alongside “Which model do you use?” we can ask “What do you ask it to do, with which tools, and how do you know it finished properly?” That brings us much closer to the actual work.

You can read [the full paper on arXiv](https://arxiv.org/pdf/2610.00917). There's no video for this article, but I keep sharing these explorations on [my YouTube channel](https://www.youtube.com/@saarreche). Sending you a hug.
