---
title: "APRA CPS 234: what a board should ask about security"
description: "APRA CPS 234 makes the board ultimately responsible for information security. The questions directors should put to management, and the evidence to expect."
date: "2026-09-27"
lastUpdated: "2026-09-29"
author: "Palxi Team"
slug: "apra-cps-234-board-questions"
canonical: "https://palxi.com.au/blog/apra-cps-234-board-questions"
site_name: "Palxi"
kicker: "Regulatory compliance"
coverImage: "hero.jpg"
coverImageAlt: "An empty boardroom with a long timber table, black chairs and floor-to-ceiling windows over a city"
og_image_alt: "An empty boardroom with a long timber table, black chairs and floor-to-ceiling windows over a city"
tags: ["apra cps 234", "cps 234 compliance", "information security", "board governance", "financial services"]
lang: "en-AU"
---

# APRA CPS 234: what a board should ask about security

On 10 June 2025, APRA wrote to the board chair of every superannuation trustee. Credential stuffing attacks had exposed weak login controls across the industry. Each trustee had to self-assess its information security controls by 31 August 2025 and name the accountable person for CPS 234 compliance ([APRA](https://www.apra.gov.au/news-and-publications/action-information-security-obligations-and-critical-authentication-controls), June 2025).

The letter went to the chair, not the security team. That is how APRA CPS 234 is built. The board of an APRA-regulated entity is "ultimately responsible for the information security of the entity" ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

If you advise a bank, insurer or super trustee, a director will one day ask you what they should be asking. Here are the questions, what a good answer sounds like, and the evidence behind it.

> **The short version**
>
> - CPS 234 binds APRA-regulated entities, and their boards are ultimately responsible. Vendors are reached through the entity's contracts, assessments and audits.
> - APRA has found board reporting on information security often "not fit-for-purpose", with little sign of boards challenging it.
> - Useful board questions follow the standard: assets, third parties, testing, recovery, access and incidents.
> - Material incidents must reach APRA within 72 hours. Material control weaknesses that can't be fixed in time must reach it within 10 business days.
> - APRA's 2026-27 plan asks for better board oversight of technology and cyber risk, and signals deeper supervision of cyber and AI risks.

## What APRA CPS 234 puts on the board

CPS 234 has been in force since 1 July 2019. It applies to ADIs, general and life insurers, friendly societies, private health insurers and super trustees. For a super trustee, "the Board" can mean a group of individual trustees. For a foreign ADI, it means the senior officer outside Australia.

The core duty is short. The board must make sure the entity "maintains information security in a manner commensurate with the size and extent of threats to its information assets" ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

The term information asset is broad: "information and information technology, including software, hardware and data (both soft and hard copy)". That covers the core platform. It also covers a spreadsheet of member details on a shared drive, and paper files in storage.

The standard doesn't bind technology vendors directly. It binds the entity, which then has duties about its vendors. It must classify assets "including those managed by related parties and third parties". It must assess each vendor's security capability and check the design of its controls. Vendors feel this through contract terms, questionnaires and audits. A group head must also apply the standard across the group, including to entities APRA doesn't regulate.

CPS 234 sits beside CPS 230. One asks whether information assets are secure. The other asks whether critical operations keep running, and our piece on [what CPS 230 expects of technology vendors](/blog/cps-230-technology-vendors) covers that side.

## What APRA found in board reporting

APRA has been blunt about boards. In 2021 it reported "little evidence of boards actively reviewing and challenging the information that senior management has provided on cyber topics". In many cases, management reporting to the board was "not fit-for-purpose". Some boards weren't receiving information on how effective their control testing was ([APRA](https://www.apra.gov.au/news-and-publications/improving-cyber-resilience-role-boards-have-play), November 2021).

It wants boards to have "the same level of confidence in reviewing and challenging information security issues as they do when governing other business issues".

Since then APRA has kept writing:

| When | What APRA did |
|---|---|
| July 2023 | Shared early results of independent CPS 234 assessments. More than 300 banks, insurers and super trustees were due to take part by the end of 2023. |
| June 2024 | Wrote to industry about backups |
| August 2024 | Wrote about configuration, privileged access and security testing |
| June 2025 | Wrote to every super trustee chair about login controls |
| August 2026 | Asked for better board oversight of cyber risk in its corporate plan |

The first round of those assessments found common gaps ([APRA](https://www.apra.gov.au/news-and-publications/cyber-security-stocktake-exposes-gaps), July 2023):

- incomplete identification and classification of critical and sensitive assets
- limited checks on third parties' security capability
- testing programs that were poorly defined or poorly run
- limited internal audit review of security controls
- late or inconsistent reporting of material incidents and control weaknesses to APRA

## Questions about assets and third parties

### Which information assets matter most?

Start with the register. A useful question: "Which of our information assets are critical or sensitive, and who decided?" CPS 234 requires both ratings. Criticality is the impact of losing availability. Sensitivity is the impact of losing confidentiality or integrity.

A good answer names a method and a current register, including assets that vendors hold. APRA's 2023 findings describe third-party assets that were "not fully identified and classified and, in some cases, not identified at all". If the register stops at the firewall, the board is looking at part of the picture.

### How do we know a vendor's controls work?

This is where CPS 234 compliance gets hardest, in our view. The controls sit in someone else's systems. In APRA's [2021 data collection](https://www.apra.gov.au/news-and-publications/improving-cyber-resilience-role-boards-have-play), 60 per cent of entities had not assessed all of their IT service providers' control testing. Some relied on "control self-assessments or surveys completed by their service providers" and took no steps to verify them independently.

Take a hypothetical mid-sized insurer whose claims platform is a vendor's SaaS product. Each year the vendor returns a questionnaire and a certificate. The insurer must still judge whether the vendor's testing suits the sensitivity of claims data. Internal audit may plan to rely on the vendor's assurance. If a breach could also hurt the insurer or its customers materially, internal audit must assess that assurance itself.

The question for directors then becomes: "For our most sensitive assets held by vendors, what independent evidence have we seen this year?" A certification is a starting point. Read [what a SOC 2 report does and doesn't tell a buyer](/blog/soc-2-for-buyers) before treating one as the answer. APRA also found critical vendor contracts with no duty to report material incidents or control weaknesses. Without that clause, the entity's own 72 hour clock is hard to meet.

## Testing that tells the board something

APRA suggested boards ask: "How much of the information security control environment is regularly tested?" That question still works. The follow-up matters more: "What failed, and what hasn't been fixed?"

CPS 234 requires a systematic testing program. Testing must be done by "appropriately skilled and functionally independent specialists". The program itself must be reviewed at least once a year, or after a material change. Failures that can't be fixed in good time must go to the board or senior management.

In August 2024 APRA named a pattern worth asking about. It had seen "repeated testing of the same limited set of IT assets" ([APRA](https://www.apra.gov.au/news-and-publications/additional-insights-common-cyber-resilience-weaknesses), August 2024). A penetration test of the public website every year, and nothing else, fits that description. Our guide to [penetration testing for financial platforms](/blog/penetration-testing-financial-platforms) covers scoping a program so coverage rotates.

A good testing report to the board, in our view, reads as a coverage map. It shows which critical assets were tested this year, by whom, and which gaps are open past their due date.

## Backups the board has seen restored

![Rows of tape cartridges stacked floor to ceiling inside an automated tape library](tape-library.jpg)

*A tape library holds copies of data. Whether those copies can bring a system back is a separate question.*

Recovery is easy to assume. It is hard to prove. In APRA's [2021 data collection](https://www.apra.gov.au/news-and-publications/improving-cyber-resilience-role-boards-have-play), more than one third of respondents had not tested backups for critical systems in the past 12 months. Twenty-two per cent had not tested their cyber incident response plans in that period.

APRA returned to backups in June 2024 ([APRA](https://www.apra.gov.au/news-and-publications/security-and-adequacy-backups), June 2024). It listed "insufficient segregation between production and backup environments" as a common problem. No single account or person should be able to change or delete both. APRA also flagged weak testing of recovery within tolerance levels.

For a board, two questions cover most of this:

- "When did we last restore a critical system from backup, how long did it take, and did it meet our tolerance?"
- "If an attacker held a production administrator account, could they also delete our backups?"

Our view: the second is the sharper test. It's an engineering question with a yes or no answer.

## Who holds the keys

![Keys left in the door locks of an equipment cabinet's service panel](keys-in-panel.jpg)

*Physical keys are easy to count. Privileged accounts in a cloud environment usually aren't.*

APRA has written about access control at least twice since 2024. Its August 2024 letter listed a "lack of a complete and accurate inventory of all privileged accounts, including both user and system accounts".

The June 2025 letter to super trustees went further. "At minimum, APRA expects entities to require MFA or equivalent controls for all high-risk activities" and for all administrative or privileged access. In super, that means actions like changing member details, withdrawals, rollovers and investment switches. Trustees that fell short had to notify APRA of a material control weakness, or explain why it wasn't material.

The letter was addressed to super trustees. In our view its logic carries to banks and insurers too. Useful board questions:

- "How many privileged accounts do we have, including service accounts, and who reviewed the list last?"
- "Which customer actions that move money or change contact details still work with a password alone?"

## Incidents and the notification clocks

CPS 234 requires plans for incidents the entity "considers could plausibly occur". The plans must cover escalation to the board, and the standard calls for an annual review and test. A board that has never seen that path tested can fairly ask to.

One incident can start several clocks at once, under different laws:

| Obligation | Who it binds | Deadline |
|---|---|---|
| CPS 234: material information security incident | APRA-regulated entity | As soon as possible, no later than 72 hours after becoming aware |
| CPS 234: material control weakness that can't be fixed in time | APRA-regulated entity | No later than 10 business days after becoming aware |
| CPS 230: disruption to a critical operation outside tolerance | APRA-regulated entity | No later than 24 hours |
| CPS 230: operational risk incident with material impact | APRA-regulated entity | No later than 72 hours |
| Privacy Act, Notifiable Data Breaches scheme | Organisations covered by the Privacy Act | Tell the OAIC and the people affected when serious harm is likely |
| Cyber Security Act 2024: ransomware or extortion payment | Businesses above a $3 million turnover threshold, among others | Within 72 hours of paying |

The CPS rows come from the standards themselves ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234); [APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). The ransomware rule has applied since 30 May 2025 ([Home Affairs](https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf)).

Breaches aren't rare in this sector. The OAIC received 1,205 data breach notifications in 2025, the most in any year since the scheme began in 2018. Financial services made 157 of them, second only to health ([OAIC](https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show), July 2026).

A fair question for the next meeting: "Who decides an incident is material, against what criteria, and has that decision ever been made inside 72 hours in an exercise?"

## The board's question list, with evidence

Here are the questions on one page. The right-hand column is what management should be able to produce, not just describe.

| Board question | A reassuring answer includes | Evidence to ask for |
|---|---|---|
| Which information assets are critical or sensitive? | A current register, including assets held by vendors | Register extract, classification criteria, last review date |
| How do we know vendor controls work? | Independent evidence for high-risk vendors | Assurance reports, audit findings, notice clauses |
| How much of our control environment is tested? | Coverage mapped to critical assets, by independent testers | Testing plan, coverage map, overdue findings list |
| Could we recover from ransomware? | Tested restores, backups walled off from production admins | Restore test results, backup access review |
| Who holds privileged access? | A complete inventory, MFA on privileged and high-risk actions | Account inventory, MFA coverage report |
| Would we meet the 72 hour notice? | Clear materiality criteria, tested escalation to the board | Exercise records, incident log, APRA notifications made |

Our view: if the evidence takes weeks to assemble, the controls probably aren't run the way the policy says. Evidence pulled straight from systems is easier to trust than evidence built for a meeting.

An auditor looks for the same discipline in [ISO 27001 certification](/blog/iso-27001-certification-australia-cost), so work done for one usually feeds the other.

## What changes in 2026-27

APRA's latest corporate plan says entities "should expect more frequent and deeper engagement from APRA on cyber and AI risks" ([APRA Corporate Plan 2026-27](https://www.apra.gov.au/apra-corporate-plan-2026-27/our-strategic-objectives), August 2026). APRA, ASIC and the Australian Signals Directorate met industry in June 2026 about the shifting threat.

APRA expects cyber controls to keep pace with threats, and it wants better board oversight of technology and cyber risk. The plan also cites ASD's advice to plan a move to post-quantum cryptography by the end of 2026. Work should start by the end of 2028.

That gives directors two fresh questions. "How are AI-enabled attacks changing our threat assumptions?" And: "Do we have a post-quantum cryptography plan, and does it start with our most critical assets?"

## Common questions

### Does CPS 234 apply to our software vendor?

Not directly. CPS 234 binds APRA-regulated entities. The entity must assess the vendor, check its control design and review its testing where it relies on it. A vendor that can't support those checks, or won't agree to incident notice terms, is hard for a regulated client to keep.

### Is an ISO 27001 certificate or SOC 2 report enough for CPS 234 compliance?

It helps, but it isn't the whole answer. Each is evidence about the vendor's controls, within a scope the vendor chose. The entity still has to judge whether that scope suits its own assets. Look at it as part of wider [technical due diligence on a build team](/blog/technical-due-diligence-build-team).

### Who is personally accountable for CPS 234?

The board carries ultimate responsibility under the standard. Separately, APRA's June 2025 letter asked each super trustee to name the accountable person for CPS 234 compliance under the Financial Accountability Regime. The [FAR](https://www.apra.gov.au/cross-industry/financial-accountability-regime-far) also covers banks and insurers, so expect a similar mapping there. Check your own map with legal advice.

## Before the next board meeting

Pick one critical information asset, ideally one a vendor manages. Then ask management to bring:

- its classification and the date it was last reviewed
- the latest independent evidence on the vendor's controls
- the last restore test and whether it met tolerance
- a list of privileged accounts that can reach it

If all four arrive fast and agree, the board pack is probably telling the truth. If they don't, the gaps tend to sit in systems and contracts. That's engineering work. For the platforms involved, see our overview of [software for financial services](/industries/financial-services).

When that work needs a team to build and evidence the controls, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against APRA, OAIC and Department of Home Affairs sources on 28 and 29 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["The boardroom on the 54th floor of TD Centre 2023"](https://commons.wikimedia.org/w/index.php?curid=141261386) by Canmenwalker, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), cropped. Tape library, ["The architecture of memory, inside the StorageTek tape library"](https://commons.wikimedia.org/w/index.php?curid=187267275) by Jorge Franganillo, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), cropped. Service panel keys, ["StorageTek tape library service panel"](https://commons.wikimedia.org/w/index.php?curid=17460155) by Derrick Coetzee, CC0, cropped.*
