# Kelvin · Systems Engineer & Digital Architect

This is the portfolio website for **Alabi Abdulmumuni Kelvin**, founder of **The Orderly Standard**—a web studio that builds fast, structured digital systems for clients across healthcare, consulting, tech, and education. Operating from Nigeria, Kelvin serves clients across the UK, USA, and Germany.

## Philosophy

Alabi's core mission: **eliminate chaos and prevent helplessness**. He builds systems that give people their peace back—whether that's organizing a library, architecting a web application, or designing client workflows. His work is not about quick fixes or day-one aesthetics; it's about stability, clarity, and systems designed for the long term.

## About Kelvin

Alabi is a problem solver by instinct. He bridges the gap between human needs and digital solutions by combining two unlikely disciplines: Information Science (as a professional librarian) and self-taught mastery of web engineering. That combination is rare—and it's precisely what his clients benefit from.

With **5+ years of active development** and **10+ live projects delivered** across **4 countries** (🇳🇬 🇬🇧 🇺🇸 🇩🇪), his work is designed not for day-one aesthetics, but for stability, legacy, and long-term clarity.

## What the site includes

- **Hero section** – Introduction and call-to-action
- **About section** – Background, expertise, and key statistics (5+ years, 4 countries, 10+ projects)
- **Selected Work section** – Featured projects including Catalyst Group (USA enterprise consultancy), Chaptrr (UK retail media network), and in-progress builds for Lightbrighties and ScaleupNg
- **Technical Stack section** – React, Next.js, TypeScript, Node.js, Python, Django, PostgreSQL, GraphQL, Prisma, WordPress, Shopify, Figma, Git, and more
- **Service Packages** – Three transparent tiers (Presence, Standard, Systems) with clear deliverables and timelines
- **Testimonials** – Client reviews and feedback
- **Contact form** – Linked to Netlify serverless function for inquiries

## Service Packages

Kelvin offers three transparent service tiers, each with clear scope and timeline:

- **Presence** – Single-page responsive website, delivered in 5–7 days. Includes contact form, basic SEO, mobile optimization, and 1 round of revisions.

- **Standard** – Multi-page website (up to 5 pages) with CMS integration, dark-mode design system, analytics setup, and 30-day post-launch support. Delivered in 10–14 days. (Most popular)

- **Systems** – Custom web applications, platforms, backend architecture, database design, e-commerce, automation workflows, and ongoing retainer options. Scoped and timed per project.

All projects emphasize clarity, stability, and systems built for the long term—not quick fixes.

## Project structure

```text
.
├── index.html                 # Main portfolio page and embedded styles/scripts
├── assets/
│   └── kelvin.jpg            # Profile image used in the hero section
├── netlify/
│   └── functions/
│       └── contact.js        # Netlify Function for handling contact form submissions
├── package.json              # Project metadata and dependencies
└── README.md
```

## Local preview

The site is a static HTML portfolio, so you can preview it locally by serving the project folder with a simple web server.

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Contact form setup

The contact form submits to Netlify Functions through the endpoint:

```text
/.netlify/functions/contact
```

The handler lives in [netlify/functions/contact.js](netlify/functions/contact.js). If you want email delivery enabled, update that function with your preferred mail service or provider integration.

## Deployment

This site is designed for Netlify deployment:

1. Connect the GitHub repository to Netlify
2. Deploy the site from the repository root
3. Netlify will serve the static site and deploy the serverless function automatically

Live site: https://kelvin.netlify.app

## Contact

Based in Nigeria. Working with clients across industries and continents. If you have a clear problem and need someone who will trace it to its root before writing a single line of code, here's how to reach Alabi:

- **Email:** alabiabdulmumuni9@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/alabi-abdulmumuni-kelvin-0679b7155/
- **GitHub:** https://github.com/Nettar-Jr
- **WhatsApp:** https://wa.me/2348134900669

