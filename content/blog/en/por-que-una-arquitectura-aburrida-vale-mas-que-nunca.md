---
title: "Why is boring architecture more valuable than ever?"
description: "AI makes systems easier to build. Choosing something we can understand, update, and maintain is still our responsibility. The PHP security notice is a reminder."
publishedAt: "2026-10-21"
---

On October 20, the PHP team [announced a security release](https://www.php.net/archive/2026.php#2026-10-20-1) scheduled for October 21 at 14:00 UTC, or 11 a.m. in Montevideo. The notice describes two critical vulnerabilities, both with a CVSS v4.0 score of 9.2.

When I checked the announcement for this article, details and affected and fixed versions were still pending that release. That is not enough to identify exposed installations or claim that active exploitation is occurring.

The notice strikes me as a useful starting point for a discussion that AI makes more urgent: what we choose to build and who takes care of it afterward.

I believe boring architecture is more valuable than ever. But that choice comes with an obligation: keeping it maintained.

## Familiar technology has practical value

In 2015, Dan McKinley wrote [Choose Boring Technology](https://mcfunley.com/choose-boring-technology). One of its central ideas is that familiar technologies let us better understand their failure modes. He also argues for considering the cost of tools across the whole system.

That perspective remains useful. When something breaks, documentation, procedures the team understands, and tools it knows how to use all help. Choosing a technology also means choosing how you will investigate its problems.

PHP is a language and runtime; it does not define an architecture on its own. You can build a straightforward system or one that is extremely difficult to operate using the same technology. The notice is a reason to discuss maintenance, not proof that every PHP application is a good choice.

To me, boring architecture has a concrete property: the team can explain how it works and what it would do if one part failed.

## AI makes the first step cheaper

With an agent, you can request an API, a queue, a dashboard, and an integration. If the task goes well, you have a working solution in a short time. That expands what you can attempt.

But every component you accept introduces decisions: where it runs, what permissions it has, how it gets updated, what data it stores, and what it depends on. The agent's ability to connect the pieces does not answer those questions for the team.

That is where I see a risk: confusing how easily we can generate a solution with our ability to sustain it. An integration that took ten minutes can stay with you for years.

[AI and the mortgage of technical debt](/en/blog/la-ia-y-la-hipoteca-de-la-deuda-tecnica) explores that concern about what remains after building. Here, I would apply it to an earlier decision: how many components we need to introduce to solve the problem.

AI can help us implement more alternatives. We still need judgment to choose among them.

## A small solution still requires judgment

Imagine a hypothetical case: a company needs to receive requests, approve them, and send a confirmation. One team proposes an application with a database and a process to handle sending. Another proposes several services, a queue, and different runtimes.

Both proposals could work. To decide, I would ask what specific need justifies each separation. Are there different workloads? Teams that must deploy independently? A task that needs isolation? Or are we adding components because generating them is now easy?

If one application is enough and the team knows how to operate it, I would start there. If requirements emerge that justify separating components, I would revisit the decision.

Simplicity cannot be measured by counting servers either. A single process full of hidden dependencies can be harder to maintain than several services with clear responsibilities. What matters is being able to trace an operation, locate an error, and make a change without guessing at its consequences.

## Boring needs someone responsible

The PHP notice shows one part of the work: a team communicates a problem and prepares a fix. For that to protect an application, there is still a process to complete.

Someone needs to know which version it uses, check whether it is affected, obtain the update through the appropriate channel, check compatibility, and deploy it. They also need to verify the result and recover the service if something goes wrong.

That process may be shared among the team, a vendor, and a hosting platform. What matters is having clear responsibilities. Paying for a managed service still requires understanding what it covers.

An application can keep responding while becoming increasingly difficult to update. Leaving it untouched for years tells us little about its health if we also do not know how to change it.

That is why, when discussing architecture intended to last, I would include maintenance time and named responsibilities. They are part of the design that makes continued use possible.

## The questions I would ask before adding another component

Before accepting a technology proposed by a person or an agent, I would put these questions on the table:

- What specific problem does it solve, and what simpler alternative do we have?
- Who on the team can explain how it operates and how it fails?
- Who receives its security notices and decides on updates?
- How do we check a change, and how do we roll it back if it fails?
- What happens to the data and operations if we need to replace it?

The answers do not need to fill a huge document. They do need to exist, and someone else needs to be able to find them.

I would also make room for learning new tools. Sometimes a requirement justifies taking on uncertainty. In that case, it helps to state what we expect to gain, what we need to learn, and who will support that choice.

## Choose with the next five years in mind

AI makes exploring solutions more accessible. I see that as an opportunity to compare options better and make more informed choices. It also requires resisting the temptation to adopt everything we can generate.

Familiar, maintained architecture lets us focus attention on the business problem. Its value depends on our ability to keep updating it, understand its limits, and change it when necessary.

The question I want to leave you with is this: **what will we be able to maintain five years from now, with the team and resources we can reasonably sustain?**

If you would like an outside perspective on your stack, get in touch. I continue these conversations on [my YouTube channel](https://www.youtube.com/@saarreche).

Take care.

## References

- [PHP: advance notice of a critical security release, October 20, 2026](https://www.php.net/archive/2026.php#2026-10-20-1). Source of the announcement; consult PHP for release details and versions.
- [Dan McKinley: Choose Boring Technology, 2015](https://mcfunley.com/choose-boring-technology). A framework for considering the operational cost of adopting technologies.
