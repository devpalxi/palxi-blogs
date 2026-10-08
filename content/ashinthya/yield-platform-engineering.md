---
title: "What a yield platform must get right behind the screen"
description: "What a yield platform must get right behind the screen: honest returns, unit prices, fees, separate client money and the ASIC rules, in plain words."
date: "2026-10-07"
lastUpdated: "2026-10-07"
author: "Palxi Team"
slug: "yield-platform-engineering"
canonical: "https://palxi.com.au/blog/yield-platform-engineering"
site_name: "Palxi"
kicker: "Wealth and digital assets"
coverImage: "hero.jpg"
coverImageAlt: "Melbourne city towers and a spired cathedral rising behind Princes Bridge and the Yarra River at dusk"
og_image_alt: "Melbourne city towers and a spired cathedral rising behind Princes Bridge and the Yarra River at dusk"
tags: ["yield platform", "wealthtech", "portfolio management software", "managed investment schemes", "asic"]
lang: "en-AU"
---

# What a yield platform must get right behind the screen

On 17 June 2026, the High Court of Australia delivered a unanimous 7-0 judgement regarding an investment product called Earner. In 2022, the service had offered Australian consumers "fixed yield returns from digital assets". Following regulatory action by the Australian Securities and Investments Commission (ASIC), the High Court ruled that Earner was legally a financial product, confirming that operating such a platform requires an Australian Financial Services Licence (AFSL) ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-124mr-asic-successful-in-high-court-block-earner-appeal), 17 June 2026).

Earner operated as a yield platform — a website or mobile application that invites Australians to deposit funds in exchange for regular income payments, commonly referred to as "yield". Marketing screens typically highlight an attractive headline return, such as 7 per cent a year.

Behind that simple percentage sits significant legal and technical complexity: corporate financial licences, valuation rules, performance fee calculations, and statutory trust accounts. 

This guide explains how Palxi approaches wealth and investment software engineering, how Australian regulations protect investor funds, and what practical questions directors, operators, and everyday investors should consider.

## What sits behind a yield

Under Australian corporate law, most yield products operate as managed funds. According to Moneysmart, the Australian Government's consumer finance resource managed by ASIC, a managed fund is an arrangement where "money from many investors is pooled". When you invest, you "don't own the underlying investments directly. Instead, you own a stake in the fund" ([Moneysmart](https://moneysmart.gov.au/managed-funds-and-etfs/what-is-a-managed-fund)).

That stake is represented by units. Think of the pooled fund as a cake divided into equal slices. Each unit represents one slice, and the unit price reflects what an individual slice is worth based on current valuations.

The fund manager invests this pooled capital — frequently by providing commercial loans to Australian property developers or private businesses, commonly known as private credit. The interest paid by borrowers funds the returns distributed to investors. Moneysmart refers to these regular payouts as "distributions".

The formal legal term for this pooled structure under the Corporations Act 2001 is a Managed Investment Scheme (MIS). The software that tracks units, values underlying assets, and calculates monthly distributions is known as portfolio management software. Wealthtech is the broader industry term for software engineered to manage investments and private wealth.

## The Australian rules, in plain words

Australian investment funds are regulated under the Corporations Act 2001 and supervised by ASIC, Australia's corporate and financial markets regulator.

| Statutory regulation | Plain-language meaning | Who it applies to |
|---|---|---|
| Australian Financial Services (AFS) licence | Official regulatory permission granted by ASIC to operate a financial services business | Generally, any business issuing units, giving financial advice, or operating an investment fund |
| Managed fund registration | The fund is formally registered on ASIC's national register, subjecting it to statutory governance rules | Generally, any fund with more than 20 retail members, or promoted professionally to the public |
| Responsible Entity | The corporate entity holding primary legal accountability for managing a registered scheme | Must be an Australian public company holding an appropriate AFS licence |
| Design and Distribution Obligations (DDO) | The requirement to define a specific target market and ensure products are not sold inappropriately | Product issuers and distributors offering financial products to retail consumers |

