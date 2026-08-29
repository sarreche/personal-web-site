---
title: "Game theory and strategic decisions"
description: "Players, strategies, payoffs, the prisoner's dilemma, and Nash equilibrium for understanding decisions whose outcomes also depend on others."
publishedAt: "2026-08-29"
---

There is an enormous difference between making a decision when the result depends only on you and deciding when it also depends on someone else.

In the first case, the problem seems relatively direct: identify options, evaluate consequences, and choose the one you prefer.

Once another participant appears, you are no longer optimizing in a vacuum.

You anticipate what they will do. You imagine what they think you will do. You may also think about what they believe you think about their decision.

The decision stops being merely technical. It becomes **strategic**.

This is what game theory studies.

Not “games” only as entertainment, but formal models of situations where each participant's outcome depends on several people's decisions.

## From individual decision to interaction

An individual decision problem can be represented through:

- A set of alternatives.
- Consequences associated with each alternative.
- Preferences over those consequences.

In a strategic decision, the consequences of my action change according to what others do.

Lowering a price may attract customers if my competitor keeps theirs unchanged. If they respond with another reduction, both of us may end with lower margins. Sharing information can benefit everyone if others share too; it can expose me if I am the only one.

The best action can no longer be defined without a belief about other people's behavior.

## The components of a game

A game in strategic form usually includes:

1. **Players:** the decision makers.
2. **Actions:** the options available in a particular situation.
3. **Strategies:** plans specifying what a player will do; in complex games they may cover multiple contingencies.
4. **Payoffs or utilities:** a representation of how much each player values every combination of decisions.
5. **Information:** what each participant knows while deciding.
6. **Rules and order:** when each person decides and which actions are possible.

For a simple simultaneous game, we can write:

```text
player 1 chooses a₁
player 2 chooses a₂
outcome = (u₁(a₁, a₂), u₂(a₁, a₂))
```

Each function `u` represents one player's preferences over the joint outcome.

The numbers do not need to represent money. They may stand for prison time, market share, risk, time, reputation, or simply a preference ordering.

## Rational does not mean perfectly logical

In the basic model, a rational player chooses to maximize utility given their beliefs and constraints.

This does not mean real people calculate matrices mentally or remain unaffected by emotions, errors, and social norms.

“Rational” is a formal assumption: preferences are represented in a certain way, and the agent chooses accordingly.

If the utility function includes trust, fairness, guilt, or reputation, cooperative behavior can be perfectly rational.

The model does not automatically discover what a person values. It represents it. If the payoffs are wrong, the analysis will be wrong too.

## The prisoner's dilemma

Imagine two people arrested and questioned separately. Each can **cooperate** with the other by remaining silent or **betray** them by confessing.

We can represent their preferences with a simplified matrix:

|  | B cooperates | B betrays |
| --- | --- | --- |
| **A cooperates** | 3, 3 | 0, 5 |
| **A betrays** | 5, 0 | 1, 1 |

The first number in each cell belongs to A and the second to B. A larger number represents a preferred outcome.

If B cooperates, A gets more by betraying: `5 > 3`.

If B betrays, A still gets more by betraying: `1 > 0`.

Betrayal is therefore A's best response to either action by B. The same logic applies to B.

Both betray and receive `(1, 1)`, even though both would have been better off under mutual cooperation at `(3, 3)`.

That is the dilemma: individually defensible decisions produce a worse collective result.

## Dominant strategies

A strategy is **strictly dominant** if it provides a higher payoff than every alternative regardless of what the other players do.

In the classical dilemma, betrayal dominates cooperation.

Many games have no dominant strategies, however. The best action may depend on the other person's choice.

In a coordination game, for example, both people may prefer to meet at the same place even though several locations are possible. No action is universally better; anticipating the other's choice matters.

Looking for dominant strategies is useful, but it does not solve every game.

## Best responses

A **best response** is the action maximizing one player's payoff against a specific strategy chosen by the others.

We can ask:

```text
if the other player does X, what should I do?
if the other player does Y, what should I do?
```

This concept lets us analyze stability. If every player is choosing a best response to what the others do, nobody has an individual incentive to change.

That point is called a Nash equilibrium.

## Nash equilibrium

A set of strategies forms a **Nash equilibrium** when no player can improve their outcome by changing unilaterally while the others keep their strategies unchanged.

It does not mean the result is fair, efficient, or desirable.

It means the result is stable against individual deviations.

Mutual betrayal in the prisoner's dilemma is an equilibrium: if the other person betrays, cooperating makes my outcome worse. Neither wants to change alone, although both would prefer another outcome if they could coordinate and commit.

In 1950, John Nash showed that every finite game has at least one equilibrium when mixed strategies are allowed.

Equilibrium is a tool for predicting strategic consistency, not a moral recommendation.

## Pure and mixed strategies

A **pure strategy** selects one action deterministically.

A **mixed strategy** assigns probabilities to multiple actions.

In rock-paper-scissors, always choosing the same action allows an opponent to exploit us. The equilibrium strategy randomizes evenly among all three.

Randomness does not represent indecision. It can be a strategic defense against predictable behavior.

In security, sports, auctions, and competition, hiding the next move can be part of a strategy's value.

## Equilibrium does not mean optimal outcome

This distinction is central.

An equilibrium can be:

