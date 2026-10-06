import type { Metadata } from "next";
import Link from "next/link";
import heroPhoto from "@/public/images/blog/sketch-to-prototype/paper-wireframe-sketches.jpg";
import testPhoto from "@/public/images/blog/sketch-to-prototype/watching-someone-try-it.jpg";
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
import { BeforeAfter } from "./_diagrams/BeforeAfter";
import { CostOfChange } from "./_diagrams/CostOfChange";
import { FiveTesters } from "./_diagrams/FiveTesters";
import { ProcessOverview } from "./_diagrams/ProcessOverview";
import { ThinkAloud } from "./_diagrams/ThinkAloud";

const post = getPost("sketch-to-prototype");

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
};

export default function SketchToPrototype() {
  return (
    <main>
      <article>
        <header className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-16 lg:pt-14">
          <div className="animate-rise">
            <Link
              href="/dineth"
              className="-ml-2 inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-label font-semibold text-magenta transition-colors duration-200 ease-out-quart hover:bg-magenta-tint hover:text-magenta-deep"
            >
              <ArrowLeftIcon size={20} />
              All stories
            </Link>
            <p className="mt-8">
              <span className="inline-block rounded-full bg-magenta-tint px-3 py-1 text-label font-semibold text-magenta-deep">
                {post.tag}
              </span>
            </p>
            <h1 className="mt-5 font-heading text-display font-semibold text-ink">
              From sketch to clickable prototype: our prototyping workflow
            </h1>
            <p className="mt-6 max-w-[36rem] text-standfirst text-copy">
              Before we write a single line of code, we sketch ideas, build a
              pretend version you can tap through, and watch real people try
              it. That is how an idea becomes a feature, and why testing first
              leads to better products.
            </p>
            <p className="mt-6 text-label text-muted">
              By {post.author} · {formatDate(post.publishedOn)} ·{" "}
              {post.readingMinutes} minute read
            </p>
          </div>

          <Photo
            src={heroPhoto}
            alt="Hand-drawn wireframe sketches of a web page spread across a wooden table, with a designer's hand holding a pen nearby."
            sizes="(min-width: 1024px) 440px, 100vw"
            eager
            className="animate-rise [animation-delay:120ms]"
            frameClassName="aspect-[4/3]"
            credit={{
              author: "Sage Ross",
              licence: "CC BY-SA 4.0",
              licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:Paper_prototype_of_website_user_interface,_2015-04-16.jpg",
            }}
          />
        </header>

        <div className="mt-16 px-5 sm:px-8 lg:mt-24">
          <Prose>
            <p>
              Nobody builds a house without drawing up plans first. And before
              you sign for a new home, most builders will happily walk you
              through a display home. You can open the cupboards, try the taps
              and notice the laundry is too small, while it&apos;s still easy
              to change.
            </p>
            <p>
              We build software the same way. Before our developers write any
              code, we sketch the idea, turn it into a realistic pretend
              version, and watch real people try it. Only once it works for
              them do we build the real thing. It saves time and money, and it
              means the features you use have already been tried by people
              like you.
            </p>
          </Prose>

          <Diagram caption="Our five steps from idea to finished feature. If the design isn’t easy to use yet, the middle steps go round again.">
            <ProcessOverview />
          </Diagram>

          <Prose>
            <PlainWords term="A prototype">
              is a practice version of something, made to be tried out before
              the real one is built. Think of it as the display home, not the
              house.
            </PlainWords>

            <h2>Step 1: Listen first</h2>
            <p>
              Every good feature starts with a problem worth solving, and the
              best people to explain a problem are the ones who live with it
              every day. So we start by talking with the people who will use
              what we build. Where we can, we watch how they do the job today:
              what&apos;s fiddly, what takes too long, and what they worry
              about getting wrong.
            </p>
            <p>
              Designers call this <strong>problem discovery</strong>. The
              UK&apos;s Design Council makes it the first stage of its
              well-known &ldquo;Double Diamond&rdquo; model: discover the real
              problem, define it clearly, and only then develop and deliver a
              solution. It stops us building a beautiful answer to the wrong
              question.
            </p>

            <h2>Step 2: Sketch it rough</h2>
            <p>
              With the problem clear, we reach for the simplest tools there
              are: pen and paper. We draw rough screens called wireframes, often
              several different versions of the same idea, to see which ones
              make sense.
            </p>
            <PlainWords term="A wireframe">
              is a simple black-and-white drawing of a screen. Like a floor plan
              shows where the rooms go, it shows where things sit on the
              screen, without colours, pictures or finishing touches.
            </PlainWords>
            <p>
              Sketches are meant to be rough. Nobody minds crossing one out, and
              people feel freer to say what they really think about a scribble
              than about something that looks finished.
            </p>
            <p>
              Speed matters here for a very practical reason. Changing an idea
              while it&apos;s still a sketch costs almost nothing; changing it
              once it has been built costs far more. Usability researcher Jakob
              Nielsen notes that the most common estimate puts a change at
              about <strong>100 times cheaper</strong> before any code is
              written than after.
            </p>
          </Prose>

          <Diagram caption="Each dot is one unit of effort, based on the commonly quoted estimate that a change costs about 100 times more once a feature is built.">
            <CostOfChange />
          </Diagram>

          <Prose>
            <h2>Step 3: Make it clickable</h2>
            <p>
              The best sketches become a realistic prototype that looks and
              behaves like the finished product. We build these in Figma, which
              lets us link screens together, so you can tap a button and move to
              the next screen just as you would in a real app.
            </p>
            <PlainWords term="Figma">
              is a design program that runs in a web browser. Designers use it
              to draw screens and join them together into a prototype that you
              can click or tap through.
            </PlainWords>
            <p>
              Behind the scenes, nothing is actually connected: no real
              payments and no real information. A prototype is a safe place for people to explore, make mistakes
              and change their minds.
            </p>
            <p>
              This is also where most of the visible polish happens. Below is
              the kind of difference testing makes between an early wireframe
              and a finished design.
            </p>
          </Prose>

          <Diagram caption="An early wireframe beside the design that came out of testing. The four numbered changes are typical of what testing reveals.">
            <BeforeAfter />
          </Diagram>

          <Prose>
            <h2>Step 4: Watch real people try it</h2>
            <p>
              Now for the most important step. We ask a few people to try the
              prototype, give them a simple task, such as choosing how to pay,
              and ask them to <strong>think out loud</strong> as they go.
            </p>
            <p>
              We don&apos;t jump in to help. When someone pauses, frowns or
              asks &ldquo;what does this mean?&rdquo;, that&apos;s exactly the
              information we need. Nielsen has called thinking aloud
              &ldquo;the single most valuable usability engineering
              method&rdquo;.
            </p>
            <PlainWords term="A usability test">
              means watching someone use a design to see where it&apos;s easy
              and where it trips them up. It tests the design, never the
              person.
            </PlainWords>
          </Prose>

          <Photo
            src={testPhoto}
            alt="Two people at a laptop. One points at the screen while the other, seen from behind, rests a hand on the keyboard."
            sizes="(min-width: 1064px) 1000px, 100vw"
            className="mx-auto my-14 w-full max-w-[1000px]"
            frameClassName="aspect-[3/2] sm:aspect-[16/9]"
            caption="A researcher and a test participant try out a website together."
            credit={{
              author: "Samuel Mann",
              licence: "CC BY 2.0",
              licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:Project_User_Experience_Testing_(9719939867).jpg",
            }}
          />

          <Diagram caption="In a think-aloud test, people say what they're thinking as they use the prototype. Their questions show us what to make clearer.">
            <ThinkAloud />
          </Diagram>

          <Prose>
            <p>
              Testing doesn&apos;t need hundreds of people. Nielsen&apos;s
              research found that testing with just five people
              uncovers most of the problems in a design, and that several small
              rounds of testing teach you more than one big one.
            </p>
          </Prose>

          <Diagram caption="Calculated from Jakob Nielsen's model, in which each tester reveals about 31% of the problems in a design.">
            <FiveTesters />
          </Diagram>

          <Prose>
            <h2>Step 5: Improve, then hand over</h2>
            <p>
              After each round, we fix whatever tripped people up and test
              again. When people can finish their task comfortably, the design
              is ready to build.
            </p>
            <p>
              Then we hand it over to our developers, who turn it into real,
              working software. Because designers and developers work from the
              same prototype, everyone knows exactly what&apos;s being built,
              including what should happen when something goes wrong, like a
              lost connection or a payment that doesn&apos;t go through. (We
              wrote about that in{" "}
              <Link href="/dineth/designing-for-trust">
                Designing for trust
              </Link>
              .)
            </p>

            <h2>Why this matters to you</h2>
            <p>
              Testing with people first means problems are found in a quiet
              room with a prototype, not by you in the middle of paying a
              bill. The words on the screen have already been read by people
              who aren&apos;t technical, and our developers spend their time
              building the right thing, once.
            </p>
          </Prose>

          <Takeaways
            title="What testing first means for you"
            items={[
              "New features have been tried by real people before you ever see them.",
              "Confusing words and fiddly buttons are fixed before anything is built.",
              "Mistakes are caught early, when they're cheapest to fix.",
              "What happens when something goes wrong has been planned, not left to chance.",
            ]}
          />

          <Sources
            items={[
              {
                label:
                  "Nielsen Norman Group, “Why You Only Need to Test with 5 Users”, Jakob Nielsen, 2000",
                href: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/",
              },
              {
                label:
                  "Nielsen Norman Group, “Paper Prototyping”, Jakob Nielsen, 2003",
                href: "https://www.nngroup.com/articles/paper-prototyping/",
              },
              {
                label:
                  "Nielsen Norman Group, “Thinking Aloud: The #1 Usability Tool”, Jakob Nielsen, 2012",
                href: "https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/",
              },
              {
                label: "Design Council, “The Double Diamond”",
                href: "https://www.designcouncil.org.uk/resources/the-double-diamond/",
              },
              {
                label: "Figma Help Center, “Guide to prototyping in Figma”",
                href: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma",
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
