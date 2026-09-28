---
title: "KYC verification and AML by design, not bolted on"
description: "How to build KYC verification, sanctions and PEP screening, case management, record keeping and AUSTRAC reporting into a financial product from day one."
date: "2026-09-27"
lastUpdated: "2026-09-28"
author: "Palxi Team"
slug: "kyc-aml-by-design"
canonical: "https://palxi.com.au/blog/kyc-aml-by-design"
site_name: "Palxi"
kicker: "Regulatory compliance"
coverImage: "hero.jpg"
coverImageAlt: "A navy blue Australian passport lying on a weathered wooden table"
og_image_alt: "A navy blue Australian passport lying on a weathered wooden table"
tags: ["kyc verification", "aml ctf compliance", "digital identity verification", "austrac", "aml software"]
lang: "en-AU"
---

# KYC verification and AML by design, not bolted on

Since 31 March 2026, every existing AUSTRAC reporting entity has had to apply the new ongoing customer due diligence (CDD) rules to all of its customers ([AUSTRAC, transitional rules](https://www.austrac.gov.au/about-us/legislation/updates-legislation/amlctf-transitional-rules-2026), 2026). That includes everyone already on the books.

That one line changes how KYC verification has to be built. A product that checks a licence at sign-up and then forgets the customer can't meet it. Monitoring, rescreening and the records behind them have to run for the whole relationship.

If you advise a lender, remitter or digital asset platform, ask whether AML/CTF compliance is designed into the flows, the data model and the audit trail.

> **The short version**
>
> - The AML/CTF Amendment Act 2024 changed obligations for current reporting entities from 31 March 2026. New sectors joined on 1 July 2026.
> - Ongoing CDD applies to all customers now. Old-style identification (ACIP) can continue for some customer classes until 31 March 2029.
> - Suspicious matter reports are due within 3 business days, or 24 hours for terrorism financing. Your case tool should be able to show when a matter was first identified and when suspicion formed.
> - Records are generally kept for 7 years, in their original format. AUSTRAC lists logs, databases and software code as possible records.
> - Private sector access to the Australian Government Digital ID System is due by December 2026. Design onboarding so a new identity source can slot in.

## What changed in 2026

AUSTRAC says the new laws "simplify and modernise the AML/CTF regime" ([AUSTRAC, about the reforms](https://www.austrac.gov.au/industry-and-business/about-amlctf-reforms/about-reforms)). For current reporting entities, the changes "started 31 March 2026 unless deferred under the transitional rules". Newly regulated businesses, including lawyers, accountants and real estate professionals, are regulated from 1 July 2026.

Digital asset businesses have split dates. Swapping virtual assets for money (item 50A) came under the new rules on 31 March 2026. Some duties for new virtual asset services, such as swapping one virtual asset for another and safekeeping, were deferred to 1 July 2026 ([AUSTRAC, transitional rules](https://www.austrac.gov.au/about-us/legislation/updates-legislation/amlctf-transitional-rules-2026)).

An entity enrolled on 30 March 2026 can keep using its applicable customer identification procedure (ACIP) instead of the new initial CDD framework. That period "runs from 31 March 2026 to 31 March 2029". To rely on it, the entity had to list by 1 July 2026 the customer classes that stay on ACIP and the date each one stops.

Two onboarding paths can therefore run side by side. AUSTRAC says each class must be on only one initial CDD approach at a time, though it accepts short, practical periods of overlap while systems change. Your system needs to know each customer's class, which rule set applies, and when that changes.

AUSTRAC's May 2026 statement expects current entities to either meet the reformed obligations or "have an implementation plan and be making progress on it". It also says: "we expect effort, not perfection, during FY26/27" ([AUSTRAC](https://www.austrac.gov.au/news-and-media/article/update-regulator-statement-expectations-may-2026), 21 May 2026). Our view: that allowance covers one financial year. A system built now will be in service long after it ends.

## The obligations, mapped to systems

Each obligation ends up as a feature, a data field or a log. The table maps AUSTRAC's guidance to product work.

| Obligation | What AUSTRAC requires | What it becomes in the product |
|---|---|---|
| Initial CDD | Collect and verify customer information, scaled to money laundering and terrorism financing (ML/TF) risk | Risk-based onboarding flow with a rules engine behind it |
| Ongoing CDD | Monitor customers and transactions for the whole relationship | Transaction monitoring, periodic reviews, KYC refresh triggers |
| Enhanced CDD | Extra measures for high-risk customers, foreign PEPs and some transaction types | Escalation path, source of funds capture, senior approval step |
| Politically exposed person (PEP) screening | Identify foreign, domestic and international organisation PEPs | Screening at onboarding and on list updates, with match review |
| Targeted financial sanctions (TFS) | Check customers and related parties against the DFAT Consolidated List before service and during it | Fuzzy name matching, a hold on funds, an escalation queue |
| Suspicious matter reports (SMR) | Report within 3 business days, or 24 hours for terrorism financing | Case management with timestamps and a reporting clock |
| Threshold transaction reports (TTR) | Report transfers of $10,000 or more in physical currency within 10 business days | Cash flag on transactions and a report builder |
| International funds transfer instructions (IFTI) | Report within 10 business days; international value transfer service (IVTS) reporting starts on or after 31 March 2029 | Cross-border flag, a transfer chain data model, report extraction |
| Record keeping | Keep records, usually for 7 years | Immutable event log, retention rules, deletion jobs |

One workable approach is to start with ongoing CDD and record keeping. Both depend on a data model that keeps history, so each change to a customer's details, risk rating or screening result is stored with its date and cause. A table that overwrites the customer's old address fails both.

## KYC verification at onboarding

![A hand holding a smartphone above a desk, the screen angled away from the camera](phone-onboarding.jpg)

*A sign-up on a phone still leaves a record that usually has to be kept for seven years.*

The first design choice in initial CDD is the identity source. The government option is the Document Verification Service. The DVS "checks whether biographic information such as name and date of birth on an Australian-issued identity document matches the original record" ([IDMatch](https://www.idmatch.gov.au/about-our-services)). Usually the answer is simply "yes" or "no", and it doesn't check facial images. More than 3,500 organisations use it.

A DVS yes doesn't prove the person holding the phone is the person on the document. The government's Face Verification Service is open only to government agencies for now, so a private sector product needs a commercial liveness and face match step.

Digital identity verification is the next shift. The Digital ID Act 2024 commenced on 30 November 2024. The government says the Australian Government Digital ID System will extend to "private entities by December 2026", and that "only public sector entities are eligible" for now ([Digital ID System](https://www.digitalidsystem.gov.au/what-is-digital-id/digital-id-act-2024)). Using a Digital ID is voluntary: an entity can't require a customer to create one.

That produces some design rules for the onboarding flow:

- **Treat identity sources as plug-ins.** DVS, a Digital ID, a document scan and a manual review path should all return the same verification record. Adding a new source then touches one adapter.
- **Decide risk before you decide steps.** Score the customer on product, channel, geography and ownership first. The score picks the verification path. AUSTRAC does not expect "the same level of controls and interventions for all customers irrespective of risk".
- **Keep a manual path.** Some customers lack standard ID. AUSTRAC has guidance on [alternative ID for First Nations peoples](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/initial-customer-due-diligence/alternative-id-first-nations-peoples). A flow with no fallback turns them away.
- **Record what you did, not the document.** AUSTRAC says the Act doesn't require copies of identification documents. You record the details used, the checks run and the result.

That last rule also helps with privacy. Storing passport images you don't need creates breach risk and no compliance benefit.

## Screening that keeps running

One check at sign-up meets neither the PEP nor the sanctions obligation.

For sanctions, you must establish whether the customer, its beneficial owners and anyone acting for it are designated "before you start to provide a designated service". You must also check whether any of them become designated during the relationship ([AUSTRAC, TFS guidance](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/persons-designated-targeted-financial-sanctions-tfs)). The source is DFAT's Consolidated List, and breaches can carry "up to 10 years' imprisonment". You also "may need to check alternative spellings and use fuzzy searching".

Fuzzy matching creates false positives, so screening needs a review queue. Each alert should show the list entry, the match score, the analyst's decision and the reason.

PEPs work the same way, with one difference. There are [three kinds of PEP](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/politically-exposed-persons-pep) (foreign, domestic and international organisation), and a foreign PEP link triggers enhanced CDD. That covers the customer, a beneficial owner, or anyone acting for the customer ([AUSTRAC, enhanced CDD](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/enhanced-customer-due-diligence)). A PEP is not assumed to be doing anything unlawful.

Enhanced CDD also applies when a customer's risk becomes high, when an SMR is required and service continues, and for unusually large or complex deals. Re-scoring customers when their behaviour or details change is a system job.

Keep screening as its own service. Onboarding calls it. A scheduled job rescreens customers when lists change, and transaction monitoring checks counterparties.

Monitoring rules need the same care. Treat each rule and threshold as versioned config with an owner and a release date. When you tune a rule to cut false alerts, keep the old version and the alert counts before and after. Our piece on [fraud detection in payments](/blog/fraud-detection-payments) covers the fraud side.

## Case management and the reporting clock

An alert can end in a note and a closed case. Some don't. When one becomes a suspicious matter report, a deadline applies. For terrorism financing, the report is due within "24 hours of forming the suspicion". Other suspicions allow "3 business days after the day you formed the suspicion" ([AUSTRAC, SMR guidance](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/reporting-us/suspicious-matter-reports)).

The clock runs from the moment suspicion forms. AUSTRAC's [record keeping guidance](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/develop-your-amlctf-programs/record-keeping/record-keeping-overview) lists "internal escalation records, case files or audit trails" as evidence, including when a matter was first identified and when a suspicion was formed. A case tool built for that needs:

1. A timestamp for each alert and status change, in an append-only log.
2. A distinct field for "suspicion formed", with who decided and why.
3. A due-date calculation that knows business days and the terrorism financing exception.
4. Links to the customer record, the transactions and prior SMR numbers.
5. Access to SMR records limited to authorised staff. AUSTRAC says insecure storage makes a tipping off breach more likely.

In 2020 Westpac admitted it failed to "properly report over 19.5 million International Funds Transfer Instructions (IFTIs) amounting to over $11 billion" to AUSTRAC ([AUSTRAC](https://www.austrac.gov.au/news-and-media/media-release/austrac-and-westpac-agree-penalty), 24 September 2020). In that release, AUSTRAC's CEO said breaches on that scale could have been avoided with better assurance and oversight processes. The Federal Court later ordered a [$1.3 billion penalty](https://www.austrac.gov.au/news-and-media/media-release/westpac-ordered-pay-13-billion-penalty) (21 October 2020).

A [threshold transaction report](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/reporting-us/threshold-transaction-reports) covers $10,000 or more in physical currency. [IFTI reports](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/reporting-us/international-funds-transfer-reports) are due within 10 business days, and the IVTS transition date "will be on or after 31 March 2029". If you're building [account-to-account payouts on PayTo](/blog/payto-a2a-payouts-australia), model the full transfer chain now, so the move to IVTS is a mapping change.

## Records that last seven years

![Long aisle of metal shelving stacked with labelled archive boxes and binders](records-archive.jpg)

*AUSTRAC's list of possible records includes logs, databases and software code.*

AUSTRAC's guidance says record keeping means "keeping records for a specific period, usually 7 years". Possible records include "logs and databases" and "software code", so the rules engine that decided a customer's risk level may itself be evidence.

Several details in that guidance shape the design:

- CDD records must show what information you collected, how you verified it, and the risk analysis that explains why that level of CDD applied.
- If you collect new customer information during ongoing CDD, you keep the previous CDD records too, where they're reasonably necessary to show compliance.
- Records stay in their original format. AUSTRAC's example: an Excel file stays a spreadsheet, not a PDF.
- Sensitive records, such as customer identification details and SMRs, should be stored securely with access limited to authorised staff.

Versioned customer records, a log that can't be edited and retention rules per record type all follow from this. The Privacy Act covers every reporting entity, whatever its turnover ([OAIC](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business)), so keeping data forever is its own problem. Our view: design retention as a scheduled job from the first release. Adding it later means auditing years of data by hand.

## Buying AML software versus building the flow

Document checks, sanctions and PEP data, and liveness checks are specialist services. The design work is in what sits around them. A split that holds up:

| Layer | Buy | Build or configure closely |
|---|---|---|
| Identity data | DVS access through a gateway, document and face checks | The adapter that turns every source into one verification record |
| Screening data | Sanctions and PEP lists, adverse media | Match review workflow, thresholds, rescreening schedule |
| Monitoring | A rules or scoring engine | Rules tuned to your products and customer risk levels |
| Case management | A case tool, if it fits your reporting | SMR clock, links to your data, audit export |
| Records | Storage with retention controls | The event model and what gets logged |

An AML software package can screen a name. It can't know that your product lets a customer add a new payee without a fresh check. For more on that choice, see [compliance software: build or buy for a regulated platform](/blog/compliance-software-build-or-buy).

In payout products we build, AML/CTF controls sit inside the product: ID verification, sanctions and PEP screening, record keeping and AUSTRAC reporting. Our view from that work: it is far cheaper to decide the event model and the case flow before the first payout than after.

If the client is APRA-regulated, its screening or identity provider may fall under [CPS 230 rules for technology vendors](/blog/cps-230-technology-vendors).

## Common questions

### Does KYC verification have to happen before the first transaction?

In limited cases, no. AUSTRAC's [delayed CDD guidance](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/initial-customer-due-diligence/delayed-initial-customer-due-diligence) lets some services start first, such as a financial institution opening an account or allowing deposits. You must first decide on reasonable grounds that the delay is "essential to avoid interrupting the ordinary course of business" and that there's "a low additional risk" of ML/TF. For account opening and services provided in Australia, you must then finish initial CDD before money, property or virtual assets are transferred or made available to the customer, and within 20 business days. Customer classes still on ACIP can't use these new provisions for services in Australia, but can keep the [old delayed verification rules](https://www.austrac.gov.au/about-us/legislation/updates-legislation/amlctf-transitional-rules-2026).

### Can we rely on another company's KYC?

Yes, in some cases. AUSTRAC's [reliance guidance](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/reliance-customer-identification-third-party/overview-reliance-customer-identification-third-party) allows it under an ongoing agreement or arrangement, or on a case-by-case basis. The third party must be a reporting entity or a foreign business regulated under laws that follow the Financial Action Task Force (FATF) standards. A KYC vendor doesn't qualify, because it isn't supervised under Australia's AML/CTF laws. If you rely on a CDD arrangement, you must assess whether the third party does CDD properly, record the results and keep them for 7 years ([AUSTRAC, record keeping](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/develop-your-amlctf-programs/record-keeping/record-keeping-overview)). Store the reliance record and its review dates with the customer.

## What to do this quarter

Trace one customer through one product, from sign-up to their hundredth transaction. Then check:

- Can you show which CDD rules (ACIP or the new framework) applied to that customer, and why?
- Is the customer rescreened when sanctions or PEP lists change?
- Could you prove, from logs alone, when an alert became a suspicion?
- Do your records keep history, or overwrite it?
- Is there a retention and deletion rule for each record type?

Where the answers are unclear, start with the data model. For identity-heavy products, see our [identity page](/industries/identity), and if the product touches tokenised money, read [how AUD stablecoin minting and redemption works](/blog/audd-stablecoin-minting-redemption).

If your client needs these controls built into the product rather than added at the end, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against AUSTRAC, Attorney-General's Department (IDMatch), Digital ID System and OAIC sources on 28 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Australian passport"](https://commons.wikimedia.org/w/index.php?curid=151644543) by Evisa Express, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Phone, ["Iphone Smartphone"](https://stocksnap.io/photo/iphone-smartphone-ODN23L0AC9) by Adrianna Calvo, CC0. Archive, ["Binders boxes shelves large archive"](https://www.rawpixel.com/image/3298148/free-photo-image-warehouse-aisle-book), rawpixel, CC0, cropped.*
