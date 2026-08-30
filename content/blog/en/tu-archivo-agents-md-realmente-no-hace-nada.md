---
title: "Does your AGENTS.md file actually do nothing?"
description: "Research does not show that AGENTS.md is useless: it shows that loading more context does not guarantee more solved tasks and that value depends on the instructions it contains."
publishedAt: "2026-08-30"
---

A few days ago, Pivot to AI published a provocation that is difficult to ignore: **“Your AGENTS.md file doesn’t actually do anything.”**

The claim touches a real nerve. Thousands of projects are adding `AGENTS.md` files to tell coding agents how to work. We describe which commands to run, which architecture to preserve, which files not to edit, and how to prepare a pull request.

But do we have evidence that this improves the result? Or are we writing rituals for a tool that ignores them?

The short answer is uncomfortable for both extremes:

**AGENTS.md does something, but that does not mean it makes the agent better at every task.**

To understand the difference, we need to separate four questions that are often mixed together:

1. Does the agent load the file?
2. Does it follow the instructions?
3. Does it solve more tasks correctly?
4. Does it work with less time and cost?

These are not the same question, and the evidence gives different answers to each.

## First: what is AGENTS.md?

`AGENTS.md` is a Markdown file containing persistent instructions for coding agents. It acts like a machine-oriented README: it can describe commands, conventions, boundaries, and repository-specific expectations.

There is no required structure. Its value lies in providing a predictable place where a compatible agent can find context without the user repeating it in every conversation.

According to the official Codex documentation, the agent reads these files before starting work. It can combine global instructions, repository guidance, and more specific files placed in subdirectories. Rules closer to the file being modified take precedence.

At least in Codex, saying the file “does nothing” is therefore literally incorrect: it enters the instruction chain.

Loading an instruction, however, does not prove that it improves a solution.

## The study that ignited the debate

In 2026, researchers published *Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?* The work compared runs without context files, with model-generated files, and with files written by developers.

The central result disappointed anyone expecting an automatic improvement: context files did not significantly increase the overall task-resolution rate.

AI-generated files tended to make performance slightly worse. Developer-written files performed better than generated ones and showed a marginal improvement over no context, but not a consistent advantage that would justify the promise of “install a file and make the agent smarter.”

Agents also explored more files, ran more tests, and reasoned for longer. Cost increased by more than twenty percent in the analyzed experiments.

The same study, however, observed something crucial: **agents did tend to follow the instructions**.

The file was not invisible. It changed behavior. What it did not do was reliably turn that change into more solved problems.

## Following instructions is not solving the task

Imagine an `AGENTS.md` that says:

- Run `npm run lint` before finishing.
- Do not add dependencies without authorization.
- Shared components live in `/components`.
- Do not edit generated files.

If the agent follows those rules, the file worked as a coordination mechanism. The agent may still implement the feature incorrectly.

A repository guide can prevent it from using the wrong package manager. It cannot give the model a reasoning capability it does not possess. It can point toward an important abstraction. It cannot guarantee that the agent understands how to extend it. It can require tests. It cannot guarantee that those tests cover the real defect.

This distinction explains much of the controversy. Measuring only whether a solution passes all final tests can hide operational and compliance benefits. Measuring only whether the agent obeyed a rule can hide the fact that the product is still wrong.

We need both metrics.

## Other research found lower time and token use

The evidence does not point in only one direction.

Another study, *On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents*, analyzed ten repositories and 124 pull requests through paired runs with and without `AGENTS.md`.

It found a 28.64% reduction in median execution time and a 16.58% reduction in output tokens while maintaining comparable completion behavior.

This does not prove that every `AGENTS.md` makes every agent efficient. The study’s scope is limited, and its main variable was efficiency rather than a general improvement in correctness.

It does contradict the idea that these files only consume tokens. Depending on the content and task, a precise instruction can prevent useless exploration, incorrect commands, and unnecessary testing cycles.

## A third result: correctness still does not move

A later study tested three strategies—no context, full context always loaded, and selective retrieval—with Codex and Claude Code on real tasks.

Across 288 runs, context strategy produced no measurable change in correctness. Its failure analysis suggested that agents mainly failed because of implementation problems: feature design, pattern choice, or the exact wiring of components. Additional context did not supply the missing skill.

