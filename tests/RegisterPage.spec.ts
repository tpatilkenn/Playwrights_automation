import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";
import {
  RegisterButtonIcon,
  GenderName,
  BASE_URL,
  PASSWORD,
  ConfirmPassword,
  Email,
  FirstName,
  LastName,
} from "../utils/envConfig";
import { RegisterPageLocators } from "../Locators/RegisterPageLocators";

test("Register Page validation", async ({ page }) => {
  const registerPageObj = new RegisterPage(page);

  await page.goto(BASE_URL);
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
  //await registerPage.RegisterPage('')

  await registerPageObj.registerPage(
    BASE_URL,
    GenderName,
    RegisterButtonIcon,
    FirstName,
    LastName,
    Email,
    PASSWORD,
    ConfirmPassword,
  );

  //const gender: string = "male";

  //if (gender === "male") {
  await page.locator("#gender-male").check();
  //} else {
  //  await page.locator("#gender-female").check();
  //}

  await page.fill(RegisterPageLocators.FirstName, "Denial");
  await page.fill(RegisterPageLocators.LastName, "Mark");
  await page.waitForTimeout(5000);

  await page.locator("#Email").fill("Register0123@gmail.com");

  await expect(page.locator("#Email")).toHaveValue("Register0123@gmail.com");

  await page.locator("#Password").fill("Demo@123");
  await expect(page.locator("#Password")).toHaveValue("Demo@123");

  await page.locator("#ConfirmPassword").fill("Demo@123");
  await expect(page.locator("#ConfirmPassword")).toHaveValue("Demo@123");

  await page.locator("#register-button").click(); // Register Page validation is completed.
  //  await expect(page.getByText('Registration completed')).toBeVisible();
  //const resitercompleted = page.waitForTimeout(5000);

  // Check whether email already exists
  const emailExists = page.getByText("Email already exists");

  if (await emailExists.isVisible()) {
    console.log("Email already registered. Proceeding to Login.");

    await page.getByRole("link", { name: "Log in" }).click();
  } else {
    console.log("New email. Registration successful.");

    // await expect(page.getByText('Registration completed')).toBeVisible();

    await expect(await page.getByRole("link", { name: "Log in" }).click())
      .rejects;
  }
});
