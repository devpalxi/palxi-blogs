---
title: "Consumer Data Right: what it takes to build for it"
description: "A plain guide to the Consumer Data Right for Australian lenders: who must join, what to build, how the rules are enforced, and what to ask first."
date: "2026-10-07"
lastUpdated: "2026-10-07"
author: "Palxi Team"
slug: "consumer-data-right-build"
canonical: "https://palxi.com.au/blog/consumer-data-right-build"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "A row of old two-storey terrace houses with iron lace balconies in Paddington, Sydney, under a clear blue sky"
og_image_alt: "A row of old two-storey terrace houses with iron lace balconies in Paddington, Sydney, under a clear blue sky"
tags: ["consumer data right", "open banking australia", "cdr compliance", "non-bank lenders", "financial services"]
lang: "en-AU"
---

# Consumer Data Right: what it takes to build for it

On 13 July 2026, a major regulatory milestone arrived for Australian non-bank lenders. Finance companies, mortgage providers, and vehicle lenders that are not licensed banks were required to begin publishing their standard loan rates, fees, and eligibility criteria in a shared digital format. This obligation forms part of Australia's Consumer Data Right, which has now expanded well beyond the major banking institutions ([ACCC](https://www.accc.gov.au/media-release/non-bank-lenders-join-consumer-data-right-as-next-stage-commences), 13 July 2026).

From 9 November 2026, the next phase begins. The largest of these lenders must provide customers with the ability to share their own loan statements and repayment histories securely with accredited budgeting tools, brokers, or comparison services whenever the customer requests it.

For directors, executives, and advisors managing Australian financial institutions, meeting these standards requires purpose-built technology. 

This guide explains how Palxi approaches Consumer Data Right engineering across our products, how the regulations operate in plain words, and what essential questions to review before designing your system.

## What the Consumer Data Right is, in plain words

The Consumer Data Right (CDR) — often referred to simply as Open Banking — is an Australian law that grants you ownership of your own financial information. It gives you the legal right to instruct an institution that holds your data to share it securely with another business you choose and trust.

Consider the traditional way of applying for a loan: printing out six months of paper bank statements, scanning tax records, and driving across town to hand them to a mortgage broker or lender. Under the Consumer Data Right, you simply log in securely and give permission on your computer or phone. Your verified financial data transfers directly to the accredited provider in an encrypted format that computers can process instantly.

Customer consent is the foundation of the entire system. Information never moves unless the consumer explicitly authorises the transfer.

Australia's CDR regime launched in July 2020 with the major commercial banks, expanded to energy retailers in November 2022, and is now rolling out across non-bank lending. More than 1.3 million Australians actively use CDR services today — an increase of roughly 135 per cent in a single year, according to the Australian Competition and Consumer Commission (ACCC).

Several Commonwealth government bodies jointly administer the framework:

- **The Commonwealth Treasury:** Formulates national economic policy and draughts the statutory rules.
- **The Data Standards Body:** Operates within Treasury to create the detailed technical standards governing how computers transfer data.
- **The ACCC:** Evaluates and accredits businesses wishing to receive data, while actively enforcing regulatory compliance.
- **The Office of the Australian Information Commissioner (OAIC):** Regulates privacy protections, enforces compliance with statutory privacy safeguards, and handles customer complaints.

## Who has to take part, and when

Under the CDR, organisations operate in one of two distinct roles:

- **Data Holders:** Institutions that currently store customer records, such as licensed banks, credit unions, and non-bank lenders.
- **Accredited Data Recipients:** Independent organisations — such as comparison websites, financial planning apps, or budgeting services — that have passed extensive audits by the ACCC to receive customer data securely.

