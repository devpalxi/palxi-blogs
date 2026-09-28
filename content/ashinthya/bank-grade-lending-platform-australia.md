---
title: "Lending platform development: how to build it bank-grade"
description: "A practical guide to bank-grade lending platform development in Australia: responsible lending, credit reporting, PayTo, hardship clocks, ledgers and CDR."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "bank-grade-lending-platform-australia"
canonical: "https://palxi.com.au/blog/bank-grade-lending-platform-australia"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "Looking up at two glass office towers in central Sydney against a pale sky"
og_image_alt: "Looking up at two glass office towers in central Sydney against a pale sky"
tags: ["lending platform development", "banking api", "responsible lending", "payto", "financial services"]
lang: "en-AU"
---

# Lending platform development: how to build it bank-grade

In August 2025 the Federal Court ordered NAB and a subsidiary to pay $15.5 million. Between 2018 and 2023 they failed to answer 345 hardship applications within the 21 days the law allows. ASIC's release names the cause: staff "incorrectly using a 'reject' button in its system", so the customer heard nothing ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2025-releases/25-165mr-nab-and-afsh-penalised-155-million-for-failing-customers-facing-financial-hardship), August 2025).

In May 2026 Westpac was ordered to pay $26 million for missing more than 200 online hardship requests. The judge found the failures "arose instead from inadequate systems and operational failures" ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-107mr-federal-court-orders-westpac-to-pay-26-million-penalty-for-hardship-failures), May 2026).

Neither case turned on credit risk. Both turned on a workflow. That is what "bank-grade" should mean for lending platform development in Australia: meeting the obligations, reliably, from the first loan. This guide sets out the parts, the obligations behind each one, and the order that matters.

## What bank-grade means for an Australian lender

Most bank-level obligations come with lending to consumers. Consumer lending needs an Australian credit licence from ASIC, and the licence brings responsible lending and dispute resolution with it. The National Credit Code adds hardship duties. Part IIIA of the Privacy Act governs credit reporting. APRA prudential standards apply in full only to authorised deposit-taking institutions (ADIs). Larger non-bank lenders still deal with APRA through data collection.

Here is how the obligations land for a typical consumer lender.

| Obligation | Who sets it | Applies to | What the platform must do |
|---|---|---|---|
| Responsible lending (NCCP Act, RG 209) | ASIC | Every credit licensee | Record inquiries, verify, assess, keep the assessment |
| Hardship notices (National Credit Code s72) | ASIC | Every credit provider | Track each notice against a 21 day clock |
| Credit reporting (Privacy Act Part IIIA) | OAIC | Lenders who report to bureaus | Send monthly repayment history and hardship flags |
| AML/CTF | AUSTRAC | Lenders providing designated services | Verify identity, screen, keep records, report |
| Consumer Data Right | Treasury, ACCC | Designated data holders and accredited recipients | Share or receive data through the CDR standards |
| Information security (CPS 234) | APRA | ADIs directly; their suppliers through contracts and third-party assessments | Controls, testing, 72 hour incident notice |
| Data reporting (FSCODA) | APRA | Non-bank lenders with assets over $50 million | Lodge regular financial returns |

