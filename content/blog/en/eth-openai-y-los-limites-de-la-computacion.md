---
title: "ETH: OpenAI's proposal about the limits of computation"
description: "A proposed subexponential algorithm for SAT raises fundamental questions: what makes a problem hard, and how much faster could we solve it?"
publishedAt: "2026-10-27"
---

For some problems, finding an answer seems much harder than checking it. If someone hands you a valid configuration, you can review its conditions. Finding it among all possible combinations may require enormous work.

That gap is central to computational complexity. On October 26, [OpenAI announced a result that would refute the Exponential Time Hypothesis, or ETH](https://openai.com/index/building-scientific-understanding-with-academic-communities/), accompanied by a manuscript and a Lean formalization.

I want to explain what the result proposes. Its importance lies in potentially changing a theoretical boundary we use to reason about the difficulty of many problems.

## A combinations problem called SAT

Imagine a system with options that can be enabled or disabled. There are rules: at least one of these three options must be enabled; another can be disabled if an alternative is enabled. You want to know whether a configuration exists that satisfies every rule at once.

SAT, or Boolean satisfiability, expresses that question with variables taking two values: true or false. In a CNF formula, the rules are called clauses: each contains alternatives joined by “or,” and every clause must hold.

For example:

```text
(A or B or not C)
and
(not A or C or D)
```

Setting A, C, and D to true satisfies both clauses, regardless of B. That checks one solution; it does not yet count how many exist.

In 3-SAT, each clause has at most three literals, where a literal is a variable or its negation. In k-SAT, the limit is k.

With n variables, there are `2^n` possible configurations. Trying them all works, but each additional variable doubles the search. Complexity asks what the best algorithm can achieve by exploiting structure instead of visiting every combination.

## What ETH asserts

ETH asserts that solving 3-SAT in the worst case requires exponential time in the number of variables. In standard terms, it rules out a general algorithm taking `2^o(n)` time, apart from polynomial factors in the input size.

The notation may look unfamiliar. The idea is for the exponent to grow more slowly than n. One example of subexponential time is `2^sqrt(n)`: it still grows rapidly, but on a different scale from `2^(c·n)` for any positive constant c.

Reducing the base of an exponential is progress too, although it leaves that distinction intact. An algorithm taking approximately `1.3^n` time still has an exponent proportional to n. Refuting ETH requires crossing into subexponential time.

We are discussing the worst case and growth as the problem increases in size. A SAT program can therefore solve many practical instances very well while difficult questions about its general behavior remain.

## The proposal: count solutions using algebra

The manuscript [The Exponential Time Hypothesis is False](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf) presents a deterministic algorithm that exactly counts k-SAT solutions, for each fixed k, in subexponential time and polynomial space.

Counting also enables deciding: a zero result means the formula has no solution; a positive result means at least one exists. That is why k equal to three suffices to contradict ETH.

The algebraic idea starts by representing each clause as a polynomial equal to one when satisfied and zero when violated. Multiplying them makes a configuration contribute one only if it satisfies every clause. Summing that product over all configurations gives the exact number of solutions.

So far, we still have an enormous sum. The work lies in calculating it faster.

The method introduces transformations with an auxiliary parameter. At certain values, these transformations allow the calculation to separate into small groups once a few shared linear measurements are fixed. It then uses interpolation to reconstruct the original count from evaluations and Taylor coefficients.

One way to picture it: if several groups were independent, we could solve them separately and combine the results. Real clauses connect groups. The construction seeks an algebraic way to handle those connections without enumerating every global configuration. This explanation is a map of the technique; degree bounds, reconstruction costs, and exact arithmetic are essential parts of the proof.

## Why this changes the complexity map

A hardness hypothesis lets us prove conditional results: if a reference problem requires a certain amount of time, another problem cannot admit a particular speedup either. Reductions connect the two.

It is like using a reference point to measure other distances. If that point changes, we need to revisit which conclusions depended on it.

Refuting ETH would remove that basis from bounds requiring it. Conditional proofs may remain valid reasoning, but their premise would no longer justify claiming that a speedup is impossible.

The manuscript also derives subexponential algorithms for certain graph counting problems, such as counting independent sets and colorings with a fixed number of colors. To transfer the advance to other problems, input growth during a reduction matters: a polynomial transformation can increase the number of variables too much and lose the desired advantage.

That creates an interesting research program: identify which algorithms improve directly, where reusable techniques emerge, and which boundaries need a new explanation.

## Where P versus NP stands

[P versus NP](https://www.claymath.org/millennium/p-vs-np/) asks, essentially, whether problems whose solutions we can efficiently verify can also be efficiently solved. In this context, “efficiently” means polynomial time, such as `n^c` for a constant c.

Subexponential time leaves a vast intermediate space. For example, `2^sqrt(n)` grows faster than any fixed power of n. A fundamental improvement in SAT's bound can therefore happen without producing a polynomial-time algorithm.

The presented result does not, by itself, decide P versus NP. Its own significance is substantial: it challenges a more precise assertion about how much time SAT requires.

It also helps to distinguish an asymptotic improvement from an immediate advantage on a computer. Constants, polynomial factors, and the sizes at which the method becomes competitive require study and implementation. The announced contribution is an algorithm with a mathematical growth guarantee.

## What formalization contributes

The [Lean documentation](https://github.com/openai/math/blob/main/lean/docs/378.md) specifies exact counting for fixed k, subexponential time, and polynomial space. The October 25 manuscript includes tighter bounds than the one described for the formalization.

A formal proof allows checking inferences against explicit definitions. Understanding those definitions, explaining the technique, and developing its consequences remain mathematical work.

OpenAI announced a group headed by Russell Impagliazzo, Ramamohan Paturi, and Ryan Williams to examine and explain the result. Combining a formal construction with a shared explanation can help turn it into a tool for further research.

## An announcement that also includes mathematics and physics

The same publication presents a proposal on local smoothing, related to wave concentration and with consequences for Kakeya and Stein restriction. It also announces a rigorous construction of quantum field theories, including QCD, which describes the strong interactions of quarks and gluons. These are different fields, connected by fundamental mathematical questions.

In computation, the open question is particularly stimulating: **how many problems admit much better algorithms than our hypotheses led us to expect?**

To me, that is the scientific value of understanding the ETH result: expanding what we can look for and offering a concrete technique from which to start.

I continue these conversations on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.

## References

- [OpenAI: Working with academic communities to build scientific understanding](https://openai.com/index/building-scientific-understanding-with-academic-communities/), October 26, 2026.
- [OpenAI: The Exponential Time Hypothesis is False](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf), manuscript revised October 25, 2026; especially Sections 1 and 2.
- [Scope of the Lean formalization](https://github.com/openai/math/blob/main/lean/docs/378.md).
- [Clay Mathematics Institute: P vs NP](https://www.claymath.org/millennium/p-vs-np/).
