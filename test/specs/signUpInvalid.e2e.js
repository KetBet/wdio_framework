import { expect } from "@wdio/globals";
import signUpPage from "../pageobjects/signUp.page.js";

describe("Invalid sign up", () => {
  it("should not sign up with invalid credentials", async () => {
    await signUpPage.open();

    await signUpPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("http://localhost:3000/signup");
  });
});
