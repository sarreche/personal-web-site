---
title: "Algorithms as formal decision systems: trees, states, and objective functions"
description: "A structural view of algorithms through states, transitions, decisions, constraints, and objectives, beyond a simple list of steps."
publishedAt: "2026-08-24"
---

When we think about an algorithm, we often imagine a recipe.

Step one. Step two. Step three.

That image is useful at first, but incomplete. It works well for a linear procedure in which everything happens in a fixed order. Many real algorithms compare alternatives, remember information, revisit decisions, and change behavior according to their current state.

An algorithm is not merely a sequence.

It can be understood as a **formal decision system**: an architecture that transforms information into actions and new states according to explicit rules.

Changing the perspective—from lines of code to decision structures—helps us understand classical algorithms, optimization systems, and intelligent agents. It also reveals where redesign is possible.

## From recipe to system

A recipe lists instructions:

```text
receive input → process → return output
```

But even a simple algorithm may contain branches:

```text
if A occurs → execute X
if B occurs → execute Y
```

And loops:

```text
while the condition is not satisfied → update and repeat
```

Once decisions and repetition appear, the algorithm no longer looks like a static list. It becomes a system moving through different configurations according to data and intermediate results.

Code is one way to express that system. The logical structure exists at another level.

## The components of a decision system

A useful description can separate six components:

1. **Inputs:** information received by the system.
2. **State:** what it needs to remember at a given moment.
3. **Actions or operations:** changes it can perform.
4. **Transition rules:** how an action and input produce a new state.
5. **Exit conditions:** when it stops and which result it returns.
6. **Objective or criterion:** what it means to choose well when alternatives exist.

Not every algorithm needs each component in the same form. A language recognizer may accept or reject without optimizing a numerical objective. A sorting algorithm has a correctness condition, while different implementations may pursue different time or memory goals.

The framework helps us ask which structure is present; it does not force every algorithm into the same shape.

## State: a compressed memory of the past

The **state** represents all information from the past that the algorithm considers necessary for deciding what to do next.

In binary search, the state may include the boundaries of the interval that could still contain the element. In Dijkstra's algorithm, it includes the best known distances and the nodes already processed. In a network protocol, it may indicate whether the system is awaiting a connection, acknowledgment, or closure.

Abstractly:

```text
current state + new information → next state
```

A deterministic transition function can be written as:

```text
δ(state, input) = new state
```

In a probabilistic system, the same action may lead to several states with different probabilities.

Designing the state is a fundamental decision. If it preserves too little information, the system cannot distinguish important situations. If it preserves too much, cost and complexity increase.

In a sense, a good state is a useful compression of history.

## Decision trees: every comparison opens paths

An algorithm based on comparisons can be represented as a decision tree.

- Each internal node represents a question or comparison.
- Each branch represents a possible answer.
- Each leaf represents termination and an output.
- Each root-to-leaf path represents an execution for a certain kind of input.

For example, finding the largest of three numbers requires comparisons and follows different paths according to their outcomes. There is no single sequence executed for every input; there is a structure of possible paths.

The tree reveals more than behavior. It reveals cost.

Path depth indicates the number of decisions required for that input. Maximum depth represents the worst case. Expected depth can represent average cost when an input distribution is known.

This model also helps prove lower bounds: if we need to distinguish many possible answers, the tree needs enough leaves and therefore a minimum depth.

## A tree is not always the executed algorithm

An important distinction is needed.

A decision tree may be an **analytical representation** of all possible executions even when the program never materially constructs that tree in memory.

A search algorithm may explicitly explore a state tree. A comparison algorithm may simply traverse one implicit path determined by its input.

The representation lets us see decision structure without confusing it with the concrete implementation.

## States and graphs: when paths meet again

A tree duplicates a branch whenever an alternative appears. Different executions, however, may arrive at the same state.

A **state graph** is then more precise.

Nodes represent configurations, and edges represent transitions. Several paths may reach the same node, and cycles may return to earlier states.

This representation appears in:

- Finite automata.
- Communication protocols.
- Route planning.
- Games.
- System verification.
- Agent planning.

Thinking in graphs reveals reuse opportunities. If several paths reach the same state, we can remember the result and avoid computing it again. Techniques such as memoization and dynamic programming grow from this idea.

## The objective function: defining what better means

When several valid solutions exist, we need a criterion for comparing them.

An **objective function** assigns a value to a solution, state, or trajectory. The algorithm attempts to minimize or maximize that value.

Examples include:

- Minimizing distance or travel time.
- Minimizing production cost.
- Maximizing coverage.
- Maximizing expected benefit.
- Reducing classification errors.
- Balancing speed, memory, and quality.

An optimization formulation usually has three elements:

```text
decision variables
constraints delimiting valid solutions
an objective function ordering those solutions
```

The objective function does not discover what should matter to us. It formalizes what we decide to value.

A badly designed objective can therefore produce an efficient algorithm optimizing exactly the wrong behavior.

