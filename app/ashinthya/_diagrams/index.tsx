import type { ReactNode } from "react";
import {
  BankIcon,
  BeakerIcon,
  ClipboardIcon,
  CodeIcon,
  EyeIcon,
  LayersIcon,
  ShieldIcon,
  UsersIcon,
} from "../../dineth/_components/icons";
import { CertCheck } from "./CertCheck";
import { Checklist, Compare } from "./Cards";
import { Cascade } from "./Cascade";
import { CoreEdges } from "./CoreEdges";
import { BackupWall, CoverageMap, SecondCheck } from "./Cps234";
import { Dials } from "./Dials";
import { FlipCards } from "./FlipCards";
import { Hardship } from "./Hardship";
import { Hub } from "./Hub";
import { Iceberg } from "./Iceberg";
import {
  BellIcon,
  CalendarIcon,
  CashIcon,
  DocumentIcon,
  DoorIcon,
  RefreshIcon,
  ScaleIcon,
  SearchIcon,
  SendIcon,
  ServerIcon,
  WrenchIcon,
} from "./icons";
import { Journey } from "./Journey";
import { MoneyMoves } from "./MoneyMoves";
import { PeriodsOfTime } from "./PeriodsOfTime";
import { Radar } from "./Radar";
import { Ranges } from "./Ranges";
import { Resilience } from "./Resilience";
import {
  DoorsScene,
  FallbackScene,
  IdempotencyScene,
  QueueScene,
  ReconcileScene,
  ScanScene,
  SceneGrid,
  StatusScene,
  StealthScene,
} from "./Scenes";
import { Sorter } from "./Sorter";
import { Staircase } from "./Staircase";

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
      node: (
        <Cascade
          nodes={[
            {
              icon: UsersIcon,
              title: "The board",
              detail:
                "Ultimately responsible for the information security of the entity.",
              badge: { text: "Accountable", tone: "default", icon: ShieldIcon },
            },
            {
              icon: BankIcon,
              title: "The regulated entity",
              detail:
                "Keeps security in line with the threats. Classifies its information assets, including those held by third parties.",
              badge: { text: "Bound by CPS 234", tone: "done", icon: ShieldIcon },
            },
            {
              icon: ServerIcon,
              title: "The technology vendor",
              detail:
                "Not bound by the standard directly. Reached through the entity's contracts, assessments and audits.",
              bound: false,
              badge: { text: "Not bound directly", tone: "caution", icon: DocumentIcon },
            },
          ]}
          links={[
            { label: "Answers for it", kind: "solid" },
            { label: "Contracts and audits", kind: "dashed" },
          ]}
          footer="The standard binds the entity, which then has duties about its vendors."
        />
      ),
    },
    {
      before: "Questions about assets and third parties",
      caption:
        "The five gaps APRA found in the first round of independent CPS 234 assessments (July 2023).",
      node: (
        <Radar
          centre={{
            to: 300,
            suffix: "+",
            caption: "banks, insurers and super trustees",
          }}
          intro="They were due to be assessed by the end of 2023. These five gaps came up in the first round."
          findings={[
            {
              icon: LayersIcon,
              title: "Assets not fully identified",
              detail: "Critical and sensitive assets were not all classified.",
            },
            {
              icon: UsersIcon,
              title: "Third parties barely checked",
              detail: "Limited checks on vendors' security capability.",
            },
            {
              icon: BeakerIcon,
              title: "Testing poorly run",
              detail: "Testing programs were poorly defined or poorly run.",
            },
            {
              icon: EyeIcon,
              title: "Little internal audit",
              detail: "Limited internal audit review of security controls.",
            },
            {
              icon: BellIcon,
              title: "Late reporting to APRA",
              detail:
                "Material incidents and weaknesses reported late or inconsistently.",
            },
          ]}
        />
      ),
    },
    {
      before: "Backups the board has seen restored",
      caption:
        "An illustration: the same amount of testing each year, spread two ways. A board report should look like the second picture.",
      node: <CoverageMap />,
    },
    {
      before: "Who holds the keys",
      caption:
        "APRA lists insufficient segregation between production and backup environments as a common problem. This is the second backup question, in pictures.",
      node: <BackupWall />,
    },
    {
      before: "Incidents and the notification clocks",
      caption:
        "APRA's June 2025 letter expects MFA or equivalent controls for high-risk activities. For super trustees, that means actions like these.",
      node: <SecondCheck />,
    },
    {
      before: "The board's question list, with evidence",
      caption:
        "One incident can start several clocks at once. Ring lengths show the order of the deadlines, not their exact size, and business days run longer than calendar hours.",
      node: (
        <Dials
          startLabel="An incident happens"
          dials={[
            {
              count: { to: 24, unit: "hours" },
              f: 0.25,
              tone: "stop",
              tag: "CPS 230",
              label: "A critical operation is disrupted beyond tolerance",
            },
            {
              count: { to: 72, unit: "hours" },
              f: 0.5,
              tone: "caution",
              tag: "CPS 234",
              label: "A material information security incident",
            },
            {
              count: { to: 72, unit: "hours" },
              f: 0.5,
              tone: "caution",
              tag: "CPS 230",
              label: "An operational risk incident with material impact",
            },
            {
              count: { to: 10, unit: "business days" },
              f: 1,
              tag: "CPS 234",
              label: "A material control weakness that can't be fixed in time",
            },
          ]}
          note="Not to scale. Privacy Act and ransomware payment reporting add further clocks."
        />
      ),
    },
  ],

  "bank-grade-lending-platform-australia": [
    {
      before: "The ledger comes first",
      caption:
        "Seven components, each one owning specific obligations. Write this map before choosing a loan management system.",
      node: (
        <Hub
          hub={{
            icon: BankIcon,
            title: "Ledger and reconciliation",
            detail: "The record of who owes what.",
          }}
          spokes={[
            {
              icon: ClipboardIcon,
              title: "Origination",
              detail: "Application, identity checks and documents.",
            },
            {
              icon: ScaleIcon,
              title: "Decisioning",
              detail: "Rules and scorecards that approve, decline or refer.",
            },
            {
              icon: SearchIcon,
              title: "Credit reporting",
              detail: "Enquiries and reports in, repayment history out.",
            },
            {
              icon: RefreshIcon,
              title: "Servicing",
              detail: "Schedules, repayments, fees, variations, statements.",
            },
            {
              icon: BellIcon,
              title: "Hardship and collections",
              detail: "Cases, arrangements, notices and clocks.",
            },
            {
              icon: SendIcon,
              title: "Reporting",
              detail: "To regulators, funders, auditors and the board.",
              out: true,
            },
          ]}
          fallback={
            <Journey
              flow="column"
              stops={[
                {
                  icon: ClipboardIcon,
                  title: "Origination",
                  detail: "Application, identity checks and documents.",
                },
                {
                  icon: ScaleIcon,
                  title: "Decisioning",
                  detail: "Rules and scorecards that approve, decline or refer.",
                },
                {
                  icon: SearchIcon,
                  title: "Credit reporting",
                  detail: "Enquiries and reports in, repayment history out.",
                },
                {
                  icon: RefreshIcon,
                  title: "Servicing",
                  detail: "Schedules, repayments, fees, variations, statements.",
                },
                {
                  icon: BellIcon,
                  title: "Hardship and collections",
                  detail: "Cases, arrangements, notices and clocks.",
                },
                {
                  icon: BankIcon,
                  title: "Ledger and reconciliation",
                  detail: "The record of who owes what.",
                  tone: "done",
                },
                {
                  icon: SendIcon,
                  title: "Reporting",
                  detail: "To regulators, funders, auditors and the board.",
                  tone: "done",
                },
              ]}
            />
          }
        />
      ),
    },
    {
      before: "Security and the APRA lens",
      caption:
        "A hardship request has 21 days to be decided under the National Credit Code. Every channel should lead into the same case.",
      node: <Hardship />,
    },
  ],

  "cps-230-technology-vendors": [
    {
      before: "Why cloud and IT vendors got no exemption",
      caption:
        "The three CPS 230 ideas that turn into engineering work for a technology vendor.",
      node: <Resilience />,
    },
    {
      before: "Fourth parties and offshoring",
      caption: "When APRA must hear about a change or an incident under CPS 230.",
      node: (
        <Dials
          dials={[
            {
              icon: CalendarIcon,
              f: 0.12,
              tone: "caution",
              tag: "Before it happens",
              label:
                "Entering a material offshoring arrangement, or significantly changing one.",
            },
            {
              count: { to: 24, unit: "hours" },
              f: 0.3,
              tone: "stop",
              tag: "Within 24 hours",
              label: "A critical operation is disrupted outside tolerance.",
            },
            {
              count: { to: 72, unit: "hours" },
              f: 0.5,
              tone: "stop",
              tag: "Within 72 hours",
              label: "An operational risk incident with a material impact.",
            },
            {
              count: { to: 20, unit: "business days" },
              f: 0.78,
              tag: "Within 20 business days",
              label:
                "A new or materially changed agreement for a critical operation.",
            },
            {
              icon: RefreshIcon,
              f: 1,
              tone: "done",
              tag: "Once a year",
              label: "The register of material service providers.",
            },
          ]}
          note="Ring lengths show the order of the deadlines, not their exact size."
        />
      ),
    },
  ],

  "custom-vs-off-the-shelf-financial-services": [
    {
      before: "Total cost of ownership over five years",
      caption:
        "Most regulated firms buy the systems of record and build what surrounds them. This is one hypothetical mid-sized lender.",
      node: (
        <CoreEdges
          core={{
            title: "Buy the core",
            subtitle: "Systems of record and specialist services",
            items: [
              "Loan management ledger",
              "General ledger",
              "Identity verification",
              "Sanctions screening",
            ],
          }}
          edges={{
            title: "Build the edges",
            subtitle: "What customers and brokers touch",
            items: [
              "Broker and customer apps",
              "Credit decisioning rules",
              "The integration layer",
              "Reporting",
            ],
          }}
        />
      ),
    },
    {
      before: "Lock-in and the exit you have to plan",
      caption:
        "Put both options on the same five-year view. A licence price and a build quote are not comparable on their own.",
      node: (
        <Compare
          leftTitle="Off the shelf"
          rightTitle="Custom build"
          leftIcon={LayersIcon}
          rightIcon={CodeIcon}
          rows={[
            {
              label: "Upfront",
              icon: CashIcon,
              left: "Licence or setup fees, implementation partner, configuration",
              right: "Discovery, design, build, testing",
            },
            {
              label: "Integration",
              icon: LayersIcon,
              left: "Connectors to your systems, often priced separately",
              right: "Built as part of the product",
            },
            {
              label: "Running",
              icon: RefreshIcon,
              left: "Subscription, often tied to volume or accounts",
              right: "Hosting, monitoring, on-call support",
            },
            {
              label: "Change",
              icon: WrenchIcon,
              left: "Vendor change requests, or waiting for their roadmap",
              right: "Your own team's time",
            },
            {
              label: "Compliance evidence",
              icon: ClipboardIcon,
              left: "Vendor reports plus your own controls and testing",
              right: "Your own controls, testing and audits",
            },
            {
              label: "Upgrades",
              icon: CalendarIcon,
              left: "Forced upgrades, retesting your customisations",
              right: "Framework and dependency upgrades",
            },
            {
              label: "Exit",
              icon: DoorIcon,
              left: "Data extraction, parallel running, migration",
              right: "Handover and documentation, if the team changes",
            },
          ]}
        />
      ),
    },
  ],

  "digital-banking-solutions-build-or-buy": [
    {
      before: "Where digital banking solutions earn their licence fee",
      caption:
        "The licence decides which rules apply to the stack, so settle it before the vendor list.",
      node: (
        <Staircase
          steps={[
            {
              title: "Non-bank lender",
              authority: "ASIC credit licence",
              facts: [
                "Cannot take deposits",
                "CPS 230 does not apply",
                "Plan for credit and conduct controls",
              ],
            },
            {
              title: "Restricted ADI",
              authority: "APRA licence, up to two years",
              tone: "caution",
              stat: {
                prefix: "$",
                to: 2,
                suffix: " million",
                caption: "Cap on total deposits",
              },
              facts: ["CPS 230 applies", "Must reach full ADI standards or exit"],
            },
            {
              title: "Full ADI",
              authority: "APRA licence",
              tone: "done",
              facts: [
                "Can take deposits",
                "CPS 230 applies",
                "Ongoing resilience and vendor oversight",
              ],
            },
          ]}
        />
      ),
    },
    {
      before: "Open banking solutions and CDR data holder duties",
      caption: "The default build or buy call for most lenders.",
      node: (
        <Sorter
          beltLabel="Capabilities"
          bins={[
            {
              title: "Buy",
              subtitle: "Costly, invisible to customers",
              items: [
                "Core banking or loan ledger",
                "Card issuing and processing",
                "Identity and screening",
                "Deposit accounts for a non-bank",
              ],
            },
            {
              title: "Build",
              tone: "done",
              subtitle: "Where you stand out",
              items: [
                "Customer experience",
                "Credit decisioning policy",
                "Integration and data layer",
              ],
            },
            {
              title: "It depends",
              tone: "caution",
              subtitle: "Check before signing",
              items: ["Credit decisioning engine", "CDR data holder APIs"],
            },
          ]}
        />
      ),
    },
  ],

  "embedded-finance-payments-lending": [
    {
      before: "AML/CTF obligations: who is the reporting entity",
      caption:
        "The customer sees one app. Behind it, the account can sit on a partner's licence.",
      node: (
        <Iceberg
          product={{
            title: "Your client's product",
            detail: "The screens customers use, onboarding and the sub-ledger.",
          }}
          deep={[
            {
              icon: ServerIcon,
              title: "The partner's platform",
              detail: "A pooled account, cards or payments, and scheme access.",
            },
            {
              icon: ScaleIcon,
              title: "The licence",
              detail: "Held by a bank or licensed payments provider.",
            },
          ]}
          footer="The partner holds the licence. Your client still runs the product and often the ledger of who owns what, so daily reconciliation belongs in scope from day one."
        />
      ),
    },
    {
      before: "Common questions",
      caption:
        "A common split of who owns what. The contract decides the details.",
      node: (
        <Sorter
          beltLabel="Responsibilities"
          bins={[
            {
              title: "Usually the partner",
              items: [
                "Licence, scheme membership and capital",
                "Sets the onboarding rules",
                "Holds the pooled account",
                "Reports suspicious matters to AUSTRAC",
              ],
            },
            {
              title: "Usually your client's product",
              tone: "done",
              items: [
                "Builds and runs onboarding screens",
                "Integrates identity checks and handles failures",
                "Keeps the sub-ledger",
                "Matches statements daily and chases breaks",
                "Captures and routes complaints and hardship",
                "Detects and escalates suspicious matters",
              ],
            },
          ]}
        />
      ),
    },
  ],

  "kyc-aml-by-design": [
    {
      before: "KYC verification at onboarding",
      caption:
        "Each AUSTRAC obligation ends up as a feature, a data field or a log.",
      node: (
        <FlipCards
          cards={[
            { front: "Initial CDD", tone: "default", back: "Risk-based onboarding flow with a rules engine behind it." },
            { front: "Ongoing CDD", tone: "default", back: "Transaction monitoring, periodic reviews, refresh triggers." },
            { front: "Enhanced CDD", tone: "caution", back: "Escalation path, source of funds and senior approval." },
            { front: "PEP screening", tone: "default", back: "Screening at onboarding and on list updates, with match review." },
            { front: "Sanctions checks", tone: "stop", back: "Fuzzy name matching, a hold on funds, an escalation queue." },
            { front: "Suspicious matters", tone: "stop", back: "Case management with timestamps and a reporting clock." },
            { front: "Threshold reports", tone: "default", back: "A cash flag on transactions and a report builder." },
            { front: "International transfers", tone: "default", back: "Cross-border flag, transfer chain model, report extraction." },
            { front: "Record keeping", tone: "done", back: "Immutable event log, retention rules, deletion jobs." },
          ]}
        />
      ),
    },
    {
      before: "Records that last seven years",
      caption:
        "AUSTRAC reporting deadlines. Ring lengths show the order, not an exact scale.",
      node: (
        <Dials
          startLabel="The clock starts"
          dials={[
            {
              count: { to: 24, unit: "hours" },
              f: 0.2,
              tone: "stop",
              tag: "Suspicious matter",
              label: "Terrorism financing",
            },
            {
              count: { to: 3, unit: "business days" },
              f: 0.5,
              tone: "caution",
              tag: "Suspicious matter",
              label: "Other suspicions",
            },
            {
              count: { to: 10, unit: "business days" },
              f: 1,
              tag: "Reports",
              label: "Threshold and international funds transfer reports",
            },
          ]}
          note="The suspicious matter clock runs from the moment suspicion forms, so your case tool needs a distinct 'suspicion formed' field."
        />
      ),
    },
  ],

  "payto-a2a-payouts-australia": [
    {
      before: "Confirmation of Payee in a payout flow",
      caption: "Three ways to move money account to account in Australia.",
      node: <MoneyMoves />,
    },
    {
      before: "Scam rules: who they bind and how they reach you",
      caption:
        "Five things a payout ledger for Australian A2A should have from the first release.",
      node: (
        <SceneGrid
          scenes={[
            {
              title: "An idempotency key",
              detail: "On every instruction, so a timeout never doubles a payment.",
              start: 600,
              scene: <IdempotencyScene t={800} />,
            },
            {
              title: "A clear status model",
              detail: "Submitted, settled, rejected and held are separate states.",
              start: 1600,
              scene: <StatusScene t={1800} />,
            },
            {
              title: "A BECS fallback",
              detail: "For unreachable accounts, with the payee told about the delay.",
              start: 2600,
              scene: <FallbackScene t={2800} />,
            },
            {
              title: "Daily reconciliation",
              detail: "Against the bank statement, not your own API logs.",
              start: 3600,
              scene: <ReconcileScene t={3800} />,
            },
            {
              title: "An exceptions queue",
              detail: "Worked by a person, with ageing alerts.",
              start: 4600,
              scene: <QueueScene t={4800} />,
            },
          ]}
        />
      ),
    },
  ],

  "penetration-testing-financial-platforms": [
    {
      before: "What APRA expects under CPS 234",
      caption: "Three kinds of security testing, and the question each one answers.",
      node: (
        <SceneGrid
          cols="md:grid-cols-3"
          scenes={[
            {
              title: "Vulnerability assessment: what known weaknesses do we have?",
              detail:
                "Automated scans with human triage. Monthly or quarterly. Suits everyone.",
              start: 600,
              scene: <ScanScene t={900} />,
            },
            {
              title: "Penetration test: what can an attacker actually do?",
              detail:
                "Manual testing within a defined scope. At least annually and after major change. Any platform holding customer or payment data.",
              start: 1900,
              scene: <DoorsScene t={2200} />,
            },
            {
              title: "Red team: would we detect a real attack?",
              detail:
                "Goal-based attack simulation, occasionally. For large regulated entities with a security team.",
              start: 3200,
              scene: <StealthScene t={3500} />,
            },
          ]}
        />
      ),
    },
    {
      before: "Reading the report and fixing what it finds",
      caption:
        "Our view: planning ranges in AUD ex GST, based on a senior tester day rate of $1,500 to $2,500. A red team exercise costs well above all of these.",
      node: (
        <Ranges
          rows={[
            {
              label: "Vulnerability assessment",
              detail: "2 to 4 days",
              min: 3000,
              max: 10000,
            },
            {
              label: "Web application",
              detail: "5 to 10 days, 2 to 4 user roles",
              min: 7500,
              max: 25000,
            },
            {
              label: "API",
              detail: "4 to 8 days, 30 to 80 endpoints",
              min: 6000,
              max: 20000,
            },
            {
              label: "Mobile app and its API",
              detail: "8 to 12 days, iOS and Android",
              min: 12000,
              max: 30000,
            },
            {
              label: "Cloud configuration review",
              detail: "3 to 6 days",
              min: 4500,
              max: 15000,
            },
            {
              label: "Retest of fixed findings",
              detail: "1 to 3 days",
              min: 1500,
              max: 7500,
            },
          ]}
          max={30000}
          ticks={[0, 10000, 20000, 30000]}
          note="Bars show the low-to-high range for each type of test."
        />
      ),
    },
  ],

  "soc-2-for-buyers": [
    {
      before: "Why SOC 2 compliance matters to APRA-regulated clients",
      caption:
        "A Type 1 report is a single date. A Type 2 report covers a stretch of time, which is why buyers should ask for it.",
      node: <PeriodsOfTime />,
    },
    {
      before: "Questions to ask a vendor",
      caption:
        "Our view: first-year planning ranges in AUD ex GST for a vendor of 20 to 100 staff. The largest cost, internal engineering time, isn't shown.",
      node: (
        <Ranges
          rows={[
            {
              label: "Readiness assessment",
              min: 10000,
              max: 30000,
            },
            {
              label: "Compliance automation platform",
              detail: "Per year",
              min: 10000,
              max: 40000,
            },
            {
              label: "Penetration test",
              min: 13500,
              max: 45000,
            },
            {
              label: "Type 1 audit fee",
              detail: "If done first",
              min: 20000,
              max: 45000,
            },
            {
              label: "Type 2 audit fee",
              detail: "Six-month window",
              min: 30000,
              max: 80000,
            },
          ]}
          max={80000}
          ticks={[0, 20000, 40000, 60000, 80000]}
          note="Bars show the low-to-high range for each line."
        />
      ),
    },
  ],

  "technical-due-diligence-build-team": [
    {
      before: "How to check if a company is ISO 27001 certified",
      caption:
        "What to request from a build team, and what should make you pause.",
      node: (
        <Checklist
          items={[
            {
              title: "Company and people",
              ask: "ABN, team structure, CVs of named leads, subcontractors",
              worry: "senior people in the pitch, unnamed juniors on the project",
            },
            {
              title: "Security certification",
              ask: "ISO 27001 certificate and Statement of Applicability",
              worry: "the scope leaves out the delivery team",
            },
            {
              title: "Delivery practice",
              ask: "A live walkthrough of review, testing and deployment",
              worry: "nobody can show a deployment log",
            },
            {
              title: "Code quality",
              ask: "A sample repository and dependency scan output",
              worry: "no automated tests or dependency scanning",
            },
            {
              title: "Regulated evidence",
              ask: "Redacted evidence produced for a past audit",
              worry: "“The client handled compliance”",
            },
            {
              title: "Ownership and exit",
              ask: "IP assignment clause and who owns repositories",
              worry: "code is held only in the vendor's accounts",
            },
            {
              title: "Support and incidents",
              ask: "On-call arrangements and incident history",
              worry: "support on a “best effort” basis",
            },
            {
              title: "Viability",
              ask: "Financial statements, insurance certificates, a continuity plan",
              worry: "one client provides most of the revenue",
            },
          ]}
        />
      ),
    },
    {
      before: "Evidence beyond the certificate",
      caption: "Six checks to work through before trusting an ISO 27001 logo.",
      node: (
        <CertCheck />
      ),
    },
  ],
};
