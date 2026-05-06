# Design System Document

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Supportive Architect."** It translates the commercial reliability of Shopify’s ecosystem into a high-end, editorial experience. Unlike generic e-commerce templates, this system prioritizes clarity through a **compact spacing**, intentional asymmetry, and a sophisticated layering of tonal surfaces.

The goal is to provide a "low-risk" psychological environment for the user. We achieve this not by adding more elements, but by removing the friction of traditional UI boundaries. We move away from the rigid grid, utilizing overlapping "floating" containers and high-contrast typography scales to guide the eye through complex step-based flows with effortless precision.

## 2. Colors
Our palette is anchored in a deep, authoritative charcoal (now a slightly different shade) and a vibrant, fresh green, balanced by an expansive range of soft, warm grays.

### Color Tokens
* **Primary:** `#79F1AA` (The Vibrant Highlight)
* **Secondary:** `#030A06` (The Deep Charcoal)
* **Neutral:** `#F6F6F7` (The Canvas)
* **Primary Container:** `#008060` (The Signature Green from the original context)
* **Inverse Surface (Deep Charcoal):** `#2f3132` (Note: This token is descriptive, but `secondary_color_hex` is the main deep charcoal)
* **On-Surface Variant:** `#3e4944` (Refined text contrast)

### The "No-Line" Rule
Designers are strictly prohibited from using 1px solid borders to define sections or containers. Visual containment must be achieved solely through background color shifts. For example, a `surface-container-low` component should sit directly on a `surface` background. This creates a soft, modern boundary that feels architectural rather than "boxed in."

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine paper. Use the following tiers to create depth:
1. **Canvas:** `neutral` (`#F6F6F7`)
2. **Sectioning:** `surface-container-low` (`#f3f3f4`)
3. **Primary Interaction Cards:** `surface-container-lowest` (`#ffffff`)

### The "Glass & Gradient" Rule
To add a premium editorial soul, use Glassmorphism for floating navigation elements or progress indicators. Use `neutral` colors at 80% opacity with a `20px` backdrop-blur. For main CTAs and hero headers, utilize a subtle linear gradient from `primary` to `primary-container` at a 135-degree angle to provide a sense of movement and quality.

## 3. Typography
We utilize a bold, "Editorial-First" typography scale to establish immediate hierarchy.

* **Display (lg/md/sm):** Using *Inter* with a bold weight (700). These are used for major brand statements. The scale is aggressive (up to `3.5rem`) to create a high-end magazine feel.
* **Headline (lg/md/sm):** Bold and clear. Used to introduce new steps in a navigation flow.
* **Title (lg/md/sm):** Semi-bold (600). Used for card titles and section headers.
* **Body (lg/md):** Regular weight (400). Designed for high readability with generous line-height (1.6) to ensure the tone remains supportive and approachable.
* **Label:** Used for metadata and small captions, emphasizing clarity over size.

## 4. Elevation & Depth
In this design system, depth is a function of light and layering, not structural lines.

* **The Layering Principle:** Avoid shadows for most on-grid elements. Instead, place a `surface-container-lowest` card (Pure White) on a `surface-container-low` (Soft Gray) background. This "Tonal Lift" provides enough contrast for the eye without the clutter of CSS effects.
* **Ambient Shadows:** For floating elements (like the "Reserve your storefront" card), use extra-diffused shadows.
* *Shadow Specs:* `0px 20px 40px rgba(26, 28, 29, 0.06)`.
* The shadow must be a tinted version of the `on-surface` color to mimic natural light.
* **The "Ghost Border" Fallback:** If accessibility requirements demand a border (e.g., in high-contrast modes), use the `outline-variant` (`#bdc9c2`) at 15% opacity. Never use 100% opaque borders.

## 5. Components

### Buttons
* **Primary:** Uses the Primary Gradient (Green). Large `xl` (1.5rem) corner radius. Padding: `16px 32px`.
* **Secondary:** Deep charcoal (`secondary_color_hex`) with white text. No border.
* **Tertiary:** Text-only with a `primary` color weight. Used for "Skip" or "Back" actions.

### Step-Based Navigation
Navigation should feel like a progress journey. Use a vertical "Thread" indicator (as seen in the reference imagery) using the `primary` color for completed steps and `outline-variant` for upcoming steps.

### Cards & Lists
* **Cards:** Use `lg` (1rem) or `xl` (1.5rem) roundedness.
* **Spacing as Separation:** Forbid divider lines. Use `1.5rem` to `2rem` of vertical whitespace to separate list items. If separation is visually required, use a subtle background shift to `surface-container-highest` on hover.

### Input Fields
* **Container:** `surface-container-highest` background.
* **Shape:** Fully rounded (`9999px`) for email captures or `md` for multi-field forms.
* **States:** On focus, the background shifts to `surface-container-lowest` with a 2px `primary` ghost-border (20% opacity).

## 6. Do's and Don'ts

### Do
* **Do** prioritize asymmetry. If a card is centered, ensure the text within it is left-aligned with significant padding (`40px+`) to create an beautiful editorial look.
* **Do** use "Breathing Room." If you think there is enough whitespace, add 20% more.
* **Do** use the Shopify logo style as a subtle "trust mark" in the top-left or centered header, never competing with the main headline.

### Don't
* **Don't** use black (`#000000`). Use our Deep Charcoal (`secondary_color_hex`) for all "dark" elements to keep the palette soft.
* **Don't** use standard "drop shadows." If a component feels flat, try changing the background color of the section behind it before reaching for a shadow.
* **Don't** crowd the "low-risk" tone. Ensure every action button is surrounded by supportive, clear micro-copy (e.g., "Cancel anytime," "No commitment").