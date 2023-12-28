import { $ } from "@wdio/globals";
import Page from "./page.js";

class SignUpPage extends Page {
    get signUpBtn() {
      return $("[data-test='signup-submit']")
    }

    get errorMsgFirstNameInvalid() {
      return $("#firstName-helper-text");
    }

    get firstNameField() {
      return $("#firstName");
    }

    get lastNameField() {
      return $("#lastName");
    }

    get usernameField() {
      return $("#username");
    }

    get passwordField() {
      return $("#password");
    }

    get confirmPasswordField() {
      return $("#confirmPassword");
    }

    async inputFirstName(randomFirstName) {
      (await this.firstNameField).setValue(randomFirstName);
    }

    async inputLastNmame(randomLastName) {
      (await this.lastNameField).setValue(randomLastName);
    }

    async inputUsername(randomUsername) {
      (await this.usernameField).setValue(randomUsername);
    }

    async inputPassword(password) {
      (await this.passwordField).setValue(password);
    }

    async inputConfirmPassword(password) {
      (await this.confirmPasswordField).setValue(password);
    }

    async clickSignUpBtn() {
      (await this.signUpBtn).click();
    }

  open() {
    return super.open("signup");
  }
}

export default new SignUpPage();
