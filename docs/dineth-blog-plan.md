# Dineth Blog Plan

Editorial plan for Palxi blog posts. Each entry lists the angle, what to cover, and the takeaway summary.

## 1. Designing for Trust: How We Approach UI/UX in Fintech

**Status:** Live at `/dineth/designing-for-trust` (`app/dineth/designing-for-trust/page.tsx`), published 28 September 2026. Written as a company-wide piece structured around four moments of trust (before, while, if something goes wrong, after you pay); the harbr/Stripe/Zepto specifics below were deliberately generalised. Uses the template for later posts: header with hero photo, prose sections, `Diagram` frames with generic wireframes, "In plain words" notes, takeaways, sources.

**Revised 1 October 2026 (diagrams and photos):** All five diagrams rebuilt so the motion explains the idea instead of just revealing it:
- One payment travels a single route, and "if something goes wrong" is a detour that rejoins it.
- A reading highlight moves down the confirmation screen, then ties the total to the Pay button.
- The card and PayTo routes run side by side and meet at one receipt that prints out, with the card number scrambling to show encryption.
- Each worry left by "Error 402" is answered by a matching part of the clear message.
- The receipt feeds out of a printer slot.

New shared pieces:
- `at()` timing and `Device` phone frame in `diagram-kit.tsx`
- `Scramble.tsx`
- `travel`, `focus`, `sweep`, `flash`, `ripple` and `print` animations, plus `.receipt-edge` and `.paper-shadow`, in `globals.css`

Two Shixart1985 CC BY 2.0 photos were added: a card held over a laptop (in "While you pay") and a woman smiling at her laptop (after "One standard"). The other four posts still use the older diagram style.

**Angle:** Money products need to feel safe as well as work correctly. This post explains how design decisions build user confidence.

**What to cover:**

1. Clarity over cleverness: plain language, no hidden fees, clear confirmation screens
2. Designing payment flows in harbour: making card (Stripe) and A2A (Zepto) payments feel simple
3. Error states that reassure, e.g. "Your payment hasn't gone through, and no money has left your account"
4. Visual trust signals such as consistent branding, security cues, and transaction receipts

**Summary:** This post positions Palxi as a company that treats user trust as a design requirement.

## 2. From Sketch to Clickable Prototype: Our Prototyping Workflow

**Status:** Live at `/dineth/sketch-to-prototype` (`app/dineth/sketch-to-prototype/page.tsx`), published 28 September 2026. Generalised per the no-examples rule: the marina-manager example was dropped, and the before/after "screenshots" are a generic side-by-side wireframe vs tested design of a "choose how to pay" screen, framed as typical changes rather than a real study. Uses a display-home analogy for Australian readers; facts from NN/g (5 users, paper prototyping, think-aloud), Design Council (Double Diamond) and Figma's help centre.

