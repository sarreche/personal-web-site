---
title: "Formal languages and the Chomsky hierarchy"
description: "Alphabets, grammars, automata, and four levels of expressive power for understanding which structures each model of computation can recognize."
publishedAt: "2026-08-29"
---

When you write code, it looks as though you are writing text.

Words. Symbols. Braces. Parentheses.

But it is not free-form text. It is a sequence built inside a formal system.

That difference is enormous.

A formal language does not depend on metaphor, intention, or everyday interpretation to determine whether an expression belongs to it. It defines a set of strings over an alphabet and precise rules for generating or recognizing them.

Some rules describe simple patterns. Others allow nested structures, contextual dependencies, or any computation a Turing machine can perform.

The **Chomsky hierarchy** organizes these grammars by expressive power and connects them to different models of computation.

It is not merely a linguistic classification. It is a map of the memory and capability a machine needs to recognize different kinds of structure.

## From symbols to languages

The starting point is a finite **alphabet**, usually written as `Σ`.

For example:

```text
Σ = {0, 1}
```

A **string** is a finite sequence of symbols from the alphabet:

```text
0
101
001101
```

The set of every finite string that can be built over `Σ` is written `Σ*`. It also contains the empty string, commonly represented by `ε`.

A **formal language** is simply a subset of `Σ*`:

```text
L ⊆ Σ*
```

It might contain every string with an even number of ones, every expression with balanced parentheses, or every encoding of a program valid under a given syntax.

The word “language” does not mean those strings necessarily lack meaning. We can assign semantics to them. What is formal is the membership criterion: a string is inside or outside the set according to defined rules.

## Recognizing and generating

We can describe a language from two complementary perspectives.

A **recognizer** receives a string and determines whether it belongs to the language.

A **grammar** defines how to generate valid strings from a start symbol through production rules.

A formal grammar usually includes:

- Terminal symbols, which appear in the final string.
- Nonterminal symbols, which represent intermediate structures.
- A start symbol.
- Production rules.

For example:

```text
S → aSb
S → ε
```

This grammar generates:

```text
ε
ab
aabb
aaabbb
```

That is, the language `{aⁿbⁿ | n ≥ 0}`.

Each kind of restriction on the rules produces a different family of languages.

## The hierarchy and its direction

The classical hierarchy has four levels:

```text
Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ Type 0
regular ⊂ context-free ⊂ context-sensitive ⊂ Turing-recognizable
```

The numbering can feel counterintuitive: Type 3 is the most restricted and Type 0 the most general.

Each more powerful level can describe every language in the previous one and some additional languages. In exchange, it usually needs a computational model with more memory and makes certain analysis problems more expensive—or even undecidable.

More expressive does not automatically mean better design.

The right class is the least powerful one that comfortably describes the problem, because restrictions also provide simpler algorithms and stronger guarantees.

## Type 3: regular languages

At the base are **regular languages**.

They can be described by regular grammars and regular expressions in the theoretical sense. Deterministic or nondeterministic finite automata recognize them.

A finite automaton has:

- A finite number of states.
- An initial state.
- Transitions based on the symbol being read.
- One or more accepting states.

It reads input from left to right and remembers only its current state.

This finite memory is enough to recognize patterns such as:

- Strings ending in `01`.
- Identifiers following a given format.
- Integers or decimals under a simple syntax.
- Sequences containing a particular word.
- Protocols with a finite number of phases.

Regular languages are fundamental in lexical analysis, text search, format validation, and circuit design.

## The limit of finite memory

A finite automaton cannot count without a bound or remember arbitrary nesting depth.

It therefore cannot recognize the language:

```text
L = { aⁿbⁿ | n ≥ 0 }
```

To accept a string, it would have to remember how many `a` symbols appeared and check that exactly the same number of `b` symbols follows. Since `n` has no upper bound, finitely many states are insufficient.

Nor can it recognize balanced parentheses with arbitrary depth:

```text
()
(())
(()(()))
```

We need memory that can grow with the input.

A practical warning: many libraries called “regex” add backreferences and other extensions. These tools may recognize patterns that are not regular in the mathematical sense.

The product name does not determine the formal class.

## Type 2: context-free languages

**Context-free grammars** allow rules whose left side contains a single nonterminal:

```text
A → γ
```

The symbol `A` can be replaced by `γ` without consulting the symbols around it. This is where “context-free” comes from.

These languages are recognized by **pushdown automata**.

The stack provides potentially unbounded memory, but under a specific discipline: the last item added is the first one removed.

This structure makes nesting possible:

- Balanced parentheses and blocks.
- Arithmetic expressions.
- Syntax trees.
- Recursive calls.
- Much of programming-language syntax.

For example:

```text
Expr → Expr + Term
Expr → Term
Term → number
Term → ( Expr )
```

The grammar does not enumerate every possible expression. It recursively defines how to construct them.

## Ambiguity and structure

A grammar may allow one string to have more than one parse tree.

The expression:

```text
1 + 2 * 3
```

could be grouped as `(1 + 2) * 3` or `1 + (2 * 3)` if the grammar does not represent precedence and associativity.

In a programming language, this ambiguity must be removed or resolved through additional rules. The parser does not merely decide whether the text is valid; it builds a structure that will influence meaning.

