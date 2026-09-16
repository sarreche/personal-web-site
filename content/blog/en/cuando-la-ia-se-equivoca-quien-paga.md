---
title: "When AI makes a mistake, who pays?"
description: "Saying that AI made the mistake does not explain who is accountable. Responsibility still follows those who design, deploy, approve, and use the system."
publishedAt: "2026-09-16"
---

Imagine visiting a company's official website, asking a question, and receiving a specific instruction from its virtual assistant.

You follow that instruction. You spend money. Then you discover that it was wrong.

When you complain, the answer is: “We are sorry, the artificial intelligence said that.”

Would you accept that explanation?

Probably not. “The AI said it” describes how the answer appeared, but it does not answer the important question:

**Who is accountable?**

The question will appear more and more often. We no longer use models only to summarize a document or suggest ideas. We connect them to customers, databases, internal systems, and money. We let them recommend, approve, reject, and execute actions.

The more capable the system appears, the easier it is to imagine that responsibility can also be delegated. But AI is not a place where obligations disappear.

## Air Canada's chatbot did not work for a stranger

One of the clearest cases involved Air Canada.

Jake Moffatt needed to travel after the death of a family member. He asked the airline website's chatbot about bereavement fares. The system told him he could purchase a full-price ticket and later request a partial refund.

Moffatt followed the instructions. The company subsequently rejected his request because its actual policy did not allow the discount to be claimed that way after travel.

The dispute reached British Columbia's Civil Resolution Tribunal. Air Canada argued that it should not be responsible for information provided by the chatbot and, according to the decision, effectively treated it as a separate entity responsible for its own actions.

The tribunal called that argument remarkable. The chatbot was part of Air Canada's website. The company was responsible for the information presented there, whether it came from a static page or an automated conversation.

It also made a very reasonable point: the passenger could not be expected to know which section of the same website was correct. Asking him to verify the official response on another Air Canada page transferred a problem created by the company onto the customer.

The decision in [*Moffatt v. Air Canada*](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html) came from a particular tribunal, in a particular jurisdiction, concerning a consumer relationship. It does not establish a universal rule for every AI system.

It does leave us with a powerful idea: an organization cannot present a system under its brand, benefit from the automation, and then treat its responses as if they came from a stranger.

## Using a tool does not erase a professional duty

The Air Canada case concerns a company facing its customer. *Mata v. Avianca* reveals a different layer.

In 2023, lawyers used ChatGPT for legal research. The model produced citations and summaries of judicial opinions that did not exist. The lawyers included that material in documents filed with a federal court in New York without properly verifying the sources.

When opposing counsel and the judge could not find the cases, the situation began to unravel. ChatGPT even assured the lawyers that the references were real when asked again.

The court ultimately sanctioned the lawyers and their firm. The problem was not merely that a tool invented information. Professionals with duties of their own chose to present that information as true without conducting reasonable verification.

