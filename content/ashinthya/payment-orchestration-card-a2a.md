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

Since 1 October 2026, Australian businesses can no longer add a surcharge when a customer pays with an eftpos, Mastercard or Visa card ([Reserve Bank of Australia](https://www.rba.gov.au/media-releases/2026/mr-26-10.html), March 2026). The Reserve Bank estimates that consumers were paying about $1.6 billion of the $1.8 billion in card surcharges each year ([RBA](https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/impact-and-implementation.html), March 2026).

That cost now sits with the business, inside its prices. So the way you take payments matters more than it did a month ago.

Plenty of businesses now accept cards and direct bank transfers side by side. Each may come with its own provider, its own reports and its own login. Good payment processing software can bring them into one place. Below is what that looks like in plain words, and what to ask before you build or buy it.

## What changed on 1 October 2026

The decision came from the Reserve Bank's Payments System Board in March 2026. The three card networks it regulates, eftpos, Mastercard and Visa, each brought in "no-surcharge" rules from 1 October. American Express, UnionPay and PayPal decided to do the same, though the Reserve Bank does not formally regulate them ([RBA, questions and answers](https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/)).

The Reserve Bank also lowered the caps on interchange fees. An interchange fee is a small charge paid to the bank that issued your customer's card, every time the card is used. It is built into the fees your own payment provider charges you. A cap on interchange for cards issued overseas starts on 1 April 2027.

One thing stayed the same. In the Reserve Bank's words, "Businesses can continue to offer discounts for particular payment methods." A business can still reward customers who pay in a way that costs it less.

## Two ways money moves: cards and bank-to-bank

Cards are still the everyday choice. In the Reserve Bank's latest survey, "one in every two consumer payments" was made with a debit card. Cash made up around 15 per cent of payments, and online purchases around 20 per cent ([RBA Bulletin](https://www.rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html), May 2026).

Bank-to-bank payments work differently. They are often called account-to-account, or A2A, payments. Money moves straight from the customer's bank account to yours, with no card network in the middle.

In Australia these run on the New Payments Platform (NPP), the shared system that banks use for fast transfers. It launched in February 2018 and offers "near real-time funds availability to the recipient, on a 24/7 basis" ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/)).

Two NPP services matter most to a business:

- PayID lets a customer pay to an easy address, such as a mobile number, email or ABN, instead of a BSB and account number. Around half of the people surveyed had used PayID at least once in the past year.
- PayTo lets a customer approve a payment agreement inside their own online banking. The business can then collect money from their account under those terms, a little like a modern direct debit. PayTo is still small, at 4 percentage points of account-to-account payments in 2025.

Our guide to [building PayTo and account-to-account payouts](/blog/payto-a2a-payouts-australia) goes further into how PayTo works.

| | Card payments | Bank-to-bank payments |
|---|---|---|
| How the customer pays | Taps, inserts or types in a card | Uses a PayID, a BSB and account number, or a PayTo agreement |
| Who sits in the middle | A card network, such as eftpos, Mastercard or Visa | The New Payments Platform, between the two banks |
| How fast money arrives | Depends on your provider's payout schedule | Near real time, any hour of any day |
| How common it is | Debit cards: one in two consumer payments | PayTo: 4 percentage points of bank-to-bank payments |

## Payment processing software that sends each payment the right way

Picture a railway junction. Trains arrive on one line, and a set of points sends each train onto the right track. Payment orchestration does the same job for money.

![Several railway tracks curving and crossing at a busy junction, with sets of points between them](railway-junction.jpg)

*At a junction, the points decide which track each train takes.*

In plain terms, payment orchestration is a layer of payment processing software that sits between your checkout and all your payment providers. Every payment comes in through one front door. The software decides which provider should handle it, passes it on, and writes down what happened.

Underneath sits payment integration, which is the plumbing. Each provider offers an API (a set, agreed way for two computer systems to pass information to each other). Integration means connecting your own systems to each provider's API. Payments, refunds and reports then flow across without anyone retyping them. Our piece on [bank integration platforms](/blog/bank-integration-platforms-australia) covers that plumbing in more detail.

A well-planned orchestration layer usually gives a business:

- one checkout offering both card and bank transfer options
- rules about which provider handles which payment
- a backup option when one provider is down
- one record of every payment, refund and fee
- the freedom to change providers later without rebuilding the checkout

## Choosing the cheaper path for each payment

A debit card can carry two networks: eftpos, plus either Debit Mastercard or Visa Debit. Least-cost routing, or LCR, lets the business send that payment through whichever network costs it less. The customer taps the same way either way.

