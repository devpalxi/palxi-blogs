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

On 1 July 2026 the grace period ran out. Any service agreement an APRA-regulated entity signed before CPS 230 started now has to meet the standard, either at its next renewal or from that date, whichever came first ([APRA](https://www.apra.gov.au/news-and-publications/apra-provides-update-implementation-new-operational-risk-standard), April 2023).

That puts every material technology arrangement in scope, from the core banking platform to the cloud host. And when APRA finalised its targeted amendments in April 2026, the relief went to exchanges, payment system operators and central banks. Cloud and IT providers got none.

If you advise a bank, insurer or super trustee, this is now a technology question as much as a compliance one. This article sets out what CPS 230 asks for, in the terms an engineering team works in.

> **The short version**
>
> - CPS 230 has applied since 1 July 2025. Pre-existing service contracts had to comply by their next renewal or 1 July 2026, whichever came first.
> - "Core technology services" sit on APRA's default list of material service providers for every regulated entity.
> - Tolerance levels (maximum outage, maximum data loss, minimum service) are engineering targets. If your systems can't measure them, you can't report against them.
> - A disruption to a critical operation outside tolerance has to reach APRA within 24 hours.
> - The April 2026 amendments gave no contractual exemptions to IT, cloud or communications providers.

## What CPS 230 is, briefly

CPS 230 is APRA's prudential standard on operational risk management, and the centre of its approach to operational resilience. APRA finalised it in July 2023 and it came into force on 1 July 2025 ([APRA](https://www.apra.gov.au/news-and-publications/apras-new-prudential-standard-operational-risk-management-comes-force), 1 July 2025). It applies to authorised deposit-taking institutions, general and life insurers, private health insurers and superannuation trustees.

It replaced five older standards, including CPS 231 on outsourcing and CPS 232 on business continuity ([APRA Prudential Handbook](https://handbook.apra.gov.au/standard/cps-230-superseded)). That merger is the point. Outsourcing and continuity used to be separate files, often owned by separate teams. CPS 230 treats them as one question: can you keep your critical operations running, whoever runs the pieces?

Smaller entities (non-SFIs) received a 12-month extension on the business continuity and scenario analysis parts, which also started applying on 1 July 2026 ([APRA](https://www.apra.gov.au/news-and-publications/apra-finalises-cross-industry-guidance-operational-resilience), June 2024). So for the many non-SFIs, 2026 is when the whole standard started to bite.

Our view: firms that treated CPS 230 as a policy-writing exercise in 2025 are now finding the gaps in their contracts and their monitoring. Those gaps are engineering problems.

## Three ideas that turn into engineering work

Most of CPS 230 rests on three definitions. Each one ends up as a requirement on systems and vendors.

![Rows of server racks with blue status lights in a data centre](server-racks.jpg)

*A critical operation rarely lives in one place. It runs across racks, regions and providers you may never see.*

### Critical operations

APRA defines these as processes that, if disrupted beyond tolerance, would have a material adverse impact on customers or on the entity's role in the financial system ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). Some must be classed as critical unless the entity can justify otherwise. For ADIs that means payments, deposit-taking and management, custody, settlements and clearing. For insurers it's claims processing. For super trustees, investment management and fund administration.

Every entity also gets two defaults: customer enquiries, and "the systems and infrastructure needed to support critical operations". So the payments platform counts. So does the identity service it calls and the database underneath it.

### Tolerance levels

For each critical operation, the entity sets three limits, and the board approves them:

| Tolerance level in CPS 230 | What it becomes in your stack | Evidence you need |
|---|---|---|
| Maximum period of disruption | A recovery time objective per service, tested | Failover test results, incident timelines |
| Maximum extent of data loss | A recovery point objective, backed by replication and backup design | Restore tests, replication lag monitoring |
| Minimum service levels under alternative arrangements | A degraded mode that still works, such as manual processing or a read-only view | Runbooks, exercise records |

The hard part is the third row. Plenty of platforms have an RTO on paper. Far fewer have a degraded mode someone has actually switched on.

### Material service providers

These are providers the entity relies on for a critical operation, or who expose it to material operational risk. APRA's default list for all entities includes "risk management, core technology services and internal audit" ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)).

That default matters more than any other line in the standard for a technology team. If your client runs on a vendor's core platform, that vendor is material unless someone can argue otherwise. The entity must keep a register of these providers and submit it to APRA every year. The first submission was due on 1 October 2025 ([APRA](https://www.apra.gov.au/news-and-publications/apra-releases-material-service-provider-register-template)). The security of those same systems falls under a different standard, and [CPS 234 has its own questions for the board](/blog/apra-cps-234-board-questions).

## Why cloud and IT vendors got no exemption

In April 2026 APRA finalised targeted amendments that exempt some material arrangements from specific contract requirements. The seven exempt categories are government agencies, regulators, central banks, licensed exchanges, clearing and settlement operators, payment system operators and financial messaging infrastructure ([APRA](https://www.apra.gov.au/news-and-publications/apra-finalises-targeted-amendments-cps-230-operational-risk-management), 30 April 2026).

Some submissions asked APRA to add IT and cloud infrastructure, communications providers and digital wallet providers. APRA declined. Its response says the exemptions are "reserved for types of provider where there is a universal contract gap and inability to negotiate bespoke terms" ([APRA, final amendments response](https://www.apra.gov.au/news-and-publications/final-targeted-amendments-cps-230-operational-risk-management), April 2026).

The same response records submissions describing "difficulties in negotiating bespoke terms and service level agreements", particularly with "large and international service providers". So the regulator knows the big platforms push back. It still expects the contract to meet the standard.

Concentration is what worries the regulators. The Reserve Bank's March 2026 Financial Stability Review put it plainly. "Some of the largest regulated entities have around 150 service providers supporting critical operations, with many providers used by multiple entities, if not the whole industry" ([RBA](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026). APRA Member Therese McCarthy Hockey told the customer-owned banking sector the same month that APRA's analysis shows it has "a heavy reliance on a small group of technology providers" ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), 17 March 2026).

APRA's latest corporate plan says it will "formalise our data collection for material service providers, to strengthen our oversight and supervision of common dependencies" ([APRA Corporate Plan 2026-27](https://www.apra.gov.au/apra-corporate-plan-2026-27/our-strategic-objectives)). Expect the register to get more scrutiny, not less.

## The vendor contract, clause by clause

![Close-up of a hand signing a printed contract with a fountain pen](contract-signing.jpg)

*Many contracts now caught by CPS 230 were signed years before the standard existed.*

A formal agreement with a material service provider has to cover a set list of matters ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). The right-hand column is our checklist of gaps worth looking for in standard vendor paper.

| CPS 230 requirement | What to check in the contract | Common gaps to look for |
|---|---|---|
| Service levels and specifications | Are SLAs tied to your tolerance levels? | Vendor SLA measured monthly, your tolerance measured in hours |
| Ownership and control of data | Can you get all your data back, in a usable format, on exit? | Export limited to reports, not raw records |
| Audit access | Can you, your auditors and APRA inspect? | Audit rights limited to a SOC 2 report |
| Liability and indemnity | Who carries the loss if the vendor causes an outage? | Liability capped at a few months of fees |
| Sub-contractors | Must the vendor notify you of material sub-contractors, and stay liable for them? | Sub-processors listed on a web page that changes without notice |
| Force majeure | What counts as force majeure, and what happens next? | Cyber incidents at the vendor treated as force majeure |
| Termination rights | Can you leave in an orderly way, with transition support? | Termination for convenience only at renewal |
| APRA access | Can APRA see documents and data, and visit the provider on site? | No APRA clause in offshore vendor templates |

The SOC 2 row is the one most often misread. A SOC 2 report is useful evidence, but it describes the vendor's controls against the vendor's chosen scope. It doesn't give your client, or APRA, the right to look further. [Read what a SOC 2 report does and doesn't tell a buyer](/blog/soc-2-for-buyers).

## The notification clock

CPS 230 sets specific deadlines for telling APRA about incidents and changes. Five of them land on the technology team sooner or later.

| What happens | When APRA must hear about it |
|---|---|
| Entering into a material offshoring arrangement, or a significant change to one | Before it happens |
| A critical operation is disrupted outside tolerance | Within 24 hours |
| An operational risk incident with a material impact | Within 72 hours |
| A new or materially changed agreement for a critical operation | Within 20 business days |
| Register of material service providers | Once a year |

In our view, the 24 hour rule is the one most monitoring setups aren't built for.

An entity must tell APRA "as soon as possible, and not later than 24 hours after" a disruption to a critical operation outside tolerance ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). A wider operational risk incident has a 72 hour limit if it is likely to have a material financial impact, or a material impact on the entity's ability to maintain its critical operations.

Think about what that assumes. The entity has to know a critical operation is disrupted, know which tolerance applies and know it has been breached, all inside a day. Uptime checks on individual servers won't tell you that. You need monitoring built around the critical operation itself, such as "can a customer make a payment", with thresholds that match the tolerance the board approved.

The same logic applies to change. APRA must be told within 20 business days after an entity enters into or materially changes an agreement for a service it relies on for a critical operation. For a material offshoring arrangement, APRA must be told before the entity enters into it, or before a significant change to it. A product team that swaps a vendor mid-sprint can put its client in breach without anyone noticing.

The standard also requires a BCP testing program that "covers all critical operations and includes an annual business continuity exercise", plus scenario analysis of severe operational risk events ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). Build those into the delivery plan, not the audit calendar.

## Fourth parties and offshoring

CPS 230 asks the entity to set out its approach to "managing the risks associated with any fourth parties that material service providers rely on to deliver a critical operation" ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). Your client's core banking vendor probably runs on a hyperscale cloud. It may use an offshore team for level 2 support. It may call a third-party fraud engine. Each of those is a fourth party.

The July 2024 CrowdStrike incident showed how a failure deep in the supply chain spreads. A faulty update from one security vendor affected about 8.5 million Windows devices, less than one per cent of all Windows machines ([Microsoft](https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/), July 2024). A small share of machines, but they sat underneath a great many services. For a bank, that kind of failure arrives through a provider's provider: a party it has never signed anything with.

Offshoring has its own trigger. Under CPS 230, a material offshoring arrangement is a material arrangement where the service is undertaken outside Australia, even if the provider is incorporated here. It also covers cases where "data or personnel relevant to the service being provided will be located offshore". So if an arrangement is already material, moving its support rota or backup region overseas can make it a material offshoring arrangement, with prior notice to APRA.

## What a build team should hand over

If a team builds or runs part of a critical operation for your client, CPS 230 compliance depends partly on what that team produces. Ask for these as deliverables, not as favours:

1. **A dependency map** for each critical operation the system touches, down to fourth parties, kept current.
2. **Service level objectives tied to tolerance levels**, with alerting that fires before a tolerance is breached, not after.
3. **Tested recovery evidence**: restore tests against the data loss tolerance, failover tests against the outage tolerance, with dates and results.
4. **A documented degraded mode**, and a record of the last time someone used it.
5. **An exit plan** that says how data and service move to another provider, and how long it takes.
6. **A change log for sub-contractors and hosting regions**, so the entity can meet its 20 business day and offshoring notices.

Our view: plan this evidence from the first sprint. Reconstructing it for an auditor later is slower and dearer. It's the same principle that applies to [ISO 27001 controls and audit readiness](/blog/iso-27001-certification-australia-cost).

## CPS 230 next to CPS 234, DORA and the UK regime

CPS 230 doesn't replace CPS 234. CPS 234 has governed information security since July 2019 and has its own 72 hour notice for material information security incidents ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)). In practice, CPS 234 asks whether your information assets are secure. CPS 230 asks whether your critical operations keep running. A single ransomware incident can trigger both.

The model will look familiar to anyone who has worked with European or British banks. The EU's Digital Operational Resilience Act has applied since 17 January 2025 and covers ICT third-party risk in similar terms ([EUR-Lex, Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)). The UK's impact tolerance regime required firms to be able to stay within tolerance by 31 March 2025 ([Bank of England, SS1/21](https://www.bankofengland.co.uk/prudential-regulation/publication/2021/march/operational-resilience-impact-tolerances-for-important-business-services-ss)). Vendors that already serve those markets may have much of the evidence ready.

## Common questions

### Does CPS 230 apply directly to technology vendors?

No. It applies to APRA-regulated entities. It reaches vendors through the contract, the register and APRA's right of access. In practice, a vendor that can't meet the contract terms will struggle to keep a regulated client.

### Is a SOC 2 report or ISO 27001 certificate enough?

It helps, but on its own it won't do. Both are evidence about the vendor's controls. Neither sets your client's tolerance levels, maps its critical operations or gives APRA access rights. Check certifications as part of [technical due diligence on a build team](/blog/technical-due-diligence-build-team), not instead of it.

### What if the vendor won't change its standard contract?

The entity can't simply accept the gap. The contract terms are requirements, and APRA declined to exempt large technology providers even after hearing how hard they are to negotiate with. The realistic options are to keep negotiating, put compensating controls in place while you do, or plan a move. Take legal advice on the position, and make sure the board knows where each contract stands.

## What to do this quarter

Pick one critical operation. Map everything it depends on, down to fourth parties. Then ask:

- Would monitoring tell you within hours that the operation is outside tolerance?
- Does each material contract cover every term in the table above?
- Has anyone actually tested the exit plan, or only written it?

That exercise usually shows where the real work is. For a wider view of the platforms involved, see [software for financial services](/industries/financial-services) or how to approach [modernising a legacy core without a big-bang rewrite](/blog/legacy-core-banking-modernisation).

If your client needs that work built rather than just identified, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against APRA, RBA and Microsoft sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, "CAMPUS - Military Data Center" by Kecko, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Server racks, "NOIRLab HQ Server Racks" by NOIRLab/NSF/AURA/T. Slovinský, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), cropped. Contract signing, [rawpixel](https://www.rawpixel.com/image/5904897/photo-image-public-domain-hand-person), CC0.*
