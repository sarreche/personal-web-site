---
title: "What an AI agent looks like inside — explained seriously"
description: "Model, tools, memory, control, permissions, and validation: the parts that turn a language model into a system capable of taking action."
publishedAt: "2026-08-28"
---

Some people claim that AI agents will transform a large share of programming work and many administrative tasks in a very short time.

We do not know whether this will happen at the speed suggested by the most aggressive predictions.

What we do know is that agents are moving to the center of the automation conversation. When I prepared the original script for this content in March 2026, the technology was beginning to take off. Since then, systems capable of sustaining long tasks, using tools, and operating real applications have continued to advance.

Amid so much hype, it is worth doing something less spectacular and more useful: opening an agent to understand how it works inside.

An agent is not magic. It is not simply a chatbot that “thinks harder,” either.

It is a system designed to interpret an objective, choose steps, execute actions, observe results, and continue until it reaches an exit condition.

## The difference between responding and acting

A traditional chatbot receives a message and produces a response.

An agent receives an objective and controls part of the workflow required to accomplish it. It may decide to search for information, read a file, call an API, change a record, execute code, or request confirmation before proceeding.

Its basic cycle looks like this:

```text
observe → decide → act → observe the result → decide again
```

The agent repeats this cycle until it considers the task complete, encounters an error, reaches a limit, or hands control back to a person.

This ability to select and execute steps changes the nature of the system.

## An agent is not a model

The language model is central, but it is not the complete agent.

A model receives context and generates a continuation: text, structured output, or an intention to call a tool. By itself, it does not automatically have access to email, the file system, a database, or the internet. Nor does it retain permanent memory between runs unless an application provides it.

The agent appears when we surround the model with software that manages context, tools, state, permissions, validation, and exit conditions.

We can think of the model as the engine. The architecture determines where the vehicle can go, which controls it has, and what happens when something goes wrong.

These are its main components.

## 1. Objective and success condition

Every agent needs a task.

“Help me with customers” is too open. “Classify new tickets, propose a response using approved documentation, and escalate billing cases” describes observable work.

Along with the objective, the system needs a completion condition. It must know when it produced the expected result, when it cannot continue, or when it has exhausted its attempts.

Without an explicit exit, an agent may keep iterating, repeat actions, or declare success too early.

## 2. The model

The model interprets language, relates information, and selects the next step.

It does not execute a fixed plan like traditional software. It produces probabilistic decisions from the available context. This flexibility allows it to work with ambiguous requests and unstructured data, but also introduces variability and errors.

The largest model is not always the best choice. Different stages may use different models according to cost, speed, reasoning ability, or modality.

## 3. Instructions

Instructions define the role, process, and behavioral boundaries.

They may include:

- Which objective to pursue.
- Which steps to follow.
- Which sources may be used.
- How to handle missing information.
- Which actions require approval.
- Which format the final result must use.

Vague instructions force the model to fill gaps. Clear instructions reduce accidental decisions, although they never replace real controls in software.

## 4. Context and perception

The agent needs to observe its environment.

Context may contain the user’s request, recent history, files, search results, application state, or data obtained through tools.

“Perception” does not mean experiencing the world as a person does. It means converting external information into a representation the model can process.

The context window is limited. Adding too much irrelevant material increases cost and the chance that important signals will be lost.

## 5. Control flow and execution loop

An orchestration layer manages the agent cycle.

It sends context to the model, interprets the output, executes the selected tool, adds the result, and calls the model again.

It also imposes deterministic conditions:

- Maximum number of steps.
- Maximum running time.
- Token or financial budget.
- Retry rules.
- Error handling.
- Conditions for returning a final answer.

Adaptive behavior lives inside a container of traditional software.

## 6. Bounded planning and reasoning

For a complex task, the agent may break work into subtasks, choose an order, and revise the plan as it receives information.

We do not need to assume the system “thinks” like a person. Operationally, it generates intermediate representations that help it choose coherent actions.

Planning must be bounded. A reliable agent does not explore forever. It works within a budget and knows when to ask for help.

## 7. Tools

Tools allow the agent to do more than generate text.

They may offer reading capabilities:

- Search the web.
- Query a database.
- Read documents.
- Inspect metrics.

Or action capabilities:

