---
title: "P vs NP: the problem that defines the limits of efficiency"
description: "The open question asking whether finding a solution can be as efficient as verifying that a proposed solution is correct."
publishedAt: "2026-08-11"
---

There is a question in mathematics and computer science that changes the way you think about difficulty once you truly understand it.

Not all hard problems are hard in the same way.

Some problems can be solved quickly. For others, we do not know how to find a solution quickly, even though we can verify it quickly when someone gives us a candidate answer.

For decades, nobody has been able to prove whether those two abilities —finding and verifying— are fundamentally equivalent.

The question takes only three symbols to write:

> Does P equal NP?

## First: what does solving something “quickly” mean?

To study efficiency, it is not enough to count the seconds a program takes on a particular computer. Hardware changes, and a small input can hide an algorithm that becomes impractical as the input grows.

Instead, we study how the amount of work increases with the size of the input.

An algorithm is considered efficient in this theoretical setting when its running time is bounded by a polynomial in the input size: `n`, `n²`, `n³`, or some other fixed power. This does not guarantee that every polynomial algorithm is fast in practice, but it separates reasonably scalable growth from exponential growth such as `2ⁿ`.

If a decision problem can be solved in polynomial time by a deterministic algorithm, it belongs to the class **P**.

Sorting data, finding a shortest path in many kinds of networks, or determining whether a route exists between two points are associated with problems for which we have polynomial-time algorithms.

Roughly speaking, P represents what we know how to solve efficiently.

## NP does not mean “non-polynomial”

This is one of the most common misunderstandings. **NP does not mean “non-polynomial.”**

The abbreviation stands for *nondeterministic polynomial time*. A more intuitive way to understand the class is through verification.

A problem belongs to NP if, whenever the answer is “yes,” there is a certificate or candidate solution that can be verified in polynomial time.

Imagine receiving a completed Sudoku grid. Finding the solution from scratch may be difficult. Checking that every row, column, and region contains the correct numbers is straightforward.

Or consider a route that must visit a collection of cities without visiting any city twice. Finding it may require exploring an enormous number of possibilities. But if somebody gives you the route, verifying that it visits each city exactly once requires little work.

NP contains problems whose positive solutions can be checked efficiently, even when we do not know how to find them that way.

## We know that P is inside NP

Every problem we can solve quickly can also be verified quickly: we can simply solve it again and compare the answer.

Therefore, we know that:

```text
P ⊆ NP
```

The great question is whether this inclusion is strict.

- If `P = NP`, every problem whose solution can be verified efficiently can also be solved efficiently.
- If `P ≠ NP`, some problems are fundamentally easier to verify than to solve.

Most specialists suspect that `P ≠ NP`, but even a widely shared belief is not a proof.

## NP-complete problems

Inside NP is a particularly important group: the **NP-complete** problems.

A problem is NP-complete when it meets two conditions:

1. It belongs to NP.
2. Every problem in NP can be transformed into it through a polynomial-time reduction.

A reduction translates one problem into another without allowing the cost of the translation to hide the difficulty. If we learn how to solve the target problem efficiently, we can efficiently solve the original problem too.

In 1971, Stephen Cook showed that a logical problem related to Boolean satisfiability occupies this central position. This work gave rise to the theory of NP-completeness, which Leonid Levin also developed independently.

SAT asks whether there is an assignment of true and false values that makes a Boolean formula true. It sounds specific, but every problem in NP can be encoded as an equivalent instance.

This has an extraordinary consequence:

> If we find a polynomial-time algorithm for a single NP-complete problem, then P = NP.

We would not solve only that problem. Through reductions, we would obtain polynomial-time algorithms for every problem in NP.

## Why it matters beyond theory

Many planning, logistics, design, verification, discovery, and optimization problems have versions related to NP or NP-complete problems.

If `P = NP` and the proof produced genuinely usable algorithms, some tasks that are currently out of reach could become tractable: finding certain mathematical proofs, optimizing complex networks, designing molecules, or searching vast combinatorial spaces.

There would also be profound security consequences. Some cryptographic systems depend on problems believed to be hard to solve. Precision matters, however: not all cryptography rests on NP-complete problems, and proving `P = NP` would not automatically provide a practical attack against every existing system.

“Polynomial” includes algorithms with enormous constants or exponents so high that they would remain useless in practice. An equality between complexity classes is a theoretical statement; its concrete impact would depend on the proof and the algorithms it produced.

## If P were different from NP

A proof that `P ≠ NP` would confirm that some searches inherently require more resources than verifying their results.

It would not automatically reveal the best algorithm for each problem or eliminate approximations, heuristics, and specialized solutions. But it would establish a fundamental boundary: some tasks are difficult for reasons deeper than our failure to find the right trick.

This is the philosophical dimension of the question. We do not know whether the apparent distance between discovering a solution and recognizing one reflects a structural limit or merely our current lack of ingenuity.

## Hard does not mean impossible

P vs NP belongs to complexity theory, not computability theory.

The Halting Problem asks whether a task can be solved algorithmically in every case. P vs NP studies how many resources are required to solve tasks that are computable.

An NP-complete problem is not undecidable. We can solve it through exhaustive search and eventually obtain an answer for a finite input. The problem is that the required time may grow so quickly that the solution becomes useless at real-world scale.

This distinction separates two kinds of limits:

- **Computability:** what can be solved by an algorithm.
- **Complexity:** what can be solved with a reasonable amount of resources.

## A boundary that remains open

P vs NP remains unsolved. The Clay Mathematics Institute lists it as one of the Millennium Prize Problems and offers a one-million-dollar award for a solution that meets its requirements.

But the value of the problem is not the prize. It lies in the question it forces us to hold:

If a correct solution can be recognized quickly, can it also be discovered quickly?

We still do not know whether efficiency is a structural limit or a temporary boundary. As long as the question remains open, we also do not know how much of what we consider intractable today is truly inevitable.

## References

- Clay Mathematics Institute, [*P vs NP*](https://www.claymath.org/millennium/p-vs-np/).
- Stephen A. Cook, [*The Complexity of Theorem-Proving Procedures*](https://doi.org/10.1145/800157.805047), 1971.

---

This piece grew out of a script I prepared while experimenting with AI-assisted audiovisual content. You can [watch the original video on YouTube](https://youtu.be/VktmfVGSVzc).
