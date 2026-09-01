---
title: "How LLMs actually work"
description: "A journey from words to tokens, vectors, attention, and probabilities to understand what happens inside a large language model when it answers."
publishedAt: "2026-09-01"
---

You type a question. You wait a few seconds. An answer appears on the other side that seems to understand what you said.

It does more than complete a sentence. It can explain a concept, adapt its tone, write code, spot a contradiction, or follow an idea that began several paragraphs earlier.

The experience feels so natural that it is difficult not to imagine some kind of voice thinking behind the screen.

But inside a large language model, there is no voice writing the entire answer. Nor is there a database where a matching response has been stored for every question. There is a sequence of mathematical operations that turns text into numbers, relates those numbers to one another, and calculates, again and again, which token should come next.

That description sounds far too simple to explain everything we see.

Yet that is precisely what makes it interesting: an apparently simple training rule, carried to enormous scale, can produce behavior that no longer looks simple at all.

## The model never receives words

Suppose we write:

> Artificial intelligence is changing work.

We see words and a meaningful sentence. The model receives something else.

Before reaching the neural network, the text passes through a **tokenizer**. Its job is to divide it into units drawn from a finite vocabulary. Some tokens represent entire words; others represent parts of a word, punctuation marks, or common fragments.

“Intelligence” might be one token in one model and several in another. An unusual word, a proper name, or an expression in a language less represented in the training data may be split into more pieces.

Each piece becomes a numeric identifier. The model no longer sees letters. It sees something like:

`[1842, 293, 8174, 156, 9021]`

The numbers carry no meaning by themselves. They are indexes in the vocabulary, like record numbers in a catalog.

This first step explains some quirks that look absurd from the outside. A model may write a word easily and still miscount its letters. We think of the word as one visual unit; the model may have received fragments that do not align with those letters.

It also explains why a conversation's limit is measured in tokens rather than pages. The model does not process documents as we see them. It processes a sequence of discrete units.

## From identifiers to positions in a space

A list of integers still does not say much. To work with it, the model transforms each token into an **embedding**: a vector made of many numbers.

We can imagine it as a position in a space with an enormous number of dimensions. There is no clean axis labeled “animal” and another labeled “sadness.” During training, the system learns distributed representations where certain patterns, uses, and relationships end up arranged in ways that help predict text.

Words used in similar contexts often acquire related representations. But the initial embedding is not the token's final meaning either.

Consider the word “bank.” It may refer to a financial institution or the side of a river. Its initial identifier may be the same. Context changes its interpretation.

That brings us to the heart of the Transformer.

## Order must become mathematics too

If we provided only a collection of embeddings, the model would have words but would not know the order in which they appeared.

“The dog bit the man” and “the man bit the dog” contain similar elements and tell very different stories.

The system therefore incorporates positional information. The original Transformer used sinusoidal functions. Many modern models use techniques such as **RoPE**, which introduces positional relationships through rotations applied inside the attention mechanism.

You do not need the formula to retain the important idea: before relating tokens, the model needs some way to represent where each one is and how far apart they are.

Meaning depends not only on what appeared. It also depends on order.

## Attention: deciding which parts of the context matter

The word *attention* can be misleading because it sounds psychological. Inside a Transformer, it does not mean the model concentrates like a person.

It is a mathematical operation that updates each token's representation using information from other tokens in the sequence.

To do this, every representation produces three vectors usually called **query**, **key**, and **value**.

An intuitive way to think about them is:

- The *query* expresses what information the current token is looking for.
- The *key* describes the kind of information each earlier token can offer.
- The *value* contains the information that will be transmitted if the relationship is relevant.

The system compares queries with keys, computes scores, normalizes them, and combines the values according to those weights. A word's representation stops depending only on its initial identity and begins incorporating its surrounding context.

In “I deposited money at the bank,” the tokens related to money and deposits push “bank” toward its financial interpretation. In “we sat on the river bank,” the relationships would be different.

Autoregressive models also apply a **causal mask**: when calculating the next token, each position can attend to what came before, but not to anything that has not yet been generated. The model cannot look into the future of its response. It must build it.

## Several views at the same time

A Transformer does not perform one attention operation. It uses multiple heads in parallel.

Each head learns different projections and may become useful for different relationships. One might help connect a pronoun with the noun it refers to. Another may follow punctuation patterns, syntactic dependencies, or relationships that do not translate neatly into human labels.

We should not imagine a clean dictionary where every head has one perfectly named function. Representations are distributed and overlapping, and we still do not fully understand how all the internal circuits produce each behavior.

But the intuition is useful: the model does not view context in only one way. It builds several partial readings and combines their results.

## Attention is not everything that happens in a layer

Attention moves information between positions. Each position then passes through a neural network usually called an **MLP**, or feed-forward network.

If attention asks, “Where should I bring information from?”, the MLP is closer to, “What transformation should I apply to what I now know?” This is where many patterns learned during training can activate and combine.

Both operations are connected by residual pathways. Rather than completely replacing the previous representation, each block adds changes to a stream flowing through the model. Normalization helps keep this process stable.

Attention. MLP. Residual connections. Normalization.

That block repeats many times.

Earlier layers may form relatively local relationships. As information moves through the model, representations incorporate increasingly rich patterns. By the end, the vector at the final position summarizes—imperfectly and in compressed form—what the model needs from the context to choose what comes next.

## Back to the vocabulary

After the final layer, we still have vectors. To produce text, the model projects the final representation into a list containing a score for every token in its vocabulary.

Those scores are called **logits**. They are then converted into a probability distribution.

The model might calculate something like:

