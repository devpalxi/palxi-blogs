import type { Metadata } from "next";
import Link from "next/link";
import blocksPhoto from "@/public/images/blog/one-design-system/colourful-building-blocks.jpg";
import heroPhoto from "@/public/images/blog/one-design-system/nullarbor-warning-signs.jpg";
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
import { BuildingBlocks } from "./_diagrams/BuildingBlocks";
import { FeedbackLoop } from "./_diagrams/FeedbackLoop";
import { FixOnce } from "./_diagrams/FixOnce";
import { LearnOnce } from "./_diagrams/LearnOnce";

const post = getPost("one-design-system");

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
};

export default function OneDesignSystem() {
  return (
    <main>
      <article>
        <header className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-16 lg:pt-14">
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
              One design system, many products: how we keep Palxi consistent
            </h1>
            <p className="mt-6 max-w-[36rem] text-standfirst text-copy">
              Drive anywhere in Australia and the road signs speak the same
              language. Here is how one shared design system does the same for
              every Palxi product, so you learn once and feel at home
              everywhere.
            </p>
            <p className="mt-6 text-label text-muted">
              By {post.author} · {formatDate(post.publishedOn)} ·{" "}
              {post.readingMinutes} minute read
            </p>
          </div>

          <Photo
            src={heroPhoto}
            alt="Three yellow diamond warning signs showing a camel, a wombat and a kangaroo beside a long, straight highway on the Nullarbor Plain, under a clear blue sky."
            sizes="(min-width: 1024px) 460px, 100vw"
            eager
            className="animate-rise [animation-delay:120ms]"
            frameClassName="aspect-[3/2]"
            caption="Warning signs on the Eyre Highway at Nullarbor, South Australia."
            credit={{
              author: "Bahnfrend",
              licence: "CC BY-SA 4.0",
              licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:Warning_sign,_Nullarbor,_2017_(02).jpg",
            }}
          />
        </header>

        <div className="mt-16 px-5 sm:px-8 lg:mt-24">
          <Prose>
            <p>
              Drive across the Nullarbor and you&apos;ll pass a sign with a
              camel, a wombat and a kangaroo on it. You may never have seen a
              camel on the road, but you know exactly what that sign means.
              Yellow diamond, black picture: watch out.
            </p>
            <p>
              That&apos;s no accident. Road signs across Australia follow a
              national standard, AS 1742, which sets their shapes, colours and
              symbols. Standards Australia describes the aim as &ldquo;clear
              and consistent messaging&rdquo;, and the reason is safety. When
              every sign follows the same rules, drivers don&apos;t have to
              stop and think.
            </p>
            <p>
              Software can work the same way. At Palxi, everything we build,
              from harbr and Cruz to our Northern Territory Government systems,
              shares one design system. This post explains what that means, and
              why it matters to you.
            </p>

            <h2>What a design system is</h2>
            <p>
              The usability researchers at the Nielsen Norman Group define a
              design system as &ldquo;a complete set of standards intended to
              manage design at scale using reusable components and
              patterns&rdquo;. That&apos;s a mouthful, so here it is in plain
              words: a design system is a shared kit for building screens. It
              has three layers.
            </p>
            <ul>
              <li>
                <strong>The basics.</strong> The colours, text styles, spacing
                and tone of voice every product uses.
              </li>
              <li>
                <strong>Building blocks.</strong> Buttons, form fields and
                notices, each designed and tested once.
              </li>
              <li>
                <strong>Patterns.</strong> Bigger pieces, like a sign-in page
                or a payment summary, put together from the building blocks.
              </li>
            </ul>
          </Prose>

          <Photo
            src={blocksPhoto}
            alt="A child's hands fit coloured wooden blocks of different shapes onto a wooden base."
            sizes="(min-width: 1064px) 1000px, 100vw"
            className="mx-auto my-14 w-full max-w-[1000px]"
            frameClassName="aspect-[3/2] sm:aspect-[16/9]"
            caption="Pieces made once, fitted together in many ways."
            credit={{
              author: "Shixart1985",
              licence: "CC BY 2.0",
              licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:Child_engages_in_colorful_building_activity.jpg",
            }}
          />

          <Diagram caption="A design system in three layers: the basics make the building blocks, and the building blocks make every screen. Each block lights up as it is used.">
            <BuildingBlocks />
          </Diagram>

          <Prose>
            <PlainWords term="A component">
              is one reusable building block, like a button or a form field.
              It&apos;s designed once, tested once, and then used everywhere
              it&apos;s needed.
            </PlainWords>

            <h2>Learn once, feel at home everywhere</h2>
            <p>
              Jakob Nielsen&apos;s widely used list of design principles
              includes one called <strong>consistency and standards</strong>.
              It says people &ldquo;should not have to wonder whether different
              words, situations, or actions mean the same thing&rdquo;.
            </p>
            <p>
              A related idea, known as Jakob&apos;s Law, points out that people
              spend most of their time using other websites and apps, so they
              expect yours to work the same way. Every time something works
              differently, they have to stop and learn it again.
            </p>
            <p>
              For anyone using more than one of our products, a design system
              means the button that moves you forward always looks the same,
              sits in the same place and says the same thing. It helps with
              trust, too. As we wrote in{" "}
              <Link href="/dineth/designing-for-trust">Designing for trust</Link>
              , a screen that suddenly looks different deserves a second look.
              Consistency makes the genuine thing easy to recognise.
            </p>
          </Prose>

          <Diagram caption="The same three kinds of service, built without and with a shared design system. The grey bars stand in for real content.">
            <LearnOnce />
          </Diagram>

          <Prose>
            <h2>Faster to build, fewer mistakes</h2>
            <p>
              A design system helps behind the scenes as well. When designers
              don&apos;t have to redraw a button for every new screen, they can
              spend their time on the harder questions, like whether a process
              makes sense to the people using it.
            </p>
            <p>
              In a study by the design tool company Figma, designers who had a
              design system finished a task <strong>34% faster</strong> than
              those without one. Figma is careful to call that a best case,
              because the system in the test suited the task perfectly, but it
              shows how much repeated work a shared kit can save.
            </p>
            <p>
              It helps with mistakes, too. A shared building block is designed
              and tested carefully, once, and then reused. And when something
              needs fixing, it&apos;s fixed in one place, and every product
              gets the fix.
            </p>
          </Prose>

          <Diagram caption="Fix once, fixed everywhere. An improvement to a shared building block reaches every product that uses it.">
            <FixOnce />
          </Diagram>

          <Prose>
            <h2>A system that keeps learning</h2>
            <p>
              A design system isn&apos;t a rulebook carved in stone. It&apos;s
              more like a well-kept family recipe book, updated whenever
              someone finds a better way.
            </p>
            <p>
              Much of what we learn comes from watching people use our
              products, the way we described in{" "}
              <Link href="/dineth/sketch-to-prototype">
                our post on prototyping
              </Link>
              . If testing shows people are missing a button or misreading a
              word, we don&apos;t just fix it in one place. We improve the
              shared piece, so every product benefits.
            </p>
          </Prose>

          <Diagram caption="How the design system improves: every lesson from one product becomes an improvement for all of them.">
            <FeedbackLoop />
          </Diagram>

          <Prose>
            <h2>Why this matters to you</h2>
            <p>
              You may never think about a design system, and that&apos;s fine.
              You&apos;ll notice it in other ways: things are where you expect
              them, words mean the same thing everywhere, and a new Palxi
              product feels familiar from the very first screen.
            </p>
            <p>
              In fact, you&apos;ve seen one at work across this series. This
              blog has its own small design system: the same colours, the same
              &ldquo;In plain words&rdquo; notes and the same style of diagram
              in every post. It&apos;s why each new post has felt familiar,
              even when the topic was new.
            </p>
          </Prose>

          <Takeaways
            title="What one design system means for you"
            items={[
              "Buttons, words and layouts work the same way across our products.",
              "What you learn in one product helps you in the next.",
              "A genuine Palxi screen is easy to recognise, and an odd one stands out.",
              "An improvement found in one product reaches all of them.",
            ]}
          />

          <Sources
            items={[
              {
                label:
                  "Standards Australia, “Driving standardisation in road signs”, 10 September 2021",
                href: "https://www.standards.org.au/news/driving-standardisation-in-road-signs",
              },
              {
                label:
                  "Nielsen Norman Group, “Design Systems 101”, Therese Fessenden, 2021",
                href: "https://www.nngroup.com/articles/design-systems-101/",
              },
              {
                label:
                  "Nielsen Norman Group, “10 Usability Heuristics for User Interface Design”, Jakob Nielsen",
                href: "https://www.nngroup.com/articles/ten-usability-heuristics/",
              },
              {
                label: "Laws of UX, “Jakob’s Law”",
                href: "https://lawsofux.com/jakobs-law/",
              },
              {
                label:
                  "Figma, “Measuring the value of design systems”, Clancy Slack, 2019",
                href: "https://www.figma.com/blog/measuring-the-value-of-design-systems/",
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
