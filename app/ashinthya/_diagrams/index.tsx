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
import { Failover, RailSwitch, SingleLedger } from "../_scenes/Orchestration";
import { ApiBridge, DataVault, DualPipes } from "../_scenes/BankIntegration";
import { CdrAccreditation, ConsentGate, DataConduit } from "../_scenes/ConsumerDataRight";
import { AuditLiquidity, SegregatedAccounts, WatermarkFee } from "../_scenes/YieldPlatform";
import { HedgeBalance, MintBurn, MpcKeys } from "../_scenes/DigitalAssets";
import { ComplianceCubes, FraudFilter, GapChecklist } from "../_scenes/RiskCompliance";
import { BypassBridge, CostTiers, PartnerVetting } from "../_scenes/ModernBuild";

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

  "payment-orchestration-card-a2a": [
    {
      before: "Payment processing software that sends each payment the right way",
      caption:
        "How the switch works: A customer payment coin enters the smart router. The lever flips downward, steering larger payments onto the low-cost PayTo bank rail directly to the vault to avoid card processing fees.",
      node: <RailSwitch />,
    },
    {
      before: "Keeping payments running when something breaks",
      caption:
        "How failover works: When the primary card processor times out behind a red barrier, the engine automatically catches the error and pivots the payment through the secondary green gateway, completing the checkout with zero customer disruption.",
      node: <Failover />,
    },
    {
      before: "One record of every payment",
      caption:
        "How the ledger balances: Card transactions and bank-to-bank payouts feed in from both sides into a central digital ledger. Each entry is stamped with matched references and fee breakdowns, producing a single reconciled financial record.",
      node: <SingleLedger />,
    },
  ],

  "bank-integration-platforms-australia": [
    {
      before: "Moving money: the overnight file and the instant payment",
      caption:
        "How payment rails compare: Above, a slow mechanical conveyor moves overnight ABA batch files that wait for overnight settlement. Below, a high-speed fiber tube flashes instant PayTo and Osko payments directly into the bank ledger in seconds.",
      node: <DualPipes />,
    },
    {
      before: "Reading bank data with the customer's permission",
      caption:
        "How data consent works: The customer confirms permission on their phone with a biometric check. This turns the digital vault dial, unlocking an encrypted stream of historical bank statements directly into the accounting dashboard.",
      node: <DataVault />,
    },
    {
      before: "Choosing API integration services for your product",
      caption:
        "How the adapter hub works: Three different Australian banks send data in unique, proprietary formats. The central translation hub turns the internal gears, converting every feed into one clean, standardized API stream for your platform.",
      node: <ApiBridge />,
    },
  ],

  "consumer-data-right-build": [
    {
      before: "Two jobs for every data holder",
      caption:
        "How customer control works: The user toggles permission for transaction data on their mobile screen while leaving contact data locked. The system unlocks only the permitted data gate, ensuring unconsented personal records stay private.",
      node: <ConsentGate />,
    },
    {
      before: "What CDR compliance looks like after launch",
      caption:
        "How the CDR pipeline works: Encrypted customer records pass through an automated conformance gate that validates data schemas and tracks latency against strict ACCC response standards before reaching the accredited dashboard.",
      node: <DataConduit />,
    },
    {
      before: "If your business wants to receive the data",
      caption:
        "How accreditation works: Independent compliance checks verify information security, insurance, and audit trails. Once all controls are ticked off, the official CDR accreditation seal stamps the entity as a verified data recipient.",
      node: <CdrAccreditation />,
    },
  ],

  "yield-platform-engineering": [
    {
      before: "Showing returns honestly on a yield platform",
      caption:
        "How high-water marks work: Return levels in the reservoir rise past the previous peak benchmark line. The overflow pipe directs performance fees only from the excess growth, ensuring managers are never rewarded for recovering previous losses.",
      node: <WatermarkFee />,
    },
    {
      before: "Keeping client money separate",
      caption:
        "How account segregation works: Client investment funds sit in an independent bank trust vault on the left, completely separated by an impassable statutory barrier from the company's daily operational expense account on the right.",
      node: <SegregatedAccounts />,
    },
    {
      before: "Questions to ask before you build or invest",
      caption:
        "How liquidity balancing works: The balance scale tilts as liquid cash reserves on the left tray offset productive loan assets on the right tray. Daily audits verify that sufficient cash is on hand to satisfy routine redemption requests.",
      node: <AuditLiquidity />,
    },
  ],

  "audd-stablecoin-minting-redemption": [
    {
      before: "How minting works: turning bank deposits into digital tokens",
      caption:
        "How minting works: Australian dollars are deposited into an independent bank reserve vault on the left. The automated coining press strikes a new digital AUDD token on the ledger, delivering it directly to the customer wallet.",
      node: <MintBurn />,
    },
  ],

  "fireblocks-integration-digital-asset-custody": [
    {
      before: "How a Fireblocks integration works: key shares and policy rules",
      caption:
        "How MPC key shares work: Private key shards are isolated across three separate secure locations. When any two of the three turn their keys in consensus, the transaction vault unlocks without ever exposing a complete private key in one place.",
      node: <MpcKeys />,
    },
  ],

  "crypto-hedging-treasury-tools": [
    {
      before: "Core tools for managing a digital asset treasury",
      caption:
        "How treasury hedging works: Market price swings in spot crypto tokens on the left pan are countered by an automated hedging contract on the right pan, holding the overall treasury value flat in Australian dollars.",
      node: <HedgeBalance />,
    },
  ],

  "fraud-detection-payments": [
    {
      before: "Rule engines versus AI fraud detection: finding the balance",
      caption:
        "How fraud filtering works: Incoming payments pass through a rapid two-stage filter. A rule sieve blocks obvious threshold breaches, while an AI engine scans behavioural patterns, diverting suspicious cards to quarantine while honest shoppers pass through.",
      node: <FraudFilter />,
    },
  ],

  "compliance-software-build-or-buy": [
    {
      before: "Where building custom compliance workflows wins",
      caption:
        "How the hybrid model works: Standard commoditised utilities like sanctions screening and PEP lists plug in as pre-built blocks, connecting seamlessly with custom risk logic tailored to your specific customer onboarding flow.",
      node: <ComplianceCubes />,
    },
  ],

  "iso-27001-gap-analysis-implementation": [
    {
      before: "The three biggest gaps Australian firms face",
      caption:
        "How a gap review works: An auditor's checklist systematically highlights missing records and access controls in red. The engineering team applies technical fixes, turning identified gaps into verified green audit seals.",
      node: <GapChecklist />,
    },
  ],

  "bespoke-software-cost-financial-services-australia": [
    {
      before: "The three main project price tiers",
      caption:
        "How project scopes scale: Project investment increases predictably from a lightweight Tier 1 pilot prototype to a Tier 2 production engine and a heavy-duty Tier 3 enterprise core, reflecting transaction scale and compliance rigor.",
      node: <CostTiers />,
    },
  ],

  "choosing-software-development-partner-regulated": [
    {
      before: "Five key questions to ask prospective partners",
      caption:
        "How partner due diligence works: A partner credentials folder is reviewed with a magnifying glass. Key standards including local senior engineers, full IP ownership, and independent security certifications are verified before contracts are signed.",
      node: <PartnerVetting />,
    },
  ],

  "legacy-core-banking-modernisation": [
    {
      before: "The four steps of progressive modernisation",
      caption:
        "How progressive modernisation works: Rather than demolishing an aging legacy core system, engineers build a modern cloud bypass bridge alongside it. Traffic is diverted lane by lane until the legacy mainframe can be retired safely without downtime.",
      node: <BypassBridge />,
    },
  ],
};