- Inefficient for the group.
- Unequal.
- Bad for everyone compared with another alternative.
- One among several possible equilibria.

Game theory does not claim that markets, negotiations, or institutions always produce the best result. It helps explain why some situations persist even when they seem clearly improvable.

Changing the outcome may require changing incentives, information, rules, or commitment possibilities.

## Zero-sum and non-zero-sum games

In a **zero-sum game**, one player's gain is exactly another player's loss.

Competitive chess can be modeled this way: winning, losing, or drawing distributes opposite outcomes between the players.

Many real interactions are not zero-sum.

Companies may compete for customers while both benefiting from a growing market. Two countries can have conflicts and still gain through trade. A team may distribute recognition unevenly while producing more value through cooperation.

Non-zero-sum games contain opportunities to create or destroy value together.

Treating every interaction as war can manufacture a conflict the model did not require.

## Simultaneous and sequential games

In a simultaneous game, participants decide without first observing the other's action.

In a sequential game, someone acts first and others respond after observing—or inferring—that action.

Sequential games are often represented as trees:

- Nodes indicate who decides.
- Branches represent actions.
- Leaves contain payoffs.
- Information sets show what a player knows.

We can analyze them through **backward induction**: begin at the final decisions, calculate rational responses, and move toward the beginning.

A threat only affects earlier decisions, however, if carrying it out will remain rational when the time comes.

## Perfect, imperfect, and incomplete information

Information changes the game completely.

- With **perfect information**, every player observes all relevant previous actions.
- With **imperfect information**, some actions or states are unobservable at the time of a decision.
- With **incomplete information**, a player does not know relevant characteristics of another, such as costs, preferences, or capabilities.

Negotiating without knowing someone's outside option is not the same game as negotiating when that information is public.

Many strategies consist precisely of revealing, hiding, or signaling information.

## Signals, commitments, and credibility

A **signal** is an action communicating information about a type or intention. To be informative, it usually needs to have a different cost or difficulty depending on who sends it.

A **commitment** limits future actions to make a behavior credible.

A refund policy, contractual guarantee, or irreversible investment can change what others expect us to do.

Announcing an intention is not enough in strategy. Others will ask whether following through will remain in our interest when the moment arrives.

Credibility is part of the decision.

## When the game repeats

A one-time interaction may favor betrayal. A repeated relationship changes incentives.

If we will meet again, today's action affects reputation, trust, and future responses. Cooperation can be sustained because an immediate gain from betrayal triggers later losses.

Repetition introduces:

- Reputation.
- Reciprocity.
- Future punishments and rewards.
- Learning about the other player.
- The possibility of repairing a relationship.

This explains why temporal structure matters as much as the payoff matrix of a single round.

## Designing the rules is strategic too

Game theory is not only useful for choosing within existing rules.

It also helps design them.

**Mechanism design** begins with social or institutional objectives and attempts to create incentives so individual decisions lead toward desirable outcomes.

Auctions, allocation systems, markets, contracts, and internal policies can be understood as designed games.

When a system consistently produces undesirable behavior, the players may not be the only problem. The incentives may be the problem.

Instead of demanding permanent heroism, we can change the game.

## Applications beyond economics

Strategic structure appears in:

- Negotiations and contracts.
- Pricing and business competition.
- Cybersecurity.
- Networks and resource allocation.
- International politics.
- Evolutionary biology.
- Multi-agent systems.
- Platform design.
- Cooperation within teams.

In artificial intelligence, multiple agents may compete for resources, cooperate on a task, or act with different information. Designing their incentives and protocols is also a game-theory problem.

## The limits of the model

Formal models simplify.

Real players have bounded rationality, unstable preferences, emotions, errors, and social norms. True payoffs may be impossible to know. Power may be unequal, communication ambiguous, or rules may change during the interaction.

An equilibrium can predict poorly if the assumptions do not represent the situation.

The value of game theory does not lie in reducing all human behavior to a matrix. It lies in forcing us to make explicit:

- Who decides.
- What they know.
- What they can do.
- What they value.
- What they expect from others.
- Which incentives each rule creates.

Simplification is valuable when we know what it left out.

## Thinking strategically

A strategic decision does not ask only “which option looks best?”

It asks:

- What will the other player do in response?
- What is their best response?
- Is my threat or promise credible?
- Is there a stable but inefficient outcome?
- Will the interaction repeat?
- Can we change the incentives or rules?

Game theory turns these questions into models that can be analyzed.

It does not eliminate uncertainty or replace judgment. It lets us see that when several decisions affect one another, isolated optimization can lead exactly to the outcome nobody wanted.

Making a good decision does not always mean choosing the best available action.

Sometimes it means understanding the game we are playing.

## References

- John F. Nash Jr., [*Equilibrium Points in N-Person Games*](https://doi.org/10.1073/pnas.36.1.48), 1950.
- MIT OpenCourseWare, [strategic-form games and Nash equilibrium](https://ocw.mit.edu/courses/17-810-game-theory-spring-2021/mit17_810s21_lec2.pdf).
- Stanford University, [notes on games, dominant strategies, and equilibria](https://web.stanford.edu/~ashishg/msande235/spr08_09/Lecture02.pdf).

---

This article develops the difference between deciding alone and deciding inside an interaction, where every action changes what others should do. You can [watch the original video on YouTube](https://youtu.be/6cK_tFhogD8).
