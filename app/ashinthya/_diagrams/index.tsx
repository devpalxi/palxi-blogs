import type { ReactNode } from "react";
import {
  BankIcon,
  BeakerIcon,
  ChatIcon,
  CheckIcon,
  ClipboardIcon,
  CodeIcon,
  EyeIcon,
  LayersIcon,
  UsersIcon,
} from "../../dineth/_components/icons";
import { at } from "../../dineth/_components/diagram-kit";
import { CountUp } from "../../dineth/_components/CountUp";
import { Checklist, Columns, Compare, Pairs } from "./Cards";
import { CoreEdges } from "./CoreEdges";
import { BackupWall, CoverageMap, SecondCheck } from "./Cps234";
import {
  BellIcon,
  CalendarIcon,
  ClockIcon,
  DocumentIcon,
  RefreshIcon,
  ScaleIcon,
  SearchIcon,
  SendIcon,
  WarningIcon,
} from "./icons";
import { Journey } from "./Journey";
import { Lanes } from "./Lanes";
import { LayersFlow } from "./LayersFlow";
import { MoneyMoves } from "./MoneyMoves";
import { PeriodsOfTime } from "./PeriodsOfTime";
import { Ranges } from "./Ranges";
import { stopTime } from "./shared";
import { Ticker } from "./Ticker";

export type Placement = {
  // Text of the h2 the diagram sits directly above.
  before: string;
  caption: string;
  node: ReactNode;
};

const gap = { text: "Gap found", icon: WarningIcon } as const;

