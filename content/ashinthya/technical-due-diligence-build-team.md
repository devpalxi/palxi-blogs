---
title: "Technical due diligence on a build team: an advisor's guide"
description: "Technical due diligence for advisors: how to check a build team's ISO 27001 certificate, SOC 2 report, code, people, IP terms and exit before you recommend it."
date: "2026-09-27"
lastUpdated: "2026-09-27"
author: "Palxi Team"
slug: "technical-due-diligence-build-team"
canonical: "https://palxi.com.au/blog/technical-due-diligence-build-team"
site_name: "Palxi"
kicker: "Building and modernising"
coverImage: "hero.jpg"
coverImageAlt: "Perth city skyline at night, with lit office towers reflected in the still water of the Swan River"
og_image_alt: "Perth city skyline at night, with lit office towers reflected in the still water of the Swan River"
tags: ["technical due diligence", "software due diligence", "iso 27001", "vendor selection", "financial services"]
lang: "en-AU"
---

# Technical due diligence on a build team: an advisor's guide

Your client's board has formally signed off on the project budget. The funding is approved in the board papers, and now the chief executive or committee chair looks across the table and asks you the pivotal question: *"Who should we hire to build this platform?"*

Whichever software development firm you recommend, your professional reputation and judgment go with that recommendation. Technical due diligence is the disciplined process of verifying that the proposed engineering team possesses genuine capability, trustworthy security habits, and solid financial viability before contracts are signed.

For clients regulated by the Australian Prudential Regulation Authority (APRA)—such as banks, building societies, insurers, or superannuation trustees—conducting thorough vendor vetting is also a strict legal requirement. Under Prudential Standard CPS 230, financial institutions must complete comprehensive due diligence, including a formal selection process and an objective evaluation of the supplier's ability to maintain services on an ongoing basis ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)).

The necessity for rigorous checks is clear from recent global cyber research. Verizon's 2026 Data Breach Investigations Report revealed that cyber breaches involving third-party suppliers now account for 48 per cent of all corporate security incidents—a staggering 60 per cent surge compared to the prior year ([Verizon](https://www.verizon.com/about/news/breach-industry-wide-dbir-finds), May 2026).

This guide is written specifically for corporate advisors, board consultants, and business executives. Every check outlined here results in tangible, independently verifiable proof—such as an official register entry, an unalterable audit log, or a practical review with the actual software engineers who will write your code.

## Why the recommendation carries your risk

When an advisor names a software development team, client leadership hears an authoritative endorsement. If that external agency subsequently misses critical project deadlines, deploys bug-ridden code, or walks away holding the only administrative keys to your client's database, the board will remember exactly who recommended them.

In regulated Australian financial services, regulatory obligations amplify this commercial risk. APRA's operational resilience standard, CPS 230, classifies "core technology services" as material service providers by default ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). Any technology partner commissioned to build and support an Australian lending platform, customer onboarding portal, or payment facility will almost certainly fall under this statutory scrutiny. Our companion guide on [what CPS 230 expects of technology vendors](/blog/cps-230-technology-vendors) outlines the mandatory contractual protections required.

APRA's information security standard, Prudential Standard CPS 234, adds further oversight duties. Whenever an external party manages customer data, the licensed institution must formally assess that supplier's information security capability and evaluate the design of its technical controls ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

While these prudential standards legally bind the financial institution rather than the external build team, your client's board must retain documentary proof justifying why this specific development partner was chosen. The evidence you gather forms a vital part of the client's official governance file, which company directors may evaluate using [the cyber security questions a board should ask under CPS 234](/blog/apra-cps-234-board-questions).

## What technical due diligence on a build team covers

A comprehensive technical review evaluates eight distinct operational dimensions. For each category, the table below highlights the documentation to request alongside warning signs that should prompt immediate caution:

