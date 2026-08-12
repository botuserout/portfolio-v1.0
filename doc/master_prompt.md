MASTER BUILD PROMPT
Premium Interactive Creative Developer Portfolio
You are an expert creative frontend engineer, interaction designer, motion designer, and UI/UX designer.
Build a premium, highly interactive personal portfolio website inspired by the visual language, interaction quality, motion philosophy, spacing, typography hierarchy, dark aesthetic, project presentation, and immersive feel of:
https://www.s0animation.com/design
IMPORTANT:
Do NOT copy the original site's branding, text, logos, personal identity, project assets, images, source code, or proprietary artwork.
Instead, recreate the design philosophy and interaction quality for my own developer/creative portfolio.
The final website should feel like an award-winning Awwwards-style creative portfolio rather than a conventional developer portfolio.
The experience should communicate:
premium
experimental
technical
minimal
cinematic
futuristic
interactive
confident
creative
highly polished
The website should feel designed by a creative studio, not generated from a generic portfolio template.
1. CORE OBJECTIVE
Create a portfolio that immediately communicates:
"I am a developer who understands technology AND design."
The site should prioritize:
Visual impact
Typography
Motion
Interaction
Project storytelling
Strong personal identity
Technical credibility
Performance
Do NOT create a typical portfolio containing:
generic hero section
cards everywhere
excessive gradients
huge rounded rectangles
standard navbar
generic glassmorphism
stock illustrations
boring project grids
template-like UI
Instead, create a highly art-directed experience.
2. TECHNOLOGY
Use:
Next.js
TypeScript
React
Tailwind CSS
GSAP
GSAP ScrollTrigger
Lenis or equivalent smooth-scroll system
Framer Motion only where GSAP is not the better choice
Three.js / React Three Fiber where useful
HTML5 video
CSS animations
SVG
WebGL only when it provides meaningful visual value
Architecture:
components/
layout/
navigation/
hero/
projects/
about/
experience/
skills/
contact/
effects/
ui/
lib/
animations/
constants/
utils/
public/
images/
videos/
models/
textures/
Keep the implementation modular.
Do not create one giant component.
3. DESIGN DIRECTION
Use a predominantly dark visual system.
Primary background:
#080808
Secondary dark:
#101010
Surface:
#151515
Primary text:
#F4F4F0
Secondary text:
#A3A3A0
Muted text:
#6D6D69
Borders:
rgba(255,255,255,0.12)
Accent:
Choose ONE restrained accent color.
Preferred accent:
#C8FF3D
Use the accent sparingly.
Do NOT turn the entire site into neon green.
The accent should appear in:
small indicators
hover states
selected navigation items
micro labels
buttons
progress indicators
important metadata
The majority of the website should remain monochrome.
4. TYPOGRAPHY
Typography is one of the primary design elements.
Use a combination of:
Display font:
"Space Grotesk"
Body/UI:
"Inter"
Optional editorial accent:
"DM Mono"
Use typography with extreme hierarchy.
Example:
Hero:
font-size:
clamp(4rem, 11vw, 12rem)
font-weight:
500–700
line-height:
0.82–0.95
letter-spacing:
-0.05em to -0.08em
Do not make every heading bold.
Use contrast between:
giant display typography
tiny metadata
mono labels
editorial descriptions
Small labels should feel technical.
Example:
01 — SELECTED WORK
instead of:
My Projects
5. GLOBAL LAYOUT
Use a responsive 12-column grid.
Desktop:
max-width:
1600px
horizontal padding:
clamp(20px, 4vw, 72px)
Mobile:
padding:
20px
Maintain generous negative space.
The design should breathe.
Do not fill every available area.
Use asymmetry intentionally.
Some sections should have:
large empty spaces
offset typography
overlapping media
elements extending beyond normal grid boundaries
6. CURSOR EXPERIENCE
Desktop should have a custom cursor.
Default:
small circular dot.
On interactive elements:
expand cursor.
For project links:
cursor becomes:
VIEW
PROJECT
For external links:
cursor becomes:
OPEN
For draggable/interactive media:
cursor becomes:
DRAG
Use smooth interpolation.
The cursor should lag slightly behind the mouse.
Never make the cursor annoying.
Disable custom cursor on touch devices.
7. PAGE LOADING EXPERIENCE
Create a cinematic preloader.
Background:
#080808
Display:
MY NAME
or
INITIALS
Center aligned.
Show:
0–100%
with a minimal loading indicator.
Animation:
0%
10%
28%
47%
71%
100%
Then:
percentage disappears
typography moves upward
main page reveals
preloader clips away
Use GSAP.
The preloader should be quick.
Target:
700ms–1800ms.
Never delay the website unnecessarily.
Respect:
prefers-reduced-motion.
8. NAVIGATION
Create a minimal floating navigation.
Desktop:
top-left:
MY NAME / STUDIO
top-right:
WORK
ABOUT
EXPERIENCE
CONTACT
Use small uppercase typography.
Navigation should initially appear minimal.
On scroll:
navigation can transform subtly.
Possible behavior:
Top:
transparent
After scrolling:
slightly darker translucent background
Do not create a giant navbar.
9. HERO SECTION
The hero must be the strongest visual section.
Full viewport:
min-height:
100svh
Layout:
large typography + interactive visual element.
Example content:
CREATIVE
DEVELOPER
or:
BUILDING
DIGITAL
EXPERIENCES.
Place a small introduction:
"Computer Science student / Creative Developer / Builder"
Use a small technical metadata block.
Example:
BASED IN INDIA
AVAILABLE FOR SELECTED PROJECTS
2026
Hero should include an interactive visual.
Possible visual:
floating 3D object
abstract WebGL geometry
animated wireframe
particle field
distorted image
interactive typography
cursor-reactive shape
procedural object
The object should react subtly to:
mouse position
scroll
velocity
Avoid gimmicky animation.
10. HERO TYPOGRAPHY ANIMATION
Hero text should enter using staggered motion.
Initial state:
opacity: 0
transform:
translateY(100%)
Reveal:
clip-path animation
or
overflow-hidden text mask.
Each line enters independently.
Use:
ease:
power4.out
duration:
1.2s
stagger:
0.08–0.15s
The animation should feel expensive and smooth.
11. SCROLL INDICATOR
Bottom of hero:
small technical indicator.
Example:
SCROLL TO EXPLORE
vertical animated line.
The line should grow/shrink subtly.
12. INTRODUCTION SECTION
After hero, introduce the person.
Use oversized statement:
"I build digital experiences where code becomes part of the design."
Break the statement across multiple lines.
Animate each line as it enters viewport.
Use subtle opacity transition.
Highlight selected words using the accent color.
Example:
I BUILD
DIGITAL
EXPERIENCES.
13. SELECTED WORK SECTION
Do not create ordinary project cards.
Projects should feel like an exhibition.
Section heading:
SELECTED WORK
01
02
03
04
Each project occupies significant screen space.
Use:
large image/video
project title
year
category
technology
short description
Example:
01
CIVICPULSE
Machine-learning powered community intelligence platform.
2026
MACHINE LEARNING
DATA
WEB PLATFORM
14. PROJECT PRESENTATION
Each project should have a unique layout.
Project 01:
large full-width visual.
Project 02:
left-aligned image + right text.
Project 03:
image partially overlapping typography.
Project 04:
horizontal scrolling presentation.
Do NOT repeat the same card layout.
Every project should feel individually art-directed.
15. PROJECT IMAGE INTERACTION
When hovering over project media:
image should subtly scale:
1.00 → 1.04
Container remains fixed.
Add slight parallax.
Text can move:
translateX(4–12px)
Project number can animate.
Cursor changes.
Possible overlay:
VIEW CASE STUDY →
Do not overdo effects.
16. PROJECT REVEAL ANIMATION
When project enters viewport:
container reveals
image clips open
image moves from scale 1.08 → 1
text fades upward
metadata appears
project number animates
Use ScrollTrigger.
Animation should trigger once.
17. PROJECT DETAIL PAGE
Every major project should have its own route.
Example:
/work/civicpulse
Structure:
project number
title
short statement
hero visual
overview
problem
solution
role
technology
process
results
gallery
technical implementation
next project
Make project pages editorial.
Do not make them look like dashboards.
18. ABOUT SECTION
Use a highly typographic layout.
Heading:
ABOUT
Then:
large personal statement.
Example:
I AM A COMPUTER SCIENCE STUDENT
WHO BUILDS SOFTWARE,
EXPERIMENTS WITH AI,
AND CARES DEEPLY ABOUT
HOW DIGITAL PRODUCTS FEEL.
Use different font weights.
Add small metadata blocks.
19. EXPERIENCE
Create an editorial timeline.
Each row:
YEAR
ROLE
COMPANY
DESCRIPTION
Example:
2026
LEAD DEVELOPER
LEGALSTHAL
Building digital experiences and technology infrastructure.
On hover:
row expands slightly.
A related image/video may appear.
20. SKILLS
Do NOT use progress bars.
Do NOT use:
React — 90%
Python — 80%
Instead create a typographic skill field.
Example:
DEVELOPMENT
REACT
NEXT.JS
PYTHON
FASTAPI
TYPESCRIPT
DATA
PYTHON
PANDAS
NUMPY
MACHINE LEARNING
CREATIVE
GSAP
THREE.JS
MOTION
INTERACTION DESIGN
Skills can subtly react to hover.
21. MARQUEE SECTION
Create an infinite horizontal marquee.
Example:
CREATIVE DEVELOPMENT
/
MACHINE LEARNING
/
INTERACTIVE EXPERIENCES
/
DIGITAL PRODUCTS
/
Direction:
alternating left/right.
Speed:
slow.
On hover:
pause or slow down.
Use CSS/GSAP.
Ensure no accessibility issues.
22. EXPERIMENTS SECTION
Create a section called:
LAB
or
EXPERIMENTS
Show smaller experimental projects.
Examples:
AI experiments
WebGL experiments
Generative art
UI experiments
Mini tools
Open-source projects
Use unconventional layouts.
Some elements can move independently with scroll.
23. INTERACTIVE TEXT
Use text as an interaction medium.
Example:
Hover over:
MOTION
→ typography distorts.
Hover over:
WEBGL
→ background changes.
Hover over:
AI
→ subtle particles appear.
Keep effects subtle.
24. SCROLL EXPERIENCE
Scrolling is a major component of the design.
Implement:
smooth scrolling
subtle parallax
section reveals
horizontal scroll sections
scale transitions
opacity transitions
image clipping
text transformations
Do NOT animate every element.
Create hierarchy.
Important elements:
strong animation.
Secondary elements:
minimal animation.
Background elements:
very subtle animation.
25. SCROLL VELOCITY EFFECT
Track scroll velocity.
When user scrolls quickly:
slightly increase movement of selected decorative elements.
When scrolling stops:
elements settle.
Use interpolation rather than abrupt movement.
26. IMAGE DISTORTION
For selected project images, optionally implement subtle WebGL distortion.
When entering viewport:
image texture slightly distorts.
On hover:
distortion increases slightly.
On mouse leave:
returns to normal.
Keep distortion extremely subtle.
27. TRANSITION BETWEEN PAGES
Use smooth page transitions.
When navigating:
current page fades/slides.
New page enters.
Possible sequence:
black overlay
↓
navigation
↓
page content
↓
hero
Avoid long transitions.
Maximum:
~900ms.
28. FOOTER
Footer should feel like the final statement.
Large typography:
LET'S
BUILD
SOMETHING.
or:
HAVE AN IDEA?
LET'S TALK.
Add:
EMAIL
GITHUB
LINKEDIN
INSTAGRAM
RESUME
Use oversized typography.
Footer should have significant whitespace.
29. CONTACT INTERACTION
Create a minimal contact interaction.
Example:
AVAILABLE FOR
SELECTED PROJECTS
hello@example.com
When email is hovered:
COPY EMAIL
On click:
copy email to clipboard.
Show:
COPIED
for ~1500ms.
30. FOOTER MARQUEE
Add an infinite marquee near the footer:
LET'S CREATE SOMETHING GREAT
LET'S CREATE SOMETHING GREAT
LET'S CREATE SOMETHING GREAT
Slow continuous motion.
31. MICRO-INTERACTIONS
Implement polished micro-interactions:
Buttons:
hover → subtle translation
Links:
underline expands
Navigation:
active indicator moves
Images:
slight scale
Text:
character/word reveal
Cursor:
contextual state
Cards:
subtle magnetic movement
Do not turn every element into an animation.
32. MAGNETIC BUTTONS
For selected buttons:
mouse proximity causes button to move slightly toward cursor.
Maximum displacement:
8–15px.
Use spring interpolation.
Do not make navigation difficult.
Disable on touch devices.
33. COLOR SYSTEM
Use mostly:
BLACK
OFF-WHITE
GRAY
Accent:
LIME / ELECTRIC GREEN
Suggested palette:
--background: #080808;
--surface: #111111;
--text: #F4F4F0;
--muted: #8A8A86;
--border: rgba(255,255,255,.12);
--accent: #C8FF3D;
The accent should account for approximately 3–8% of the visual interface.
34. BORDERS
Use extremely thin borders.
1px.
Low opacity.
Avoid card-heavy UI.
Borders should divide information rather than decorate everything.
35. CORNERS
Avoid excessive rounded corners.
Primary aesthetic:
sharp / slightly rounded.
Use:
0px
2px
4px
rather than:
20px
30px
40px
This is an editorial/creative portfolio, not a SaaS dashboard.
36. SHADOWS
Avoid conventional drop shadows.
Instead use:
contrast
blur
opacity
overlapping layers
lighting
for depth.
37. 3D VISUAL LANGUAGE
If using Three.js:
create one memorable interactive object.
Do not fill the site with random 3D objects.
The object should represent the portfolio identity.
Possible concept:
abstract metallic geometric form.
Properties:
dark metallic material
subtle reflections
soft studio lighting
slow rotation
mouse interaction
scroll interaction
Use WebGL only where performance allows.
Provide fallback for mobile.
38. RESPONSIVE DESIGN
Desktop:
1440px+
Tablet:
768–1439px
Mobile:
320–767px
On mobile:
remove custom cursor
reduce WebGL complexity
reduce parallax
reduce scroll effects
keep typography dramatic
maintain strong visual hierarchy
Do NOT simply shrink desktop.
Create a mobile-specific composition.
39. MOBILE HERO
Mobile hero should use:
large typography
minimal navigation
simplified visual
strong vertical spacing
Example:
CREATIVE
DEVELOPER
small metadata below.
The hero should still feel premium without WebGL.
40. ACCESSIBILITY
Implement:
semantic HTML
proper heading hierarchy
keyboard navigation
visible focus states
ARIA labels where required
sufficient color contrast
reduced-motion support
No interaction should depend exclusively on hover.
41. REDUCED MOTION
If:
prefers-reduced-motion: reduce
then:
disable smooth scrolling
disable heavy parallax
disable cursor effects
disable large transform animations
disable WebGL animation where appropriate
Keep content completely accessible.
42. PERFORMANCE
Performance is extremely important.
Target:
Lighthouse Performance:
90+
Use:
lazy loading
next/image
responsive images
WebP/AVIF
lazy video loading
poster images
code splitting
dynamic imports
GPU-friendly transforms
avoid layout thrashing
avoid unnecessary React re-renders
Use requestAnimationFrame only where necessary.
43. VIDEO
For project previews:
use muted autoplay loop videos.
Attributes:
muted
playsInline
loop
autoPlay
Do not autoplay audio.
Use poster images.
Lazy load videos outside viewport.
44. BACKGROUND
Keep background mostly black.
Optional subtle:
grain texture
noise
radial lighting
very low-opacity grid
particles
But the background must NEVER overpower the content.
Add a subtle film grain overlay:
opacity:
0.025–0.05
pointer-events:
none
45. PAGE SECTION STRUCTURE
Final homepage:
01 — PRELOADER
02 — NAVIGATION
03 — HERO
04 — INTRODUCTION
05 — SELECTED WORK
06 — FEATURED PROJECT
07 — MORE WORK
08 — EXPERIMENTS / LAB
09 — ABOUT
10 — EXPERIENCE
11 — SKILLS
12 — MARQUEE
13 — CONTACT
14 — FOOTER
46. CONTENT FOR MY PORTFOLIO
Use my real project ecosystem as the content foundation.
Potential featured projects:
CivicPulse
Traffic Congestion Monitoring System
Kishan Saathi / AgriSakhi
EarthData AQI
Freelancer Client Manager
SkyMart
FilmyHeaven
AI Brand Intelligence Platform
Do not invent fake achievements.
Where information is unavailable, use placeholders.
47. PROJECT CONTENT FORMAT
Every project should contain:
PROJECT NUMBER
PROJECT NAME
YEAR
CATEGORY
ONE-LINE DESCRIPTION
TECHNOLOGY
ROLE
CTA
Example:
01
CIVICPULSE
COMMUNITY INTELLIGENCE
2026
ML / DATA / WEB
An ML-powered system designed to identify,
classify and prioritize community issues.
PYTHON
MACHINE LEARNING
NEXT.JS
FASTAPI
VIEW PROJECT →
48. INTERACTION PHILOSOPHY
Follow this rule:
NOT EVERYTHING NEEDS TO MOVE.
Movement should communicate:
hierarchy
direction
state
depth
discovery
Never animate something simply because animation is possible.
The website should feel calm when the user stops interacting.
49. MOTION PHILOSOPHY
Motion should feel:
smooth
weighted
intentional
cinematic
slightly unpredictable
Avoid:
linear animation
Use:
power2
power3
power4
expo
Use spring physics for interactive elements.
Use longer animations for major transitions.
Use shorter animations for micro-interactions.
50. GSAP CONFIGURATION
Create reusable animation utilities.
Example concepts:
fadeUp()
revealText()
imageReveal()
parallax()
magnetic()
horizontalScroll()
splitTextReveal()
pageTransition()
Do not duplicate animation code across components.
51. CUSTOM CURSOR STATES
States:
default
pointer
project
view
drag
external
Each state should transition smoothly.
Example:
DEFAULT
small circle
PROJECT
larger circle
VIEW
VIEW
PROJECT
Use blend modes carefully.
52. HOVER IMAGE PREVIEW
For project lists:
when hovering a project title:
show a floating preview image near the cursor.
Preview should:
follow cursor smoothly
fade in
scale from .85 → 1
rotate slightly based on cursor velocity
disappear on mouse leave
On mobile:
disable this behavior.
53. PROJECT LIST
Alternative project presentation:
01 — CIVICPULSE
02 — KISHAN SAATHI
03 — EARTHDATA
04 — TRAFFIC VISION
05 — SKYMARKET
Each row:
number
name
category
year
arrow
On hover:
row expands
image appears
arrow moves
background subtly changes.
54. TEXT SPLITTING
Use GSAP SplitText if available/licensed, or implement a lightweight custom text-splitting solution.
Animate:
lines
words
characters
depending on context.
Never split text in a way that harms screen readers.
Preserve accessible source text.
55. IMAGE REVEAL STYLE
Use clip-path.
Initial:
clip-path:
inset(100% 0 0 0)
Animate to:
inset(0 0 0 0)
At the same time:
image scale:
1.08 → 1
This creates an editorial image reveal.
56. SECTION TRANSITIONS
Avoid obvious boxes separating sections.
Let sections transition naturally.
Example:
black
→ large typography
→ image
→ whitespace
→ text
→ horizontal line
→ next project
The entire page should feel like one continuous composition.
57. VISUAL RHYTHM
Alternate:
large
small
large
quiet
large
interactive
quiet
Do not create constant visual stimulation.
Give the user breathing room.
58. LOADING STATES
Images should not abruptly appear.
Use:
low-quality placeholder
blur
fade
then sharp image.
Videos should show poster before playback.
59. ERROR HANDLING
If:
WebGL fails
→ show static image fallback.
If:
video fails
→ show poster.
If:
JavaScript fails
→ content should remain readable.
60. SEO
Implement:
metadata
Open Graph
Twitter cards
semantic headings
descriptive image alt text
canonical URL
sitemap
robots.txt
structured metadata where appropriate.
61. CODE QUALITY
Use:
strict TypeScript
reusable components
clear naming
no unnecessary dependencies
no hardcoded repeated values
centralized constants
centralized animation configuration
responsive utilities
comments only where useful.
Do NOT produce messy AI-generated code.
62. DEVELOPMENT PROCESS
Before coding:
Analyze the entire reference design.
Identify visual patterns.
Identify typography hierarchy.
Identify spacing system.
Identify animation system.
Identify interaction patterns.
Identify responsive behavior.
Convert them into a reusable design system.
Then:
Build layout.
Build typography.
Build hero.
Build project system.
Add animations.
Add interactions.
Add responsive behavior.
Optimize performance.
Perform final visual polish.
Do NOT build the entire site in one pass.
63. IMPLEMENTATION PRIORITY
Priority 1:
visual hierarchy
Priority 2:
typography
Priority 3:
spacing
Priority 4:
project presentation
Priority 5:
scroll animations
Priority 6:
micro-interactions
Priority 7:
WebGL/3D
Priority 8:
decorative effects
If performance conflicts with visual effects:
KEEP PERFORMANCE.
64. DESIGN QA
After implementation, inspect every section.
Check:
Does the hero feel premium?
Does typography feel intentional?
Does the project section feel like an exhibition?
Does scrolling feel smooth?
Are animations synchronized?
Are there awkward jumps?
Are there excessive effects?
Does mobile feel designed rather than compressed?
Does the site feel like a real creative developer portfolio?
If any section looks like a generic template:
REDESIGN IT.
65. FINAL VISUAL STANDARD
The final result should feel like:
Awwwards-quality creative portfolio
+
experimental digital studio
+
senior frontend developer portfolio
+
motion design showcase
It should NOT feel like:
student template
Bootstrap portfolio
SaaS dashboard
GitHub profile page
generic Next.js starter
AI-generated landing page.
66. MOST IMPORTANT RULE
DO NOT blindly copy the reference website.
Extract the principles:
dark editorial aesthetic
oversized typography
minimal interface
cinematic motion
asymmetric composition
immersive project presentation
sophisticated scrolling
restrained color
strong negative space
interaction-driven storytelling
Then create an ORIGINAL portfolio identity around my projects, skills, personality, and career.
The final website should make someone stop scrolling within the first 5 seconds.
Build it as if it will be submitted to an international creative web design award.
plan a perfect plan for this prompt and prioritize interactive, high-fidelity motion graphics to engage visitors instantly.
here some refernce i have added to the repository for your review and implementation reference.
make sure that it should repsonsive and fully responsive across all device breakpoints and screen sizes.
in the intro preloading section add the video sequence as a cinematic hero experience before transitioning to the site.