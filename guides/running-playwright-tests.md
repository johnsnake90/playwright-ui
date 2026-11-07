# Running Playwright Tests

This project uses `@playwright/test`. Its configuration discovers tests in `e2e/` and currently enables the Chromium project.

Run commands from the repository root.

## Run the full test suite

```sh
npm test
```

The `pretest` script runs TypeScript checks and ESLint before the tests. To run Playwright without those checks:

```sh
npm run test:nolint
```

## Run a specific test file or test

Pass a file path to Playwright to run just that file:

```sh
npx playwright test e2e/example.spec.ts
```

Use `--grep` to select tests by title or tag:

```sh
npx playwright test --grep "has title"
npx playwright test --grep "@pwbasic"
```

The project also provides scripts for the `@pwbasic` tag:

```sh
npm run test:pwbasic
npm run test:pwbasic:headed
```

Only tests annotated with the matching tag will run when using these commands.

## Choose a browser project

The configured project is named `chromium`:

```sh
npx playwright test --project=chromium
```

Firefox, WebKit, mobile device, and branded-browser projects are examples in `playwright.config.ts`, but are currently commented out. Enable and configure a project there before selecting it with `--project`.

## Change how the browser runs

Run tests with the browser window visible:

```sh
npm run test:headed
```

Open Playwright's interactive UI runner:

```sh
npm run test:ui
```

Run with the Playwright debugger:

```sh
npm run test:debug
```

## Control execution from the CLI

The Playwright CLI can also limit workers, repeat tests, or retry failures:

```sh
npx playwright test --workers=1
npx playwright test --repeat-each=3
npx playwright test --retries=2
```

These options can be combined with a file path, `--grep`, or `--project`; for example:

```sh
npx playwright test e2e/example.spec.ts --project=chromium --headed
```

## View the HTML report

After a test run, open the generated HTML report:

```sh
npm run show-report
```
