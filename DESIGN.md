---
name: Palxi Blog
description: The Palxi website's look, applied to plain-English blog posts for Australian readers aged 50 and over.
colors:
  magenta: "#b8339b"
  magenta-deep: "#8f2678"
  magenta-tint: "#fbeff8"
  magenta-soft: "#c65baf"
  near-black: "#0a0a0a"
  ink: "#222124"
  body-ink: "#3b3a3e"
  slate: "#686868"
  paper: "#ffffff"
  band-grey: "#f6f6f6"
  hairline: "#e8e8e8"
  field-edge: "#767676"
  settled-green: "#22683b"
  settled-green-tint: "#e2f6e6"
  stop-red: "#a83630"
  stop-red-tint: "#ffebe8"
  wattle-amber: "#845922"
  wattle-amber-tint: "#fff2d6"
  logo-purple: "#9861a5"
  logo-rose: "#c56d93"
  logo-teal: "#47a7b5"
  logo-lime: "#a9c31a"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.5rem + 1.4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5625rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  standfirst:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.125rem + 0.25vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.005em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "28px"
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
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.magenta-deep}"
  button-dark:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
    height: "48px"
  tag:
    backgroundColor: "{colors.magenta-tint}"
    textColor: "{colors.magenta-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 14px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.lg}"
    padding: "28px"
  band-section:
    backgroundColor: "{colors.band-grey}"
    textColor: "{colors.ink}"
    padding: "{spacing.section} 0"
  plain-words-note:
    backgroundColor: "{colors.band-grey}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.lg}"
    padding: "24px 28px"
  diagram-frame:
    backgroundColor: "{colors.band-grey}"
    rounded: "{rounded.lg}"
    padding: "clamp(16px, 3vw, 40px)"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "52px"
---

# Design System: Palxi Blog

## 1. Overview

**Creative North Star: "The Briefing Room"**

The Palxi website feels like a senior colleague briefing you in a quiet room. The website opens with a near-black hero over a dusk photograph of the Sydney Harbour Bridge, then settles into white and pale grey with headings in confident ink and a single magenta pill telling you where to go next. Nothing shouts. The blog keeps that room but leaves the dark hero at the door: every blog page stays light, white and pale grey, with the same one magenta signal, the same pill buttons and generous spacing, now carrying plain-English explanations for readers who are 50 or older and not technical.

The system is restrained and committed at once. Neutrals (white, `#f6f6f6` bands, ink) carry about 90% of any screen. Magenta (`#b8339b`) is the only accent and appears on buttons, links, the active step of a diagram and the odd tag. Near-black appears only on the black "Get in touch" pill and primary text on dark buttons; the blog has no dark hero and no dark bands. Depth comes from tonal bands and hairlines, not shadows.

The website sets its small text at around 14px. The blog does not. Readers here are unhurried, wearing reading glasses and cautious about money, so the blog keeps the website's identity (palette, typeface, pill buttons, radii, section rhythm) and raises the reading sizes: body about 19 to 20px, nothing below 16px, magenta never lighter than `#b8339b` on white.

This system rejects, by name, the looks in PRODUCT.md: **crypto and trading apps** (neon dashboards, hype), **big-bank corporate** (navy-and-gold, handshake stock photos, legal-sounding copy), **startup SaaS templates** (gradient heroes, identical icon-card grids, buzzwords) and **government form sites** (dense, grey, small text).

**Key Characteristics:**
- Light only: white pages with `#f6f6f6` bands. No dark hero, no dark bands, no dark mode.
- One accent, magenta, used on no more than about 10% of a screen.
- Inter throughout, in medium to semibold weights for headings with tight tracking, regular for reading.
- Pill buttons, 20px cards, 8px fields. Nothing fully square.
- Hairline rules and tonal bands instead of shadows.
- Motion explains and then rests. It plays once, can be replayed, and is off under reduced motion.
- Readable first: 16px floor, about 70 characters per line, 1.65 line height.

## 2. Colors

A near-neutral palette with one confident magenta signal, and three meaning-only colours reserved for diagrams.

