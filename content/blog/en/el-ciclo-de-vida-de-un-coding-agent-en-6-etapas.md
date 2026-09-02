---
title: "The lifecycle of a coding agent, explained in 6 stages"
description: "Fixing a bug is only part of the job. A login example takes us through permissions, context, execution, review, production, and agent retirement."
publishedAt: "2026-09-02"
---

We ask an agent to fix a bug. It opens the repository, finds a few files, changes the code, and runs tests. A little later, it returns with a proposed change and a message saying everything works.

So far, it is an excellent demonstration.

But imagine that change is about to enter an application real people depend on. Suddenly, less glamorous questions appear: which credentials did it use? Could it touch production? Did the tests cover the original bug? Who reviews the result? And what happens to all that access when it finishes?

That part rarely makes it into the demo. To me, it is where much of the work we need to learn begins.

We are excited about agents' ability to write software, and rightly so. But producing a change and having a reliable way to produce changes every day are different problems.

## The prompt is an input, not the entire system

A good prompt helps enormously. Providing context, explaining constraints, and defining the expected result can transform a run. What it cannot do is compensate for a poorly prepared environment.

You can write flawless instructions and grant excessive permissions. Choose an extraordinary model and feed it outdated documentation. Receive correct code and deploy it without a way to roll back. Or finish a task without retaining useful evidence of what happened.

Lifecycle management means taking responsibility for that entire journey: before, during, and after the agent writes code.

