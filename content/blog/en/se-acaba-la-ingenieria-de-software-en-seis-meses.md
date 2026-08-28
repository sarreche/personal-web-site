---
title: "Will software engineering be over in six months?"
description: "AI can generate code, tests, and documentation, but building dependable products still demands decisions, context, and risk management."
publishedAt: "2026-08-28"
---

The question is becoming increasingly urgent: if artificial intelligence starts taking responsibility for writing code, testing it, documenting it, and executing tasks autonomously, what is left for software engineering?

In its most extreme version, the prediction says the profession could be over in six months.

The pace of change makes the concern reasonable. Current agents can already navigate repositories, implement features, migrate code, and solve tasks that recently required hours, days, or even weeks of human work.

But writing code has never been the whole of software engineering.

If AI makes implementation cheaper, it does not eliminate engineering. It moves the profession’s center of gravity toward the decisions surrounding the code.

## Why software engineering exists

Programming means expressing instructions a computer can execute. Software engineering appears when we need to build and evolve systems under real constraints.

There are budgets, deadlines, risks, regulations, teams, users, legacy systems, and consequences when something fails. Requirements change. People interpret the same need differently. A successful product receives more traffic, accumulates data, and has to coexist with decisions made years earlier.

Engineering tries to manage that complexity, making the most of available resources without losing sight of outcomes and risks.

It does not promise that a system will never fail. It aims to make decisions explicit, risks understood, and the product capable of fulfilling its purpose with enough reliability throughout its useful life.

## What AI has already taken over

AI first advanced across activities whose inputs and outputs can be stated clearly:

- Generating implementations from a specification.
- Completing, translating, and refactoring code.
- Creating tests and test data.
- Explaining repositories and producing initial documentation.
- Detecting patterns, common errors, and potential vulnerabilities.
- Running tools, reviewing results, and iterating on a task.

Agents expand that scope because they can maintain long sequences of actions, inspect files, execute commands, and correct themselves after certain errors.

This already changes the work. A person with good tools can explore more alternatives, produce prototypes faster, and delegate a growing share of execution.

But autonomy over a task is not the same as responsibility for a product.

Recent results show this tension. DORA describes AI as an amplifier: strong teams gain more capacity, while weak systems expose their problems more quickly. Adoption is associated with higher throughput and better product performance, but it still has a negative relationship with delivery stability.

More changes do not guarantee better systems.

## The hard part moves

When producing a feature costs less, more features become possible. When we can generate five alternatives in minutes, the work is no longer writing the first one. It is deciding which one deserves to exist.

The central question moves from “Can we build it?” to more demanding questions:

- Which problem are we trying to solve?
- For whom?
- Which behavior would create real value?
- Which data can we legitimately use?
- What level of error is acceptable?
- What happens when it fails?
- How will we know whether it worked?
- Who is accountable for the consequences?

AI can help us explore these questions. It cannot eliminate the need for someone to define objectives, understand context, and own the decisions.

## Ambiguity is not a prompt defect

In real projects, people rarely know how to describe exactly what they need from the beginning.

A user requests a solution, discovers something after seeing it, and changes their mind. Two departments have incompatible goals. A regulation allows multiple interpretations. The market moves while we build. An incident reveals a dependency nobody documented.

Ambiguity, uncertainty, and volatility are not merely writing problems that disappear with a longer prompt. They are properties of the environment in which products are developed.

Part of engineering is reducing uncertainty through conversations, prototypes, experiments, observation, and reversible decisions. Correctly executing an instruction is not enough when we still do not know what the correct instruction should be.

## Phase by phase: what changes

Software engineering is not a rigid assembly line, but we can walk through its major activities to understand the new division of work.

### Discovery and problem definition

AI can summarize research, analyze feedback, propose questions, and organize hypotheses.

We still need to decide which signals represent real needs, which conflict is worth solving, and which outcome aligns with strategy. A well-written answer does not replace contact with the people living the problem.

### Requirements and scope

A model can turn conversations into stories, acceptance criteria, and edge cases. It can also find contradictions across documents.

But somebody must negotiate priorities, resolve incompatible expectations, and decide what stays outside the scope. Scope is not merely discovered. It is agreed upon.

### Architecture and design

