---
title: "Embedded finance: adding payments and lending in Australia"
description: "Embedded finance for Australian platforms: licence routes, the payments licensing reforms, BNPL rules, sponsor banks, AML/CTF and who owns what in the build."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "embedded-finance-payments-lending"
canonical: "https://palxi.com.au/blog/embedded-finance-payments-lending"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "Sydney's city towers and the Cahill Expressway seen from a Harbour Bridge pylon on a clear day"
og_image_alt: "Sydney's city towers and an expressway seen from a Harbour Bridge pylon on a clear day"
tags: ["embedded finance", "payments licensing", "buy now pay later", "aml ctf", "fintech"]
lang: "en-AU"
---

# Embedded finance: adding payments and lending in Australia

Around 20 per cent of Australian consumer payments now happen online, and payments made through mobile apps are almost half of those ([RBA](https://www.rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html), May 2026). When a marketplace or SaaS client says "we want to take payments and offer finance inside our own app", the idea isn't exotic. Their customers already pay that way.

The hard part is the question the board asks next. Do we need a licence? The answer for embedded finance in Australia depends on what the product actually does with money and credit, and some of the rules are moving in 2026. This is the decision in the terms an advisor and a build team can work with.

## What embedded finance changes for a non-bank product

Embedded finance means a financial product delivered inside a non-financial one. A trade marketplace pays out to suppliers. Some practice management platforms offer working capital loans to their clinics. Booking apps hold deposits until the job is done.

Each one is a regulated activity for somebody, whatever it looks like on the roadmap. Payments, credit and stored value each run under their own regime: the Corporations Act and AFS licensing for payment products, the National Credit Act for lending, and the AML/CTF Act for identity and reporting.

The product question comes first. What does the feature do with money?

- **Passes instructions on.** The product tells a bank or payment provider to move money but never holds it.
- **Holds money.** Funds sit in a balance, wallet or escrow-like account the product controls.
- **Lends or defers payment.** The customer gets goods or cash now and pays later.

The answer changes the licence, the partner and the architecture. Advisors save their clients months by settling this answer before any vendor demos.

## Your client's licence or someone else's

The realistic routes are below. A platform can mix them, for example referral for lending and a partner-issued product for payments.

| Route | What it means | Who carries the regulatory load | When it fits |
|---|---|---|---|
| Own licence (AFSL, Australian credit licence) | Your client holds the licence and issues the product | Your client, in full: compliance staff, AFCA membership, capital where required | Finance is core to the business model and volume justifies the overhead |
| Authorised or credit representative | Your client acts under a licensee's authority | The licensee supervises; your client follows its rules | Your client wants the customer relationship but not the licence |
| Partner as provider of record (BaaS, sponsor bank, lender) | The partner issues the account, card or loan; your client distributes it | Mostly the partner, set by contract | Speed matters more than margin or control |
| Referral only | Your client points customers to a licensed provider | The provider | Lending is a side feature with little revenue attached |

Referral is a thin route. ASIC calls it "a narrow exemption from licensing requirements for doing referrals". It applies if you "only inform the consumer" that a licensee can help, tell them how to make contact, and disclose any commission ([ASIC](https://www.asic.gov.au/for-finance-professionals/credit-licensees/do-you-need-a-credit-licence/faqs-does-the-credit-legislation-apply)). Pre-filling a loan application or recommending an amount may take a platform outside it.

The representative route needs care too. A licensee stays responsible for supervising its representatives, so expect the licensee to audit your client's flows, scripts and complaints handling.

Choosing a route is also a build or buy decision. The same trade-offs appear in [choosing between custom and off-the-shelf platforms for regulated firms](/blog/custom-vs-off-the-shelf-financial-services).

## Embedded payments and the licensing reforms

![Close-up of a card payment terminal keypad with numbered keys lit in blue](payment-terminal-keypad.jpg)

*The licensing questions sit behind the terminal: who holds the money, and for how long.*

Australia's payments rules are being rebuilt. Treasury's Tranche 1 framework would set "graduated obligations", starting with "requiring PSPs that perform certain functions to get an Australian Financial Service Licence". It would also give APRA powers over major stored value facility (SVF) providers and create a rule-making power for a mandatory, revised ePayments Code ([Treasury](https://treasury.gov.au/policy-topics/banking-and-finance/payments-licensing-reforms), March 2026).

The Tranche 1 draft legislation was open for consultation from 12 March to 9 April 2026. It covers definitions of regulated payment functions, licensing obligations "including how certain providers must safeguard payment-related money", exemptions and exclusions, unclaimed monies and a new prudential framework ([Treasury consultation](https://consult.treasury.gov.au/c2026-746108), March 2026). Treasury has said a second tranche, including common access requirements, comes later.

As at 27 September 2026, we could confirm the exposure drafts but not a final Act. Check the bill's status on the Parliament website before you advise on dates.

The distinction that matters most for product design is already clear. The Assistant Treasurer's release put it this way: "a digital wallet that simply passes through payment instructions to your bank will face different regulations than a digital wallet that holds your funds" ([Treasury Ministers](https://ministers.treasury.gov.au/ministers/daniel-mulino-2025/media-releases/new-legislation-modernise-regulation-payment-service), October 2025).

So look hard at any feature that keeps a balance. Marketplace escrow, platform credits and "wallet" top-ups all hold customer money for a period. Under the draft framework they are likely to raise stored value and safeguarding questions. A design that settles funds straight to the payee through a licensed provider carries a lighter load.

For engineering, that means the reforms reach into the data model:

- Can the system show, at any moment, whose money is where?
- Are client funds kept apart from operating funds, in the ledger and at the bank?
- Can you produce an unclaimed monies report if a user disappears with a balance?
- Would a mandatory ePayments Code change your disputes and mistaken payment flows?

Account-to-account rails add their own choices. PayTo was still small in 2025, at 4 percentage points of account-to-account payments in the RBA survey (RBA, May 2026). See [building PayTo and A2A payouts with Confirmation of Payee](/blog/payto-a2a-payouts-australia). A client running both cards and A2A should also read up on [running card and A2A rails through one platform](/blog/payment-orchestration-card-a2a).

## Lending inside the product, including BNPL

Credit is the more settled regime, and the stricter one. Lending to consumers, or helping them get credit, generally needs an Australian credit licence or a credit representative appointment. Business lending can sit outside the consumer credit rules, but check how the product is actually used.

Buy now pay later lost its old gap in 2025. ASIC states that "From 10 June 2025, anyone engaging in credit activities involving buy now later contracts must hold an Australian credit licence" ([ASIC](https://www.asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing)). BNPL contracts that meet the "low cost credit contract" test have modified responsible lending obligations, which ASIC explains in Regulatory Guide 281.

For a platform that wants to offer "pay in four" at checkout, that leaves a short list:

1. Partner with a licensed BNPL provider and act as a merchant or referrer.
2. Become the provider's credit representative, with its supervision.
3. Get a credit licence and run the credit book, with responsible lending, hardship and AFCA obligations.

Each option changes what the engineering team must build. A referrer needs a clean handoff and a commission disclosure. For a credit representative, the licensee's scripts and records have to live in its flows. A licensee builds credit decisioning, serviceability checks, hardship workflows and a complete audit trail. For that last case, read [what a bank-grade lending platform involves](/blog/bank-grade-lending-platform-australia).

## Partner models: BaaS and sponsor banks

![A smartphone lying on a wooden desk beside a closed notebook, a pen and a laptop](phone-on-desk.jpg)

*The customer sees one app. Behind it, the account can sit on a partner's licence.*

Banking-as-a-service lets a non-bank offer accounts, cards or payments issued by a licensed partner. In a sponsor bank model, a bank or licensed payments provider holds the licence and scheme membership, and your client's product sits on top. Among fintech solutions for platforms looking to avoid holding their own licence, it is the fastest route.

It isn't a way to hand off every problem. The partner holds the licence. Your client still runs the product customers touch, and often the ledger that says who owns what.

The United States showed what happens when that ledger is wrong. Synapse was middleware that "acted as a bridge between nonbank fintech platforms that offered banking services to consumers and traditional partnering banks". When the partner banks reconciled their records against Synapse's, $60 million to $90 million of consumer funds could not be accounted for. The regulator alleged Synapse failed "to maintain adequate records of the location of consumers' funds", and consumers lost access to their money "for weeks or months" ([CFPB](https://www.consumerfinance.gov/enforcement/actions/synapse-financial-technologies-inc/), 2025).

That was a US failure under US law. The engineering lesson travels. If your client's platform keeps sub-ledgers over a pooled partner account, daily reconciliation belongs in the product scope from day one.

Questions worth asking a prospective partner:

- Whose ledger is the source of truth, and how often is it reconciled against the bank?
- What happens to customer funds if the partner, or your client, fails?
- Which compliance controls does the partner run, and which does it require your client to run?
- What notice does the partner give before changing its API, pricing or risk appetite?
- How does your client exit, and how do customer accounts move?

Due diligence on the partner's technology matters as much as its licence. The checks in [technical due diligence on a build team](/blog/technical-due-diligence-build-team) apply to a BaaS provider too.

## AML/CTF obligations: who is the reporting entity

Opening an account, making a loan and many payment services are designated services under the AML/CTF Act. Whoever provides the service is the reporting entity, with the program, customer due diligence and reporting duties that go with it.

Those rules changed this year. Royal Assent for the AML/CTF Amendment Act 2024 came on 10 December 2024. Its schedules on customer due diligence and on transfers of value and international value transfer services commenced on 31 March 2026 ([Federal Register of Legislation](https://www.legislation.gov.au/C2024A00110/asmade/text)). The same Act brings additional high-risk services into the regime.

In a partner model, the partner that provides the designated service is the reporting entity for it. Your client's product still collects the identity data, runs the onboarding screens and sees the behaviour that might be suspicious. So the contract has to say, precisely:

- identity verification: who does it, and under whose rules
- sanctions and politically exposed person screening, and how often it reruns
- how your client passes on anything that looks suspicious, and how fast
- record keeping: by whom, in what form, and for how long

In payout products we build, ID verification, sanctions and PEP screening, record keeping and AUSTRAC reporting sit inside the product's own flows. The design detail is in [KYC and AML by design, not bolted on afterwards](/blog/kyc-aml-by-design).

## Who owns what: build team and partner

Even with a licensed partner, much of the regulated surface lives in your client's code. The split below is a common arrangement, though the contract decides the details.

| Area | Usually the partner | Usually your client's product |
|---|---|---|
| Licence, scheme membership, prudential capital | Yes | No |
| Customer onboarding screens and data capture | Sets the rules | Builds and runs them |
| Identity verification and screening | Often provides the service | Integrates it, handles failures and retries |
| Ledger of customer balances | Holds the pooled account | Often keeps the sub-ledger |
| Reconciliation | Supplies statements | Matches them daily and chases breaks |
| Disclosures and terms | Drafts or approves | Displays them at the right step, keeps proof |
| Complaints and hardship | Owns the outcome | Captures, routes and records |
| Monitoring and suspicious matters | Reports to AUSTRAC | Detects and escalates |
| Security of customer data | Sets minimum standards | Builds and evidences the controls |

The rows on the right are where embedded finance projects slip. Teams plan for the partner's API and forget the daily reconciliation and the audit evidence the partner will demand.

## Common questions

### Do we need an AFSL to take card payments on a marketplace?

Not usually for taking payments through a licensed payment provider under current rules. The reforms may change that for some payment functions, especially where the platform holds funds or facilitates payments for others. Check the final law against the product's exact money flow.

### Can a SaaS platform offer business loans without a credit licence?

It may, if the platform only refers, or if the credit is not provided wholly or predominantly for personal, domestic or household purposes. Consumer credit is different. If sole traders might use the credit that way, get advice before launch.

### Is banking-as-a-service cheaper than getting our own licence?

At the start it tends to cost less, because the partner already carries the licence, capital and compliance team. Over time, the partner's margin and limits on product design can cost more than a licence would. Many platforms start with a partner and revisit the question once transaction volume and team maturity justify it.

## What to do before the first sprint

Map one customer journey end to end. Mark every point where money is held or credit is extended. Then:

- name the licence each point relies on
- name the reporting entity for AML/CTF
- decide who owns the ledger and the daily reconciliation
- check the design against the draft payments licensing rules, not only today's law

That map becomes the scope for the partner contract and the build. For the wider picture, see [software for financial services](/industries/financial-services).

When the plan is clear and your client needs it built, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against Treasury, ASIC, RBA, the Federal Register of Legislation and CFPB sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Sydney CBD from the top (gun) deck of the south east pylon of the Sydney Harbour Bridge"](https://commons.wikimedia.org/w/index.php?curid=107115627) by David Minty, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Terminal keypad, ["Payment terminal"](https://www.flickr.com/photos/46563758@N04/49509274828) by Henry Söderlund, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Phone on desk, ["apple-iphone-smartphone-desk"](https://www.flickr.com/photos/137643065@N06/24243796611) by pixellaphoto, CC0.*