[Warp organizes it into six stages](https://www.warp.dev/articles/ai-coding-agent-lifecycle-management): provisioning and scope, intake, execution, review and verification, shipping and monitoring, and iteration or retirement. This is not a universal law, and adopting the idea does not require buying its product. It is a practical reminder that code generation occupies only part of the process.

To make it concrete, let us use one case throughout: some users cannot log in after changing their password. We want an agent to investigate and prepare a fix. We are not giving it permission to redesign authentication.

## 1. Provisioning and scope: give it a place and a boundary

Before asking it to work, we need to decide where it will run and what it may touch.

For this case, we could prepare an isolated copy of the repository, a working branch, and test data. If it needs logs to investigate, we can provide the relevant ones without secrets or unnecessary personal information. None of that requires credentials to modify the production database.

The convenience of letting an agent inherit the developer's entire environment has a cost: it ends up with access to systems it does not need. An instruction saying “do not touch production” is not a substitute for a permission boundary that actually prevents it.

I prefer to think of access as something granted for a specific task and a specific period. We also need a way to revoke it if we cancel the run or something fails. Trusting the agent to remember to clean up is not enough.

The output of this stage is not code. It is an environment with a defined scope of action and a record of who authorized that scope.

## 2. Intake: turn a request into a verifiable task

“Fix the login” sounds like an instruction, but leaves almost everything unresolved.

Does it fail all the time or only after a password change? What should happen to existing sessions? Where can we reproduce it? Is there a security decision we must not alter?

The task needs a failure description, a reproduction path, expected behavior, and clear limits. In our example, the agent should demonstrate that the user can sign in with the new password and that the old one no longer grants access. If the product has a policy for existing sessions, it must be explicit: the agent should not invent it.

The request may arrive through a ticket, message, or alert. What matters is that those channels do not produce incompatible versions of the same kind of work. A short template can save people from having to remember the necessary information from scratch each time.

If a decisive detail is missing, the right response may be a question. There is nothing to gain yet by writing a solution to the wrong problem faster.

## 3. Execution: work, observe, and know when to stop

Now comes the part we usually watch: the agent investigates, forms a hypothesis, edits files, and runs tests. It observes what happened and tries again when necessary.

In our case, it might find a caching or session-invalidation issue. That is a hypothesis, not a diagnosis we should accept because it sounds reasonable. It needs to test it against the reproducible failure.

During that search, time, cost, and retry limits are useful. If the agent repeats an action without making progress, someone needs to know. If the fix requires a migration or a change to authentication policy, it should stop and request a decision: the original scope no longer covers the work.

We also need to know which repository revision, instructions, model, and tools it used. That helps compare runs, although it does not guarantee that repeating them will yield identical results.

I am not talking about storing a supposed internal monologue. I mean observable evidence: tool calls, changed files, executed tests, failures, duration, and resource consumption. Logs need care too; recording everything indiscriminately can copy secrets into places where they did not previously exist.

When the run finishes or is canceled, its temporary resources should be closed and unnecessary access revoked. That cleanup should not wait for a future review of the automation.

## 4. Review and verification: “finished” is not evidence

The agent says it fixed the bug. Good. Now we need something beyond its own summary to demonstrate that.

A useful verification returns to the original problem: reproduce the failure on the previous version, then establish that the change resolves it without weakening the agreed constraints. It also checks neighboring flows that may have broken.

A new test turning green is not enough. We need to examine what it checks. A fix that permits access by disabling a validation step can look successful if the test asks only whether access was granted.

Another agent can perform a first review, while a person focuses on sensitive decisions. But a second model does not guarantee independence: it may share the same faulty assumptions. That is why criteria established before implementation and checks outside the author's account matter.

I would look at maintainability too. Perhaps the change works but adds a confusing exception or duplicates logic that we will later need to fix in two places. The cost does not end when the code compiles.

## 5. Shipping and monitoring: see what happens when someone uses it

Passing review means we can consider deployment. It does not mean we already know everything that will happen in production.

The change needs to go through the team's delivery process, with an accountable person and a defined way back. Depending on the system, reverting may be simple or require considerable preparation; an incident is a bad time to discover which.

Then we observe. Did login failures after password changes decrease? Did latency increase? Did errors appear elsewhere? Can the affected users actually sign in again?

Without that connection between a change and its effects, all we know is that the agent produced a PR and someone merged it. We do not know whether it improved the product.

If a problem appears, the incident must feed back into the process as information for correction. Deployment should not depend on the original agent session staying alive, and responsibility cannot disappear because that session ended.

## 6. Iteration or retirement: decide whether to keep working this way

Once the case is resolved, another question remains: is this way of working worth repeating?

Perhaps it is, with better instructions. Perhaps the chosen model was too expensive for routine work. Or perhaps the automation created so much rework that keeping it makes no sense.

Evaluation needs more than a count of closed tickets. Accepted changes, later defects, cost per useful outcome, and human review time all matter. A cheap run can become expensive if someone spends an afternoon reconstructing what it did.

Improvements should be versioned and tested before being extended. When an automation stops delivering value, retirement is work too: disable its triggers, remove persistent permissions, and establish which history is retained and who remains responsible.

Cleaning up after an individual run and retiring an automation are different things. We need both. Otherwise, we accumulate agents nobody remembers creating but that can still act.

Technical debt does not disappear because AI produced it. We can also accumulate agent debt.

## This looks a lot like engineering

If this sounds familiar, it is because many pieces already existed. Least privilege, tests, auditing, observability, version control, and incident response did not begin with language models.

[IBM describes lifecycle management](https://www.ibm.com/think/topics/agent-lifecycle-management) as an extension of development, security, and AI operations practices. The difference is applying them to systems that can choose different tools and paths within the same kind of task.

Platforms for coordinating that work are emerging too. [UiPath introduced Maestro Flow](https://www.uipath.com/newsroom/uipath-launches-maestro-flow) to build and operate processes involving agents, people, and other systems. At the time of writing, its [Maestro Flows documentation](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/build-maestro-flows) still labels it as a preview. I take that as a signal of the problem the industry is trying to solve, not a guarantee that buying a platform solves it for us.

This operational layer is often called **AgentOps**. The name matters less than the practice. We do not need an enormous structure to get started, or a committee approving every spelling correction. Controls should follow risk: our authentication example deserves more attention than a documentation change.

With several agents, coordination becomes another concern. Who assigns work, who may change priorities, what happens when agents disagree, and when a person must intervene. A collection of fast-working agents does not automatically become a well-functioning team.

## The outcome worth measuring

What interests me about this approach is how it changes the question. Instead of watching only how much code the agent produced, it forces us to look at what improved because of that code and how much work it took to get there.

In our example, the result is not a tidy diff or a successful run. It is people being able to log in again, without introducing a vulnerability, leaving access open, or turning a small fix into an ongoing maintenance burden.

That is why I think an important part of programming's future will be here. We will keep building software, but we will also have to operate the systems that build it.

The model and prompt matter. What makes them usable in daily work is that less glamorous journey: preparing, limiting scope, verifying, observing, and knowing when to stop running.

An agent writing code makes an impressive demonstration. A process that lets us reasonably trust its results is what we need the following day.

## References

- Warp, [*AI Coding Agent Lifecycle Management*](https://www.warp.dev/articles/ai-coding-agent-lifecycle-management).
- IBM, [*What Is Agent Lifecycle Management?*](https://www.ibm.com/think/topics/agent-lifecycle-management).
- UiPath, [*UiPath Introduces UiPath Maestro Flow*](https://www.uipath.com/newsroom/uipath-launches-maestro-flow).
- UiPath Docs, [*Maestro Flows (Preview)*](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/build-maestro-flows).

---

This article adapts a script I prepared for **El Rincón de Sarreche**, where we talk about artificial intelligence, software, and how work is changing. You can [watch the original video on YouTube](https://youtu.be/qpJzAHKA7UY).