- “model”: 18%
- “system”: 13%
- “process”: 9%
- thousands of remaining tokens: lower probabilities

Depending on the generation settings, the system may choose the highest-probability token or sample from several possibilities. Parameters such as temperature change how concentrated or dispersed that choice becomes.

The selected token is appended to the text. Then everything happens again to calculate the next one.

A long answer does not appear fully formed inside the model. It is built token by token, and every new token becomes part of the context used to produce the next.

That is why a small choice near the beginning can change the rest of a response. The model is not walking through a text it already wrote internally. It is creating a path and conditioning every subsequent step.

## How did it learn to do this?

Before answering questions, the model went through training on large amounts of text.

During pretraining, it receives sequences where the next token is already known. It makes a prediction, measures the difference between its distribution and the actual result, and uses that error signal to adjust its parameters through gradient descent and backpropagation.

Nobody manually programs a rule for every word. The weights change slightly with each update. Repeated at enormous scale, that process lets the model capture regularities in language, associations between concepts, styles, code structures, and many patterns present in the data.

What we normally call “the model” is, to a large extent, the architecture plus all those learned weights.

Two systems can share a very similar architecture and behave differently because they were trained with different data, objectives, and choices. The architecture defines which operations are possible. The weights contain the regularities acquired during training.

Then usually comes **post-training**. A model trained only to continue text does not necessarily know how to behave as an assistant. It may complete a question with another question, imitate strange conversations, or produce something that is not useful to the user.

Fine-tuning with instruction examples, human preferences, or other signals teaches it what kind of response is expected: follow requests, respect certain limits, recognize formats, and become more helpful. This does not make the system infallible. It changes its behavior.

## “It only predicts the next token” is true, but incomplete

Saying that an LLM predicts the next token is correct. The problem begins when we use that phrase as if it ended the discussion.

A chess player also moves one piece at a time. That does not make choosing the next move trivial.

To predict the next token correctly in a paper, conversation, program, or mathematical demonstration, a model needs useful representations of many patterns that generate that text. At sufficient scale, prediction can favor capabilities that resemble translation, summarization, programming, instruction following, or solving certain problems.

That does not prove the model understands as a person does. Nor does it prove the opposite. The philosophical question of understanding is not settled by looking at one formula.

What we can say is that “autocomplete” no longer captures the complexity of the internal transformations. The output is produced one token at a time, but the calculation selecting each token uses a whole system of contextual representations learned at scale.

The objective is simple to state. The emerging behavior need not be simple.

## The model is not the whole product

When we use ChatGPT, Claude, Gemini, or any modern assistant, we are rarely interacting with an isolated LLM.

Around the model there may be system instructions, filters, document retrieval, web search, stored memory, tools, code execution, and rules deciding when confirmation is required.

The base model receives context and produces tokens. If it appears to remember a conversation from last week, the product probably retrieved information and placed it into the context again. If it cites a recent webpage, some component had to find it and provide the content. If it modifies a file, an external tool turns generated text into a real action.

This distinction matters.

It prevents us from assigning permanent memory to a system that does not possess it on its own. It also explains why the same model can behave very differently in two applications: the instructions, tools, available information, and controls around it have changed.

Many capabilities we now call “AI” emerge from the combination of a model and a product architecture.

## What these mechanics explain about its limits

Understanding the path also makes certain errors less mysterious.

The model is optimized to produce a plausible continuation, not to guarantee that every statement corresponds to the world. It may generate a nonexistent source because the sequence has the statistical shape of a convincing citation. It may lose an instruction inside a very long context because information competes through many layers and relationships. It may fail at a simple calculation while writing a brilliant explanation, because predicting linguistic patterns is not the same as reliably executing an arithmetic algorithm.

Tools, source retrieval, and verification can reduce these problems. They do not change the model's basic nature.

We can also see why prompt wording matters, even though there is no magical phrase. The prompt is part of the sequence that conditions every later representation. Providing context, examples, and clear criteria changes the problem the model is trying to continue.

We are not speaking to a hidden mind. We are constructing the context on which the next calculation will operate.

## A machine that is easy to describe and hard to understand

The whole journey fits in a few lines:

Text. Tokens. Embeddings. Position. Attention and MLP blocks. Logits. Probabilities. One new token. Then back to the beginning.

The general idea is accessible. The extraordinary part lies in the scale: billions of parameters, immense quantities of examples, and layers of operations whose results combine in ways we are still trying to interpret.

For me, understanding this does not diminish the technology. It gives the achievement back to it.

We do not need magic to recognize that we built something astonishing. Nor do we need to believe there is a person inside to take its capabilities seriously.

An LLM is a machine trained to predict language. Along the way, it learns representations that let it do much more than that sentence seems to promise.

Perhaps that is the most fascinating part: we know the operations, designed the architecture, and ran the training, yet we are still learning how to explain precisely everything that appears when those pieces work together.

## References

- 0xkato, [*How LLMs Actually Work*](https://www.0xkato.xyz/how-llms-actually-work/), 2026.
- Vaswani et al., [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762), 2017.
- Kudo and Richardson, [*SentencePiece: A Simple and Language Independent Subword Tokenizer and Detokenizer for Neural Text Processing*](https://arxiv.org/abs/1808.06226), 2018.
- Brown et al., [*Language Models are Few-Shot Learners*](https://arxiv.org/abs/2005.14165), 2020.
- Su et al., [*RoFormer: Enhanced Transformer with Rotary Position Embedding*](https://arxiv.org/abs/2104.09864), 2021.
- Ouyang et al., [*Training Language Models to Follow Instructions with Human Feedback*](https://arxiv.org/abs/2203.02155), 2022.