export const diagrams: Record<string, Placement[]> = {
  "apra-cps-234-board-questions": [
    {
      before: "What APRA found in board reporting",
      caption:
        "Where CPS 234 lands. The board answers for it, the entity carries it out, and vendors feel it through the entity's contracts.",
      node: (
        <LayersFlow
          layers={[
            {
              title: "The board",
              detail:
                "Ultimately responsible for the information security of the entity.",
            },
            {
              title: "The regulated entity",
              detail:
                "Keeps security in line with the threats. Classifies its information assets, including those held by third parties.",
            },
            {
              title: "The technology vendor",
              detail:
                "Not bound by the standard directly. Reached through contract terms, questionnaires and audits.",
            },
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
        <Journey
          header={
            <div
              data-anim="rise"
              style={at(0, 700)}
              className="mb-9 flex flex-wrap items-baseline gap-x-5 gap-y-1"
            >
              <span className="font-serif text-headline font-semibold text-ink">
                <CountUp to={300} suffix="+" delay={300} duration={1400} />
              </span>
              <span className="max-w-[34rem] text-copy">
                banks, insurers and super trustees were due to be assessed by
                the end of 2023. These five gaps came up in the first round.
              </span>
            </div>
          }
          stops={[
            {
              icon: LayersIcon,
              title: "Assets not fully identified",
              detail: "Critical and sensitive assets were not all classified.",
              tone: "caution",
              badge: gap,
            },
            {
              icon: UsersIcon,
              title: "Third parties barely checked",
              detail: "Limited checks on vendors' security capability.",
              tone: "caution",
              badge: gap,
            },
            {
              icon: BeakerIcon,
              title: "Testing poorly run",
              detail: "Testing programs were poorly defined or poorly run.",
              tone: "caution",
              badge: gap,
            },
            {
              icon: EyeIcon,
              title: "Little internal audit",
              detail: "Limited internal audit review of security controls.",
              tone: "caution",
              badge: gap,
            },
            {
              icon: BellIcon,
              title: "Late reporting to APRA",
              detail:
                "Material incidents and weaknesses reported late or inconsistently.",
              tone: "caution",
              badge: gap,
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
        "One incident can start several clocks at once. Lane lengths show the order of the deadlines, not their exact size, and business days run longer than calendar hours.",
      node: (
        <Lanes
          startLabel="An incident happens"
          clock={{
            heading: "Time since the incident",
            steps: [
              { untilLane: 0, from: 0, to: 24, suffix: " hours", singular: " hour" },
              { untilLane: 1, from: 24, to: 72, suffix: " hours" },
            ],
            after: [{ lane: 3, text: "10 business days" }],
            rest: "10 business days",
          }}
          rows={[
            {
              label: "CPS 230: a critical operation is disrupted beyond tolerance",
              chip: "24 hours",
              len: 22,
              tone: "stop",
              train: "ink",
            },
            {
              label: "CPS 234: a material information security incident",
              chip: "72 hours",
              len: 52,
              tone: "caution",
            },
            {
              label: "CPS 230: an operational risk incident with material impact",
              chip: "72 hours",
              len: 52,
              tone: "caution",
              train: "ink",
            },
            {
              label:
                "CPS 234: a material control weakness that can't be fixed in time",
              chip: "10 business days",
              len: 100,
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
      ),
    },
    {
      before: "Security and the APRA lens",
      caption:
        "A hardship request has 21 days to be decided under the National Credit Code. Every channel should lead into the same case.",
      node: (
        <Journey
          header={
            <p
              data-anim="fade"
              style={at(300, 600)}
              className="mb-8 flex flex-wrap items-baseline gap-x-4"
            >
              <span className="text-label text-muted">Time left to decide</span>
              <Ticker
                phases={[
                  {
                    at: stopTime(2),
                    dur: stopTime(3) - stopTime(2) - 150,
                    from: 21,
                    to: 3,
                    suffix: " days left",
                    singular: " day left",
                  },
                  { at: stopTime(4), dur: 0, from: 0, to: 0, text: "Decided within 21 days" },
                ]}
                rest="21 days to decide"
                className="font-serif text-headline font-semibold text-ink"
              />
            </p>
          }
          stops={[
            {
              icon: ChatIcon,
              title: "Request arrives",
              detail: "By phone, email, web form or chat.",
            },
            {
              icon: ClipboardIcon,
              title: "Case opens",
              detail: "Created automatically with the date received.",
            },
            {
              icon: ClockIcon,
              title: "Clock runs",
              detail: "A visible countdown, with alerts before day 21.",
              tone: "caution",
            },
            {
              icon: DocumentIcon,
              title: "Notice sent",
              detail: "No case closes without a stored customer notice.",
            },
            {
              icon: CheckIcon,
              title: "Arrangement applied",
              detail: "Schedule changes and collections pause.",
              tone: "done",
            },
          ]}
        />
      ),
    },
  ],

  "cps-230-technology-vendors": [
    {
      before: "Why cloud and IT vendors got no exemption",
      caption:
        "The three CPS 230 ideas that turn into engineering work for a technology vendor.",
      node: (
        <Columns
          link
          columns={[
            {
              title: "Critical operations",
              subtitle: "What must keep running",
              items: [
                "Payments, deposits, claims or fund administration",
                "Customer enquiries",
                "The systems and infrastructure that support them",
              ],
            },
            {
              title: "Tolerance levels",
              subtitle: "Three limits the board approves",
              items: [
                "Longest acceptable disruption",
                "Most data you can afford to lose",
                "Minimum service in a degraded mode",
              ],
            },
            {
              title: "Material service providers",
              subtitle: "Vendors the entity relies on",
              items: [
                "Core technology services by default",
                "Kept on a register",
                "Submitted to APRA every year",
              ],
            },
          ]}
        />
      ),
    },
    {
      before: "Fourth parties and offshoring",
      caption: "When APRA must hear about a change or an incident under CPS 230.",
      node: (
        <Pairs
          rows={[
            {
              result: "Before it happens",
              tone: "caution",
              action:
                "Entering a material offshoring arrangement, or significantly changing one.",
            },
            {
              result: "Within 24 hours",
              tone: "stop",
              action: "A critical operation is disrupted outside tolerance.",
            },
            {
              result: "Within 72 hours",
              tone: "stop",
              action: "An operational risk incident with a material impact.",
            },
            {
              result: "Within 20 business days",
              tone: "default",
              action:
                "A new or materially changed agreement for a critical operation.",
            },
            {
              result: "Once a year",
              tone: "done",
              action: "The register of material service providers.",
            },
          ]}
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
              left: "Licence or setup fees, implementation partner, configuration",
              right: "Discovery, design, build, testing",
            },
            {
              label: "Integration",
              left: "Connectors to your systems, often priced separately",
              right: "Built as part of the product",
            },
            {
              label: "Running",
              left: "Subscription, often tied to volume or accounts",
              right: "Hosting, monitoring, on-call support",
            },
            {
              label: "Change",
              left: "Vendor change requests, or waiting for their roadmap",
              right: "Your own team's time",
            },
            {
              label: "Compliance evidence",
              left: "Vendor reports plus your own controls and testing",
              right: "Your own controls, testing and audits",
            },
            {
              label: "Upgrades",
              left: "Forced upgrades, retesting your customisations",
              right: "Framework and dependency upgrades",
            },
            {
              label: "Exit",
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
        <Columns
          link
          stairs
          columns={[
            {
              title: "Non-bank lender",
              subtitle: "ASIC credit licence",
              items: [
                "Cannot take deposits",
                "CPS 230 does not apply",
                "Plan for credit and conduct controls",
              ],
            },
            {
              title: "Restricted ADI",
              tone: "caution",
              subtitle: "APRA licence, up to two years",
              stat: {
                prefix: "$",
                to: 2,
                suffix: " million",
                caption: "Cap on total deposits",
              },
              items: [
                "CPS 230 applies",
                "Must reach full ADI standards or exit",
              ],
            },
            {
              title: "Full ADI",
              tone: "done",
              subtitle: "APRA licence",
              items: [
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
        <Columns
          sort
          columns={[
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
        <LayersFlow
          layers={[
            {
              title: "Your client's product",
              detail: "The screens customers use, onboarding and the sub-ledger.",
            },
            {
              title: "The partner's platform",
              detail: "A pooled account, cards or payments, and scheme access.",
            },
            {
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
        <Columns
          sort
          columns={[
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
        <Pairs
          gap={760}
          rows={[
            {
              result: "Initial CDD",
              tone: "default",
              action: "Risk-based onboarding flow with a rules engine behind it.",
            },
            {
              result: "Ongoing CDD",
              tone: "default",
              action: "Transaction monitoring, periodic reviews, refresh triggers.",
            },
            {
              result: "Enhanced CDD",
              tone: "caution",
              action: "Escalation path, source of funds and senior approval.",
            },
            {
              result: "PEP screening",
              tone: "default",
              action: "Screening at onboarding and on list updates, with match review.",
            },
            {
              result: "Sanctions checks",
              tone: "stop",
              action: "Fuzzy name matching, a hold on funds, an escalation queue.",
            },
            {
              result: "Suspicious matters",
              tone: "stop",
              action: "Case management with timestamps and a reporting clock.",
            },
            {
              result: "Threshold reports",
              tone: "default",
              action: "A cash flag on transactions and a report builder.",
            },
            {
              result: "International transfers",
              tone: "default",
              action: "Cross-border flag, transfer chain model, report extraction.",
            },
            {
              result: "Record keeping",
              tone: "done",
              action: "Immutable event log, retention rules, deletion jobs.",
            },
          ]}
        />
      ),
    },
    {
      before: "Records that last seven years",
      caption:
        "AUSTRAC reporting deadlines. Lane lengths show the order, not an exact scale.",
      node: (
        <Lanes
          startLabel="The clock starts"
          rows={[
            {
              label: "Suspicious matter report: terrorism financing",
              chip: "24 hours",
              len: 14,
              tone: "stop",
            },
            {
              label: "Suspicious matter report: other suspicions",
              chip: "3 business days",
              len: 42,
              tone: "caution",
            },
            {
              label: "Threshold and international funds transfer reports",
              chip: "10 business days",
              len: 100,
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
        <Checklist
          items={[
            {
              title: "An idempotency key",
              detail: "On every instruction, so a timeout never doubles a payment.",
            },
            {
              title: "A clear status model",
              detail: "Submitted, settled, rejected and held are separate states.",
            },
            {
              title: "A BECS fallback",
              detail: "For unreachable accounts, with the payee told about the delay.",
            },
            {
              title: "Daily reconciliation",
              detail: "Against the bank statement, not your own API logs.",
            },
            {
              title: "An exceptions queue",
              detail: "Worked by a person, with ageing alerts.",
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
        <Columns
          link
          stairs
          columns={[
            {
              title: "Vulnerability assessment",
              subtitle: "What known weaknesses do we have?",
              items: [
                "Automated scans with human triage",
                "Monthly or quarterly",
                "Suits everyone",
              ],
            },
            {
              title: "Penetration test",
              tone: "done",
              subtitle: "What can an attacker actually do?",
              items: [
                "Manual testing within a defined scope",
                "At least annually and after major change",
                "Any platform holding customer or payment data",
              ],
            },
            {
              title: "Red team",
              tone: "caution",
              subtitle: "Would we detect a real attack?",
              items: [
                "Goal-based attack simulation",
                "Occasionally",
                "Large regulated entities with a security team",
              ],
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
        <Journey
          flow="column"
          stops={[
            {
              icon: DocumentIcon,
              title: "Get the certificate",
              detail: "Note the number, certification body, version and expiry.",
            },
            {
              icon: SearchIcon,
              title: "Look it up",
              detail: "On IAF CertSearch or the JAS-ANZ register.",
            },
            {
              icon: CalendarIcon,
              title: "Check the version",
              detail: "ISO/IEC 27001:2022. A 2013 certificate is out of date.",
            },
            {
              icon: EyeIcon,
              title: "Read the scope",
              detail: "It should name the entity and services delivering your work.",
            },
            {
              icon: ClipboardIcon,
              title: "Read the Statement of Applicability",
              detail: "Look for secure development, suppliers, access and logging.",
            },
            {
              icon: ChatIcon,
              title: "Ask about the last audit",
              detail: "Any major nonconformities in the latest surveillance audit?",
              tone: "done",
            },
          ]}
        />
      ),
    },
  ],
};
