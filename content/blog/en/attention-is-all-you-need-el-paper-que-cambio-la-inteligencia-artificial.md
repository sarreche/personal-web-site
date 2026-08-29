---
title: "Attention Is All You Need: the paper that changed artificial intelligence"
description: "How the Transformer replaced recurrence with self-attention and became one of the technical foundations of modern artificial intelligence."
publishedAt: "2026-08-29"
---

For a long time, artificial intelligence was discussed as a technology of the future. Today we can ask a machine to write, translate, program, analyze documents, or help us learn.

No single breakthrough caused that change. It came from decades of research, better chips, enormous datasets, and new training methods. But one work occupies a central place in the story.

In 2017, eight researchers published an eleven-page paper titled **Attention Is All You Need**. It introduced an architecture designed for machine translation: the **Transformer**.

The paper did not invent attention, language models, or generative AI. Its contribution was to combine existing ideas in a radical way: building a sequence model around attention, without recurrent or convolutional networks at its core.

That decision changed the field’s direction.

## The problem with processing a sequence

Language is not a bag of words. Order changes meaning, and one word may depend on another that appeared much earlier.

For years, recurrent neural networks—including LSTMs and GRUs—were a dominant answer. They processed a sequence step by step, updating an internal state with each element.

The mechanism worked, but it had two important limitations.

First, information between distant positions had to travel through many steps. Second, computation was inherently sequential: processing one position required waiting for the previous one.

That made it difficult to exploit GPU parallelism. As sequences, datasets, and models grew, waiting became a major bottleneck.

## Attention already existed

Before the Transformer, attention was already improving translation systems. Instead of compressing an entire source sentence into one fixed representation, it allowed the model to revisit different parts while producing each output word.

Not every word received the same weight. The model learned which parts were relevant at each moment.

Attention, however, usually complemented a recurrent network. The leap in *Attention Is All You Need* was to ask: **what if we remove recurrence entirely and organize the whole model around attention?**

The answer was the Transformer.

## What self-attention does

In self-attention, every element in a sequence can relate directly to the other elements in that same sequence.

Consider this sentence:

> The animal did not cross the street because it was tired.

To interpret “tired,” the model needs to relate it to “animal.” A recurrent network carries information through the intermediate steps. Self-attention can establish the connection directly.

The analogy is imperfect, but imagine every word standing in one room and asking which of the others it needs to construct its contextual meaning.

This shortens the path between distant positions and allows many relationships to be calculated in parallel.

## Queries, keys, and values

The mechanism builds three representations for each element:

- The **query** expresses which information it is seeking.
- The **key** expresses which information may be relevant.
- The **value** contains the information to contribute.

A token’s query is compared with the keys of the others. Those compatibility scores become weights, which determine how the values are combined.

The paper calls the operation **scaled dot-product attention**:

> Attention(Q, K, V) = softmax(QKᵀ / √dₖ)V

The formula does not need to be memorized. Its logic matters more: measure compatibility, normalize it, and combine information according to relevance.

These operations can be expressed as matrix multiplications, which GPUs execute very efficiently. The architecture learned direct relationships while fitting the hardware needed to scale.

## Why attention has multiple heads

A sentence contains several relationships at once: grammatical, semantic, positional, and referential.

**Multi-head attention** projects queries, keys, and values into several spaces and runs multiple attention operations in parallel. Each head can capture different patterns before their results are combined.

Nobody explicitly programs one head to find subjects and another to resolve pronouns. Such specializations can emerge during training when they help solve the task.

The paper’s base Transformer used eight heads. The important idea is not the number, but the ability to view a sequence simultaneously through different representation subspaces.

## If everything happens at once, where does order come from?

Removing recurrence creates a problem: self-attention alone does not know which token came first.

The Transformer therefore adds a **positional encoding** to every token representation. The original model used sine and cosine functions at different frequencies to produce a unique, structured signal for each position.

The authors also tested learned positions and obtained similar results. They chose the sinusoidal version because it might extrapolate better to longer sequences.

Later implementations developed other methods, but the need remains: if the architecture does not process in order, position must enter through another path.

## Encoder, decoder, and generation

The original Transformer was a translation model with two parts.

The **encoder** processed the input sentence and constructed contextual representations. The **decoder** used those representations to produce the output one element at a time.

Both stacked attention layers, feed-forward networks, residual connections, and normalization. The decoder added attention over the encoder output and used a mask to prevent a position from seeing future tokens during training.

That mask preserves autoregressive behavior: when predicting the next token, the model can use only the previous ones.

The title was therefore provocative, not literal. The Transformer also needed embeddings, dense layers, positions, normalization, and other components. “Attention is all you need” meant that attention could replace recurrence and convolution as the central mechanism for relating a sequence.

## The result that made it impossible to ignore

A new architecture needs more than conceptual elegance. It has to work.

On English-to-German translation, the big Transformer reached 28.4 BLEU and beat the best published results, including ensembles, by more than two points. On English-to-French it achieved 41.0 BLEU, surpassing previous single models at a fraction of their training cost.

It was more parallelizable, trained faster, and delivered competitive or superior results. That combination opened a new research direction.

## From a translation machine to a general platform

The paper did not introduce a universal assistant. It introduced a sequence-transduction solution. The architecture proved general enough to escape its original purpose.

BERT mainly exploited the encoder to learn bidirectional representations. GPT developed the autoregressive, decoder-based branch. T5 reframed many language tasks as text-to-text problems.

Larger models, new training techniques, instruction tuning, human feedback, retrieval, tools, and multimodality followed.

Today’s assistants are not merely “the 2017 Transformer.” But many of their abilities were built on the path that paper made practical: learning contextual representations at scale through attention.

The idea also moved beyond text. Images, audio, and video can be represented as collections or sequences of related elements, and Transformers were adapted to those modalities.

## The Transformer has limits too

Full attention compares every position with every other position. Its cost grows quadratically with sequence length, so long contexts can require enormous memory and computation.

Parallelization does not mean low consumption either. By enabling scale, the architecture helped fuel a race toward much larger models.

Attention is also not human understanding. Attention weights are mathematical calculations, not a complete explanation of why a model answered as it did. The system can still invent information, reproduce biases, and make confident mistakes.

The architecture is powerful. It is neither infallible nor necessarily final.

## The real legacy

Once a technology succeeds, its arrival can look inevitable. In 2017, it was not.

Processing a sequence in order seemed like a natural consequence of the sequence having order. The Transformer separated the two: it preserved position and relationships without depending on a recurrent chain of states.

Its legacy is not an exact configuration of six layers, eight heads, or sinusoidal encoding. Many of those decisions changed.

What survived was an idea: **a sequence can be understood by building direct, learned relationships among its elements**.

A paper about machine translation reorganized how language was processed, enabled scaling, and became one of the foundations of modern AI.

Attention was not literally everything we needed. But it was the piece that allowed many of the others to begin fitting together.

## Reference

- Ashish Vaswani et al., [*Attention Is All You Need*](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf), NeurIPS 2017.

---

This piece grew out of a script I prepared while experimenting with AI-assisted audiovisual content. You can [watch the original video on YouTube](https://youtu.be/Bd-p2JCNj6Q).
