---
title: "Custom software development or off the shelf: how to decide"
description: "For advisors and BFSI leaders: when to buy, when custom software development pays off, total cost, lock-in, exit and the evidence APRA expects."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "custom-vs-off-the-shelf-financial-services"
canonical: "https://palxi.com.au/blog/custom-vs-off-the-shelf-financial-services"
site_name: "Palxi"
kicker: "Building and modernising"
coverImage: "hero.jpg"
coverImageAlt: "Row of ornate Victorian buildings on Collins Street, Melbourne, with glass office towers rising behind them"
og_image_alt: "Row of ornate Victorian buildings on Collins Street, Melbourne, with glass office towers rising behind them"
tags: ["custom software development", "build vs buy", "financial services", "vendor lock-in", "cps 230"]
lang: "en-AU"
---

# Custom software development or off the shelf: how to decide

On 17 November 2022, ASX paused its CHESS replacement project and derecognised about $245 million to $255 million (pre-tax) of its own project costs. The original plan was a new system built on distributed ledger technology ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-143mr-asx-ordered-to-pay-205-million-penalty-for-misleading-conduct-relating-to-chess-replacement-project), 2026).

A year later ASX chose "a product based solution" from TCS, which it expected to "minimise the amount of customisation required to support the Australian market" ([ASX](https://www.asx.com.au/content/dam/asx/about/media-releases/2023/70-20-november-2023-chess-replacement-solution-announced-and-2024-consultation.pdf), 20 November 2023). Release 1, covering clearing services, went live on 20 April 2026 ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-143mr-asx-ordered-to-pay-205-million-penalty-for-misleading-conduct-relating-to-chess-replacement-project), 2026).

That isn't proof that custom software development is a mistake. It does show that the choice is expensive to get wrong, in both directions. This guide is for advisors and BFSI decision-makers who have to make that call for a regulated firm, and then defend it to a board.

> **The short version**
>
> - Buy commodity functions. Build where the firm competes, where integration is the product, or where no product fits the regulatory shape of the business.
> - Most regulated firms end up hybrid: they buy the core systems and build the customer-facing and integration layers around them.
> - Compare total cost over five years or more, including exit. Licence fees and build quotes are the smallest lines.
> - CPS 230 requires an orderly exit from arrangements with material service providers. Plan the same exit test for a custom build, especially if an outside team runs it.
> - Regulators expect the same evidence either way, and a vendor's certification doesn't carry your obligations.

## The real question is which parts to build

Build or buy sounds like one decision. In practice it's a dozen smaller ones, one per capability.

A lender needs a ledger, an origination flow, credit decisioning, identity checks, payments, collections, reporting and a customer app. Some of those are the same at every lender. Some are the reason customers choose this one. Treating the platform as a single choice forces the same answer onto both.

So start with a capability map before any vendor shortlist. For each capability, ask: does it set us apart, how many systems does it touch, and does a product exist that fits our regulatory obligations without heavy change? The answers usually sort the map into buy, build and integrate.

If you're weighing this for a bank or lender specifically, [digital banking solutions: build or buy](/blog/digital-banking-solutions-build-or-buy) works through the same logic for the core banking stack.

## Where off the shelf wins

Buy when the function is a commodity. That means every firm needs it, nobody wins customers with it, and the rules it follows are the same for everyone.

| Capability | Usually buy | Why |
|---|---|---|
| General ledger and finance | Yes | Accounting rules are standard, and auditors know the major products |
| HR, payroll, email, office tools | Yes | No customer ever sees them |
| Card issuing and processing | Usually | Scheme certification is slow and costly to repeat |
| Sanctions and PEP list data | Yes | Specialist providers maintain and update the lists |
| Identity document verification | Usually | Specialist providers hold the data sources and liveness models |
| Core deposit or loan ledger | Often | Mature products exist, but check fit and exit terms first |

Products also bring things that are hard to build quickly: years of edge cases, an existing user base that finds bugs before you do, and often an assurance report you can hand to an auditor.

The trap is buying a product for a function that isn't a commodity for this firm. Then the customisation starts. Heavy changes to a vendor product can leave you with the costs of a custom build and less of the control, plus upgrades that break your changes. ASX said it expected its chosen product to minimise the customisation needed for the Australian market.

## Where custom software development earns its cost

![A cloth tailor's tape and a retractable tape measure lying on a pale grey surface](measuring-tapes.jpg)

*Custom work starts with measuring what the business actually does.*

Developing custom software makes sense in the situations below. They overlap, and many regulated products sit in more than one.

### When it is how the firm competes

If a feature is the reason a customer picks this lender, platform or insurer, a product the competitors can buy won't set it apart. A pricing engine, a broker portal with a faster decision, a payout flow that settles in seconds: these are where custom application development pays back. You own the roadmap, and nobody else gets the same feature on the next release.

### When integration is the product

Some products are mostly glue. A payments platform that routes between card and account-to-account rails, or a wealth platform pulling from custodians, registries and advisor platforms, spends most of its code on integration. A product built for one bank's world rarely fits those joins. The work is custom whichever way you go. The only question is whether it lives in your codebase or in a vendor's customisation layer.

### When no product fits the regulatory shape

Australian obligations are specific. PayTo mandates, Confirmation of Payee, AUSTRAC reporting, Consumer Data Right consent flows and CPS 230 tolerance levels all have local detail. An offshore product may handle the concept but not the local rule. If the gap sits in the middle of the customer journey, filling it outside the product is often cleaner than bending the product.

Our view: custom work is justified when you can name the advantage or the obligation it serves. A general wish for control is a weak business case on its own.

## Buy the core, build the edges

Most regulated firms land somewhere in between. They buy the systems of record and build what sits around them.

Take a hypothetical mid-sized non-bank lender. It licenses a loan management ledger and a general ledger, and buys identity verification and sanctions screening as services. It builds its own broker and customer apps, its credit decisioning rules, the integration layer that connects everything, and its reporting. The ledger vendor carries the accounting logic. The lender owns everything a customer or broker touches.

That pattern holds up when:

1. **The core stays close to standard.** Configure it, don't rewrite it. Keep your own logic outside, behind an interface you control.
2. **The integration layer belongs to you.** If every edge system talks to the core directly, the core vendor has quietly become your architecture.
3. **Data can leave.** Your own data store holds a copy of what matters, in a format you define, so reporting and a future migration don't depend on the vendor's export tool.

The same thinking applies to compliance tooling. [Compliance software: build or buy](/blog/compliance-software-build-or-buy) covers where rules engines and case management fit this split.

## Total cost of ownership over five years

A licence price and a build quote are not comparable numbers. Put both options on the same five-year view, with the same cost lines.

| Cost line | Off the shelf | Custom build |
|---|---|---|
| Upfront | Licence or setup fees, implementation partner, configuration | Discovery, design, build, testing |
| Integration | Connectors to your systems, often priced separately | Built as part of the product |
| Running | Subscription, often tied to volume or accounts | Hosting, monitoring, on-call support |
| Change | Vendor change requests, or waiting for their roadmap | Your own team's time |
| Compliance evidence | Vendor reports plus your own controls and testing | Your own controls, testing and audits |
| Upgrades | Forced upgrades, retesting your customisations | Framework and dependency upgrades |
| Exit | Data extraction, parallel running, migration | Handover and documentation, if the team changes |

Two lines get missed most often. Volume-based subscriptions grow with the business, so a product that is cheap at launch can be the dearest option at scale. Exit costs apply to both options. For a bought product, the vendor contract sets many of them.

For the build side, [what bespoke software development costs for financial services in Australia](/blog/bespoke-software-cost-financial-services-australia) sets out cost ranges and the assumptions behind them.

## Lock-in and the exit you have to plan

![A green emergency exit sign with a running figure and an arrow, mounted above a doorway in a modern building](exit-sign.jpg)

*Every material arrangement needs a way out that someone has actually thought through.*

For an APRA-regulated entity, exit isn't optional. CPS 230 says an entity "must not rely on a service provider unless it can ensure that in doing so it can continue to meet its prudential obligations in full". It must also "ensure it can conduct an orderly exit from the arrangement if needed" ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). Core technology services sit on APRA's default list of material service providers for every entity.

APRA's practice guide adds that, when choosing a material provider, an entity would typically consider "business services and capabilities which must be retained in-house" and "concentration risk" ([APRA, CPG 230](https://www.apra.gov.au/practice-guides/cpg-230)). Both points bear directly on what a firm builds and what it buys.

Concentration is on the regulators' minds. The Reserve Bank notes that "some of the largest regulated entities have around 150 service providers supporting critical operations" ([RBA](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026). In March 2026, APRA Member Therese McCarthy Hockey spoke to customer-owned banks about their shared technology providers, including core banking platforms. She warned that "pooling can unintentionally deepen concentration risk and reduce optionality in a crisis" ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), March 2026).

Custom software can lock you in too, for example when only one contractor understands the system. So the exit test applies to both options:

- Can you get all your data out, in a usable format, without the provider's help?
- Could another team run and change the system within a quarter?
- Is the source code, infrastructure setup and documentation held somewhere you control?
- Has anyone tested the exit, even as a desk exercise?

The full contract checklist is in [what CPS 230 expects of your technology vendors](/blog/cps-230-technology-vendors).

## The evidence regulators and auditors expect either way

Accountability stays with the regulated entity whichever way you go.

Under CPS 234, where information assets are managed by a third party, the regulated entity "must evaluate the design of that party's information security controls" ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)). AUSTRAC is just as direct about outsourced AML/CTF functions: "you remain responsible for complying with your obligations under the Act and Rules" ([AUSTRAC](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/additional-guidance/using-outsourcing-help-meet-your-obligations), July 2026). Software you run in-house isn't outsourcing under that guidance, but the obligations stay with you there too.

| Evidence | If you buy | If you build |
|---|---|---|
| Security controls | Vendor SOC 2 or ISO 27001, your review of it, plus your own user-side controls | Your own controls, tested and documented |
| Access and change | Who can configure the product, and how changes are approved | Code review, deployment logs, segregation of duties |
| Testing | Your testing of configuration and integrations | Unit, integration, security and penetration testing |
| Resilience | Vendor recovery tests mapped to your tolerance levels | Your own recovery and failover tests |
| Exit | Tested data extraction and a transition plan | Documentation and knowledge that isn't held by one person |

Assurance reports help, but they have limits. A SOC 2 report covers the vendor's chosen scope and usually lists controls the customer has to run itself. [What a SOC 2 report tells a buyer](/blog/soc-2-for-buyers) covers how to read one.

Our view: whichever way you go, plan the evidence from the first week. It costs far less to produce as you go than to rebuild for an auditor.

## A board-ready decision test

A board doesn't need the architecture. It needs to see that the decision was made on purpose. For each major capability, record the answers to these questions:

- Does this capability set us apart from competitors?
- How many internal and external systems does it connect to?
- Does a product meet our Australian obligations without heavy customisation?
- What is the five-year cost of each option, including exit?
- If the provider or team failed tomorrow, how would we keep the critical operation running?
- Who in the firm owns the decision and the ongoing risk?

Write the answer down with the reasoning, and keep it with the board papers. APRA and auditors may ask for it later.

## Common questions

### Is custom application development riskier than buying?

It carries different risks. A build carries delivery risk: scope, timeline and the team's skill. A product carries fit, customisation and concentration risk. Staged delivery with early working releases reduces delivery risk. ASX said it expected its two-release approach to "reduce overall delivery risk" ([ASX](https://www.asx.com.au/content/dam/asx/about/media-releases/2023/70-20-november-2023-chess-replacement-solution-announced-and-2024-consultation.pdf), November 2023).

### Can we start with a product and build later?

Yes, and it's often sensible. Buy to launch, keep your data and integration layer under your control, then replace pieces as you learn where the product holds you back. Plan it that way from day one, or the product becomes too embedded to move. [Modernising a legacy platform without a big-bang rewrite](/blog/legacy-core-banking-modernisation) describes how to replace parts while the business keeps running.

### Does a vendor's certification cover our obligations?

No. It is evidence about the vendor's controls. You still have to assess the vendor, run your own controls and meet your own reporting duties.

## What to do next

Pick one product or platform decision in front of your client now. Map its capabilities, sort each into buy, build or integrate, and write down the exit plan for every material piece. If the build pile is large, [how to choose a software development partner for a regulated platform](/blog/choosing-software-development-partner-regulated) covers what to look for, and [software for financial services](/industries/financial-services) shows the platforms involved.

When the answer is to build, Palxi joins advisors early and builds the parts that set their clients apart. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against APRA, AUSTRAC, RBA, ASIC and ASX sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Rialto building group on Collins St"](https://commons.wikimedia.org/w/index.php?curid=175834245) by Lytian100, [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Measuring tapes, ["Tailor's measuring tapes"](https://commons.wikimedia.org/w/index.php?curid=160473346) by Muszkietqa, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), cropped. Exit sign, ["Emergency exit sign"](https://commons.wikimedia.org/w/index.php?curid=76845719) by Eric Fischer, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
