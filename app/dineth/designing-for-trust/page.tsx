import type { Metadata } from "next";
import Link from "next/link";
import marinaPhoto from "@/public/images/blog/designing-for-trust/cullen-bay-marina-darwin.jpg";
import heroPhoto from "@/public/images/blog/designing-for-trust/reading-phone-by-window.jpg";
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
import { ConfirmationAnatomy } from "./_diagrams/ConfirmationAnatomy";
import { ErrorComparison } from "./_diagrams/ErrorComparison";
import { ReceiptSignals } from "./_diagrams/ReceiptSignals";
import { TwoWaysToPay } from "./_diagrams/TwoWaysToPay";

const post = getPost("designing-for-trust");

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
};

export default function DesigningForTrust() {
  return (
    <main>
      <article>
        <header className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-16 lg:pt-14">
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
              Designing for trust: how we approach UI/UX in fintech
            </h1>
            <p className="mt-6 max-w-[36rem] text-standfirst text-copy">
              Money apps have to feel safe as well as work properly. Here is
              how small design decisions help you feel sure about every
              payment, from the screen before you pay to the receipt after.
            </p>
            <p className="mt-6 text-label text-muted">
              By {post.author} · {formatDate(post.publishedOn)} ·{" "}
              {post.readingMinutes} minute read
            </p>
          </div>

          <Photo
            src={heroPhoto}
            alt="A woman stands by a bright window, reading something on her phone with a calm, focused expression."
            sizes="(min-width: 1024px) 400px, 100vw"
            eager
            className="animate-rise [animation-delay:120ms]"
            frameClassName="aspect-[4/3] lg:aspect-[4/5]"
            credit={{
              author: "Shixart1985",
              licence: "CC BY 2.0",
              licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:Elderly_woman_standing_next_to_a_window_and_looking_at_her_phone.jpg",
            }}
          />
        </header>

        <div className="mt-16 px-5 sm:px-8 lg:mt-24">
          <Prose>
            <p>
              When you pay for something, you&apos;re doing more than pressing
              a button. You&apos;re trusting that the right amount will go to
              the right place, and that you&apos;ll be told plainly if anything
              goes wrong.
            </p>
            <p>
              That trust is hard won, and for good reason. In 2025, Australians
              aged 65 and over made up about 17 per cent of the population, yet
              carried <strong>26.5 per cent of the scam losses</strong>{" "}
              reported to Scamwatch. Pausing before you pay online isn&apos;t
              being old-fashioned. It&apos;s being sensible.
            </p>
            <p>
              At Palxi we build harbr, which marinas use for berth bookings and
              payments, and Cruz, which is used by pub owners, as well as
              systems for the Northern Territory Government. In every one of
              them, we treat trust the way we treat a working Pay button:
              something the product must have, not a nice extra. Here are the
              habits that guide us.
            </p>
            <PlainWords term="UI/UX">
              stands for user interface and user experience. The interface is
              what you see on the screen: the words, buttons and pictures. The
              experience is how it feels to use: clear and calm, or confusing
              and stressful.
            </PlainWords>

            <h2>Clear words beat clever ones</h2>
            <p>
              A clever design can impress people. A clear design helps them.
              When money is involved, we choose clear every time.
            </p>
            <p>
              That starts with the words. Our buttons say &ldquo;Pay
              $186.00&rdquo;, not &ldquo;Proceed&rdquo;. They say &ldquo;Go
              back&rdquo;, not &ldquo;Abort transaction&rdquo;. If a sentence
              needs reading twice, we rewrite it.
            </p>
            <p>
              It also means no hidden fees. You&apos;ve probably booked
              something online, only to find an extra charge on the very last
              screen. The Australian Government has noticed too: draft laws
              released in February 2026 would require transaction fees to be
              shown prominently, so shoppers aren&apos;t &ldquo;ambushed by
              unexpected costs at checkout&rdquo;. We don&apos;t wait for the
              law. Every fee appears before you pay, even when it&apos;s zero.
            </p>
            <p>
              The most important screen of all is the one just before you pay.
              We call it the <strong>confirmation screen</strong>, and we
              design it so you can check everything at a glance.
            </p>
          </Prose>

          <Diagram caption="An example harbr confirmation screen. Each number marks something you should be able to check before you press Pay.">
            <ConfirmationAnatomy />
          </Diagram>

          <Prose>
            <h2>Two ways to pay, both kept simple</h2>
            <p>
              Marina customers using harbr can pay in two ways: by card, or
              straight from their bank account. Behind the scenes, the two
              work quite differently. On the screen, we make both feel just as
              simple, with the same layout, the same words and the same kind of
              receipt at the end.
            </p>
          </Prose>

          <Photo
            src={marinaPhoto}
            alt="Yachts and motor boats moored along the pontoons of Cullen Bay Marina in Darwin, with waterfront apartments and palm trees in late-afternoon sun."
            caption="Cullen Bay Marina, Darwin."
            sizes="(min-width: 1064px) 1000px, 100vw"
            className="mx-auto my-14 w-full max-w-[1000px]"
            frameClassName="aspect-[3/2]"
            credit={{
              author: "happinesswithin",
              licence: "CC BY 3.0",
              licenceUrl: "https://creativecommons.org/licenses/by/3.0/",
              sourceUrl:
                "https://commons.wikimedia.org/wiki/File:View_over_Cullen_Bay_marina_-_panoramio.jpg",
            }}
          />

          <Prose>
            <h3>Paying by card</h3>
            <p>
              For card payments we use Stripe, a large and long-established
              payments company used by businesses around the world. When you
              type your card number into harbr, it goes directly to Stripe in
              an encrypted form. Stripe&apos;s own security guide describes
              exactly this kind of setup, where card details travel straight to
              Stripe rather than through the business&apos;s own systems.
            </p>
            <PlainWords term="Encrypted">
              means scrambled into a code that only the right computer can
              unscramble. If anyone intercepted it along the way, they would
              see nothing but gibberish.
            </PlainWords>

            <h3>Paying from your bank account</h3>
            <p>
              The second option uses <strong>PayTo</strong>, part of
              Australia&apos;s fast payments system. Our partner Zepto connects
              harbr to it. Instead of typing in card details, you approve the
              payment inside your own banking app, the one you already know. You
              see who is asking and how much before you say yes, and you can
              pause or cancel a PayTo agreement from your banking app whenever
              you like. The money arrives within seconds, day or night.
            </p>
            <PlainWords term="Account-to-account (A2A)">
              payments move money directly from your bank account to the
              business&apos;s bank account, with no card in the middle. PayTo
              is one way of doing this in Australia.
            </PlainWords>
          </Prose>

          <Diagram caption="The same result, two different journeys. Whichever way you choose, the marina is paid and you get a receipt straight away.">
            <TwoWaysToPay />
          </Diagram>

          <Prose>
            <p>
              Banks are adding safety checks of their own. Since July 2025,
              Australian banks have been rolling out{" "}
              <strong>Confirmation of Payee</strong>, which checks that the name
              on an account matches the BSB and account number before you pay
              someone new. It&apos;s exactly the right idea: show people who
              they&apos;re paying before any money moves.
            </p>

            <h2>Error messages that calm, not alarm</h2>
            <p>
              Now and then, a payment doesn&apos;t work. A bank might decline a
              card, or a phone might lose signal at the wrong moment. What
              matters is what you see next.
            </p>
            <p>
              A confusing message makes a small problem feel like a big one.
              &ldquo;Error 402&rdquo; means something to a computer, but nothing
              to you. And most people&apos;s first worry isn&apos;t the code
              anyway. It&apos;s: <strong>has my money gone?</strong>
            </p>
            <p>
              So we answer that first. Our messages say, in plain words, what
              happened, what it means for your money, and what you can do next.
              For example: &ldquo;Your payment hasn&apos;t gone through, and no
              money has left your account.&rdquo;
            </p>
            <p>
              This follows long-standing advice from usability researchers at
              the Nielsen Norman Group: use everyday language, describe the
              problem precisely, suggest a way forward, and never blame the
              person using the app.
            </p>
          </Prose>

          <Diagram caption="The same problem, two different messages. The one on the right answers the questions people actually have.">
            <ErrorComparison />
          </Diagram>

          <Prose>
            <h2>Small signs that add up to trust</h2>
            <p>
              Trust also grows from many small, consistent details. Most are so
              ordinary you may never notice them, and that&apos;s the point.
            </p>
            <ul>
              <li>
                <strong>The same look everywhere.</strong> The same name,
                colours and style on every screen, email and receipt. Scammers
                often copy a brand badly, so anything that suddenly looks
                different deserves a second look.
              </li>
              <li>
                <strong>Security you can check.</strong> A padlock beside the
                web address in your browser, and an address you recognise. No
                genuine payment service needs your banking password, or a
                one-time code sent to your phone, over a call or a text. If
                anyone asks for these, it&apos;s a scam.
              </li>
              <li>
                <strong>A proper receipt, every time.</strong> Straight after
                you pay, with everything you&apos;d need if you ever had to
                check or query it.
              </li>
            </ul>
          </Prose>

          <Diagram caption="An example harbr receipt. Each number marks a detail that helps you confirm the payment is genuine and correct.">
            <ReceiptSignals />
          </Diagram>

          <Prose>
            <h2>Why this matters to us</h2>
            <p>
              Trust isn&apos;t a coat of paint added at the end. It&apos;s
              decided in hundreds of small choices: the words on a button, the
              order of a screen, the first line of an error message. We test
              those choices with real people, including people who don&apos;t
              think of themselves as good with technology. When they feel sure,
              we know we&apos;ve got it right.
            </p>
          </Prose>

          <Takeaways
            title="Four things to look for before you pay, in any app"
            items={[
              "You can see exactly who you're paying, and what for.",
              "Every fee is shown before you confirm, even if it's $0.00.",
              "If something goes wrong, you're told plainly whether your money has moved.",
              "You get a receipt with a reference number, straight away.",
            ]}
          >
            <p>
              If something doesn&apos;t feel right, stop and check. You can see
              the latest scams, and report one, at{" "}
              <a
                href="https://www.scamwatch.gov.au/"
                className="font-semibold text-harbour underline underline-offset-2 hover:text-harbour-deep"
              >
                scamwatch.gov.au
              </a>
              .
            </p>
          </Takeaways>

          <Sources
            items={[
              {
                label:
                  "ACCC, “Continued action critical to combat fraud as annual scam losses exceed $2 billion”, 30 March 2026",
                href: "https://www.accc.gov.au/media-release/continued-action-critical-to-combat-fraud-as-annual-scam-losses-exceed-2-billion",
              },
              {
                label:
                  "Treasury Ministers, “Government targets hidden fees and subscription traps”, 9 February 2026",
                href: "https://ministers.treasury.gov.au/ministers/andrew-leigh-2025/media-releases/government-targets-hidden-fees-and-subscription-traps",
              },
              {
                label: "Stripe, Integration security guide",
                href: "https://docs.stripe.com/security/guide",
              },
              {
                label: "Zepto, PayTo",
                href: "https://zepto.com.au/solutions/payto",
              },
              {
                label: "Australian Payments Plus, Confirmation of Payee",
                href: "https://www.auspayplus.com.au/solutions/confirmation-payee",
              },
              {
                label:
                  "Nielsen Norman Group, “Error-Message Guidelines”, Tim Neusesser and Evan Sunwall, 2023",
                href: "https://www.nngroup.com/articles/error-message-guidelines/",
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
