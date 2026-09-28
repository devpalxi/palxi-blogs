---
title: "SOC 2 compliance for buyers: reports, costs and what to ask"
description: "How to review a SOC 2 report as a buyer: Type 1 vs Type 2, scope, exceptions and carve-outs, what SOC 2 costs a vendor, and what APRA-regulated clients must check."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "soc-2-for-buyers"
canonical: "https://palxi.com.au/blog/soc-2-for-buyers"
site_name: "Palxi"
kicker: "Security assurance"
coverImage: "hero.jpg"
coverImageAlt: "Close-up of tall stacks of folded paper piled on top of each other"
og_image_alt: "Close-up of tall stacks of folded paper piled on top of each other"
tags: ["soc 2", "soc 2 type 2", "vendor due diligence", "cps 234", "financial services"]
lang: "en-AU"
---

# SOC 2 compliance for buyers: reports, costs and what to ask

In February 2026 the AICPA's own journal ran a warning about SOC 2 reports sold on speed. The chair of the AICPA's SOC 2 Working Group said practitioners were seeing signs that "'fast and easy' may come at the expense of quality and objectivity" ([Journal of Accountancy](https://www.journalofaccountancy.com/issues/2026/feb/promises-of-fast-and-easy-threaten-soc-credibility/), 1 February 2026).

That matters if you advise a bank or super fund on a vendor. Somewhere in the procurement file is a SOC 2 report, usually a long PDF released under a non-disclosure agreement. Someone has to decide what it proves. SOC 2 compliance is a phrase vendors use loosely, and the report behind it can be excellent or close to useless.

Below: what the report is, how to read one, what it costs a vendor, and what to ask before your client relies on it.

> **The short version**
>
> - A SOC 2 report is an attestation report from a CPA firm against the AICPA's Trust Services Criteria. It is not a certificate, and there is no pass mark.
> - A Type 2 report tests whether controls worked over a period. A Type 1 only looks at their design on one date.
> - The value sits in the detail: scope, period, exceptions, carved-out subservice providers and the controls left to the customer.
> - APRA's CPS 234 requires a regulated entity that relies on a third party's control testing to assess whether that testing is commensurate with the standard's own testing factors. A SOC 2 report is evidence for that assessment.
> - Report quality varies. In 2026 the AICPA told peer reviewers to look for SOC 2 reports that are near-identical from one client to the next.

## What is SOC 2, in plain terms

SOC 2 is a report on a service organisation's controls, prepared by an independent CPA under AICPA attestation standards. The AICPA describes the need it meets: customers and business partners "usually need information about the design, operation, and effectiveness of controls within the service organization's system" ([AICPA & CIMA, SOC 2 guide](https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy), October 2022).

The yardstick is the Trust Services Criteria. The AICPA's Assurance Services Executive Committee set these criteria "to evaluate and report on controls over the security, availability, processing integrity, confidentiality, or privacy of information and systems" ([AICPA & CIMA](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022)). The current version is the 2017 criteria with points of focus revised in 2022.

Security is the base layer. The criteria include a set of common criteria that apply to every category, and the vendor chooses which of the other four categories to add. A payments vendor might add availability and confidentiality. A vendor that calculates balances might add processing integrity.

Microsoft's documentation sets out the standards behind a SOC 2 Type 2 engagement. They are SSAE No. 18, including AT-C section 205 on examination engagements, the AICPA SOC 2 guide and the Trust Services Criteria ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-soc-2), updated October 2024). The auditor gives an opinion. Nobody "passes" SOC 2.

That difference shows up when a buyer compares it with ISO 27001:

| | SOC 2 | ISO 27001 |
|---|---|---|
| What you receive | A long report with the auditor's opinion, system description and test results | A certificate, plus the Statement of Applicability if you ask |
| Who issues it | A CPA firm under AICPA standards | A certification body |
| Outcome | An opinion, which can be unmodified or modified, with exceptions listed | Certified or not certified |
| Time covered | A point in time (Type 1) or a period (Type 2) | Certificate validity, kept up by surveillance audits |

If the vendor holds ISO 27001 instead, read [what ISO 27001 certification involves in Australia](/blog/iso-27001-certification-australia-cost).

## SOC 2 Type 1 vs Type 2

A Type 1 report looks at whether controls were suitably designed on a specific date. A SOC 2 Type 2 report adds a test of time. In Microsoft's words, it evaluates whether controls "were operating effectively over a specified time period" ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-soc-2)).

For a buyer, only the Type 2 tells you controls worked in practice. The auditor samples evidence across the period: access reviews, change tickets, backup logs, incident records.

Microsoft's Azure reports use a rolling 12-month audit period, with new reports issued twice a year and published about six weeks after the period ends. For the gap between reports, Microsoft issues bridge letters every quarter.

A bridge letter comes from the vendor's management, not the auditor. It carries the vendor's word that nothing material has changed, with no independent testing behind it.

Our view: a first Type 2 often covers a short window, commonly three to six months. That's acceptable for a young vendor. Anything shorter says almost nothing about how controls hold up through staff changes and releases. Ask when the next report will cover a full year.

## Why SOC 2 compliance matters to APRA-regulated clients

APRA doesn't require vendors to hold a SOC 2 report. CPS 234 binds the regulated entity, and reaches vendors through the entity's contracts and oversight.

![Dusk view down a street in Brisbane's CBD between tall office towers with lit windows](brisbane-cbd.jpg)

*Brisbane's CBD at dusk, seen from above.*

Two paragraphs of CPS 234 do the work. Paragraph 16 says that where a third party manages information assets, the entity "must assess the information security capability of that party". Paragraph 28 deals with testing. If the entity "is reliant on that party's information security control testing", it must assess whether the nature and frequency of that testing is commensurate with the factors in paragraph 27. They are the factors the entity applies to its own testing, such as changing threats, how critical and sensitive the asset is, and the impact of an incident ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

A SOC 2 Type 2 report is exactly that kind of third-party control testing. So when a client relies on one, CPS 234 expects someone at the client to have judged it.

APRA's practice guide lists "certifications, attestations, referrals and independent assurance assessments" as ways to form that view. It then adds that an entity "could also consider the scope, depth and independence of certifications, attestations and assurance provided and take steps to address any limitations identified" ([APRA, CPG 234](https://www.apra.gov.au/practice-guides/cpg-234)). Scope, depth and independence make a workable test for any SOC 2 report.

Core technology services are also on APRA's default list of material service providers under CPS 230. The formal agreement with such a provider must allow APRA access to documentation and data, and the right to an on-site visit ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). A SOC 2 report doesn't grant those rights. [What CPS 230 now expects of technology vendors](/blog/cps-230-technology-vendors) goes through the contract clauses, and the board-level view is in [the questions a board should ask under CPS 234](/blog/apra-cps-234-board-questions).

A vendor may offer an Australian assurance report under the AUASB's ASAE 3150 instead. The standard states that it "has been formulated for Australian public interest purposes and there is no equivalent International Standard on Assurance Engagements" ([AUASB, ASAE 3150](https://standards.auasb.gov.au/asae-3150-sep-2022), December 2022). Read it with the same questions, without assuming it maps onto the Trust Services Criteria.

## How to review a SOC 2 report

![Grey and black metal filing cabinets seen through a glass office door with a long handle](filing-cabinets.jpg)

*Filing cabinets behind a closed glass door.*

Start with the auditor's opinion, then work backwards to what it covers. Expect these parts:

| Section | What it contains | What to check |
|---|---|---|
| Auditor's opinion | The CPA firm's conclusion on the description and controls | Is the opinion modified? Which firm signed, and on what date? |
| Management's assertion | The vendor's own statement about its system | Does it match the opinion's scope and period? |
| System description | Services, infrastructure, people, data, boundaries | Is the product your client uses actually in scope? Which subservice providers are carved out? |
| Controls, tests and results | Each control, the auditor's test and any exceptions | How many exceptions, in which areas, and how serious? |
| Management responses | The vendor's comments on exceptions | Is there a fix with a date, or just an explanation? |
| Customer responsibilities | Controls the vendor assumes the customer runs | Can your client actually meet them? |

### Scope and period

Check the system description names the service your client buys, in the region it runs in. A report on the vendor's corporate IT tells you little about its payments API. Then check the dates. A report whose period ended 14 months ago is stale, however good it was.

### Exceptions

An exception means a test found a control that didn't operate as described. One missed access review in a sample of 25 is different from missing change approvals across a quarter. Read the management response next to each one. Microsoft notes that its management responses sit "towards the end of the SOC attestation report".

### Carve-outs and customer controls

If the vendor runs on a public cloud, its report may carve the hosting provider out of scope. The report then relies on that provider's own controls, which the auditor didn't test. Ask for the subservice provider's report too.

The customer responsibilities section is easy to skip and shouldn't be. It lists controls the vendor assumes its customers run, such as reviewing user access or protecting API keys. If your client doesn't do them, the report's conclusions may not hold for it.

## Signs of a thin report

The Journal of Accountancy piece gathered concerns from SOC practitioners. One described templated reports this way: "You can compare any five of their reports, and they're all exactly the same, with a different client logo on it". The same article warns that a rushed report "may rely too heavily on inquiry", with the examiner taking the client's word where testing was needed ([Journal of Accountancy](https://www.journalofaccountancy.com/issues/2026/feb/promises-of-fast-and-easy-threaten-soc-credibility/)).

In May 2026 the AICPA issued a peer reviewer alert on SOC 2 engagements that produce "identical reports, risk assessments, sample sizes, and testing procedures". It flags those as a risk of nonconforming engagements, and tells reviewers to look at "the reasonableness of SOC 2 engagement timelines" ([Journal of Accountancy](https://www.journalofaccountancy.com/issues/2026/may/aicpa-guides-peer-reviewers-to-address-soc-2-risks/), May 2026). The AICPA's SOC landing page also carries a notice that it is looking into allegations about a compliance vendor offering SOC services ([AICPA & CIMA](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services)).

Warning signs a buyer can spot without being an auditor:

- Control descriptions so generic they could apply to any company.
- A first Type 2 with no exceptions.
- Tests that mostly consist of asking management.
- A signing firm you can't find, or can't confirm as a licensed CPA firm.
- A system description that never names the product your client is buying.

None of these proves a report is bad, but each one is worth a follow-up question to the vendor.

## What SOC 2 costs a vendor

The vendor pays for its SOC 2. The cost still tells a buyer how much effort sits behind the report, and why a very cheap one deserves questions.

We have taken client products through SOC 2. The ranges below are our view from that work, meant for planning.

Assumptions: a vendor of 20 to 100 staff, one product on one public cloud, the security category plus availability and confidentiality, first year, a Type 2 with a six-month window. Figures are AUD, ex GST.

| Cost line | Our view of the range | What moves it |
|---|---|---|
| Readiness assessment | $10,000 to $30,000 | How much policy and evidence already exists |
| Compliance automation platform, per year | $10,000 to $40,000 | Staff count and number of integrations |
| Penetration test | $13,500 to $45,000 | Roles, endpoints, environments |
| Type 1 audit fee (if done first) | $20,000 to $45,000 | Scope and the audit firm's size |
| Type 2 audit fee | $30,000 to $80,000 | Categories in scope, period length, sample sizes |
| Internal engineering and management time | Often the largest line: part of several people's time for 6 to 12 months | Logging, access control and change management gaps |

The penetration test figure matches the ranges in [our guide to penetration testing for financial platforms](/blog/penetration-testing-financial-platforms). Our view: the hidden cost is engineering work to produce evidence. Access reviews and change approvals have to leave a trail every week of the period. Teams that build that trail into their pipelines from the start spend far less time chasing screenshots later.

## Questions to ask a vendor

Send these before the report arrives, so the answers come back with it:

1. Is this a Type 1 or Type 2 report, and what period does it cover?
2. Which products, environments and regions are in scope?
3. Which subservice providers are carved out, and can we see their reports?
4. How many exceptions did the auditor find, and what has been fixed since?
5. Which customer responsibilities does the report assume we meet?
6. Who signed the opinion, and how long did the examination take?
7. When will the next report be issued, and will you give us a bridge letter until then?
8. Will the contract let us, our auditors and APRA look further than the report?

The last question matters most for regulated clients. A report shows what the auditor tested. The contract decides what your client can check for itself. If you are vetting a delivery team rather than a SaaS product, fold these into a wider [technical due diligence review of the build team](/blog/technical-due-diligence-build-team).

## Common questions

### Is SOC 2 a certification?

No. SOC 2 is an attestation. A CPA firm issues an opinion on the vendor's description of its system and its controls, with test results. A vendor that calls itself "SOC 2 certified" means, at best, that it holds a recent report. Ask for the report itself.

### How long is a SOC 2 report valid?

The report doesn't carry an expiry date. It covers a fixed period, and buyers judge freshness from when that period ended. Microsoft, for example, issues new Azure reports twice a year, with bridge letters in between. Our view: treat a report whose period ended more than 12 months ago as out of date.

### Can a vendor publish its SOC 2 report?

SOC 2 reports describe a vendor's controls in detail, so they tend to be shared under NDA. AWS, for example, states that "An NDA is required to review the AWS SOC 1 and SOC 2 reports" and publishes a SOC 3 report as "a publicly available summary" ([AWS](https://aws.amazon.com/compliance/soc-faqs/)). A SOC 3 covers the same criteria in a short form that vendors can publish. It is useful for a first look, but it leaves out the test results a buyer needs.

## What to do next

Take the most important vendor on your client's list and ask for its latest SOC 2 report. Then:

- Confirm the product your client uses is in scope, for a recent period.
- List the exceptions, carve-outs and customer responsibilities on one page.
- Check the contract gives audit and APRA access beyond the report, and note any missing clause for the next renewal.
- Diary the date the next report is due.

That page becomes written evidence that someone at your client read the report. For more on the platforms and rules in play, see [software for financial services](/industries/financial-services), or read [how to choose a development partner for a regulated platform](/blog/choosing-software-development-partner-regulated).

If your client needs a product built ready for a SOC 2 examination, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against AICPA, Journal of Accountancy, APRA, AUASB, Microsoft and AWS sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, "Stack white papers", [rawpixel](https://www.rawpixel.com/image/6034572/photo-image-papers-public-domain-newspaper), CC0, cropped. Brisbane CBD, "[Brisbane CBD (Australia)](https://www.flickr.com/photos/8721758@N06/11261000363)" by Jorge Lascar, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Filing cabinets, "[Filing cabinets behind closed doors](https://www.flickr.com/photos/23089745@N03/4120847473)" by alex_ford, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
