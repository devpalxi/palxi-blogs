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

Your client has approved the build. The budget is in the board papers, and now the client wants a name. Who should build it?

Whichever team you suggest, your judgement goes with it. Technical due diligence is how you make sure that name holds up once the work starts.

For an APRA-regulated client, it's also part of a formal duty. Before entering into or materially modifying a material arrangement, the entity must "undertake appropriate due diligence, including an appropriate selection process and an assessment of the ability of the service provider to provide the service on an ongoing basis" ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)).

Third parties now show up in about half of all breaches. Verizon's 2026 Data Breach Investigations Report found that breaches involving a third party now account for 48 per cent of all breaches, up 60 per cent on the year before ([Verizon](https://www.verizon.com/about/news/breach-industry-wide-dbir-finds), May 2026).

This guide is written for advisors. Each check ends in something you can verify yourself, such as a register entry or a working session with the people who will write the code.

> **The short version**
>
> - Technical due diligence on a build team covers its people, security evidence, code, delivery habits and contract terms. A capabilities deck covers none of them properly.
> - For APRA-regulated clients, CPS 230 requires due diligence before a material arrangement starts, and CPS 234 requires the entity to assess a third party's information security capability.
> - To check an ISO 27001 certificate, look it up on IAF CertSearch or the JAS-ANZ register, read the scope and confirm it is the 2022 version.
> - In Australia, a contractor owns the IP it creates unless the contract says otherwise. Get the assignment in writing before work starts.
> - Ask to see real code and a real pipeline. Software due diligence finds problems that questionnaires miss.

## Why the recommendation carries your risk

When an advisor names a build team, the client hears an endorsement. If the team misses deadlines or walks away with the only copy of the system, the client remembers who suggested it.

Regulation adds a formal layer. CPS 230 puts "core technology services" on the default list of material service providers for every APRA-regulated entity ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). A team that builds and then runs a lending platform or payments service may well fall into it. [What CPS 230 expects of technology vendors](/blog/cps-230-technology-vendors) sets out the contract terms that follow.

CPS 234 adds a security layer. Where a third party manages the entity's information assets, the entity "must assess the information security capability of that party, commensurate with the potential consequences of an information security incident affecting those assets". It must also "evaluate the design of that party's information security controls" ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

Be precise about who these rules bind. They apply to the regulated entity, not to the build team and not to you. But the entity will rely on your recommendation when it records why it chose this team. The evidence you gather becomes part of its due diligence file, and the board may later test it with [the questions a board should ask under CPS 234](/blog/apra-cps-234-board-questions).

## What technical due diligence on a build team covers

A useful review covers the areas below. For each, the table sets out what to request and the answers that should make you pause. The last row goes to CPS 230's test of whether a provider can deliver "on an ongoing basis".

| Area | What to ask for | What should worry you |
|---|---|---|
| Company and people | ABN, the proposed team structure, CVs of the named leads, a subcontractor list | Senior people in the pitch, unnamed juniors on the project |
| Security certification | ISO 27001 certificate and Statement of Applicability, SOC 2 Type 2 report if held | A scope that leaves out the delivery team |
| Delivery practice | A live walkthrough of code review, testing, deployment and access control | Nobody can show a deployment log |
| Code quality | A sample repository or read-only walkthrough, plus dependency and licence scan output | No automated tests, no dependency scanning |
| Regulated evidence | Redacted examples of evidence produced for a past audit | "The client handled compliance" |
| Ownership and exit | IP assignment clause, who owns repositories and cloud accounts, exit support terms | Code held only in the vendor's accounts |
| Support and incidents | On-call arrangements, incident history, response times | Support on a "best effort" basis |
| Viability and continuity | Recent financial statements or an accountant's letter, professional indemnity and cyber insurance certificates, the team's own business continuity plan | One client providing most of the revenue, or no insurance cover |

Software due diligence is the code-level part of this review. It matters most when the team will take over an existing codebase, or bring its own components into your client's product.

## How to check if a company is ISO 27001 certified

![A round magnifying glass held up against closed grey window blinds, showing a magnified view through the lens](magnifying-glass.jpg)

*Check the register entry as well as the PDF certificate.*

