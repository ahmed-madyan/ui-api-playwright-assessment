# UI API Playwright Assessment

A Playwright test automation framework for API and UI testing with Allure and HTML reporting.

## Setup

First, clone the repository and install dependencies:

```powershell
git clone https://github.com/ahmed-madyan/falirstech-playwright-assessment
cd falirstech-playwright-assessment
npm install
npx playwright install
```

If you want to use Allure reports, install the CLI:

```powershell
npm i -D allure-commandline
```

## Running Tests

You can run tests using npm scripts or directly with Playwright:

**Using npm scripts:**
- `npm run api` - Run API tests
- `npm run ft` - Run tests tagged with `@ft`
- `npm run staging` - Run staging tests

**Using Playwright directly:**
```powershell
# Run all tests
npx playwright test

# Run specific project
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=api

# Run a specific test file
npx playwright test tests/ui/specs/login.spec.ts

# Run by tag
npx playwright test --grep @api

# Debug mode (opens browser)
npx playwright test tests/ui/specs/login.spec.ts --project=chromium --headed
```

## Viewing Reports

After running tests, you can view results in two ways:

**Allure Report:**
```powershell
npx allure generate ./allure-results -o ./allure-report --clean
npx allure open ./allure-report
```

**Playwright HTML Report:**
```powershell
npx playwright show-report
```

## Project Structure

```
tests/
  api/          - API test specs
  ui/           - UI test specs, pages, and fixtures
  utils/        - Utilities (urls.ts)
playwright.config.ts
package.json
```

## Notes

- Base URLs are configured in `tests/utils/urls.ts`
- The framework includes three projects: `chromium`, `firefox`, and `api`
- Tests are configured with 1 retry and 2-minute timeout per test
