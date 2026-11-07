# Playwright UI Tests

This repository is an end-to-end browser testing project built with Playwright and TypeScript. The tests in `e2e/` interact with web pages in a real browser, and the current Playwright configuration runs them in Chromium.

## Getting started

You need Node.js 20 or later and npm.

```sh
npm install
npx playwright install chromium
```

## Running tests

Run the full suite with:

```sh
npm test
```

Before running Playwright, `npm test` automatically runs the `pretest` checks: TypeScript type-checking (`tsc --noEmit`) and ESLint. Other scripts below run their own Playwright command without automatically running `pretest`.

| Command | What it does |
| --- | --- |
| `npm run test:headed` | Runs tests with the browser window visible. |
| `npm run test:debug` | Runs tests in Playwright's debug mode. |
| `npm run test:ui` | Opens Playwright's interactive test runner. |
| `npm run test:pwbasic` | Runs tests tagged `@pwbasic`. |
| `npm run test:pwbasic:headed` | Runs tests tagged `@pwbasic` with the browser visible. |
| `npm run test:nolint` | Runs the Playwright suite without the `pretest` checks. |
| `npm run show-report` | Opens the HTML report from the most recent run. |

You can also use the Playwright CLI to run one file or filter tests by title:

```sh
npx playwright test e2e/the-internet/home-page.spec.ts
npx playwright test --grep "home page"
```

For more ways to select and run tests, see the [Playwright test-running guide](guides/running-playwright-tests.md).

## What lint checks

ESLint checks JavaScript and TypeScript across the repository. Its TypeScript rules help catch issues such as floating promises, invalid `await` usage, unsafe values, and inconsistent naming or type conventions. It also warns about `console` calls.

For Playwright `.spec` and `.test` files under `e2e/` and `tests/`, the Playwright ESLint rules check test-specific practices. They detect problems such as missing `await` on Playwright operations, invalid expectations or titles, and accidentally focused tests. They also flag patterns that can make tests brittle or misleading, including conditional assertions, forced actions, fixed-time waits, and non-web-first assertions. Tests are limited to ten `expect` calls each.

Some Playwright checks are warnings; more serious correctness checks and the assertion limit are errors. The rules are configured in `eslint.config.mjs`.

## Project files

- `e2e/` - Playwright end-to-end tests.
- `guides/` - Guides for running and working with the tests.
- `playwright.config.ts` - Test discovery, browser projects, and reporting configuration.
- `eslint.config.mjs` - JavaScript, TypeScript, and Playwright lint rules.

## License

This project is licensed under the ISC License.
