import type { ReactNode } from "react";
import { BoardChain } from "../_scenes/BoardChain";
import { Hourglasses } from "../_scenes/Hourglasses";
import { VaultDoor } from "../_scenes/VaultDoor";
import { CertLookup, Keys, PitchTeam } from "../_scenes/DueDiligence";
import { HardshipClock, Ledger, Rails } from "../_scenes/Lending";
import { FourthParty, Monitoring, Tolerance } from "../_scenes/Cps230";
import { CoreEdgesSvg, Exit, Sort } from "../_scenes/Custom";
import { Cdr, CoreSwap, LicencePath } from "../_scenes/DigitalBanking";
import { MoneyModes, Reconcile, Relay } from "../_scenes/Embedded";
import { Plugins, Records, Rescreen } from "../_scenes/Kyc";
import { Cycle, Receipt, RulesStamp } from "../_scenes/Iso27001";
import { Cop, Idempotent, TwoLegs } from "../_scenes/PayTo";
import { FixLoop, TestingYear, ThreeTests } from "../_scenes/PenTest";
import { Mill, ScopeCheck, Types } from "../_scenes/Soc2";

export type Placement = {
  // Text of the h2 the diagram sits directly above.
  before: string;
  caption: string;
  node: ReactNode;
};

export const diagrams: Record<string, Placement[]> = {
  "apra-cps-234-board-questions": [
    {
      before: "What APRA found in board reporting",
      caption:
        "Where CPS 234 lands. The board answers for it, the entity carries it out, and vendors feel it through the entity's contracts.",
      node: <BoardChain />,
    },
    {
      before: "Incidents and the notification clocks",
      caption:
        "APRA's June 2025 letter expects MFA or equivalent controls for high-risk activities. For super trustees, that means actions like these.",
      node: <VaultDoor />,
    },
    {
      before: "The board's question list, with evidence",
      caption:
        "One incident can start several clocks at once. The sand runs out in the order of the deadlines, not to scale, and business days run longer than calendar hours.",
      node: <Hourglasses />,
    },
  ],

  "bank-grade-lending-platform-australia": [
    {
      before: "Repayment rails: direct debit and PayTo",
      caption:
        "Every repayment, fee, interest charge and reversal is a balanced set of entries, and the ledger is reconciled to the bank account every day.",
      node: <Ledger />,
    },
    {
      before: "Decisioning built around responsible lending",
      caption:
        "BECS has no switch-off date any more, so build for both rails. When each loan holds its own mandate type, moving it to PayTo is a data change.",
      node: <Rails />,
    },
    {
      before: "Security and the APRA lens",
      caption:
        "A hardship request has to be decided within 21 days under the National Credit Code. The day it's decided here is only an illustration.",
      node: <HardshipClock />,
    },
  ],

  "cps-230-technology-vendors": [
    {
      before: "Why cloud and IT vendors got no exemption",
      caption:
        "An outage measured against the three tolerance levels the board approves. An illustration, not a real incident.",
      node: <Tolerance />,
    },
    {
      before: "Fourth parties and offshoring",
      caption:
        "Uptime checks on individual servers won't tell you a critical operation is disrupted. Monitoring built around the operation itself will, in time for the 24-hour notice.",
      node: <Monitoring />,
    },
    {
      before: "What a build team should hand over",
      caption:
        "A failure arrives through a provider's provider. Many providers are shared across the industry, which is why APRA and the RBA watch concentration.",
      node: <FourthParty />,
    },
  ],

  "custom-vs-off-the-shelf-financial-services": [
    {
      before: "Where off the shelf wins",
      caption:
        "Build or buy is a dozen smaller decisions, one per capability. These cards are a typical lender's, sorted the way this article describes.",
      node: <Sort />,
    },
    {
      before: "Total cost of ownership over five years",
      caption:
        "Most regulated firms buy the systems of record and build what surrounds them. This is one hypothetical mid-sized lender.",
      node: <CoreEdgesSvg />,
    },
    {
      before: "The evidence regulators and auditors expect either way",
      caption:
        "CPS 230 expects an entity to be able to conduct an orderly exit from a material arrangement. Test the way out before you need it.",
      node: <Exit />,
    },
  ],

  "digital-banking-solutions-build-or-buy": [
    {
      before: "Where digital banking solutions earn their licence fee",
      caption:
        "The licence decides which rules apply to the stack, so settle it before the vendor list. The restricted phase lasts up to two years.",
      node: <LicencePath />,
    },
    {
      before: "Concentration is a supervisory question now",
      caption:
        "A lender can sit on both sides of the Consumer Data Right: sharing its own data as a data holder, and using other institutions' data with the customer's consent.",
      node: <Cdr />,
    },
    {
      before: "Common questions",
      caption:
        "A credit union renewing its core contract. The same change, with and without an internal API layer between the core and everything else.",
      node: <CoreSwap />,
    },
  ],

  "embedded-finance-payments-lending": [
    {
      before: "Your client's licence or someone else's",
      caption:
        "The product question comes first: what does the feature do with money? The answer changes the licence, the partner and the architecture.",
      node: <MoneyModes />,
    },
    {
      before: "AML/CTF obligations: who is the reporting entity",
      caption:
        "If the platform keeps sub-ledgers over a pooled partner account, daily reconciliation belongs in scope from day one. The amounts here are only an illustration.",
      node: <Reconcile />,
    },
    {
      before: "Who owns what: build team and partner",
      caption:
        "In a partner model, the partner that provides the designated service is the reporting entity. Your client's product still sees what's suspicious first.",
      node: <Relay />,
    },
  ],

  "iso-27001-certification-australia-cost": [
    {
      before: "Why Australian fintechs get asked for it",
      caption:
        "The certificate is an outside auditor's stamp on the security rules your business already follows, and the auditor is checked too.",
      node: <RulesStamp />,
    },
    {
      before: "How long does it take to get ISO 27001 certified?",
      caption:
        "Outside fees are only part of the bill, because your own team's time never shows on an invoice.",
      node: <Receipt />,
    },
    {
      before: "Ways to keep the bill down",
      caption:
        "A certificate runs on a three-year cycle, with a check-up audit in each of the first two years and a full audit in the third.",
      node: <Cycle />,
    },
  ],

  "kyc-aml-by-design": [
    {
      before: "Screening that keeps running",
      caption:
        "Score the customer first, then let the score pick the verification path. Every identity source should return the same kind of record.",
      node: <Plugins />,
    },
    {
      before: "Case management and the reporting clock",
      caption:
        "One check at sign-up meets neither the sanctions nor the PEP obligation. Screening has to run again whenever the lists change.",
      node: <Rescreen />,
    },
    {
      before: "Buying AML software versus building the flow",
      caption:
        "Versioned customer records, a log that can't be edited, and retention rules for each record type. The years here are compressed.",
      node: <Records />,
    },
  ],

  "payto-a2a-payouts-australia": [
    {
      before: "Confirmation of Payee in a payout flow",
      caption:
        "A payout product usually has two legs: funding the platform, and paying each payee. PayTo pulls, so it fits the first.",
      node: <TwoLegs />,
    },
    {
      before: "Designing payment automation around PayTo agreements",
      caption:
        "Confirmation of Payee is advisory and never blocks a payment, so the platform owns the decision, and keeps the evidence.",
      node: <Cop />,
    },
    {
      before: "Scam rules: who they bind and how they reach you",
      caption:
        "Real-time rails answer straight away, one payee at a time. The payout ledger has to absorb timeouts and unreachable accounts without paying twice or leaving anyone stuck.",
      node: <Idempotent />,
    },
  ],

  "penetration-testing-financial-platforms": [
    {
      before: "What APRA expects under CPS 234",
      caption: "Three kinds of security testing on the same building, and the question each one answers.",
      node: <ThreeTests />,
    },
    {
      before: "Scoping: web app, API, mobile and cloud",
      caption:
        "One workable pattern for a team that ships weekly: scans in the pipeline, a quarterly assessment, and manual penetration tests around change and at least once a year.",
      node: <TestingYear />,
    },
    {
      before: "Common questions",
      caption:
        "Turn findings into work, and keep the whole trail: scope, report, tickets, retest results and risk acceptances.",
      node: <FixLoop />,
    },
  ],

  "soc-2-for-buyers": [
    {
      before: "Why SOC 2 compliance matters to APRA-regulated clients",
      caption:
        "A Type 1 report is a single date. A Type 2 report covers a stretch of time, which is why buyers should ask for it.",
      node: <Types />,
    },
    {
      before: "Signs of a thin report",
      caption:
        "Start with the opinion, then work out what it covers: the scope, the exceptions, what's carved out and what's left to your client.",
      node: <ScopeCheck />,
    },
    {
      before: "What SOC 2 costs a vendor",
      caption:
        "The AICPA has warned peer reviewers about SOC 2 engagements that produce identical reports, risk assessments, sample sizes and testing procedures.",
      node: <Mill />,
    },
  ],

  "technical-due-diligence-build-team": [
    {
      before: "Evidence beyond the certificate",
      caption:
        "A logo on a website proves little. Look the certificate up on a register of accredited certificates, and check its scope covers the team that will do the work.",
      node: <CertLookup />,
    },
    {
      before: "Ownership, access and a way out",
      caption:
        "The people in the pitch meeting may not be the people who build. Get the names of the engineers written into the proposal.",
      node: <PitchTeam />,
    },
    {
      before: "Common questions",
      caption:
        "Source code, cloud accounts and domains belong to the client from the first commit, so another team can pick up the system if it ever needs to.",
      node: <Keys />,
    },
  ],
};
