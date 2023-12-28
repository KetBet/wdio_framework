import { expect } from "@wdio/globals";
import signUpPage from "../pageobjects/signUp.page.js";
import { faker } from "@faker-js/faker";

const password = process.env.SIGNIN_PASSWORD;

describe("Valid sign up", () => {
  it("should sign up with valid credentials", async () => {
    await signUpPage.open();

    await signUpPage.inputFirstName(faker.person.firstName());
    await signUpPage.inputLastNmame(faker.person.lastName());
    await signUpPage.inputUsername(faker.internet.userName());
    await signUpPage.inputPassword(password);
    await signUpPage.inputConfirmPassword(password);
    await signUpPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("http://localhost:3000/signin");
  });
});
