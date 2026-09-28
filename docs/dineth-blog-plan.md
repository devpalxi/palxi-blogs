# Dineth Blog Plan

Editorial plan for Palxi blog posts. Each entry lists the angle, what to cover, and the takeaway summary.

## 1. Designing for Trust: How We Approach UI/UX in Fintech

**Status:** Live at `/dineth/designing-for-trust` (`app/dineth/designing-for-trust/page.tsx`), published 28 September 2026. Uses the template for later posts: header with hero photo, prose sections, `Diagram` frames, "In plain words" notes, takeaways, sources.

**Angle:** Money products need to feel safe as well as work correctly. This post explains how design decisions build user confidence.

**What to cover:**

1. Clarity over cleverness: plain language, no hidden fees, clear confirmation screens
2. Designing payment flows in harbour: making card (Stripe) and A2A (Zepto) payments feel simple
3. Error states that reassure, e.g. "Your payment hasn't gone through, and no money has left your account"
4. Visual trust signals such as consistent branding, security cues, and transaction receipts

**Summary:** This post positions Palxi as a company that treats user trust as a design requirement.

## 2. From Sketch to Clickable Prototype: Our Prototyping Workflow

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

**Angle:** Explain, in non-technical terms, how Palxi releases new features without breaking payments or live services.

**What to cover:**

1. What a feature branch is, e.g. "a safe copy of the product where we build something new without touching what customers use today"
2. Design + code working in parallel: Figma branches mirroring Git branches
3. Review and testing: code reviews, QA, and staging environments
4. Gradual rollouts with feature flags, releasing to a small group first
5. Why this matters for fintech: stability, auditability, and zero-downtime updates

**Summary:** This is a great post for reassuring customers that new features never put their money or data at risk.

## 4. Compliance by Design: Building UX Around AML, SOC 2 & ISO 27001

**Angle:** Compliance is usually seen as friction. Show how Palxi makes it smooth.

**What to cover:**

1. Simplifying AML/KYC flows in Cruz for busy pub owners
2. Designing for SOC 2 & ISO 27001 principles, such as access controls, audit trails, and data privacy
3. Accessibility for everyone: meeting WCAG standards, especially relevant for NT Government projects like camping and caravan park systems
4. Balancing security with speed, e.g. fewer steps without cutting corners

**Summary:** This post highlights Palxi's serious approach to security and regulation, a strong differentiator in Australian fintech.

## 5. One Design System, Many Products: How We Keep Palxi Consistent

**Angle:** Explain how a shared design system keeps harbr, Cruz, and government projects feeling like one reliable family.

**What to cover:**

1. What a design system is: reusable colours, buttons, typography, and components
2. Why consistency builds trust, since users learn once and feel at home everywhere
3. How it speeds up delivery, with faster prototyping and fewer bugs
4. Evolving the system based on user feedback

**Summary:** This post shows Palxi is organised, scalable, and detail-focused.
