import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page.js";
import { faker } from "@faker-js/faker";

const username = process.env.SIGNIN_USERNAME;

describe("Login with invalid Password", () => {
  it("should not login with invalid password", async () => {
    await loginPage.open();

    await loginPage.inputUserNameValid(username);
    await loginPage.inputPasswordInvalid(
      faker.internet.password({ length: 4 })
    );
    await loginPage.clickBtnSignIn();
    await expect(browser).toHaveUrl("http://localhost:3000/signin");
    await expect(loginPage.errorMsgInvalidCredentials).toHaveText(
      "Username or password is invalid"
    );
  });
});
