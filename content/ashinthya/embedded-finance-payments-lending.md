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

Around 20 per cent of all Australian consumer purchases now take place online, and payments completed through mobile smartphone apps account for nearly half of that total ([RBA](https://www.rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html), May 2026). When an Australian online marketplace, booking service, or software business decides to introduce in-app payments or lending, the concept is familiar to everyday Australians. People already tap their phones and manage transactions inside apps every day.

The challenging question comes when company directors and business operators ask: what licences are required, and who is legally responsible for safeguarding customer funds?

In Australia, the answer depends entirely on what the software does with money. Moving money, holding customer funds in a digital balance, and lending credit are each governed by distinct Australian laws and regulators. 

This guide explains how Palxi approaches embedded finance across our software products, how to navigate Australia's evolving payment licensing reforms, and how to build systems that protect everyday customers.

## What embedded finance changes for a non-bank product

In plain terms, "embedded finance" simply means offering financial services — such as card checkouts, digital wallets, or instalment loans — directly inside a non-banking app or website. For instance, a trade services marketplace might pay contractors automatically once a job is finished, an online booking platform might hold a deposit until an appointment occurs, or practice management software might help small clinics access working capital finance.

Regardless of how simple a feature appears on a smartphone screen, moving or holding money is a regulated financial activity under Australian law:

- **Payments and digital money** are governed by the Corporations Act 2001 and Australian Financial Services (AFS) licensing, overseen by the Australian Securities and Investments Commission (ASIC).
- **Consumer lending and deferred credit** are regulated by the National Consumer Credit Protection Act 2009.
- **Identity verification and transaction monitoring** are supervised by the Australian Transaction Reports and Analysis Centre (AUSTRAC) under Anti-Money Laundering and Counter-Terrorism Financing (AML/CTF) legislation.

When planning any financial feature, start with a simple practical test: what does the software actually do with customer funds?

- **Does it simply pass payment instructions along?** The app directs a licensed bank or payment provider to transfer money, but never holds the money itself.
- **Does it hold customer funds?** Money sits in an account balance, digital wallet, or escrow-style holding account controlled by the platform.
- **Does it extend credit or defer payment?** A customer receives goods, services, or funds upfront and repays the balance over time.

The answer determines which regulatory licences apply, what kind of banking partner is needed, and how the underlying software must be engineered.

## Your client's licence or someone else's

Australian businesses adding financial features generally choose one of four practical licensing pathways:

| Licensing pathway | Practical arrangement | Who carries regulatory accountability | When this model fits best |
|---|---|---|---|
| Direct licence (AFSL or credit licence) | The organisation holds its own licence from ASIC and issues the financial product | The business carries full responsibility: compliance staff, external dispute resolution (AFCA), and statutory capital reserves | Financial services are core to the company's business model and transaction volume justifies the ongoing overhead |
| Authorised or credit representative | The business operates under the authority and supervision of an existing licensee | The licensed partner supervises; the business must follow all partner rules and procedures | The business wants to own the customer relationship without managing a primary licence application |
| Banking partner of record (BaaS / sponsor bank) | A licensed partner bank issues the account, card, or loan behind the scenes; the app distributes it | Primarily the licensed partner bank, defined through formal service agreements | Speed to market and low regulatory friction matter more than owning every margin |
| Referral model | The app simply refers users to an independent licensed finance provider | The licensed third-party provider | Lending or finance is a minor convenience feature with modest revenue attached |

The referral route requires strict care. ASIC treats referral as "a narrow exemption from licensing requirements for doing referrals". To remain compliant, a business may "only inform the consumer" that an independent licensee can assist, explain how to contact them, and clearly disclose any referral commission received ([ASIC](https://www.asic.gov.au/for-finance-professionals/credit-licensees/do-you-need-a-credit-licence/faqs-does-the-credit-legislation-apply)). If an app pre-fills loan applications, suggests borrowing amounts, or endorses specific loan products, it risks crossing into unlicensed financial conduct.

Similarly, operating as an authorised representative requires rigorous compliance. The primary licence holder remains legally liable for its representatives, meaning they will inspect customer screens, onboarding workflows, marketing messages, and complaints registers.

Deciding between these routes also shapes whether you purchase existing tools or build proprietary software, as detailed in our guide on [custom versus off-the-shelf financial software](/blog/custom-vs-off-the-shelf-financial-services).

## Embedded payments and the licensing reforms

![Close-up of a card payment terminal keypad with numbered keys lit in blue](payment-terminal-keypad.jpg)

*The key regulatory questions sit behind the payment screen: who holds the money, and for how long.*

Australia's national payments framework is undergoing major modernisation. The Commonwealth Treasury's payments licensing reforms introduce a graduated regulatory structure for Payment Service Providers (PSPs). Under the proposed legislation, entities performing designated payment functions will be required to hold an Australian Financial Services Licence (AFSL). The reforms also grant the Australian Prudential Regulation Authority (APRA) supervisory powers over major Stored Value Facilities (SVFs) and create a framework for a revised, mandatory ePayments Code to protect consumers from unauthorised or mistaken payments ([Treasury](https://treasury.gov.au/policy-topics/banking-and-finance/payments-licensing-reforms), March 2026).

Draft legislation was released for public consultation through April 2026, setting out how payment providers must safeguard customer money, handle unclaimed balances, and manage operational resilience ([Treasury consultation](https://consult.treasury.gov.au/c2026-746108), March 2026).

The fundamental distinction emphasised by federal policymakers is straightforward: "a digital wallet that simply passes through payment instructions to your bank will face different regulations than a digital wallet that holds your funds" ([Treasury Ministers](https://ministers.treasury.gov.au/ministers/daniel-mulino-2025/media-releases/new-legislation-modernise-regulation-payment-service), October 2025).

For everyday apps, this means examining any feature that stores customer value. Holding balances inside an app, offering pre-loaded platform credits, or operating a buyer escrow holding account all involve holding customer money. Under the updated framework, these features attract strict safeguarding obligations. Designing an application that settles funds directly to sellers or recipients through an Australian licensed bank significantly simplifies regulatory compliance.

From an engineering perspective, safeguarding funds requires clear accounting foundations:

- Can the software prove, down to the exact cent at any given second, whose money is held and where it is deposited?
- Are customer funds held in an independent statutory trust account completely separated from the company's daily operational funds?
- Can the system generate an official unclaimed monies register if a customer account remains inactive over extended periods?
- Do your refund and dispute procedures comply with the standards set out in the ePayments Code?

Modern payment methods also extend beyond payment cards. While real-time PayTo bank payments are growing across Australia (accounting for roughly 4 percentage points of account-to-account payments in recent Reserve Bank surveys), platforms handling high volumes increasingly combine card processing with PayTo, as covered in our guide on [payment orchestration across card and PayTo rails](/blog/payment-orchestration-card-a2a).

## Lending inside the product, including BNPL

Providing credit inside an application is subject to strict consumer protection laws. Anyone lending money to Australian consumers, or assisting them in obtaining finance, must hold an Australian credit licence or act as an appointed credit representative.

Buy Now, Pay Later (BNPL) instalment arrangements no longer operate outside standard credit rules. Following national legislative updates, ASIC confirmed that "From 10 June 2025, anyone engaging in credit activities involving buy now pay later contracts must hold an Australian credit licence" ([ASIC](https://www.asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing)). BNPL arrangements that qualify as "low cost credit contracts" operate under tailored responsible lending guidelines outlined in ASIC Regulatory Guide 281.

For an Australian online business wanting to offer instalment options at checkout, three paths exist:

1. Partner with an established, licensed BNPL provider and act simply as a retail merchant.
2. Become an appointed credit representative of that provider, subject to their compliance supervision.
3. Apply for an independent Australian credit licence to manage a proprietary loan book, taking on complete responsible lending, financial hardship, and dispute resolution duties.

Each model requires different engineering capabilities. Acting as a merchant requires a secure technical integration and clear pricing disclosures. Operating as a credit representative requires displaying approved licensee scripts and preserving customer records. Managing an independent credit book requires building robust credit assessment calculators, hardship timers, and auditable accounting ledgers, as explained in our guide to [building bank-grade lending platforms](/blog/bank-grade-lending-platform-australia).

## Partner models: BaaS and sponsor banks

![A smartphone lying on a wooden desk beside a closed notebook, a pen and a laptop](phone-on-desk.jpg)

*The customer interacts with a single friendly app. Behind the scenes, accounts sit securely on a partner bank's licence.*

Banking as a Service (BaaS) enables an Australian business to offer branded debit cards, deposit accounts, or instant payment services powered by a licensed partner bank. Because the partner bank holds the banking charter, regulatory capital, and payment network memberships, it provides the quickest route for a growing company to launch financial features.

However, partnering with an established bank does not remove all operational responsibility. While the partner bank holds the regulatory licence, your application provides the screen the customer uses and frequently manages the sub-ledger that records who owns each balance.

The importance of accurate record keeping was highlighted dramatically in the United States in 2025. Synapse, a major technology intermediary that connected non-bank fintech applications to partner banks, experienced severe record-keeping discrepancies. When partner banks attempted to reconcile their accounts against Synapse's records, between $60 million and $90 million USD in customer funds could not be accounted for. United States regulatory authorities found that the intermediary failed "to maintain adequate records of the location of consumers' funds", leaving thousands of everyday consumers locked out of their money for weeks or months ([CFPB](https://www.consumerfinance.gov/enforcement/actions/synapse-financial-technologies-inc/), 2025).

While that collapse occurred under American jurisdiction, the technical lesson applies universally: whenever an organisation manages individual customer balances inside a pooled bank account, automated daily bank reconciliation must be built into the system from the very first day.

Key questions to review with any prospective banking partner include:

- Which system serves as the legal source of truth, and how frequently is it reconciled against the bank's accounts?
- How are customer funds protected if either your business or the partner bank experiences financial difficulty?
- What compliance checks does the partner bank perform, and what checks must your internal team carry out?
- What formal notice period must the bank provide before changing its technical systems, pricing tiers, or risk guidelines?
- What is the transition process if your business decides to move customer accounts to a different financial institution?

Conducting careful reviews of a partner's software reliability is just as vital as reviewing their banking credentials, as discussed in [technical due diligence on software development partners](/blog/technical-due-diligence-build-team).

## AML/CTF obligations: who is the reporting entity

Under Australia's Anti-Money Laundering and Counter-Terrorism Financing Act 2006, opening deposit accounts, issuing payment cards, making loans, and facilitating international remittances are classified as "designated services". The organisation that provides a designated service is legally termed the "reporting entity" and must maintain a formal AML/CTF compliance program, verify customer identities, and report suspicious transactions to AUSTRAC.

Australia's anti-money laundering legislation was updated through the Anti-Money Laundering and Counter-Terrorism Financing Amendment Act 2024, which received Royal Assent on 10 December 2024. Key provisions strengthening customer identity verification and cross-border money transfers took effect on 31 March 2026 ([Federal Register of Legislation](https://www.legislation.gov.au/C2024A00110/asmade/text)), broadening oversight across modern payment services.

In a banking partnership model, the partner bank providing the designated service is usually the reporting entity. However, your application collects the customer's personal information, presents the onboarding screens, and witnesses unusual payment behaviours first-hand. Commercial agreements must therefore clearly define:

- How customer identities are verified, and which national identity databases are queried.
- How frequently automated screening is performed against international sanctions registers and Politically Exposed Persons (PEPs) lists.
- How staff escalate unusual or suspicious transactions to the partner bank's compliance team.
- How long customer identification documents and transaction logs are securely archived.

In Palxi's software architectures, identity checks, sanctions monitoring, and audit trails are built directly into customer journeys, as detailed in our guide to [KYC and AML by design](/blog/kyc-aml-by-design).

## Who owns what: build team and partner

When partnering with a licensed financial institution, technical and regulatory responsibilities are shared across both organisations:

| Operational area | Typically the partner bank | Typically your application team |
|---|---|---|
| Banking licence, payment scheme access, regulatory capital | Yes | No |
| Customer onboarding screens and user experience | Sets compliance rules | Builds and maintains accessible screens |
| Identity verification and document checking | Provides verification tools | Integrates the service and manages user retries |
| Ledger of individual customer balances | Holds the master pooled account | Maintains the internal customer sub-ledger |
| Daily financial reconciliation | Supplies official bank statements | Matches daily transactions and investigates exceptions |
| Disclosures, privacy policies, and terms of service | Drafts or formally approves text | Presents notices clearly and logs customer consent |
| Customer complaints and hardship management | Resolves formal disputes | Captures, logs, and routes requests promptly |
| Suspicious activity reporting | Submits official reports to AUSTRAC | Monitors platform behaviours and flags anomalies |
| Information security and customer privacy | Establishes minimum security bars | Builds and proves strong technical controls |

Projects often encounter delays on the right-hand column. Teams frequently focus on software user interfaces while neglecting daily bank reconciliations, audit trails, and reporting tools that banking partners require before launch.

## Common questions

### Does our marketplace need an AFSL to accept credit card payments?

Not typically, provided you are processing payments through an established, licensed payment gateway under current Australian regulations. However, if your marketplace holds customer balances in an internal wallet, manages escrow funds, or facilitates financial transfers between third parties, you must review the incoming payments licensing reforms to determine your specific obligations.

### Can a business software platform offer loans to commercial clients without a credit licence?

In Australia, the National Credit Code applies specifically to loans provided wholly or predominantly for personal, domestic, or household purposes. Loans provided exclusively to businesses for commercial purposes fall outside these consumer credit rules. However, if your users include sole traders or partnerships where business and personal finances overlap, seek expert legal guidance before launching credit products.

### Is partnering with a bank cheaper than obtaining an independent licence?

Initially, partnering with an established bank or payments provider is far more cost-effective because the partner already maintains the banking charter, regulatory capital, and legal compliance teams. Over time, as transaction volumes grow, the partner's transaction fees and product restrictions may make seeking an independent licence worthwhile. Many Australian organisations start with a trusted partner and re-evaluate once their business scales.

## What to do before the first sprint

Before writing code or scheduling vendor demonstrations, map out a single customer transaction from start to finish:

- Identify the specific Australian licence covering every step where money is transferred, held, or borrowed.
- Confirm which organisation acts as the official AML/CTF reporting entity to AUSTRAC.
- Establish which system serves as the master ledger and who is responsible for daily bank reconciliation.
- Review your planned features against Australia's updated payments licensing laws, ensuring customer funds are properly safeguarded.

This foundational blueprint guides both legal contracts and technical development. To explore how we engineer secure financial software, view our guide to [software for financial services](/industries/financial-services).

When your organisation needs experienced Australian engineers to build dependable, compliant financial technology, Palxi collaborates with management and advisory teams from initial architecture through to launch. [Get in touch with our team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from Treasury, ASIC, the RBA, the Federal Register of Legislation, and the CFPB on 27 September 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general factual information and does not constitute financial or legal advice. Please consult your compliance professionals or legal counsel regarding your specific operational requirements.*

*Photos: cover, ["Sydney CBD from the top (gun) deck of the south east pylon of the Sydney Harbour Bridge"](https://commons.wikimedia.org/w/index.php?curid=107115627) by David Minty, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Terminal keypad, ["Payment terminal"](https://www.flickr.com/photos/46563758@N04/49509274828) by Henry Söderlund, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Phone on desk, ["apple-iphone-smartphone-desk"](https://www.flickr.com/photos/137643065@N06/24243796611) by pixellaphoto, CC0.*
