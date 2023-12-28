import { $ } from '@wdio/globals'
import Page from './page.js';

  class LoginPage extends Page {

    get inputUsernameField() {
      return $("#username");
    }

    get inputPasswordField() {
      return $("#password");
    }

    get btnSignIn() {
      return $('button[type="submit"]');
    }

    get errorMsg() {
      return $("#username-helper-text");
    }

    get errorMsgInvalidCredentials() {
        return $("[data-test='signin-error']");
    }

    async clickBtnSignIn() {
      await this.btnSignIn.click();
    }

    get signUpLink() {
      return $('a[data-test="signup"]');
    }

    async clickSignUpLink() {
      await this.signUpLink.click();
    }

    async login(username, password) {
      await this.inputUsernameField.setValue(username);
      await this.inputPasswordField.setValue(password);
      await this.btnSignIn.click();
    }

    async inputPasswordValid(password) {
      await this.inputPasswordField.setValue(password);
    }

    async inputUserNameValid(username) {
        (await this.inputUsernameField).setValue(username);
    }

    async inputPasswordInvalid(randomPassword) {
        (await this.inputPasswordField).setValue(randomPassword);
    }

    async inputUserNameInvalid(randomUsername) {
      (await this.inputUsernameField).setValue(randomUsername);
    }

    open() {
      return super.open("signin");
    }
  };

export default new LoginPage();