### Primary
- **Palxi Magenta** (`#b8339b`): the only accent. Primary buttons, links, the active step or path in a diagram, small tags. Measured at 5.3:1 against white, so it passes AA as text and as a button fill. Never lighter on white.
- **Magenta Deep** (`#8f2678`): hover and pressed state for Palxi Magenta, and tag text on Magenta Tint. Derived from the website's magenta; about 7.7:1 on white.
- **Magenta Tint** (`#fbeff8`): the soft fill behind tags and the highlight behind a link on hover. Derived.
- **Magenta Soft** (`#c65baf`): the round arrow chip inside a primary pill (white arrow on a lighter magenta disc). Decorative only. Never used for text on white (about 3.8:1, below the 4.5:1 text minimum).

### Neutral
- **Near Black** (`#0a0a0a`): the black "Get in touch" pill and other dark buttons. Never a section or page background in the blog.
- **Ink** (`#222124`): headings and the strongest text on light surfaces (about 16:1 on white).
- **Body Ink** (`#3b3a3e`): paragraph text in posts. The website sets body copy in `#686868`; the blog darkens it for long reading (about 11:1).
- **Slate** (`#686868`): captions, bylines, credits, secondary text (5.6:1 on white). Nothing lighter is ever used for text.
- **Paper White** (`#ffffff`): the page, cards, wireframe screens.
- **Band Grey** (`#f6f6f6`): alternate page bands, the diagram frame, notes, the footer.
- **Hairline** (`#e8e8e8`): 1px rules between list rows, under the header, around cards.
- **Field Edge** (`#767676`): borders of form fields and checkboxes (4.5:1). The website's field border (`#dcdcdc`) is too faint to meet the 3:1 boundary rule, so the blog darkens it.

### Tertiary (meaning only, diagrams and wireframes)
- **Settled Green** (`#22683b`) on **Settled Green Tint** (`#e2f6e6`): success, "done", "money arrived".
- **Stop Red** (`#a83630`) on **Stop Red Tint** (`#ffebe8`): failure, "nothing happened". Always paired with an icon and words.
- **Wattle Amber** (`#845922`) on **Wattle Amber Tint** (`#fff2d6`): caution, "check this".

### Logo only
- **Logo Purple** (`#9861a5`), **Logo Rose** (`#c56d93`), **Logo Teal** (`#47a7b5`), **Logo Lime** (`#a9c31a`): the four colours of the Palxi wordmark. They appear only inside the logo artwork. Teal and Lime fail text contrast and are never used for text or UI.

### Named Rules
**The One Signal Rule.** Magenta covers no more than about 10% of any screen. If two magenta blocks compete for the eye, one of them is wrong.

**The Meaning-Only Rule.** Red, green and amber appear only when they mean something, and always with a word and an icon. Magenta is never used to mean success or failure.

**The Light Page Rule.** Blog pages are light from top to bottom. Near Black is for button fills only: never a hero, a band, a card or a page theme, even though the website uses a dark hero.

## 3. Typography

**Display Font:** Inter (with system-ui, sans-serif)
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** One grotesque family does everything, the way the website does. Headings are medium to semibold with tight negative tracking, which gives them the plain, confident look of the site's hero. Body is regular at generous size and line height. If the font build includes Inter's disambiguation set (`font-feature-settings: "ss02"`), turn it on for body text, so a capital I, a lowercase l and the digit 1 are never confused.

### Hierarchy
- **Display** (600, clamp(2.5rem to 4rem), 1.08, -0.03em): post titles and page heroes only. `text-wrap: balance`.
- **Headline** (600, clamp(1.875rem to 2.5rem), 1.15, -0.025em): section headings (h2).
- **Title** (600, 1.5625rem / 25px, 1.25): sub-sections (h3), card and list-entry titles.
- **Standfirst** (400, clamp(1.3125rem to 1.5rem), 1.5): the one-paragraph summary under a post title, in Slate or Body Ink.
- **Body** (400, clamp(1.1875rem to 1.25rem), 1.65): all prose. Maximum width 44rem (about 70 characters). `text-wrap: pretty`.
- **Label** (600, 1rem, 0.005em): buttons, bylines, captions, diagram annotations, tags. Sentence case.

