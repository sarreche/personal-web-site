---
title: "Reducibility and NP-completeness: how problems are classified"
description: "How reductions compare difficulty, what NP-hard and NP-complete mean, and why recognizing a problem's structure changes the strategy."
publishedAt: "2026-08-23"
---

When we begin studying theory of computation, the first question often appears binary:

**Can this problem be solved or not?**

Computability tells us which tasks an algorithm can perform in principle. Knowing that something is computable, however, does not tell us whether it can be solved with reasonable resources.

A second question therefore appears:

**How difficult is it to solve?**

To compare problems, we need a way to connect them. That tool is **reducibility**.

Reducing one problem to another lets us show that they share a structure of difficulty. From that idea, we can build classes, identify NP-complete problems, and avoid spending years searching for an efficient algorithm without first understanding the kind of barrier we face.

## Solving and verifying

Before discussing reductions, let us recall two important classes of decision problems.

**P** contains problems solvable in polynomial time by a deterministic algorithm. Informally, these are problems for which we know procedures that scale reasonably with input size.

**NP** contains problems whose yes answers have certificates verifiable in polynomial time.

For example, finding a route that visits certain cities under a limit may be hard. But if someone provides a specific route, we can quickly check whether it visits the required cities and satisfies the limit.

Every problem in P is also in NP: if we can find the answer efficiently, we can verify it efficiently.

What we still do not know is whether every problem in NP is also in P. This is the **P versus NP** question.

## What it means to reduce a problem

Suppose we have two decision problems, A and B.

We say that **A polynomial-time reduces to B** if there is an efficient transformation that converts every instance of A into an instance of B while preserving the answer:

```text
x is a yes instance of A
        if and only if
f(x) is a yes instance of B
```

The transformation `f` must also run in polynomial time. If the conversion were harder than the original problem, it would not help us compare efficiency.

The usual notation is:

```text
A ≤p B
```

If we know an efficient algorithm for B, we can solve A as follows:

1. Transform the instance of A using `f`.
2. Solve the resulting instance of B.
3. Interpret that answer as the answer to A.

The reduction therefore lets us say that **B is at least as hard as A**.

## Direction matters

This is the most common mistake.

To prove that a new problem B is hard, we must take a problem A already known to be hard and reduce it **to B**:

```text
known hard problem → new problem
```

Showing that B reduces to A does not prove B is hard. It only shows that B is no harder than A, because a solution for A could be used to solve B.

Translation offers a useful analogy.

If I can translate any text in language A into language B, then a perfect translator for B would also let me understand A. This shows that B has enough expressive capacity to represent every case of A.

The arrow points toward the destination receiving the difficulty.

## Reductions transmit algorithms and barriers

Reductions support reasoning in two directions.

If `A ≤p B` and B belongs to P, then A belongs to P too. We transform A and use B's efficient algorithm.

But if `A ≤p B` and A is known to be hard for the whole class NP, then B inherits at least that difficulty.

The same connection can carry good news—an algorithm—or bad news—a complexity barrier.

Reductions are also transitive. If A reduces to B and B reduces to C, then A reduces to C. We can chain transformations and build a network connecting apparently unrelated problems.

## What NP-hard means

A problem is **NP-hard** if every problem in NP can be polynomial-time reduced to it.

It is therefore at least as difficult as the hardest problems in NP.

An NP-hard problem does not have to belong to NP. It may not even be a decision problem or possess efficiently verifiable certificates.

The label describes hardness, not membership.

If we found a polynomial-time algorithm for an NP-hard problem that supports the corresponding reductions, we could efficiently solve every problem in NP.

## What NP-complete means

A problem is **NP-complete** when it satisfies two conditions:

1. **It belongs to NP:** a yes answer can be verified in polynomial time.
2. **It is NP-hard:** every problem in NP polynomial-time reduces to it.

We can summarize this as:

```text
NP-complete = in NP + NP-hard
```

NP-complete problems are the hardest problems within NP. If one had a deterministic polynomial-time algorithm, all problems in NP would, proving that `P = NP`.

They form a connected core: a fundamental improvement for one can propagate to all of them through reductions.

## SAT: the first NP-complete problem

The Boolean satisfiability problem, **SAT**, asks whether some assignment of true and false values makes a logical formula true.

In 1971, Stephen Cook showed that every computation performed by a nondeterministic polynomial-time machine could be represented by a polynomial-size logical formula. Leonid Levin independently obtained an equivalent result.

The Cook–Levin theorem therefore established that SAT is NP-complete.

