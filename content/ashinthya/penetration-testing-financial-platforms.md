---
title: "Penetration testing in Australia: timing, scope and cost"
description: "Pen tests for Australian financial platforms: what CPS 234 and PCI DSS v4.0.1 expect, when to test, how to scope it, what it costs and how to act on the report."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "penetration-testing-financial-platforms"
canonical: "https://palxi.com.au/blog/penetration-testing-financial-platforms"
site_name: "Palxi"
kicker: "Regulatory compliance"
coverImage: "hero.jpg"
coverImageAlt: "A large round steel bank vault door standing open behind a metal safety rail"
og_image_alt: "A large round steel bank vault door standing open behind a metal safety rail"
tags: ["penetration testing", "vulnerability assessment", "cps 234", "pci dss", "financial services"]
lang: "en-AU"
---

# Penetration testing in Australia: timing, scope and cost

When APRA reviewed the first tranche of its CPS 234 assessments, control testing was one of six common gaps. APRA found that, in many cases, "the testing programs of entities are incomplete, inconsistent, lack independence and do not provide adequate assurance for management and the Board" ([APRA](https://www.apra.gov.au/news-and-publications/cyber-security-stocktake-exposes-gaps), 5 July 2023).

Breach figures sit alongside that finding. The OAIC received 1,205 data breach notifications in 2025, the highest since the scheme began in 2018, and financial services made 157 of them ([OAIC](https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show), July 2026).

That stocktake covered APRA-regulated entities (banks, insurers and super trustees). Where one of them relies on a third party's control testing, CPS 234 says it must assess whether that testing fits the risk. Our view: if you advise a regulated firm or run a platform one relies on, have a ready answer on pen testing: scope, dates, testers and fixes.

> **The short version**
>
> - CPS 234 requires a systematic testing program, run by appropriately skilled and functionally independent specialists, with the program reviewed at least annually.
> - A vulnerability assessment finds known weaknesses, and a penetration test tries to exploit them. Red team exercises check whether anyone notices.
> - If card data is in scope, PCI DSS v4.0.1 requires internal and external penetration tests at least every 12 months and after significant change.
> - Test before launch, after major change and at least once a year. Scope by attack surface: web app, API, mobile, cloud.
> - Our view: a focused web app and API test costs roughly $13,500 to $45,000 ex GST on the assumptions below, plus $1,500 to $7,500 for the retest.

## Pen test, vulnerability assessment and red team

These terms get used loosely, which makes quotes hard to compare until you know which one is on offer.

**Vulnerability assessments** are a systematic look for known weaknesses. They combine automated scanning with a person who reviews the results and removes false positives. The work is broad and fairly cheap, so you can run it often.

In a **penetration test**, a tester working within agreed limits tries to get past your controls. They chain small issues together, test business logic and show what an attacker could actually reach.

**Red team** exercises test the whole organisation. The target is a business outcome, such as reaching the payments database, and the question is whether your people and monitoring detect the attempt. Australia has a financial sector framework for this. The Council of Financial Regulators says its CORIE red team exercises "mimic the tactics, techniques and procedures (TTP's) of real-life adversaries" ([Council of Financial Regulators](https://www.cfr.gov.au/publications/policy-statements-and-other-reports/2022/revised-corie-framework-rollout/cyber-operational-resilience-intelligence-led-exercises-corie-framework-appendix-b.html), July 2022).

| | Vulnerability assessment | Penetration test | Red team |
|---|---|---|---|
| Question it answers | What known weaknesses do we have? | What can an attacker actually do with them? | Would we detect and stop a real attack? |
| Method | Mostly automated scans, human triage | Manual testing within a defined scope | Goal-based attack simulation, sometimes covert |
| Typical frequency | Monthly or quarterly, and continuously in CI | At least annually and after major change | Occasionally, for mature organisations |
| Main output | A ranked list of findings | Exploited paths with evidence and fixes | Detection and response gaps |
| Who it suits | Everyone | Any platform holding customer or payment data | Large regulated entities with a security team |

Our view: red teaming makes sense once there is a monitoring function to test, such as a security operations centre.

## What APRA expects under CPS 234

CPS 234 is outcome-based. An APRA-regulated entity "must test the effectiveness of its information security controls through a systematic testing program" ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

The standard does not fix an interval. The nature and frequency of testing must be commensurate with the rate at which vulnerabilities and threats change and the criticality and sensitivity of the asset. The consequences of an incident also count, as do the materiality and frequency of change to the asset. So does the risk of exposure to environments where the entity can't enforce its own security policies, and CPG 234 gives the internet as an example.

Other requirements shape who does the work and what happens next:

- Testing must be "conducted by appropriately skilled and functionally independent specialists".
- Results showing deficiencies that "cannot be remediated in a timely manner" go to the Board or senior management.

The entity must also review the testing program "at least annually or when there is a material change to information assets or the business environment". A material control weakness the entity doesn't expect to fix in a timely way must reach APRA within 10 business days.

The guidance, CPG 234, fills in the practical detail. APRA's view is that a sufficient set of controls should be tested "at least annually" ([APRA, CPG 234](https://www.apra.gov.au/system/files/cpg_234_information_security_june_2019_1.pdf), June 2019). Controls protecting assets exposed to untrusted environments "would typically be tested throughout the year". Attachment G of the guide lists penetration tests, including "red team" tests, alongside vulnerability scans, code review and fuzzing.

The independence point trips people up. CPG 234 describes it as testers "who do not have operational responsibility for the controls being validated". In practice, the pen test itself should come from people outside the team that builds and runs the platform, even if that team runs its own scans.

If you are preparing a board for these questions, see [what a board should ask about CPS 234](/blog/apra-cps-234-board-questions).

## When card data is in scope: PCI DSS v4.0.1

Any platform that stores, processes or transmits card data has a second, more prescriptive rulebook. PCI DSS v4.0 was retired on 31 December 2024, which left v4.0.1 as the only active version ([PCI SSC](https://blog.pcisecuritystandards.org/just-published-pci-dss-v4-0-1)). The testing requirements sit in Requirement 11.

| PCI DSS requirement | What it asks for | How often |
|---|---|---|
| 11.3.1 Internal vulnerability scans | Resolve high-risk and critical findings, then rescan | At least every three months |
| 11.3.2 External vulnerability scans | Scans by a PCI SSC Approved Scanning Vendor | At least every three months |
| 11.4.2 Internal penetration test | Per a defined methodology, by a qualified and independent tester | At least every 12 months and after significant change |
| 11.4.3 External penetration test | As above, from outside the network | At least every 12 months and after significant change |
| 11.4.4 Fixing findings | Correct exploitable issues, then repeat the test to verify | After each test |
| 11.4.5 Segmentation testing | Confirm the cardholder data environment is isolated | At least every 12 months, and every six months for service providers |

Source: [PCI DSS v4.0 SAQ D for Merchants](https://listings.pcisecuritystandards.org/documents/PCI-DSS-v4-0-SAQ-D-Merchant.pdf), which reproduces the requirement text. The six month segmentation cycle for service providers is Requirement 11.4.6. PCI SSC says v4.0.1 added no new requirements.

The methodology in 11.4.1 is worth reading closely. It asks for coverage of the whole cardholder data environment perimeter, testing from inside and outside the network, and application-layer testing.

Our view: scope reduction is the cheapest lever here. If a hosted payment page or tokenisation keeps card numbers off your servers, less of the platform sits inside the cardholder data environment. Settle that choice when you decide [how you route card and A2A payments](/blog/payment-orchestration-card-a2a), before the test is scoped.

## When to run a penetration test

Put tests on the calendar around change as well as the audit date. These points justify a test:

1. **Before launch.** Test the production-like build with real integrations, a few weeks before go-live, so there is time to fix and retest.
2. **After a major change.** A new payment flow, a new API for partners, a cloud migration, a new identity provider or a change to network segmentation.
3. **At least once a year.** CPG 234 and PCI DSS both land on 12 months as the baseline.
4. **After a serious incident or a new class of threat.** CPS 234 ties the nature and frequency of testing to the rate at which vulnerabilities and threats change.
5. **Before due diligence.** A buyer, investor or bank partner may ask for the latest report and the remediation evidence.

Take a hypothetical payments startup that ships weekly. A manual pen test on every release would be hard to schedule. One workable pattern is automated scanning in the pipeline and a vulnerability assessment every quarter. Add a manual penetration test once a year and after each major feature. The records from that cycle are what a regulated client would review when it assesses the vendor's testing.

## Scoping: web app, API, mobile and cloud

![Laptop screen showing source code in a dark editor, with the keyboard lit from below](code-on-laptop.jpg)

*Source code open in a dark editor on a laptop.*

Scope sets the cost and decides what the report can tell you. Write it around attack surfaces and user roles.

### Web application

Test as each real role: customer, staff, admin, partner. Authenticated testing can find flaws that an unauthenticated scan can't reach, such as one customer seeing another customer's account. Give the testers working accounts for every role, and test data that behaves like production.

### APIs

List every endpoint, including internal ones the mobile app calls and webhooks from payment providers. The OWASP API Security Top 10 puts broken object level authorisation first ([OWASP](https://api-security.owasp.org/editions/2023/en/0x11-t10/), 2023). It says object level checks "should be considered in every function that accesses a data source using an ID from the user". On a lending or wealth platform, that ID might be an account number in a URL or request body.

### Mobile apps

Test the app binary and the APIs behind it. Check what the app stores on the device, how it handles session tokens and whether certificate pinning or jailbreak detection can be bypassed.

### Cloud configuration

A configuration review of your AWS or Azure accounts looks at identity and access, public storage, logging, network rules and key management. It pairs well with the application test, because the two kinds of issue compound. For example, a server-side request forgery flaw in the app can expose credentials for an over-permissive cloud role.

Also state what is out of scope, such as third-party SaaS you can't legally test, and agree testing windows with anyone who monitors production.

## What penetration testing in Australia costs

Our view: quotes for this work are built mainly from tester days, and what follows is our estimate of typical effort. Treat it as a planning range.

Assumptions: a senior tester day rate of roughly $1,500 to $2,500 ex GST, a single environment and credentials supplied. The retest is priced separately in its own row.

| Scope | Typical effort | Cost range (ex GST) |
|---|---|---|
| Vulnerability assessment, external and internal | 2 to 4 days | $3,000 to $10,000 |
| Web application, 2 to 4 user roles | 5 to 10 days | $7,500 to $25,000 |
| API, 30 to 80 endpoints | 4 to 8 days | $6,000 to $20,000 |
| Mobile app, iOS and Android, plus its API | 8 to 12 days | $12,000 to $30,000 |
| Cloud configuration review, one production account set | 3 to 6 days | $4,500 to $15,000 |
| Retest of fixed findings | 1 to 3 days | $1,500 to $7,500 |
| Red team exercise | Several weeks, several people | Well above the ranges above |

Cost moves with the number of roles and endpoints, the amount of custom business logic, the number of environments, and whether PCI DSS or a client's contract dictates the method. Weekend or after-hours testing adds to the cost.

On buying, compare quotes on days, named methodology and what the report contains. If one quote sits far below the rest, check whether it covers authenticated manual testing or only an automated scan. Our view: also ask who will do the testing, by name, and what qualifications and financial services experience each tester holds.

## Reading the report and fixing what it finds

![Printed report with line and bar charts lying on a white desk next to a smartphone](printed-report.jpg)

*A printed report with line and bar charts beside a smartphone on a white desk.*

A good report opens with a short summary for executives. Then it lists each finding with a severity rating, affected components, steps to reproduce, evidence and a recommended fix. Severity may follow CVSS or the tester's own scale.

Read the severity against your own context. A "medium" access control flaw on an endpoint that returns bank account details may matter more to your client than a "high" on an internal test server. Ask the testers to explain any rating you would score differently.

Then turn findings into work:

- Put each finding in the engineering backlog with an owner and a target date set by severity.
- Fix the root cause. If one API missed an authorisation check, look for the same pattern across all of them.
- Record anything you decide not to fix as an accepted risk, signed off by someone with authority.
- Book the retest. PCI DSS 11.4.4 requires testing to be repeated to verify corrections, and CPG 234 expects testing criteria to cover when retesting is needed.
- Escalate anything you can't fix in good time. Under CPS 234, that goes to the Board or senior management.

Keep the whole trail: scope, report, tickets, retest results and risk acceptances. One of the common testing gaps in APRA's 2023 findings was that evidence used to judge control effectiveness "is not retained". The same records can support an [ISO 27001 audit](/blog/iso-27001-certification-australia-cost) and help a buyer reading your [SOC 2 report](/blog/soc-2-for-buyers).

## Common questions

### Does a vendor's pen test cover the regulated entity?

Only in part. CPS 234 binds the regulated entity, so it has to judge whether the vendor's testing matches the risk to its own assets. A vendor's summary letter is a starting point. Ask for the scope, the dates, the severity counts and proof of retest, as part of [technical due diligence on a build team](/blog/technical-due-diligence-build-team).

### Can our own engineers do the penetration test?

They can run scans and fix findings. For the test itself, CPS 234 asks for functionally independent specialists, and PCI DSS asks for organisational independence. An internal security team can qualify if it has no operational responsibility for the controls it tests.

### How long does a test take from booking to report?

Our view: allow two to six weeks for booking, depending on the season. Testing takes the days in the table above, and the report usually follows within one to two weeks. Plan the retest into the launch schedule.

## What to do this month

- Find the date and scope of the last penetration test on each platform your client relies on.
- Check that every open high or critical finding has an owner, a date and a retest booked.
- Confirm whether card data touches the platform, and if so, which PCI DSS requirements apply.
- Book the next test around the next major release.

For the wider set of obligations these platforms carry, see [software for financial services](/industries/financial-services) and [what CPS 230 expects of technology vendors](/blog/cps-230-technology-vendors).

If your client needs the findings fixed and the evidence kept, Palxi builds and runs regulated platforms alongside advisors. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against APRA, PCI SSC, OAIC, Council of Financial Regulators and OWASP sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Cleveland FRB Vault Door"](https://commons.wikimedia.org/w/index.php?curid=6316021) by Spamguy, [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/), cropped. Code on laptop, ["Coding Macbook"](https://stocksnap.io/photo/coding-macbook-LV2IUQNTZ5) by Marc Chouinard, CC0. Printed report, ["Book Report"](https://stocksnap.io/photo/book-report-G0V362YTA5) by Negative Space, CC0.*
