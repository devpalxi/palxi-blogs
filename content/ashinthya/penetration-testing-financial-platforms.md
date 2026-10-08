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

When the Australian Prudential Regulation Authority (APRA) reviewed the cyber security practices of Australian financial institutions under Prudential Standard CPS 234, independent control testing was identified as one of the most widespread industry weaknesses. APRA reported that across many organisations, "the testing programs of entities are incomplete, inconsistent, lack independence and do not provide adequate assurance for management and the Board" ([APRA](https://www.apra.gov.au/news-and-publications/cyber-security-stocktake-exposes-gaps), 5 July 2023).

National cyber breach statistics underline why this supervisory scrutiny is so urgent. The Office of the Australian Information Commissioner (OAIC) recorded 1,205 formal data breach notifications during 2025—the highest annual volume since the mandatory reporting scheme began in 2018. Financial services accounted for 157 major breaches, representing the second most targeted sector in Australia behind healthcare ([OAIC](https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show), July 2026).

Under Australian prudential regulations, if a bank, insurer, or superannuation fund relies on external software to manage loans, deposits, or payments, the institution must verify that the software's security defenses undergo rigorous, independent testing.

For board directors, risk committee members, and executives who do not come from a computer programming background, cyber security terminology can feel confusing. Here is a clear, straightforward guide to penetration testing in Australia—explaining how ethical tests work, when they must be scheduled, realistic market costs, and how to verify that identified weaknesses are properly fixed.

## Pen test, vulnerability assessment and red team

In the cyber security industry, sales professionals frequently toss around technical jargon. Understanding what you are purchasing becomes straightforward once you understand three distinct testing methods:

A **vulnerability assessment** is an automated digital scan that searches for known computer flaws. Think of a security guard walking around the perimeter of an office building at night with a flashlight, checking whether any ground-floor windows were accidentally left unlocked. It is fast, relatively inexpensive, and useful for catching basic software oversights on a monthly or quarterly basis.

A **penetration test** (often shortened to "pen test") goes much deeper. In a penetration test, you hire a trusted, highly skilled independent security specialist—known as an "ethical hacker"—and give them permission to actively attempt to break into your software within agreed boundaries. Returning to our building analogy, the specialist doesn't just see that a window is unlocked; they climb through the window, attempt to pick the lock on the manager's filing cabinet, test whether the alarm triggers, and demonstrate exactly what confidential files could be stolen.

A **red team exercise** is a broader, covert simulation testing the entire organisation. The goal is to simulate how real-world criminal syndicates operate. The Council of Financial Regulators, which coordinates Australia's financial regulatory agencies, established the Cyber Operational Resilience Intelligence-led Exercises (CORIE) framework specifically for large Australian institutions to "mimic the tactics, techniques and procedures of real-life adversaries" ([Council of Financial Regulators](https://www.cfr.gov.au/publications/policy-statements-and-other-reports/2022/revised-corie-framework-rollout/cyber-operational-resilience-intelligence-led-exercises-corie-framework-appendix-b.html), July 2022).

| Testing method | Core question it answers | Practical methodology | Typical schedule | Primary outcome |
|---|---|---|---|---|
| **Vulnerability assessment** | What known software flaws or outdated components do we have? | Automated software scans reviewed by human analysts | Monthly or quarterly | A prioritized list of known software bugs to patch |
| **Penetration test** | What damage could an intruder actually do by chaining flaws together? | Skilled manual testing attempting to bypass security controls | At least once a year and after major platform changes | Proven attack paths with concrete steps to fix vulnerabilities |
| **Red team exercise** | Would our staff and monitoring teams detect and stop a sophisticated attack? | Multi-week simulated attack testing people, processes, and technology | Every 2 to 3 years for mature institutions | Comprehensive evaluation of detection and response capabilities |

For most mid-sized Australian financial businesses, regular vulnerability scans paired with annual penetration tests provide the ideal balance of security and value. Full red team simulations are typically reserved for major banks and entities with dedicated, 24-hour security operations centres.

## What APRA expects under CPS 234

APRA's information security standard, Prudential Standard CPS 234, is strictly outcome-based. It requires every regulated financial institution to "test the effectiveness of its information security controls through a systematic testing program" ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

The prudential standard deliberately avoids setting rigid calendar rules. Instead, the frequency and depth of testing must match the criticality of the system, the sensitivity of the customer records involved, and the speed at which external cyber threats evolve. Because any system connected to the public internet is exposed to constant automated attacks, internet-facing banking portals demand continuous vigilance.

Crucially, APRA enforces two strict governance rules:

- Testing must be conducted by "appropriately skilled and functionally independent specialists".
- Any identified security deficiency that cannot be rectified in a timely manner must be formally reported to senior management and the board of directors.

Furthermore, if an institution discovers a material security weakness that cannot be rectified within approved timeframes, it must formally notify APRA within **10 business days**.

APRA's accompanying guidance note, CPG 234, establishes the practical standard: core controls must be tested at least annually, while internet-facing portals should undergo testing throughout the year ([APRA, CPG 234](https://www.apra.gov.au/system/files/cpg_234_information_security_june_2019_1.pdf), June 2019).

The requirement for "functional independence" is essential. The security specialists conducting the penetration test must not be the same engineers who built, configured, or currently administer the platform. Even if your internal development team runs automated scans every week, an annual penetration test must be performed by independent external professionals.

For directors preparing for board audit meetings, our guide on [what a board should ask about APRA CPS 234](/blog/apra-cps-234-board-questions) outlines the essential questions management must answer.

## When card data is in scope: PCI DSS v4.0.1

If your platform processes, transmits, or stores credit or debit card details, you must comply with a second, highly prescriptive international security framework known as the Payment Card Industry Data Security Standard (PCI DSS). Version 4.0.1 is the active international standard ([PCI SSC](https://blog.pcisecuritystandards.org/just-published-pci-dss-v4-0-1)), and its testing requirements are laid out in Requirement 11:

| PCI DSS requirement | What the standard requires | Mandatory frequency |
|---|---|---|
| **11.3.1 Internal vulnerability scans** | Scan internal networks, resolve high-risk flaws, and re-scan to confirm | At least once every three months |
| **11.3.2 External vulnerability scans** | Run external network scans through an authorized scanning vendor | At least once every three months |
| **11.4.2 Internal penetration test** | Execute manual penetration tests inside the corporate network | At least every 12 months and after major software changes |
| **11.4.3 External penetration test** | Execute penetration tests from the public internet | At least every 12 months and after major software changes |
| **11.4.4 Remediation and retesting** | Fix identified vulnerabilities and repeat the test to prove remediation | Following every penetration test |
| **11.4.5 Network segmentation checks** | Verify that cardholder databases are strictly isolated from normal office networks | Every 12 months (every 6 months for payment service providers) |

The most effective way to reduce the cost and complexity of card security audits is "scope reduction". By using hosted, secure payment forms or modern tokenisation methods that keep raw card numbers off your servers entirely, you dramatically reduce the number of systems that fall under these stringent PCI DSS rules. Settle this architectural approach early when deciding [how to orchestrate card and account-to-account payments](/blog/payment-orchestration-card-a2a).

## When to run a penetration test

Rather than treating a penetration test as an isolated annual chore, financial organisations should schedule testing around significant operational milestones:

1. **Prior to a major public launch.** Always test a production-ready system several weeks before going live, leaving adequate time to remediate findings and complete a clean retest.
2. **Following significant software modifications.** Introducing a new payment rail, connecting a new public API, migrating data to a new cloud provider, or modifying customer login systems warrants an updated test.
3. **On an annual recurring cycle.** APRA standards and card industry rules treat a twelve-month review cycle as the absolute baseline.
4. **Following an emerging industry threat or incident.** If an unprecedented cyber vulnerability affects your software components, schedule an targeted assessment to verify your defenses.
5. **Ahead of major corporate transactions.** Prospective investors, banking partners, or acquirers will request copies of your latest independent penetration test report and remediation records during due diligence.

For an Australian fintech releasing software updates regularly, scheduling a manual penetration test every single week is unworkable. A proven industry practice is running automated scans continuously within the engineering pipeline, scheduling quarterly vulnerability reviews, and engaging independent external penetration testers annually and after major architectural upgrades.

## Scoping: web app, API, mobile and cloud

![Laptop screen showing source code in a dark editor, with the keyboard lit from below](code-on-laptop.jpg)

*Carefully defining the boundaries of a penetration test ensures that independent testers examine real-world security risks without disrupting daily customer operations.*

The formal testing scope dictates both the project fee and the value of the resulting report. Scoping must be built around real-world user roles and attack surfaces:

### Web applications and customer portals

Testers must evaluate the application using authentic customer roles—such as everyday account holders, customer service staff, and system administrators. "Authenticated testing" allows testers to uncover critical authorization flaws that unauthenticated scanners cannot see—such as whether a customer can manipulate a web address to view another person's confidential bank balance. Provide testers with working test accounts populated with realistic, non-production test data.

### APIs (Application Programming Interfaces)

Provide testers with a comprehensive list of all API endpoints—including internal endpoints used by mobile apps and automated webhooks receiving payment notifications. The global Open Web Application Security Project (OWASP) identifies "broken object-level authorization" as the number-one API security risk ([OWASP](https://api-security.owasp.org/editions/2023/en/0x11-t10/), 2023). This vulnerability occurs when an API fails to verify whether the logged-in user actually has permission to view the specific account number requested in the URL.

### Mobile applications

Testers evaluate both the downloadable mobile application on Apple iOS and Android devices, and the secure cloud connections behind it. Testing examines whether the app stores sensitive data insecurely on the phone, whether session tokens can be intercepted, and whether security protections can be bypassed on compromised devices.

### Cloud infrastructure configurations

A configuration audit of your cloud hosting environment (such as Amazon Web Services or Microsoft Azure) evaluates administrator access permissions, database encryption, public storage settings, and firewall configurations. Pairing a cloud audit with an application test is invaluable, as minor application oversights combined with loose cloud permissions can allow an intruder to compromise an entire database.

Always clearly define what is excluded from testing—such as third-party commercial services you lack legal authorization to test—and agree upon testing timeframes with your internal operations team.

## What penetration testing in Australia costs

Penetration testing quotes are calculated primarily on specialist engineering days. The following estimates reflect typical commercial pricing across the Australian market.

Assumptions: senior Australian security testers with daily rates between $1,500 AUD and $2,500 AUD (excluding GST), testing a single configured environment with pre-arranged test credentials. Formal retesting is listed separately.

| Scope of testing | Typical project duration | Estimated cost range (ex GST) |
|---|---|---|
| **Vulnerability assessment (internal and external)** | 2 to 4 specialist days | $3,000 to $10,000 AUD |
| **Web application (2 to 4 distinct user roles)** | 5 to 10 specialist days | $7,500 to $25,000 AUD |
| **API testing (30 to 80 distinct endpoints)** | 4 to 8 specialist days | $6,000 to $20,000 AUD |
| **Mobile application (iOS, Android, and backend APIs)** | 8 to 12 specialist days | $12,000 to $30,000 AUD |
| **Cloud infrastructure security review (production account)** | 3 to 6 specialist days | $4,500 to $15,000 AUD |
| **Remediation retest of fixed vulnerabilities** | 1 to 3 specialist days | $1,500 to $7,500 AUD |
| **Comprehensive red team exercise** | Multi-week, multi-person team | $40,000+ AUD |

Final costs vary depending on the complexity of your custom business rules, the volume of user roles, and whether specific card industry or regulatory mandates dictate testing protocols.

When reviewing vendor quotes, evaluate them based on allocated specialist days, documented methodologies, and reporting depth. If a quote is dramatically cheaper than competing bids, confirm whether it involves skilled manual testing or merely an automated software scan rebranded as a penetration test. Always ask for the names, formal certifications, and Australian financial services experience of the actual individuals who will perform the work.

## Reading the report and fixing what it finds

![Printed report with line and bar charts lying on a white desk next to a smartphone](printed-report.jpg)

*A professional penetration testing report provides an executive summary for company directors alongside technical remediation instructions for engineering teams.*

A quality report opens with an accessible executive summary for leadership, followed by detailed technical sheets for every identified finding. Each finding details an objective severity score, the affected software module, reproducible steps, photographic evidence, and specific engineering recommendations.

Always evaluate severity ratings within your organisation's unique business context. An access control flaw marked "medium" that exposes customer banking records may be far more critical to your board than a "high" flaw discovered on an internal development machine.

Translate report findings into disciplined operational action:

- Assign every finding directly to an engineering lead with an explicit target remediation date based on severity.
- Address the underlying architectural cause. If one API endpoint lacked an authorization check, inspect every other endpoint for the same programming pattern.
- Formally document any minor finding you decide not to fix immediately as an accepted business risk, signed off by an authorized executive.
- Schedule the formal retest. Both PCI DSS and APRA standards require testing to be repeated to verify that fixes were implemented correctly.
- Escalate any critical vulnerability that cannot be resolved within approved timeframes to senior executive leadership and the board of directors.

Retain the complete documentary audit trail—including the original scoping document, final report, engineering tickets, retest certificates, and formal risk acceptances. APRA identified the failure to retain testing records as a frequent compliance breakdown. These same records directly support your upcoming [ISO 27001 audit](/blog/iso-27001-certification-australia-cost) and reassure prospective corporate clients reviewing your [SOC 2 compliance reports](/blog/soc-2-for-buyers).

## Common questions

### Does a software vendor's penetration test cover our regulated business?

Only partially. Under APRA regulations, the regulated financial entity remains legally responsible for its customer data and must independently judge whether the vendor's testing covers the specific customer services being used. A simple one-page vendor marketing letter is rarely sufficient. Request the full testing scope, testing dates, severity counts, and proof of retesting as part of your broader [technical due diligence on software partners](/blog/technical-due-diligence-build-team).

### Can our own internal developers carry out our penetration tests?

Internal developers can run daily automated scans and fix identified bugs. However, for formal compliance testing, APRA requires "functionally independent" specialists, and PCI DSS requires organizational independence. Testers must not have direct operational responsibility for the systems they are evaluating.

### How much advance time is needed to book and complete a penetration test?

Allow two to six weeks of advance notice to book an experienced testing firm, especially during peak financial year-end periods. Testing typically takes one to two weeks, with the draft report delivered within seven to ten business days. Ensure you factor time for engineering fixes and the retest into your commercial launch timetable.

## Action items for your leadership team

- Identify the date and exact scope of the most recent penetration test across each platform holding your customer records.
- Confirm that every high or critical vulnerability identified in past reports has an assigned owner, a remediation date, and a completed retest.
- Confirm whether debit or credit card data touches your systems, and determine your specific PCI DSS compliance tier.
- Schedule your next independent penetration test to align with your next major software release.

To explore how secure financial platforms are built from the ground up, see our overview of [software for Australian financial services](/industries/financial-services) and our analysis of [what CPS 230 expects of technology providers](/blog/cps-230-technology-vendors).

When your organisation needs secure, resilient financial software engineered to satisfy strict regulatory requirements, Palxi partners with leadership and engineering teams to deliver dependable systems with security built into every layer. [Contact our Australian team](mailto:hello@palxi.com.au).

*Regulatory rules, audit standards, and breach figures were verified against APRA, PCI SSC, OAIC, Council of Financial Regulators, and OWASP publications on 27 September 2026. See [how we work](/#how-we-work).*

*This article provides general informational commentary and does not constitute formal legal or regulatory advice. Please consult qualified legal counsel or your appointed compliance advisor for specific operational guidance.*

*Photos: cover, ["Cleveland FRB Vault Door"](https://commons.wikimedia.org/w/index.php?curid=6316021) by Spamguy, [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/), cropped. Code on laptop, ["Coding Macbook"](https://stocksnap.io/photo/coding-macbook-LV2IUQNTZ5) by Marc Chouinard, CC0. Printed report, ["Book Report"](https://stocksnap.io/photo/book-report-G0V362YTA5) by Negative Space, CC0.*
