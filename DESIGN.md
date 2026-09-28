---
name: Palxi Blog
description: Plain-English explanations of how Palxi designs and builds trustworthy fintech, for Australians 50+.
colors:
  harbour-green: "#00635f"
  harbour-green-deep: "#004b48"
  harbour-green-tint: "#dff4f2"
  still-water: "#f7fbfb"
  paper-white: "#ffffff"
  shallows: "#edf4f4"
  deep-ink: "#122026"
  body-ink: "#263338"
  slate-muted: "#4f5d63"
  hairline: "#1220261f"
  settled-green: "#22683b"
  settled-green-tint: "#e2f6e6"
  stop-red: "#a83630"
  stop-red-tint: "#ffebe8"
  wattle-amber: "#845922"
  wattle-amber-tint: "#fff2d6"
typography:
  display:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.5rem + 1.4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.5625rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.125rem + 0.25vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.65
  standfirst:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "clamp(64px, 8vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.harbour-green}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.harbour-green-deep}"
  button-secondary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
    height: "44px"
  plain-words-note:
    backgroundColor: "{colors.harbour-green-tint}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.md}"
    padding: "24px 28px"
  diagram-frame:
    backgroundColor: "{colors.shallows}"
    rounded: "{rounded.md}"
    padding: "clamp(16px, 3vw, 40px)"
  tag:
    backgroundColor: "{colors.harbour-green-tint}"
    textColor: "{colors.harbour-green-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Palxi Blog

## 1. Overview

**Creative North Star: "The Harbourmaster's Noticeboard"**

A harbourmaster's noticeboard is the most trusted piece of paper on the marina: plain, current, easy to read from a step back, and pinned up by someone who knows the water. Every page of the Palxi blog should feel like that. The reader is an Australian over 50, reading glasses on, deciding whether to trust a fintech company with their takings. The design earns that trust the way a good noticeboard does: large clear type, one idea at a time, a labelled drawing when words aren't enough, and nothing that flashes or hides.

The system is restrained by design. Still-water off-white pages carry deep-ink text; a single Harbour Green accent marks what you can press and what matters most. Colour is otherwise reserved for meaning inside diagrams: settled green for "done", stop red for "didn't happen", wattle amber for "check this". Depth comes from tonal layers (still water, paper white, shallows) and hairline rules, not from shadows. Motion exists to explain: a diagram draws itself in when scrolled into view, a coin travels along a payment path, then everything stops. Readers who ask for less motion get the finished diagram instantly.

This system rejects, by name, the four looks in PRODUCT.md: **crypto and trading apps** (dark neon dashboards, hype energy), **big-bank corporate** (navy-and-gold, handshake stock photos, legal-sounding copy), **startup SaaS templates** (gradient heroes, identical icon-card grids, buzzwords), and **government form sites** (dense, grey, bureaucratic, small text).