This was decisive because it provided a starting point. Proving every new problem hard no longer required beginning from the full definition of NP. It was enough to reduce SAT—or another previously established NP-complete problem—to it.

In 1972, Richard Karp used this strategy to connect SAT to 21 combinatorial problems. Hardness began spreading through a chain of reductions.

## How to prove a problem NP-complete

To prove that a new problem B is NP-complete, we normally follow two steps.

### 1. Show that B belongs to NP

We describe a certificate for a yes answer and a verifier that checks it in polynomial time.

Saying that it “looks easy to verify” is not enough. We need to identify which information is provided and how much checking it costs.

### 2. Show that B is NP-hard

We choose a problem A already known to be NP-complete and build a polynomial-time reduction:

```text
A ≤p B
```

We then prove:

- The transformation runs in polynomial time.
- Yes instances of A become yes instances of B.
- No instances of A become no instances of B.

Logical equivalence matters as much as transformation efficiency.

## An intuitive example: Clique to Independent Set

In a graph, a **clique** of size `k` is a set of `k` vertices all connected to one another.

An **independent set** of size `k` is a set of vertices with no edges between them.

We can transform a Clique instance into an Independent Set instance by taking the complement graph: connect exactly those pairs that were not connected in the original.

Then:

```text
G contains a clique of size k
        if and only if
the complement of G contains an independent set of size k
```

Building the complement is efficient. The reduction reveals that two questions that appear opposite share essentially the same structure.

We did not solve either by brute force. We discovered that a general solution for one would solve the other too.

## Decision and optimization

NP-completeness theory is normally formulated for decision problems with yes-or-no answers.

In practice, we often want to optimize: find the shortest route, use the fewest colors, or select the largest set.

The versions are related. If I can solve the optimization problem efficiently, I can usually answer the decision version. If I can decide for different thresholds, I can often reconstruct the optimum through multiple queries.

Still, the distinction should remain clear: when we formally call a problem NP-complete, we usually mean its decision version. The optimization version is generally classified as NP-hard.

## What NP-completeness does not prove

An NP-complete problem is not impossible to solve in every instance.

Nor, while `P ≠ NP` remains open, does the classification prove that no polynomial-time algorithm exists.

It says something more precise:

- The problem concentrates the difficulty of all NP.
- A general polynomial-time algorithm would have extraordinary consequences.
- We should not assume an exact scalable solution will emerge from routine optimization.

A small instance may be solved by exhaustive search. Real cases may have special structure. A well-designed exponential algorithm may be useful at moderate sizes.

Complexity concerns general worst-case behavior; it does not condemn every concrete instance.

## What to do after recognizing a hard problem

Classification is not an invitation to give up. It is information for choosing a strategy.

Depending on the problem, we may:

- Seek approximation algorithms.
- Design heuristics for real-world data.
- Use randomized algorithms.
- Relax constraints.
- Exploit small parameters.
- Solve only bounded instances exactly.
- Isolate tractable special cases.
- Accept a solution that is good enough.

We can also reconsider whether the most general formulation is necessary. Many applications become manageable when domain-specific restrictions are included.

## A compass for investing effort

Complexity theory is not merely an abstract exercise.

It helps distinguish three very different situations:

1. We have not yet found a good algorithm.
2. The problem belongs to a family with efficient solutions.
3. The problem is connected to a barrier spanning thousands of known problems.

Reducibility builds those connections. NP-completeness identifies problems concentrating the difficulty of NP.

Understanding them changes the question. Instead of blindly insisting on an exact solution, we can decide when to approximate, relax, parameterize, or redesign.

Sometimes the correct answer is not to solve better.

It is to recognize which kind of problem we are facing.

The theory does more than classify problems. It teaches humility in the face of difficulty and shows us where effort is worth investing.

## References

- MIT OpenCourseWare, [notes on P, NP, SAT, and polynomial-time reducibility](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/mit18_404f20_lec14-1/).
- Stephen A. Cook, [*The Complexity of Theorem-Proving Procedures*](https://www.cs.cmu.edu/~15455/resources/Cook1971-complx-thm-proof.pdf), 1971.
- Richard M. Karp, [*Reducibility Among Combinatorial Problems*](https://doi.org/10.1007/978-1-4684-2001-2_9), 1972.

---

This article develops a central idea from complexity theory: before trying to optimize a problem, it helps to understand which other problems it is connected to. You can [watch the original video on YouTube](https://youtu.be/SxAjmddc9L8).
