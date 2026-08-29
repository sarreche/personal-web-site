---
title: "Markov chains, Bayesian networks, and the probabilistic heart of AI"
description: "States, transitions, conditional independence, and inference: two fundamental structures for understanding how AI represents and reasons under uncertainty."
publishedAt: "2026-08-29"
---

Something still feels strange when we talk about artificial intelligence.

We expect a machine to “know” an answer, as if it contained a perfectly organized collection of facts. Much of AI works differently.

It represents uncertainty. It estimates distributions. It compares possibilities. It updates probabilities when new evidence appears.

In that sense, its heart is deeply probabilistic.

Two historical ideas help us understand this approach: **Markov chains** and **Bayesian networks**.

They are not the complete explanation of modern AI. A deep neural network or language model is not simply a Markov chain or a classical Bayesian network. These structures do, however, teach two principles spanning much of the field:

1. How to model changes over time without explicitly preserving an entire history.
2. How to represent dependencies among variables without storing an unmanageable joint distribution.

## Probability does not mean unstructured randomness

A probabilistic model does not answer arbitrarily at random.

It assigns probabilities according to a structure and parameters. It can say that one event is more likely than another, combine evidence, and quantify uncertainty.

Conditional probability expresses how our assessment of one event changes when another is known:

```text
P(A | B)
```

This reads as “the probability of A given B.”

Most ideas in this article concern deciding **which information a prediction should be conditioned on**.

## The Markov property

In the early twentieth century, Andrey Markov studied processes where the next state depends on the current state without needing to consult the entire earlier trajectory explicitly.

For a first-order process:

```text
P(Xₜ₊₁ | Xₜ, Xₜ₋₁, ..., X₀) = P(Xₜ₊₁ | Xₜ)
```

This is the **Markov property**.

It is commonly summarized by saying “the future depends only on the present.” The phrase needs a qualification: this holds **given the state we chose to represent**.

The current state must contain all information from the past that matters for predicting the next step. If we omit an important variable, the property may stop being a good description of the system.

A Markov model does not claim history never matters. It claims the relevant history has been summarized in the present state.

## A weather example

Suppose there are three states:

```text
S = {sunny, cloudy, rainy}
```

We can define transition probabilities:

| Today | Sunny tomorrow | Cloudy tomorrow | Rainy tomorrow |
| --- | ---: | ---: | ---: |
| Sunny | 0.70 | 0.20 | 0.10 |
| Cloudy | 0.30 | 0.40 | 0.30 |
| Rainy | 0.20 | 0.30 | 0.50 |

Every row sums to one because it contains every possible next state.

The transition matrix is:

```text
P = [0.70  0.20  0.10]
    [0.30  0.40  0.30]
    [0.20  0.30  0.50]
```

If we know today is sunny, the first row describes tomorrow's distribution.

We are not predicting one inevitable future. We are describing several possible futures and their probabilities under the model.

## Evolving a distribution

The chain does not need to begin in a state known with certainty.

We may have an initial distribution:

```text
π₀ = [0.60, 0.30, 0.10]
```

This means a 60% probability of sun, 30% of clouds, and 10% of rain.

Multiplying that distribution by the transition matrix produces the next-step distribution:

```text
π₁ = π₀P
```

Repeating the operation projects additional steps:

```text
πₙ = π₀Pⁿ
```

The matrix contains a complete dynamic. Local transitions let us study long-term behavior.

## Stationary distributions

Some chains converge to a distribution that no longer changes after another transition:

```text
π = πP
```

This is a **stationary distribution**.

It does not mean the system stops moving. Individual states continue to change. What remains stable is the probabilistic proportion of time the process spends in each state.

This idea appears in queueing models, biology, finance, reliability, and algorithms such as PageRank.

The existence and uniqueness of a stationary distribution depend on properties of the chain; not every matrix converges in the same way.

## The Markov assumption is a modeling decision

