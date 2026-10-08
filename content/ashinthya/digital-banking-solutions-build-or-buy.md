---
title: "Digital banking solutions in Australia: build or buy"
description: "Which parts of a lender's digital banking stack to buy and which to build, with the APRA, ASIC, CPS 230 and CDR rules that shape the choice in Australia."
date: "2026-09-27"
lastUpdated: "2026-09-28"
author: "Palxi Team"
slug: "digital-banking-solutions-build-or-buy"
canonical: "https://palxi.com.au/blog/digital-banking-solutions-build-or-buy"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "Looking up into an ornate domed ceiling with a glass skylight inside a heritage building on Collins Street, Melbourne"
og_image_alt: "Looking up into an ornate domed ceiling with a glass skylight inside a heritage building on Collins Street, Melbourne"
tags: ["digital banking", "build vs buy", "open banking", "cps 230", "lending"]
lang: "en-AU"
---

# Digital banking solutions in Australia: build or buy

In March 2026, Therese McCarthy Hockey of the Australian Prudential Regulation Authority (APRA) — the national regulator responsible for supervising banks and protecting depositors' savings — spoke at the annual forum for the Customer Owned Banking Association (COBA), which represents Australia's mutual banks and credit unions. She noted that the mutual banking sector "already has a heavy reliance on a small group of technology providers" ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), 17 March 2026), citing APRA's own supervisory analysis.

That observation carries real weight for any organisation planning its digital banking systems. If a lender buys every piece of software off the shelf from established providers, it ends up depending on the exact same platforms as the rest of the industry. Regulators are already watching that concentration closely to ensure our financial system remains resilient. On the other hand, attempting to build every piece of software from scratch can easily exhaust budgets and years of effort just to recreate standard accounting ledgers that already exist.

Across Palxi's work building modern financial technology, we have found that the right balance always begins with a single question: what type of licence does the organisation hold?

## Start with the licence, not the vendor list

The regulatory licence determines exactly which legal obligations and technical standards apply to a business. Getting this distinction right at the beginning keeps the entire software strategy on solid ground.