- Send a message.
- Create a ticket.
- Modify a file.
- Execute code.
- Update a business system.

Every tool needs a clear contract: name, purpose, parameters, response types, and possible errors. A model can only use a capability well when the system describes it clearly.

## 8. Knowledge retrieval

The model should not answer everything from its parameters.

A retrieval mechanism finds relevant information in documentation, knowledge bases, or external sources and adds it to the context when needed.

This reduces dependence on outdated knowledge and makes it possible to cite policies or organization-specific data.

Retrieval can fail too: it may return an irrelevant document, miss the correct one, or incorporate malicious content. Retrieving information is not the same as validating that it is true or safe.

## 9. State and memory

State records what happened during execution: completed steps, results, errors, decisions, and pending data.

Memory may preserve information beyond one run, including user preferences, interaction summaries, or approved facts.

Memory should be distinguished from history. Saving everything forever does not necessarily produce a better agent. It can increase cost, confusion, and privacy risk.

Reliable memory needs rules covering what is stored, for how long, where it came from, and how it can be corrected or deleted.

## 10. Orchestration between agents

Not every solution needs multiple agents.

One agent with good tools is usually easier to understand, evaluate, and maintain. When responsibilities are genuinely different, a coordinating agent may delegate to specialists, or the system may transfer control between agents.

Multiplying agents adds communication costs, context loss, and new failure modes. A more theatrical architecture is not necessarily more intelligent.

Complexity should appear because the problem requires it, not because “multi-agent” sounds advanced.

## 11. Policies, permissions, and human confirmation

An agent capable of acting needs limits that do not depend only on the model remembering an instruction.

Policies determine which tools it can use, on which resources, with which credentials, and under which conditions.

A read action does not carry the same risk as sending an email, deleting data, or making a payment. Permissions should follow least privilege and distinguish reversible from irreversible actions.

Sensitive operations may require human confirmation. This checkpoint is not a failure of autonomy. It prevents a probable interpretation from becoming a real-world consequence without oversight.

## 12. Validation, observability, and monitoring

Validation checks that inputs, tool calls, and results satisfy explicit conditions.

It may include:

- Schema and type validation.
- Deterministic business rules.
- Consistency checks.
- Review by another model or process.
- Tests before applying a change.
- Logging of calls, permissions, and results.

Observability makes it possible to reconstruct what the agent did and how it reached a particular state. Without traces, metrics, and logs, a complex failure becomes an anecdote that cannot be reproduced.

Monitoring continues after deployment. Models change, tools evolve, and users discover inputs the original design never anticipated.

## What can go wrong

The apparent intelligence emerges from coordinating all these components. So do the failures.

An agent may:

- Misinterpret the objective.
- Choose the wrong tool.
- Use outdated data.
- Enter a retry loop.
- Trust manipulated external content.
- Perform a valid action in the wrong context.
- Produce a convincing but false response.

Improving only the model does not eliminate these failures. Many belong to the architecture, permissions, data, or validation process.

## How reliability is built

A reliable agent is not one that never makes mistakes. It is one that operates within known boundaries and fails in a controlled manner.

That requires bounded tasks, well-designed tools, minimum permissions, verifiable criteria, budgets, traceability, and human intervention points.

It also requires realistic evaluations. Testing the happy path is not enough. We need to observe behavior with missing information, conflicting instructions, unavailable tools, and out-of-scope requests.

Autonomy should be earned gradually through evidence.

## The model is the engine; architecture creates behavior

An agent is not a large model.

It is a system composed of:

- Objectives and exit conditions.
- A model that selects steps.
- Instructions and context.
- A control loop.
- Tools and information retrieval.
- State and memory.
- Policies and permissions.
- Continuous validation and monitoring.

The model provides capability. The architecture turns that capability into behavior that is useful, observable, and sufficiently safe.

Once we understand these parts, agents stop looking like magic. Only then can we seriously discuss which tasks they should perform, how much autonomy they should receive, and which responsibility remains ours.

## References

- OpenAI, [*A practical guide to building agents*](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/).
- Anthropic, [*Building Effective AI Agents*](https://www.anthropic.com/engineering/building-effective-agents).

---

This piece grew out of a script I prepared to explain agent architecture without hiding it behind magical language. You can [watch the original video on YouTube](https://youtu.be/7BFPEKN7FwQ).