The [U.S. Department of Justice summarizes the case](https://www.justice.gov/usao/media/1392531/dl?inline=) in its analysis of generative AI in legal practice. The lesson extends beyond law: a tool can assist with a task, but it does not automatically absorb the duty of care belonging to the person using its output.

If a doctor, accountant, engineer, or lawyer has a professional obligation, adding a model to the workflow does not turn it into the model's obligation.

## Putting a person at the end is not always oversight

A reassuring solution often appears in response to these risks: “There will always be a human reviewing it.”

That sounds good, but it may mean very little.

A review is real only if the person has the knowledge to detect the error, enough information to understand it, time to investigate, and authority to stop the action. If they receive hundreds of decisions every hour and click “approve” by habit, control exists in the diagram but not in practice.

Responsibility can even be transferred silently. The organization automates the analysis, accelerates the process, and leaves one person to make the final click. When something fails, it says there was human oversight. Yet that person never had realistic conditions in which to challenge the system.

A name in the final box is not enough. The intervention must be designed so that it can change the outcome.

## There is a chain behind every answer

When a screen replies, it feels as though we are facing a single actor called “the AI.” Behind it may be a rather long chain.

One company trained the model. Another built the application. An integrator connected it to documents and tools. The organization chose the purpose. A team wrote instructions and limits. Somebody set permissions. Another person approved deployment. A professional may have reviewed the output, and a customer ultimately experienced the consequence.

Each layer controls different things:

- **The model provider** controls general capabilities, evaluations, documentation, and some safety measures.
- **The developer or integrator** decides which context reaches the model, how the answer is presented, and which tools it can use.
- **The deploying organization** chooses the process, users, controls, and level of autonomy.
- **The operator or professional** may retain independent duties of review, diligence, and judgment.
- **The affected person** needs a way to understand, challenge, and correct the decision.

This does not mean everyone is always liable for everything. Actual responsibility depends on the facts, jurisdiction, industry, contracts, and type of harm.

It means something more basic: “the AI failed” is too broad a description. The useful questions are who controlled each decision, who knew or should have known about the risk, what each party promised, and who could have prevented the harm.

## Technical autonomy does not create an accountable person

With an informational chatbot, an error may be a wrong sentence. With an agent, text can become action.

A system can send an email, modify production, cancel a reservation, purchase a service, move money, or reject an application. It can also choose several intermediate steps without a person approving each one.

That creates a dangerous temptation: because the agent chose the path, it can feel as though nobody really chose anything.

But technical autonomy does not automatically create legal or moral autonomy. Somebody defined the objective. Somebody granted the permissions. Somebody decided which controls were sufficient. And an organization benefits from the work being automated.

For me, there is a simple rule:

**We should not deploy more autonomy than we are prepared to own.**

If an agent can spend a thousand dollars, somebody must be able to explain why it had that limit, reconstruct what happened, and remedy an improper purchase.

If it can reject somebody for a job or a loan, there must be a genuine path to challenge the decision and correct data.

If it can modify a production system, ownership of the service, available records, and the rollback process must be clear.

Autonomy without an owner for the outcome is not advanced architecture. It is debt waiting for an incident.

## A warning does not magically transfer the risk

Many products display a sentence such as “AI can make mistakes. Check important information.” That is a reasonable warning. It helps calibrate expectations and reminds users that the system is not infallible.

What it should not do is automatically make every harm the user's responsibility.

There is a difference between using a general assistant to explore ideas and receiving an instruction inside a company's official channel. There is also a difference between a suggestion and an action the system executes directly.

The more apparent authority, personalization, and ability to act a product has, the less reasonable it becomes to hide behind a generic warning.

An organization cannot design an experience to earn trust, celebrate the reduced friction, and later argue that nobody should have trusted it very much.

## Transparency does not mean exposing the entire architecture

The word transparency immediately appears in discussions about accountability. We sometimes interpret it as disclosing the model name, its parameters, or every provider involved.

That information may help specialists. An affected person may need much more concrete answers:

- Am I dealing with an automated system?
- What can it do on its own?
- What data does it use?
- Is this a recommendation or a decision with immediate effect?
- How can I challenge it?
- Who has the power to correct it?
- Where do I complain if harm occurred?

A company can have an enormously complex architecture while offering simple accountability externally.

The customer should not become a forensic investigator of the provider chain. The organization can later resolve matters with the integrator, model provider, or insurer. The affected person needs one recognizable door.

## Seven questions before the system goes live

Accountability is not designed after an incident. By then, we are merely trying to distribute the cost.

Before deploying AI that informs, recommends, or acts, I would answer at least these questions:

1. **Who owns the outcome?** Not the model in the abstract, but this specific process.
2. **What can the system do alone?** Which actions require confirmation, and which are not allowed at all?
3. **What needs to be recorded?** Enough to reconstruct a decision without retaining unnecessary information or creating another risk.
4. **How do we test the boundaries?** Not only normal cases, but incomplete data, conflicting instructions, and situations where the system should stop.
5. **What are we promising the user?** The interface, language, and brand also create expectations.
6. **How is an error corrected?** There must be a human channel with actual power to provide a remedy.
7. **What have we agreed with providers?** Contracts should cover information, incidents, limits, indemnification, and cooperation—not only price and availability.

These questions do not prevent innovation. They allow it to survive the moment it leaves the demonstration and begins producing consequences.

## Delegating a task is not delegating responsibility

When AI makes a mistake, there is rarely a universal answer or one person solely at fault. There may be model failures, poor integration, incorrect data, inadequate controls, and professional review that never happened.

But we can say one thing: artificial intelligence should not become a hole where responsibility disappears.

Air Canada could not present a chatbot inside its website and then behave as though the answer came from an unrelated entity. The lawyers in *Mata v. Avianca* could not submit nonexistent cases and transfer their duty to verify them onto ChatGPT.

As we move from systems that answer to agents that act, this conversation becomes even more important. The question is not only how much autonomy we can grant. It is whether we are building an equally clear chain of ownership, control, explanation, and remedy around it.

If an organization receives the benefit of automation, it must also be prepared to respond when that automation fails.

Delegating a task is not the same as delegating responsibility.

In [this video](https://youtu.be/ztYYB_unLvo), I explore the cases and the questions worth answering before allowing AI to make decisions with real consequences.

*This article is editorial commentary and general information. It is not legal advice; specific responsibility depends on the jurisdiction, industry, contracts, and facts of each case.*