In Australia, a non-bank lender offering consumer loans or mortgages typically operates under an Australian credit licence issued by the Australian Securities and Investments Commission (ASIC), the corporate and consumer protection regulator. ASIC notes that any business engaging in consumer credit activities "will generally need an Australian credit licence or authorisation from a credit licensee before starting business" ([ASIC](https://www.asic.gov.au/for-finance-professionals/credit-licensees/do-you-need-a-credit-licence)). 

What a non-bank credit licensee cannot do is accept deposit savings from the public. The Reserve Bank of Australia (RBA) notes that non-bank lenders represent roughly 6 per cent of Australia's financial system assets and explicitly defines them as "lenders that are restricted from offering deposits" ([RBA Financial Stability Review](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026).

To hold everyday deposits, an organisation must become an Authorised Deposit-taking Institution (ADI) supervised by APRA. This category includes traditional commercial banks, building societies, and mutual credit unions. 

For new financial institutions entering the market, APRA offers a pathway known as a Restricted ADI licence. This framework allows a new business to test its systems and business model under strict legal guardrails: total customer deposits across the entire business are capped at $2 million AUD, and no individual customer can hold more than $250,000 AUD (the same limit protected by the Australian Government's Financial Claims Scheme). The restricted phase lasts for up to two years ([APRA information paper](https://www.apra.gov.au/system/files/2021-03/Information%20paper%20-%20ADI%20New%20entrants%20-%20a%20pathway%20to%20sustainability_0.pdf), March 2021). At the end of that window, APRA explains that "the Restricted ADI will either progress to an ADI licence or exit the industry."

APRA's guidance also makes clear that reviewing a licence application can take 9 to 18 months. Once granted, the restricted period requires the organisation to develop, test, and implement operational systems and establish formal contracts with third-party service providers. Consequently, core accounting systems and technology agreements must come together within that two-year period.

| | Non-bank lender (ASIC credit licence, consumer credit) | Restricted ADI | Full ADI (bank, mutual, credit union) |
|---|---|---|---|
| Licensed by | ASIC | APRA | APRA |
| Can take deposits | No | Yes, capped at $2 million AUD in total | Yes |
| CPS 230 applies | No | Yes | Yes |
| CDR data holder | If in scope: product data from 13 July 2026; consumer data phased in from 9 November 2026 | Check the CDR Rules for your status | Most ADIs since 1 July 2021 |
| What the build plan must show | Credit and conduct controls, lending data, collections | A path to full ADI standards within two years, and a credible exit plan | Ongoing resilience, vendor oversight, data sharing |

If a growing lender intends to seek an ADI licence in the future, it is sensible to design and contract systems to banking standards from day one. It is far simpler to negotiate robust governance terms into supplier agreements upfront than to renegotiate them once systems are already live.

## Where digital banking solutions earn their licence fee

Certain technical components are heavily regulated, capital-intensive to build, and completely invisible to everyday customers. For these foundational utilities, licensing an established commercial solution is usually the sensible choice.

![Close-up of a stainless steel cash machine keypad with number keys and coloured function buttons](atm-keypad.jpg)

*Customers see the keypad and the mobile app. Behind the scenes, the ledger must balance and report accurately every single day.*

### Core banking or loan ledger

The core banking system is the master digital record book of a financial institution. It tracks account balances, calculates interest down to the cent, applies fees, and logs every transaction. While building a proprietary core ledger is technically possible, doing so requires years of rigorous financial testing, mathematical audits, and reconciliations before a single dollar of customer funds can safely be entrusted to it.

For APRA-regulated institutions, there is also an important regulatory requirement. APRA's operational risk standard, known as CPS 230, places "core technology services" directly on its list of material service providers, alongside critical functions like risk management and internal auditing ([APRA, CPS 230](https://www.apra.gov.au/standards/cps-230)). This classification requires a formal supplier register, legally binding service agreements with guaranteed continuity protections, and full rights for APRA to inspect vendor operations. 

When APRA finalised targeted amendments to CPS 230 in April 2026, some industry submissions requested blanket exemptions for major cloud and information technology suppliers. APRA maintained its firm position, stating that exemptions remain "reserved for types of provider where there is a universal contract gap and inability to negotiate bespoke terms" ([APRA](https://www.apra.gov.au/news-and-publications/final-targeted-amendments-cps-230-operational-risk-management), 30 April 2026).

When choosing a core banking provider, examine the legal contract and operational safeguards just as carefully as the software demonstration. Our companion [guide to CPS 230 and your technology vendors](/blog/cps-230-technology-vendors) explains these essential contract protections step by step.

### Card issuing and processing

Providing payment cards involves card scheme rules, strict security certifications, tokenisation (the process of replacing physical 16-digit card numbers with secure digital tokens on smartphones), and automated fraud monitoring. Very few institutions outside the major Australian retail banks choose to build this processing infrastructure in-house. Buying access through an established payment processor makes sound practical sense. The engineering team can then concentrate on creating clear security controls and a calm, reassuring experience for customers using their cards.

### Identity verification and screening

Australian laws require financial institutions to verify the identity of every customer before providing financial services — an obligation known as Know Your Customer (KYC). This involves checking official documents against national registers, biometric face matching, and screening against international sanctions registers and lists of Politically Exposed Persons (PEPs — individuals holding prominent public offices who require additional diligence).

Commercial identity verification services specialise in connecting to these government and international databases. Licensing these screening tools is standard practice. The organisation's role is to ensure that identity checks flow smoothly into onboarding, customer records, and case management systems.

Remember that using an automated verification provider does not transfer legal accountability away from the institution. The lender remains fully answerable to Australian regulators for its customer due diligence, as detailed in our guide to [KYC and AML by design](/blog/kyc-aml-by-design).

### Banking as a service

Banking as a Service (BaaS) allows a non-bank business to offer deposit accounts or payment cards issued through an existing ADI partner's licence. This arrangement provides a practical way to offer banking features without undergoing the extensive multi-year process of obtaining an independent banking licence. 

The practical trade-off is that your product operates inside another institution's risk and compliance framework. The partner bank's regulatory obligations under CPS 230 will flow directly down to you in the form of contractual restrictions, operational reviews, and regular audits. For a broader look at adding regulated features to customer platforms, see our guide on [embedded finance for payments and lending](/blog/embedded-finance-payments-lending).

## What to build: the parts customers and credit committees notice

The software worth building in-house is the software that carries the organisation's unique policies, customer care standards, and business judgement. Two community lenders running on the exact same core accounting ledger can — and should — feel entirely different to the Australians who use them.

![Laptop screen at an angle showing lines of source code in a text editor](code-on-laptop.jpg)

*The software worth customising is the software that embodies your customer care standards and lending decisions.*

### Customer experience

The mobile application, online portals, and member service screens represent how borrowers interact with your organisation. Standard vendor interfaces tend to look identical across every client they supply. Building a custom interface connected via secure digital bridges — known as Application Programming Interfaces (APIs) — allows an organisation to update a customer journey or improve readability whenever needed, without waiting months for a software vendor's release cycle.

### Credit decisioning

Lending policies are where an Australian financial institution manages risk and safeguards depositors or investors. The mathematical rules governing household expense assessments, serviceability interest-rate buffers, pricing tiers, and hardship exceptions reflect your organisation's distinct values and credit appetite. 

These decision rules should be owned, versioned, and easily audited by the lender itself. Licensing a flexible calculation engine is reasonable, but handing core credit policy over to an external vendor's support queue often leads to delays and lost control. We examine this end-to-end architecture in [building a bank-grade lending platform](/blog/bank-grade-lending-platform-australia).

### The integration layer

Every separate system in a modern digital banking environment must be connected: the core ledger to card processing, online identity checks to customer records, payment systems to general ledgers, and all transactions to regulatory reporting databases. 

The integration layer is the internal network of secure software bridges that holds everything together. It handles timeouts, payment retries, daily reconciliations, and automatic backup routines if an external provider experiences an outage. 

Because this connecting layer is behind the scenes and does not feature in vendor sales presentations, it is frequently under-scoped in initial project plans. Yet it is precisely what ensures reliability and makes switching vendors possible in future years.

## The decision in one table

| Component | Default recommendation | Why | Check before signing or starting |
|---|---|---|---|
| Core banking or loan ledger | Buy | Capital-intensive to build, invisible to customers, classified as CPS 230 material for ADIs | Contract terms, data export rights, vendor exit assistance |
| Card issuing and processing | Buy | Requires card scheme certifications and dedicated fraud infrastructure | Who carries fraud liability, uptime guarantees |
| Identity verification and screening | Buy | Relies on specialised national document databases | Where Australian customer data is hosted, how records are archived |
| Deposit accounts for a non-bank | Buy (BaaS partner) or apply for an ADI licence | Accepting retail deposits requires an ADI licence | What the partner bank's risk framework will require of your team |
| Customer experience | Build | Primary point of difference for customer trust and accessibility | Screen accessibility, complete API coverage of the core |
| Credit decisioning | Build the policy, buy or build the engine | Credit policy represents the lender's own lending judgement | Rule versioning, testing tools, clear audit trails |
| Integration and data layer | Build | Holds the architecture together and prevents vendor lock-in | System monitoring, daily reconciliations, offline fallback modes |
| CDR data holder APIs | Buy or build, depending on the core ledger | Governed by technical standards, but data accuracy remains the lender's responsibility | Whether the vendor's Open Banking module is formally certified and maintained |

## Open banking solutions and CDR data holder duties

For most Australian ADIs, participating in the Consumer Data Right (CDR) is a mandatory legal obligation. Often referred to as Open Banking, the CDR was introduced with Australia's four major banks as data holders before expanding to include all Australian ADIs from 1 July 2021 ([OAIC](https://www.oaic.gov.au/consumer-data-right/consumer-data-right-legislation,-regulation-and-definitions/consumer-data-right-participants)).

In 2026, designated non-bank lenders also joined the system. From 13 July 2026, eligible non-bank lenders were required to share public product data, such as interest rates, fee schedules, and lending criteria. Customer-authorised data sharing begins from 9 November 2026, phased in according to lender size ([ACCC](https://www.accc.gov.au/media-release/non-bank-lenders-join-consumer-data-right-as-next-stage-commences), 13 July 2026). The Australian Competition and Consumer Commission (ACCC) expects at least 35 new non-bank data holders to join the system, joining more than 1.3 million Australians who already use CDR-powered services.

This framework influences software choices. If an organisation's core banking provider offers a certified CDR module, licensing that technical interface can save substantial engineering time. However, the legal responsibility for data quality remains entirely with the lender. If published product rates do not match what is advertised, or if customer data contains omissions, the regulatory consequences rest with the institution, not the software provider.

The CDR also provides useful tools for lenders. If an institution is accredited to receive Open Banking data, borrowers can securely share their bank statements and transaction histories with their consent. This eliminates the need for manual paperwork and feeds verified income and expense figures directly into automated credit assessments. We explore both data sharing and data receipt in [what it takes to build for the Consumer Data Right](/blog/consumer-data-right-build).

## Concentration is a supervisory question now

Relying entirely on external software vendors carries practical operational risks. In its March 2026 Financial Stability Review, the Reserve Bank of Australia highlighted that some of Australia's largest financial entities depend on roughly 150 different service providers for critical operations. Many of these third-party suppliers service multiple institutions simultaneously across the Australian market ([RBA](https://www.rba.gov.au/publications/fsr/2026/mar/resilience-of-the-australian-financial-system.html), March 2026).

For mutual banks and community credit unions, supervisory scrutiny is particularly acute. APRA's Therese McCarthy Hockey cautioned that this shared dependency "creates sector-wide vulnerabilities that need to be understood and managed proactively" ([APRA](https://www.apra.gov.au/news-and-publications/apra-member-therese-mccarthy-hockeys-remarks-2026-coba-ceo-and-director-forum), 17 March 2026).

Consequently, every software procurement decision should include an exit strategy. APRA already enforces this discipline for new market entrants: any applicant for a Restricted ADI licence must submit "a credible exit plan that can be executed if needed" ([APRA information paper](https://www.apra.gov.au/system/files/2021-03/Information%20paper%20-%20ADI%20New%20entrants%20-%20a%20pathway%20to%20sustainability_0.pdf), March 2021). 

The same principle applies to individual technology systems. Can your business export its complete historical data in an open, standard format? Does your software architecture isolate third-party software so that replacing a vendor in future years remains achievable?

Consider a credit union negotiating a contract renewal with its core technology provider. If the member app, credit assessment rules, and compliance reporting tools are all tightly intertwined with the vendor's proprietary system, the credit union has very little negotiating leverage. But if the organisation communicates through an independent internal API bridge, changing systems remains a realistic option. That architectural independence directly improves contract terms and pricing leverage. For institutions managing older systems, our guide on [modernising a legacy core without a big-bang rewrite](/blog/legacy-core-banking-modernisation) outlines a practical, staged approach.

## Common questions

### Can a non-bank lender use a banking-as-a-service provider to take deposits?

Customer deposits always sit legally with the partner bank under that bank's ADI licence. The non-bank's customer product must adhere strictly to the partner bank's risk policies, and the non-bank cannot present itself as a bank or hold deposits directly without its own ADI licence. Always seek qualified legal advice on how deposit relationships are structured and communicated clearly to consumers.

### Does CPS 230 apply to a non-bank lender?

CPS 230 applies directly to APRA-regulated entities, including licensed banks, credit unions, and insurance companies. However, any non-bank lender that partners with a bank, uses bank payment rails, or plans to seek an ADI licence in the future will encounter these requirements through partnership agreements and institutional due diligence reviews.

### Is buying a core platform always cheaper than building one?

Not necessarily. Software licence fees are frequently billed on a per-account or per-transaction basis, and annual costs can escalate significantly once your business becomes dependent on the platform. It is wise to calculate the total cost of ownership over a five-to-seven-year timeframe, including data export and exit costs, as discussed in our analysis of [custom versus off-the-shelf financial software](/blog/custom-vs-off-the-shelf-financial-services).

## What to do next

Before attending software vendor demonstrations, document these practical decisions:

- Note the regulatory licence your organisation holds today, and any licence you plan to seek over the next three years.
- Review each component in the decision table above, categorising it as buy, build, or under review, along with a concise plain-English rationale.
- For every software licence, verify who legally owns your customer data, how easily you could transition to another provider, and whether the contract complies with CPS 230 standards.
- Clarify which Consumer Data Right obligations apply to your business today and which come into force over the coming year.

This single document provides a clear foundation for both software procurement and engineering plans. To learn more about how we design financial technology, visit our guide to [software for financial services](/industries/financial-services).

When your organisation needs experienced Australian engineers to design and build dependable financial platforms, Palxi works alongside your leadership and advisory teams from the initial architecture through to launch. [Get in touch with our team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from APRA, ASIC, the RBA, the ACCC, and the OAIC on 27 and 28 September 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general factual information and does not constitute financial or legal advice. Please consult your compliance professionals or legal advisor regarding your specific regulatory requirements.*

*Photos: cover, ["333 Collins Street Melbourne"](https://commons.wikimedia.org/w/index.php?curid=94908252) by a.canvas.of.light, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Cash machine keypad, ["Free ATM keypad"](https://www.rawpixel.com/image/5912776/free-atm-keypad-public-domain-cc0-photo), rawpixel, CC0, cropped. Code on a laptop, ["Code on laptop screen"](https://www.flickr.com/photos/35850894@N08/49977353057) by markus119, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