**Key Characteristics:**
- Senior-legible first: 19-20px body, 16px absolute minimum, ~70-character lines (44rem measure; `ch` is unreliable because Atkinson's zero is wide), 1.65 line-height.
- Two families with a job each: Literata (a book face made for long reading on screens) for headings, Atkinson Hyperlegible Next (designed by the Braille Institute for low-vision readers) for everything else.
- One accent, used sparingly; semantic colours live inside diagrams.
- Flat, tonal surfaces; hairline dividers; almost no shadow.
- Diagrams are the hero content. Photography is used once or twice per post, chosen for mood, always credited.
- Motion explains, then rests. Always replayable, always optional.

## 2. Colors

A calm, cool, low-chroma palette anchored on one deep sea-green, with three semantic spot colours for diagrams.

### Primary
- **Harbour Green** (#00635f): the only accent. Links, primary buttons, the active step in a diagram, the path money travels. Never a large background fill.
- **Harbour Green Deep** (#004b48): hover and pressed states for Harbour Green; text on Harbour Green Tint.
- **Harbour Green Tint** (#dff4f2): background of "In plain words" notes and tags. The only tinted panel colour for prose.

### Neutral
- **Still Water** (#f7fbfb): the page canvas. A true near-white with a hint of the harbour hue, not cream.
- **Paper White** (#ffffff): raised surfaces: example phone screens inside diagrams, receipts, the secondary button.
- **Shallows** (#edf4f4): diagram frames and sunken panels.
- **Deep Ink** (#122026): headings and the strongest text (15.9:1 on Still Water).
- **Body Ink** (#263338): paragraph text (12.5:1 on Still Water).
- **Slate Muted** (#4f5d63): captions, bylines, credits (6.5:1 on Still Water). Nothing lighter is ever used for text.
- **Hairline** (#1220261f): 1px dividers and frame outlines.

### Tertiary (semantic, diagrams and example screens only)
- **Settled Green** (#22683b) on **Settled Green Tint** (#e2f6e6): success, "money arrived", "done".
- **Stop Red** (#a83630) on **Stop Red Tint** (#ffebe8): failure, "nothing happened". Always paired with an icon and words, never colour alone.
- **Wattle Amber** (#845922) on **Wattle Amber Tint** (#fff2d6): caution, "check this before you continue".

### Named Rules
**The One Harbour Rule.** Harbour Green covers no more than 10% of any screen. If you can see two green blocks at once, one of them is wrong.

**The Meaning-Only Rule.** Red, green and amber appear only when they mean something (success, failure, caution), and always alongside a word and an icon. Decoration never borrows a semantic colour.

**The Still Water Rule.** Page backgrounds stay near-white and cool. Cream, sand, beige and parchment are prohibited; so is dark mode for this audience.

## 3. Typography

**Display Font:** Literata (with Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, sans-serif)

**Character:** Literata is a sturdy, warm book serif with optical sizing, built for long reading on screens; it gives headings the steadiness of a printed notice. Atkinson Hyperlegible Next has deliberately distinct letterforms (no confusing I/l/1 or 0/O) and carries all running text, labels and diagram annotations, so a reader in reading glasses never has to guess a character.

### Hierarchy
- **Display** (600, clamp(2.5rem → 4rem), 1.08): post titles only. `text-wrap: balance`.
- **Headline** (600, clamp(1.875rem → 2.5rem), 1.15): section headings inside a post (h2).
- **Title** (600, 1.5625rem / 25px, 1.25): sub-sections (h3), listing entry titles.
- **Standfirst** (400, clamp(1.3125rem → 1.5rem), 1.5): the one-paragraph summary under a post title.
- **Body** (400, clamp(1.1875rem → 1.25rem), 1.65): all prose. Max width 44rem (about 70 characters). `text-wrap: pretty`.
- **Label** (600, 1rem / 16px, 0.01em): buttons, bylines, captions, diagram annotations, tags. Sentence case.

### Named Rules
**The Sixteen Floor Rule.** No text on any page is smaller than 16px. Not captions, not credits, not diagram labels, not legal lines. If it doesn't fit at 16px, the layout changes, not the type.

**The No-Costume Rule.** No monospace, no all-caps paragraphs, no tiny tracked eyebrows above every section. One topic tag per post header is the only kicker in the system.

## 4. Elevation

Flat by default. Depth comes from three tonal layers (Still Water canvas, Shallows frames, Paper White raised surfaces) separated by 1px hairlines. The only shadow in the system belongs to example screens inside diagrams, so they read as a physical phone or receipt sitting on the frame.

### Shadow Vocabulary
- **Resting device** (`box-shadow: 0 1px 2px rgba(18,32,38,0.06), 0 4px 8px rgba(18,32,38,0.06)`): example phone screens and receipts inside a diagram frame. Never combined with a border.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A border or a shadow, never both. If a card looks like it's floating, the shadow is too big.

## 5. Components

### Buttons
Quiet and certain: rectangular with gently rounded corners, big enough to hit first time.
- **Shape:** gently curved corners (6px).
- **Primary:** Harbour Green fill, Paper White label, 48px tall, 12px × 22px padding.
- **Secondary:** Paper White fill, Deep Ink label, 1px Hairline border, 44px tall. Used for "Replay animation" under diagrams.
- **Hover / Focus:** colour shifts to Harbour Green Deep over 200ms (ease-out-quart); pressed state scales to 0.98. Focus ring: 3px Harbour Green outline, 3px offset, on every interactive element.

### Tags
- **Style:** Harbour Green Tint background, Harbour Green Deep text, label type (16px), full pill, 4px × 12px padding. One per post header, naming the topic ("Design & trust").

### Diagram Frame (signature component)
The heart of every post. A Shallows panel (10px radius, no border, no shadow) holding an inline SVG diagram, followed by a caption in Slate Muted and a secondary "Replay" button.
- **Drawing style:** 2px Deep Ink strokes, rounded caps and joins; example screens drawn as Paper White devices with the Resting device shadow; Harbour Green marks the path or the active step; semantic colours only for outcomes.
- **Labels:** Atkinson Hyperlegible Next, 16px minimum at the rendered size, Body Ink. Every coloured element also has a text label.
- **Motion:** when scrolled into view, strokes draw in and steps appear in sequence (400-700ms each, ease-out-expo), a moving marker travels along payment paths, then everything rests. Content is fully visible without JavaScript; motion only enhances. With `prefers-reduced-motion: reduce`, the finished diagram shows immediately and the Replay button is hidden.

### "In plain words" Note
- **Style:** Harbour Green Tint panel, 10px radius, 24px × 28px padding, no side stripe. Starts with a bold label ("In plain words") and defines one term in one or two sentences.

### Figures and Photography
- **Corner Style:** 10px radius on photographs.
- **Caption:** Label type in Slate Muted beneath; credit line with author, source and licence linked (e.g. "Photo: happinesswithin, CC BY 3.0, via Wikimedia Commons").
- **Treatment:** natural colour, no filters, no overlays. One decisive photo per section at most.

### Navigation
- **Style:** a simple, non-sticky header row: "Palxi" wordmark (Literata 600) left, "Blog" link right, 16px+ label type, 44px targets. A hairline beneath. Back links ("All posts") at the top of every post.

### Post List
- **Style:** a single column of entries separated by hairlines, not a card grid. Each entry: topic tag, Title-size heading, one-sentence summary in Body, and a byline row (date, reading time) in Slate Muted. The whole entry is one link target.

## 6. Do's and Don'ts

### Do:
- **Do** set body copy at 19-20px on Still Water (#f7fbfb) in Body Ink (#263338), max 44rem wide (about 70 characters), line-height 1.65.
- **Do** give every technical idea a labelled diagram inside a Diagram Frame, with a caption that explains it in one sentence.
- **Do** define jargon in an "In plain words" note the first time it appears.
- **Do** use Australian English and real Australian context (PayTo, Confirmation of Payee, Scamwatch, AUD amounts).
- **Do** credit every open-licence photo with author, source and licence, linked.
- **Do** make every animation replayable, and show the finished diagram instantly under `prefers-reduced-motion`.
- **Do** keep tap targets at least 44 × 44px with a visible 3px Harbour Green focus ring.

### Don't:
- **Don't** look like **crypto and trading apps**: no dark neon dashboards, no charts for decoration, no hype energy.
- **Don't** look like **big-bank corporate**: no navy-and-gold, no stock photos of handshakes, no legal-sounding copy.
- **Don't** look like **startup SaaS templates**: no gradient heroes, no identical icon-card grids, no "seamless", "elevate", "next-gen" or "game-changer".
- **Don't** look like **government form sites**: no dense grey walls of small text.
- **Don't** set any text below 16px, or use any text colour lighter than Slate Muted (#4f5d63).
- **Don't** use cream, sand or beige backgrounds, gradient text, glassmorphism, or dark mode.
- **Don't** put a coloured `border-left` stripe on notes or callouts; use the full tinted panel.
- **Don't** pair a border with a soft wide shadow on the same element, or round cards beyond 16px.
- **Don't** use red, green or amber without a matching word and icon.
- **Don't** auto-play looping animation. Motion plays once when seen, then rests.
- **Don't** invent statistics or product claims. Cite a real source or leave it out.