## Constraints: the space in which action is allowed

Objectives do not operate alone.

We may want the shortest route, but some roads are closed. We may want to maximize profit, but a budget exists. We may want to answer quickly, but security and privacy rules apply.

Constraints define the set of acceptable states and actions.

This separates two questions:

1. **Feasibility:** does the solution obey the rules?
2. **Optimality:** among feasible solutions, which scores best?

Confusing them is dangerous in real systems. A decision may maximize a metric and still be unacceptable because it violates a hard constraint.

## Policy: which action to choose in each state

In a sequential system, we can represent strategy through a **policy**:

```text
π(state) = action
```

The policy indicates what to do in the current situation. It can be manually written, calculated through planning, or learned from data and experience.

In a deterministic environment, an action leads to a known next state. In an uncertain environment, it leads to a distribution of possible states.

Markov decision processes formalize this second case through:

- A set of states.
- A set of actions.
- Transition probabilities.
- Rewards or costs.
- A cumulative value criterion.

The goal is no longer to choose the best immediate action but to find a policy that produces good results over time.

## A local decision can worsen the global outcome

Suppose an action offers a high immediate reward but leads to a state from which every future option is poor.

Another action looks less attractive now but opens better paths.

A purely greedy algorithm chooses what looks best at the moment. A planning algorithm considers future consequences.

This distinction appears in routing, resource allocation, games, and automatic control. It also explains why an objective function needs a time horizon.

Optimizing the next decision is not necessarily the same as optimizing the trajectory.

## Determinism, uncertainty, and partial observation

Not every system completely knows its state or controls the outcome of its actions.

We can distinguish:

- **Deterministic:** the same input and state produce the same transition.
- **Probabilistic:** an action may produce several outcomes with known or estimated probabilities.
- **Partially observable:** the system cannot directly know the true state and must infer it from incomplete signals.
- **Adversarial:** other entities make decisions affecting the outcome.

The appropriate structure changes with the case. A rigid rule set may be enough for a protocol. A planner may need to explore alternatives. An agent may need to update beliefs and act under uncertainty.

Calling all of these an “intelligent algorithm” hides meaningful differences.

## Correctness and objective are not the same

An algorithm needs correctness conditions: properties its output must satisfy to be considered valid.

An objective function instead compares valid alternatives.

A sorting algorithm is correct if it returns the elements in order and preserves the input elements. Among correct algorithms, we may prefer one for speed, memory, stability, or ease of parallelization.

We must first ensure that the system does something allowed. Only then can we optimize how it does it.

A high score never replaces a correctness specification.

## Where redesign becomes possible

If we view an algorithm as a list of steps, improvement means making each step faster.

If we view it as a decision system, more possibilities appear:

- Change the state representation.
- Remove redundant decisions.
- Merge equivalent paths.
- Reorder comparisons.
- Add memory to avoid recomputation.
- Modify the objective function.
- Separate hard constraints from preferences.
- Change the planning horizon.
- Introduce approximation or randomness.
- Add observation and feedback.

Many important improvements do not come from executing the same structure faster. They come from formulating the problem differently.

## The connection to intelligent systems

Intelligent systems also receive information, maintain some state, choose actions, and produce changes in an environment.

The difference is not that they have abandoned algorithms. They combine multiple decision, learning, search, and control mechanisms in uncertain environments.

An agent may include:

- A model interpreting state.
- Tools executing actions.
- Memory preserving information.
- A policy choosing the next step.
- Safety constraints.
- Completion criteria.
- Evaluations reviewing the result.

Apparent behavior emerges from the interaction among these parts.

Structural thinking lets us analyze the system without relying on the vague claim that “AI decides.” We can ask which information it observed, which alternatives it had, which objective it pursued, and which boundaries constrained its action.

## An algorithm is a transformation architecture

A list of steps describes one possible execution.

A decision system describes the complete space: states, alternatives, transitions, constraints, and exit criteria.

This view is more powerful because it lets us understand not only what the algorithm does, but why it takes a path, how much it costs, what it assumes, and where it can change.

At its core, an algorithm is a formal architecture transforming information into action.

Once we understand that architecture, we stop limiting ourselves to optimizing steps.

We begin redesigning decisions.

## References

- MIT OpenCourseWare, [decision-tree model for comparison algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/ce9e94705b914598ce78a00a70a1f734_MIT6_006S20_lec4.pdf).
- Stanford University, [finite-state machines](https://web.stanford.edu/class/archive/cs/cs103/cs103.1222/lectures/27/Slides.pdf).
- UC Berkeley, [introduction to Markov decision processes](https://inst.eecs.berkeley.edu/~cs188/textbook/mdp/markov-decision-processes.html).

---

This article expands the idea of an algorithm as something deeper than a recipe: a formal structure of states and decisions that we can also redesign. You can [watch the original video on YouTube](https://youtu.be/CmQbBfkIbxU).