As at the end of June 2026, 83 per cent of merchants had LCR switched on for in-person payments. For online payments, LCR was available to 98 per cent of merchants, and take-up was still growing ([RBA, LCR update](https://www.rba.gov.au/payments-and-infrastructure/debit-cards/least-cost-routing/updates/lcr-update-on-implementation-0826.html), September 2026). Available is not the same as switched on, so it is worth asking your provider which applies to you.

Orchestration takes the same idea further. With one layer in charge, a business can set its own rules. For example, it might:

1. send debit card payments through least-cost routing, in store and online
2. offer PayTo for regular bills, such as monthly memberships
3. show a discount at checkout for paying by bank transfer, if that costs the business less
4. move payments to a second provider if the first one's fees rise

Whether any rule saves money depends on what your providers charge. Get each price in writing, per payment, before you set the rules.

## Keeping payments running when something breaks

Payment systems in Australia are reliable, but they do stop. A Reserve Bank study of outages found every retail payment service had "an average availability of 99.80 per cent or higher per quarter" ([RBA Bulletin](https://www.rba.gov.au/publications/bulletin/2024/oct/the-reliability-of-retail-payment-services.html), October 2024). That sounds close to perfect. Yet 0.2 per cent of a three-month quarter still allows up to about four hours offline.

The same study found that card payments had the highest availability. Fast transfers and online banking had the most significant outages. And "the leading cause of outages are issues with third parties", meaning the outside companies that payment services rely on.

This is where having two ways to pay helps. Card networks and bank transfers do not run on the same system, so a fault in one may leave the other working. With orchestration, the checkout can offer the other option when one fails. Without it, a customer simply sees an error and may give up.

## Safety checks on both kinds of payment

Card details need special care. Any business that takes cards must follow PCI DSS, a security standard set by the card industry's own council. The lightest form of checking is a short self-assessment form called SAQ A. It is meant for businesses whose card handling is "completely outsourced to PCI DSS validated and compliant third parties" ([PCI Security Standards Council](https://blog.pcisecuritystandards.org/important-updates-announced-for-merchants-validating-to-self-assessment-questionnaire-a), January 2025).

Since 2025, those businesses must also "confirm their site is not susceptible to attacks from scripts". Scripts are small pieces of code that run on a web page. A harmful one could copy card details as a customer types them.

The lesson for orchestration is simple. A sound design keeps card numbers on the provider's secure payment page, so they never touch your own systems. Your website still needs looking after, though.

Bank transfers need different checks. Once money lands in the wrong account, getting it back can be hard. We build account-to-account payout flows on PayTo with Confirmation of Payee checks. These compare the account name with the BSB and account number before money leaves. Scams and fraud are a wider topic, covered in our piece on [fraud detection in payments](/blog/fraud-detection-payments).

## One record of every payment

![Rows of typed dates and dollar amounts in an old bank passbook, some printed in red ink](bank-passbook.jpg)

*Before computers, every deposit and withdrawal was typed into a passbook like this one.*

Reconciliation means matching each payment to the right invoice or order. Think of ticking off a bank statement against your till receipts at the end of the month.

Card payments and bank transfers usually arrive with different reports, at different times and in different formats. When they sit in two systems, someone has to match them by hand. That takes time, and it is where mistakes creep in.

Bank transfers on the NPP help here. They can carry "much richer remittance information" than older bank transfers, which allowed only 18 characters for a reference ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/)). That leaves room for a full invoice number with each payment, so matching can happen automatically.

The Reserve Bank's changes on payment cost transparency start on 1 April 2027. Even before then, your own records should show what each type of payment costs you. Systems we have built have processed more than $50M in revenue. At that volume, small gaps in the record soon add up to real money.

## Building payment orchestration or buying it

There are three broad paths. You can buy an orchestration service. You can use one provider that offers both cards and bank transfers. Or you can build a thin layer of your own over two or more providers.

Each suits a different business. A single provider is simplest to start with. A bought service adds choice without much building. A layer of your own gives the most control, and the most work. Our article on [custom software versus off the shelf](/blog/custom-vs-off-the-shelf-financial-services) walks through that choice for regulated firms. If payments are part of a product you sell to others, read [adding payments and lending to a non-bank product](/blog/embedded-finance-payments-lending).

Whichever path you choose, put these questions to the provider or the build team:

| Question to ask | Why it matters |
|---|---|
| Which payment types can it take: cards, PayID, PayTo? | Customers who cannot pay their preferred way may leave |
| Is least-cost routing on, in store and online? | Debit card fees can differ between networks |
| What happens when a provider goes down? | A backup option keeps sales coming in |
| Do card numbers ever touch our systems? | It changes how much PCI DSS work you carry |
| Can we export every payment, refund and fee in one report? | Matching payments to invoices depends on it |
| How hard is it to change providers later? | Being locked in leaves you less say on price |

## Common questions

### Can I still add a surcharge for card payments?

Not for eftpos, Mastercard or Visa cards, from 1 October 2026. American Express, UnionPay and PayPal have also decided to remove surcharging. You can still offer a discount for a particular payment method. Check that your website, invoices and counter signs no longer mention card surcharges.

### Is a bank transfer always cheaper than a card?

Not always. It depends on what your providers charge for each, including monthly or set-up fees. Ask each provider for its full price list per payment. Then compare the cost of the payments you actually take, not the headline rate.

### Do I need payment orchestration if I only take cards?

Possibly not. A single card provider with least-cost routing switched on may be enough. Orchestration earns its place when you add a second way to pay, a second provider, or a need for a backup.

## What to do next

Start with a short review of how your business takes money today:

- List every way customers pay you, and which provider handles each.
- Ask your card provider whether least-cost routing is switched on, in store and online.
- Time how long it takes to match last month's payments to invoices.
- Note what happened the last time a payment system went down.
- Ask what a PayTo or PayID option would cost to add.

For a wider view of the platforms involved, see our page on [software for financial services](/industries/financial-services).

If you want card and bank transfer payments running through one well-built system, Palxi can design and build it with you. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against Reserve Bank of Australia and PCI Security Standards Council sources on 7 October 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Paying with a Credit Card"](https://commons.wikimedia.org/w/index.php?curid=67030803) by Hloom Templates, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Railway junction, ["The 'City' end"](https://www.flickr.com/photos/61132483@N00/15070600043) by Elsie esq., [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Passbook, ["Old Bank Statement"](https://www.flickr.com/photos/52195472@N00/16771229247) by lungstruck, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
