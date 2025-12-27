# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### [PRINCIPLE_5_NAME]
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
[PRINCIPLE_5_DESCRIPTION]
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## [SECTION_2_NAME]
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

[SECTION_2_CONTENT]
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

# Company Website Constitution

## Core Principles

### I. High Code Quality & Clean Architecture
- TypeScript-first for clarity and safety; prefer explicit types for public interfaces.
- Small, focused modules and components; composition over inheritance.
- Predictable folder layout: `app/`, `components/`, `lib/`, `hooks/`, `content/`, `styles/`, `tests/`.
- Keep business logic inside `lib/` services; UI components should be presentational and contain minimal logic.
- Enforce linting (ESLint), formatting (Prettier), and type checks in CI. Adopt strict compiler options (`noImplicitAny`, `strictNullChecks`).

### II. Consistent UX & Modern UI Design
- Build a system of reusable, accessible UI primitives using Tailwind CSS and design tokens.
- Separate presentational (stateless) components from stateful container components.
- Maintain a documented component library and Storybook for visual regression and onboarding.
- Enforce consistent spacing, typography, and color via Tailwind config and design tokens.

### III. Performance-First Approach
- Use the Next.js App Router; prefer server components and limit client components to interactive portions.
- Optimize assets: responsive images (AVIF/WebP), responsive srcsets, lazy-load offscreen images, and compress static assets.
- Minimize runtime JavaScript; prefer server-side rendering (SSR) or static rendering (SSG/ISR) where appropriate.
- Use CDN caching, long cache headers for immutable assets, and route-level caching for dynamic content.
- Measure performance with Lighthouse and include performance budgets in CI.

### IV. Maintainability & Scalability
- Design modular, decoupled components with small, well-documented public APIs.
- Write unit tests for logic and component tests for critical UI (Jest + React Testing Library). Use Playwright for key end‑to‑end flows.
- CI gates: lint → typecheck → tests → build. Reject merges on failing gates.
- Plan for incremental growth: feature flags, API versioning, and documented migration paths.

### V. Clear Separation of Concerns
- UI (components) ↔ Content (MDX / `content/` / headless CMS) ↔ Logic (services in `lib/`, hooks in `hooks/`).
- Keep data fetching and transformation on the server when possible; only fetch on the client for interactive behavior.
- Encapsulate client-side behavior in small hooks; avoid side effects in presentational components.
- Store SEO and routing metadata alongside routes using the App Router metadata convention.

## Development Guidelines & Technology Stack

- Framework: Next.js App Router (`app/`) — server components by default; add `"use client"` only when necessary.
- Styling: Tailwind CSS as the primary styling system; use utility classes with component-level tokens and a central `tailwind.config.js`.
- Language: TypeScript required for all new code.
- Accessibility: Aim for WCAG AA baseline — semantic HTML, good keyboard support, proper ARIA only where needed.
- SEO: Server-rendered critical content, route metadata, canonical URLs, sitemap, robots.txt, and JSON‑LD structured data for key pages.

## Development Workflow & Quality Gates

- Branching model: `feature/*`, `fix/*`, `chore/*`. PRs required for all changes.
- PR checklist: description, testing notes, accessibility checklist, performance implications, and Storybook/screenshots for UI changes.
- Code reviews: at least one reviewer; larger/architectural changes require an architect or senior engineer sign-off.
- CI: lint, typecheck, unit tests, integration tests, build — all required before merge.

## Accessibility & UX Requirements

- Ensure all interactive elements are keyboard operable and have visible focus states; include skip links for keyboard users.
- Check color contrast for WCAG AA; respect `prefers-reduced-motion` and avoid motion that may cause discomfort.
- Provide meaningful `alt` attributes for non-decorative images and use semantic markup for landmarks and headings.
- Add automated accessibility checks (axe or pa11y) to CI for critical pages.

## Governance

- This Constitution is the authoritative guidance for the site; deviations must be documented in PRs with justification and migration steps.
- Amendments are proposed via PR and must include rationale, migration plan, and approvals from product, design, and engineering leads.
- Versioning: Semantic versioning for architecture-level changes (MAJOR.MINOR.PATCH). Record version, ratification, and amendment dates.

**Version**: 1.0.0 | **Ratified**: 2025-12-27 | **Last Amended**: 2025-12-27
