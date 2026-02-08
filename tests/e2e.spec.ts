import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageobject/shared/LoginPage";
import { SideBar } from "../pageobject/shared/Sidebar";
import { NavBar } from "../pageobject/shared/NavBar";
import { LeavePage } from "../pageobject/pages/LeavePage";

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  expect(page.url()).toMatch(/auth/);
  const login = new LoginPage(page);
  //login
  await login.userName.fill(process.env.USERNAME!||'Admin'); //TODO: add @type/nodes to bypass !
  await login.password.fill(process.env.PASSWORD!||'Admin123'); //TODO: add @type/nodes to bypass !
  await login.submit.click();
});

test("sidebar text assertions and then logout from the navigation menu dropdown is functional", async ({
  page,
}) => {
  // await page.waitForLoadState('domcontentloaded');
  // await page.waitForTimeout(3000);
  // expect(page.url()).toMatch(/dashboard/);
  const sidebar = new SideBar(page);
  await expect(sidebar.sideBarFullPanel).toBeVisible();
  //search
  await expect(sidebar.adminComponent).toContainText("Admin");
  await expect(sidebar.pimComponent).toContainText("PIM");
  await expect(sidebar.leaveComponent).toContainText("Leave");
  await expect(sidebar.timeComponent).toContainText("Time");
  await expect(sidebar.recruitmentComponent).toContainText("Recruitment");
  await expect(sidebar.myInfoComponent).toContainText("My Info");
  await expect(sidebar.performanceComponent).toContainText("Performance");
  await expect(sidebar.dashboardComponent).toContainText("Dashboard");
  await expect(sidebar.directoryComponent).toContainText("Directory");
  await expect(sidebar.maintenanceComponent).toContainText("Maintenance");
  await expect(sidebar.claimComponent).toContainText("Claim");
  await expect(sidebar.buzzComponent).toContainText("Buzz");

  const navBar = new NavBar(page);
  await page.waitForLoadState("networkidle");
  await expect(navBar.navBarFullView).toBeVisible();
  await expect(navBar.userArea).toBeVisible();
  await sidebar.sideBarHideBtn.click();
  await navBar.userArea.click();
  await expect(navBar.userDropdownLogout).toContainText("Logout");
  await navBar.userDropdownLogout.click();
  expect(page.url()).toMatch(/auth/);
});

test.fixme("user can goto leave, select leave type, select dates, add a comment, unsuccessful leave due to not having enough leave", async ({
  page,
}) => {
  expect(page.url()).toMatch(/dashboard/);
  const sidebar = new SideBar(page);
  await sidebar.leaveComponent.click();

  const leavePage = new LeavePage(page);
  await leavePage.applyHeader.click();
  expect(page.url()).toMatch(/applyLeave/);
  await expect(leavePage.applyLeaveFullView).toBeVisible();
  await expect(leavePage.applyLeaveHeading).toContainText("Apply Leave");
  await expect(leavePage.applyLeaveTypesStr).toContainText("Leave Type");
  await leavePage.applyLeaveTypesDropDown.click();
  await leavePage.applyLeaveTypesDropDownOption.click();
  await leavePage.applyLeaveCalenderStartDate.click();
  await expect(leavePage.applyLeaveCalenderViewTodayStr).toContainText("Today");
  await expect(leavePage.applyLeaveCalenderViewCloseStr).toContainText("Close");
  await leavePage.applyLeaveCalenderStartDate.fill("2025-01-01");
  await leavePage.applyLeaveCalenderEndDate.click();
  await leavePage.applyLeaveCalenderEndDate.fill("2025-31-12");
  await leavePage.applyLeaveBtn.click();
  await expect(leavePage.balanceInsufficient).toBeVisible();
});

//example of fixme tag
test.fixme("resetting user leave request", async ({ page }) => {
  expect(page.url()).toMatch(/dashboard/);
  const sidebar = new SideBar(page);
  await sidebar.leaveComponent.click();

  const leavePage = new LeavePage(page);
  await leavePage.myLeave.click();
  await leavePage.resetMyLeave();
});
