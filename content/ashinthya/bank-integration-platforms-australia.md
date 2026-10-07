---
title: "API integration services: connecting to Australian banks"
description: "How a product connects to Australian banks: payment files, the NPP, the Consumer Data Right, and what to ask before you choose API integration services."
date: "2026-10-07"
lastUpdated: "2026-10-07"
author: "Palxi Team"
slug: "bank-integration-platforms-australia"
canonical: "https://palxi.com.au/blog/bank-integration-platforms-australia"
site_name: "Palxi"
kicker: "Banking, lending and payments"
coverImage: "hero.jpg"
coverImageAlt: "The grey steel Story Bridge in Brisbane crossing the river on a clear day, with the city behind it"
og_image_alt: "The grey steel Story Bridge in Brisbane crossing the river on a clear day, with the city behind it"
tags: ["api integration services", "banking api", "system integration services", "npp", "consumer data right"]
lang: "en-AU"
---

# API integration services: connecting to Australian banks

A payroll app pays a café's staff on a Thursday night. A small lender wants to see a borrower's recent bank transactions before it says yes. A rent platform collects money from tenants and passes it on to landlords. Each of these products has to talk to a bank.

Building that link from scratch is a big job. A business can buy API integration services instead, or use a bank integration platform that has already done the hard part. An API (application programming interface) is a set, agreed way for two computer systems to pass information to each other. Think of it as a standard order form that both sides know how to fill in and read.

This guide explains the main ways to connect a product to Australian banks, in plain terms. It also covers what to ask before you sign up with anyone.

## Two different jobs: moving money and reading data

"Connecting to a bank" usually means one of two things.

The first is moving money. Paying wages, sending refunds, collecting loan repayments and paying suppliers all fall here.

The second is reading information, with the customer's permission. A lender checking income needs to see account details and transactions. So does a budgeting app that shows people where their money goes.

The two jobs run on different systems, under different rules. Your product may need one or both. Keep them separate when you talk to providers, because a company that does one well may not offer the other at all.

## Moving money: the overnight file and the instant payment

Much of the money businesses send still travels as a file. The system behind it is the Bulk Electronic Clearing System (BECS), better known as Direct Entry. A business gives its bank one file, often called an ABA file, that lists every payment in a batch.

![A vintage telephone switchboard with rows of numbered sockets and coloured plug cords lined up on the desk below](telephone-switchboard.jpg)

*A vintage telephone switchboard, with rows of sockets and plug cords for putting calls through.*