Start with the basics. ISO "does not perform certification or issue certificates" ([ISO](https://www.iso.org/certification.html)). Independent certification bodies run the audits and issue certificates. Accreditation bodies, such as JAS-ANZ in Australia and New Zealand, assess those certification bodies.

So a logo on a website proves little. Work through these checks instead:

1. **Get the certificate.** Note the certificate number, the certification body, the standard version, the scope and the expiry date.
2. **Look it up.** [IAF CertSearch](https://www.iafcertsearch.org/) is a global database of accredited management system certificates. [Its FAQ](https://support.iafcertsearch.org/iaf-certsearch-faq/iaf-certsearch-faq/general) says "the database only contains accredited certifications", and a few searches a day are free. For Australian certification bodies, the [JAS-ANZ register](https://register.jasanz.org/certified-organisations) lists certified organisations and accredited bodies.
3. **Check the version.** The current edition is ISO/IEC 27001:2022. Under the IAF's transition rules (the IAF's roles have since passed to Global ACI), "All certifications based on ISO/IEC 27001:2013 shall expire or be withdrawn at the end of the transition period", and that period ended on 31 October 2025 ([IAF MD 26](https://iaf.nu/iaf_system/uploads/documents/IAF_MD26_Issue_2_15012023.pdf)). A 2013 certificate shown to you today is out of date, whatever expiry date it carries.
4. **Read the scope.** It should name the legal entity, locations and services that will deliver your client's work. A certificate held by a parent company's hosting arm says little about a software team in another subsidiary.
5. **Read the Statement of Applicability.** It lists the controls the organisation applies and why any are excluded. Look for secure development, supplier management, access control and logging.
6. **Find out about the last audit.** When was the most recent surveillance audit, and did it raise any major nonconformities? You may not get the report, but you should get a straight answer.

If a certificate doesn't appear on either register, don't jump to conclusions. ISO notes that accreditation is not compulsory, and "non-accreditation does not necessarily mean the certification body is not reputable" ([ISO](https://www.iso.org/certification.html)). Our view: an unaccredited certificate is still harder to rely on, so ask the team why they chose that route.

A team that isn't certified yet may be partway there. [What ISO 27001 costs an Australian fintech](/blog/iso-27001-certification-australia-cost) shows how long the path usually takes, which helps you judge whether a promised date is realistic.

## Evidence beyond the certificate

Take a hypothetical team with a current certificate, an accredited body and a clean scope. Its last penetration test still left two high findings open for six months. Only the documents behind the certificate would show that.

A SOC 2 Type 2 report, if the team has one, is the next document to request. Check the period it covers, whether the services you care about are in scope, any exceptions the auditor found, and the controls the report expects the customer to run. [How to read a SOC 2 report as a buyer](/blog/soc-2-for-buyers) walks through each part.

The latest penetration test summary comes next, with the status of every finding. CPS 234 requires that testing is "conducted by appropriately skilled and functionally independent specialists". Where the entity relies on a third party's testing, it must assess whether "the nature and frequency of testing of controls" meets the standard's own requirements ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)). Tests run by the engineers who wrote the code won't meet that bar. The [guide to penetration testing for financial platforms](/blog/penetration-testing-financial-platforms) covers scope and timing.

We maintain ISO 27001 controls on a client platform under external audit, and we have taken client products through SOC 2. Our view, from the build side of those audits: the list of open findings, with owners and due dates, tells you more about a team than the certificate on the wall.

## Software due diligence: see the code and the pipeline

A questionnaire records what a team says it does. A walkthrough shows what it actually does.

Request a working session, around 90 minutes, on a real repository and deployment pipeline. It might be an internal product, or a client system shown with that client's consent. Have an engineer you trust in the room if your own background is not in engineering. Look for:

- Protected main branches and required review before merge
- Tests on every change. Ask how long the suite takes: a team that runs it often should know the answer.
- A software bill of materials the team can produce on request, backed by dependency scanning in the pipeline
- Secrets in a vault, never in code, tickets or chat
- Infrastructure as code, so a lost environment can be rebuilt from the repository rather than from memory
- Deployment logs and access reviews that show who released what, and who can still reach production

Exploited software flaws have overtaken stolen credentials. Verizon's 2026 report found that using software flaws, at 31 per cent of breaches, has surpassed stolen credentials as a way in for the first time ([Verizon](https://www.verizon.com/about/news/breach-industry-wide-dbir-finds), May 2026). How a team finds and patches vulnerable components matters as much as how it writes new code.

Open-source licences deserve a question too. Some licences attach conditions to code that uses them, so the team should track licences alongside vulnerabilities. Code written with AI assistants needs a review process of its own. A clear answer, with a named reviewer, is a good sign.

## The people who will write the code

Picture month three of the project. The people in the pitch meeting may have moved on to the next sale, so get the names of the engineers who will be working on your client's system written into the proposal.

Then work through the rest of the delivery picture:

- **Subcontractors:** a list of every other party that touches the code or the environments, since your client may need to know about each one.
- **Location.** Where will staff, data and support sit? For APRA-regulated clients, material offshoring arrangements carry their own notice rules under CPS 230.
- **Key people:** the handover documentation that would let someone else pick up the system if the lead engineer left tomorrow.
- **Security vetting** before anyone gets production access, and who signs it off.

References are worth the time if you ask the right person. Speak to an engineer or product owner at a past client as well as the executive sponsor. Find out what went wrong, and how the team behaved when it did.

## Ownership, access and a way out

![A small bunch of three metal keys on a split ring with a black rubber tag, lying on a white surface](keys-on-ring.jpg)

*Ask early who will hold the keys to the code and the cloud accounts.*

Ownership disputes are an avoidable way for a good project to end badly. IP Australia is blunt about the default: "In Australia, IP created by a contractor is the property of the contractor unless otherwise stated in the contract" ([IP Australia](https://www.ipaustralia.gov.au/understanding-ip/who-owns-ip)). Employers own the IP their employees create in relation to the business. So if a build team uses its own contractors, your client needs a chain of written assignments: from each contractor to the team, and from the team to the client.

Check these before anyone signs:

- The contract assigns IP in the delivered code and documentation to the client, with a clear licence for any reusable components the team keeps.
- Source code lives in repositories the client owns, from the first commit.
- Cloud accounts, domains and third-party services are registered to the client, with client-held admin access.
- Runbooks and architecture notes are kept up to date during the build.
- Exit support is priced and described: how long the team will help a successor, and at what rate.

These points line up with the exit test that applies to any regulated platform. [Choosing between a custom build and off the shelf](/blog/custom-vs-off-the-shelf-financial-services) sets out the same questions from the build or buy angle.

## Common questions

### Is software due diligence the same as technical due diligence?

Not quite. Software due diligence usually means reviewing a codebase, often before an acquisition or before taking over a platform. Technical due diligence on a build team is wider. It covers people, security evidence, delivery practice and contract terms, with a code review as one part of it.

### Does a build team need its own ISO 27001 certificate?

No law requires it. For an APRA-regulated client, the question is whether the entity can assess the team's security capability and evaluate its controls, as CPS 234 requires. A current, accredited certificate with the right scope makes that much easier. Without one, expect a longer questionnaire and more evidence requests.

### Should the advisor run the review, or bring in someone independent?

Our view: the advisor should own the review, because the recommendation is theirs. Bring in an independent engineer for the code and pipeline session if that isn't your field. Either way, write down what you checked and what you found. That record helps the client show its selection process later.

## What to do before you make the call

Request a due diligence pack: the certificate and Statement of Applicability, any SOC 2 report and the latest penetration test summary. Add a draft contract with the IP and exit clauses, and the names of the people who will do the work. Look the certificate up yourself. Book the code walkthrough. Then give your client a short written summary of what you checked.

For the wider selection process, see [how to choose a software development partner for a regulated platform](/blog/choosing-software-development-partner-regulated), or browse [software for financial services](/industries/financial-services).

When your client needs a team to put through these checks, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against APRA, ISO, IAF, JAS-ANZ, IP Australia and Verizon sources on 27 September 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Perth"](https://www.flickr.com/photos/7380123@N04/2709732487) by Twodogz photography, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Magnifying glass, ["Magnifying glass"](https://www.flickr.com/photos/69102917@N06/10975838886) by Mauro Cateb, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Keys, ["Keys"](https://www.flickr.com/photos/60309882@N00/3041590472) by walknboston, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
