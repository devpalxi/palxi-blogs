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

On 13 July 2026, a new group of lenders had to start publishing their loan details in a shared format. They include mortgage lenders and car finance companies that are not banks. The rule comes from the Consumer Data Right, and it now reaches far beyond the big banks ([ACCC](https://www.accc.gov.au/media-release/non-bank-lenders-join-consumer-data-right-as-next-stage-commences), 13 July 2026).

From 9 November 2026 the next step starts. The largest of these lenders must send a customer's own loan records to an approved app or service, whenever that customer asks.

If you run, advise or sit on the board of a lender, that means new software. This guide explains what the rules ask for, in plain words, and what to ask before anyone starts building.

## What the Consumer Data Right is, in plain words

The Consumer Data Right (CDR) is a law that lets you tell one business to send your information to another one you trust. Think of the old way: printing six months of bank statements and handing them to a broker. Under the CDR, you approve the transfer once and the records go straight across, in a format computers can read.

It is opt-in. Nobody's data moves unless the customer says yes.

People often call it "open banking". In Australia, open banking began in July 2020 with the banks, and energy companies joined in November 2022. More than 1.3 million Australians now use the CDR, up about 135 per cent in a year, according to the ACCC.

Several government bodies share the work, and it helps to know who does what:

- **Treasury** writes the policy and the rules.
- **The Data Standards Body**, part of Treasury, writes the technical rulebook for how the data moves.
- **The ACCC** (Australian Competition and Consumer Commission) approves the businesses that may receive data and enforces the rules.
- **The OAIC** (Office of the Australian Information Commissioner) looks after the privacy side, together with the ACCC.

## Who has to take part, and when

Every business in the CDR plays one of two roles. A **data holder** is the business that already holds the customer's information, such as their lender. An **accredited data recipient** is a business the ACCC has approved to receive it, such as a budgeting app or a loan comparison site.

Non-bank lenders are the newest data holders. The government added their sector to the CDR on 21 November 2022. The rules for it took effect on 4 March 2025 ([CDR website](https://www.cdr.gov.au/rollout/cdr-non-bank-lenders-sector)). The ACCC expects at least 35 new data holders to join through this change. Which dates apply depends on the lender's size, measured by the loans and finance leases it reports to the banking regulator, APRA.

| Type of lender | Loan book size | Must publish loan details from | Must share customer data from |
|---|---|---|---|
| Initial provider | Over $10 billion | 13 July 2026 | 9 November 2026 |
| Large provider | Over $1 billion, and over 1,000 customers | 13 July 2026 | 10 May 2027 |
| Becomes large later | Passes the $1 billion test after 13 July 2025 | 12 months after | 15 months after |
| Smaller lender | Under the thresholds | Can join by choice | Can join by choice |

A smaller lender that joins by choice must then follow all the relevant rules.

The government also narrowed what has to be shared. In March 2025 it dropped the duty to share data on niche products, such as asset finance, reverse mortgages and margin loans. It cut the history lenders must keep and share from seven years to two. It also made sure Buy Now, Pay Later products are covered ([Treasury Ministers](https://ministers.treasury.gov.au/ministers/stephen-jones-2022/media-releases/consumer-data-right-expansion-deliver-better-deal), 3 March 2025).

Some harder cases are left out for non-bank lenders too. They don't have to answer requests about joint or partnership accounts. Nor do they have to answer requests made by a second user or by someone acting for the customer.

Take a hypothetical car finance company with $3 billion in loans and thousands of customers. It was already over the $1 billion line in early 2025. It had to publish its loan details by 13 July 2026, and it must share customer data from 10 May 2027.

## Two jobs for every data holder

The [CDR website](https://www.cdr.gov.au/for-providers/compliance-requirements-data-holders) sums up a data holder's duties as two main jobs.

The first is to publish product details: interest rates, fees and charges, discounts and other features. Anyone can read this information, so comparison sites can line up loans side by side.

The second is to hand over a customer's own data when an approved business asks for it with the customer's consent. The data must be in a form a computer can read.

Both jobs run through APIs. An API is a set, agreed way for two computer systems to pass information to each other. It works like a standard form that both sides know how to fill in. The Data Standards Body publishes the exact form. Its technical rules treat banks and non-bank lenders the same way.

![A hand ticking a row of boxes on a paper checklist with a bright pink highlighter pen](consent-checklist.jpg)

*Under the CDR, the customer approves each data transfer and can cancel it.*

### The customer stays in charge

When an approved app asks for a customer's records, the lender has to check with the customer first. The customer sees who is asking, which data, and for how long, up to a maximum of 12 months.

The customer can cancel at any time. The lender must act on that as soon as possible, and within two business days at the most.

Lenders also need a page in their website or app, often called a dashboard. There, customers can see each data-sharing approval and switch it off.

### What the build includes

For a lender, the work usually covers these pieces:

- the product data API, with clean and current rates and fees
- the customer data API, linked to the lender's loan records
- a consent screen and a customer dashboard
- strong sign-in and security, set out in the Data Standards Body's [Consumer Data Standards](https://consumerdatastandardsaustralia.github.io/standards/)
- systems that stay up: the standards set a target of 99.5 per cent availability each month, not counting planned outages
- records of every approval, cancellation and data release
- a report to the ACCC and the OAIC twice a year
- a CDR policy that tells customers how to complain and how to fix wrong data

Each new provider must also pass a set of official tests, called the Conformance Test Suite. Only then can it be switched on in the CDR Register, the official list of everyone taking part.

## What CDR compliance looks like after launch

Getting live is only the start. The ACCC says poor data quality and missed deadlines remain its compliance priorities.

The largest CDR penalty to date, as of December 2025, involved the Commonwealth Bank. It paid penalties of $792,000 after the ACCC issued four infringement notices. The ACCC alleged the bank had not let certain business and partnership customers share their data ([ACCC](https://www.accc.gov.au/media-release/commonwealth-bank-pays-penalties-and-offers-redress-for-alleged-breaches-of-consumer-data-right-rules), 9 December 2025). Paying an infringement notice is not an admission of a breach.

Those customers had to use manual workarounds or "revert to less secure methods of data sharing", the ACCC said. Earlier in 2025, National Australia Bank paid $751,200 over alleged data quality problems.

Both cases point to the same lesson. CDR compliance depends on the rare cases as much as the common ones. That means unusual account types, odd loan structures and records that don't match. A lender that tests only its most common loan will miss them.

## If your business wants to receive the data

Some businesses sit on the other side. A broker platform is one example. So is a budgeting app, or a lender that wants to read an applicant's bank records. Each needs to become an accredited data recipient.

The ACCC runs that process. According to the [CDR website](https://www.cdr.gov.au/for-providers/become-accredited-data-recipient), applicants must show they:

- are a fit and proper person or organisation to handle CDR data
- protect the data from misuse, loss and unauthorised access
- have a proper internal complaints process
- belong to an external dispute resolution scheme
- hold enough insurance to compensate customers if something goes wrong
- have an Australian address for service

After approval, the business still has to pass onboarding and conformance testing before it can receive data. Authorised deposit-taking institutions (banks and credit unions, in plain terms) can use a shorter application form.

![A cream envelope closed with a red wax seal on a dark wooden surface](wax-sealed-envelope.jpg)

*An accredited business must keep CDR data protected while it holds it.*

Privacy rules are strict. The CDR has 13 privacy safeguards in the law, and the [OAIC's privacy safeguard guidelines](https://www.oaic.gov.au/consumer-data-right/consumer-data-right-guidance-for-business/consumer-data-right-privacy-safeguard-guidelines) explain each one. Most apply to recipients, covering how data is collected, used, shared, kept secure and destroyed. Data holders face four of them, mostly about being open, keeping data accurate and fixing errors.

Some apps still use "screen scraping" instead. That means the customer hands over their bank password and the app logs in and copies what it sees. In March 2025 the government flagged an intention to move towards a ban on screen scraping. A business that relies on it today should plan for the CDR route.

Our article on [connecting a product to Australian banks](/blog/bank-integration-platforms-australia) looks at the other ways a product can link to bank systems.

## Common questions

### Does a small lender have to join the Consumer Data Right?

No, unless it passes the size test. A non-bank lender under the $1 billion threshold can choose to join, but it then must follow all the relevant rules. Watch the threshold closely. A lender that passes it later gets 12 months to publish loan details and 15 months to share customer data.

### Is it safe for customers to share their data this way?

The CDR was built so customers don't have to hand over passwords. Only businesses the ACCC has accredited can receive the data, and each one must meet security, insurance and complaints rules. Customers choose what to share and for how long, and they can cancel from their lender's dashboard.

### Can we pay a vendor to handle all of this?

A vendor can build and run much of the technology. The duties still sit with the lender as the data holder, and the ACCC has taken action against data holders directly. Ask any vendor how they test data quality and the rarer account types, and who answers when something breaks.

## What to do next

Start with a few plain questions to your team or advisor:

- Which group are we in (initial, large or neither), and which dates apply to us?
- Is our product information (rates, fees, eligibility) accurate in every system it comes from?
- Can our loan records be pulled out cleanly for the last two years?
- Who will own the customer dashboard and the twice-yearly report?
- If we plan to receive data, do we meet the accreditation criteria today?

Should you build these systems or buy them? Our guides on [digital banking solutions](/blog/digital-banking-solutions-build-or-buy) and [building a bank-grade lending platform](/blog/bank-grade-lending-platform-australia) walk through the trade-offs. Identity checks often sit next to CDR work, so the [KYC and AML design guide](/blog/kyc-aml-by-design) is worth a read too. More on how this fits regulated firms is on our [financial services page](/industries/financial-services).

If your business needs CDR systems built and kept compliant, Palxi is a senior engineering team that joins early and builds alongside your advisors. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against ACCC, Treasury, Consumer Data Right website, Data Standards Body and OAIC sources on 7 October 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Paddington Terraces"](https://commons.wikimedia.org/wiki/File:Paddington_Terraces.JPG) by J Bar, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), cropped. Checklist, ["Side view hand writing checklist"](https://www.rawpixel.com/image/5927216/photo-image-paper-public-domain-hand), rawpixel, CC0, cropped. Envelope, ["seal"](https://www.flickr.com/photos/72794895@N00/2049368918) by zappowbang, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
