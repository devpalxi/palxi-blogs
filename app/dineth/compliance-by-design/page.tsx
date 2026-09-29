import type { Metadata } from "next";
import Link from "next/link";
import heroPhoto from "@/public/images/blog/compliance-by-design/tactile-indicators-corinda.jpg";
import {
  Photo,
  PlainWords,
  Prose,
  Sources,
  Takeaways,
} from "../_components/Article";
import { Diagram } from "../_components/Diagram";
import { ArrowLeftIcon } from "../_components/icons";
import { formatDate, getPost } from "../_data/posts";
import { FourPrinciples } from "./_diagrams/FourPrinciples";
import { IdentityCheck } from "./_diagrams/IdentityCheck";
import { KeysAndRecords } from "./_diagrams/KeysAndRecords";
import { OneInFive } from "./_diagrams/OneInFive";
import { SaferAndSimpler } from "./_diagrams/SaferAndSimpler";

const post = getPost("compliance-by-design");

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
};

export default function ComplianceByDesign() {
  return (
    <main>
      <article>
        <header className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-16 lg:pt-14">
          <div className="animate-rise">
            <Link
              href="/dineth"
              className="-ml-2 inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-label font-semibold text-harbour transition-colors duration-200 ease-out-quart hover:bg-harbour-tint hover:text-harbour-deep"
            >
              <ArrowLeftIcon size={20} />
              All stories
            </Link>
            <p className="mt-8">
              <span className="inline-block rounded-full bg-harbour-tint px-3 py-1 text-label font-semibold text-harbour-deep">
                {post.tag}
              </span>
            </p>
            <h1 className="mt-5 font-serif text-display font-semibold text-ink">
              Compliance by design: building UX around AML, SOC 2 and ISO 27001
            </h1>
            <p className="mt-6 max-w-[36rem] text-standfirst text-copy">
              Rules that protect your money and information don&apos;t have to
              feel like red tape. Here is how we build them into our products
              from the start, so staying safe feels simple.
            </p>
            <p className="mt-6 text-label text-muted">
              By {post.author} · {formatDate(post.publishedOn)} ·{" "}
              {post.readingMinutes} minute read
            </p>
          </div>

          <Photo
            src={heroPhoto}
            alt="Rows of raised yellow tactile studs set into the ground at the top of a ramp at a railway station, with white railings either side."
            sizes="(min-width: 1024px) 440px, 100vw"
            eager
            className="animate-rise [animation-delay:120ms]"
            frameClassName="aspect-[4/3]"
            caption="Tactile ground indicators at Corinda station, Brisbane."
            credit={{
              author: "Kgbo",
              licence: "CC BY-SA 4.0",
              licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:Tactile_Ground_Surface_Indicators_at_Corinda_railway_station_at_top_of_the_ramp.jpg",
            }}
          />
        </header>

        <div className="mt-16 px-5 sm:px-8 lg:mt-24">
          <Prose>
            <p>
              Next time you&apos;re at a train station, look down at the top of
              the ramp. You may see rows of small yellow studs set into the
              ground. Most people walk straight over them. For someone who is
              blind or has low vision, they&apos;re a vital warning that the
              ground is about to change.
            </p>
            <p>
              They&apos;re there because an Australian standard, AS/NZS 1428.4,
              sets out how these tactile indicators should work. Good builders
              don&apos;t add them as an afterthought. They&apos;re part of the
              plan from the first drawing, so they fit neatly and help the
              people who need them without getting in anyone else&apos;s way.
            </p>
            <p>
              That&apos;s what we mean by <strong>compliance by design</strong>.
              Financial products come with rules too: laws against money
              laundering, standards for keeping information safe, and
              guidelines that make sure everyone can use them. It&apos;s
              tempting to treat those rules as paperwork to add at the end. We
              build them in from the start.
            </p>

            <h2>The rules we design around</h2>
            <ul>
              <li>
                <strong>Anti-money laundering law.</strong> Many businesses
                that handle money must check who their customers are and
                report suspicious activity to AUSTRAC, Australia&apos;s
                financial intelligence agency. Reforms to these laws began on
                31 March 2026.
              </li>
              <li>
                <strong>Security standards.</strong> SOC 2 and ISO 27001 are
                internationally recognised ways of checking how well a company
                protects information.
              </li>
              <li>
                <strong>Privacy law.</strong> Under the Australian Privacy
                Principles, organisations covered by the Privacy Act must take
                reasonable steps to protect the personal information they hold
                from misuse, loss and unauthorised access.
              </li>
              <li>
                <strong>Accessibility guidelines.</strong> WCAG 2.2 sets out
                how to make websites and apps usable by people with disability.
              </li>
            </ul>
            <p>
              Across Australian finance, the bar keeps rising. Since 1 July
              2025, the financial regulator APRA has required banks, insurers and
              super funds to meet a new standard, CPS 230, for managing
              operational risk and keeping critical services running through
              severe disruptions.
            </p>

            <h2>Identity checks without the interrogation</h2>
            <p>
              If you&apos;ve opened a bank account, you&apos;ve been through a
              &ldquo;know your customer&rdquo; check. Australian law requires
              many businesses that handle money to confirm who their customers
              are, so criminals can&apos;t hide behind fake identities to move
              money around.
            </p>
            <PlainWords term="Know your customer (KYC)">
              means checking that a customer is who they say they are, usually
              by confirming the details on an ID document. It&apos;s one part
              of Australia&apos;s anti-money laundering rules.
            </PlainWords>
            <p>
              These checks matter, but they&apos;re often designed badly: long
              forms, questions with no explanation, and no way to stop halfway.
              That&apos;s hard on anyone, and especially on busy people running
              a business, who may be interrupted many times an hour.
            </p>
            <p>
              Our products help businesses meet these rules, and we design the
              checks to feel as light as the law allows.
            </p>
          </Prose>

          <Diagram caption="What a considerate identity check looks like. The grey bars stand in for the wording and details of a real check.">
            <IdentityCheck />
          </Diagram>

          <Prose>
            <h2>Security you don&apos;t see, but can count on</h2>
            <p>
              Some of the most important parts of a financial product are
              invisible. You&apos;ll never see who inside a business can look
              at your details, or whether every change is written down.
              Independent security standards exist to make sure those things
              are done properly.
            </p>
            <p>
              <strong>SOC 2</strong> is a report prepared by independent
              auditors on how a company controls five areas: security,
              availability, processing integrity, confidentiality and privacy.{" "}
              <strong>ISO 27001</strong> is an international standard for
              managing information security: finding the risks to
              information, putting sensible protections in place, and
              improving them over time.
            </p>
            <p>
              We design our products around the principles these standards set
              out. In plain terms, that means:
            </p>
            <ul>
              <li>
                <strong>Only the keys you need.</strong> People inside a
                business can reach only what their job requires. Someone in
                customer support might see a customer&apos;s contact details,
                for example, but not their payment settings.
              </li>
              <li>
                <strong>A record of every action.</strong> Important actions
                are recorded: who did what, and when. If a question ever comes
                up, there&apos;s a clear answer.
              </li>
              <li>
                <strong>Private by default.</strong> We collect only what&apos;s
                needed, show only what&apos;s needed, such as the last four
                digits of a card, and protect what we hold.
              </li>
            </ul>
          </Prose>

          <Diagram caption="Two quiet protections: access limited to what each team needs, and a record of every important action. The grey bars stand in for real names and times.">
            <KeysAndRecords />
          </Diagram>

          <Prose>
            <PlainWords term="An audit trail">
              is a record of who did what in a system, and when. Like the
              logbook in a building&apos;s security office, it shows exactly
              what happened if anything is ever questioned.
            </PlainWords>

            <h2>Built for everyone</h2>
            <p>
              Accessibility is sometimes thought of as a small issue affecting
              a few people. The numbers say otherwise. According to the
              Australian Bureau of Statistics, 5.5 million Australians had
              disability in 2022. Among Australians aged 65 and over, it was
              more than half.
            </p>
          </Prose>

          <Diagram caption="Share of Australians with disability, from the ABS Survey of Disability, Ageing and Carers, 2022.">
            <OneInFive />
          </Diagram>

          <Prose>
            <p>
              Much of our work is for services the whole community relies on,
              including systems for the Northern Territory Government. Those
              services have to work for everyone: people with low vision,
              people who can&apos;t use a mouse, people using a screen reader,
              and people who simply find small text hard to read.
            </p>
            <p>
              So we design to WCAG 2.2, the international guidelines for
              accessible websites and apps. They rest on four simple
              principles.
            </p>
          </Prose>

          <Diagram caption="The four principles behind WCAG 2.2, in plain words, with the kind of design choices each one leads to.">
            <FourPrinciples />
          </Diagram>

          <Prose>
            <p>
              You&apos;re reading an example right now. This blog follows the
              same guidelines: large text, strong contrast, plain words, and
              animations that stay still if your device is set to reduce
              motion.
            </p>

            <h2>Fewer steps, no shortcuts</h2>
            <p>
              It&apos;s easy to assume that more hoops mean more safety. Often
              the opposite is true. When security is painful, people find ways
              around it, like writing passwords on sticky notes or using the
              same one everywhere.
            </p>
            <p>
              The digital identity guidelines from the US National Institute
              of Standards and Technology (NIST), widely followed around the
              world, have moved away from many old habits. They say
              organisations should not force people to change passwords on a
              schedule, should not demand a mix of character types, and should
              allow password managers.
            </p>
          </Prose>

          <Diagram caption="Old security habits compared with current guidance from NIST. Each change on the right is both safer and easier.">
            <SaferAndSimpler />
          </Diagram>

          <Prose>
            <p>
              We follow the same thinking: ask only what&apos;s needed, ask it
              once, and put the strongest protection where it matters most.
            </p>

            <h2>Why this matters to you</h2>
            <p>
              Compliance done well is mostly invisible. You notice it only as a
              product that asks sensible questions, explains itself, keeps your
              information to itself, and works however you use it. Just like
              the yellow studs at the top of the ramp.
            </p>
            <p>
              Building it in from the start also costs far less than adding it
              later (we explained why in{" "}
              <Link href="/dineth/sketch-to-prototype">
                our post on prototyping
              </Link>
              ), so more of our effort goes into making things better for you.
            </p>
          </Prose>

          <Takeaways
            title="What compliance by design means for you"
            items={[
              "Identity checks explain why they're needed, and you can finish them later.",
              "People inside a business can see only what their job requires.",
              "Important actions are recorded, so questions have clear answers.",
              "Products are built to work for everyone, whatever your eyesight, hearing or hands.",
            ]}
          />

          <Sources
            items={[
              {
                label: "Wikipedia, “Tactile paving” (AS/NZS 1428.4)",
                href: "https://en.wikipedia.org/wiki/Tactile_paving",
              },
              {
                label:
                  "MinterEllison, “The countdown to commencement” (AML/CTF reforms), 20 February 2026",
                href: "https://www.minterellison.com/articles/the-countdown-to-commencement",
              },
              {
                label: "Wikipedia, “AUSTRAC”",
                href: "https://en.wikipedia.org/wiki/AUSTRAC",
              },
              {
                label: "AICPA & CIMA, “SOC suite of services”",
                href: "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services",
              },
              {
                label: "Wikipedia, “ISO/IEC 27001”",
                href: "https://en.wikipedia.org/wiki/ISO/IEC_27001",
              },
              {
                label: "OAIC, “Australian Privacy Principles quick reference”",
                href: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference",
              },
              {
                label: "APRA, “Operational risk management” (CPS 230)",
                href: "https://www.apra.gov.au/operational-risk-management",
              },
              {
                label: "W3C, “Web Content Accessibility Guidelines (WCAG) 2.2”",
                href: "https://www.w3.org/TR/WCAG22/",
              },
              {
                label:
                  "Australian Bureau of Statistics, “Disability, Ageing and Carers, Australia: Summary of Findings”, 2022",
                href: "https://www.abs.gov.au/statistics/health/disability/disability-ageing-and-carers-australia-summary-findings/latest-release",
              },
              {
                label:
                  "NIST, SP 800-63B, “Authentication and Authenticator Management” (version 4)",
                href: "https://pages.nist.gov/800-63-4/sp800-63b.html",
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
