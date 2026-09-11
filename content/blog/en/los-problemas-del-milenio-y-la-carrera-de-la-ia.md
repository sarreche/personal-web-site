---
title: "The Millennium Prize Problems have entered the AI race"
description: "What the seven great problems ask, what Grigori Perelman solved, and what OpenAI, Anthropic, and Google DeepMind are actually attempting."
publishedAt: "2026-09-11"
---

A few days ago, I wrote about OpenAI's proposed solution to Navier–Stokes. Regardless of the fact that the work still needs to undergo serious mathematical review, the announcement put a rather unusual name at the center of the conversation: **the Millennium Prize Problems**.

They are seven questions that the Clay Mathematics Institute selected in 2000 as some of mathematics' deepest frontiers. It set aside a one-million-dollar prize for each one. Twenty-six years later, only one has been solved.

Now AI laboratories are sending thousands of agents against the remaining six. OpenAI says it has worked on all of them. Anthropic attacked the Riemann hypothesis and, although it did not solve it, found a new result along the way. Google DeepMind has spent years building systems to discover patterns, formalize proofs, and explore fluid dynamics.

It sounds as though mathematics has entered a technology race. But before talking about winners, it is worth understanding what they are trying to solve.

## First: these are not seven isolated puzzles

The Millennium Prize Problems were not chosen because they were easy to explain or had an immediate commercial application. They were chosen because each marks the edge of what we know in a different field.

Solving one does not mean finding a number or running a larger simulation. It requires a proof that covers every case required by the statement. Other specialists must then be able to read it, discuss it, try to break it, and eventually accept it.

That last part matters more than ever today. A laboratory publishing a proposal does not automatically change a problem's official status. At the time of writing, the [Clay Mathematics Institute still lists six problems as open](https://www.claymath.org/millennium-problems/) and one as solved.

## 1. P versus NP: finding versus checking

Some problems have answers that can be checked quickly, even though finding them seems to take forever.

Think of an enormous puzzle. If someone hands you the completed solution, you might quickly verify that every piece is in the right place. Building that solution from scratch, however, could require testing an overwhelming number of combinations.

**P versus NP asks whether every problem whose solution can be verified efficiently can also be solved efficiently.** If P equaled NP, optimization, logistics, drug design, and much of cryptography would change radically. If they are different, we would prove that the gap between finding and checking is a real limit.

This is not merely a question about faster computers. It is a question about what it means for a problem to be hard.

## 2. The Riemann hypothesis: the hidden rhythm of prime numbers

Prime numbers appear in a pattern that looks irregular. Their distribution nevertheless has structure, and the Riemann zeta function lets mathematicians study it through complex numbers.

The hypothesis says that certain nontrivial zeros of that function all lie on one precise line: the line with real part equal to one half. It sounds like a technical detail, but proving it would give us much finer control over the distribution of primes and settle a vast number of results that are currently conditional.

It is probably the most famous of the seven. It is also one of the cases where we have already seen a laboratory aim at it publicly: Anthropic asked an experimental version of Claude to try to solve it.

## 3. Navier–Stokes: can a fluid break mathematically?

The Navier–Stokes equations describe the motion of water, air, and other fluids. In three dimensions, we know how to use and approximate them, but we do not know whether an initially smooth solution always stays smooth or can develop a singularity in finite time.

In other words, do the equations always preserve mathematically controlled behavior, or can they produce a point where some quantity becomes infinite?

This is the problem that brought all seven back into the news. OpenAI published a construction that, according to the company, establishes a singularity under the external-force conditions allowed by two formulations of Clay's statement. I have already explained [what OpenAI is proposing and how roughly 10,000 agents participated](/en/blog/openai-propone-una-solucion-a-navier-stokes-con-10000-agentes).

The proposal matters. But **a proposal is not the same as a solved problem**. It must survive independent review and the mathematical community's acceptance process. Clay still placing it among the open problems is the clearest reason to keep our feet on the ground.

## 4. Birch and Swinnerton-Dyer: counting solutions we cannot see

Elliptic curves are cubic equations with a surprisingly rich mathematical life. They appear in number theory, cryptography, and the proof of Fermat's Last Theorem.

The Birch and Swinnerton-Dyer conjecture connects two worlds: the rational solutions of a curve and the behavior of an associated function known as an L-function. In a highly simplified version, it asks whether that function reveals how many independent directions exist for generating rational solutions.

The conjecture's power lies in this bridge. It turns a question that is difficult to solve point by point into information that could, in principle, be extracted from another representation of the same object.

## 5. The Hodge conjecture: when topology is also algebra

A shape defined by algebraic equations can be studied in different ways. We can look at its equations, but also at its holes, cycles, and topological properties.

Very roughly, the Hodge conjecture asks whether certain special topological structures on an algebraic variety can always be explained by combining pieces that are themselves algebraic.

It is difficult to translate into an everyday image without distorting it. The central idea is this: it asks how far two deep languages of geometry—the algebraic and the topological—are describing the same structures.

## 6. Yang–Mills and the mass gap: putting rigor beneath physics