| Due diligence area | What documentation to request | Warning signs that warrant caution |
|---|---|---|
| **Corporate entity & leadership** | Australian Business Number (ABN), company ownership structure, CVs of named technical leads, and a complete subcontractor register | Polished senior executives presenting the sales pitch, but unnamed junior contractors assigned to the actual project |
| **Security certifications** | Accredited ISO 27001 certificate with Statement of Applicability, and recent SOC 2 Type 2 reports | An audit scope that covers only the vendor's administrative head office while excluding software developers |
| **Engineering workflows** | A live, practical walkthrough of code review processes, automated testing routines, and deployment logs | Inability to demonstrate automated deployment logs or multi-factor administrative access |
| **Code hygiene & testing** | Inspection of a sample codebase, automated dependency vulnerability reports, and open-source licence registers | Absence of automated software tests or unmonitored third-party open-source components |
| **Regulatory experience** | Redacted examples of compliance evidence generated for previous Australian audits | Vague assurances that "the client always took care of compliance matters" |
| **Ownership & exit terms** | Clear intellectual property assignment clauses, client-owned code repositories, and documented exit transition support | Software source code hosted exclusively inside the vendor's private cloud accounts |
| **Ongoing support & incidents** | Documented on-call staffing arrangements, historical incident reports, and guaranteed response times | Support offered strictly on an informal, "best-efforts" commercial basis |
| **Financial viability** | Recent audited financial statements, certificate of currency for professional indemnity and cyber insurance, and business continuity plans | Severe revenue concentration with a single customer, or inadequate cyber insurance cover |

Software due diligence represents the code-level component of this evaluation. It is particularly critical when an engineering team is taking over an existing legacy system or introducing pre-built software modules into your client's core platform.

## How to check if a company is ISO 27001 certified

![A round magnifying glass held up against closed grey window blinds, showing a magnified view through the lens](magnifying-glass.jpg)

*Always verify an external security certificate against official accreditation registries rather than relying on marketing claims.*

