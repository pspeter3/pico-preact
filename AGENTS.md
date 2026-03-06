# Pico Preact: Agent Notes

- CI uses Node `24`, then `npm ci` and `npm test`.
- `npm test` runs format, lint, specs, and type checks.
- Formatting and import order use `oxfmt`; linting uses `oxlint`.
- Coverage threshold is `100%` in `vite.config.ts`.
- `src/main.tsx` is the render entrypoint.
- `src/app.tsx` wires router and error boundaries.
- Route components are in `src/routes/*-route.tsx`.
- Component names use `PascalCase`; file names use `kebab-case.tsx`.
- Generated dirs: `dist/`, `coverage/`.
