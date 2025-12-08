# Falirstech Playwright Assessment

Playwright test automation framework with API and UI tests, plus Allure and HTML reporting.

## Getting Started

Clone the repository:

```powershell
git clone https://github.com/ahmed-madyan/falirstech-playwright-assessment
cd falirstech-playwright-assessment
```

Install dependencies and browsers:

```powershell
npm install
npx playwright install
```

For Allure reports, install the CLI (optional):

```powershell
npm i -D allure-commandline
```

## Running Tests

The config has three projects: `chromium`, `firefox`, and `api`. Some npm scripts in `package.json` reference projects that don't exist (`ui`, `debug`), so they won't work.

Working npm scripts:
- `npm run api` - runs API tests
- `npm run ft` - runs tests tagged with `@ft`
- `npm run staging` - runs staging tests with `@ft` tag

Direct Playwright commands (recommended):

```powershell
# Run all tests
npx playwright test

# Run specific project
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=api

# Run specific file
npx playwright test tests/ui/specs/login.spec.ts

# Run by tag
npx playwright test --grep @api

# Debug mode
npx playwright test tests/ui/specs/login.spec.ts --project=chromium --headed
```

## Reports

After running tests, you'll get results in `allure-results/` and `playwright-report/`.

View Allure report:
```powershell
npx allure generate ./allure-results -o ./allure-report --clean
npx allure open ./allure-report
```

View Playwright HTML report:
```powershell
npx playwright show-report
```

## Configuration

Base URLs are in `tests/utils/urls.ts`. The `playwright.config.ts` sets up:
- Test directory: `./tests`
- Reporters: HTML and Allure
- Projects: `api` (filters `@api`), `chromium` and `firefox` (filter `@ui`)
- Retries: 1
- Timeouts: 2 minutes per test, 3 hours global

## Project Structure

```
tests/
  api/          - API test specs
  ui/           - UI test specs, pages, fixtures
  utils/        - Utilities (urls.ts)
playwright.config.ts
package.json
```

## Troubleshooting

If you see "Project 'ui' not found", use `--project=chromium` instead. The `ui` project doesn't exist in the config.

Missing browsers? Run `npx playwright install`.

For Allure issues, make sure `allure-commandline` is installed or use `npx`.
