// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from 'dotenv'
import path from 'path'


dotenv.config({path:path.resolve(__dirname,".env")})
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: process.env.CI ? 'dot' : 'list',
  retries:0,
  workers: process.env.CI ? undefined : undefined,
  
  use: {
    trace: 'on-first-retry',
    headless:true,
    baseURL:'https://opensource-demo.orangehrmlive.com/'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },

  ],

});