Real weather depends on much more than today's “sunny” or “rainy” label. Pressure, humidity, season, geography, and atmospheric systems contain relevant information.

Our example is not intended to describe meteorology accurately. It demonstrates an abstraction.

We can improve the state by adding variables:

```text
state = (weather, humidity, pressure, season)
```

The Markov property may become more reasonable, but the state space also grows.

There is a tradeoff between compact representation and preserving enough information.

## When state cannot be observed

In many applications, the real state is hidden.

We may observe symptoms, sounds, or measurements but not the cause directly generating them.

A **hidden Markov model** distinguishes:

- Latent states evolving according to Markov dynamics.
- Observations probabilistically emitted from those states.

The hidden state might be a machine condition and the observations its vibrations. It might also be a linguistic category and the observations words.

The problem becomes inferring the hidden state sequence from visible signals.

## From time to dependencies among variables

Markov chains model a particular sequence of temporal dependencies.

Many questions, however, involve several variables connected in nonlinear ways:

- A disease influences symptoms and test results.
- Rain influences traffic and whether a street is wet.
- A failure affects different sensors.
- Email characteristics influence the probability of spam.

A joint table containing every combination grows exponentially.

**Bayesian networks** represent that distribution through local dependencies.

## What is a Bayesian network?

A Bayesian network contains:

1. A **directed acyclic graph**, or DAG.
2. One node per random variable.
3. Edges representing direct dependencies in the model.
4. A conditional distribution for each node given its parents.

With variables `A`, `B`, `C`, and `D`, a network may factorize the joint distribution as:

```text
P(A, B, C, D)
= P(A) · P(B | A) · P(C | A, B) · P(D | C)
```

In general:

```text
P(X₁, ..., Xₙ) = ∏ᵢ P(Xᵢ | parents(Xᵢ))
```

When useful conditional independences exist, the network replaces one enormous table with several local distributions.

## Conditional independence

Two variables may be related in general and become independent once a third is known.

Suppose:

```text
rain → wet street
rain → umbrella
```

Seeing umbrellas raises our belief that the street is wet because both observations may share “rain” as a cause.

But if we already know with certainty whether it is raining, observing an umbrella may provide no additional information about the street under this model.

We write:

```text
wet street ⟂ umbrella | rain
```

Conditional independence lets us ignore relationships that stop providing information after certain evidence is known.

This mechanism makes Bayesian networks compact and analyzable.

## Inference: updating beliefs with evidence

Once the network is built, we can observe some variables and ask about others.

For example:

```text
P(disease | fever, positive test)
```

Inference combines:

- Prior probabilities.
- Dependencies in the graph.
- Observed evidence.

Bayes' theorem appears as a central rule:

```text
P(H | E) = P(E | H)P(H) / P(E)
```

The posterior probability of a hypothesis depends on how compatible the evidence is with it and how plausible it was before observation.

A positive test does not automatically imply disease. Prevalence and false-positive and false-negative rates matter too.

## A Bayesian network is not automatically causal

Arrows describe a factorization and independence assumptions. By themselves, they do not prove one variable causes another.

We can construct a network from causal knowledge, but also from statistical dependencies useful for prediction.

Observing `X` and forcing an intervention on `X` are different operations.

Causal claims require additional assumptions, appropriate design, and often experimental data or causal-inference methods.

A convincing arrow does not replace that evidence.

## How the structures relate

A Markov chain can be represented as a dynamic Bayesian network:

```text
X₀ → X₁ → X₂ → X₃ → ...
```

Each time-indexed variable depends on the previous state.

A hidden model adds observations:

```text
X₀ → X₁ → X₂
↓     ↓     ↓
O₀    O₁    O₂
```

Chains emphasize temporal transition. Bayesian networks emphasize factorization and conditional independence. The ideas are related but not interchangeable.

## Where they appear in artificial intelligence

These structures and their extensions appear in:

