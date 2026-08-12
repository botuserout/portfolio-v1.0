This is a high-level architectural plan to build an **Awwwards-winning level portfolio**. We will merge the "Cyber-Rider" aesthetic from your images with the ultra-minimal, motion-heavy philosophy of creative studios.

### THE CONCEPT: "THE KINETIC DEVELOPER"
The visual identity will leverage your motorcycle helmet imagery to create a "technical, anonymous, yet highly skilled" persona. We will use a **Monochrome + Electric Lime (#C8FF3D)** palette, utilizing heavy grain textures and cinematic video transitions.

---

### PHASE 1: TECHNICAL STACK & ARCHITECTURE
**Core Stack:**
*   **Framework:** Next.js 14 (App Router) + TypeScript.
*   **Styling:** Tailwind CSS (for layout) + Custom CSS Modules (for complex filters/grains).
*   **Motion:** GSAP + ScrollTrigger + SplitText (Main engine).
*   **Smooth Scroll:** Lenis (Essential for synced scroll animations).
*   **Interactions:** Framer Motion (for simple UI state transitions).
*   **Media:** Cloudinary or Mux (for high-performance video streaming).

**Directory Structure:**
```text
/src
  /components
    /canvas (Three.js/WebGL elements)
    /core (Cursor, Preloader, Layout)
    /sections (Hero, Work, Lab, About)
    /ui (MagneticButton, Marquee, TextReveal)
  /hooks (useMousePosition, useScrollVelocity)
  /lib (gsap-setup.ts, lenis-provider.tsx)
  /styles (globals.css, typography.css)
```

---

### PHASE 2: THE "CINEMATIC START" (PRELOADER & HERO)
Since you have a specific video sequence, we will implement a **Seamless Reveal**.

1.  **The Preloader (0ms - 2500ms):**
    *   A black screen with a centered, high-speed percentage counter (00 → 100).
    *   **Background:** The "Cinematic Video" plays in low-opacity/blurred behind the numbers.
    *   **The Transition:** Once 100% is reached, the video scales up to 1.1x, the numbers split vertically, and the video becomes crystal clear as the Hero section appears.

2.  **The Hero (The Hook):**
    *   **Background:** Full-screen video of the rider (you) or high-speed motion.
    *   **Typography:** "CREATIVE" (Top Left), "DEVELOPER" (Bottom Right) in massive `Space Grotesk`.
    *   **Interaction:** A "Scanline" effect or subtle RGB shift that follows the mouse.
    *   **Metadata:** Tiny mono-spaced text in the corners: `[2024//IND]` and `[SYSTEM_ACTIVE]`.

---

### PHASE 3: INTERACTIVE EXPERIENCE ENGINE
To reach the "Premium" feel, we implement these global systems:

*   **The "Fluid" Cursor:** A dot that turns into a large ring with the text "VIEW" when hovering over project videos. It will use a `lerp` (linear interpolation) function to feel "heavy" and smooth.
*   **The Magnetic System:** Every major CTA (Contact, View Project) will have a magnetic pull effect (GSAP) where the button follows the cursor within a 20px radius.
*   **Text Splitting:** Every heading will "reveal" character-by-character using a GSAP `stagger` and a `clip-path: inset(0 0 100% 0)` to `(0 0 0% 0)` animation.

---

### PHASE 4: PROJECT EXHIBITION (THE "LAB" & "WORK")
We will avoid standard grids.

1.  **Selected Work (Horizontal Scroll):**
    *   Using GSAP ScrollTrigger, the page locks, and projects move horizontally.
    *   **Visuals:** Large, 16:9 muted video loops for each project (CivicPulse, EarthData, etc.).
    *   **Reveal:** As a project comes into view, its name scales from 0.8 to 1.0.

2.  **The Lab (The Experimental Grid):**
    *   A "loose" grid where items are slightly offset.
    *   **Parallax:** As the user scrolls, images move at different speeds (speed: 0.1 to 0.4).
    *   **Distortion:** Hovering over a lab project triggers a WebGL "wave" distortion on the image texture.

---

### PHASE 5: EDITORIAL CONTENT (ABOUT & SKILLS)
*   **About Section:** Use the high-contrast B&W photo of you in the helmet. As the user scrolls, the image goes from B&W to a subtle color tint.
*   **Skills:** A "Typography Cloud." Instead of bars, words like "NEXT.JS" and "TYPESCRIPT" float. Hovering over a skill highlights it in `#C8FF3D` and dims the others.
*   **Experience:** A vertical list. When a row is hovered, a small thumbnail video of the work done at that company follows the cursor.

---

### PHASE 6: RESPONSIVE & PERFORMANCE POLISH
*   **Mobile Adaptation:**
    *   Disable the custom cursor (standard touch is better).
    *   Convert horizontal scrolls to vertical "Stacking Cards."
    *   Keep the massive typography but adjust `clamp()` values for mobile readability.
*   **Performance:**
    *   Use `next/image` for all photos.
    *   Ensure all videos are compressed via Handbrake/FFmpeg with high CRF for quality but low bitrate.
    *   Lazy-load GSAP animations only when components enter the viewport.

---

### PHASE 7: THE FINAL FOOTER (THE STATEMENT)
*   **The "Big Reveal":** A massive marquee at the bottom: `LET'S BUILD THE FUTURE —`.
*   **Contact Interaction:** Clicking the email address doesn't just open a mail link; it triggers a "COPIED TO CLIPBOARD" animation in the custom cursor itself.

### EXECUTION STEPS (FOR YOU):
1.  **Prepare Media:** Export your videos as `.webm` (for Chrome) and `.mp4` (for Safari).
2.  **Initialize Next.js:** Set up the layout and the Lenis provider for smooth scrolling.
3.  **Build the Preloader:** This sets the tone. If the preloader isn't perfect, the rest of the site feels "template-y."
4.  **Integrate GSAP:** Create a `useGSAP` hook for all reveal animations.