### Named Rules
**The Sixteen Floor Rule.** No text on any page is smaller than 16px. Not captions, credits, diagram labels or legal lines. The website's 14px labels become 16px here. If it does not fit at 16px, the layout changes, not the type.

**The Sentence Case Rule.** Headings, buttons, navigation and labels are all in sentence case. There are no all-caps kickers above sections and no tracked small-caps scaffolding. One topic tag per post header is the only kicker.

**The Plain Underline Rule.** Links inside prose are Palxi Magenta and always underlined. Colour alone never marks a link.

## 4. Elevation

Flat by default. Depth comes from tonal bands (white and `#f6f6f6`) and 1px hairlines, exactly as on the website's contact page, where cards are white with a barely visible border on a pale grey band. Cards lift only on hover, and only slightly.

### Shadow Vocabulary
- **Resting device** (`box-shadow: 0 1px 2px rgba(10,10,10,0.06), 0 4px 8px rgba(10,10,10,0.06)`): wireframe phone screens and receipts inside a diagram frame, so they read as physical objects. Never combined with a border.
- **Card hover** (`box-shadow: 0 6px 20px rgba(10,10,10,0.08)`): a card or list entry that is a link, on hover or focus only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A border or a shadow, never both. If a card looks like it is floating, the shadow is too big.

## 5. Components

### Buttons
Pills, with a soft round arrow chip on the primary.
- **Shape:** full pill (9999px). Minimum height 52px for the main call to action, 48px elsewhere. Never below a 44px tap target.
- **Primary:** Palxi Magenta fill, white label (Label type), with a round arrow chip (Magenta Soft disc, white arrow) at the right end, as in the website's "Email us" and "Send enquiry". Padding 8px 8px 8px 26px so the chip sits inside the curve.
- **Dark:** Near Black fill, white label, 48px tall. The header "Get in touch" button and any button on a light surface that must not compete with a magenta one.
- **Secondary:** white fill, ink label, 1px Hairline border, 48px tall. "Play again" under diagrams, "Back to all posts".
- **Hover / Focus:** fill shifts to Magenta Deep over 150ms ease-out. Pressed scales to 0.98. Focus ring: 3px Palxi Magenta outline with a 3px offset, on every interactive element, never hidden under a sticky header.

### Tags
- **Style:** Magenta Tint fill, Magenta Deep text, Label type (16px), full pill, 4px by 14px padding. One per post header, naming the topic. A white pill with a Hairline border is used for lists of tools or topics, like the website's "What we build with" chips.

### Cards / Containers
- **Corner Style:** 20px (website contact cards), 28px for the large form-style panel. Never above 28px.
- **Background:** Paper White on Band Grey, or Band Grey on White.
- **Border:** 1px Hairline. No shadow at rest.
- **Internal Padding:** 28px, more on large panels. Cards are not nested inside cards.

### List Rows
The website's signature layout for services and capabilities: a full-width row between 1px Hairline rules with a small index at the left, a large Title-size heading, a short Body description in Slate on the right and a small arrow at the far end. Use it in place of a grid of identical cards.

### Section Bands
Alternating full-width bands: White and Band Grey. Vertical rhythm is `clamp(64px, 8vw, 112px)` between bands. A band's heading is large and left-aligned with the intro text in a second column on wide screens.

### Stat Row
Three columns separated by a 1px ink rule on top of each. A big number in Ink (Headline size or larger), a Label-size description in Slate beneath. Figures appear whole, never counting up.

### Inputs / Fields
- **Style:** white fill, 1px Field Edge border, 8px radius, 52px tall, label always visible above in Label type with a magenta required asterisk. Placeholder in Slate (never lighter).
- **Focus:** 3px Palxi Magenta ring. **Error:** border Stop Red, icon plus plain-language message below. Never colour alone.
- Radio buttons and checkboxes use Field Edge outlines and a Palxi Magenta selected state.

