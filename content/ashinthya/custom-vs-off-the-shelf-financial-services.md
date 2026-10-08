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

On 17 November 2022, the Australian Securities Exchange (ASX) announced a historic decision: it paused its multi-year project to replace Australia's national share settlement clearing system, known as CHESS, writing off an estimated $245 million to $255 million AUD in accumulated project development costs. The original ambitious plan was to build an entirely bespoke clearing architecture based on complex distributed ledger technology ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-143mr-asx-ordered-to-pay-205-million-penalty-for-misleading-conduct-relating-to-chess-replacement-project), 2026).

Exactly twelve months later, the ASX selected a commercial off-the-shelf software package provided by Tata Consultancy Services (TCS), explicitly noting that an established commercial product would "minimise the amount of customisation required to support the Australian market" ([ASX](https://www.asx.com.au/content/dam/asx/about/media-releases/2023/70-20-november-2023-chess-replacement-solution-announced-and-2024-consultation.pdf), November 2023). That revised solution successfully rolled out its initial phase in April 2026 ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-143mr-asx-ordered-to-pay-205-million-penalty-for-misleading-conduct-relating-to-chess-replacement-project), 2026).

That high-profile episode does not suggest that custom software development is a mistake. However, it demonstrates with painful clarity that making the wrong strategic software choice—in either direction—carries enormous financial and operational consequences.

For company directors, corporate advisors, and leadership teams across Australian banking, lending, and financial services, making the "build versus buy" decision is one of the most critical governance choices you will ever face. Here is a clear, practical guide to navigating that decision—exploring where commercial software shines, where bespoke software delivers decisive competitive advantage, how to calculate genuine five-year operating costs, and the mandatory evidence Australian regulators expect your board to retain.

## The real question is which parts to build

Business leaders often speak of "build versus buy" as though it were a single all-or-nothing choice for an entire company. In practical reality, an Australian financial institution is built from dozens of interconnected digital components.

Consider an everyday Australian non-bank lender. That lender requires an accounting general ledger, a customer loan application portal, an automated credit scoring engine, digital identity checks, payment processing gateways, a customer mobile app, debt collection tools, and regulatory reporting systems. Some of those capabilities are completely identical across every lender in the country. Other capabilities—such as the speed of credit approval or a beautifully designed customer portal—are the exact reason borrowers choose that company over a big bank.

Treating your entire technology platform as a single decision forces you into painful compromises. Instead, begin with a capability map before requesting software sales pitches. For each operational capability, ask your executive team three straightforward questions:

- Does this specific software function differentiate our business and win us new customers?
- How many internal databases and external payment rails does it need to connect to?
- Does a commercial off-the-shelf product exist that satisfies our Australian regulatory obligations without massive customisation?

Sorting your capabilities against these questions reveals a clear architecture: you buy standard utilities, build proprietary customer advantages, and engineer secure interfaces to connect them seamlessly. If you are evaluating core infrastructure for a retail bank or lender, our guide to [digital banking solutions: build or buy](/blog/digital-banking-solutions-build-or-buy) explores this exact capability breakdown.

## Where off the shelf wins

Commercial software is the smartest choice whenever a capability is a standardized commodity. A capability is a commodity when every business in your sector needs it, no consumer chooses you because of it, and the underlying legal rules are identical for everyone:

| Business capability | Standard recommendation | Practical operational rationale |
|---|---|---|
| **General ledger & corporate accounting** | Buy commercial software | Australian tax rules and double-entry accounting standards are universal; auditors expect proven commercial accounting systems. |
| **HR, payroll & office administration** | Buy commercial software | Everyday staff administrative tools are entirely invisible to your retail banking customers. |
| **Payment card issuing & scheme processing** | Buy specialized service | Meeting Visa and Mastercard compliance rules independently is prohibitively expensive and time-consuming. |
| **Sanctions & PEP watchlist databases** | Buy external data feeds | Specialist global data providers maintain and update international sanctions and politician watchlists continuously. |
| **Identity document verification** | Buy verified gateway access | Specialist providers maintain direct, approved electronic links to the Commonwealth Document Verification Service (DVS). |
| **Core deposit or loan ledger** | Often buy commercial platform | Mature banking ledgers provide proven accounting logic, but check exit and data extraction terms carefully. |

Commercial software products also deliver hidden operational benefits: years of real-world bug fixes, an established community of users identifying software flaws before you do, and ready-made assurance certificates to share with external auditors.

The danger arises when an organisation purchases a commercial product for a function that is *not* a commodity for their specific business. When an off-the-shelf product does not fit your unique customer journey, expensive software modifications begin. Heavy customisation of an off-the-shelf package frequently results in the worst of both worlds: you endure the high capital costs of a custom build while losing direct control of the source code, and future vendor software updates frequently break your custom modifications.

## Where custom software development earns its cost

![A cloth tailor's tape and a retractable tape measure lying on a pale grey surface](measuring-tapes.jpg)

*Bespoke software development begins by measuring exactly how your business delivers distinctive value to its customers.*

Engineering custom software provides an exceptional return on investment across three specific operational scenarios:

### 1. When the capability is how your firm wins in the market

If a software feature is the primary reason an Australian customer chooses your financial service over a competing bank, buying software that your competitors can purchase off the same shelf will never set you apart. An automated commercial loan decisioning engine, a digital broker portal that issues conditional approvals in minutes, or an instant account-to-account payout system: these proprietary customer experiences are where bespoke engineering delivers outstanding commercial returns. Your business owns the software roadmap, and competitors cannot replicate your feature on their next software update.

### 2. When integration is the product itself

Many modern financial platforms are fundamentally integration engines. A payment platform routing transactions across cards and real-time bank rails, or a wealth platform synchronizing investment data across custodians, registries, and financial planners, spends 80 per cent of its software code connecting external systems. A generic off-the-shelf product designed for North American or European banking infrastructure rarely accommodates these local Australian connections cleanly. In these environments, integration work is required regardless of your approach; the only question is whether that logic lives cleanly inside your own software or in an expensive vendor customisation layer.

### 3. When no commercial package satisfies Australian regulatory mandates

Australia's regulatory environment possesses unique, highly specific statutory mechanisms. Account-to-account PayTo mandates, Confirmation of Payee name-matching, AUSTRAC suspicious matter reporting deadlines, Consumer Data Right (CDR) consent flows, and APRA CPS 230 operational risk tolerances all require precise local handling. A generic overseas software package may understand the broad concept of a payment, but lack the technical capability to handle Australian statutory rules. When regulatory gaps sit directly inside your customer onboarding or checkout experience, engineering a custom workflow is vastly cleaner than attempting to twist an inflexible foreign software package.

Custom engineering is justified when it directly serves a clear competitive advantage or a statutory legal duty. A vague executive desire for "total control" is never a sufficient business case on its own.

## Buy the core, build the edges

The most successful Australian financial institutions adopt an intelligent hybrid architecture: **they buy standard systems of record, and build proprietary systems of engagement**.

Consider a mid-sized Australian non-bank lender. The company licences a reliable core loan management ledger to calculate interest rates and generate monthly statements, and purchases identity verification and sanctions screening via secure cloud APIs. However, the company builds its own broker portal, mobile customer application, credit decisioning engine, and management reporting dashboards. The external ledger handles basic accounting rules, while the lender retains total ownership over every digital screen touched by a customer or loan broker.

This proven architectural pattern succeeds when:

1. **The core ledger remains standard.** Configure the commercial core ledger without rewriting its internal code. House your unique business rules outside the ledger, connected through clean interfaces you control.
2. **The integration layer belongs to your business.** If every customer portal and mobile app connects directly into the vendor's database, the software vendor has quietly become your master architect, making it nearly impossible to switch providers later.
3. **Customer data remains easily portable.** Your organisation maintains an independent copy of all transaction records and customer history inside your own secure data warehouse, ensuring future reporting and regulatory compliance never depend on an external vendor's proprietary export tools.

Our companion analysis of [compliance software: whether to build or buy for regulated platforms](/blog/compliance-software-build-or-buy) explores how to apply this exact framework to regulatory case management.

## Total cost of ownership over five years

Comparing an initial vendor software subscription quote directly against an upfront custom software build quote is comparing apples to oranges. To reach an honest governance decision, company boards must evaluate both options across a five-year total cost of ownership (TCO) model:

| Cost dimension | Commercial off-the-shelf software | Bespoke custom software build |
|---|---|---|
| **Upfront capital investment** | Initial software licence, implementation consulting fees, and vendor configuration charges | Discovery workshops, user experience design, engineering development, and security testing |
| **System integration** | Custom connectors linking the vendor package to your existing internal ledgers (often priced separately) | Engineered natively as an integral part of the core software build |
| **Ongoing operating fees** | Recurring monthly subscriptions, frequently escalating based on transaction volumes or staff seats | Cloud server hosting, real-time security monitoring, and on-call engineering support |
| **Software modifications** | Paid vendor change requests, or waiting months for the vendor's global product roadmap | Prioritised and implemented directly by your own engineering team |
| **Regulatory compliance** | Reviewing vendor audit reports, plus configuring customer-side controls and conducting annual audits | Documenting, testing, and auditing your own proprietary operational controls |
| **System upgrades** | Mandatory vendor software updates, requiring retesting of all custom integrations | Deliberate, scheduled upgrades of software libraries and security patches |
| **Exit & migration costs** | Expensive proprietary data extraction fees, parallel running costs, and data conversion | Handing over well-documented code repositories and technical runbooks to a successor team |

Two expenditure lines are frequently overlooked by corporate buyers. First, volume-based software subscriptions escalate rapidly as customer transactions grow. A commercial tool that appears affordable at 5,000 customers can easily become your single largest operating expense at 100,000 customers. Second, the cost of eventually exiting a software platform must be factored in on day one.

To examine realistic development ranges for custom financial applications, our breakdown of [what bespoke software development costs in Australia](/blog/bespoke-software-cost-financial-services-australia) details current day rates and project tiers.

## Lock-in and the exit you have to plan

![A green emergency exit sign with a running figure and an arrow, mounted above a doorway in a modern building](exit-sign.jpg)

*Every material technology arrangement requires a practical, documented exit strategy that executive management has tested.*

For an APRA-regulated financial business, having an orderly exit plan is not a theoretical exercise—it is a mandatory legal obligation under Prudential Standard CPS 230 ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). The prudential standard states explicitly that an institution must not enter into a material service arrangement unless it can guarantee that it can conduct an orderly transition away from that provider if necessary.

APRA's prudential guidance note, CPG 230, reminds boards to consider which critical operational capabilities must be retained in-house, alongside evaluating "concentration risk"—the danger of the entire Australian financial sector relying on the same handful of technology providers ([APRA, CPG 230](https://www.apra.gov.au/practice-guides/cpg-230)).

The Reserve Bank of Australia highlighted that major Australian financial entities now rely on approximately 150 service providers to maintain critical daily operations ([RBA](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026). Addressing customer-owned banks in March 2026, APRA Member Therese McCarthy Hockey issued a clear warning regarding shared banking software: *"pooling can unintentionally deepen concentration risk and reduce optionality in a crisis"* ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), March 2026).

Custom software can also create lock-in if an organisation permits a single freelance contractor to hold all proprietary system knowledge. A robust exit strategy applies with equal force to both approaches:

- Can your team extract all customer records, loan balances, and audit logs in a clean, standard format without vendor obstruction?
- Could an independent software team assume management of the platform within three months using standard documentation?
- Does your organisation own the software source code, cloud hosting accounts, and architectural runbooks?
- Has your management team ever conducted a desktop simulation testing how services would continue if the software provider collapsed?

Review our comprehensive checklist on [what CPS 230 expects of technology vendors](/blog/cps-230-technology-vendors) before signing material supplier agreements.

## The evidence regulators and auditors expect either way

A common corporate misconception is that purchasing commercial software outsources your regulatory risk.

Under Australian law, statutory accountability remains squarely with the board of the regulated institution. Under APRA Prudential Standard CPS 234, if customer records are hosted by an external software vendor, the regulated institution must evaluate the design and effectiveness of that vendor's security controls ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)). AUSTRAC enforces the exact same principle regarding anti-money laundering controls: you remain fully responsible for complying with your obligations, regardless of which software tool you deploy ([AUSTRAC](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/additional-guidance/using-outsourcing-help-meet-your-obligations), July 2026).

| Compliance dimension | Documentary evidence when buying off the shelf | Documentary evidence when building custom software |
|---|---|---|
| **Security safeguards** | Vendor's independent SOC 2 Type 2 or ISO 27001 report, your internal assessment of it, and customer-side access controls | Documented internal controls, automated logging, and regular independent penetration testing |
| **Access management & changes** | Staff access registers, multi-factor authentication enforcement, and vendor software release logs | Independent peer code review logs, automated build pipeline records, and separation of duties |
| **Technical testing** | Verification testing of software configurations, payment gateways, and API connections | Comprehensive unit tests, end-to-end integration tests, and annual independent penetration tests |
| **Operational resilience** | Vendor disaster recovery test reports mapped against your approved downtime tolerances | Practical recovery simulation reports proving systems can be rebuilt from backup vaults |
| **Exit capability** | Verified data extraction scripts and a signed transition agreement with the vendor | Comprehensive software documentation, runbooks, and client-owned source code repositories |

While an external vendor's SOC 2 report provides valuable assurance, it always lists complementary responsibilities that your internal team must maintain. Our guide on [how to read a SOC 2 report as a buyer](/blog/soc-2-for-buyers) explains how to verify these operational boundaries.

## A board-ready decision test

A company board does not need to debate technical programming languages; directors need to verify that a strategic technology decision was reached through deliberate, disciplined governance.

For every major software capability, record the answers to six practical questions in your board papers:

1. Does this specific software capability differentiate our brand and win us customers?
2. How many internal systems, banking ledgers, and external payment rails does it need to connect to?
3. Does a commercial package satisfy our Australian regulatory duties without costly custom modifications?
4. What is the comprehensive five-year total cost of ownership, including future exit and data migration costs?
5. If the software vendor or engineering partner failed unexpectedly tomorrow, how would our business keep critical customer operations running?
6. Which senior executive within our organisation owns the ongoing operational risk?

Document these responses clearly alongside management's formal business case. When APRA supervisors or independent financial auditors inspect your technology governance, having these documented answers on file provides immediate regulatory confidence.

## Common questions

### Is custom software development inherently riskier than buying a commercial product?

Both approaches carry distinct operational risks. Custom software development involves delivery risk: managing scope, project timelines, and engineering craftsmanship. Purchasing off-the-shelf software carries business-fit risk, vendor lock-in, and industry-wide concentration risk. Adopting a phased delivery approach with frequent, functional software releases significantly mitigates custom development risk. The ASX explicitly noted that adopting a multi-release deployment strategy was designed to reduce overall delivery risk ([ASX](https://www.asx.com.au/content/dam/asx/about/media-releases/2023/70-20-november-2023-chess-replacement-solution-announced-and-2024-consultation.pdf), November 2023).

### Can an organisation launch with commercial software and replace it with custom tools later?

Yes, and this is frequently a very wise operational strategy. Many successful financial businesses launch their initial commercial pilot using an off-the-shelf core ledger, ensuring they maintain strict control over their integration layer and customer databases. As the business grows and identifies where the off-the-shelf product restricts customer conversion, specific capabilities can be replaced with custom-built modules. Our guide to [modernising core banking platforms without a big-bang rewrite](/blog/legacy-core-banking-modernisation) details how to replace legacy components progressively while keeping business operations running smoothly.

### Does purchasing certified software satisfy our organisation's regulatory obligations?

No. An external software certificate merely provides evidence regarding the vendor's internal safeguards. Under Australian prudential and financial services laws, your organisation must independently assess the vendor, manage user access permissions, and maintain direct regulatory compliance for customer records.

## Recommended next steps

Select one pending technology or software decision currently facing your organisation. Map the underlying capabilities, categorise each into "buy", "build", or "integrate", and draft a practical exit strategy for every material system.

If custom engineering represents a substantial part of your strategy, our guide on [how to choose a software development partner for regulated platforms](/blog/choosing-software-development-partner-regulated) outlines key criteria to evaluate, while our overview of [software for Australian financial services](/industries/financial-services) demonstrates how bank-grade platforms are architected.

When your organisation decides to build proprietary capabilities that set your business apart, Palxi works alongside leadership teams to engineer dependable, auditable financial platforms built to satisfy strict Australian regulatory standards. [Contact our Australian team](mailto:hello@palxi.com.au).

*Regulatory standards, statutory citations, and financial market precedents were verified against APRA, AUSTRAC, RBA, ASIC, and ASX publications on 27 September 2026. See [how we work](/#how-we-work).*

*This article provides general informational commentary and does not constitute formal legal, financial, or prudential advice. Please consult qualified legal counsel or your appointed compliance advisor for specific operational guidance.*

*Photos: cover, ["Rialto building group on Collins St"](https://commons.wikimedia.org/w/index.php?curid=175834245) by Lytian100, [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Measuring tapes, ["Tailor's measuring tapes"](https://commons.wikimedia.org/w/index.php?curid=160473346) by Muszkietqa, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), cropped. Exit sign, ["Emergency exit sign"](https://commons.wikimedia.org/w/index.php?curid=76845719) by Eric Fischer, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