Under ASIC rules, an investment fund generally "must be registered if it has more than 20 members" or is promoted by an organisation whose business involves promoting funds ([ASIC](https://www.asic.gov.au/for-finance-professionals/fund-operators/register-a-managed-investment-scheme)). The Responsible Entity appointed to manage the fund must be an Australian public corporation holding an active AFS licence.

Certain specialized funds are restricted exclusively to wholesale or "sophisticated" investors (high-net-worth individuals or institutional entities meeting specific legal asset tests). While wholesale funds are exempt from public registration, their corporate operators must still hold an AFS licence.

The Design and Distribution Obligations (DDO) have applied across Australia since 5 October 2021 ([ASIC](https://www.asic.gov.au/regulatory-resources/managed-funds/design-and-distribution-obligations-for-schemes)). The fund issuer must publish a formal Target Market Determination (TMD) — a public document setting out the financial profile of consumers the product is suited for. The issuer must also take reasonable steps to ensure marketing and sign-up workflows target that specific audience.

For software platforms, the TMD should dictate the customer onboarding screens. If a fund requires a four-year minimum lock-up period and carries high liquidity risk, the software must verify an applicant's investment horizon before accepting any funds.

## Showing returns honestly on a yield platform

![An old balance scale with two brass pans hanging from a metal beam against a white background](balance-scale.jpg)

*A balance scale: weighing incoming investment cash flows against outgoing distributions.*

The advertised annual rate is usually the first detail an investor sees. It is also where regulatory reviews have identified significant transparency problems.

When an investor receives a monthly cash payment, that money can come from two completely different sources:

1. **Genuine earnings:** Interest or dividends paid by borrowers and businesses using the capital.
2. **Return of capital:** Handing back part of the investor's original deposited capital (or funds contributed by new investors).

To an investor looking at their bank statement, both cash deposits look identical.

In September 2025, ASIC published a comprehensive review of Australia's $200 billion AUD private credit sector. ASIC observed that distributions in some funds were not paid "100% from cash flows" generated by loans, with shortfalls funded "effectively from capital (including from new investor contributions)". ASIC warned that "this is not always clear" in investor reports and promotional dashboards ([ASIC, REP 814](https://download.asic.gov.au/media/z2tnnasb/rep814-published-22-september-2025.pdf), September 2025).

Consider a fund holding $1 million AUD in commercial loans. Over twelve months, borrowers pay $60,000 AUD in interest and the manager deducts $15,000 AUD in operating fees, leaving $45,000 AUD in genuine net earnings. If the fund distributes $70,000 AUD to investors to match an advertised 7 per cent yield, the remaining $25,000 AUD has been drawn directly from capital reserves.

A properly engineered yield platform makes this distinction completely transparent:

- Every payment is explicitly labelled on customer statements and dashboards as either genuine income or return of capital.
- Target returns are clearly presented as targets, displayed alongside the net return actually earned by the fund.
- Published performance figures show returns after all management fees have been deducted.
- Non-performing loans or late borrower repayments are reflected in asset valuations immediately rather than hidden.

Building these transparent reporting controls into software from day one protects both investors and fund managers.

## Unit prices and fees

A fund's unit price is calculated by taking total fund assets, subtracting outstanding liabilities, and dividing the net balance by the number of units issued. If a fund owns $1 million AUD in assets with no debt and has 1 million units on issue, the unit price is exactly $1.00 AUD.

This calculation runs whenever an investor deposits fresh capital or withdraws their funds. If the unit price is calculated too high, new investors pay too much for their share. If it is calculated too low, new entrants dilute the value owned by existing investors.

Valuing unlisted private loans requires careful governance. Unlike shares traded on the Australian Securities Exchange (ASX), a private commercial loan does not have an active public market price. Someone must assess its recoverable value. ASIC's report highlighted the frequency and independence of private credit valuations as operational areas requiring rigorous oversight.

Software platforms should retain a tamper-proof digital audit log of every published unit price, recording the underlying financial inputs and the identity of the officer who verified them.

Fee transparency is equally critical. ASIC noted that in many Australian private credit funds, managers retain between 50 and 100 per cent of upfront loan establishment fees charged to borrowers. Because these fees are "usually not disclosed" on retail investor dashboards, the headline management fee can understate what the manager actually earns. Software should disclose all sources of manager remuneration clearly.

## Keeping client money separate

![A wall of numbered bronze safe deposit boxes, each with its own pair of keyholes](safe-deposit-boxes.jpg)

*Safe deposit boxes: keeping client assets strictly segregated from corporate operations.*

In a registered investment scheme, money and underlying assets belong legally to the investors. Under ASIC Regulatory Guide 133, a Responsible Entity "must hold scheme property on trust for members" ([ASIC, RG 133](https://www.asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-133-funds-management-and-custodial-services-holding-assets)).

The regulatory standard dictates that scheme property must be "clearly identified as scheme property" and strictly quarantined from the manager's corporate operating accounts and other funds.

Investors' savings must never mix with the bank accounts an operator uses to pay office rent, technology bills, or staff salaries.

From an engineering perspective, this legal segregation requires:

- Dedicated, independent trust bank accounts held at an Australian bank in the name of the fund or an independent licensed custodian.
- An individual sub-ledger tracking every dollar deposited, earned, or withdrawn by each investor.
- Daily automated bank reconciliations comparing software ledger balances against verified bank settlement statements.
- Strict authorization controls preventing any transfer between client trust accounts and company operating accounts without dual human approval.

## What ASIC has done about yield products

ASIC has placed the $200 billion AUD private credit market under heightened regulatory scrutiny, noting that practices in certain retail-facing platforms did not compare favourably with international standards.

This scrutiny has resulted in active regulatory enforcement. On 2 July 2026, ASIC issued interim stop orders halting the retail distribution of two fixed-income investment products ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-142mr-asic-issues-ddo-stop-orders-against-stratfund-s-australian-fixed-income-fund), July 2026). An interim stop order legally halts the distribution of a financial product to retail consumers for 21 days while deficiencies are investigated.

In that matter, ASIC was concerned that the product's Target Market Determination marketed the fund to everyday retail investors seeking "capital preservation", despite the product carrying a four-year minimum lock-up term that contradicted those goals. The orders were revoked on 20 July 2026 after disclosures were corrected. At the time, ASIC noted it had issued nearly 100 stop orders across the market under its DDO powers.

Digital asset and cryptocurrency "earn" programs face identical regulatory standards. In the High Court's Block Earner decision, the court emphasized that it evaluates the "contractual substance of Earner, rather than how it was labelled or marketed".

ASIC's regulatory guidance on digital assets, INFO 225, confirms that "yield-bearing" stablecoins and automated reward pools are generally classified as interests in a managed investment scheme ([ASIC, INFO 225](https://www.asic.gov.au/regulatory-resources/digital-transformation/digital-assets-financial-products-and-services)). If an investment product holds digital currency, explore our guides on [AUD stablecoin minting and redemption](/blog/audd-stablecoin-minting-redemption) and [digital asset custody engineering](/blog/fireblocks-integration-digital-asset-custody).

## Questions to ask before you build or invest

For an organisation developing a yield platform, establish your corporate structure and AFS licensing before designing user interfaces. Ledger balances, valuation methodologies, and daily reconciliations must be engineered into the software from the foundation, alongside AUSTRAC identity verification workflows as detailed in our guide to [KYC and AML by design](/blog/kyc-aml-by-design).

For prospective investors and company directors, these practical questions provide a sound checklist:

| Evaluation question | Plain-language importance |
|---|---|
| Which Australian Financial Services Licence covers this platform? | Unlicensed platforms leave investors without access to independent dispute resolution or statutory protections |
| Is the fund registered with ASIC, or restricted to wholesale investors? | Dictates which consumer protection standards and disclosure laws apply |
| What does the Target Market Determination say regarding who this product suits? | If your personal investment timeline does not match the TMD, the product is not designed for you |
| What portion of recent monthly distributions came from genuine income versus capital return? | Returning capital means you are simply receiving your own deposited money back |
| Who determines the valuation of underlying loans, and how frequently? | The published unit price is only as dependable as the underlying loan valuations |
| What fees does the manager collect, including upfront establishment charges from borrowers? | Disclosed management fees may not reflect total manager remuneration |
| Where are customer funds deposited, and in whose legal name? | Client funds must be quarantined in dedicated trust accounts separate from operating funds |
| What are the withdrawal terms and liquidity limitations? | Many private credit funds enforce multi-year minimum terms or restrict withdrawals during market downturns |

## Common questions

### Is a yield platform the same as a bank term deposit?

No, they are fundamentally different. A bank term deposit is an account with an APRA-regulated Australian bank, backed by the Australian Government's Financial Claims Scheme up to $250,000 AUD per depositor. A yield platform is an investment fund where you purchase units. Moneysmart explicitly cautions that "managed funds are not risk-free" and that investors "may get back less than you invested" ([Moneysmart](https://moneysmart.gov.au/managed-funds-and-etfs/what-is-a-managed-fund)).

### Does restricting a platform to wholesale investors bypass Australian regulations?

Only partially. While a fund restricted exclusively to wholesale or sophisticated investors is exempt from public scheme registration, the operating entity must still hold an AFS licence. Furthermore, ASIC's regulatory reviews explicitly focused on governance standards across wholesale private credit funds.

### Do Australian investment rules apply to cryptocurrency yield products?

Yes. In June 2026, ASIC confirmed that any organisation offering "products that provide a return to consumers" must determine whether those arrangements constitute financial products or managed investment schemes. If they do, the operators must be appropriately licensed before offering them to Australians ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-124mr-asic-successful-in-high-court-block-earner-appeal)).

## What to do next

If your organisation is planning an investment or yield platform, obtain qualified legal and compliance counsel regarding your licensing obligations before writing any code. Then review these practical controls with your software engineering team:

- Can your software cleanly separate monthly investor payments into genuine earnings and return of capital?
- Does your platform retain an immutable digital audit log of every published unit price and valuation input?
- Does your system perform automated daily reconciliations between internal ledgers and bank trust statements?

If you are evaluating an investment as an individual, examine the product disclosure statement (PDS) and Target Market Determination carefully, and seek personal guidance from a licensed Australian financial advisor.

To explore how we design secure wealth and financial technology, view our overview of [software for financial services](/industries/financial-services), or read about [hedging currency exposure for digital assets](/blog/crypto-hedging-treasury-tools).

When your organisation needs experienced Australian software engineers to design, build, and maintain compliant wealth management platforms, Palxi collaborates closely with executive and advisory teams from initial planning through to operational launch. [Get in touch with our team](mailto:hello@palxi.com.au).

*Facts in this article were verified against publications from ASIC and Moneysmart on 7 October 2026. Learn more about [how we work](/#how-we-work).*

*This article provides general factual information and does not constitute financial, legal, or investment advice. Please seek guidance from qualified compliance professionals or a licensed financial advisor regarding your personal circumstances.*

*Photos: cover, ["Melbourne Skyline and Princes Bridge, Dec 2008"](https://commons.wikimedia.org/w/index.php?curid=3324149) by Diliff, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), cropped, rooftop signage blurred. Balance scale, ["Scales, balance (51360307143)"](https://commons.wikimedia.org/w/index.php?curid=109337508) by Auckland Museum Collections, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Safe deposit boxes, ["Safe Deposit Boxes"](https://commons.wikimedia.org/w/index.php?curid=154113042) by Fixedsun, CC0, cropped.*
