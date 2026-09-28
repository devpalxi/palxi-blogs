import type { Metadata } from "next";
import Link from "next/link";
import heroPhoto from "@/public/images/blog/shipping-safely/wolli-creek-junction-sydney.jpg";
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
import { BranchLine } from "./_diagrams/BranchLine";
import { ChecksPipeline } from "./_diagrams/ChecksPipeline";
import { GradualRollout } from "./_diagrams/GradualRollout";
import { ParallelBranches } from "./_diagrams/ParallelBranches";
import { TwoCopies } from "./_diagrams/TwoCopies";

const post = getPost("shipping-safely");

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
};

export default function ShippingSafely() {
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
              How we ship safely: feature branching explained
            </h1>
            <p className="mt-6 max-w-[36rem] text-standfirst text-copy">
              Every software update carries a small risk. Here is how we build
              new features on a safe copy, check them several times over and
              switch them on gradually, so the service you rely on keeps
              working.
            </p>
            <p className="mt-6 text-label text-muted">
              By {post.author} · {formatDate(post.publishedOn)} ·{" "}
              {post.readingMinutes} minute read
            </p>
          </div>

          <Photo
            src={heroPhoto}
            alt="Railway tracks at Wolli Creek in Sydney, where a branch line curves away from the main line under overhead power wires."
            sizes="(min-width: 1024px) 440px, 100vw"
            eager
            className="animate-rise [animation-delay:120ms]"
            frameClassName="aspect-[4/3]"
            caption="Wolli junction, Sydney, where one line branches off another."
            credit={{
              author: "Gareth Edwards",
              licence: "CC BY-SA 3.0",
              licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:Wolli_Creek_railway_station_Wolli_junction.JPG",
            }}
          />
        </header>

        <div className="mt-16 px-5 sm:px-8 lg:mt-24">
          <Prose>
            <p>
              On 8 November 2023, <strong>10.2 million Australians</strong> and
              400,000 businesses lost their Optus phone and internet service for
              around 14 hours. Optus said the trouble began after a routine
              software upgrade.
            </p>
            <p>
              Eight months later, on 19 July 2024, a faulty update from security
              company CrowdStrike crashed an estimated 8.5 million Windows
              computers around the world. Here, the big four banks, Telstra, the
              ABC and Foxtel all had services go offline, and many shops
              couldn&apos;t take EFTPOS.
            </p>
            <p>
              Neither company set out to cause harm. Both outages began with an
              update meant to make things better. That&apos;s the
              uncomfortable truth about software: every change carries a small
              risk, and no company is immune. What matters is how carefully
              changes are made.
            </p>
            <p>
              Our products look after people&apos;s money, so we are especially
              careful. This post explains how, using a picture most Australians
              know well: the railway.
            </p>

            <h2>A branch line for every new feature</h2>
            <p>
              Picture a busy railway line. Trains run to timetable all day,
              carrying people who need to get where they&apos;re going. If the
              railway wants to add a new station, it doesn&apos;t dig up the
              main line in peak hour. It builds a separate branch line, tests it
              thoroughly, and only connects it once it&apos;s ready.
            </p>
            <p>
              Our products work the same way. The version customers use every
              day is our main line. When we build something new, we make a
              separate copy called a <strong>feature branch</strong>, and all
              the work happens there. The main line keeps running as normal.
            </p>
          </Prose>

          <Diagram caption="A feature branch splits off from the main line, is built and checked on its own track, and joins back only when it's ready.">
            <BranchLine />
          </Diagram>

          <Prose>
            <PlainWords term="A feature branch">
              is a safe copy of the product where we build something new,
              without touching what customers use today.
            </PlainWords>
            <p>
              Developers keep track of these copies with a tool called Git,
              which records every change ever made to a product&apos;s code and
              is used by software teams around the world. Its own guide
              describes branching as a way to keep working &ldquo;without
              messing with that main line&rdquo;.
            </p>

            <h2>Design and code, side by side</h2>
            <p>
              It isn&apos;t only the code that gets a branch. Our designers work
              in Figma, the design tool we described in{" "}
              <Link href="/dineth/sketch-to-prototype">
                our post on prototyping
              </Link>
              , and Figma has branches too: a way to explore changes to a
              design without editing the approved original.
            </p>
            <p>
              So when a new feature begins, the design gets its own branch and
              the code gets its own branch. Each is reviewed on its own, and
              they come back together at the end. The approved designs and the
              live product both stay safe while work is under way, and what you
              finally see matches what was designed and tested.
            </p>
          </Prose>

          <Diagram caption="Design and code each get their own branch, are reviewed separately, and are merged back together.">
            <ParallelBranches />
          </Diagram>

          <Prose>
            <h2>Checked, tested and rehearsed</h2>
            <p>
              Before a branch can rejoin the main line, it has to pass several
              checks, each done by a different person or tool.
            </p>
            <ul>
              <li>
                <strong>Code review.</strong> Another developer reads every
                change before it&apos;s accepted. Google&apos;s published
                guidance puts it simply: the main purpose of code review is to
                make sure the overall health of the code keeps improving over
                time.
              </li>
              <li>
                <strong>Automatic tests.</strong> The computer runs through a
                long list of checks to confirm the new work hasn&apos;t broken
                anything that already worked.
              </li>
              <li>
                <strong>Quality assurance.</strong> A tester tries the feature
                the way real people will use it, including the awkward cases,
                like a lost connection halfway through.
              </li>
              <li>
                <strong>Staging.</strong> Finally, the whole thing is rehearsed
                on a full practice copy of the product.
              </li>
            </ul>
          </Prose>

          <Diagram caption="Five checks between an idea and a release. Each one is another chance to catch a problem before it reaches you.">
            <ChecksPipeline />
          </Diagram>

          <Prose>
            <PlainWords term="Staging">
              is a full practice copy of the product. It works just like the
              real thing, but with no real customers and no real money, so
              it&apos;s a safe place to rehearse.
            </PlainWords>

            <h2>Switched on for a few people first</h2>
            <p>
              Even after all those checks, we don&apos;t switch a new feature on
              for everyone at once. We use <strong>feature flags</strong> to
              turn it on for a small group first, keep a close eye on how it
              behaves, and only then widen it, step by step, until everyone has
              it.
            </p>
            <PlainWords term="A feature flag">
              is an on/off switch built into the product. It lets a new feature
              be turned on for some people and not others, or switched off
              again in seconds, without releasing new software.
            </PlainWords>
            <p>
              This approach has an old-fashioned name: a{" "}
              <strong>canary release</strong>, after the canaries that miners
              once carried into coal mines as an early warning. A few people
              get the change first, and if anything seems wrong, it&apos;s
              switched off before most people would ever notice. After its
              outage, CrowdStrike committed to exactly this, rolling out future
              updates gradually, &ldquo;starting with a canary
              deployment&rdquo;.
            </p>
          </Prose>

          <Diagram caption="A new feature is switched on for a small group first, then more people, and only then everyone. It can be switched off at any stage.">
            <GradualRollout />
          </Diagram>

          <Prose>
            <h2>No &ldquo;closed for maintenance&rdquo; sign</h2>
            <p>
              You may remember websites going offline for &ldquo;scheduled
              maintenance&rdquo; in the middle of the night. For anything to do
              with payments, that isn&apos;t good enough: people pay bills at
              all hours.
            </p>
            <p>
              One common way to avoid downtime is to keep two identical copies
              of the live system. The new version is set up and checked on the
              spare copy while customers carry on using the current one. Then
              everyone is moved across in an instant. The old copy stays ready,
              so if anything looks wrong, everyone can be switched straight
              back. Engineers call this a <strong>blue-green</strong> release,
              after the colours often used to label the two copies.
            </p>
          </Prose>

          <Diagram caption="Two copies, one switch. Customers move to the new version in an instant, and the old one stays ready as a safety net.">
            <TwoCopies />
          </Diagram>

          <Prose>
            <h2>Why this matters when money is involved</h2>
            <p>
              For a game or a social media app, a bad update is an annoyance.
              For something that handles payments, it can mean a bill that
              doesn&apos;t get paid or a business that can&apos;t take money.
              That&apos;s why we hold every change to the same careful process.
            </p>
            <ul>
              <li>
                <strong>Stability.</strong> The service you rely on keeps
                working while it improves, because new work never happens on
                the main line.
              </li>
              <li>
                <strong>A clear record.</strong> Every change can be traced:
                what changed, who made it, who checked it, and when. If a
                question ever comes up, we can show exactly what happened.
              </li>
              <li>
                <strong>No downtime.</strong> Updates happen without closing the
                service, so you can pay or get paid at any hour.
              </li>
              <li>
                <strong>A safety net.</strong> Problems are caught early by a
                small group, and changes can be switched off or rolled back
                quickly.
              </li>
            </ul>
            <p>
              None of this makes software perfect. What it does is make every
              change small, checked and reversible, which is exactly what
              you&apos;d want from anyone looking after your money.
            </p>
          </Prose>

          <Takeaways
            title="What this means for you"
            items={[
              "New work never happens on the version you're using.",
              "Every change is checked by more than one person before it reaches you.",
              "New features reach a small group first, so problems are caught early.",
              "Updates happen without closing the service, with a way to switch straight back.",
            ]}
          />

          <Sources
            items={[
              {
                label:
                  "ABC News, “Optus identifies cause of nationwide outage”, 13 November 2023",
                href: "https://www.abc.net.au/news/2023-11-13/optus-identifies-cause-of-nationwide-outage-software-upgrade/103099902",
              },
              {
                label:
                  "Microsoft, “Helping our customers through the CrowdStrike outage”, David Weston, 20 July 2024",
                href: "https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/",
              },
              {
                label:
                  "The Conversation, “Massive global IT outage hits banks, airports, supermarkets”, Mark A Gregory, 19 July 2024",
                href: "https://theconversation.com/massive-global-it-outage-hits-banks-airports-supermarkets-and-a-single-software-update-is-likely-to-blame-235107",
              },
              {
                label:
                  "CrowdStrike, “Falcon Content Update Preliminary Post Incident Report”, 2024",
                href: "https://www.crowdstrike.com/en-us/blog/falcon-content-update-preliminary-post-incident-report/",
              },
              {
                label: "Pro Git, “Branches in a Nutshell”",
                href: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
              },
              {
                label: "Figma Help Center, “Guide to branching”",
                href: "https://help.figma.com/hc/en-us/articles/360063144053-Guide-to-branching",
              },
              {
                label: "Google Engineering Practices, “The Standard of Code Review”",
                href: "https://google.github.io/eng-practices/review/reviewer/standard.html",
              },
              {
                label: "Danilo Sato, “Canary Release”, martinfowler.com, 2014",
                href: "https://martinfowler.com/bliki/CanaryRelease.html",
              },
              {
                label:
                  "Pete Hodgson, “Feature Toggles (aka Feature Flags)”, martinfowler.com, 2017",
                href: "https://martinfowler.com/articles/feature-toggles.html",
              },
              {
                label: "Martin Fowler, “Blue Green Deployment”, 2010",
                href: "https://martinfowler.com/bliki/BlueGreenDeployment.html",
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
