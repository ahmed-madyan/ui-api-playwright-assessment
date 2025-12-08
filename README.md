# Falirstech Playwright Assessment

Comprehensive Playwright test automation repository containing API and UI tests, Playwright configuration, and reporting integration (Allure + HTML).

**Quick summary:** This repository uses `@playwright/test` to run tests located in the `tests/` folder and produces HTML and Allure test reports.

**Table of Contents**
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Common commands](#common-commands)
- [Running tests (examples)](#running-tests-examples)
- [Reports](#reports)
- [Configuration & environment](#configuration--environment)
- [Repository structure](#repository-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Contact](#contact)

## Prerequisites

- Node.js (LTS recommended)
- npm (bundled with Node) or yarn
- Playwright browsers (installed via Playwright CLI)
- (Optional) Allure commandline to view Allure reports locally

On Windows PowerShell, ensure you run commands from the project root.

## Getting started

1. Clone the repo:

```powershell
git clone <[repo-url](https://github.com/ahmed-madyan/falirstech-playwright-assessment)>
cd falirstech-playwright-assessment
```

2. Install dependencies:

```powershell
npm install
```

3. Install Playwright browsers (if not already installed):

```powershell
npx playwright install
```

4. (Optional) Install Allure CLI to view Allure reports locally. Two common ways:

Install as dev dependency:

```powershell
npm i -D allure-commandline
```

Or use npx to call the local binary, or install Allure globally per your OS.

## Common commands

The repository includes some npm scripts in `package.json`. Important ones:

- `npm run ui` — intended to run UI tests. Note: the Playwright config in this repo contains projects named `chromium`, `firefox`, and `api`. There is a script referencing `--project=ui` in `package.json` which does not match a `ui` project in `playwright.config.ts`. Use the examples below for reliable commands.
- `npm run api` — runs tests filtered with `@api` tag.
- `npm run debug` — runs tests with a `debug` project (if configured).
- `npm run lh` — Lighthouse invocation (if configured).

Because some scripts reference project names that don't exist in `playwright.config.ts`, prefer running `npx playwright test` directly or update scripts to match config.

## Running tests (examples)

- Run all tests (default):

```powershell
npx playwright test
```

- Run tests for a specific Playwright project (Chromium):

```powershell
npx playwright test --project=chromium
```

- Run tests for a specific file:

```powershell
npx playwright test tests/ui/specs/login.spec.ts
```

- Run tests that match a grep/tag (for example `@api`):

```powershell
npx playwright test --grep @api
```

- Run a single test in headed mode (useful for debugging):

```powershell
npx playwright test tests/ui/specs/login.spec.ts -p chromium --headed
```

- Show Playwright HTML report after a run:

```powershell
npx playwright show-report
```

## Reports (Allure + Playwright HTML)

This project is configured to use both the HTML reporter and Allure (see `playwright.config.ts` reporter section). After running tests, results are produced under `allure-results/` and an HTML report may be generated in `playwright-report/`.

To generate an Allure report locally (example):

```powershell
# generate and open report (requires allure-commandline or npx availability)
npx allure generate ./allure-results -o ./allure-report --clean; npx allure open ./allure-report
```

If you don't have Allure installed, you can inspect Playwright's HTML report:

```powershell
npx playwright show-report
# or open an existing report directory
npx playwright show-report ./playwright-report
```

## Configuration & environment

- Base URLs for environments are defined in `tests/utils/urls.ts`:

```ts
// excerpt
export default {
  test: { ui: 'https://www.automationexercise.com/', api: 'https://jsonplaceholder.typicode.com' },
  staging: { ui: 'https://www.automationexercise.com/', api: 'https://jsonplaceholder.typicode.com/staging' }
}
```

- `playwright.config.ts` highlights:
  - `testDir` is `./tests`
  - Reporters: `html` and `allure-playwright`
  - Projects defined: `api`, `chromium`, `firefox` (each uses grep to filter tests)
  - Retries and timeouts configured in the config file

If you need to target a custom environment, update the test runner or add an env loader (for example, via `cross-env` or a `.env` file) and update `baseURL` accordingly.

## Repository structure

- `tests/` – test specs and fixtures
  - `api/` – API test specs
  - `ui/` – UI test specs (pages + fixtures)
- `playwright.config.ts` – Playwright configuration
- `package.json` – npm scripts and dependencies
- `allure-results/` – Allure raw output (generated after test runs)
- `playwright-report/` – Playwright HTML report (generated after runs)

Example important files:

- `tests/ui/specs/login.spec.ts` – UI login tests
- `tests/ui/pages/login-page.ts` – page object
- `tests/utils/urls.ts` – environment base URLs

## Troubleshooting

- If Playwright can't find a project when you run `npm run ui`, check `playwright.config.ts` for defined `projects` and update the script to match (e.g., `--project=chromium`).
- If browsers are missing, run:

```powershell
npx playwright install
```

- If Allure commands fail, ensure `allure-commandline` is installed or call via `npx`.
- If tests are flaky, check `playwright.config.ts` for `retries`, `trace`, and `screenshot` settings.

## Contributing

- Open an issue for proposed changes or submit a PR.
- Keep Playwright tests focused, use tags (`@api`, `@ui`, `@ft`) and page objects for maintainability.

## Contact

For questions about this repository, reach out to the repository owner or maintainer.

---

Notes:
- `package.json` contains some scripts that reference project names (like `ui` or `debug`) which are not present in `playwright.config.ts` at the moment. Consider updating `package.json` scripts to use `--project=chromium` or create corresponding projects in the Playwright config.
- Example reliable run commands are shown in the "Running tests (examples)" section.
