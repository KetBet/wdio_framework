import { $ } from "@wdio/globals";
import Page from "./page.js";

class BankAccPage extends Page {

get bankNameInputField() {
    return $("#bankaccount-bankName-input");
  }

  get routingNumberInputField() {
    return $("#bankaccount-routingNumber-input");
  }

  get accountNumberInputField() {
    return $("#bankaccount-accountNumber-input");
  }

  get saveBtn() {
    return $('[data-test="bankaccount-submit"]');
  }

  get deleteBtn() {
    return $(
      "div > div > div > ul > li:nth-child(1) > div > div:nth-child(2) > button"
    );
  }

  async inputBankName(randomBankName) {
    (await this.bankNameInputField).setValue(randomBankName);
  }

  async inputRoutingNumber(randomRoutNumber) {
    (await this.routingNumberInputField).setValue(randomRoutNumber);
  }

  async inputAccNumber(randomAccNumber) {
    await this.accountNumberInputField.setValue(randomAccNumber);
  }

  async clickSaveBtn() {
    await this.saveBtn.click();
  }
}
  export default new BankAccPage();