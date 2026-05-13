---
name: Solution Track Consulting
description: Senior-level Cisco UC and infrastructure consulting for Enterprise IT teams.
colors:
  mission-blue: "#273C77"
  mission-blue-lifted: "#4163B1"
  signal-orange: "#EF6B51"
  link-deep: "#0C5394"
  surface-white: "#FFFFFF"
  surface-muted: "#F4F4F4"
  border-subtle: "#D0D5DD"
  text-body: "#33475B"
  text-dark: "#000000"
typography:
  display:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sharp: "3px"
  sm: "4px"
  md: "8px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "60px"
  2xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.mission-blue}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.sharp}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.mission-blue-lifted}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.sharp}"
    padding: "12px 24px"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.mission-blue}"
    rounded: "{rounded.sharp}"
    padding: "12px 24px"
  input-default:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  input-focus:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# Design System: Solution Track Consulting

## 1. Overview

**Creative North Star: "The Engineering Brief"**

This is a consultant's deliverable, not a marketing artifact. Every page is structured like a well-prepared technical brief: a clear statement of the problem, the relevant credentials, the specific services, and a direct path to action. Nothing is decorative. Nothing restates what a heading already said. The aesthetic reflects the methodology.

IBM Plex Sans carries the structural authority -- a humanist, monospaced-origin sans that signals precision without coldness. Inter handles body prose, readable across long paragraphs. Together they form a working pair: headings that belong in a spec document, body text that reads like a well-written memo.

Color strategy is Restrained: Mission Blue (`#273C77`) dominates interactive and structural elements; Signal Orange (`#EF6B51`) appears sparingly for urgency or error states; white-to-muted-gray surface contrast provides the only atmospheric shift. No gradients. No hero photography. No illustrative decoration. The credibility lives in the words and their arrangement.

**Key Characteristics:**
- Flat surfaces with tonal depth from white/muted contrast only
- Very shallow border radius: buttons at 3px, inputs at 4px, cards at 8px
- 3D perspective page transitions on desktop (rotateX + blur + scale); simplified to opacity/translateY on mobile
- Scroll-triggered fade-up entrance via AOS (650ms, 80px offset)
- WCAG 2.1 AA contrast throughout
- Zero box shadows; zero gradient fills; zero glassmorphism

## 2. Colors: The Mission Palette

A two-tone palette with one tactical accent. Breadth comes from tonal surface layering, not multiple hues.

### Primary
- **Mission Blue** (`#273C77`): The structural brand color. Used on all primary buttons, navigation links, section headings, focus borders, and any interactive CTA. Never diluted to low opacity for decorative effect, never used as a large-area background.
- **Mission Blue Lifted** (`#4163B1`): The hover register of Mission Blue. Appears only on interactive state changes. Never used as a base fill.

### Secondary
- **Signal Orange** (`#EF6B51`): The single tactical accent. Used for form validation borders, error states, and on rare occasions where a CTA needs contrast against a navy context. Appears on less than 10% of any screen.

### Neutral
- **Surface White** (`#FFFFFF`): Default page and header background.
- **Surface Muted** (`#F4F4F4`): Sidebar boxes, inset content areas, secondary backgrounds. Intentionally neutral, no brand tint.
- **Border Subtle** (`#D0D5DD`): Form input strokes, horizontal rules. Light enough to recede at rest.
- **Text Body** (`#33475B`): Primary body text. AA contrast on white; warm enough to avoid harsh black.
- **Text Dark** (`#000000`): High-contrast headings and maximum-emphasis text.
- **Link Deep** (`#0C5394`): Inline text links. Distinct from Mission Blue to signal navigability without competing with CTAs.

### Named Rules
**The Mission Blue Ceiling Rule.** Mission Blue is structural, not atmospheric. It belongs on interactive elements and headings. It is never used as a full-page background, a gradient start, or a decorative fill. The moment it becomes scenery, it loses authority.

**The One Orange Rule.** Signal Orange is a tactical alert, not a brand color. It never appears in the header, navigation, or as a background fill. Its rarity is what makes it land.

## 3. Typography

**Display Font:** IBM Plex Sans (sans-serif fallback)
**Body Font:** Inter (sans-serif fallback)

**Character:** IBM Plex Sans was designed for technical documentation -- it carries the precision of a monospaced face without the letterspace overhead. Inter's humanist warmth handles body paragraphs. The pair reads as: someone who knows exactly what they're talking about and has written it down clearly.

### Hierarchy
- **Display** (700, clamp(2rem, 5vw, 3.5rem), line-height 1.1, tracking -0.01em): Hero h1 headlines only. Tight leading reinforces authority. Example: "High-Stakes Communication & Infrastructure Engineering."
- **Headline** (700, 2rem, line-height 1.2): H1 page titles and major section openers. IBM Plex Sans.
- **Title** (600, 1.25rem, line-height 1.3): H2 section headings. IBM Plex Sans. "Strategic Audits", "Partner Capacity".
- **Body** (400, 1rem, line-height 1.7): All paragraph text. Inter. Hard limit of 65-75ch per line; lines wider than this are an error, not a preference.
- **Label** (700, 0.875rem, line-height 1.4, tracking 0.01em): Form labels, button text, footer fine print. IBM Plex Sans. Never uppercase.

### Named Rules
**The No-Decoration Rule.** No underlines on navigation links at rest. No italics for emphasis in body copy. Emphasis is weight-only (bold) or hierarchy (heading level). Decoration signals decoration; weight signals importance.

## 4. Elevation

