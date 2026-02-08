import { Locator, Page } from "playwright";

export class LoginPage {
  public readonly userName: Locator;
  public readonly password: Locator;
  public readonly submit: Locator;
  public readonly alertInvalidCred: Locator;
  public readonly requiredField: Locator;
  public readonly profilePicDashboard: Locator;
  public readonly forgetPassword: Locator;
  public readonly forgetPasswordTitle: Locator;
  constructor(page: Page) {
    this.userName = page.getByPlaceholder("username");
    this.password = page.getByPlaceholder("password");
    this.submit = page.locator('[type="submit"]');
    this.alertInvalidCred = page.locator('[role="alert"]');
    this.requiredField = page.locator(
      '[class*="oxd-input-field-error-message"]',
    );
    this.profilePicDashboard = page.locator('[alt="profile picture"]');
    this.forgetPassword = page.locator(
      '[class*="orangehrm-login-forgot-header"]',
    );
    this.forgetPasswordTitle = page.locator(
      '[class*="orangehrm-forgot-password-title"]',
    );
  }
}
