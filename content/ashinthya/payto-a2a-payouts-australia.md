---
title: "PayTo and A2A payouts: payment automation in Australia"
description: "Building A2A payouts in Australia: NPP credit transfers, PayTo funding, Confirmation of Payee outcomes, failure handling and the new bank scam rules."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "payto-a2a-payouts-australia"
canonical: "https://palxi.com.au/blog/payto-a2a-payouts-australia"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "Steel arch of the Sydney Harbour Bridge in silhouette against an evening sky over the water"
og_image_alt: "Steel arch of the Sydney Harbour Bridge in silhouette against an evening sky over the water"
tags: ["payto", "confirmation of payee", "payment automation", "npp", "a2a payments"]
lang: "en-AU"
---

# PayTo and A2A payouts: payment automation in Australia

In its first full year of operation across Australian banking, Confirmation of Payee was used more than 150 million times. One major financial institution reported that over 570,000 customer payments were abandoned after the system returned a "no match" warning, including more than 10,000 transfers destined for suspect accounts flagged on the Australian Financial Crimes Exchange ([Australian Payments Plus](https://www.auspayplus.com.au/businesses-come-on-board-as-confirmation-of-payee-enters-its-second-year), July 2026).

Those were everyday bank customers pausing when their banking app warned them that the name on the account did not match the person or business they intended to pay. 

For an Australian business or marketplace that pays hundreds of suppliers, contractors, or sellers every week, the challenge is identical, but operates at scale. When payments are automated by software, there is no person sitting at a keyboard to double-check every BSB and account number. That is where automating account-to-account (A2A) payouts requires careful engineering.

This guide explains how Palxi approaches automated bank-to-bank payouts, where modern tools like PayTo and Confirmation of Payee fit into the workflow, and how new Australian anti-scam regulations protect both businesses and consumers.

## Two rails, and where PayTo actually sits

In Australia, account-to-account payments travel across two primary networks:

1. **The Bulk Electronic Clearing System (BECS):** Australia's traditional batch-processing system, used for decades to process overnight direct debits, payroll files, and scheduled payments.
2. **The New Payments Platform (NPP):** Australia's modern real-time payments infrastructure, enabling instant transfers 24 hours a day, 365 days a year. In 2024, the NPP processed 1.6 billion transactions worth $1.99 trillion AUD, accounting for more than 30 per cent of all account-to-account payments across the nation ([AP+](https://www.auspayplus.com.au/move-to-npp), April 2025).

PayTo operates on the New Payments Platform, but it is designed specifically for "pull" transactions. A business creates a digital agreement with a customer, the customer authorises that agreement directly inside their own Australian banking app on their smartphone, and the business can then debit funds from the customer's account within the approved terms. Because PayTo pulls money in rather than pushing it out, it serves as a modern replacement for direct debit.

Consequently, an automated payout system typically involves two distinct legs:

- **Leg 1: Funding the platform.** The company owing the funds deposits money into the payout pool. PayTo is well suited to this step, allowing the platform to pull the required funds instantly from the business's bank account with digital authorization.
- **Leg 2: Distributing payouts.** The platform sends individual payments out to recipients as NPP instant credit transfers directly to each person's BSB and account number or PayID.

The funding leg is still expanding across the market. The Reserve Bank of Australia (RBA) noted in March 2026 that PayTo "has yet to demonstrate its maturity as a direct debit replacement", with the total value of PayTo agreements representing 0.1 per cent of the volume of traditional BECS direct debits during 2025 ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/bulk-electronic-clearing-system/decommissioning-of-the-becs-rba-risk-assessment-03-2026/), March 2026).

Furthermore, Australian Payments Network (AusPayNet) removed the proposed June 2030 retirement date for BECS in December 2025, confirming that traditional direct entry files will remain operational while real-time alternatives continue to mature. For software engineering teams, this means keeping BECS available as a dependable secondary fallback for bulk payment runs.

| Payment network | Transfer direction | Processing speed | Role in an automated payout system | Operational consideration |
|---|---|---|---|---|
| NPP credit transfer | Push (outgoing) | Instant, 24/7/365 | Sending individual earnings directly to recipient bank accounts | Modest per-transaction network fees; some smaller institutions are not yet connected |
| PayTo agreement | Pull (incoming), under pre-authorised digital consent | Instant once approved | Pulling float funds into the platform from the corporate account | Requires initial smartphone authorization by the payer; bank rollout is still expanding |
| BECS direct entry | Push or pull | Overnight batch processing | Distributing large bulk files or acting as a secondary fallback | Slower settlement; notifications of invalid accounts return days later |

## Confirmation of Payee in a payout flow

