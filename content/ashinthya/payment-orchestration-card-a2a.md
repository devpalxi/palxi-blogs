---
title: "Payment processing software for cards and bank transfers"
description: "Card surcharges ended on 1 October 2026. How payment orchestration runs card and bank transfer payments through one system, and what to ask first."
date: "2026-10-07"
lastUpdated: "2026-10-07"
author: "Palxi Team"
slug: "payment-orchestration-card-a2a"
canonical: "https://palxi.com.au/blog/payment-orchestration-card-a2a"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "A hand sliding a blue bank card into a white card payment terminal on a shop counter"
og_image_alt: "A hand sliding a blue bank card into a white card payment terminal on a shop counter"
tags: ["payment processing software", "payment orchestration", "payment integration", "payto", "card surcharging"]
lang: "en-AU"
---

# Payment processing software for cards and bank transfers

Since 1 October 2026, Australian businesses can no longer add a surcharge when a customer pays using an eftpos, Mastercard, or Visa card ([Reserve Bank of Australia](https://www.rba.gov.au/media-releases/2026/mr-26-10.html), March 2026). The Reserve Bank of Australia (RBA) estimates that Australian consumers were previously paying approximately $1.6 billion AUD of the $1.8 billion AUD in annual card surcharges at retail checkouts, cafes, and online stores ([RBA](https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/impact-and-implementation.html), March 2026).

With surcharges removed, payment processing fees must now be absorbed within a business's advertised prices. How an organisation accepts payments, routes transactions, and negotiates processing costs now directly affects everyday operating margins.

Today, many Australian organisations accept credit cards, debit cards, and direct bank transfers side by side. Yet each payment method often operates through a separate software provider, generating separate monthly statements, separate administration portals, and separate login details. 

Modern payment processing software — often called payment orchestration — brings all of these payment methods into a single, unified system. 

This guide explains how Palxi approaches payment processing across our products, how smart routing helps manage transaction costs, and what practical questions to consider before choosing a payment setup.

## What changed on 1 October 2026

The national decision to remove card surcharges was established by the Reserve Bank's Payments System Board in March 2026. Under the new rules, the three domestic card networks regulated by the RBA — eftpos, Mastercard, and Visa — introduced mandatory "no-surcharge" terms effective 1 October 2026. While the Reserve Bank does not formally regulate international charge cards like American Express, UnionPay, or digital wallets like PayPal, those providers also adopted no-surcharge policies across the Australian retail market ([RBA questions and answers](https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/)).

Alongside the surcharge changes, the Reserve Bank lowered the regulated caps on interchange fees. An interchange fee is a small wholesale fee paid between banks every time a card is tapped, which forms part of the fee your payment provider charges your business. A corresponding cap on cards issued by overseas banks comes into effect on 1 April 2027.

Importantly, one valuable commercial flexibility remains untouched: as the Reserve Bank confirmed, "Businesses can continue to offer discounts for particular payment methods." While a business can no longer penalise a customer for using a card, it is entirely free to reward customers who choose an alternative payment method — such as a direct bank transfer — that costs the business less to process.

## Two ways money moves: cards and bank-to-bank

Payment cards remain the most common way Australians pay for everyday items. According to recent Reserve Bank research, "one in every two consumer payments" in Australia is made using a debit card. Cash accounts for roughly 15 per cent of everyday purchases, while online commerce represents approximately 20 per cent of consumer spending ([RBA Bulletin](https://www.rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html), May 2026).

Direct bank transfers operate on a different model. Frequently referred to as account-to-account (A2A) payments, these transactions move funds directly from the customer's bank account into the merchant's bank account without passing through an intermediary card network like Visa or Mastercard.

In Australia, modern bank transfers travel over the New Payments Platform (NPP) — the national payments network launched in February 2018 to provide "near real-time funds availability to the recipient, on a 24/7 basis" ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/)).

Two NPP services are particularly relevant to Australian businesses:

- **PayID:** Allows a customer to send funds instantly using a simple identifier, such as a mobile phone number, email address, or Australian Business Number (ABN), instead of remembering a six-digit BSB and account number. Approximately half of Australian adults surveyed have used PayID.
- **PayTo:** Enables a customer to pre-authorise an ongoing or ad-hoc payment agreement directly inside their own Australian banking app on their smartphone. Once approved, the business can initiate account debits automatically, functioning as a fast, digital upgrade to traditional direct debits. While PayTo represented roughly 4 percentage points of bank-to-bank transfers in 2025, adoption is growing steadily.

For a deeper look at the underlying technology, explore our companion guide on [building PayTo and account-to-account payouts](/blog/payto-a2a-payouts-australia).

| Payment characteristic | Card payments | Direct bank-to-bank payments |
|---|---|---|
| Customer experience | Taps a physical card, inserts a chip, or types card digits online | Uses a mobile PayID, confirms a PayTo mandate in their banking app, or enters a BSB |
| Payment intermediary | Card scheme networks (eftpos, Mastercard, or Visa) | The New Payments Platform (NPP) connecting Australian banks directly |
| Settlement speed | Depends on your payment provider's batch payout schedule (often next business day) | Near real time, settling 24 hours a day, including weekends and public holidays |
| Market adoption | Debit cards represent roughly 50 per cent of all Australian consumer transactions | Rapidly expanding, with PayID used by over half of Australian consumers |

## Payment processing software that sends each payment the right way

Think of a busy railway junction. Trains approach on an incoming track, and mechanical points switch each train onto the proper line to ensure safe, timely arrival. Payment orchestration performs that exact switching role for money.

![Several railway tracks curving and crossing at a busy junction, with sets of points between them](railway-junction.jpg)

*At a railway junction, switching points steer each train along the most efficient track.*

In plain words, payment orchestration is a software layer that sits between your checkout screen and all your underlying payment providers. Every customer payment enters through one front door. The software evaluates the transaction, directs it to the most affordable or reliable provider, and records the outcome in a single ledger.

Beneath the surface sits payment integration — the technical plumbing. Each financial provider offers an Application Programming Interface (API), which is simply a secure, standardized way for two computer systems to talk to each other. Connecting these software bridges allows payments, automated refunds, and accounting statements to exchange information without staff ever having to retype numbers manually. Our guide on [bank integration platforms](/blog/bank-integration-platforms-australia) explores these technical connections in greater detail.

A well-architected payment orchestration system provides:

- A unified checkout offering both card payments and real-time bank transfers.
- Automated routing rules that direct each payment through the lowest-cost provider.
- Automatic fallback protection if a payment gateway experiences an outage.
- A single master record of all customer transactions, refunds, and merchant fees.
- The flexibility to introduce new payment providers in the future without redesigning your customer screens.

## Choosing the cheaper path for each payment

Most Australian debit cards are dual-network cards: they carry both the domestic eftpos network and an international scheme like Mastercard or Visa. Least-Cost Routing (LCR) allows an Australian business to automatically route a debit card tap through whichever network charges the merchant the lowest processing fee, while the customer's payment experience remains identical.

By June 2026, 83 per cent of Australian retail merchants had Least-Cost Routing active on their in-person countertop terminals, while LCR availability for online checkouts reached 98 per cent ([RBA, LCR update](https://www.rba.gov.au/payments-and-infrastructure/debit-cards/least-cost-routing/updates/lcr-update-on-implementation-0826.html), September 2026). However, availability does not always mean it is switched on by default; businesses should verify with their bank or payment terminal provider that LCR is actively enabled.

Payment orchestration takes this cost efficiency further by applying smart business rules across all payment types:

1. Routing dual-network debit card payments through least-cost routing both in store and online.
2. Offering instant PayTo bank transfers for recurring accounts or subscription billing to avoid ongoing card interchange fees.
3. Providing checkout incentives or modest settlement discounts for customers choosing direct bank transfers.
4. Diverting payment volume to an alternative provider if a vendor increases its processing fees.

Whether these routing rules reduce operating expenses depends on the specific commercial pricing negotiated with your providers. Always obtain detailed fee schedules per transaction before configuring automated rules.

## Keeping payments running when something breaks

While Australia's retail payment infrastructure is highly reliable, technical outages do occur. An RBA review of payment reliability noted that major retail payment channels maintained "an average availability of 99.80 per cent or higher per quarter" ([RBA Bulletin](https://www.rba.gov.au/publications/bulletin/2024/oct/the-reliability-of-retail-payment-services.html), October 2024). 

While 99.80 per cent availability sounds impressive, an availability gap of 0.2 per cent still allows for up to four hours of service disruption over a three-month period — which can cause significant disruption if it strikes during a busy trading afternoon.

The Reserve Bank's analysis highlighted that card networks generally exhibited the highest availability, while internet banking and real-time transfer gateways suffered more frequent disruptions. Furthermore, "the leading cause of outages are issues with third parties", referring to external cloud and communications suppliers.

This is where maintaining multiple payment channels protects a business. Card processing networks and direct bank rails run on completely separate technical infrastructure. If an external card processor experiences an outage, a payment orchestration system can automatically suggest a direct bank transfer or fail over to a backup card processor. Without orchestration, the checkout simply displays an error message, and the frustrated customer walks away.

## Safety checks on both kinds of payment

Protecting customer payment details requires strict cybersecurity controls. Any organisation that handles credit or debit card data must adhere to the Payment Card Industry Data Security Standard (PCI DSS), an international security benchmark established by the global card networks.

The simplest and safest compliance approach for small-to-medium businesses is completing Self-Assessment Questionnaire A (SAQ A). This streamlined framework applies when an organisation ensures that customer card handling is "completely outsourced to PCI DSS validated and compliant third parties" ([PCI Security Standards Council](https://blog.pcisecuritystandards.org/important-updates-announced-for-merchants-validating-to-self-assessment-questionnaire-a), January 2025).

Under updated security rules, businesses must also confirm that their websites protect customer screens against malicious software scripts — unauthorized code that cybercriminals attempt to inject to harvest card digits as customers type them.

The practical rule of thumb is clear: keep card numbers entirely on the licensed provider's encrypted checkout window so that sensitive 16-digit card numbers never touch your internal web servers.

Direct bank transfers require different security precautions. Because bank-to-bank transfers settle in seconds, recovering funds sent to an incorrect account can be difficult. Palxi incorporates Confirmation of Payee verification checks into automated payment workflows, verifying the account holder's registered name against their BSB and account number before money is transferred. Broader security measures are detailed in our guide to [fraud detection for payments](/blog/fraud-detection-payments).

## One record of every payment

![Rows of typed dates and dollar amounts in an old bank passbook, some printed in red ink](bank-passbook.jpg)

*In earlier times, every bank deposit and withdrawal was typed into a physical passbook. Today, digital ledgers balance automatically.*

Financial reconciliation is the process of matching every customer payment against the corresponding sales invoice, order number, or tax receipt. 

When card payments and bank transfers flow into separate portals, administrative staff must reconcile spreadsheets manually at the end of each month. This manual effort consumes hours and easily leads to accounting discrepancies.

Modern bank transfers on the New Payments Platform significantly ease this reconciliation burden. Because NPP transfers support rich ISO 20022 data standards, transactions can carry complete invoice numbers and customer references rather than the limited 18-character descriptions allowed by older bank systems ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/)). This allows accounting software to match incoming bank receipts to customer invoices automatically.

Under upcoming Reserve Bank transparency rules taking effect on 1 April 2027, payment providers will also be required to provide clearer statements detailing processing costs. Maintaining a unified internal ledger ensures your organisation understands the exact net revenue generated across every payment channel.

## Building payment orchestration or buying it

When implementing payment orchestration, Australian organisations typically select from three approaches:

1. **Licensing a dedicated orchestration platform:** Purchasing an off-the-shelf software service that connects to multiple Australian banks and payment gateways out of the box.
2. **Consolidating with a multi-rail payment partner:** Selecting a single licensed provider that natively supports credit cards, debit cards, PayID, and PayTo within one package.
3. **Building a custom routing layer:** Developing a proprietary software bridge that connects your checkout to selected payment partners, providing complete control over customer journeys and fallback logic.

Each model suits different operational scales. Using a single multi-rail provider is simplest for emerging businesses. A licensed orchestration service offers multi-provider flexibility with minimal development. Building a custom routing layer offers the greatest operational control and data independence, as explored in our guide on [custom versus off-the-shelf financial software](/blog/custom-vs-off-the-shelf-financial-services). If you are designing a product that serves other business clients, see [adding payments and lending to a non-bank product](/blog/embedded-finance-payments-lending).

Whichever path you evaluate, review these practical questions with your technology team:

| Evaluation question | Why it matters |
|---|---|
| Which payment options are supported: cards, PayID, and PayTo? | Customers who cannot find their preferred payment method may abandon the purchase |
| Is Least-Cost Routing active across in-person and online transactions? | Directing debit taps across the lowest-cost network reduces processing fees |
| How does the system respond if an external payment provider experiences downtime? | Automated fallback maintains continuous business trading during network outages |
| Do sensitive 16-digit card numbers touch internal servers? | Keeping card data on encrypted partner screens significantly reduces PCI DSS compliance overhead |
| Can the system export all transactions, refunds, and merchant fees in a single unified report? | Clean financial data is essential for automated bookkeeping and tax reporting |
| How easily can the organisation add or switch payment providers in the future? | Independent architecture prevents vendor lock-in and protects commercial pricing leverage |

## Common questions

### Can our business still add a surcharge for card payments?

No, not for transactions processed using eftpos, Mastercard, or Visa cards, following the 1 October 2026 Reserve Bank regulations. Major charge card networks and digital wallets have also eliminated surcharging. You may, however, offer a payment discount for lower-cost payment methods such as direct bank transfers. Ensure your website terms, checkout screens, and counter signs no longer display card surcharge notices.

### Is an account-to-account bank transfer always cheaper than a credit card?

Not necessarily in every scenario. Overall costs depend on the negotiated merchant fee per transaction, as well as any fixed monthly gateway charges. Review your full fee schedule per payment type with each provider, comparing the actual transaction sizes your business handles rather than just advertised headline percentages.

### Does a business need payment orchestration if it only accepts credit cards?

Probably not. If your organisation exclusively accepts payment cards, using an established payment gateway with Least-Cost Routing enabled is often sufficient. Payment orchestration becomes valuable when you introduce multiple payment types (such as PayTo or PayID), partner with multiple banks, or require automated backup routing to prevent lost sales during network outages.

## What to do next

Begin by reviewing how your business currently collects payments:

- Document every payment method your customers use today, alongside the specific provider handling each transaction.
- Confirm with your payment terminal or gateway provider that Least-Cost Routing is actively switched on for debit card payments.
- Measure the administrative time spent matching monthly bank deposits against accounting invoices.
- Review your contingency procedures for handling transactions during an unexpected payment gateway outage.
- Inquire with your financial institution about the operational costs of introducing PayTo or PayID at checkout.

To learn more about how we design resilient payment software, explore our overview of [software for financial services](/industries/financial-services).

When your organisation needs experienced Australian software engineers to design, build, and integrate dependable payment systems, Palxi collaborates closely with your executive and technical teams. [Contact our team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from the Reserve Bank of Australia and the PCI Security Standards Council on 7 October 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general factual information and does not constitute financial, legal, or taxation advice. Please consult your compliance professionals or legal counsel regarding your specific commercial arrangements.*

*Photos: cover, ["Paying with a Credit Card"](https://commons.wikimedia.org/w/index.php?curid=67030803) by Hloom Templates, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Railway junction, ["The 'City' end"](https://www.flickr.com/photos/61132483@N00/15070600043) by Elsie esq., [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Passbook, ["Old Bank Statement"](https://www.flickr.com/photos/52195472@N00/16771229247) by lungstruck, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
