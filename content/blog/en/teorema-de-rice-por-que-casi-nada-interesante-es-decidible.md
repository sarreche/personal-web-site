---
title: "Rice’s theorem: why almost nothing interesting is decidable"
description: "The limit that extends the Halting Problem to every nontrivial semantic property of programs."
publishedAt: "2026-08-28"
---

After learning about the Halting Problem, we might assume that it is an exception. Perhaps we cannot decide whether every program will stop, but we could still build universal analyzers that answer other important questions about program behavior.

Rice’s theorem destroys that hope.

Informally, it says:

> Every nontrivial property of the function computed by a program is undecidable in general.

The statement is short, but every word matters. To understand the theorem’s true scope, we need to separate three ideas: semantic properties, nontrivial properties, and universal decision procedures.

## Syntax is not semantics

A **syntactic** property describes how a program is written. We can ask whether its source contains a certain word, how many lines it has, or whether it uses a particular language construct.

Many such questions can be answered by inspecting the program text. The analysis terminates because the source is finite.

A **semantic** property concerns what the program computes or does. For example:

- Does it always return a positive number?
- Does it accept any input?
- Does it compute the same function as another program?
- Does it ever produce a particular result?
- Does it halt on every input?

Two programs with completely different syntax can compute exactly the same function. For Rice’s theorem, if a property depends only on that function and not on how the code was written, it is a semantic property.

The theorem does not say that everything about a program is impossible to decide. It concerns computed behavior, not every characteristic of a program’s representation.

## What “nontrivial” means

A property is trivial if it holds for every program or for no program at all.

“The program computes some computable function” is true for every program inside the model. An algorithm can always answer “yes” and be correct. Similarly, a property that is impossible for every program can be decided by always answering “no.”

A property is **nontrivial** when it divides the space of behaviors:

- At least one program has the property.
- At least one program does not.

Interesting properties are usually of this kind. We want to distinguish safe programs from unsafe ones, equivalent programs from different ones, or programs capable of producing a result from those that never will.

Rice proved that when this distinction depends on the computed function, there is no general algorithm that always terminates and answers correctly for every possible program.

## The limit lies in the universal case

Suppose we want to decide whether a program ever returns the number `42`.

For many programs, the answer will be straightforward. We can run them, examine their structure, or mathematically prove which results they produce. We can even build tools that solve a vast number of real-world cases.

What the theorem rules out is a universal guarantee: an analyzer that receives any arbitrary program, always terminates, and correctly determines whether that program will produce `42` for some input.

This distinction prevents a common misunderstanding. Undecidable does not mean that every case is mysterious. It means that no algorithmic procedure can solve **every** case in the class.

## The intuition behind the proof

The central idea is to reduce the Halting Problem to the semantic property we want to decide.

Imagine a nontrivial property `Q`. Because it is nontrivial, there is some program whose behavior has `Q` and another whose behavior does not.

Now we construct a new program that receives an input but first simulates another computation whose halting behavior we want to determine:

```text
new_program(input):
  simulate P(x)

  if P(x) halts:
    behave like a program that has Q
```

If `P(x)` never stops, the new program never reaches the behavior with property `Q`. If `P(x)` stops, it does.

Therefore, if we had a universal algorithm capable of deciding `Q`, we could use it to decide whether `P(x)` halts. But the Halting Problem is already known to be undecidable.

The supposed decision procedure for `Q` would lead to a contradiction. The complete technical argument must account carefully for the function represented when the simulation does not terminate, but this is the underlying intuition: any nontrivial semantic property can hide an instance of the Halting Problem inside it.

## What Rice’s theorem does not say

The theorem is powerful, but it should not be overstated.

It does not say that static analysis is useless. It does not say that software verification is impossible. Nor does it say we can never prove that a program has a property.

We can obtain guarantees by restricting the language, limiting the class of programs, requiring annotations, accepting conservative answers, or allowing a tool to say, “I do not know.”

We can also build analyzers that detect many cases while producing false positives, false negatives, or failing to terminate on certain inputs.

What is impossible is combining all three of these conditions for a nontrivial semantic property:

1. Accept every possible program.
2. Always terminate.
3. Always return the correct answer.

## What this means for artificial intelligence

AI can analyze code, detect vulnerabilities, infer intent, and anticipate behavior with increasing effectiveness. It can be extraordinarily useful without becoming a universal decision procedure.

Rice’s theorem does not prevent an AI system from being right about the programs we encounter in practice. It prevents any computable system from guaranteeing a correct answer for every arbitrary program regarding every nontrivial semantic property.

A high-probability prediction is not a universal proof. A useful tool does not need to be infallible. And an increasingly powerful system still operates within the logical limits of computation.

## A more mature technology

Rice’s theorem does not diminish technology. It makes our understanding of technology more precise.

It tells us that we can build powerful systems and automate an enormous amount, but we cannot escape logic. It forces us to state our restrictions, choose the guarantees we actually need, and recognize when a tool may answer “yes,” “no,” or “I cannot determine that.”

The computable universe is full of boundaries. Remembering them is not surrender. It is designing with clarity.

## References

- Henry Gordon Rice, [*Classes of Recursively Enumerable Sets and Their Decision Problems*](https://www.ams.org/journals/tran/1953-074-02/S0002-9947-1953-0053041-6/S0002-9947-1953-0053041-6.pdf), 1953.
- Alan M. Turing, [*On Computable Numbers, with an Application to the Entscheidungsproblem*](https://www.abelard.org/turpap2/tp2-ie.asp), 1936.

---

This piece grew out of another script I prepared while experimenting with AI-assisted audiovisual content. You can [watch the original video on YouTube](https://youtu.be/6Fxxn7hNvkY).