Confirmation of Payee (CoP) is Australia's name-checking service. When an account transfer is set up, the system automatically checks the recipient's name, BSB, and account number against the official records held by the receiving Australian bank. Major Australian retail banks began deploying the service in July 2025 as part of the Scam-Safe Accord ([ABA](https://www.ausbanking.org.au/scam-safe-accord/confirmation-of-payee/)). The verification request travels through Australian Payments Plus (AP+), while customer records remain safely protected inside each individual bank.

![Close-up of fine microprinted lettering on a banknote, repeating the words twenty dollars](banknote-microprint.jpg)

*Microprint on an Australian banknote: fine security details that protect the integrity of everyday currency.*

By July 2026, Confirmation of Payee was active across more than 100 Australian financial institutions, with commercial enterprises using it during new supplier onboarding and regular data reviews ([AP+](https://www.auspayplus.com.au/businesses-come-on-board-as-confirmation-of-payee-enters-its-second-year), July 2026).

For automated software systems, four practical characteristics are critical:

- **Five possible verification results:** In addition to "exact match", "close match", and "no match", the system can return "service error", "account no longer active", or "no account found". The platform must handle each response gracefully.
- **Selective name display:** For personal consumer bank accounts, the recipient's name is only revealed if there is a match or close match, protecting personal privacy. For commercial business and government accounts, the official registered entity name is displayed.
- **Advisory in nature:** Confirmation of Payee is an advisory checkpoint designed to alert the user; it does not physically lock or freeze the banking transfer.
- **Domestic accounts:** The service verifies domestic Australian bank accounts.

Because the system is advisory, the payout software must decide what to do with each result:

| Confirmation result | Recommended software action | Audit evidence to preserve |
|---|---|---|
| Exact Match | Activate the payee account for automated transfers | Verification request ID, timestamp, registered name verified |
| Close Match | Display the matching name to staff or recipient for explicit confirmation | Name of the reviewer and timestamp of confirmation |
| No Match | Temporarily hold automated payouts; request updated bank documentation | Reason for hold and record of subsequent customer communication |
| Account inactive or not found | Reject the bank details; notify the recipient to supply active details | Formal notification record sent to the user |
| Communication error | Automatically retry with backoff logic; escalate if unresolved | System error log and retry history |

A common vulnerability in payment platforms is checking bank details only once during initial signup. In reality, payment redirection fraud frequently occurs when a cybercriminal compromises an email account and requests that future payments be redirected to a new bank account. Automated systems should re-run Confirmation of Payee whenever an existing recipient updates their BSB or account number, holding upcoming payouts until the new details are verified.

## Designing payment automation around PayTo agreements

A PayTo payment agreement progresses through multiple digital states, and automated software must handle each transition smoothly. According to Australian Payments Plus, agreements can be created for one-off, occasional, or recurring payments. Account holders retain the right to pause, resume, or cancel agreements at any time inside their mobile banking app ([AP+ PayTo FAQs](https://www.auspayplus.com.au/solutions/payto-faqs)). If a business wishes to increase the payment amount or change payment frequency, a revised agreement must be issued and re-approved by the customer.

When using PayTo to fund payout accounts, systems must anticipate these scenarios:

1. **Pending customer authorization:** The customer has not yet opened their banking app to approve the mandate. Systems need automated reminders and clear expiry windows.
2. **Active:** Authorised debits occur seamlessly within the agreed limits and dates.
3. **Paused by the account holder:** If a customer temporarily pauses an agreement just before a scheduled transfer, the platform must flag the shortfall immediately rather than failing silently.
4. **Cancelled:** The customer terminates the payment right inside their banking app, ending automated pulls.
5. **Amended:** Changes to terms generate a revised mandate requiring fresh customer authorization.

Financial institutions send real-time notifications when transfers clear or if a transaction is held for routine fraud review. Payout software must clearly differentiate between a temporary processing delay and an outright payment failure.

## The failures a payout ledger has to absorb

Instant real-time payment rails fail very differently from traditional batch systems. In a legacy batch system, failures arrive hours or days later in a summary file. On the New Payments Platform, transfers are processed instantly, one by one, requiring immediate decision-making by software.

![A brass-edged payroll department sign on a black door, above a note asking visitors to push open the hatch](payroll-door.jpg)

*A traditional payroll department hatch: clear accountability and careful record keeping.*

The first practical factor is account connectivity. By late 2025, approximately 89 per cent of Australian bank accounts were connected to the New Payments Platform, with the Reserve Bank expecting roughly 3 per cent of accounts to remain on legacy rails indefinitely ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/bulk-electronic-clearing-system/decommissioning-of-the-becs-rba-risk-assessment-03-2026/), March 2026). Roughly 30 smaller mutual institutions still process payments exclusively through traditional direct entry.

The second factor is BSB updates. Following bank branch consolidations or corporate mergers, traditional batch systems automatically redirect payments from retired BSBs to active ones. However, automated redirection is not universally implemented across real-time NPP rails, meaning payments using older branch numbers may be rejected.

The third consideration is operational cost. Wholesale fees for instant NPP transfers remain slightly higher than bulk BECS file fees, which influences the economics of platforms processing thousands of very small micro-payouts.

To maintain complete accounting reliability, Palxi incorporates these foundational controls into automated payout systems:

- **Unique idempotency keys:** Every payment instruction carries a unique digital tracking number, guaranteeing that if an internet connection drops mid-transfer, the instruction cannot be executed twice.
- **Distinct payment statuses:** The software separates payments into submitted, settled, rejected, and held states.
- **Intelligent fallback routing:** If a recipient's bank does not support instant NPP payments, the software automatically routes the transfer via traditional BECS direct entry while notifying the recipient of standard processing times.
- **Daily bank statement reconciliation:** Every internal ledger entry is matched every morning against official bank settlement statements.
- **Staff exception queues:** Any disputed or rejected transfers are highlighted in an administrative queue for human review.

For example, consider a marketplace paying 2,000 sellers every Friday. If roughly 10 per cent of seller bank accounts cannot receive real-time NPP transfers, approximately 200 transfers require seamless routing through traditional bank rails without delaying payments or creating manual administration.

Because payment processing is classified as a critical operational service under APRA's Prudential Standard CPS 230, banking partners will evaluate how your software behaves during an unexpected network disruption. We review these standards in [what CPS 230 expects of technology vendors](/blog/cps-230-technology-vendors).

## Scam rules: who they bind and how they reach you

Confirmation of Payee began as an industry-funded safety initiative under the Australian Banking Association's Scam-Safe Accord, with banks investing over $100 million AUD to build the infrastructure ahead of government legislation.

Today, anti-scam duties are formally enshrined in Australian law through the Scams Prevention Framework, established under Part IVF of the Competition and Consumer Act 2010. In May 2026, the Commonwealth Assistant Treasurer formally designated the banking sector as a regulated industry under this framework, with ASIC appointed as the primary regulatory authority ([Federal Register of Legislation](https://www.legislation.gov.au/F2026L00627/asmade/text), May 2026).

While the Scams Prevention Framework directly binds licensed Authorised Deposit-taking Institutions (ADIs), its requirements reach software platforms through commercial banking agreements. Participating Australian banks were required to join the official dispute resolution scheme from 1 September 2026, with comprehensive operational rules applying from 31 March 2027. Consequently, sponsor banks require their business customers to maintain auditable scam controls, including Confirmation of Payee verification logs.

Anti-money laundering requirements operate alongside these anti-scam rules. If an automated payout platform transfers customer funds, it must also satisfy AUSTRAC requirements, as outlined in our guide to [building KYC and AML controls in from the start](/blog/kyc-aml-by-design). Additional payment security measures are explored in our guide to [fraud detection for payments](/blog/fraud-detection-payments).

## Common questions

### Can our platform connect to Confirmation of Payee directly?

Confirmation of Payee is managed by Australian Payments Plus and accessed through participating Australian banks and licensed payment institutions. Consult your corporate banking partner or payment provider to confirm how they deliver the service — whether via a direct API, bulk file validation, or commercial banking portals. We discuss these connections in our guide to [connecting your product to Australian banks](/blog/bank-integration-platforms-australia).

### Does PayTo completely replace direct debit today?

Not yet. The Reserve Bank's assessments confirm that most recurring consumer debits across Australia still rely on traditional BECS direct debit. It is best practice to offer PayTo for new customer agreements while keeping traditional direct debit available for customers whose financial institutions are still completing their rollout.

### Does a "no match" Confirmation of Payee result automatically stop a transfer?

No. Because the service is advisory, the transfer can technically proceed. However, the Australian Banking Association emphasizes that transferring money after receiving a mismatch warning is generally at the customer's risk. For an automated platform, the safest policy is to hold the transfer automatically and request that the payee verify their details before funds are released.

## What to do next

Before finalising your payment automation architecture, confirm these key operational details:

- Which payment rail carries each leg: PayTo for float funding, NPP instant transfers for payouts, and BECS as a dependable fallback.
- How your banking partner provides access to Confirmation of Payee, and how your software responds to mismatch alerts.
- What compliance evidence your sponsor bank requires under the Scams Prevention Framework.
- Who oversees the exception management queue when payments require human review.

If your platform processes card payments alongside direct bank transfers, explore our guide on [payment orchestration across card and PayTo rails](/blog/payment-orchestration-card-a2a). To understand the regulatory foundations of holding or transferring money, read our overview of [embedded finance for payments and lending](/blog/embedded-finance-payments-lending).

When your organisation needs experienced Australian engineers to design and build dependable, bank-grade payment automation, Palxi works alongside your leadership and advisory teams from initial planning through to operational deployment. [Speak with our engineering team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from Australian Payments Plus, the Australian Banking Association, the Reserve Bank of Australia, and the Federal Register of Legislation on 27 September 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general factual information and does not constitute financial or legal advice. Please seek qualified guidance from compliance professionals or your legal advisor regarding your specific payment arrangements.*

*Photos: cover, "[Sydney Harbour Bridge Afternoon](https://commons.wikimedia.org/w/index.php?curid=2240869)" by WikiWookie, [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/), cropped. Banknote microprint, "[_D7K3715](https://www.flickr.com/photos/41353201@N07/6148930087)" by DJ-Dwayne, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Payroll door, "[Payroll](https://www.flickr.com/photos/57868312@N00/16016747503)" by Matt From London, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
