import { defineConfig, devices } from '@playwright/test';
import baseEnvUrl from './tests/utils/urls';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  retries: 1,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 2 : 1,
  workers: 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: [
    ['html', { open: 'never' }],
    ["allure-playwright"],
  ],
  expect: {
    timeout: 6000, //timeout for validation
  },
  timeout: 2*60*1000, //General timeout for the test run is 1min
  globalTimeout: 3*60*60*1000, //General timeout for the total run is 3hr
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace:'retain-on-failure',
    screenshot: 'on',
    headless: true,
    // actionTimeout:6000, 
    // navigationTimeout:30000,
    baseURL: baseEnvUrl.test.ui 
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api',
      grep: /@api/,
      use: {
        baseURL: baseEnvUrl.test.api,
        trace:'on'
       },
    },
    

    {
      name: 'chromium',
      grep: /@ui/,
      use: { ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 920 },
        trace:'retain-on-failure',
       },
    },

    {
      name: 'firefox',
      grep: /@ui/,
      use: { ...devices['Desktop Firefox'],
        video: 'retain-on-failure',
      },
    },

  ],
});