This system is flat by default. No drop shadows exist anywhere in the base design. Depth is created entirely through tonal layering: white surfaces sit above muted-gray surfaces; the header uses `border-bottom: 1px solid rgba(0,0,0,0.08)` -- a line, not a shadow -- to separate itself from the page.

The only elevation-adjacent effects are the page transition animations: a 3D perspective transform (rotateX, scale, blur) on exit and entry. This is motion, not shadow: depth expressed in time rather than in pixels.

**The Flat-And-Earned Rule.** If you are reaching for `box-shadow`, stop. Use a background tint instead. If a surface needs to feel elevated, give it a `border` or a tonal `background-color`, not a halo. Shadows are not part of this visual vocabulary.

## 5. Components

### Buttons
Firm corners, flat fill. Clicks like a switch. No gradients, no transforms on hover, no icon decoration by default.

- **Shape:** Almost square corners (3px radius). Intentionally precise.
- **Primary:** Mission Blue (`#273C77`) background, white text, 12px/24px padding, IBM Plex Sans 700 at 0.875rem.
- **Hover / Focus:** Background shifts to Mission Blue Lifted (`#4163B1`). No transform. No shadow. Focus ring visible for WCAG AA keyboard navigation.
- **Outlined:** Transparent background, 1px Mission Blue border, Mission Blue text. Used for secondary actions only.
- **Arrow variant:** Inline text link with `→` suffix, no box, no border. Used for navigational links within content ("View All Services →").

### Cards / Containers
- **Corner Style:** Gently squared (8px radius). Warmer than buttons; still precise.
- **Background:** Surface Muted (`#F4F4F4`). White surfaces sit outside; muted surfaces group and inset.
- **Shadow Strategy:** None. Tonal background is the sole depth signal.
- **Border:** None by default.
- **Internal Padding:** 25px all sides.

### Inputs / Fields
- **Style:** 1px solid Border Subtle (`#D0D5DD`) stroke, white background, 4px radius, 12px/14px padding. Inherits body font (Inter, 1rem).
- **Focus:** Border shifts to Mission Blue (`#273C77`); no outline, no glow. The border change is the entire signal.
- **Error:** Signal Orange (`#EF6B51`) border.
- **Textarea:** Resizable vertically only; 130px minimum height.

### Navigation
- **Style:** White background, IBM Plex Sans 600, Mission Blue (`#273C77`) link color, no background fill on links at rest.
- **Desktop:** Logo left, nav links right, horizontal flex layout, 1100px max-width container, 14px padding between links.
- **Mobile:** Logo centered top, links stacked below in a full-width column, centered text.
- **Active/Hover:** No underline at rest. A subtle Mission Blue Lifted shift is acceptable on hover.

### Page Transitions (Signature Component)
The most distinctive motion pattern in the system. Navigating between pages triggers a choreographed 3D perspective sequence:

- **Exit (Fall Out):** 450ms, cubic-bezier(0.55, 0, 1, 0.45). Body rotates down on its bottom edge (rotateX -18deg), scales to 0.92, blurs to 10px, fades out. Origin: center bottom.
- **Entry (Rise In):** 600ms, cubic-bezier(0.22, 1, 0.36, 1). Body rises from below (translateY 110px, rotateX 12deg, scale 0.95, blur 6px) to resting state. Origin: center top.
- **Mobile:** Simplified to opacity + translateY only (50px). No 3D transform, no blur.
- **Accessibility:** Both animations are suppressed entirely under `prefers-reduced-motion: reduce`.

## 6. Do's and Don'ts

### Do:
- **Do** use Mission Blue (`#273C77`) on all primary buttons, navigation links, and section headings.
- **Do** keep body text at Inter 1rem / 1.7 line-height, hard-capped at 65-75ch per line.
- **Do** use IBM Plex Sans 700 for display, headline, title, label, and button text.
- **Do** use Surface Muted (`#F4F4F4`) rather than shadows to create inset or grouped content areas.
- **Do** shift input borders to Mission Blue on focus and Signal Orange on error.
- **Do** use AOS fade-up (650ms, 80px offset, `once: true`) for scroll-triggered content entrance.
- **Do** suppress all animations -- page transitions and AOS -- under `prefers-reduced-motion: reduce`.
- **Do** name services like forensic disciplines: "E911 Strategic Integrity Audit", not "E911 Services".
- **Do** write body copy in Inter; reserve IBM Plex Sans for structural/heading roles.

### Don't:
- **Don't** use generic IT vendor aesthetics: no stock photos of server rooms, no full-bleed blue gradient heroes, no buzzword feature grids with stock photography. This is the primary anti-reference.
- **Don't** use SaaS startup patterns: no pastel gradients, no identical rounded card grids (icon + heading + body, repeated), no social proof banner templates ("Trusted by 10,000+ teams"), no hero metric displays.
- **Don't** use Big-4 consulting firm formality: no dense article-index layouts, no impersonal institutional language, no design that signals firm size over individual expertise.
- **Don't** make the site feel like a freelancer portfolio: casual personal-site warmth is the wrong register for enterprise procurement conversations.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on any card, callout, or list item.
- **Don't** use gradient text (`background-clip: text` + gradient). Emphasis uses weight or heading level, never color effects.
- **Don't** add `box-shadow` to any surface. Use a tonal background instead.
- **Don't** use Signal Orange (`#EF6B51`) in the header, navigation, or as a background fill on non-error surfaces.
- **Don't** use cards as the default layout container. If content doesn't need grouping, don't group it.
- **Don't** write vague copy ("Innovative solutions for complex challenges"). Every claim must be specific and testable. If it could describe any IT firm, cut it.
