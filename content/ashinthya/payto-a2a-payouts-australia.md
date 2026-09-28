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

In its first year, Confirmation of Payee was used more than 150 million times. One participating institution reported that more than 570,000 payments were abandoned after a "no match" result, including over 10,000 headed for accounts listed on the Australian Financial Crimes Exchange ([Australian Payments Plus](https://www.auspayplus.com.au/businesses-come-on-board-as-confirmation-of-payee-enters-its-second-year), July 2026).

Those were bank customers typing in a BSB and account number. A platform that pays hundreds of contractors or sellers a week has the same problem at scale, and no person at the keyboard to pause and check. That is where payment automation for account-to-account (A2A) payouts gets hard.

This article is for advisors and product owners scoping that build. It covers the rails, where PayTo and Confirmation of Payee fit, the failure modes and the scam rules now landing on banks.

> **The short version**
>
> - A2A payouts run as push payments over the NPP. PayTo is a pull mechanism, so in a payout product it suits the funding leg, not the payout itself.
> - Confirmation of Payee returns match, close match, no match and a few error states. It never blocks a payment, so your platform has to decide what each result means.
> - PayTo is still small: the RBA says the total value of PayTo agreements was 0.1 per cent of BECS direct debits in 2025.
> - BECS no longer has a closure date. AusPayNet removed the June 2030 target in December 2025, so plan for two rails.
> - The Scams Prevention Framework binds banks directly, with most obligations from 31 March 2027. For now, non-bank platforms feel it through their sponsor bank.

## Two rails, and where PayTo actually sits

Australia runs A2A payments over two systems: BECS, the older batch system behind direct entry files and direct debits, and the NPP, which settles individual payments in real time. In 2024 the NPP carried 1.6 billion transactions worth $1.99 trillion, and it was processing more than 30 per cent of Australia's A2A payments ([AP+](https://www.auspayplus.com.au/move-to-npp), April 2025).

PayTo sits on the NPP, but it runs in one direction. A business creates an agreement, the payer authorises it in online banking, and the business can then debit the payer's account within those terms. That makes it a replacement for direct debit, and it doesn't send money out.

So a payout product usually has two legs. The first is funding: the business that owes the money tops up the platform, and PayTo is a good fit for that pull. The second is the payout itself, sent as an NPP credit transfer to each payee's BSB and account number or PayID.

The first leg looks less mature on paper than the second. The RBA's March 2026 update found PayTo "has yet to demonstrate its maturity as a direct debit replacement". It currently supports only single transfers, and the total value of PayTo agreements was 0.1 per cent of the value of BECS direct debits in 2025 ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/bulk-electronic-clearing-system/decommissioning-of-the-becs-rba-risk-assessment-03-2026/), March 2026).

The same report records that AusPayNet removed the June 2030 end date for BECS in December 2025, until a clear roadmap exists for A2A payments. AusPayNet will review the outlook every six months. For a build team, that means BECS stays in the design as a fallback and for bulk files, and there is no fixed date for it to go.

| Rail | Direction | Speed | Good for in a payout product | Watch out for |
|---|---|---|---|---|
| NPP credit transfer | Push | Real time, 24/7 | Individual payouts to payees | Per-payment cost, unreachable accounts |
| PayTo | Pull, under an authorised agreement | Real time once authorised | Funding the platform from the payer's account | Single transfers only, uneven bank support |
| BECS direct entry | Push or pull | Batched, not real time | Large bulk runs, fallback | Late rejections, limited data fields |

## Confirmation of Payee in a payout flow

Confirmation of Payee (CoP) checks the account name, BSB and account number entered against the records held by the recipient's bank. Banks began rolling it out in July 2025 ([ABA](https://www.ausbanking.org.au/scam-safe-accord/confirmation-of-payee/)). The request goes to a central matching service run for the industry by AP+, but there is no central database. Account data stays with each bank.

![Close-up of fine microprinted lettering on a banknote, repeating the words twenty dollars](banknote-microprint.jpg)

*Microprint on a banknote: detail that is easy to miss at a glance.*

By July 2026 it was live at more than 100 institutions, and AP+ reports that businesses are using it "from onboarding to completing comprehensive back-book checks" ([AP+](https://www.auspayplus.com.au/businesses-come-on-board-as-confirmation-of-payee-enters-its-second-year), July 2026).

The details that matter most to a payout engineer:

- **The result set is wider than three values.** Besides match, close match and no match, AP+ lists "error", "this account is no longer active" and "no account found" ([AP+](https://www.auspayplus.com.au/solutions/confirmation-payee)), and each needs its own handling.
- **Names are disclosed selectively.** For a personal account, the payer only sees the name on a match or close match. For business and government accounts, the name is shown whatever the result.
- **It is advisory.** AP+ says CoP "will never stop you from completing a payment". The ABA calls it "an advisory checkpoint, not a hard block".
- **It is domestic only**, at least at launch.

Because the service never blocks, the platform owns the decision. The table below maps each outcome to an action for a payee register:

| CoP result | Suggested platform action | Evidence to keep |
|---|---|---|
| Match | Activate payee for payouts | Request, result, timestamp, name checked |
| Close match | Show the returned name to the payee or operator and ask for confirmation | Who confirmed, and when |
| No match | Hold the payee, ask for new details or proof of account | Hold reason, follow-up outcome |
| Account no longer active or not found | Reject the details and request new ones | Rejection notice sent |
| Error | Retry with backoff, then route to manual review | Retry log |

We build account-to-account payout flows that use PayTo and Confirmation of Payee checks. The evidence column is the part to get right early: once the bank scam rules apply, a logged CoP result for every payee change is something a sponsor bank can ask to see.

The expensive mistake is treating CoP as a one-off at signup. Our view: the riskier moment is often a later change of bank details, which is what payment redirection scams exploit. One workable approach: re-run the check whenever a payee's BSB, account number or account name changes, and hold the next payout until it clears. AP+ notes CoP also removes the need for micro-deposits, which shortens onboarding.

## Designing payment automation around PayTo agreements

A PayTo agreement moves through several states, and the funding logic has to handle each of them. The AP+ FAQs describe agreements for "one-off, ad hoc or recurring payments", which the payer can pause, resume or cancel in online banking. Changing the amount or frequency needs a new agreement that the payer authorises again ([AP+ PayTo FAQs](https://www.auspayplus.com.au/solutions/payto-faqs)).

For the funding leg of a payout product, that means building for these events:

1. Created and waiting for authorisation. The payer may never approve it, so the platform needs a timeout and a way to follow up or withdraw it.
2. Active, with debits allowed only inside its terms.
3. Paused by the payer. If that happens just before a funding pull, the float comes up short and the next payout run has to wait or shrink.
4. Cancelled, which ends the debit right but not the commercial contract.
5. Amended. That is really a new agreement, and the payer has to authorise it again.

Businesses receive notifications when a payment succeeds or fails, or when a customer pauses or cancels. AP+ also warns that "some payments may be held for additional security checks". Your float logic needs to know the difference between "failed" and "not yet settled".

Migrating existing direct debits has its own rules. The payer gets 14 days' advance notice and can opt out. Once the agreement appears in online banking, the business allows five days before the first debit. To offer PayTo at all, a business needs to be sponsored as a PayTo User by a bank or payment service provider.

In April 2025, AP+ scheduled enhanced PayTo messaging for the NPP's end-of-2026 release, identifying the "ultimate creditor" and merchant categories to help fraud screening ([AP+](https://www.auspayplus.com.au/move-to-npp), April 2025). Its December 2025 roadmap update still listed the PayTo message uplifts, and confirmed the NPP's ISO 20022 version upgrade for March 2027 ([AP+ roadmap](https://www.auspayplus.com.au/ap-roadmap), December 2025). If your client's integration maps message fields by hand, budget time for both.

## The failures a payout ledger has to absorb

Real-time rails fail differently from batch ones. With a batch file, rejections tend to come back later and in groups. An NPP payout gets its answer straight away, for one payee, and your system has to decide what happens next.

![A brass-edged payroll department sign on a black door, above a note asking visitors to push open the hatch](payroll-door.jpg)

*A payroll office door with a hatch for enquiries.*

Reach is the first issue. As of August 2025, 89 per cent of accounts at NPP participants that are connected to BECS were also connected to the NPP. The RBA expects about 3 per cent of accounts to stay unconnected ([RBA](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/bulk-electronic-clearing-system/decommissioning-of-the-becs-rba-risk-assessment-03-2026/), March 2026). Around 30 ADIs still use BECS without being connected to the NPP.

Stale BSBs are the second. When a BSB becomes obsolete after a branch closure or merger, the RBA says financial institutions typically reroute BECS payments to a new BSB automatically. Similar processes "have not been widely implemented for the NPP", so some payments that BECS would have delivered are rejected on the NPP.

Then there is cost. The RBA reports that wholesale fees for NPP transactions "remain significantly higher than for BECS transactions", and it expects the wholesale cost of NPP payments to stay above current BECS costs. That changes the maths for platforms making many small payouts.

Our view: a payout ledger for Australian A2A should have these from the first release.

- An idempotency key on every payout instruction, so a timeout never becomes a double payment.
- A status model that separates submitted, settled, rejected and held.
- A routing rule that falls back to BECS direct entry for unreachable accounts, with the payee told about the delay.
- Daily reconciliation of the ledger against the bank statement, not against your own API logs.
- An exceptions queue that a person works, with ageing alerts.

Take a hypothetical marketplace that pays 2,000 sellers every Friday. If 10 per cent of its payees' accounts can't receive NPP payments, roughly today's gap, that is about 200 people a week who need another route.

Payments are a default critical operation for ADIs under APRA's CPS 230, so a bank sponsor will ask how your platform behaves in an outage. Read [what CPS 230 expects of technology vendors](/blog/cps-230-technology-vendors) before that conversation.

## Scam rules: who they bind and how they reach you

CoP began as an industry commitment under the banks' Scam-Safe Accord. The ABA says banks funded the $100 million build themselves, "well before any regulatory mandate".

The Scams Prevention Framework is statutory. It sits in Part IVF of the Competition and Consumer Act 2010. In May 2026 the Assistant Treasurer designated banking as a regulated sector ([Federal Register of Legislation](https://www.legislation.gov.au/F2026L00627/asmade/text), May 2026). The designation covers services provided by an ADI in carrying on its banking business, and names ASIC as the sector regulator for banking.

Scope matters here, because the designation binds ADIs. A non-bank payout platform isn't designated in its own right, but its sponsor bank is. Under the instrument's transitional rules, banks had to be members of an SPF dispute resolution scheme from 1 September 2026. The rest of the framework applies to them from 31 March 2027. Expect sponsor banks to push scam controls down to platforms through contracts and onboarding reviews.

Anti-money laundering sits in a separate law. If your client's payout product moves value for customers, it may carry AML/CTF obligations of its own. [Building KYC and AML controls in from the start](/blog/kyc-aml-by-design) is cheaper than retrofitting them. Fraud screening is a related but different layer, covered in [fraud detection for payments](/blog/fraud-detection-payments).

## Common questions

### Can a payout platform call Confirmation of Payee directly?

The service is run by AP+ and reached through participating financial institutions and their channels. Ask the sponsor bank or payment provider how it exposes CoP to business clients: as an API, a file check or only inside online banking. Access shapes the whole onboarding design, so settle it early in [connecting your product to Australian banks](/blog/bank-integration-platforms-australia).

### Does PayTo replace direct debit today?

Not yet. The RBA's March 2026 update says PayTo has yet to prove itself as a direct debit replacement, and most account-based pull payments still run on BECS. Offer PayTo for new funding agreements, and keep direct debit available until your client's bank and customers are ready.

### Does a "no match" result stop the payment?

No. CoP is advisory, so the platform must decide. A sensible default is to hold the payee and ask for corrected details. The ABA notes that authorising a transfer to the wrong account "is usually at the customer's risk". Here the bank's customer may be the platform or its client, depending on how funds flow.

## What to do next

Before the build is scoped, get answers from the client and its bank:

- Which rail carries each leg: PayTo for funding, NPP for payouts, BECS as fallback?
- How is CoP exposed to the platform, and what happens on each result?
- What does the sponsor bank expect under its scam obligations from March 2027?
- Who works the exceptions queue, and how fast?

If the client runs cards as well as A2A, see [running card and A2A rails through one platform](/blog/payment-orchestration-card-a2a). For the product decision that comes before this one, read [adding payments and lending to a non-bank product](/blog/embedded-finance-payments-lending), or browse our wider work in [software for financial services](/industries/financial-services).

When a client's payout product needs building rather than just scoping, Palxi joins advisors early and builds it with them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against Australian Payments Plus, ABA, RBA and Federal Register of Legislation sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, "[Sydney Harbour Bridge Afternoon](https://commons.wikimedia.org/w/index.php?curid=2240869)" by WikiWookie, [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/), cropped. Banknote microprint, "[_D7K3715](https://www.flickr.com/photos/41353201@N07/6148930087)" by DJ-Dwayne, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Payroll door, "[Payroll](https://www.flickr.com/photos/57868312@N00/16016747503)" by Matt From London, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
