import { defineConfig, devices } from '@playwright/test';
import baseEnvUrl from './tests/utils/urls';

/**
 * Playwright Test Configuration
 * Configures test execution settings, reporters, timeouts, and browser projects
 * 
 * Note: To use environment variables, install dotenv package:
 * https://github.com/motdotla/dotenv
 */
export default defineConfig({
  testDir: './tests',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  
  /* Retry failed tests once (can be configured per CI environment) */
  retries: 1,
  
  /* Number of parallel workers for test execution */
  workers: 4,
  
  /* Reporters configuration */
  reporter: [
    ['html', { open: 'never' }],
    ["allure-playwright"],
  ],
  
  /* Expect assertions timeout: 6 seconds for validation checks */
  expect: {
    timeout: 6000,
  },
  
  /* Test timeout: 2 minutes per test */
  timeout: 2 * 60 * 1000,
  
  /* Global timeout: 3 hours for entire test suite execution */
  globalTimeout: 3 * 60 * 60 * 1000,
  
  /* Shared settings for all projects */
  use: {
    /* Collect trace only when test fails for debugging */
    trace: 'retain-on-failure',
    
    /* Take screenshot on failure */
    screenshot: 'on',
    
    /* Run browsers in headless mode */
    headless: true,
    
    /* Base URL for UI tests */
    baseURL: baseEnvUrl.test.ui
  },

  /* Configure test projects for different browsers and API tests */
  projects: [
    {
      name: 'api',
      grep: /@api/,
      use: {
        baseURL: baseEnvUrl.test.api,
        trace: 'on'
      },
    },

    {
      name: 'chromium',
      grep: /@ui/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 920 },
        trace: 'retain-on-failure',
      },
    },

    {
      name: 'firefox',
      grep: /@ui/,
      use: {
        ...devices['Desktop Firefox'],
        video: 'retain-on-failure',
      },
    },
  ],
});