**Revised 1 October 2026 (diagrams and photo):** All five diagrams rebuilt in the new motion style (see post 1's note for the shared kit).
- Process overview: one idea travels a route, with a "go round again" loop between watch and build.
- Cost of change: 100 dots fill while a counter runs from 1 to 100.
- Before/after: one phone screen whose four regions swap from wireframe to final design, each synced to its note.
- Think-aloud: a touch marker wanders the screen as the tester's thoughts appear and the notepad fills.
- Five testers: a field of 100 hidden problems that each tester uncovers a share of.

New shared pieces: `CountUp.tsx` and the `swap-out` animation. Also fixed `ripple` so it stays invisible until its beat. One photo added before the think-aloud diagram: Samuel Mann, CC BY 2.0.

**Angle:** Take readers behind the scenes of how an idea becomes a real feature.

**What to cover:**

1. Problem discovery: talking to real users, e.g. a marina manager handling berth bookings
2. Low-fidelity wireframes: quick sketches to explore ideas cheaply
3. High-fidelity Figma prototypes: realistic, clickable flows
4. Usability testing: watching users try the prototype before any code is written
5. Iterate and hand off to developers

Include before/after screenshots of an early wireframe versus the final screen. Readers love seeing the evolution.

**Summary:** This post shows that Palxi tests ideas with users first, which saves time and produces better products.

## 3. How We Ship Safely: Feature Branching Explained

**Status:** Live at `/dineth/shipping-safely` (`app/dineth/shipping-safely/page.tsx`), published 28 September 2026. Opens with two verified Australian outages caused by updates (Optus, Nov 2023; CrowdStrike, Jul 2024), then uses a railway branch-line metaphor throughout (hero photo: Wolli junction, Sydney). Zero-downtime is explained as "one common way" (blue-green) rather than a claim about Palxi's exact setup. APRA CPS 230 was deliberately left for post 4 (compliance).

**Revised 1 October 2026 (diagrams and photo):** All five diagrams rebuilt as railway-style maps and scenes (shared kit in `_diagrams/rail.tsx`: `Track`, `Trail`, `Train`, `Station`).
- Feature branch: a track map. New work leaves the main line, is built and checked on its own track, and rejoins, while a customers' train keeps running on the main line.
- Design and code branches: two parallel lanes (ink for design, green for code), each with its own train, merging into one live product.
- Five checks: a change travels through five gates. A "Problem?" chip above each turns into a green "Caught" as the change passes.
- Gradual rollout: 100 people light up as the feature reaches 1, 10, half, then everyone; then a feature flag flips off and the lit people drain back.
- Two copies: one live scene with three phases (prepare, switch, safety net), with customers' traffic moving between copy A and copy B.

New shared animations in `globals.css`: `window` (visible only between two beats) and `dip` (steps aside between two beats). One photo added before the checks diagram: Lisamarie Babik, CC BY 2.0.

**Angle:** Explain, in non-technical terms, how Palxi releases new features without breaking payments or live services.

**What to cover:**

1. What a feature branch is, e.g. "a safe copy of the product where we build something new without touching what customers use today"
2. Design + code working in parallel: Figma branches mirroring Git branches
3. Review and testing: code reviews, QA, and staging environments
4. Gradual rollouts with feature flags, releasing to a small group first
5. Why this matters for fintech: stability, auditability, and zero-downtime updates

**Summary:** This is a great post for reassuring customers that new features never put their money or data at risk.

## 4. Compliance by Design: Building UX Around AML, SOC 2 & ISO 27001

**Status:** Live at `/dineth/compliance-by-design` (`app/dineth/compliance-by-design/page.tsx`), published 29 September 2026. Framed around tactile ground indicators (AS/NZS 1428.4; hero photo: Corinda station, Brisbane) as "compliance built in, not bolted on". Generalised per the no-examples rule: the Cruz/pub-owner KYC flow became a generic identity-check wireframe for "busy people running a business", and the NT camping/caravan-park systems became "services the whole community relies on, including NT Government systems". Wording decisions: Palxi designs "around the principles" of SOC 2 and ISO 27001 (no certification claim); Palxi's products "help businesses meet" AML rules (no claim about Palxi's own AUSTRAC status). APRA CPS 230 included as one line of industry context. No cross-links to the Ashinthya articles (by request). Note: AUSTRAC, OAIC-adjacent gov sites were unreachable during research, so AML dates are cited via MinterEllison and AUSTRAC's role via Wikipedia.

**Revised 1 October 2026 (diagrams and photo):** All five diagrams rebuilt in the new motion style.
- Identity check: a highlight reads down the screen with its note; then "Save and finish later" is tapped (a "Progress saved" toast) and "Talk to a person" is tapped (a helper appears).
- Keys and records: each team tries its doors and only its own opens; each success writes a line into a log that ends up "Sealed".
- One in five: two fields of 100 dots light up while the numbers count (21, then 52).
- Four principles (WCAG): each of P, O, U, R has a tiny live demo (text growing clear, a button growing big, jargon turning into plain words, a screen reader speaking a button).
- Safer and simpler: each old security habit gets a red "no" badge and an arrow to the current guidance.

One photo added after the principles diagram: a refreshable braille display (Eddau, CC0). Uses the existing shared kit; no new shared animations.

**Angle:** Compliance is usually seen as friction. Show how Palxi makes it smooth.

**What to cover:**

1. Simplifying AML/KYC flows in Cruz for busy pub owners
2. Designing for SOC 2 & ISO 27001 principles, such as access controls, audit trails, and data privacy
3. Accessibility for everyone: meeting WCAG standards, especially relevant for NT Government projects like camping and caravan park systems
4. Balancing security with speed, e.g. fewer steps without cutting corners

**Summary:** This post highlights Palxi's serious approach to security and regulation, a strong differentiator in Australian fintech.

## 5. One Design System, Many Products: How We Keep Palxi Consistent

**Status:** Live at `/dineth/one-design-system` (`app/dineth/one-design-system/page.tsx`), published 29 September 2026. Framed around Australian road signs (AS 1742; hero photo: camel, wombat and kangaroo warning signs on the Nullarbor) as a national "design system". harbr, Cruz and NT Government systems are named once in the intro only; diagrams use generic "booking / payments / community service" wireframes. Includes a short aside that this blog runs on its own small design system (true of the blog; no claim about Palxi's product system beyond the plan). No end-of-series links, by request. This completes the five-post plan.

**Angle:** Explain how a shared design system keeps harbr, Cruz, and government projects feeling like one reliable family.

**What to cover:**

1. What a design system is: reusable colours, buttons, typography, and components
2. Why consistency builds trust, since users learn once and feel at home everywhere
3. How it speeds up delivery, with faster prototyping and fewer bugs
4. Evolving the system based on user feedback

**Summary:** This post shows Palxi is organised, scalable, and detail-focused.
