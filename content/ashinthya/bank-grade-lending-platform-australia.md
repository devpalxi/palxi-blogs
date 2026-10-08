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

In August 2025, the Federal Court of Australia ordered National Australia Bank (NAB) and an associated entity to pay a $15.5 million AUD penalty. Between 2018 and 2023, the organisation failed to respond to 345 customer hardship requests within the 21 days required by Australian law. When borrowers facing serious financial difficulty asked for help, customer service staff "incorrectly used a 'reject' button in its system", which closed the requests internally without the customer ever being notified ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2025-releases/25-165mr-nab-and-afsh-penalised-155-million-for-failing-customers-facing-financial-hardship), August 2025).

Less than a year later, in May 2026, Westpac was ordered to pay a $26 million AUD penalty for similar systemic failures affecting more than 200 online hardship requests. The presiding judge found that these failures were not intentional misconduct, but "arose instead from inadequate systems and operational failures" ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-107mr-federal-court-orders-westpac-to-pay-26-million-penalty-for-hardship-failures), May 2026).

In both cases, the multi-million-dollar penalties had nothing to do with bad loans or interest rates. They happened because the banks' computer software failed to handle customer care processes reliably. That is what "bank-grade" genuinely means when building financial software in Australia: designing systems that uphold consumer protection duties dependably, every single day, starting from the very first loan.

This guide explains how Palxi approaches lending software architecture, the regulatory obligations governing Australian lenders, and how to build systems that protect both borrowers and the organisation.

## What bank-grade means for an Australian lender

When an organisation lends money to consumers in Australia, it must comply with extensive consumer protection laws. Anyone providing consumer credit needs an Australian credit licence issued by the Australian Securities and Investments Commission (ASIC), the national corporate regulator. 

Holding a credit licence requires strict adherence to responsible lending rules and independent dispute resolution. In addition, the National Credit Code sets out compassionate protections for borrowers experiencing financial hardship (such as job loss or illness). The Privacy Act 1988 governs how repayment histories are shared with credit reporting agencies, while the Australian Transaction Reports and Analysis Centre (AUSTRAC) supervises anti-money laundering controls.

The Australian Prudential Regulation Authority (APRA) supervises Authorised Deposit-taking Institutions (ADIs) such as traditional banks and credit unions. However, larger non-bank lenders also report operational data to APRA.

Here is how these core duties apply across Australian consumer lending:

| Legal obligation | Regulatory authority | Who it applies to | What the software platform must do |
|---|---|---|---|
| Responsible lending (NCCP Act, RG 209) | ASIC | Every licensed credit provider | Inquire into customer circumstances, verify income and expenses, and store complete assessment records |
| Financial hardship notices (National Credit Code s72) | ASIC | Every consumer credit provider | Log every customer hardship request and track it against a strict 21-day response clock |
| Comprehensive credit reporting (Privacy Act Part IIIA) | OAIC | Lenders reporting to credit bureaus | Submit monthly repayment histories and accurately report formal hardship arrangements |
| Anti-Money Laundering (AML/CTF) | AUSTRAC | Lenders offering designated financial services | Verify customer identities, screen against sanctions, and retain secure compliance records |
| Consumer Data Right (Open Banking) | Treasury, ACCC | Designated data holders and accredited recipients | Share or receive banking data securely through standardized national standards |
| Information security (CPS 234) | APRA | ADIs directly; their technology suppliers via contractual terms | Maintain data security controls, run regular testing, and report serious breaches within 72 hours |
| Data collection (FSCODA) | APRA | Non-bank lenders with finance assets exceeding $50 million AUD | Submit regular statistical balance sheet and lending returns |