Non-bank lenders represent the newest category of data holders. The Commonwealth Government formally designated the non-bank lending sector on 21 November 2022, with formal rules taking effect on 4 March 2025 ([CDR website](https://www.cdr.gov.au/rollout/cdr-non-bank-lenders-sector)). The ACCC anticipates that at least 35 non-bank lenders will become official data holders under this framework. 

Compliance deadlines are determined by the lender's loan portfolio size, as reported to the Australian Prudential Regulation Authority (APRA):

| Lender classification | Total finance loan book size | Must publish public product data from | Must share customer loan records from |
|---|---|---|---|
| Initial major provider | Exceeding $10 billion AUD | 13 July 2026 | 9 November 2026 |
| Large provider | Exceeding $1 billion AUD, with over 1,000 customers | 13 July 2026 | 10 May 2027 |
| Reaches threshold later | Passes the $1 billion AUD test after 13 July 2025 | 12 months after reaching threshold | 15 months after reaching threshold |
| Smaller community lender | Below statutory thresholds | Can elect to join voluntarily | Can elect to join voluntarily |

If a smaller lender elects to participate voluntarily, it must then adhere to all statutory standards and timelines.

Following industry consultation in March 2025, the Commonwealth Government streamlined the requirements for non-bank lenders. The obligation to share data on niche commercial products — such as complex asset leasing, reverse mortgages, and margin lending — was removed, while confirming that Buy Now, Pay Later (BNPL) customer contracts are included. Furthermore, the mandatory historical record-sharing window was reduced from seven years to two years ([Treasury Ministers](https://ministers.treasury.gov.au/ministers/stephen-jones-2022/media-releases/consumer-data-right-expansion-deliver-better-deal), 3 March 2025).

Non-bank lenders are also exempt from handling certain complex scenarios, such as joint partnership accounts or secondary user permissions.

For instance, consider a vehicle finance company managing $3 billion AUD in customer loans and thousands of active borrowers. Because its loan book was already above the $1 billion threshold in early 2025, it was required to publish public product rates by 13 July 2026, and must enable customer-authorised data sharing by 10 May 2027.

## Two jobs for every data holder

Under the official [Consumer Data Right guidelines](https://www.cdr.gov.au/for-providers/compliance-requirements-data-holders), every data holder is responsible for two fundamental jobs:

1. **Publishing public product data:** Publishing interest rates, account fees, loan features, and eligibility terms in an open, standardized format. Anyone can view this information, enabling independent comparison tools to compare loans side by side without personal data being involved.
2. **Sharing consumer data upon request:** Securely transmitting a customer's personal loan history and account statements to an accredited service provider, but only when the customer explicitly instructs the lender to do so.

Both services operate via Application Programming Interfaces (APIs) — secure digital pipelines that allow two computer systems to exchange information reliably. The Data Standards Body publishes exact technical blueprints, ensuring banks and non-bank lenders follow identical data exchange protocols.

![A hand ticking a row of boxes on a paper checklist with a bright pink highlighter pen](consent-checklist.jpg)

*Under the Consumer Data Right, consumers maintain complete control over who receives their information and can revoke consent at any time.*

### The customer stays in charge

When an accredited app requests a borrower's records, the lending platform must first obtain explicit consent from the customer. The borrower sees a clear, plain-language screen explaining exactly who is requesting the data, which specific records will be shared, and how long the permission will last (up to a legal maximum of 12 months).

The customer retains the right to cancel sharing at any time. When a customer revokes permission, the lender must update its systems as soon as practicable, and within two business days at the latest.

Lenders must also provide a dedicated online consent dashboard inside their customer web portal or mobile app. This dashboard allows customers to view every active data-sharing permission and cancel them with a single click.

### What the build includes

Engineering a compliant data holder solution involves several core components:

- A public product data API, ensuring advertised interest rates and fee schedules are constantly up to date.
- A secure customer data API, connected directly to the organisation's core loan servicing ledgers.
- A clear customer consent workflow and an intuitive online management dashboard.
- Advanced authentication and cybersecurity controls that satisfy the Data Standards Body's official [Consumer Data Standards](https://consumerdatastandardsaustralia.github.io/standards/).
- High operational reliability: the standards mandate that APIs achieve 99.5 per cent monthly uptime, excluding scheduled maintenance windows.
- Comprehensive audit registers recording every consent approval, data request, and cancellation.
- Automated compliance reporting submitted to the ACCC and the OAIC every six months.
- A formal, public CDR policy outlining dispute resolution procedures and how customers can correct inaccurate information.

Before an institution is activated on the official CDR Register, it must successfully pass the government's Conformance Test Suite to prove that its software operates accurately and securely.

## What CDR compliance looks like after launch

Achieving technical launch is only the first step. The ACCC has made clear that maintaining high data quality, prompt response times, and uninterrupted API availability are ongoing regulatory priorities.

The significance of these standards is highlighted by regulatory enforcement. In December 2025, the Commonwealth Bank of Australia paid $792,000 AUD in penalties after the ACCC issued four infringement notices. The regulator alleged that the bank failed to provide certain commercial and partnership account holders with the ability to share their data through the CDR ([ACCC](https://www.accc.gov.au/media-release/commonwealth-bank-pays-penalties-and-offers-redress-for-alleged-breaches-of-consumer-data-right-rules), 9 December 2025). Payment of an infringement notice is not an admission of a contravention.

Because of those technical barriers, affected business customers were forced to rely on manual workarounds or less secure methods of data sharing. Earlier that same year, National Australia Bank paid $751,200 AUD in infringement penalties over alleged data quality discrepancies within its Open Banking feeds.

Both enforcement outcomes carry a clear message: CDR compliance depends heavily on handling uncommon account structures, complex loan terms, and edge cases. A development team that tests only standard, single-borrower loans will inevitably leave the institution exposed to compliance breaches.

## If your business wants to receive the data

Many organisations sit on the receiving side of Open Banking. Examples include finance brokers verifying client income, budgeting tools helping households track spending, or lenders using transaction data to assess loan serviceability. 

To receive customer data directly, an organisation must become an Accredited Data Recipient (ADR).

The ACCC oversees this accreditation process. According to the [official CDR criteria](https://www.cdr.gov.au/for-providers/become-accredited-data-recipient), applicants must demonstrate that they:

- Are fit and proper persons or corporate entities to handle sensitive financial information.
- Maintain stringent technical safeguards to protect customer data from misuse, loss, and unauthorized access.
- Provide accessible internal dispute resolution procedures.
- Maintain active membership in an approved external dispute resolution scheme (such as the Australian Financial Complaints Authority).
- Carry adequate professional indemnity and cyber insurance to protect consumers.
- Maintain a registered Australian address for legal service.

After gaining approval, the organisation must complete formal onboarding and testing before live data can flow. Licensed Authorised Deposit-taking Institutions (banks and credit unions) can access a streamlined application process.

![A cream envelope closed with a red wax seal on a dark wooden surface](wax-sealed-envelope.jpg)

*Accredited organisations must safeguard consumer data with bank-level encryption and security controls.*

Privacy protections under the CDR are governed by 13 legally binding Privacy Safeguards set out in the legislation, explained in detail in the [OAIC Privacy Safeguard Guidelines](https://www.oaic.gov.au/consumer-data-right/consumer-data-right-guidance-for-business/consumer-data-right-privacy-safeguard-guidelines). Most safeguards govern recipients, dictating how customer information is gathered, used, secured, and safely deleted once its purpose concludes. Data holders manage four core safeguards focused on maintaining accuracy, transparency, and resolving errors promptly.

Some older applications still rely on "screen scraping" — asking customers to hand over their secret internet banking passwords so automated bots can log in and copy data. In March 2025, the Commonwealth Government confirmed its intention to introduce formal regulations phasing out screen scraping. Any organisation currently relying on password scraping should prepare a migration plan toward official CDR channels.

Our companion guide on [connecting to Australian banks](/blog/bank-integration-platforms-australia) explores broader banking integration options.

## Common questions

### Does a community or boutique lender have to join the Consumer Data Right?

No, not unless its loan portfolio crosses the $1 billion AUD threshold. Non-bank lenders below this threshold are not required to participate, although they can elect to join voluntarily. However, growing lenders must monitor their loan book: passing the threshold triggers a 12-month timeline to publish product data and a 15-month timeline to enable customer data sharing.

### Is it safe for consumers to share their banking data through the CDR?

Yes. The Consumer Data Right was specifically engineered to protect everyday Australians from having to share their private banking passwords with third-party apps. Only organisations that have undergone independent security audits by the ACCC can receive data. Furthermore, consumers decide exactly which accounts to share and retain the ability to cancel sharing instantly from their lender's online dashboard.

### Can an organisation license third-party software to manage CDR compliance?

Yes, many institutions partner with specialized software providers to manage the underlying API infrastructure and testing. However, legal accountability remains with the lending institution as the data holder. Regulators issue penalties to the lender, not their software supplier. Ensure any technology partner provides rigorous testing across all loan types and provides comprehensive audit logging.

## What to do next

Before initiating software development, review these essential questions with your advisory and technology teams:

- Which regulatory category applies to your organisation (initial, large, or exempt), and what are your binding statutory dates?
- Are your published loan rates, application fees, and terms consistent across all your internal systems and marketing materials?
- Can your core loan ledgers cleanly export historical customer transaction data spanning the past two years?
- Who oversees the customer consent dashboard and ensures six-monthly compliance reports are submitted to the ACCC and OAIC?
- If your business intends to receive customer data, do your security policies satisfy the ACCC accreditation criteria?

Deciding whether to build or license these components is explored in our guides to [digital banking solutions: build or buy](/blog/digital-banking-solutions-build-or-buy) and [building a bank-grade lending platform](/blog/bank-grade-lending-platform-australia). Because customer identity checks sit alongside data sharing, our [KYC and AML by design guide](/blog/kyc-aml-by-design) is also recommended reading. For a broader overview of our engineering work, visit our guide to [software for financial services](/industries/financial-services).

When your organisation needs experienced Australian software engineers to design, build, and maintain compliant Consumer Data Right systems, Palxi collaborates closely with your executive and compliance teams. [Get in touch with our team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from the ACCC, the Commonwealth Treasury, the Consumer Data Right website, the Data Standards Body, and the OAIC on 7 October 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general factual information and does not constitute financial or legal advice. Please consult your compliance professionals or legal counsel regarding your specific statutory obligations.*

*Photos: cover, ["Paddington Terraces"](https://commons.wikimedia.org/wiki/File:Paddington_Terraces.JPG) by J Bar, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), cropped. Checklist, ["Side view hand writing checklist"](https://www.rawpixel.com/image/5927216/photo-image-paper-public-domain-hand), rawpixel, CC0, cropped. Envelope, ["seal"](https://www.flickr.com/photos/72794895@N00/2049368918) by zappowbang, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
