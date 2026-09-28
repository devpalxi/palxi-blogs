---
title: "Digital banking solutions in Australia: build or buy"
description: "Which parts of a lender's digital banking stack to buy and which to build, with the APRA, ASIC, CPS 230 and CDR rules that shape the choice in Australia."
date: "2026-09-27"
lastUpdated: "2026-09-28"
author: "Palxi Team"
slug: "digital-banking-solutions-build-or-buy"
canonical: "https://palxi.com.au/blog/digital-banking-solutions-build-or-buy"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "Looking up into an ornate domed ceiling with a glass skylight inside a heritage building on Collins Street, Melbourne"
og_image_alt: "Looking up into an ornate domed ceiling with a glass skylight inside a heritage building on Collins Street, Melbourne"
tags: ["digital banking", "build vs buy", "open banking", "cps 230", "lending"]
lang: "en-AU"
---

# Digital banking solutions in Australia: build or buy

In March 2026, APRA's Therese McCarthy Hockey told the COBA forum that the mutual sector "already has a heavy reliance on a small group of technology providers" ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), 17 March 2026). She was citing APRA's own analysis of the sector.

That line lands on every advisor scoping digital banking solutions for a lender. Buy too much and your client ends up on the same few platforms as everyone else. The regulator is already watching that concentration. Build too much and you spend the budget rebuilding a ledger you could have bought.

The right split depends first on what licence the lender holds.

## Start with the licence, not the vendor list

The licence decides which rules apply to the stack. Get it wrong and the whole build or buy analysis sits on sand.

A non-bank lender offering consumer credit usually needs an Australian credit licence from ASIC. ASIC's guidance says anyone who engages in credit activities "will generally need an Australian credit licence or authorisation from a credit licensee before starting business" ([ASIC](https://www.asic.gov.au/for-finance-professionals/credit-licensees/do-you-need-a-credit-licence)). What it cannot do is take deposits. The RBA puts non-bank lenders at 6 per cent of financial system assets and describes them as "lenders that are restricted from offering deposits" ([RBA Financial Stability Review](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026).

