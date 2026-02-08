// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Load .env file if it exists (for local development)
// In CI/CD, environment variables are set by the workflow/container
dotenv.config({ path: path.resolve(__dirname, ".env"), override: false });
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: process.env.CI ? "dot" : "list",
  retries: 0,
  workers: process.env.CI ? 2 : 1,

  use: {
    trace: "on-first-retry",
    headless: true,
    baseURL: process.env.ENV_STAGING_URL || 'https://opensource-demo.orangehrmlive.com/',
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
