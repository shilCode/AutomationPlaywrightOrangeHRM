import { Locator, Page } from "playwright";

export class SideBar {
  public sideBarFullPanel: Locator;
  public sideBarHideBtn: Locator;
  public mainMenuButton: Locator;
  public adminComponent: Locator;
  public pimComponent: Locator;
  public leaveComponent: Locator;
  public timeComponent: Locator;
  public recruitmentComponent: Locator;
  public myInfoComponent: Locator;
  public performanceComponent: Locator;
  public directoryComponent: Locator;
  public maintenanceComponent: Locator;
  public buzzComponent: Locator;
  public searchBar: Locator;
  public dashboardComponent: Locator;
  public claimComponent: Locator;
  constructor(page: Page) {
    this.sideBarFullPanel = page.locator('[class="oxd-sidepanel-body"]');
    this.sideBarHideBtn = this.sideBarFullPanel.getByRole("button");
    this.mainMenuButton = this.sideBarFullPanel.locator(
      '[class*="oxd-main-menu-button"]',
    );
    this.adminComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/admin/viewAdminModule"]',
    );
    this.pimComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/pim/viewPimModule"]',
    );
    this.leaveComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/leave/viewLeaveModule"]',
    );
    this.timeComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/time/viewTimeModule"]',
    );
    this.recruitmentComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
    );
    this.myInfoComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/pim/viewMyDetails"]',
    );
    this.performanceComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/performance/viewPerformanceModule"]',
    );
    this.dashboardComponent = this.sideBarFullPanel.getByRole("link", {
      name: "Dashboard",
    });
    this.directoryComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/directory/viewDirectory"]',
    );
    this.maintenanceComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
    );
    this.buzzComponent = this.sideBarFullPanel.locator(
      '[href="/web/index.php/buzz/viewBuzz"]',
    );
    this.searchBar = this.sideBarFullPanel.locator('[placeholder="Search"]');
    this.claimComponent = this.sideBarFullPanel.getByRole("link", {
      name: "Claim",
    });
  }
}