AI can propose components, compare technologies, generate diagrams, and recognize known patterns.

Architecture, however, is a collection of decisions under specific constraints. The same design may be excellent for a prototype and dangerous for a financial system. The cost of change, team capability, existing data, regulatory obligations, and the impact of failure all matter.

### Implementation

This is where automation is most visible. Code, migrations, tests, and documentation can be produced at high speed.

Human work moves toward specifying, reviewing, integrating, and deciding when the result is good enough. Generation stops being the bottleneck; understanding and validation may become the new ones.

### Verification and quality

AI can create tests, explore states, analyze logs, and search for vulnerabilities. It can also produce an implementation and its tests from the same mistaken assumption.

A green test suite demonstrates consistency with the written criteria. It does not prove that we selected the right criteria. Independent validation and judgment about risk remain essential.

### Deployment and operation

Agents can automate releases, observe metrics, classify incidents, and propose corrections.

Production involves real people, real money, and irreversible effects. Somebody needs to define limits, permissions, recovery mechanisms, and conditions for stopping the automation.

### Evolution

A system does not end when it is released. Users, dependencies, threats, and objectives change.

AI can help maintain it, but every new generation of changes interacts with previous decisions. The ability to understand the whole system and manage its evolution still determines its useful life.

## Do quality attributes still matter?

If code can be generated and explained automatically, we might assume maintainability, reliability, and security matter less. The opposite is true.

Code is only one representation of the system. Quality attributes describe how the system behaves under real conditions:

- **Reliability:** does it continue operating when something fails?
- **Security:** does it protect data and capabilities from misuse?
- **Performance:** does it respond within the necessary time and cost?
- **Scalability:** does it maintain its behavior as demand grows?
- **Maintainability:** can we change it without introducing disproportionate risk?
- **Observability:** can we understand what is happening in production?
- **Usability and accessibility:** can people use it effectively?

AI can document code. It cannot automatically turn an insecure system into a secure one or compensate for an architecture whose operating cost makes the product unviable.

When generating more code becomes easy, controlling system quality becomes more important.

## What kind of product are you building?

Not every construction needs the same level of engineering.

A disposable personal prototype with no sensitive data can accept errors, technical debt, and quick decisions. A system controlling money, health, infrastructure, or private information needs much stronger evidence, traceability, controls, and accountability.

The question is not whether we use engineering or AI. It is which level of rigor the product’s risk requires.

If you clearly explain what you want to build, AI can make execution the easiest part. But defining “clearly” means understanding the domain, discovering needs, choosing tradeoffs, and anticipating consequences. That ability is also part of engineering.

## Are we going back to the beginning?

In software’s early years, one person could understand a large portion of a system and build it directly. AI is once again giving individuals and small teams extraordinary capacity.

In that sense, some of the original spirit is returning: less distance between an idea and an implementation.

But current systems are connected, handle more data, and face attacks, regulations, and global expectations. The ability to produce like a large team does not remove those responsibilities. It may concentrate them in fewer people.

A company of one with agents can write like an organization. It can also generate the risk of an organization without its controls.

## The profession does not disappear; it moves up a level

We do not know exactly what agents will be capable of in six months. The length of tasks they can complete continues to grow, and some evaluations already show multi-day or multi-week software work in controlled environments.

That gives us good reason to revisit every assumption about which tasks will remain exclusively human. It does not justify concluding that context, accountability, and risk disappear.

Software engineering may require less effort to transform a decision into code. It will require more judgment to formulate decisions, design control systems, and validate results produced at much greater speed.

AI does not end engineering. It ends the idea that manually writing every line was what defined an engineer.

That may be healthy. It forces us to remember that the real work was never producing code.

It was building systems worth having and worthy of our trust.

## References

- DORA, [*State of AI-assisted Software Development 2025*](https://dora.dev/research/2025/dora-report/).
- METR, [research on autonomous capabilities and task horizons](https://metr.org/research/).
- Anthropic, [*Economic Index: New building blocks for understanding AI use*](https://www.anthropic.com/news/economic-index-primitives), 2026.

---

This piece grew out of a script I prepared while experimenting with AI-assisted audiovisual content. You can [watch the original video on YouTube](https://youtu.be/MgD4DMorALY).
