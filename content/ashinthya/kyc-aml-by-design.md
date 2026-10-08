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

Since 31 March 2026, every Australian business regulated by the Australian Transaction Reports and Analysis Centre (AUSTRAC)—the federal agency responsible for detecting money laundering, organized crime, and terrorism financing—has had to comply with sweeping new ongoing customer due diligence rules ([AUSTRAC, transitional rules](https://www.austrac.gov.au/about-us/legislation/updates-legislation/amlctf-transitional-rules-2026), 2026). Critically, these new laws apply not just to new applicants walking through the door, but to every existing customer already on the books.

That legal reform transforms how financial applications and customer portals must be engineered. A banking app or payment system that merely checks a driver licence once at sign-up and then forgets the user can no longer meet Australian law. Today, customer screening, transaction monitoring, and legal audit trails must run continuously across the entire life of the customer relationship.

For directors, company executives, and advisors across Australian lending, payment, and wealth management firms, the key question is straightforward: are your anti-money laundering (AML) and counter-terrorism financing (CTF) protections built deeply into the foundations of your software, or are they an afterthought tacked onto the side?

## What changed in 2026

AUSTRAC describes these major reforms as an effort to simplify and modernise Australia's anti-money laundering framework ([AUSTRAC, about the reforms](https://www.austrac.gov.au/industry-and-business/about-amlctf-reforms/about-reforms)). For existing financial institutions, the reforms commenced on 31 March 2026, subject to specific transitional arrangements. Meanwhile, newly regulated "tranche two" professional sectors—including lawyers, accountants, conveyancers, and real estate professionals handling client funds—come under full regulation from 1 July 2026.

Digital currency and virtual asset businesses operate under staged timelines. Exchanging virtual assets for Australian currency or fiat money came under the new obligations on 31 March 2026. Additional duties covering crypto-to-crypto exchanges and asset custody were deferred to 1 July 2026 ([AUSTRAC, transitional rules](https://www.austrac.gov.au/about-us/legislation/updates-legislation/amlctf-transitional-rules-2026)).

Institutions enrolled with AUSTRAC prior to 30 March 2026 may temporarily maintain their legacy applicable customer identification procedures (ACIP) while progressively transitioning to the new customer due diligence (CDD) framework. This transition window extends until 31 March 2029. To utilise this relief, organisations were required to submit an implementation plan by 1 July 2026 specifying each customer category and its scheduled transition date.

During this multi-year shift, two onboarding pathways must run side-by-side. AUSTRAC requires that each customer class operate under one defined framework at any given time, allowing brief, practical overlaps while software updates roll out. A financial platform must therefore understand precisely which customer belongs to which tier, which verification rules apply, and when those rules update.

In May 2026, AUSTRAC clarified its supervisory approach, stating that it expects institutions to demonstrate genuine effort and concrete implementation progress during the 2026-27 financial year ([AUSTRAC](https://www.austrac.gov.au/news-and-media/article/update-regulator-statement-expectations-may-2026), 21 May 2026). While regulatory leniency offers temporary breathing room during system upgrades, any software platform built today will be in commercial operation long after this transition grace period concludes.

## The obligations, mapped to systems

In practical terms, each statutory obligation translates directly into an automated software feature, a protected database field, or an unalterable activity log. The following table maps AUSTRAC's core regulatory rules directly into software functionality:

| Legal obligation | What AUSTRAC requires | What it looks like in software |
|---|---|---|
| **Initial Customer Due Diligence (CDD)** | Collect and verify customer identity details scaled to money laundering risk | A clear, stepped onboarding flow backed by an automated verification engine |
| **Ongoing Customer Due Diligence** | Monitor customer account activity and verify transactions over the whole business relationship | Automated transaction monitoring, periodic data refreshes, and behavioural alert triggers |
| **Enhanced Customer Due Diligence** | Apply additional scrutiny to high-risk customers, foreign politicians, and complex transactions | Automated escalation workflows, mandatory source-of-funds verification, and senior executive sign-off steps |
| **Politically Exposed Person (PEP) screening** | Identify foreign, domestic, and international government officials and their close family members | Instant background screening at sign-up and automatic re-checking when global lists update |
| **Targeted Financial Sanctions (TFS)** | Check customers and beneficial owners against the Australian Department of Foreign Affairs and Trade (DFAT) Consolidated Sanctions List | Automated name matching with alternative spellings, temporary transaction holds, and review queues |
| **Suspicious Matter Reports (SMR)** | Submit reports to AUSTRAC within 3 business days for suspicious behaviour, or 24 hours for terrorism financing | Built-in compliance case management with immutable timestamps and automated deadline clocks |
| **Threshold Transaction Reports (TTR)** | Report physical cash transfers of $10,000 AUD or more within 10 business days | Automated cash-flagging rules and pre-formatted electronic reporting exports |
| **International Funds Transfer Instructions (IFTI)** | Report international money transfers within 10 business days | Cross-border transaction tags, complete sender-to-receiver payment records, and automated AUSTRAC data extracts |
| **Statutory Record Keeping** | Retain complete verification and transaction histories, typically for a minimum of 7 years | Tamper-proof event logs, automated document retention policies, and secure archival vaults |

A reliable approach begins with ongoing customer due diligence and record keeping. Both require an underlying database that preserves historical truth. Every change to a customer's registered address, risk rating, or identity check must be preserved with an exact timestamp and the reason for the update. A simple customer database that overwrites an old home address with a new one fails legal audit standards immediately.

## KYC verification at onboarding

![A hand holding a smartphone above a desk, the screen angled away from the camera](phone-onboarding.jpg)

*Opening an account on a smartphone is fast and convenient for customers, but every digital identity check leaves a formal legal record that must be retained for at least seven years.*

The initial design choice for customer identification is selecting the trusted identity source. In Australia, the primary government gateway is the Document Verification Service (DVS). The DVS connects directly to state and federal databases to verify whether personal details—such as a driver licence number, Medicare card, or passport—match official government records ([IDMatch](https://www.idmatch.gov.au/about-our-services)). The service returns a straightforward "match" or "no match" result without providing facial biometric images. More than 3,500 Australian organisations rely on the DVS today.

A successful DVS match confirms that a valid document exists, but it does not prove that the person holding the mobile phone is the genuine owner of that document. While the federal government's Face Verification Service remains restricted to law enforcement and government bodies, commercial financial applications pair DVS data checks with live selfie liveness checks to ensure physical authenticity.

Australia's broader digital identity landscape is expanding following the enactment of the *Digital ID Act 2024* in late 2024. The federal government has scheduled private sector access to the Australian Government Digital ID System by December 2026 ([Digital ID System](https://www.digitalidsystem.gov.au/what-is-digital-id/digital-id-act-2024)). Crucially, using a government digital identity remains entirely voluntary for citizens; financial institutions cannot refuse service to an Australian consumer who chooses traditional identity documents instead.

These operational realities establish four core engineering principles for customer onboarding:

- **Build flexible identity adapters.** Treat identity services as interchangeable modules. Whether an identity is confirmed via DVS, a government digital ID, a photo document scan, or an in-person manual review, the system should generate an identical, standardised verification certificate.
- **Assess customer risk before selecting onboarding steps.** Evaluate risk based on the specific product, customer category, geographic origin, and corporate ownership structure before asking for documents. AUSTRAC explicitly notes that low-risk retail customers should not face the heavy administrative burdens required for high-risk corporate accounts.
- **Maintain accessible manual pathways.** Some Australians—including older citizens, regional community members, or First Nations peoples—may not possess standard digital licences or passports. AUSTRAC provides detailed guidance on alternative identification methods for First Nations communities. An inflexible app with no manual review pathway simply locks out legitimate customers.
- **Record the verification outcome, not raw document images.** AUSTRAC rules do not require businesses to store photocopies of customer passports or driver licences indefinitely. You are required to document the specific details examined, the automated checks completed, and the validated result.

Minimising raw document storage is also vital for privacy protection. Hoarding unencrypted passport photographs on company servers creates an enormous cyber liability with zero regulatory benefit.

## Screening that keeps running

Running a single identity check on the day an account is opened does not satisfy Australian sanctions and politically exposed person regulations.

Under targeted financial sanctions, an Australian firm must verify that a customer, their ultimate beneficial owners, and any authorised signatories are not sanctioned individuals *before* providing any financial service. Furthermore, you must continually verify that they have not been added to sanctions lists during the ongoing business relationship ([AUSTRAC, TFS guidance](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/persons-designated-targeted-financial-sanctions-tfs)). Sanctions lists are maintained by DFAT, and providing funds to a sanctioned entity is a serious criminal offence carrying up to 10 years' imprisonment. Because names can be spelled differently across passports and languages, screening software must employ intelligent fuzzy matching to identify similar names.

Automated name matching inevitably produces potential matches that require human review. A well-designed compliance queue displays the candidate match, the percentage similarity score, the analyst's adjudication, and their written rationale.

Politically exposed persons (PEPs) require a similar operational approach. AUSTRAC classifies PEPs into three categories: foreign politicians, domestic Australian politicians, and senior officials of international organisations. Identifying a connection to a foreign politician automatically triggers mandatory enhanced customer due diligence ([AUSTRAC, enhanced CDD](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/enhanced-customer-due-diligence)). Being identified as a PEP does not imply any wrongdoing; it simply requires the institution to verify where the customer's wealth originated.

Enhanced due diligence is also legally required whenever a customer's transaction pattern suddenly becomes unusual or high-risk, or when an institution submits a suspicious matter report but keeps the account open. Automatically re-evaluating risk scores when customer circumstances change is the job of reliable software.

Screening should operate as an independent background service. New customer sign-ups trigger it instantly, scheduled automated jobs re-screen all active accounts whenever government watchlists update, and payment pipelines check transaction recipients before money leaves the building.

Compliance alert thresholds must be treated with engineering discipline. Every rule change and risk threshold should be recorded with an author, a justification, and an effective date. When tuning alert filters to reduce false alarms, always preserve historical logs demonstrating why the threshold was adjusted. Our companion guide on [fraud detection in payment systems](/blog/fraud-detection-payments) explores how transaction rules balance security and smooth customer experience.

## Case management and the reporting clock

Most system alerts resolve cleanly after an analyst verifies genuine customer activity. However, when an alert uncovers genuine financial crime, strict statutory clocks begin running immediately.

Under Australian law, if an organisation forms a suspicion of terrorism financing, it must submit a Suspicious Matter Report (SMR) to AUSTRAC within **24 hours**. For all other suspicions—such as suspected tax evasion, fraud, or money laundering—the report must be lodged within **3 business days** of the suspicion being formed ([AUSTRAC, SMR guidance](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/reporting-us/suspicious-matter-reports)).

The legal countdown begins at the exact moment a human compliance officer or automated team forms a reasonable suspicion. AUSTRAC's formal record-keeping guidance stresses that internal review logs, escalation notes, and investigation timestamps serve as formal legal evidence ([AUSTRAC, record keeping](https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/develop-your-amlctf-programs/record-keeping/record-keeping-overview)). An effective compliance management tool must provide:

1. An unalterable activity log recording when an alert was triggered and when reviews commenced.
2. A formal "Suspicion Formed" declaration field capturing the exact officer name, timestamp, and detailed reasoning.
3. An automated statutory deadline calculator that accounts for Australian public holidays, weekends, and the 24-hour terrorism financing rule.
4. One-click links connecting the case file directly to customer identification records, transaction ledgers, and previous filings.
5. Strict permission controls ensuring case notes are restricted to authorized personnel. Under Australian law, alerting a customer that they are being reported to AUSTRAC is a serious criminal offence known as "tipping off".

The consequences of systemic reporting failures in Australia are severe. In 2020, Westpac admitted that it had failed to report more than 19.5 million international money transfers amounting to over $11 billion AUD to AUSTRAC ([AUSTRAC](https://www.austrac.gov.au/news-and-media/media-release/austrac-and-westpac-agree-penalty), September 2020). AUSTRAC noted that such widespread non-compliance could have been avoided with sound software assurance and automated oversight. The Federal Court subsequently ordered Westpac to pay a historic **$1.3 billion AUD civil penalty** ([AUSTRAC](https://www.austrac.gov.au/news-and-media/media-release/westpac-ordered-pay-13-billion-penalty), October 2020).

Routine cash reporting rules require organisations to lodge a Threshold Transaction Report (TTR) for physical cash movements of $10,000 AUD or more within 10 business days. International Funds Transfer Instructions (IFTI) must also be reported within 10 business days, transitioning to comprehensive international value transfer rules by March 2029. Organisations deploying [account-to-account PayTo solutions](/blog/payto-a2a-payouts-australia) should map the full payment chain early to ensure ongoing reporting compliance.

## Records that last seven years

![Long aisle of metal shelving stacked with labelled archive boxes and binders](records-archive.jpg)

*AUSTRAC's definition of compliance records extends far beyond paper documents to encompass electronic event logs, database archives, and software rule configurations.*

AUSTRAC guidelines require regulated businesses to retain compliance records for a minimum of seven years. Crucially, the regulator's definition of a "record" includes raw database logs, risk calculations, and software configuration code. The automated algorithm that assigned a customer's initial risk rating five years ago may itself be subpoenaed as legal evidence.

Key principles for compliant data storage include:

- **Document the verification logic.** Records must prove what customer details were gathered, how they were validated, and the precise risk rationale supporting that level of scrutiny.
- **Maintain historical continuity.** When updating customer files during ongoing reviews, preserve earlier verification records whenever they help demonstrate unbroken compliance.
- **Preserve original data formats.** AUSTRAC expects electronic records to remain in their native format rather than being flattened into static PDF printouts.
- **Enforce strict access boundaries.** Sensitive identification records and suspicious matter filings must be cordoned off with multi-factor authentication and role-based permissions.

Every reporting entity in Australia is bound by the federal *Privacy Act 1988*, regardless of annual business turnover ([OAIC](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business)). Hoarding customer records indefinitely breaches privacy laws, while deleting them prematurely breaches anti-money laundering statutes. Building automated data retention and archival routines into your software architecture from day one prevents costly, manual compliance audits down the track.

## Buying AML software versus building the flow

Core data feeds—such as official DVS connections, global sanctions databases, and biometric facial liveness checks—are specialist utilities best purchased from established providers. The real engineering task lies in how these external services integrate into your everyday customer experience:

| Operational layer | Where to buy ready-made services | What to build and customise in-house |
|---|---|---|
| **Identity verification** | Direct DVS gateway access and facial liveness verification tools | The custom adapter converting multiple verification results into one cohesive, auditable record |
| **Sanctions & PEP screening** | Up-to-date global watchlists, politically exposed person registries, and adverse news feeds | The internal alert triage workflow, matching thresholds, and automated re-screening schedules |
| **Transaction monitoring** | Third-party transaction scoring models or rules engines | Custom monitoring rules tailored to your unique business model, customer segments, and transaction limits |
| **Case management** | Commercial case management tools, provided they support Australian statutory rules | Exact statutory SMR reporting clocks, deep links to customer accounts, and audit data export capabilities |
| **Audit & record keeping** | Secure, encrypted cloud data vaults with retention controls | The core event ledger tracking every status change, analyst decision, and system update |

A packaged software tool can easily check whether a customer's name appears on a watchlist. It cannot know that your custom customer portal lets a business client alter payment bank accounts without triggering a secondary verification check. Our detailed review of [compliance software: whether to build or buy for a regulated platform](/blog/compliance-software-build-or-buy) explores how to strike the right operational balance.

Across our engineering work at Palxi, compliance controls are built directly into the fabric of the software—from instant identity verification and ongoing screening to automated statutory reporting clocks. Designing these data structures before processing your first customer payment is vastly simpler and cheaper than trying to re-engineer an active platform under regulatory scrutiny.

If your organisation is supervised by APRA, third-party screening and identity providers must also satisfy strict vendor oversight requirements under [Prudential Standard CPS 230](/blog/cps-230-technology-vendors).

## Common questions

### Must customer identification occur before any transaction takes place?

Under specific conditions, Australian law allows limited flexibility. AUSTRAC's delayed verification provisions permit an institution to open an account or accept initial deposits before full verification is finished, provided the institution reasonably determines that the delay is necessary to avoid disrupting normal business and poses a minimal money laundering risk. For domestic retail accounts, complete identity verification must occur before funds can be withdrawn or transferred, and strictly within 20 business days of opening.

### Can an institution rely on another company's KYC verification?

Yes, under strictly governed circumstances. AUSTRAC permits formal customer due diligence reliance agreements between regulated reporting entities or qualified international institutions subject to equivalent standards. However, relying on a standalone commercial software vendor does not count as statutory reliance, because software vendors are not themselves regulated reporting entities. If your organisation enters an official reliance agreement with another licensed institution, you must independently evaluate their verification standards, document the review, and retain all records for seven years.

## Practical steps for this quarter

To assess your organisation's real-world compliance readiness, trace one customer's journey through your software platform, from their initial registration through to their hundredth payment:

- Can your systems clearly demonstrate which customer identification framework applied to that user, and why?
- Is that customer automatically re-screened whenever Australian or international sanctions lists are updated?
- Could your team prove, using system audit logs alone, the precise minute an initial alert transformed into a formed suspicion?
- Does your customer database preserve full historical audit trails, or does it overwrite previous addresses and phone numbers?
- Does your system enforce automated retention and secure deletion rules for each class of compliance document?

When the answers to these questions are uncertain, the remedy lies in disciplined system architecture. For institutions handling high-volume customer onboarding, explore our guide to [modern digital identity verification](/industries/identity), and for platforms handling modern digital payment tokens, see our analysis of [how Australian AUD stablecoin minting and redemption works](/blog/audd-stablecoin-minting-redemption).

When your organisation needs dependable, compliant financial software engineered from the ground up to satisfy Australian regulatory obligations, Palxi partners with leadership teams to deliver secure, resilient platforms with compliance built in. [Get in touch with our team](mailto:hello@palxi.com.au).

*Regulatory rules, reporting deadlines, and legal precedents were verified against official AUSTRAC, Attorney-General's Department, and OAIC publications on 28 September 2026. See [how we work](/#how-we-work).*

*This article provides general industry commentary and does not constitute formal legal or compliance advice. Always verify your specific obligations with qualified legal counsel or your appointed compliance officer.*

*Photos: cover, ["Australian passport"](https://commons.wikimedia.org/w/index.php?curid=151644543) by Evisa Express, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Phone, ["Iphone Smartphone"](https://stocksnap.io/photo/iphone-smartphone-ODN23L0AC9) by Adrianna Calvo, CC0. Archive, ["Binders boxes shelves large archive"](https://www.rawpixel.com/image/3298148/free-photo-image-warehouse-aisle-book), rawpixel, CC0, cropped.*