The grammar is therefore part of language design.

## Type 1: context-sensitive languages

**Context-sensitive grammars** allow a substitution to depend on the environment surrounding a symbol.

In a simplified characterization, their productions do not reduce string length during a derivation, except under specific conventions for the empty string.

These languages correspond to **linear-bounded automata**: machines similar to a Turing machine whose memory is limited by a linear amount relative to input size.

A classical example is:

```text
L = { aⁿbⁿcⁿ | n ≥ 1 }
```

We now need to verify that three blocks contain exactly the same number of symbols. One stack is not sufficient for the general task.

Context-sensitive grammars are more expressive but also more difficult to analyze and use. This is why they are not normally used directly for the entire syntax of a programming language.

## Type 0: unrestricted grammars

At the most general level are **unrestricted**, or Type 0, grammars.

Their productions have minimal restrictions and possess the same expressive power as a Turing machine.

They generate **recursively enumerable** languages, also called Turing-recognizable languages.

For a string that belongs to the language, some machine eventually accepts it. For one that does not, the machine may reject it or continue forever.

This detail connects the hierarchy to undecidability.

Maximum expressive power does not guarantee that membership can always be decided. At the general level, there are problems for which no algorithm can return yes or no in every case.

Computational power has limits too.

## Four models of memory

We can summarize the correspondence as follows:

| Type | Language | Recognition model | Memory intuition |
| --- | --- | --- | --- |
| 3 | Regular | Finite automaton | A finite number of states |
| 2 | Context-free | Pushdown automaton | One stack with no fixed bound |
| 1 | Context-sensitive | Linear-bounded automaton | Memory proportional to input |
| 0 | Turing-recognizable | Turing machine | Unbounded memory in the model |

The hierarchy classifies languages through the machines required to recognize them.

Each step adds a more powerful form of memory or manipulation.

## What happens when we write code

A compiler does not treat a file as one indivisible block.

It normally works in layers:

1. **Lexical analysis:** turns characters into tokens such as identifiers, numbers, and operators. Many patterns are regular.
2. **Syntax analysis:** organizes tokens into a tree according to a grammar, usually context-free or a variant designed for efficient parsing.
3. **Semantic analysis:** checks names, types, scopes, and other relationships the grammar alone does not express conveniently.
4. **Execution or translation:** assigns behavior to the valid structure.

Saying that “a programming language is context-free” is therefore a simplification.

Much of its syntax may be described by a context-free grammar. But requirements such as a variable having been declared, types being compatible, or a name belonging to the correct scope require additional information.

Grammar defines form. Semantics defines meaning and behavior.

## Valid syntax does not mean a correct program

This string may satisfy a grammar perfectly and still be rejected by the compiler:

```text
result = user + 42
```

If `user` does not exist or represents an incompatible type, the problem is not necessarily syntactic structure. It lies in the language's semantic rules.

Even a syntactically and semantically accepted program may contain a logical error.

There are therefore several levels of validity:

- A well-formed string.
- A syntactically valid program.
- A semantically valid program.
- A program that does what we intended.

They should not be confused.

## Greater power has a cost

We could try to describe everything using the most expressive formalism available. We would lose valuable properties.

The more restricted a class is, the easier it usually becomes to:

- Recognize strings efficiently.
- Analyze a grammar.
- Build tools.
- Prove properties.
- Predict behavior.

Restrictions are not merely limitations. They are sources of structure.

Using regular languages for lexical structure and carefully designed grammars for syntax allows us to build practical compilers precisely because we do not invoke the full power of a Turing machine at every stage.

## Formalization has limits too

The Chomsky hierarchy shows a gradual expansion in descriptive power.

Reaching Type 0, however, does not mean we can answer every question. It means reaching the power of Turing machines—and with it, their limits: undecidable problems such as halting and semantic properties that cannot be universally decided.

Formalizing something allows us to specify rules precisely. It does not guarantee an algorithm for every question about that system.

This is one of the deepest ideas in theory of computation.

## A classification of computational power

The hierarchy connects three questions:

1. Which strings belong to the language?
2. Which kind of rules can describe them?
3. Which kind of machine is needed to recognize them?

Regular languages capture patterns with finite memory. Context-free languages add nesting through a stack. Context-sensitive languages incorporate wider relationships. Type 0 languages reach general computational power.

When we write code, we are not placing arbitrary symbols in a file. We work inside several formal layers that turn characters into tokens, structures, and ultimately behavior.

Understanding those layers changes how we look at a program.

We no longer see only text.

We see a machine attempting to recognize structure.

## References

- Noam Chomsky, [*Three Models for the Description of Language*](https://chomsky.info/wp-content/uploads/195609-.pdf), 1956.
- Carnegie Mellon University, [notes on context-free grammars and the Chomsky hierarchy](https://www.cs.cmu.edu/~411/lectures/08-parsing.pdf).
- Carnegie Mellon University, [introduction to grammars and parsing](https://www.cs.cmu.edu/~fp/courses/15411-f14/lectures/08-cfg.pdf).

---

This article develops the idea that programming is not free-form writing but the construction of expressions within formal systems with different levels of power. You can [watch the original video on YouTube](https://youtu.be/v4YxwGpldvY).