Taking deposits requires becoming an authorised deposit-taking institution under APRA. New entrants can start with a restricted ADI licence. APRA caps that licence at "$2 million on the aggregate balance of all protected accounts", with each account-holder capped at $250,000. The restricted phase lasts up to two years ([APRA information paper](https://www.apra.gov.au/system/files/2021-03/Information%20paper%20-%20ADI%20New%20entrants%20-%20a%20pathway%20to%20sustainability_0.pdf), March 2021). After it, "the Restricted ADI will either progress to an ADI licence or exit the industry."

The same paper says a licensing decision "may take 9-18 months". Once the restricted licence is granted, the jobs of the restricted phase include developing, testing and implementing systems, and finalising outsourcing arrangements. So the core systems and their vendor contracts have to come together inside that two-year window.

| | Non-bank lender (ASIC credit licence, consumer credit) | Restricted ADI | Full ADI (bank, mutual, credit union) |
|---|---|---|---|
| Licensed by | ASIC | APRA | APRA |
| Can take deposits | No | Yes, capped at $2 million in total | Yes |
| CPS 230 applies | No | Yes | Yes |
| CDR data holder | If in scope: product data from 13 July 2026; consumer data phased in from 9 November 2026 | Check the CDR Rules for your status | Most ADIs since 1 July 2021 |
| What the build plan must show | Credit and conduct controls, lending data, collections | A path to full ADI standards within two years, and a credible exit plan | Ongoing resilience, vendor oversight, data sharing |

If a lender is planning to become an ADI in three years, it should buy and build as if it already is one. It's easier to sign CPS 230 terms into a contract at the start than to retrofit them onto a live one.

## Where digital banking solutions earn their licence fee

Some components are expensive to build, heavily regulated and invisible to the customer. Those are the ones to buy.

![Close-up of a stainless steel cash machine keypad with number keys and coloured function buttons](atm-keypad.jpg)

*Customers see the keypad and the app. Everything behind them has to settle, reconcile and report correctly every day.*

### Core banking or loan ledger

The core is the system of record for balances, interest, fees and transactions. You can build one. It will take years of testing and reconciliation before it carries a single live balance.

For an ADI, there is a regulatory reason to treat this purchase carefully. CPS 230 puts "core technology services" on the default list of material service providers, alongside risk management and internal audit ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). That means a register entry, a formal agreement with set terms, and APRA's right of access. When APRA finalised its CPS 230 amendments in April 2026, some submissions asked to exempt IT and cloud providers from parts of those contract rules. APRA kept the exemptions "reserved for types of provider where there is a universal contract gap and inability to negotiate bespoke terms" ([APRA](https://www.apra.gov.au/news-and-publications/final-targeted-amendments-cps-230-operational-risk-management), 30 April 2026).

Choose the core vendor on its contract as well as its demo. Our [guide to CPS 230 and your technology vendors](/blog/cps-230-technology-vendors) sets out the clauses one by one.

### Card issuing and processing

Issuing a card involves scheme rules, certification, tokenisation and fraud monitoring. Almost no lender below the majors should build this from scratch. Buy an issuer processor. Then put your engineering into the controls and the customer journey around the card.

### Identity verification and screening

Document checks, biometric matching, sanctions and PEP screening all run on specialist data sources. Buy them. What you do own is how those results flow into onboarding, case management and record keeping.

Treat a KYC vendor as a tool, and plan on the lender staying answerable for its own customer due diligence. We cover the design side in [KYC and AML by design](/blog/kyc-aml-by-design).

### Banking as a service

A banking-as-a-service partner issues the deposit product under its own ADI licence, which saves the lender the licensing path. The trade-off is that your product sits inside someone else's risk framework. Their CPS 230 obligations flow down to you as contract terms and audit requests. For the wider picture of adding financial products to a non-bank, see [embedded finance for payments and lending](/blog/embedded-finance-payments-lending).

## What to build: the parts customers and credit committees notice

The components worth building are the ones that carry the lender's own judgement. Two lenders running on the same core should still look different and make different calls.

![Laptop screen at an angle showing lines of source code in a text editor](code-on-laptop.jpg)

*The code worth owning is the code that carries the lender's own policy and customer experience.*

### Customer experience

The app, the web journey and the servicing screens are what the borrower actually meets. A vendor's standard front end goes to all of their clients. A custom layer built on the core's APIs lets the lender change a journey in a sprint, without waiting for the vendor's release cycle.

### Credit decisioning

Credit policy is where a lender makes or loses money. The rules around affordability, serviceability buffers, pricing and exceptions change often. They need to be owned, versioned and testable by the lender itself. Buying a rules engine is fine. Handing the policy to a vendor's configuration team is where lenders lose control. We look at the full lending stack in [building a bank-grade lending platform](/blog/bank-grade-lending-platform-australia).

### The integration layer

Every bought component needs connecting: core to card processor, onboarding to identity checks, ledger to general ledger, everything to data and reporting. This layer holds the stack's resilience. Timeouts, retries, reconciliation, and a degraded mode for when a vendor goes down: all of it gets built here, or it doesn't get built.

It's the easiest part of a digital banking program to under-scope, because none of it appears in a vendor demo. It is also what makes a future vendor change possible.

## The decision in one table

| Component | Default for most lenders | Why | Check before signing or starting |
|---|---|---|---|
| Core banking or loan ledger | Buy | Costly to build, invisible to customers, CPS 230 material for ADIs | Contract terms, data export, exit support |
| Card issuing and processing | Buy | Scheme certification and fraud tooling | Who carries fraud liability, uptime commitments |
| Identity and screening | Buy | Specialist data sources | Where data is stored, how results are recorded |
| Deposit accounts for a non-bank | Buy (BaaS partner) or apply for an ADI licence | Deposits need an ADI | What the partner's risk framework will require of you |
| Customer experience | Build | Main point of difference | Accessibility, API coverage of the core |
| Credit decisioning | Build the policy, buy or build the engine | Policy is the lender's own judgement | Versioning, testing, audit trail |
| Integration and data layer | Build | Holds the stack together and makes exits possible | Monitoring, reconciliation, degraded modes |
| CDR data holder APIs | Buy or build, depending on the core | Standards-driven, but data quality is the lender's | Whether the core vendor's CDR module is certified and current |

## Open banking solutions and CDR data holder duties

For most ADIs the Consumer Data Right is not optional. Open banking started with the four major banks as data holders, and from 1 July 2021 it expanded to cover most other ADIs ([OAIC](https://www.oaic.gov.au/consumer-data-right/consumer-data-right-legislation,-regulation-and-definitions/consumer-data-right-participants)).

In-scope non-bank lenders joined this year. On 13 July 2026 they had to start sharing product data such as interest rates, fees, charges and eligibility criteria. Consumer data sharing follows from 9 November 2026, phased in by provider size ([ACCC](https://www.accc.gov.au/media-release/non-bank-lenders-join-consumer-data-right-as-next-stage-commences), 13 July 2026). The ACCC expects at least 35 new data holders, and more than 1.3 million Australians already use the CDR. Check whether your client meets the CDR designation before any of this work gets scoped.

This shifts the buy or build question for open banking solutions. A lender whose core vendor has a CDR module can buy the API layer. But the data quality is still on the lender. Product data that doesn't match the website, or consumer data with gaps, is a compliance problem regardless of which vendor serves it.

The CDR can also work in the lender's favour. If the lender is accredited to receive CDR data, or works through an accredited provider, transaction data from other institutions can feed a credit assessment with the customer's consent. That makes it an input to the decisioning engine you build. We go into both sides in [what it takes to build for the Consumer Data Right](/blog/consumer-data-right-build).

## Concentration is a supervisory question now

Buying isn't risk-free. The RBA's March 2026 review put numbers to it. Some of the largest regulated entities rely on around 150 service providers for critical operations, and many of those providers serve several entities or the whole industry ([RBA](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026).

For mutuals the concern is sharper. McCarthy Hockey said that reliance "creates sector-wide vulnerabilities that need to be understood and managed proactively" ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), 17 March 2026).

Every buy decision needs an exit plan attached. APRA already requires it of new entrants: a restricted ADI's application needs "a credible exit plan that can be executed if needed" ([APRA information paper](https://www.apra.gov.au/system/files/2021-03/Information%20paper%20-%20ADI%20New%20entrants%20-%20a%20pathway%20to%20sustainability_0.pdf), March 2021). The same thinking applies at component level. Can the lender get its data out of the core in a usable form? Does the integration layer isolate the vendor enough that a replacement is actually feasible?

Take a credit union renewing its core contract. If the app, decisioning and reporting all call the core directly, that renewal is a negotiation it cannot walk away from. If they call an internal API layer instead, a switch is still hard, but possible. The leverage shows up in the contract terms. For lenders already on an ageing platform, [modernising a legacy core without a big-bang rewrite](/blog/legacy-core-banking-modernisation) covers the staged route.

## Common questions

### Can a non-bank lender use a banking-as-a-service provider to take deposits?

The deposits sit with the partner ADI under its licence. The lender's product has to fit the partner's risk and compliance framework, and the lender itself still cannot take deposits without becoming an ADI. Take legal advice on how the arrangement is structured and described to customers.

### Does CPS 230 apply to a non-bank lender?

Not directly. CPS 230 applies to APRA-regulated entities such as ADIs and insurers. A non-bank lender that partners with an ADI, or plans to become one, will still feel it through contracts and due diligence requests.

### Is buying a core platform always cheaper than building one?

Not necessarily. Licence fees are often priced per account or transaction, and vendor lock-in then raises the price at renewal. Compare total cost over the expected life of the platform, including what an exit would cost, then weigh it against the broader [custom or off-the-shelf decision for regulated firms](/blog/custom-vs-off-the-shelf-financial-services).

## What to do next

Before any vendor demo, write down:

- The licence the lender holds today, and the one it expects to hold in three years.
- Each component in the table above, marked buy, build or undecided, with a one-line reason.
- For every buy, who owns the data, how you'd leave, and whether the contract would pass a CPS 230 review.
- The CDR obligations that apply now and those arriving in the next 12 months.

That page becomes the brief for both the vendor shortlist and the build team. For more on the platforms involved, see [software for financial services](/industries/financial-services).

When the build part of that plan needs a team, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against APRA, ASIC, RBA, ACCC and OAIC sources on 27 and 28 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["333 Collins Street Melbourne"](https://commons.wikimedia.org/w/index.php?curid=94908252) by a.canvas.of.light, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Cash machine keypad, ["Free ATM keypad"](https://www.rawpixel.com/image/5912776/free-atm-keypad-public-domain-cc0-photo), rawpixel, CC0, cropped. Code on a laptop, ["Code on laptop screen"](https://www.flickr.com/photos/35850894@N08/49977353057) by markus119, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
