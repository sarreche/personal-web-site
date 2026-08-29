---
title: "The Halting Problem: an absolute limit of computation"
description: "Why no algorithm can correctly decide whether every possible program will eventually stop or continue running forever."
publishedAt: "2026-08-09"
---

Something blew my mind when I first understood it. This is not hype, marketing, or futurism. It is an uncomfortable truth: some problems cannot be solved by any computer in the general case.

It is not because we still lack processing power. It is not because we need more data, more GPUs, or more stable quantum computers. It is because there are logical limits to what can be computed.

One of the most important examples is the Halting Problem.

## Before modern computers

In 1936, Alan Turing was studying a mathematical question known as the *Entscheidungsproblem*: could there be a mechanical procedure capable of deciding whether any statement in a logical system was provable?

To approach that question, he first needed to make the meaning of a mechanical procedure precise. His answer was the abstract model we now call a Turing machine.

It was not a physical computer. It was a mathematical construction made from a few simple elements:

- A tape divided into positions.
- A head capable of reading and writing symbols.
- A finite set of states.
- Rules that determine what happens at each step.

This minimal structure can represent any algorithm under the classical notion of effective computation. The Church–Turing thesis states that every effectively calculable procedure can be expressed through a model equivalent to a Turing machine.

It is called a *thesis*, not a theorem, because it connects an informal notion —what can be calculated by an effective procedure— with a formal mathematical model. The many equivalent models of computation provide strong evidence for it, but the statement cannot be proved without first turning that informal notion into a formal definition.

## The dangerous question

Once programs can be represented formally, a seemingly reasonable question appears:

> Is there a general algorithm that receives a program and an input, then determines whether the program will stop or continue running forever?

The important word is **general**. The answer is obvious for some programs:

```text
while (true) {
  // continue forever
}
```

We can also run a program and observe that it stops. The challenge is to build one procedure that answers correctly for **every** program and every input without having to wait forever.

## A program designed to contradict the analyzer

Suppose that universal algorithm exists. We will call it `H`.

`H` receives a program `P` and an input `x`, and always gives one of two answers:

- `P` stops when given `x`.
- `P` runs forever when given `x`.

Now we construct another program, `D`, that uses the answer from `H` to do exactly the opposite:

```text
D(P):
  if H(P, P) says "halts":
    continue forever

  if H(P, P) says "does not halt":
    halt
```

`D` asks what will happen when `P` runs with its own code as input. If `H` predicts that it will stop, `D` enters an infinite loop. If `H` predicts that it will run forever, `D` stops.

Then we ask the question that breaks our initial assumption: what happens when we run `D(D)`?

- If `H` says that `D(D)` stops, the definition of `D` makes it run forever.
- If `H` says that `D(D)` runs forever, the definition of `D` makes it stop.

In either case, `H` is wrong. The contradiction does not show that our hypothetical analyzer is difficult to build. It shows that a universal analyzer that is always correct cannot exist.

## Undecidable does not mean useless

The Halting Problem is **undecidable**. There is no algorithm that can correctly solve every possible instance and always terminate.

This does not mean we can never determine whether a program will stop. We can solve many specific cases using proofs, static analysis, time limits, or knowledge about the program’s structure.

If a program eventually stops, we can discover that by running it and waiting. What we do not have is a general procedure that also confirms every case in which execution will continue forever.

That distinction matters: we can build highly useful tools even though no perfect tool exists for the universal case.

## The limit applies to artificial intelligence too

An artificial intelligence model can find patterns, propose invariants, run tests, and analyze code in extraordinarily useful ways. That does not turn it into a general solution to the Halting Problem.

It may be correct for a vast number of programs. It may produce a likely prediction. It may recognize structures a person would miss. What it cannot provide is a computable algorithm that decides **every** possible program correctly with a universal guarantee.

More computing power can make previously expensive problems tractable. It cannot make a mathematically undecidable problem decidable.

## Beyond halting: Rice’s theorem

Rice’s theorem extends this intuition. Informally, every nontrivial semantic property of the behavior computed by arbitrary programs is undecidable in general.

“Semantic” is important: this concerns what a program does, not purely syntactic properties such as how many lines it contains or whether a particular sequence of text appears in its source. “Nontrivial” means that the property holds for some possible behaviors but not all of them.

This does not make software analysis impossible. It marks the boundary of what a general tool can guarantee when faced with any imaginable program.

## Remembering limits is clarity

We live in a time when it is easy to imagine that every technological barrier will disappear with more scale, more data, or more processing power.

The Halting Problem reminds us that computation has formal limits independent of hardware. The theory of computation does not only teach us what we can build. It also allows us to recognize what no general algorithm can do.

Accepting those limits is not pessimism. It is a form of intellectual maturity. It helps us distinguish between a problem that needs better engineering and one whose universal formulation demands an impossible guarantee.

## References

- Alan M. Turing, [*On Computable Numbers, with an Application to the Entscheidungsproblem*](https://www.abelard.org/turpap2/tp2-ie.asp), 1936.
- Henry Gordon Rice, [*Classes of Recursively Enumerable Sets and Their Decision Problems*](https://www.ams.org/journals/tran/1953-074-02/S0002-9947-1953-0053041-6/S0002-9947-1953-0053041-6.pdf), 1953.

---

This piece grew out of a script I prepared while experimenting with AI-assisted audiovisual content. You can [watch the original video on YouTube](https://youtu.be/LKMysVNDIcQ).
