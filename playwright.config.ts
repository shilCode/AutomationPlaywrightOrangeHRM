// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env"), override: false });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: process.env.CI ? "dot" : "list",
  retries: 0,
  workers: process.env.CI ? 2 : 1,

  use: {
    trace: "on-first-retry",
    headless: true,
    baseURL: process.env.ENV_STAGING_URL 
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
