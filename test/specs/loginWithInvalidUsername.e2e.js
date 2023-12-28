import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import { faker } from "@faker-js/faker";

const password = process.env.SIGNIN_PASSWORD;

describe("Login with invalid Username", () => {
  it("should not login with invalid username", async () => {
    await loginPage.open();

    await loginPage.inputUserNameInvalid(faker.internet.userName());
    await loginPage.inputPasswordValid(password);
    await loginPage.clickBtnSignIn();
    await expect(browser).toHaveUrl("http://localhost:3000/signin");
    await expect(loginPage.errorMsgInvalidCredentials).toHaveText(
      "Username or password is invalid"
    );
  });
});
