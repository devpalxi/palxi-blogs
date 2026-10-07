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

On 17 June 2026, the High Court ruled 7-0 on a product called Earner. In 2022 it had offered Australians "fixed yield returns from digital assets". The court found Earner was a financial product, so the business behind it needed an Australian financial services licence ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-124mr-asic-successful-in-high-court-block-earner-appeal), 17 June 2026).

Earner was a yield platform. That means an app or website that takes investors' money and promises a regular income, called a yield. The screen shows a tidy rate, such as 7 per cent a year.

Behind that number sit licences, pricing rules, fee sums and trust accounts. This guide explains them for business owners and directors, and for would-be investors.

## What sits behind a yield

The yield products in this guide are managed funds in legal terms. Moneysmart, the consumer website run by ASIC, says that in a managed fund "money from many investors is pooled". You "don't own the underlying investments directly. Instead, you own a stake in the fund" ([Moneysmart](https://moneysmart.gov.au/managed-funds-and-etfs/what-is-a-managed-fund)).

That stake is usually counted in units. Think of the fund as a cake cut into equal slices. Each unit is one slice, and the unit price is what a slice is worth today.

The fund invests the pooled money, often in loans to property developers or businesses. Interest on those loans pays for the yield. Moneysmart calls these payments "distributions".

The legal name for this kind of pooled arrangement is a managed investment scheme. The software that tracks each investor's units, prices and payments is often called portfolio management software. Wealthtech is the wider name for technology built for investing and managing wealth.

## The Australian rules, in plain words

The main rules come from the Corporations Act, and ASIC (the Australian Securities and Investments Commission) enforces them.

| Rule | What it means | Who it applies to |
|---|---|---|
| Australian financial services (AFS) licence | Permission from ASIC to run a financial services business | Generally, anyone issuing interests in a fund or operating one |
| Registering the fund | ASIC adds the fund to its register, and set legal rules then apply | Generally, funds with more than 20 members, or run by a professional promoter |
| Responsible entity | The company legally in charge of a registered fund | Must be a public company holding an AFS licence |
| Design and distribution obligations | The issuer must say who the product suits, and aim it at them | Issuers and distributors of most products sold to everyday investors |

ASIC says a fund generally "must be registered if it has more than 20 members". The same applies if a professional promoter runs it ([ASIC](https://www.asic.gov.au/for-finance-professionals/fund-operators/register-a-managed-investment-scheme)). The responsible entity must be "a registered Australian public company" with an AFS licence.

Some funds are offered only to wholesale clients. These are larger or professional investors who meet legal tests. Such funds may not need registering, but ASIC says their operators must still generally hold an AFS licence.

The design and distribution obligations (DDO) have applied since 5 October 2021 ([ASIC](https://www.asic.gov.au/regulatory-resources/managed-funds/design-and-distribution-obligations-for-schemes)). The issuer must publish a target market determination (TMD), a public document saying which investors the product suits. It must also take "reasonable steps" so the product reaches that group.

On a platform, the TMD should shape the sign-up screens. If a product suits only people who can lock money away for four years, the app should ask about that before it takes any money.

## Showing returns honestly on a yield platform

![An old balance scale with two brass pans hanging from a metal beam against a white background](balance-scale.jpg)

*A balance scale weighs one side against the other.*

The headline rate is the first thing investors notice. It is also where ASIC has found problems.

A payment to investors can come from two places. One is real income, such as interest that borrowers have paid. The other is capital, which means investors' own money handed back to them. Both look the same when they land in a bank account.

In September 2025, ASIC published a report on private credit, meaning loans made by funds rather than banks. It found that distributions are sometimes not paid "100% from cash flows". The rest is made up "effectively from capital (including from new investor contributions)". The report added: "However this is not always clear" ([ASIC, REP 814](https://download.asic.gov.au/media/z2tnnasb/rep814-published-22-september-2025.pdf), September 2025).

Take a hypothetical fund holding $1 million of loans. In a year, borrowers pay $60,000 in interest and the manager takes $15,000 in fees. That leaves $45,000 of real income. If investors are paid $70,000, the other $25,000 came from somewhere else.

A well-built platform makes that split plain to see. Useful features include:

- every payment labelled as income or capital, on statements and in the app
- a target rate shown as a target, next to the rate actually earned
- returns shown after fees, with the period and dates stated
- loans that fall behind on repayments flagged in the figures straight away

These are cheap to build at the start. Adding them later means relabelling years of old payments.

## Unit prices and fees

A unit price is the fund's assets, minus what it owes, divided by the number of units. A fund worth $1 million after its debts, with 1 million units on issue, has a unit price of $1.00.

That sum runs every time someone joins or leaves. Set too high, new investors overpay. Set too low, they gain at the expense of everyone already in. So the inputs must be right, including each loan's value and any interest or fees owed but not yet paid.

Valuing the loans is the hard part. A private loan has no price on a market screen, so someone has to judge its worth. REP 814 listed how often loans are valued, and how independently, as areas that "may require closer inspection".

A platform should keep a record of every price it publishes, with the inputs and who checked them. If a price proves wrong, that record shows which investors to repay.

Fees need the same care. REP 814 found that many local private credit funds keep 50 to 100 per cent of borrower fees for the manager. These are charges a borrower pays, for example to set up a loan. The report said these amounts are "usually not disclosed", so the headline management fee can look lower than the manager's real pay.

The fee screen on a platform should therefore show every way the manager is paid, including fees charged to borrowers.

## Keeping client money separate

![A wall of numbered bronze safe deposit boxes, each with its own pair of keyholes](safe-deposit-boxes.jpg)

*Separate boxes for separate owners.*

In a registered fund, the money and assets are held for the investors as a group. ASIC's guide on holding assets says the responsible entity "must hold scheme property on trust for members" ([ASIC, RG 133](https://www.asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-133-funds-management-and-custodial-services-holding-assets)). Holding something on trust means holding it for someone else's benefit.

The guide also says fund property must be "clearly identified as scheme property". It must be held separately from the operator's own property and from other funds. ASIC allows some limited exceptions, such as one shared account for many clients with records showing who owns what.

Investors' money should never mix with the money the operator uses for wages and rent.

In software, that separation looks like this:

- a separate bank account for each fund, in the fund's or a custodian's name
- a ledger, meaning a running record of every dollar in and out, kept for each investor
- a daily check that the ledger and the bank balance agree, with any gap looked into that day
- no way to move fund money into an operator account without a second person approving it

A gap between the two is the early warning. A platform that checks once a quarter may find it three months late.

## What ASIC has done about yield products

Private credit funds came first. REP 814 put the Australian private credit market at around $200 billion. It found that segments aimed at "sophisticated" investors and retail offerings, "including platforms", had practices that "do not compare favourably against international practice".

Stop orders followed. On 2 July 2026, ASIC made interim stop orders on two products in Stratfund's Australian Fixed Income Fund ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-142mr-asic-issues-ddo-stop-orders-against-stratfund-s-australian-fixed-income-fund), July 2026). An interim stop order blocks the product from being offered to retail investors for 21 days, unless ASIC lifts it earlier.

ASIC was concerned about one TMD. It pointed the product at investors seeking "capital preservation or income distribution". ASIC said the product was "not designed to meet these objectives". It had a four-year minimum term. The orders were revoked on 20 July 2026 after the TMDs were changed. At the time, ASIC said it had issued 97 interim stop orders and two final ones under DDO.

Crypto "earn" products are caught too. In the Block Earner case, the High Court looked at the "contractual substance of Earner, rather than how it was labelled or marketed". It also found Earner was a derivative, because what investors got back moved with the digital asset's value.

ASIC's digital asset guidance, INFO 225, was updated in October 2025. One example is a "yield-bearing" stablecoin, a token meant to hold a steady dollar value that pays holders new tokens. ASIC says it "is likely to be an interest in a managed investment scheme" ([ASIC, INFO 225](https://www.asic.gov.au/regulatory-resources/digital-transformation/digital-assets-financial-products-and-services)). If a product holds tokens, read [how AUD stablecoin minting and redemption works](/blog/audd-stablecoin-minting-redemption) and what [secure digital asset custody](/blog/fireblocks-integration-digital-asset-custody) involves.

## Questions to ask before you build or invest

For a business planning a yield platform, settle the legal structure and licence first. Then design the ledger, pricing and statements to fit. Identity checks at sign-up belong in that first design too, as our guide to [KYC and AML by design](/blog/kyc-aml-by-design) explains.

For investors and directors, these questions are a good start.

| Question | Why it matters |
|---|---|
| Whose AFS licence covers this product? | In the Block Earner case, ASIC said an unlicensed offer left investors "without important protections" |
| Is the fund registered, or wholesale only? | It decides which rules apply, and whether you can join |
| What does the TMD say about who it suits? | If it doesn't describe you, ask why it is being offered to you |
| How much of each payment is income, and how much is capital? | Capital paid back is your own money |
| Who values the loans, and how often? | The unit price is only as good as those values |
| What does the manager earn, including from borrowers? | The headline fee may not show all of it |
| Where is the money held, and in whose name? | It should sit apart from the operator's own money |
| How and when can I withdraw? | Some funds allow withdrawals only at set times or after a minimum term |

## Common questions

### Is a yield platform the same as a term deposit?

No. A term deposit is money placed with a bank. In a managed fund, you own a stake whose value can rise or fall. Moneysmart says plainly that "managed funds are not risk-free" and that you "may get back less than you invested" ([Moneysmart](https://moneysmart.gov.au/managed-funds-and-etfs/what-is-a-managed-fund)).

### Does selling only to wholesale investors avoid the rules?

Only partly. A fund offered only to wholesale clients may not need registering. ASIC says its operator must still generally hold an AFS licence to issue interests to those investors. REP 814 also singled out practices in the segment that relies on the sophisticated investor exemption.

### Do these rules cover crypto yield products?

They can. In June 2026, ASIC Chair Sarah Court said firms offering "products that provide a return to consumers" must check whether they are financial products. If they are, they need to be "appropriately licensed or authorised before distributing them" ([ASIC](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-124mr-asic-successful-in-high-court-block-earner-appeal)).

## What to do next

If you are planning a yield platform, get legal advice on its structure and licence before any design work. Then ask your build team to show you, on a test account:

- how one payment is split into income and capital
- how a unit price is worked out, checked and stored
- how the ledger is matched to the bank each day

If you are thinking of investing, read the TMD and the product disclosure statement, which sets out the terms, fees and risks. Then get personal advice from a licensed financial advisor.

For more on the platforms involved, see our [wealth industry page](/industries/wealth), or read about [hedging stablecoin and crypto exposure](/blog/crypto-hedging-treasury-tools).

If you need a yield platform built with these controls in place from the start, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against ASIC and Moneysmart sources on 7 October 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Nothing here is financial or investment advice.*

*Photos: cover, ["Melbourne Skyline and Princes Bridge, Dec 2008"](https://commons.wikimedia.org/w/index.php?curid=3324149) by Diliff, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), cropped, rooftop signage blurred. Balance scale, ["Scales, balance (51360307143)"](https://commons.wikimedia.org/w/index.php?curid=109337508) by Auckland Museum Collections, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Safe deposit boxes, ["Safe Deposit Boxes"](https://commons.wikimedia.org/w/index.php?curid=154113042) by Fixedsun, CC0, cropped.*