The final row is often overlooked by growing non-bank finance companies. Under the Financial Sector (Collection of Data) Act, any corporation with "assets of more than $50 million" AUD that borrows funds and provides credit must formally register with APRA ([APRA](https://www.apra.gov.au/non-regulated-industry/registered-financial-corporations)). Those regulatory reporting numbers must come directly from your transaction ledgers.

Even if an organisation does not plan to become a full deposit-taking bank, building to banking standards from day one is essential. Wholesale funders, external auditors, and banking partners will expect the same level of precision and governance that APRA demands.

## Map each obligation to a component

Before choosing off-the-shelf software or writing any code, map every regulatory obligation to a specific software module:

1. **Loan Origination:** Application forms, customer identity verification, and document collection.
2. **Credit Decisioning:** The automated calculation rules and scorecards that approve, decline, or refer an application for human review.
3. **Credit Bureau Reporting:** Pulling credit bureau histories on application, and exporting monthly repayment records and hardship flags.
4. **Loan Servicing:** Managing repayment schedules, interest calculations, fee applications, and account statements.
5. **Hardship and Collections:** Managing customer support cases, payment variations, formal notices, and strict statutory deadlines.
6. **Accounting Ledger and Reconciliation:** Balancing every transaction against physical bank accounts every day.
7. **Governance Reporting:** Producing clear data for corporate directors, regulators, funders, and auditors.

Most of these modules connect through Application Programming Interfaces (APIs) — secure digital bridges that let systems exchange data automatically. Mapping these responsibilities early makes software procurement decisions far simpler, as explored in our companion guide on [digital banking solutions: build or buy](/blog/digital-banking-solutions-build-or-buy).

## The ledger comes first

![An open nineteenth century account book with handwritten entries and amounts in columns](account-book-ledger.jpg)

*Double-entry bookkeeping has stood the test of time for centuries. It remains the essential model for managing any loan portfolio.*

At the foundation of any dependable lending platform is a double-entry ledger. Every loan repayment, interest charge, account fee, write-off, or payment variation must consist of balanced debit and credit entries. Account balances should always be calculated from this underlying transaction history, never manually edited in a database. If a customer's direct debit is dishonoured by their bank, the software posts an offsetting reversal entry while keeping the original record intact.

Reconciliation must happen daily. The software should automatically compare what the internal ledger expects against what actually arrived in the Australian bank account, highlighting any discrepancies for staff to resolve. Securitisation trustees, external financial auditors, and regulators all rely on this financial ledger balancing down to the cent every day.

Comprehensive audit logging must also be active from the opening day. Every decision, loan adjustment, interest waiver, or administrative override must be recorded with a permanent timestamp and the identity of the staff member who authorised it, stored securely where records cannot be altered.

## Repayment rails: direct debit and PayTo

Australian lenders collect scheduled repayments using two primary payment rails: traditional direct debits through the Bulk Electronic Clearing System (BECS), and modern account-to-account payments through PayTo, which operates on the New Payments Platform (NPP).

PayTo allows a borrower to approve a formal payment agreement directly inside their own Australian banking app on their smartphone. This gives customers complete transparency and ensures the lender receives instant confirmation when funds are transferred.

While direct debits will eventually be phased out in Australia, the transition timeline has been adjusted. On 16 December 2025, Australian Payments Network (AusPayNet) announced that it "is removing the target end-date of June 2030 for decommissioning the BECS Framework" ([AusPayNet](https://auspaynet.com.au/insights/Media-Release/BECS_outlook), December 2025), while confirming that Australian banks and financial institutions remain committed to migrating customer payments to modern real-time rails like PayTo over time.

A modern lending platform should be designed to support both payment methods seamlessly. When each customer loan record simply stores its current payment agreement type, upgrading a borrower from traditional direct debit to PayTo becomes a simple data update rather than an expensive system overhaul. We explore real-time payment mechanics further in our guide to [building account-to-account payments on PayTo](/blog/payto-a2a-payouts-australia).

## Decisioning built around responsible lending

![A calculator, a blue pen and a notepad lying on a printed planner](calculator-planner.jpg)

*Loan serviceability once lived on paper forms. Today, automated systems must clearly show and record their calculations.*

Under Australian responsible lending laws, credit providers must ensure that a loan is suitable for the borrower. ASIC summarizes the core requirements simply: a lender must make "reasonable inquiries about a consumer's financial situation, and their requirements and objectives", take "reasonable steps to verify" that financial information, and make a formal assessment that the credit contract is "not unsuitable" for the individual. Furthermore, if the customer requests it, the lender must provide "a written copy" of that assessment within set statutory timeframes ([ASIC](https://www.asic.gov.au/regulatory-resources/credit/responsible-lending)).

From a software design standpoint, that requirement defines how customer records must be stored. An assessment cannot be an ephemeral calculation that vanishes once a loan is approved. It must be preserved as a permanent digital record that can be retrieved and printed years later, including:

- The exact income and living expense figures declared by the applicant, along with the verifying documents used.
- The specific credit scorecard version, interest-rate stress buffers, and household expenditure benchmarks in effect on that date.
- The mathematical calculation outcome and any manual review notes from credit officers.
- A clear, plain-English summary document ready to provide to the customer.

A common pitfall is recalculating old files dynamically. If a lending rule or interest-rate buffer changes next year, recalculating an older file could produce a completely different result. Software must treat credit decisions as permanent, unchangeable snapshots in time.

This is where the Consumer Data Right (CDR) provides substantial value. With the customer's explicit digital consent, Open Banking allows a lender to retrieve verified transaction histories directly from their existing bank accounts, replacing uploaded PDF bank statements with tamper-proof financial evidence. 

As Australia's CDR expands, non-bank lenders began sharing product information from 13 July 2026, with customer data sharing following in stages from 9 November 2026 ([ACCC](https://www.accc.gov.au/media-release/non-bank-lenders-join-consumer-data-right-as-next-stage-commences), July 2026). Preparing for both sides is detailed in our guide on [building for the Consumer Data Right](/blog/consumer-data-right-build).

Customer onboarding also requires identity verification. Verifying passports and driver licences must be logged alongside the loan file to satisfy AUSTRAC requirements, as outlined in our guide to [KYC and AML by design](/blog/kyc-aml-by-design).

## Credit reporting runs in both directions

Many Australian lenders participate in Comprehensive Credit Reporting (CCR). When a customer applies for credit, the platform requests their credit file from an accredited bureau. In return, the lender must supply monthly data updates regarding account balances, on-time repayments, and any formal hardship arrangements.

The Office of the Australian Information Commissioner (OAIC) sets strict standards for this exchange. Since 1 July 2022, Australian law dictates that "a credit provider must tell a credit reporting body that they have a financial hardship arrangement with an individual" ([OAIC](https://www.oaic.gov.au/privacy/your-privacy-rights/credit-reporting/hardship-assistance/what-is-financial-hardship-information)). Temporary hardship arrangements appear as an "A" flag alongside the monthly repayment record, while permanent loan contract variations appear as a "V".

This monthly reporting feed relies heavily on the servicing ledger and hardship case modules. If an internal repayment record is recorded incorrectly, inaccurate data is sent to the credit bureau, resulting in stressful disputes for the customer and compliance breaches for the lender. Software must automatically extract these records from the core ledger, validate them against business rules, and keep a complete archive of every file transmitted.

## Hardship and collections as clocks

The court judgements against major banks underscore why hardship management must be treated with absolute care. Customers experiencing financial hardship may reach out via telephone, email, an online web portal, or mobile messaging. Every single contact channel must feed into one unified case management system.

The legal timeframe is strict. Under section 72 of the National Credit Code, a credit provider must formally respond to a hardship application within the "21-day timeframe required by law" ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2025-releases/25-165mr-nab-and-afsh-penalised-155-million-for-failing-customers-facing-financial-hardship), August 2025). If the lender needs further financial information from the borrower, that request must also be dispatched within 21 days.

To ensure compliance, lending software must build strict operational guardrails:

- Every incoming enquiry creates an official hardship record stamped with the exact date and time received.
- Each case runs an automated countdown timer, triggering internal notifications well before the 21-day deadline approaches.
- The software must physically prevent staff from closing a hardship case without generating and dispatching a formal written notice to the customer.
- When an arrangement is agreed upon, the platform automatically updates repayment schedules, pauses debt collection reminders, and updates credit reporting flags.

The failure at NAB occurred because a system status quietly closed cases without notifying borrowers. Software developers must systematically test every possible workflow outcome to verify that no customer is ever left without clear communication.

Collections workflows need the same discipline. Debt recovery calls and automated reminder messages must automatically pause while a hardship assessment is under review, maintaining a complete record of all correspondence in compliance with Australian consumer law.

## Security and the APRA lens

For licensed banks, APRA's Prudential Standard CPS 234 sets mandatory information security requirements. For non-bank lenders and software partners, these standards arrive through institutional funding contracts and vendor due diligence questionnaires.

Under CPS 234, an organisation must notify APRA "no later than 72 hours" after becoming aware of any material information security incident ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)). Regulated institutions must also verify that all third-party software providers maintain robust cybersecurity safeguards. Our companion guide on [boardroom questions for APRA CPS 234](/blog/apra-cps-234-board-questions) provides a clear governance checklist.

Non-bank lenders demonstrate equivalent security by obtaining independent security credentials. Wholesale funders and banking partners routinely request evidence of ISO 27001 certification or a SOC 2 audit report before approving credit facilities. We break down the costs and timelines in our guide to [ISO 27001 certification costs for Australian fintechs](/blog/iso-27001-certification-australia-cost).

## Funding and warehouse reporting

Non-bank lenders finance their loan books using wholesale warehouse facilities provided by major banks or investment funds, which are later packaged into asset-backed securities. Funders establish strict eligibility criteria regarding which loans qualify for the funding pool, requiring detailed regular reporting.

While reporting formats differ across institutional funders, they all rely on the same fundamental data: individual loan histories, arrears tracking, hardship statuses, and verified bank reconciliations. With a clean, properly structured core ledger, producing a new funder report is straightforward because the underlying data is already accurate and accessible.

Structuring your data model to track which wholesale facility funds each loan allows loan transfers between facilities to be recorded as clear, auditable ledger events.

## Sequencing lending platform development: MVP first, bank-grade by design

Building a comprehensive lending platform is a substantial undertaking, but it does not need to happen all at once. Some administrative tasks can be handled manually at modest loan volumes, provided that records are kept meticulously. However, foundational legal and financial controls must be active from day one.

| Development stage | Must be automated and robust | Can be manual or managed with simple tools initially |
|---|---|---|
| Initial launch (First loans) | Double-entry ledger, immutable audit logging, stored credit assessments, hardship timers | Phone collection scripts, funder summary reports, assisted reconciliation matching |
| Growth stage (Thousands of loans) | Integrated PayTo and direct debit rails, automated daily bank reconciliation, bureau data feeds | Advanced credit scorecard tuning, automated Consumer Data Right data holder feeds |
| Mature platform | Institutional warehouse reporting, APRA regulatory returns, automated CDR sharing at scale | Very few functions. Almost all operations should be fully automated |

Sequencing is far more important than raw development speed. An organisation that rushes to build an automated credit application front-end while leaving its accounting ledger for later inevitably faces expensive rebuilds. Connecting to Australian banks, credit reporting agencies, and identity databases also takes practical coordination, which is why [connecting your product to Australian banks](/blog/bank-integration-platforms-australia) should be scheduled early.

## Common questions

### Do we need to become a bank to be bank-grade?

No. An Australian consumer lender can operate under an Australian credit licence without holding retail deposits. You still manage credit licence responsibilities, AUSTRAC anti-money laundering rules, and consumer protections. "Bank-grade" refers to the dependability, security, and accuracy of your software and processes, not your corporate banking charter.

### Should we buy a loan management system or build one?

Many successful Australian lenders adopt a hybrid approach. They license an established servicing and ledger platform for accounting calculations, while customising the customer onboarding experience, credit assessment rules, and investor reporting. Whatever software you select, verify that it maintains permanent assessment records, supports hardship clocks, and balances double-entry transactions correctly.

### When should a new lender plan for the Consumer Data Right?

From the beginning, if you intend to use Open Banking data to verify customer income and living expenses. If your loan portfolio meets the criteria for a designated data holder, you will also need to plan for data-sharing requirements under Australia's phased schedule. Consult the latest guidance from the ACCC and Treasury to confirm your regulatory timelines.

## What to do next

Review the obligations table at the start of this article and identify which system or team is responsible for each requirement:

- Can you retrieve an exact, unedited copy of a credit assessment approved last year and provide it to a customer today?
- Does your customer service software ensure that every hardship enquiry results in an official written response before 21 days elapse?
- Does your accounting ledger balance against your Australian bank accounts every morning, with every exception investigated and recorded?

If the answer to any of these questions is uncertain, that is where your engineering priorities should focus. For more on building regulated software systems, explore our guide to [software for financial services](/industries/financial-services).

When your organisation needs experienced Australian engineers to design and build reliable lending systems, Palxi collaborates closely with executive and advisory teams from initial architecture through to operational launch. [Speak with our team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from ASIC, the OAIC, APRA, the ACCC, and AusPayNet on 27 September 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general information and does not constitute legal or financial advice. Please seek guidance from qualified compliance professionals or your legal advisor regarding your specific regulatory obligations.*

*Photos: cover, ["GPT & GMT"](https://www.flickr.com/photos/37086457@N00/3434209744) by cascade_of_rant, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Calculator and planner, ["Red post-it label, calculator and ballpen"](https://www.flickr.com/photos/42931449@N07/6812497415) by photosteve101, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Account book, ["Account Book Ledger"](https://commons.wikimedia.org/w/index.php?curid=58742661) by John Carlin, The Metropolitan Museum of Art, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), cropped.*