Verifying security claims begins with a fundamental fact: the International Organization for Standardization (ISO) does not audit businesses or issue certificates directly ([ISO](https://www.iso.org/certification.html)). Audits are performed by independent commercial certification bodies, which are in turn accredited by national oversight bodies—such as JAS-ANZ (the Joint Accreditation System of Australia and New Zealand).

A security logo displayed on a vendor's website proves very little. Work methodically through these six practical verification checks:

1. **Obtain the official certificate.** Inspect the legal business name, certificate registration number, issuing certification body, standard version, certified scope, and expiry date.
2. **Search official accreditation databases.** Check the certificate on [IAF CertSearch](https://www.iafcertsearch.org/), the international database of accredited management certificates ([IAF CertSearch FAQ](https://support.iafcertsearch.org/iaf-certsearch-faq/iaf-certsearch-faq/general)). For Australian providers, search the official [JAS-ANZ Certified Register](https://register.jasanz.org/certified-organisations) to verify that the auditing firm is officially accredited.
3. **Verify the version date.** The active international standard is ISO/IEC 27001:2022. Under mandatory global transition rules, all certificates issued under the older 2013 standard expired on 31 October 2025 ([IAF MD 26](https://iaf.nu/iaf_system/uploads/documents/IAF_MD26_Issue_2_15012023.pdf)). Any 2013 certificate presented today is legally obsolete, regardless of what printed expiry date appears on the page.
4. **Scrutinize the audited scope.** The certificate must explicitly encompass the specific software development team, geographic locations, and digital platforms delivering your client's software. A certificate held by an offshore parent company's data hosting division provides zero assurance regarding a bespoke software development team in another subsidiary.
5. **Request the Statement of Applicability.** This formal document lists which of the 93 ISO controls the company enforces. Look specifically for secure software development, vendor management, access controls, and activity logging.
6. **Inquire about recent audit findings.** Ask when the most recent annual surveillance audit took place, and confirm whether the auditor identified any major non-conformities.

If a certificate does not appear on official registers, ask why. While unaccredited certificates exist, relying on an unaccredited audit provides little defensibility under APRA prudential reviews. If a firm is currently working toward certification, our guide on [ISO 27001 costs and timelines in Australia](/blog/iso-27001-certification-australia-cost) provides realistic benchmarks to judge their progress.

## Evidence beyond the certificate

Consider a hypothetical development firm that holds a current, accredited certificate with an appropriate scope. However, its most recent independent penetration test identified two critical security vulnerabilities that have remained unfixed for six months. Looking only at the certificate on the office wall would never reveal that operational failure.

A SOC 2 Type 2 report represents the next vital document to request. Examine the audit duration, confirm that the specific software tools you rely on were evaluated, and review any test exceptions identified by the auditor. Our guide on [how to evaluate a SOC 2 report as a buyer](/blog/soc-2-for-buyers) explains how to interpret these findings.

Next, request the executive summary of the vendor's most recent independent penetration test, alongside a current register of all remediation actions. APRA CPS 234 requires that testing be conducted by functionally independent specialists. Security scans carried out by the same developers who wrote the software code do not satisfy this prudential standard. Our overview of [penetration testing for Australian financial platforms](/blog/penetration-testing-financial-platforms) details the required testing scope.

At Palxi, we maintain continuous ISO 27001 and SOC 2 controls across our financial software platforms. In our experience, inspecting an engineering team's live register of open security findings—complete with assigned engineers and target resolution dates—tells you vastly more about their true engineering culture than an attractive certificate framed in reception.

## Software due diligence: see the code and the pipeline

A written questionnaire documents what a development agency claims it does; a live technical walkthrough reveals how its team operates in reality.

Request a 90-minute technical working session to inspect a live software repository and automated deployment pipeline. If you do not come from a computer programming background, ensure an independent senior engineer participates alongside you. Look for six concrete engineering practices:

- **Protected code branches.** Core software code must be locked so that no individual developer can alter production code without an independent peer review and approval from a second engineer.
- **Automated test suites.** Every software change must automatically trigger automated tests verifying that existing calculations, payment ledgers, and security permissions continue to function perfectly.
- **Automated component scanning.** Modern software is assembled using third-party software packages. The build pipeline must automatically scan every package for known security bugs before allowing code to deploy.
- **Dedicated secret vaults.** Passwords, database keys, and banking credentials must be housed inside dedicated security vaults—never hardcoded into software files, support tickets, or team chat messages.
- **Infrastructure as code.** Cloud servers and databases must be defined using automated configuration scripts, ensuring an entire platform can be rebuilt cleanly in hours during a disaster.
- **Detailed deployment audit logs.** Automated logs must record exactly who authorised every software update, what code was released, and who currently possesses administrative access.

Recent industry findings emphasize why software supply chain security is paramount. Verizon's 2026 data breach report revealed that exploited software flaws accounted for 31 per cent of corporate breaches, overtaking stolen passwords as the primary entry point for hackers ([Verizon](https://www.verizon.com/about/news/breach-industry-wide-dbir-finds), May 2026). How an engineering partner monitors and patches vulnerable software components is just as critical as how they write new features.

Verify how open-source software licences are managed, and confirm whether the agency uses automated artificial intelligence (AI) coding tools. If generative AI tools are used, verify that an experienced senior engineer personally reviews and tests every generated code block for security flaws.

## The people who will write the code

Picture your project three months after contract signing. The charismatic executives and principal consultants who led the sales pitch have transitioned to their next corporate prospect.

To prevent unwelcome surprises, ensure the formal proposal names the specific senior software engineers who will lead your client's project on a day-to-day basis.

Clarify four additional operational factors:

- **Subcontractor transparency:** Require an exhaustive list of any third-party agencies or external contractors who will touch the codebase or hosting environments.
- **Geographic location:** Clarify where developers, support engineers, and customer data will reside. For APRA-regulated entities, material offshore service arrangements require advance regulatory notification under CPS 230.
- **Knowledge redundancy:** Inspect the architectural runbooks and documentation that would allow another engineer to manage the system seamlessly if a lead developer resigned tomorrow.
- **Background screening:** Confirm that every team member granted access to banking infrastructure undergoes formal police background checks and identity verification.

Always check references thoroughly. Speak directly with a lead engineer or product manager at a previous client organisation, rather than solely interviewing executive sponsors. Ask what unexpected challenges arose during the build, and how the development team handled unforeseen setbacks.

## Ownership, access and a way out

![A small bunch of three metal keys on a split ring with a black rubber tag, lying on a white surface](keys-on-ring.jpg)

*Establish from the very first week who holds legal ownership of software code and master administrator access to cloud accounts.*

Intellectual property (IP) disputes represent one of the most painful ways for an ambitious software project to stumble. IP Australia establishes a clear default legal principle: *"In Australia, IP created by a contractor is the property of the contractor unless otherwise stated in the contract"* ([IP Australia](https://www.ipaustralia.gov.au/understanding-ip/who-owns-ip)). While companies own the intellectual property generated by their permanent employees, independent contractors retain ownership of their creations unless explicitly assigned in writing. If an external development agency uses freelance contractors, your client requires an unbroken chain of written assignments transferring intellectual property from the contractor to the agency, and from the agency to your client.

Ensure your commercial agreement establishes five vital ownership terms before work begins:

- The contract explicitly assigns full intellectual property ownership of all custom software code and documentation to the client upon creation, providing clear licences for any pre-existing reusable components.
- Source code repositories are registered in the client's corporate name from the very first day of development.
- Cloud hosting accounts, domain names, and third-party payment gateways are registered directly to the client, with master administrator passwords held by client executives.
- Technical architecture diagrams and operational runbooks are updated continuously throughout the project lifecycle.
- Exit transition assistance is clearly defined, detailing the hourly rates and duration the agency will provide to onboard successor teams.

These ownership provisions align directly with the exit and transition planning required under [custom versus off-the-shelf software strategies](/blog/custom-vs-off-the-shelf-financial-services).

## Common questions

### How does software due diligence differ from technical due diligence?

Software due diligence focuses narrowly on inspecting a specific codebase—often ahead of a company acquisition or when inheriting an existing application. Technical due diligence on a build team is a much broader operational evaluation: it assesses the agency's personnel, security credentials, development practices, financial stability, and commercial contract terms, with code inspection forming one component of the broader review.

### Must an external software build team hold its own ISO 27001 certificate?

No Australian law explicitly mandates that a software development firm must hold ISO 27001 certification. However, for an APRA-regulated financial institution, the board must independently verify that the build team maintains robust security safeguards under CPS 234. An accredited ISO 27001 certificate makes that regulatory sign-off significantly smoother. In the absence of an accredited certificate, expect to conduct extensive, manual security audits.

### Should an advisor conduct the technical review personally, or engage an independent specialist?

The lead corporate advisor should own the overall due diligence review, because the formal recommendation to the client belongs to them. If you do not come from an engineering background, engage an independent senior software engineer to lead the code review and deployment walkthrough. Document all findings in a written report; this document serves as valuable evidence demonstrating your client's diligent vendor selection process.

## Essential steps before making your recommendation

Request a comprehensive due diligence package from prospective software development partners:

- Accredited ISO 27001 certificate, official registration number, and Statement of Applicability
- Unredacted SOC 2 Type 2 assurance report and the executive summary of their latest independent penetration test
- Draft commercial agreement containing explicit intellectual property assignment and exit transition clauses
- Written biographies and Australian financial services experience of the named software engineers assigned to the project
- Confirmation of official registration on JAS-ANZ or IAF CertSearch registries
- A 90-minute live code walkthrough inspecting automated deployment pipelines and branch protections

For broader insights on selecting delivery partners, explore our guide to [choosing a software development partner for regulated platforms](/blog/choosing-software-development-partner-regulated), or review our overview of [software for Australian financial services](/industries/financial-services).

When your client needs a dependable, battle-tested software engineering team capable of satisfying rigorous technical due diligence, Palxi collaborates with corporate advisors and executive teams to build secure, bank-grade platforms from day one. [Contact our Australian team](mailto:hello@palxi.com.au).

*Industry breach statistics, accreditation standards, and intellectual property laws were verified against APRA, ISO, IAF, JAS-ANZ, IP Australia, and Verizon publications on 27 September 2026. See [how we work](/#how-we-work).*

*This article provides general informational commentary and does not constitute formal legal, accounting, or prudential advice. Please consult qualified legal counsel or your appointed compliance advisor for specific operational guidance.*

*Photos: cover, ["Perth"](https://www.flickr.com/photos/7380123@N04/2709732487) by Twodogz photography, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Magnifying glass, ["Magnifying glass"](https://www.flickr.com/photos/69102917@N06/10975838886) by Mauro Cateb, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Keys, ["Keys"](https://www.flickr.com/photos/60309882@N00/3041590472) by walknboston, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
