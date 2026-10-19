---
title: "What is an embedding, and how does it help search beyond exact words?"
description: "A map for finding related texts, even when they use different words. How embeddings work, what they add to a document-based chatbot, and where their limits lie."
publishedAt: "2026-10-19"
---

Imagine you want to take some time off and search your company's documents for “how to request vacation.” The procedure exists, but it is called “Annual leave request.” If the search engine depends on finding the same words, you may need to guess how someone else titled it.

Semantic search can help you find that document even when you phrase things differently. One tool available for this is **embeddings**: numerical representations that let us compare texts through relationships a model has learned to recognize.

I find this idea worth explaining because it helps us look more closely at a search engine or a company chatbot. Finding something related to a question is useful. We then need to check whether that content actually answers it.

## A text turned into coordinates

An embedding represents an item as a list of numbers, called a vector. For this article, we will focus on text: a sentence, a question, or a passage from a document.

You can picture that list as the coordinates of a place on a map. When comparing two representations, the system calculates a measure of closeness. A model trained for search aims to make that measure useful for finding content relevant to the query.

A trained model produces the coordinates. The numbers do not come labeled “vacation,” “sadness,” or “finance.” There is no single map shared by every system, either: the representation depends on the model and the task. [Google's explanation of embedding spaces](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space) explores those limits of the analogy.

## The supermarket as an imaginary map

Think of a supermarket organized around how products are used. Yerba mate, coffee, and tea might occupy one area, with detergents in another. If you want something to make a hot drink, that layout gives you a direction.

We can use that image to think about related texts. A semantic map might place “annual leave request” close to “how to request vacation.” To illustrate relationships between words, we would expect “dog” to be more related to “cat” than to “detergent.”

These are imaginary examples, not distances measured with a particular model. The real map has many dimensions, and its relationships can be less intuitive than supermarket aisles. The analogy helps us picture closeness; it does not describe a supermarket hidden inside the computer.

The same idea of finding neighbors can help recommend related articles or products. What counts as “related” depends on the system: sharing a topic, a purpose, or user preferences will not always produce the same neighbors.

## How that becomes a search

One common way to prepare a search system is to generate embeddings for the texts we want to query and store them alongside references to their originals. When a question arrives, the system generates a compatible representation and retrieves the nearest candidates.

That is how our annual leave procedure might turn up. The [Sentence Transformers documentation](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) explains using representations to retrieve relevant texts, including searches that compare a short question with longer passages.

Keyword search remains useful. If you need file “AB-1042,” an exact match may matter more than finding documents about similar topics. That is why some systems combine keyword and vector search. Choosing a tool also depends on the questions we expect to ask it.

## What happens when a chatbot uses your documents

RAG stands for *retrieval-augmented generation*. The idea is to retrieve information and give it as context to a model that prepares the answer. Embeddings can take part in that retrieval alongside other methods; RAG does not require vector search alone. The [Elastic documentation](https://www.elastic.co/docs/solutions/search/rag) describes text search, vector search, and combinations of both.

In a simple example, the process would be:

1. Prepare passages from the documents and their references.
2. Retrieve those that appear relevant to the question.
3. Give them to the model so it can build an answer supported by them.

If an outdated vacation policy or one for another country turns up, the risk of a wrong answer increases. A model may notice that information is missing and ask for clarification, but we should not rely on it to compensate for faulty retrieval every time.

Even with the right passage, it may misinterpret a condition. That is why it helps to review retrieval and answering as two parts of the work.

## Similar does not mean true

Imagine two sentences: “The project was approved” and “The project was not approved.” They share a topic and almost every word, yet make incompatible claims. Depending on the model and how they are compared, they may receive a high similarity score.

There is no universal distance for that pair. The [SemAntoNeg study](https://aclanthology.org/2022.blackboxnlp-1.20/) examines paraphrases involving negation and antonyms, and finds substantial differences between models. It does not test these two example sentences; it does show why we should check how a system handles those distinctions.

A similarity score does not establish whether the project was approved in reality, either. For that, we need evidence: the current meeting record and its context, for example.

Dates create a similar problem. Two procedures can cover exactly the same topic and give different instructions because one replaced the other. Topical closeness alone does not establish which is still in effect.

## What I would review in a company chatbot

Before choosing another model because an answer went wrong, I would look at the information it received. I would try specific questions and documents whose contents we can check:

- Which passages did it retrieve, and which documents are they from?
- Do they include the condition or exception that changes the answer?
- Are they current, and do they apply to the case being asked about?
- Does the system respect the questioner's access permissions?
- What does it do when it cannot find enough supporting information?

Returning to vacation: finding the leave policy is a good start. We still need to see whether it applies to your situation and whether the answer accurately reflects it.

Embeddings have been used for years and help search go beyond literal matches. Understanding that mechanism lets us ask better questions about the system we are using, without needing formulas.

**Before judging how well your chatbot answers, look at the information it found to answer with.**

## References

- Google, [Embedding space and static embeddings](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space).
- Sentence Transformers, [Semantic Search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html).
- Elastic, [RAG](https://www.elastic.co/docs/solutions/search/rag).
- Vahtola, Creutz, and Tiedemann, [It Is Not Easy To Detect Paraphrases: Analysing Semantic Similarity With Antonyms and Negation Using the New SemAntoNeg Benchmark](https://aclanthology.org/2022.blackboxnlp-1.20/), 2022.

I keep these conversations going on [my YouTube channel](https://www.youtube.com/@saarreche). Take care.
