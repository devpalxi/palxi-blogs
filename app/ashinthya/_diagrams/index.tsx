import type { ReactNode } from "react";
import {
  CheckIcon,
  ChatIcon,
  ClipboardIcon,
  EyeIcon,
  ReceiptIcon,
} from "../../dineth/_components/icons";
import { StepFlow } from "../../dineth/_components/diagram-kit";
import {
  BarRows,
  Checklist,
  Columns,
  Layers,
  Numbered,
  Outcomes,
  RangeBars,
  SnapshotVsPeriod,
} from "./kit";

export type Placement = {
  // Text of the h2 the diagram sits directly above.
  before: string;
  caption: string;
  node: ReactNode;
};

export const diagrams: Record<string, Placement[]> = {
  "apra-cps-234-board-questions": [
    {
      before: "Questions about assets and third parties",
      caption:
        "The five gaps APRA found in the first round of independent CPS 234 assessments (July 2023).",
      node: (
        <Numbered
          items={[
            {
              title: "Assets not fully identified",
              detail: "Critical and sensitive assets were not all classified.",
            },
            {
              title: "Third parties barely checked",
              detail: "Limited checks on vendors' security capability.",
            },
            {
              title: "Testing poorly run",
              detail: "Testing programs were poorly defined or poorly run.",
            },
            {
              title: "Little internal audit",
              detail: "Limited internal audit review of security controls.",
            },
            {
              title: "Late reporting to APRA",
              detail:
                "Material incidents and weaknesses reported late or inconsistently.",
            },
          ]}
        />
      ),
    },
    {
      before: "The board's question list, with evidence",
      caption:
        "One incident can start several clocks at once. Bar lengths show the order of the deadlines, not their exact size, and business days run longer than calendar hours.",
      node: (
        <BarRows
          rows={[
            {
              label:
                "CPS 230: a critical operation is disrupted beyond tolerance",
              chip: "24 hours",
              pct: 12,
            },
            {
              label: "CPS 234: a material information security incident",
              chip: "72 hours",
              pct: 36,
            },
            {
              label: "CPS 230: an operational risk incident with material impact",
              chip: "72 hours",
              pct: 36,
            },
            {
              label:
                "CPS 234: a material control weakness that can't be fixed in time",
              chip: "10 business days",
              pct: 100,
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
        <Numbered
          items={[
            {
              title: "Origination",
              detail: "Application, identity checks and documents.",
            },
            {
              title: "Decisioning",
              detail: "Rules and scorecards that approve, decline or refer.",
            },
            {
              title: "Credit reporting",
              detail: "Enquiries and reports in, repayment history out.",
            },
            {
              title: "Servicing",
              detail: "Schedules, repayments, fees, variations, statements.",
            },
            {
              title: "Hardship and collections",
              detail: "Cases, arrangements, notices and clocks.",
            },
            {
              title: "Ledger and reconciliation",
              detail: "The record of who owes what.",
            },
            {
              title: "Reporting",
              detail: "To regulators, funders, auditors and the board.",
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
        <StepFlow
          steps={[
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
              icon: EyeIcon,
              title: "Clock runs",
              detail: "A visible countdown, with alerts before day 21.",
              tone: "caution",
            },
            {
              icon: ReceiptIcon,
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
        <Outcomes
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
        <Columns
          columns={[
            {
              title: "Buy the core",
              tone: "default",
              subtitle: "Systems of record and specialist services",
              items: [
                "Loan management ledger",
                "General ledger",
                "Identity verification",
                "Sanctions screening",
              ],
            },
            {
              title: "Build the edges",
              tone: "done",
              subtitle: "What customers and brokers touch",
              items: [
                "Broker and customer apps",
                "Credit decisioning rules",
                "The integration layer",
                "Reporting",
              ],
            },
          ]}
        />
      ),
    },
    {
      before: "Lock-in and the exit you have to plan",
      caption:
        "Put both options on the same five-year view. A licence price and a build quote are not comparable on their own.",
      node: (
        <Numbered
          items={[
            {
              title: "Upfront",
              detail: "Licence and setup, or discovery, design and build.",
            },
            {
              title: "Integration",
              detail: "Connectors are often priced separately when you buy.",
            },
            {
              title: "Running",
              detail: "Subscriptions that grow with volume, or hosting and support.",
            },
            {
              title: "Change",
              detail: "Waiting on the vendor's roadmap, or your own team's time.",
            },
            {
              title: "Compliance evidence",
              detail: "Vendor reports plus your own controls, or all your own.",
            },
            {
              title: "Upgrades and exit",
              detail: "Forced upgrades and migration costs apply to both.",
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
              items: [
                "Deposits capped at $2 million in total",
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
              items: [
                "Credit decisioning engine",
                "CDR data holder APIs",
              ],
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
        <Layers
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
        <Outcomes
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
        "AUSTRAC reporting deadlines. Bar lengths show the order, not an exact scale.",
      node: (
        <BarRows
          rows={[
            {
              label: "Suspicious matter report: terrorism financing",
              chip: "24 hours",
              pct: 10,
            },
            {
              label: "Suspicious matter report: other suspicions",
              chip: "3 business days",
              pct: 35,
            },
            {
              label: "Threshold and international funds transfer reports",
              chip: "10 business days",
              pct: 100,
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
      node: (
        <Columns
          columns={[
            {
              title: "NPP credit transfer",
              subtitle: "Pushes money out, in real time",
              items: [
                "Good for individual payouts",
                "Watch per-payment cost",
                "Some accounts are unreachable",
              ],
            },
            {
              title: "PayTo",
              tone: "done",
              subtitle: "Pulls money in, under an agreement",
              items: [
                "Good for funding the platform",
                "Single transfers only",
                "Bank support is uneven",
              ],
            },
            {
              title: "BECS direct entry",
              tone: "caution",
              subtitle: "Batched, not real time",
              items: [
                "Good for bulk runs and as a fallback",
                "Rejections come back late",
                "Limited data fields",
              ],
            },
          ]}
        />
      ),
    },
    {
      before: "Scam rules: who they bind and how they reach you",
      caption:
        "Five things a payout ledger for Australian A2A should have from the first release.",
      node: (
        <Numbered
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
        <RangeBars
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
      node: <SnapshotVsPeriod />,
    },
    {
      before: "Questions to ask a vendor",
      caption:
        "Our view: first-year planning ranges in AUD ex GST for a vendor of 20 to 100 staff. The largest cost, internal engineering time, isn't shown.",
      node: (
        <RangeBars
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
        <Numbered
          items={[
            {
              title: "Get the certificate",
              detail: "Note the number, certification body, version and expiry.",
            },
            {
              title: "Look it up",
              detail: "On IAF CertSearch or the JAS-ANZ register.",
            },
            {
              title: "Check the version",
              detail: "ISO/IEC 27001:2022. A 2013 certificate is out of date.",
            },
            {
              title: "Read the scope",
              detail: "It should name the entity and services delivering your work.",
            },
            {
              title: "Read the Statement of Applicability",
              detail: "Look for secure development, suppliers, access and logging.",
            },
            {
              title: "Ask about the last audit",
              detail: "Any major nonconformities in the latest surveillance audit?",
            },
          ]}
        />
      ),
    },
  ],
};