### Navigation
- **Style:** a simple, non-sticky row: Palxi wordmark left, three links centred (Label type, Ink, sentence case), a Near Black "Get in touch" pill right, and a 1px Hairline beneath. Back links ("All posts") sit at the top of every post.
- **Footer:** Band Grey background, wordmark and one-line description left, link columns right (Navigation, Industries, Contact), social icons, a Hairline, then copyright and underlined Privacy Policy and Terms of Service links. Link text is Slate or darker.

### Diagram Frame (signature component for the blog)
A Band Grey panel (20px radius, no border, no shadow) holding the diagram, then a caption in Slate and a secondary "Play again" button.
- **Drawing style:** 2px Ink strokes with rounded caps and joins. Wireframe screens are Paper White devices with the Resting device shadow and grey placeholder bars. Palxi Magenta marks the active step, the path a payment or request travels, and the moving marker. Settled Green, Stop Red and Wattle Amber appear only for outcomes, with words and icons.
- **Motion:** plays once when scrolled into view (400 to 700ms per step, ease-out), then rests. Everything is visible without JavaScript. Under `prefers-reduced-motion: reduce` the finished diagram shows instantly.

### "In plain words" Note
Band Grey panel, 20px radius, 24px by 28px padding, no side stripe. A bold Label heading in Palxi Magenta ("In plain words"), then one or two sentences defining a single term in Body Ink.

### Figures and Photography
- **Corners:** 20px radius on photographs.
- **Caption:** Label type in Slate beneath, with a credit line (author, source and licence, linked).
- **Treatment:** natural colour. The opening photograph of a post sits beside the title on the white page, with no overlay. One decisive photo per section at most.

## 6. Do's and Don'ts

### Do:
- **Do** use Palxi Magenta (`#b8339b`) as the single accent, and keep it to about 10% of any screen.
- **Do** set body copy at 19 to 20px in Body Ink (`#3b3a3e`) on white, maximum 44rem wide, line height 1.65.
- **Do** make every button a pill, at least 44px tall, with a visible 3px magenta focus ring.
- **Do** alternate White and Band Grey bands, and use hairline-separated list rows instead of grids of identical cards.
- **Do** give every technical idea a labelled diagram inside a Diagram Frame, and define unavoidable jargon in an "In plain words" note.
- **Do** use Australian English and real Australian context, and credit every open-licence photo with author, source and licence, linked.
- **Do** make every animation replayable, and show the finished diagram instantly under reduced motion.

### Don't:
- **Don't** put a dark hero, a near-black band or any dark section on a blog page, even though the website has one.
- **Don't** look like **crypto and trading apps**: no neon dashboards, no charts for decoration, no hype energy.
- **Don't** look like **big-bank corporate**: no navy-and-gold, no stock photos of handshakes, no legal-sounding copy.
- **Don't** look like **startup SaaS templates**: no gradient heroes, no identical icon-card grids, no "seamless", "elevate", "next-gen" or "game-changer".
- **Don't** look like **government form sites**: no dense grey walls of small text.
- **Don't** set any text below 16px, or in any grey lighter than Slate (`#686868`). The website's 14px labels and lighter greys do not carry over.
- **Don't** use light magenta (`#c65baf`) for text on white. It fails contrast.
- **Don't** use the logo colours (purple, rose, teal, lime) anywhere except the wordmark.
- **Don't** put a coloured `border-left` stripe on notes or callouts. Use the full tinted panel.
- **Don't** pair a border with a soft wide shadow on the same element, or round cards beyond 28px.
- **Don't** use red, green or amber without a matching word and icon, and never use magenta to signal success or failure.
- **Don't** use gradient text, glassmorphism, tiny all-caps eyebrows above every section, or numbered section scaffolding.
- **Don't** auto-play looping animation or count numbers up. Motion plays once when seen, then rests.
- **Don't** invent statistics or product claims. Cite a real source or leave it out.
- **Don't** put product branding, business names, amounts, card digits or reference numbers into diagrams. Wireframes use grey placeholder bars, and posts stay company-wide.