The last row is easy to miss. The rule comes from the Financial Sector (Collection of Data) Act. A corporation with "assets of more than $50 million" that borrows money and provides finance must register with APRA ([APRA](https://www.apra.gov.au/non-regulated-industry/registered-financial-corporations)). Those returns come from the same ledger as everything else.

Design to ADI standards even if you never plan to become one. Your funders, your auditors and any bank partner will ask the same questions APRA would.

## Map each obligation to a component

Before anyone picks a loan management system, write down which component owns each obligation. One workable split:

1. Origination: application, identity checks, documents.
2. Decisioning: the rules and scorecards that approve, decline or refer.
3. Credit reporting: enquiries and credit reports in, repayment history and hardship flags out.
4. Servicing: schedules, repayments, fees, variations and statements.
5. Hardship and collections: cases, arrangements, notices and clocks.
6. Ledger and reconciliation.
7. Reporting to regulators, funders, auditors and the board.

Most of them will call a banking API of some kind, whether a bureau, a payments provider or a CDR data source. List those dependencies too. Once the map exists, the [build or buy decision for digital banking solutions](/blog/digital-banking-solutions-build-or-buy) gets easier, because you can see which parts are generic and which set you apart.

## The ledger comes first

![An open nineteenth century account book with handwritten entries and amounts in columns](account-book-ledger.jpg)

*Double-entry bookkeeping is centuries old. It is still the right model for a loan book.*

Every repayment, fee, interest accrual, write-off and hardship variation is a set of balanced entries. Balances are derived from entries and never edited in place. When a repayment is dishonoured, you post a reversal and keep the original.

Reconcile every day. Match what the ledger expects against what the bank account received, clear the exceptions, and keep the evidence. Funders, auditors and APRA returns all read from this ledger. Every report downstream depends on it balancing.

Log from day one as well. Record who did what, to which record, and when: decisions, overrides, hardship outcomes, and changes to rules and limits. Store the log where application admins can't edit it.

## Repayment rails: direct debit and PayTo

The older rail is BECS direct debit. PayTo runs on the New Payments Platform and lets a customer approve a payment agreement in their own banking app.

The switch-off date has moved, though. On 16 December 2025 AusPayNet said it "is removing the target end-date of June 2030 for decommissioning the BECS Framework" ([AusPayNet](https://auspaynet.com.au/insights/Media-Release/BECS_outlook), December 2025). The same release says BECS Members still intend to move to modern alternatives like the NPP. There is no new end date.

Build a payments layer that can collect over either rail, and let each loan hold its own mandate type. Migrating a loan book from direct debit to PayTo is then a data change, not a rebuild. For mandates and payouts in more depth, see our guide to [building account-to-account payments on PayTo](/blog/payto-a2a-payouts-australia).

## Decisioning built around responsible lending

![A calculator, a blue pen and a notepad lying on a printed planner](calculator-planner.jpg)

*Serviceability used to be worked out on paper. The platform now has to show its working.*

ASIC's summary of the responsible lending obligations is short. You make "reasonable inquiries about a consumer's financial situation, and their requirements and objectives". Then you take "reasonable steps to verify" that situation. A final assessment follows, on whether the contract is "not unsuitable". And if the consumer asks, you must be able to give them "a written copy" of it ([ASIC](https://www.asic.gov.au/regulatory-resources/credit/responsible-lending)).

In engineering terms, that last line decides the data model. Each assessment has to be a stored record that can be retrieved and sent. It should hold:

- the inputs the customer declared, and the evidence used to verify each one
- the rules, scorecard and expense benchmark versions in force at the time
- the calculation, the outcome and any manual override, with who made it and why
- a rendered copy for the customer

The trap is rerunning. If you change a rule next month and regenerate an old assessment, you get a different answer. Freeze the inputs and the rule version. Treat decisions as immutable events.

Verification is where CDR data earns its place. With the customer's consent, account data shared through the Consumer Data Right gives a lender transaction-level income and expense evidence. That is stronger evidence than an uploaded PDF statement. The CDR is also widening. Non-bank lenders in scope started sharing product data on 13 July 2026, and consumer data sharing follows in phases from 9 November 2026 ([ACCC](https://www.accc.gov.au/media-release/non-bank-lenders-join-consumer-data-right-as-next-stage-commences), July 2026). A non-bank lender may be a data holder as well as a data user, and [building for the Consumer Data Right](/blog/consumer-data-right-build) means planning for both sides.

Identity checks sit in origination too. Build them in as a step with its own records, kept alongside the application. What AUSTRAC expects that step to keep is covered in [KYC and AML by design](/blog/kyc-aml-by-design).

## Credit reporting runs in both directions

The bureau enquiry is the obvious half. A lender that takes part in comprehensive credit reporting also has to supply data: account details, repayment history each month and, since 2022, hardship arrangements.

The OAIC puts it plainly. Since 1 July 2022, "a credit provider must tell a credit reporting body that they have financial hardship arrangement with an individual" ([OAIC](https://www.oaic.gov.au/privacy/your-privacy-rights/credit-reporting/hardship-assistance/what-is-financial-hardship-information)). Temporary arrangements appear as "A" against each repayment. Permanent variations appear as "V".

The credit reporting feed depends on the hardship module and the servicing ledger. If the repayment history is wrong, the bureau record is wrong, and a correction request lands on your complaints team. Build the monthly extract from the ledger, reconcile it before it goes out, and keep every file you send.

## Hardship and collections as clocks

The NAB and Westpac cases show the pattern. Hardship requests can arrive by phone, email, web form or chat, and each channel needs to feed the same case system.

The timing is tight. Under section 72 of the National Credit Code, a lender must decide on a hardship request within the "21-day timeframe required by law" ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2025-releases/25-165mr-nab-and-afsh-penalised-155-million-for-failing-customers-facing-financial-hardship), August 2025). If it needs more information first, the request for it has a 21 day limit too.

That gives a clear design:

- Every channel creates a hardship case automatically, with the date received.
- Each case runs a visible clock, with alerts well before day 21.
- No case can close without a sent, stored customer notice.
- An agreed arrangement changes the repayment schedule in servicing, pauses collections, and sets the right flag for credit reporting.

The NAB failure came from a status that ended a case silently. Test for that directly. Pull every terminal status in the workflow and check that each one produces a customer communication.

Collections need the same treatment. Pause contact while a hardship request is open, keep a record of every contact attempt, and make sure the default notice process follows the National Credit Code timelines. Take legal advice on the exact notices your products need.

## Security and the APRA lens

If you are an ADI, CPS 234 applies directly. If you build for one, it reaches you through the ADI's contract and its third-party assessments. The ADI must notify APRA "no later than 72 hours" after becoming aware of a material information security incident ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)). It must also assess the security of third parties that manage its information assets. Even for non-banks, the [questions a board should ask about CPS 234](/blog/apra-cps-234-board-questions) make a good checklist.

Non-bank lenders can show the same controls through certification. Funders and bank partners may ask for ISO 27001 or a SOC 2 report during due diligence. [What ISO 27001 costs an Australian fintech](/blog/iso-27001-certification-australia-cost) sets out the time and effort involved.

## Funding and warehouse reporting

Plan for funders early. A non-bank lender will often fund its book through a warehouse facility and later through securitisation. The funder sets eligibility criteria for loans in the pool and asks for regular reporting on the book.

The reports vary by funder, but they draw on the same data. You will need a loan-level data tape, arrears and hardship status for each loan, eligibility flags, and cash reconciliation that ties to the trustee's accounts. With clean ledger and loan records, each new funder needs one new report, built from data you already hold.

Design the data model so each loan can carry a funding entity and move between them. Sales of loans from warehouse to term deal then become a ledger event with a clear audit trail.

## Sequencing lending platform development: MVP first, bank-grade by design

You can't build every component at once, and you don't need to. Some obligations can be met manually at low volume, as long as the records are complete. Others have to be in the first release.

| Phase | Build properly | Can be manual or bought at first |
|---|---|---|
| MVP (first loans) | Ledger, audit log, stored assessments, hardship cases with clocks | Collections scripts, funder reports, some reconciliation matching |
| Scale (thousands of loans) | PayTo and direct debit rails, daily automated reconciliation, bureau reporting | Scorecard tuning, CDR data holder obligations |
| Full platform | Warehouse and securitisation reporting, APRA returns if required, CDR at scale | Little. By now most of it should be automated |

The order matters more than the speed. A team that ships decisioning first and leaves the ledger for later is likely to rebuild it. Integrations with banks, bureaus and data providers also tend to take longer than the core build, which is why [connecting your product to Australian banks](/blog/bank-integration-platforms-australia) belongs in the plan from the start.

## Common questions

### Do we need to become an ADI to be bank-grade?

No. A non-bank consumer lender operates under an Australian credit licence and funds itself without deposits. You take on the credit licence obligations, AUSTRAC obligations and possibly CDR and APRA data reporting. Bank-grade describes how well you meet those.

### Should we buy a loan management system or build one?

Often both. A lender can buy servicing and build the parts that set it apart, such as decisioning, the customer experience and funder reporting. Whatever you buy, check that it keeps immutable assessment records, supports hardship clocks and posts balanced ledger entries.

### When should a new lender plan for CDR?

From the start, if you plan to use CDR data for verification. A non-bank lender that meets the data holder criteria also has sharing obligations under the phased timetable. Check where you sit with the ACCC and Treasury guidance, and get advice on the thresholds.

## What to do next

Take the obligations table above and note which component owns each row. Then test your current system or design:

- Can you reproduce last quarter's assessments exactly, and send one to a customer today?
- Does every hardship status end in a sent notice?
- Does the ledger reconcile to the bank account every day, with every exception cleared and recorded?

If any answer is no, that is where to start. For more on regulated builds, see [software for financial services](/industries/financial-services).

If you advise a lender and need the platform built rather than just scoped, Palxi joins early and builds it alongside you. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against ASIC, OAIC, APRA, ACCC and AusPayNet sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["GPT & GMT"](https://www.flickr.com/photos/37086457@N00/3434209744) by cascade_of_rant, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Calculator and planner, ["Red post-it label, calculator and ballpen"](https://www.flickr.com/photos/42931449@N07/6812497415) by photosteve101, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Account book, ["Account Book Ledger"](https://commons.wikimedia.org/w/index.php?curid=58742661) by John Carlin, The Metropolitan Museum of Art, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), cropped.*