The work also found smaller process signals, such as fewer unnecessary full-suite test runs under certain conditions.

The same distinction appears again: the file can change **how** an agent works without changing **whether** it solves a difficult task.

## When is it useful?

AGENTS.md is more likely to provide value when its information meets three conditions:

- It is specific to the repository.
- It cannot be inferred easily by reading the code.
- It changes a concrete decision during execution.

For example:

- The exact command for testing only the affected package.
- A generated directory that must never be edited manually.
- A security constraint that is not encoded in the types.
- The boundary between two modules that look similar.
- A mandatory check before opening a pull request.
- A current architectural decision that contradicts the most popular pattern.

In these cases, the file behaves like a guardrail. It does not drive the car or improve the engine, but it reduces the chance of leaving the known road.

## When can it make things worse?

An `AGENTS.md` can also become context debt.

That happens when it contains:

- An exhaustive file tour the agent could discover itself.
- Generic advice such as “write clean code.”
- Old rules that no longer match the repository.
- Contradictory instructions with no clear priority.
- Dozens of commands irrelevant to the current task.
- Automatically generated text nobody reviewed.
- Requirements that create work without improving the delivery.

Every line competes for attention inside a finite context. More instructions do not equal more control. They can increase exploration, create secondary goals, and make it harder for the agent to identify what matters.

The irony is clear: a file designed to guide can become disorienting when it tries to document everything.

## AGENTS.md does not replace real controls

There is another dangerous mistake: treating the file as executable policy.

A sentence such as “never publish secrets” is useful, but it does not replace credential scanning. “Run the tests” does not replace CI. “Do not modify production” does not replace least privilege, isolation, and approvals.

Instructions operate at the probabilistic level of the model. Technical controls operate at the system level.

If a rule is critical, it must exist outside the prompt:

- In permissions and sandboxes.
- In automated validation.
- In mandatory reviews.
- In tool boundaries.
- In deployment policies.

AGENTS.md can explain the correct path. Infrastructure must prevent unacceptable paths.

## How to know whether yours works

We do not need to accept either the vendor promise or the provocative headline. We can test it.

First, verify that the tool actually loads the file. Codex can summarize active instructions and expose their precedence chain.

Then choose representative tasks and compare runs with and without the file:

- Does it follow conventions more consistently?
- Does it find the correct commands sooner?
- Does it touch fewer unnecessary files?
- Does it run the right checks?
- Does it reduce review corrections?
- Does it change time or token use?
- Does it improve the final outcome?

Not every organization needs an academic benchmark. Even a small repeated evaluation can reveal which rules provide value and which merely add noise.

The most sensible practice is to keep the file short, human, and alive: add an instruction because it corrects an observed failure, and remove it when it is no longer necessary.

## My conclusion

The claim “your AGENTS.md file does nothing” confuses the absence of a general correctness improvement with the absence of any effect.

The available research shows a more nuanced picture:

- Agents generally load and follow these instructions.
- That does not consistently improve task resolution.
- Generated and lengthy files can increase cost and worsen results.
- Short, specific, human-written instructions can guide the process.
- In some experiments, the file reduced time and token use.
- No file compensates for implementation ability the model does not have.

AGENTS.md is not a magical intelligence multiplier. It is not an inert placebo either.

It is a probabilistic coordination interface. Its value does not come from existing, but from containing a small number of genuinely useful decisions and from our ability to measure its impact.

Perhaps the right question is not “Does AGENTS.md work?”

It is:

**Which information about your repository actually changes an agent’s decision, and how do you know it changes it for the better?**

## References

- Pivot to AI, [*Your AGENTS.md file doesn’t actually do anything*](https://pivot-to-ai.com/2026/08/27/your-agents-md-file-doesnt-actually-do-anything/).
- OpenAI Docs, [*Custom instructions with AGENTS.md*](https://developers.openai.com/codex/guides/agents-md).
- Gloaguen et al., [*Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?*](https://arxiv.org/abs/2602.11988), 2026.
- Lulla et al., [*On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents*](https://arxiv.org/abs/2601.20404), 2026.
- Khatri, [*Do Context Files Help Coding Agents? A Two-Agent Ablation Study on Real Repositories*](https://arxiv.org/abs/2607.27250), 2026.
- Agentic AI Foundation, [the open AGENTS.md format website](https://agents.md/).