- Speech recognition.
- Diagnosis and decision support.
- Object tracking.
- Sequence prediction.
- Robotics and localization.
- Recommendation systems.
- Natural-language processing.
- Risk analysis.
- Failure detection.

For decades, they have been central tools of probabilistic AI and remain useful when uncertainty must be represented explicitly and interpretably.

## Is a language model a Markov chain?

Not in the simple first-order sense.

An autoregressive model factorizes sequence probability using the chain rule:

```text
P(x₁, ..., xₙ)
= ∏ₜ P(xₜ | x₁, ..., xₜ₋₁)
```

It generates one token based on previous tokens and repeats the process. This sequential behavior resembles a chain, but the next token may depend on broad context, not just the immediately preceding token.

A transformer learns context representations and a distribution over the next token. A decoding procedure then selects or samples a continuation.

This is why a model can produce different answers to the same input without choosing words through unstructured randomness.

The distribution was learned from data and conditioned on context.

## State can be a learned representation

In a classical chain, states are defined by the model builder: sunny, cloudy, or rainy.

In deep learning, a system may learn internal vectors condensing relevant information.

These vectors do not always have a direct human interpretation. They still serve a similar function: representing the context needed to produce a prediction or action.

The idea of summarizing history into state did not disappear. It became high-dimensional and learned from data.

This does not automatically make a neural network a classical Markov chain. It shows conceptual continuity among state representation, conditioning, and prediction.

## Learning parameters and performing inference

It helps to separate two tasks.

**Learning** means estimating parameters—and sometimes structure—from data.

**Inference** means using an already defined model to calculate probabilities over unknown variables given evidence.

A chain can learn probabilities by counting observed transitions. A Bayesian network can learn conditional tables or continuous parameters. A neural network learns millions or billions of parameters through optimization.

Each system then uses those parameters to answer queries or produce predictions.

Probability and learning are not the same operation, although they work together.

## The cost of inference

Representing a distribution compactly does not guarantee every query will be easy.

Exact inference in a general Bayesian network can be computationally expensive. Graph structure determines which calculations can be simplified.

When exact inference is impractical, we use approximations:

- Sampling.
- Variational methods.
- Approximate belief propagation.
- Particle filters.

Probabilistic AI does not eliminate complexity. It organizes it and helps us choose reasonable approximations.

## What these ideas teach us about AI

Markov chains teach us that a well-chosen state can summarize relevant history.

Bayesian networks teach us that conditional independences let us represent a complex world through local relationships.

Together, they show that reasoning under uncertainty does not require enumerating every future or storing every combination.

We can factorize, condition, and update.

The probabilistic heart of AI is broader, however. It includes statistics, information theory, optimization, latent models, neural networks, and decision methods.

These two structures do not explain everything. They provide a fundamental language for understanding it.

## From absolute answers to distributions

A probabilistic system does not always ask, “what is the one correct answer?”

It may ask:

- Which states are possible?
- What is the probability of each?
- How does that probability change with new evidence?
- Which information can be ignored conditioned on what we already know?
- Which decision produces the best expected outcome?

This way of thinking spans contemporary AI.

Not because machines have reproduced a classical human mind, but because we learned to build systems capable of acting without complete certainty.

Artificial intelligence does not eliminate uncertainty.

It turns uncertainty into a structure we can calculate with.

## References

- Stanford University, [notes on Markov chains and transition matrices](https://web.stanford.edu/class/stats366/exs/Markov1.html).
- Carnegie Mellon University, [notes on Bayesian networks and conditional independence](https://www.cs.cmu.edu/~epxing/Class/10708-19/notes/lecture-02/).
- UC Berkeley, [Bayesian-network structure and factorization](https://inst.eecs.berkeley.edu/~cs188/textbook/bayes-nets/structure.html).

---

This article develops two classical structures that let us move from absolute answers to models of transition, dependence, and evidence. You can [watch the original video on YouTube](https://youtu.be/DGXMx_odK78).