Yang–Mills theory is an essential foundation of the Standard Model of particle physics. Experiments and simulations work extraordinarily well, but we still lack a mathematically rigorous construction of the quantum theory in four dimensions and a proof that it has a **mass gap**.

Roughly speaking, that gap means that the lowest possible energy state is separated from the first excitations by a positive amount. Physics behaves as though this is true. The challenge is proving that the equations really guarantee it.

This problem is a healthy reminder: a theory can be extraordinarily useful and accurate in practice while still containing a hole in its mathematical foundations.

## 7. The Poincaré conjecture: the only one with an ending

In 1904, Henri Poincaré asked how to recognize a three-dimensional sphere from its internal properties. In two dimensions the intuition is friendlier: a rubber band on a sphere can be shrunk to a point; around the hole in a doughnut, it cannot. The question was whether an equivalent condition also characterized the sphere in three dimensions.

The Russian mathematician **Grigori Perelman** presented the solution in [three preprints posted between 2002 and 2003](https://www.claymath.org/millennium/poincare-conjecture/). He did not arrive with a spectacular announcement or a book hiding the method. He published his work openly, building on the Ricci flow program begun by Richard Hamilton, and left the community to do the difficult work of verifying it and completing the exposition.

The review took years. In 2006 he was offered the Fields Medal and declined it. In 2010, Clay awarded him the first Millennium Prize; he also declined the million dollars. That decision turned his story into a legend, but it should not obscure the main point. Perelman did not have an isolated inspiration that fell from the sky: he completed a line of human research accumulated over decades.

His case also gives us a useful standard for the present. A proof is not validated because its author—human or artificial—looks brilliant. It is validated when it survives a public, sustained process of understanding, checking, and criticism.

## So which problems are in the hands of AI labs?

The short answer is: **all six open problems are now inside their experiments, but they are not all at the same stage**.

- **OpenAI** [says it launched agents on all six open Millennium Prize Problems](https://openai.com/index/navier-stokes-solution/). Navier–Stokes is the only one for which it has published a complete proposed solution. The company also produced a Lean formalization so that part of the logical chain can be checked by a computer.
- **Anthropic** [documented a direct attempt at Riemann](https://www.anthropic.com/research/riemann-zeta). Claude did not solve the hypothesis, but it found a way to raise a related lower bound for the proportion of zeros satisfying it from 41.6% to 67.2%. According to Anthropic, two internal mathematicians validated the work and outside specialists examined the paper. This is new mathematics around the problem, not a solution to the problem.
- **Google DeepMind** has worked on AI-assisted mathematical discovery, formal proofs, and fluid dynamics. In 2025, together with mathematicians, it presented [new families of unstable singularities in related fluid equations](https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/). That contributes to the scientific path surrounding Navier–Stokes; it does not resolve Clay's statement.

For P versus NP, Hodge, Birch and Swinnerton-Dyer, and Yang–Mills, we can currently say that OpenAI included them in its exploration. I found no equivalent public announcements of a solution or specific advances that would let us say more. That absence is information too: we should not complete the map with speculation.

I would not say these problems now “belong” to the labs either. They remain in the hands of mathematicians, universities, and a much broader international community. The labs have added something new: powerful models, enormous compute budgets, and the ability to organize thousands of attempts in parallel.

## What AI actually changes

What interests me most is not the fantasy of pressing a button and receiving a proof. It is the possibility of changing the scale of the process.

A system can propose hundreds of paths, discard contradictions, search the literature, run numerical experiments, divide a proof into lemmas, and assign them to other agents. It can then try to formalize the result in Lean, where every step must fit explicit logical rules.

That does not eliminate the mathematician. It shifts some of the work: from producing every line to designing the search, recognizing a valuable idea, reviewing assumptions, and deciding what the result means. It also creates new problems. A subtle error can be repeated across thousands of agents. A formal proof verifies what was formalized, not whether the chosen statement perfectly represents the original problem. And a corporate announcement does not replace the judgment of independent experts.

There is also a question of credit. Models work on centuries of mathematics written by people. Recent advances combine earlier ideas, laboratory infrastructure, and human decisions about what to search for and how to validate it. Telling that genealogy will be just as important as counting the agents.

## It is not the end yet; it may still be a change of era

For now, the official score remains simple: six open, one solved. Perelman holds the only recognized solution on this list.

But something has changed. Laboratories are no longer using mathematics only to measure whether a model can answer an exam correctly. They are putting complete systems to work on questions whose answers nobody knows. Sometimes they fail. Sometimes they find a result off to the side. And in the Navier–Stokes case, they have produced a proposal serious enough to require the community's attention.

Perhaps we will eventually discover that one of these proposals contained a gap. Perhaps we are watching the beginning of a new way of doing mathematics. Both can be true at once: we can be excited about the capability and demanding about the evidence.

That seems like the most interesting position to me. Not announcing that AI has solved mathematics, but looking closely at what happens when a tool capable of exploring at unprecedented scale meets questions that have resisted generations.

If you would like to continue this conversation about artificial intelligence, science, and software, I share new experiments and reflections on [my YouTube channel](https://www.youtube.com/@sarreche).
