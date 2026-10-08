---
title: "CPS 230: what APRA now expects of your technology vendors"
description: "CPS 230 in engineering terms: critical operations, tolerance levels, vendor contracts, fourth parties and the APRA notification clock, with what to check now."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "cps-230-technology-vendors"
canonical: "https://palxi.com.au/blog/cps-230-technology-vendors"
site_name: "Palxi"
kicker: "Regulatory compliance"
coverImage: "hero.jpg"
coverImageAlt: "Exterior of a large concrete data centre building behind a security fence"
og_image_alt: "Exterior of a large concrete data centre building behind a security fence"
tags: ["cps 230", "operational resilience", "apra", "third-party risk", "financial services"]
lang: "en-AU"
---

# CPS 230: what APRA now expects of your technology vendors

On 1 July 2026, the transition period came to an end. Any third-party service contract that an Australian financial institution had entered into prior to the commencement of Prudential Standard CPS 230 was required to meet the standard in full, either upon contract renewal or from that date, whichever occurred first ([APRA](https://www.apra.gov.au/news-and-publications/apra-provides-update-implementation-new-operational-risk-standard), April 2023).

This requirement brings every critical technology supplier into direct regulatory focus: from core banking accounting engines and payment gateways to major international cloud hosting providers. Furthermore, when the Australian Prudential Regulation Authority (APRA) finalised targeted amendments in April 2026, regulatory carve-outs were granted only to public exchanges, payment system operators, and central banks. Commercial cloud and information technology suppliers received no exemptions.

For directors, risk committees, and advisors overseeing Australian banks, insurers, or superannuation funds, operational resilience is no longer an abstract legal policy. It is a practical engineering requirement. 

This guide explains what APRA expects under CPS 230 in plain terms, how operational limits translate into software controls, and what practical deliverables technology providers must supply.

## What CPS 230 is, briefly

Prudential Standard CPS 230 is APRA's regulatory framework governing operational risk management and business resilience. Finalised in July 2023, the standard officially took effect on 1 July 2025 ([APRA](https://www.apra.gov.au/news-and-publications/apras-new-prudential-standard-operational-risk-management-comes-force), 1 July 2025). It legally binds Authorised Deposit-taking Institutions (commercial banks and mutual credit unions), general insurers, life insurers, private health insurers, and registrable superannuation entity trustees.

CPS 230 replaced several older standards, including CPS 231 (governing outsourcing) and CPS 232 (governing business continuity) ([APRA Prudential Handbook](https://handbook.apra.gov.au/standard/cps-230-superseded)). Unifying these separate rules was deliberate: previously, managing third-party suppliers and preparing disaster recovery plans were handled by different departments. CPS 230 combines them into a single fundamental test: can your organisation keep essential customer services running reliably during a disruption, regardless of which external vendors supply the technology?

Mid-sized and smaller institutions received a 12-month extension for business continuity and disaster scenario testing, bringing their obligations into full effect on 1 July 2026 ([APRA](https://www.apra.gov.au/news-and-publications/apra-finalises-cross-industry-guidance-operational-resilience), June 2024).

Across the industry, institutions that treated CPS 230 merely as a paperwork exercise are now discovering practical gaps in their software monitoring and supplier agreements. Resolving those gaps requires structured software engineering.

## Three ideas that turn into engineering work

CPS 230 is structured around three foundational concepts, each translating directly into software architecture:

![Rows of server racks with blue status lights in a data centre](server-racks.jpg)

*A critical operation rarely runs in a single physical location; it depends on distributed networks, cloud regions, and external suppliers.*

### Critical operations

APRA defines a critical operation as any process or service that, if disrupted beyond approved tolerances, would cause material adverse harm to customers or threaten the organisation's role in the Australian financial system ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)).

Certain operations are deemed critical by default:

- **For banks and credit unions:** Processing customer payments, accepting and servicing retail deposits, clearing transactions, and asset custody.
- **For insurance companies:** Managing policyholder claims and emergency assistance.
- **For superannuation trustees:** Investment fund administration, unit pricing, and member pension payments.

Every institution is also required to classify two operational areas as critical: handling customer enquiries, and "the systems and infrastructure needed to support critical operations". This means the customer mobile app, the underlying accounting database, and the identity verification services connected to them are all covered by the standard.

### Tolerance levels

For every critical operation, the organisation's board of directors must formally approve three operational boundaries:

| CPS 230 tolerance boundary | What it means for software systems | Practical audit evidence required |
|---|---|---|
| Maximum period of disruption | The maximum tolerable downtime before customer harm occurs (Recovery Time Objective) | Documented system failover drill records and automated recovery test logs |
| Maximum extent of data loss | The maximum allowable data gap between live records and backups (Recovery Point Objective) | Database restoration test logs and continuous database replication monitoring |
| Minimum service levels under degraded arrangements | A functional backup mode that keeps services running when primary systems fail | Documented operational procedures and verified read-only or offline transaction processing |

The third requirement — maintaining a functional degraded mode — is frequently neglected. While many organisations have theoretical recovery targets written in policy manuals, far fewer have built software backup routines that staff have actually tested under operational conditions.

### Material service providers

A material service provider is any external supplier that an organisation relies upon to deliver a critical operation, or whose unexpected failure would expose the business to significant operational disruption. APRA's default classification includes suppliers providing "risk management, core technology services and internal audit" ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)).

This default classification has immediate practical implications. If an institution uses an external software vendor for its core banking or customer ledger, that supplier is deemed material under Australian law. Regulated entities must maintain a formal register of these providers and submit it to APRA annually, with initial registers submitted on 1 October 2025 ([APRA](https://www.apra.gov.au/news-and-publications/apra-releases-material-service-provider-register-template)). Technical cybersecurity controls for these systems are governed by a companion standard, explored in our guide on [boardroom questions for APRA CPS 234](/blog/apra-cps-234-board-questions).

## Why cloud and IT vendors got no exemption

In April 2026, APRA published targeted amendments providing specific exemptions for seven institutional counterparty categories, including government departments, financial market regulators, the Reserve Bank, licensed stock exchanges, and clearing houses ([APRA](https://www.apra.gov.au/news-and-publications/apra-finalises-targeted-amendments-cps-230-operational-risk-management), 30 April 2026).

During public consultations, several industry submissions requested that APRA extend these exemptions to major international cloud platforms and software vendors, citing the difficulty of negotiating custom contract terms with multinational technology corporations. 

APRA firmly declined. The regulator reaffirmed that exemptions are strictly "reserved for types of provider where there is a universal contract gap and inability to negotiate bespoke terms" ([APRA, final amendments response](https://www.apra.gov.au/news-and-publications/final-targeted-amendments-cps-230-operational-risk-management), April 2026). While acknowledging the commercial challenges of negotiating with global tech giants, APRA made clear that Australian financial institutions remain responsible for securing adequate contractual protections.

Systemic concentration risk is the primary concern for regulators. In its March 2026 Financial Stability Review, the Reserve Bank of Australia emphasized that "Some of the largest regulated entities have around 150 service providers supporting critical operations, with many providers used by multiple entities, if not the whole industry" ([RBA](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026). APRA Member Therese McCarthy Hockey cautioned the customer-owned banking sector that heavy reliance on a narrow group of shared software providers creates vulnerabilities that must be actively managed ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), 17 March 2026).

In its 2026-27 Corporate Plan, APRA confirmed it is expanding data collection on material service providers to monitor shared industry dependencies ([APRA Corporate Plan 2026-27](https://www.apra.gov.au/apra-corporate-plan-2026-27/our-strategic-objectives)).

## The vendor contract, clause by clause

![Close-up of a hand signing a printed contract with a fountain pen](contract-signing.jpg)

*Many commercial contracts now subject to CPS 230 were signed years before the standard was drafted.*

Under CPS 230, agreements with material service providers must include formal legal protections. Reviewing standard vendor agreements against these mandatory clauses reveals common gaps:

| CPS 230 contractual requirement | What to look for in the agreement | Common contractual gaps |
|---|---|---|
| Service levels and performance metrics | Are Service Level Agreements (SLAs) aligned with your board's approved tolerances? | Vendor uptime measured across a full month, while board tolerance is measured in hours |
| Data ownership and export rights | Can your organisation export all customer records in an open format upon contract conclusion? | Data export limited to pre-formatted summary PDF reports rather than raw database files |
| Audit inspection rights | Do your internal auditors, external specialists, and APRA have the right to inspect operations? | Vendor restricts audit access to standard, pre-packaged SOC 2 reports |
| Liability and indemnification | Who absorbs financial loss if a vendor system outage halts your critical operations? | Vendor liability strictly capped at a few months of software subscription fees |
| Sub-contractor management | Must the vendor notify you of material sub-contractors and remain liable for their performance? | Sub-contractor lists hosted on public web pages that change without direct notification |
| Unforeseen disruption clauses | What events qualify as unforeseen disruptions (force majeure), and what continuity plans exist? | Vendor contract treats third-party cyber attacks as force majeure events that excuse downtime |
| Orderly contract termination | Does the contract provide a structured transition period to migrate to an alternative provider? | Termination for convenience permitted only at annual renewal dates |
| Direct APRA access | Does the contract grant APRA the right to review documentation and conduct on-site inspections? | Standard overseas template contracts completely omit APRA inspection rights |

The audit clause requires special care. While obtaining an independent SOC 2 audit report is valuable, a SOC 2 report reflects an audit designed around the vendor's chosen scope. It does not replace direct inspection rights or provide APRA with supervisory access, as discussed in [evaluating SOC 2 reports for buyers](/blog/soc-2-for-buyers).

## The notification clock

CPS 230 introduces strict statutory deadlines for notifying APRA when operational disruptions or material contract changes occur:

| Operational event | Statutory deadline to notify APRA |
|---|---|
| Entering into, or significantly altering, a material offshoring arrangement | Prior to execution |
| A critical operation suffers a disruption exceeding approved tolerance levels | As soon as possible, and no later than 24 hours |
| An operational risk incident occurs with material financial or operational impact | No later than 72 hours |
| Entering into or materially amending an agreement supporting a critical operation | Within 20 business days |
| Submitting the annual register of material service providers | Annually |

The 24-hour disruption notification presents the most demanding technical challenge.

Under the standard, an entity must notify APRA "as soon as possible, and not later than 24 hours after" a critical operation breaches its approved tolerance ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). A broader incident that materially impacts operational capability carries a 72-hour notification requirement.

Consider the operational discipline this requires: within 24 hours, the organisation must detect the incident, assess which critical operations are affected, confirm that board tolerance limits have been breached, and submit a formal regulatory notification. Standard server monitoring tools that merely check whether a computer is powered on cannot answer these questions. Systems require operational monitoring focused on customer outcomes — verifying whether everyday Australians can successfully log in, check balances, and execute payments.

The same discipline applies to software changes. Signing a new contract or substantially amending an agreement supporting a critical operation requires notifying APRA within 20 business days. For offshoring arrangements, notification must occur before contracts are finalised. A software team that switches an overseas cloud hosting region without governance oversight can inadvertently cause a regulatory breach.

The standard also requires an annual business continuity exercise covering all critical operations, accompanied by scenario stress testing of severe operational disruptions ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)).

## Fourth parties and offshoring

CPS 230 requires financial institutions to manage risks arising from "fourth parties" — the sub-contractors and secondary suppliers that your material providers rely upon to deliver services ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). 

For example, your core banking software provider may host its platform on a third-party global cloud network, use an overseas development centre for technical support, and connect to an independent identity verification engine. Each of those external suppliers is a fourth party.

The worldwide CrowdStrike incident in July 2024 illustrated how vulnerabilities deep within software supply chains can cascade across an economy. A flawed software update from a single cybersecurity supplier affected roughly 8.5 million Windows computers globally ([Microsoft](https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/), July 2024). While representing less than 1 per cent of all computers, those systems supported critical infrastructure, grounding flights, halting retail checkouts, and disrupting hospital operations. For a financial institution, supply chain disruptions arrive through vendors with whom the bank has no direct commercial agreement.

Offshoring carries strict regulatory triggers. Under CPS 230, a material offshoring arrangement is any material service delivered outside Australia, or where customer data or operational personnel reside overseas, even if the primary vendor is an Australian company. Moving a customer support desk or secondary data backup region overseas constitutes an offshoring change requiring prior notice to APRA.

## What a build team should hand over

When an engineering team builds, updates, or manages software supporting a critical operation, compliance depends on the technical deliverables supplied. Regulated organisations should require:

1. **A comprehensive dependency blueprint:** An architectural map detailing all third-party software libraries, external APIs, and fourth-party hosting services supporting the system.
2. **Monitoring aligned with board tolerances:** Automated alerting configured to trigger before a disruption limit is reached, giving staff time to intervene.
3. **Verified disaster recovery records:** Documented database restoration logs and system failover drill results, stamped with dates and verification sign-offs.
4. **Tested degraded operating procedures:** Documented backup workflows that allow staff to process transactions manually or operate in read-only mode during an outage.
5. **A structured vendor exit plan:** Detailed technical documentation explaining how customer data and operational records can be cleanly extracted and migrated to an alternative provider.
6. **A change register for sub-contractors and cloud regions:** Ensuring compliance teams receive prompt notification whenever hosting regions or third-party components change.

Capturing this documentation during development is far faster and more cost-effective than attempting to reconstruct records for an auditor after an incident occurs.

## CPS 230 next to CPS 234, DORA and the UK regime

CPS 230 operates alongside APRA's Information Security Standard, CPS 234, which has governed cybersecurity and data protection since July 2019 ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)). In practical terms, CPS 234 evaluates whether sensitive customer data is protected against cyber intrusion, while CPS 230 evaluates whether critical banking operations can continue functioning during disruptions. A major ransomware incident touches both standards simultaneously.

This framework aligns with international regulatory standards. In the European Union, the Digital Operational Resilience Act (DORA) has applied since 17 January 2025, establishing comparable requirements for third-party technology risk ([EUR-Lex, Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)). Similarly, the United Kingdom's operational resilience framework required regulated financial firms to operate within established impact tolerances by 31 March 2025 ([Bank of England, SS1/21](https://www.bankofengland.co.uk/prudential-regulation/publication/2021/march/operational-resilience-impact-tolerances-for-important-business-services-ss)). Multinational technology suppliers serving European or British institutions are often well prepared to provide the required audit evidence.

## Common questions

### Does CPS 230 apply directly to independent software providers?

No. CPS 230 legally binds APRA-regulated financial institutions. However, it affects software providers through commercial contracts, mandatory supplier registers, and APRA's statutory inspection powers. An independent software provider that cannot satisfy these contractual protections will find it increasingly difficult to partner with Australian financial institutions.

### Is an ISO 27001 certificate or SOC 2 report sufficient to satisfy CPS 230?

While independent security certifications provide valuable assurance, they do not satisfy CPS 230 on their own. Certifications evaluate historical internal controls; they do not establish your board's approved tolerance levels, map your critical operations, or grant APRA statutory audit access. We review how to evaluate security credentials in our guide on [technical due diligence on software development partners](/blog/technical-due-diligence-build-team).

### What should an institution do if a major technology provider refuses bespoke contract terms?

An institution cannot simply ignore contractual gaps. APRA specifically evaluated the difficulty of negotiating with multinational cloud providers and deliberately maintained its standards. Practical approaches include negotiating tailored addenda, implementing internal software controls to reduce reliance on the vendor, or developing clear exit plans to migrate to alternative providers if necessary.

## What to do this quarter

Select one critical operation within your business and map every supporting dependency down to fourth-party providers:

- Would your current monitoring systems alert management within hours if an essential customer service fell outside board-approved tolerances?
- Does every material technology contract include data export guarantees, audit access, and clear liability protections?
- Has your team practically tested its system recovery and exit plans, or do they exist only on paper?

This practical evaluation highlights immediate operational priorities. To learn more about modernising financial infrastructure, explore our guides on [software for financial services](/industries/financial-services) and [modernising legacy core banking systems](/blog/legacy-core-banking-modernisation).

When your organisation needs experienced Australian software engineers to design, build, and maintain resilient, CPS 230-compliant financial technology, Palxi collaborates closely with your executive and compliance teams. [Speak with our team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from APRA, the Reserve Bank of Australia, and Microsoft on 27 September 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general factual information and does not constitute legal or regulatory advice. Please consult your compliance professionals or legal counsel regarding your specific statutory obligations.*

*Photos: cover, "CAMPUS - Military Data Center" by Kecko, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Server racks, "NOIRLab HQ Server Racks" by NOIRLab/NSF/AURA/T. Slovinský, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), cropped. Contract signing, [rawpixel](https://www.rawpixel.com/image/5904897/photo-image-public-domain-hand-person), CC0.*