Australian Payments Plus (AP+), the company that runs the New Payments Platform (NPP), calls that file "the most common format for corporate and government customers" to send payment instructions ([AP+ guidance](https://www.auspayplus.com.au/wp-content/uploads/2025/05/NPP-mapping-from-BECS-direct-entry-4.pdf), May 2025). It is an old design. Each payment can carry just 18 characters of description, about the length of "INVOICE 2041 SMITH". The same guidance says these payments "typically" take one to two days.

The NPP is the newer system. It sends payments one by one and processes them "in real time". Each payment can carry 280 characters of description, plus a 35 character reference. A business can send a single payment through an API, or still send a bulk batch. AP+ also notes that some banks offer a translation service, which turns an existing Direct Entry file into NPP payments.

Customers have already moved. AusPayNet, the industry body that manages the Direct Entry rules, says "a significant majority of 'pay anyone' transactions now occur via the NPP" ([AusPayNet](https://auspaynet.com.au/resources/New-To-Payments-5)). If your product also needs to collect regular payments, our guide to [PayTo and account-to-account payouts](/blog/payto-a2a-payouts-australia) covers that side.

| What you'd notice | Direct Entry (BECS) | NPP |
|---|---|---|
| How payments are sent | In a bulk file | One at a time (for example by API), or in bulk |
| How long they take | Typically one to two days | Real time |
| Room for a description | 18 characters | 280 characters, plus a 35 character reference |
| When something goes wrong | Depends largely on each bank's own practices | Built-in error handling, and returns go back to the payer's account |

### How a business gets connected

For Direct Entry, AusPayNet lists three options. A business can join BECS itself and get its own BSB number. It can use a member bank's BSB under an agency deal. Or it can be sponsored by a member bank as a "DE User", with its own user ID.

The third path is the common one. AusPayNet says DE Users "usually get their bank, an existing BECS member, to sponsor them into the system." The bank stays on the hook: "Banks are responsible for their sponsored DE Users adhering to BECS rules." So expect your bank to look closely at your business before it agrees.

The NPP has three levels of access ([AP+](https://www.auspayplus.com.au/brands/nppa-accessing-the-platform/)). Full participants are authorised deposit-taking institutions, such as licensed banks, credit unions and building societies, which clear and settle the payments. Connected institutions are "able to connect directly to the NPP to initiate payments" but don't clear them. AP+ gives payroll providers and share registries as examples. Identified institutions offer NPP payments through an arrangement with a full participant, which clears and settles for them.

For a smaller business, the third level, or a provider that already holds a connection, is the sensible place to start.

## The old file system is not being switched off yet

For a while the industry planned to close BECS by June 2030. On 16 December 2025, AusPayNet removed that target date ([AusPayNet](https://auspaynet.com.au/insights/Media-Release/BECS_outlook), December 2025). Its reasons included the need for "a shared vision for the future of account-to-account payments in Australia". Another was how far customers had actually taken up the alternatives.

The direction is the same, though. AusPayNet says banks still intend to move away from BECS towards the NPP, which it calls "the industry's strategic account-to-account payments system and the focus for investment and innovation."

For a business owner, that means there is no fixed closing date to plan around. New features and new spending are going to the NPP. If you are building something new, ask any provider how it handles NPP payments, as well as files.

## Reading bank data with the customer's permission

The Consumer Data Right (CDR) is the government's system that lets people share their banking data safely with businesses they choose. The ACCC, the competition regulator, says it "underpins Australia's open banking regime" and began in 2020 with the major banks ([ACCC](https://www.accc.gov.au/media-release/non-bank-lenders-join-consumer-data-right-as-next-stage-commences), July 2026).

It is growing. The ACCC says "more than 1.3 million Australians" now use it, about 135 per cent more than a year earlier. Sharing is opt-in: the customer decides, and can see who gets the data and why. Data sharing by non-bank lenders, such as car finance and personal loan providers, will be phased in from 9 November 2026. The timing depends on the lender's size.

Data moves between "data holders", such as banks, and accredited providers. Those are businesses approved to receive it, after what the ACCC calls "a rigorous process". Our piece on [what it takes to build for the Consumer Data Right](/blog/consumer-data-right-build) explains what accreditation involves.

There is a lighter path. Under the CDR representative model, a business without accreditation can offer CDR services under a written contract with an accredited business, called its principal ([OAIC](https://www.oaic.gov.au/consumer-data-right/consumer-data-right-guidance-for-business/privacy-obligations/cdr-representative-model-privacy-obligations-of-a-cdr-representative)). The OAIC, the privacy regulator, says "the CDR principal is liable for the actions of the CDR representative." So expect the principal to check your business and set firm rules on how you handle the data.

### Screen scraping, and why regulators dislike it

![A wooden rack of hooks holding many sets of keys, some with coloured plastic tags](keys-on-hooks.jpg)

*A rack of keys on hooks, some with coloured tags.*

Some services still use an older method called screen scraping. The customer types their internet banking username and password into the service. The service then logs in as them and copies what it sees.

It is a bit like handing a stranger your house keys so they can read the meter. The OAIC warns that "it may not be clear to the consumer that a third party has ongoing access to their account" ([OAIC submission](https://www.oaic.gov.au/engage-with-us/submissions/screen-scraping-policy-and-regulatory-implications-discussion-paper)). In that submission to Treasury, it said it "strongly supports specific regulation to prohibit screen scraping". It also called the CDR "a safer and more secure alternative".

Some providers still ask customers for their banking passwords. If yours does, ask how and when it plans to move to the CDR.

## What the bank will want to know about you

Once your product touches a bank's systems or data, the bank has rules to follow about you. Banks are supervised by APRA, the Australian Prudential Regulation Authority. Its information security standard, CPS 234, has applied since 1 July 2019 ([APRA, CPS 234](https://www.apra.gov.au/standards/cps-234)).

CPS 234 binds the bank, not you. But where a third party manages the bank's information assets (its data and the systems that hold it), the bank "must assess the information security capability of that party". The bank reaches you through its checks and its contract.

So expect questions. How do you protect data? Who on your team can see it? What happens after a breach, and how fast will you tell the bank? Have the answers written down before the first meeting. A second APRA standard covers how banks rely on outside providers, and our guide to [CPS 230 and technology vendors](/blog/cps-230-technology-vendors) explains it.

## Choosing API integration services for your product

These are the main routes. A product can use one of them or a mix.

| Route | Who it tends to suit | What to ask |
|---|---|---|
| Your own bank's business channel (file upload, a banking API, or sponsorship as a DE User) | A business with one main bank | Which payments can go by API? Does it support the NPP as well as files? |
| An integration platform or payments provider already linked to many banks | A product whose customers bank all over the place | Which banks and systems does it cover? Who holds the money in between? What does each payment cost? |
| An accredited CDR provider | A product that needs to read account data | Will you be a CDR representative or a plain customer? What does the contract require of you? |
| A build team that joins the pieces together | A product that mixes payments, data and its own systems | Who owns the code and the connections when the work ends? |

A platform in the middle saves you building each bank link yourself. It also puts another company between you and the bank. Ask what happens if it has an outage, raises its prices, or closes. Ask how you would move your customers and your records to someone else.

Don't forget your own end of the line. System integration services cover the work of joining the bank connection to your own software: your accounts, your customer records and your support tools. A refund that leaves the bank still has to show up correctly in your books.

Our guide to [embedded finance for non-bank products](/blog/embedded-finance-payments-lending) walks through adding payments or loans to a product that isn't a bank.

## Common questions

### Do I need a banking licence to connect to the banks?

Not for the routes above. A DE User is sponsored by a member bank. NPP connected and identified institutions don't clear payments themselves. A CDR representative works under its principal's accreditation. Other laws may still apply to what your product does with money. Anti-money laundering rules are one example, covered in our piece on [KYC and AML by design](/blog/kyc-aml-by-design). Get legal advice on your own setup.

### Will my customers' payments arrive straight away?

It depends on the system. NPP payments are processed in real time. Direct Entry payments typically take one to two days. If you send payment files today, ask your bank whether it offers a translation service that turns them into NPP payments.

## What to do next

- Write down which job you need: moving money, reading data, or both.
- List the banks your customers actually use.
- Ask your own bank what it offers for the NPP, and for Direct Entry files.
- If any provider asks customers for their banking passwords, ask about its plan to move to the CDR.
- Ask every provider who holds money in transit, and how you would leave.
- Prepare your security answers now. The bank will ask.

For more on the platforms involved, see our [financial services page](/industries/financial-services).

If you need these bank connections designed and built into your product, Palxi joins advisors early and builds alongside them. [Email us](mailto:hello@palxi.com.au).

*Facts in this article were checked against AusPayNet, Australian Payments Plus, ACCC, OAIC and APRA sources on 7 October 2026. See [how we work](/#how-we-work).*

*This article is general information, not legal advice. Check your obligations with your compliance team or legal advisor.*

*Photos: cover, ["Story Bridge, Brisbane - panoramio"](https://commons.wikimedia.org/w/index.php?curid=53418498) by Николай Максимович, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), cropped. Switchboard, ["Vintage telephone switchboard"](https://www.flickr.com/photos/158652122@N02/49467795397) by M McBey, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped. Keys, ["Keys"](https://www.flickr.com/photos/47327682@N00/1093797721) by Modern Relics, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), cropped.*
