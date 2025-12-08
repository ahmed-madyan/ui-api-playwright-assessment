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
git clone <repo-url>
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

The repository includes npm scripts in `package.json`. **Note:** Some scripts reference project names that don't exist in `playwright.config.ts`:

- ❌ `npm run ui` — references `--project=ui`, but no `ui` project exists in config
- ❌ `npm run uim` — references `--project=ui`, but no `ui` project exists in config
- ❌ `npm run debug` — references `--project=debug`, but no `debug` project exists in config
- ✅ `npm run api` — runs tests filtered with `@api` tag (works correctly)
- ✅ `npm run ft` — runs tests filtered with `@ft` tag (works correctly)
- ✅ `npm run staging` — runs tests with staging environment and `@ft` tag (works correctly)
- ✅ `npm run lh` — Lighthouse invocation (if configured)

**Available projects in `playwright.config.ts`:**
- `chromium` — runs UI tests tagged with `@ui` on Chromium
- `firefox` — runs UI tests tagged with `@ui` on Firefox
- `api` — runs API tests tagged with `@api`

For reliable test execution, use the examples in the "Running tests (examples)" section below or update the npm scripts to match the actual project names.

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
  - `api` project: filters tests with `@api` tag, uses API base URL
  - `chromium` project: filters tests with `@ui` tag, runs on Chromium browser
  - `firefox` project: filters tests with `@ui` tag, runs on Firefox browser
  - Retries: 1 (configured in config file)
  - Timeouts: 2 minutes per test, 3 hours global timeout

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

- **Script errors:** If you get "Project 'ui' not found" when running `npm run ui` or `npm run uim`, use `npx playwright test --project=chromium` instead. The `ui` and `debug` projects don't exist in the config.
- **Browsers missing:** If browsers are missing, run:

```powershell
npx playwright install
```

- **Allure commands fail:** Ensure `allure-commandline` is installed or call via `npx`.
- **Flaky tests:** Check `playwright.config.ts` for `retries`, `trace`, and `screenshot` settings. Retries are set to 1, and traces are retained on failure.

## Contributing

- Open an issue for proposed changes or submit a PR.
- Keep Playwright tests focused, use tags (`@api`, `@ui`, `@ft`) and page objects for maintainability.

## Contact

For questions about this repository, reach out to the repository owner or maintainer.
