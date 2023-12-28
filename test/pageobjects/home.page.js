import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {

  get btnLogout() {
    return $('[data-test="sidenav-signout"]');
  }

  clickLogoutBtn() {
    this.btnLogout.click();
  }

  get friendsLink() {
    return $('//*[text()="Friends"]');
  }

  clickFriendaLink() {
    this.friendsLink.click();
  }

  get mineLink() {
    return $('//*[text()="Mine"]');
  }

  clickMineLink() {
    this.mineLink.click();
  }

  get notificationLink() {
    return $('a[data-test="nav-top-notifications-link"]');
  }

  clickNotificationLink() {
    this.notificationLink.click();
  }

  get bankAccLink() {
    return $('//*[text()="Bank Accounts"]');
  }

  clickBankAccLink() {
    this.bankAccLink.click();
  }

  get createBtn() {
    return $('[data-test="bankaccount-new"]');
  }

  clickCreateBtn() {
    this.createBtn.click();
  }

  get bankNameInputField() {
    return $("#bankaccount-bankName-input");
  }

  get routingNumberInputField() {
    return $("#bankaccount-routingNumber-input");
  }

  get accountNumberInputField() {
    return $("#bankaccount-accountNumber-input");
  }

  get newBtn() {
    return $("[data-test='nav-top-new-transaction']");
  }

  get myAccountLink() {
    return $("[data-test='sidenav-user-settings']");
  }

  get firstTransaction() {
    return $(
      "div > div > div:nth-child(1) > li > div > div > div:nth-child(1)"
    );
  }

  get filterByDateDropdown() {
    return $("[data-test='transaction-list-filter-date-range-button']");
  }

  get calendarForm() {
    return $("[aria-label='Calendar']");
  }

  get filterByAmountDropdown() {
    return $("[data-test='transaction-list-filter-amount-range-button']");
  }

  get amountRangeForm() {
    return $("[data-test='transaction-list-filter-amount-range']");
  }

  async clickFilterByAmountDropdown() {
    (await this.filterByAmountDropdown).click();
  }

  async clickFilterByDateDropdown() {
    (await this.filterByDateDropdown).click();
  }

  async clickFirstTransaction() {
    (await this.firstTransaction).click();
  }

  async clickMyAccountLink() {
    (await this.myAccountLink).click();
  }

  async inputBankName(randomName) {
    (await this.bankNameInputField).setValue(randomName);
  }

  async inputRoutingNumber(randomNumber) {
    (await this.routingNumberInputField).setValue(randomNumber);
  }

  async clickNewBtn() {
    (await this.newBtn).click();
  }
}

export default new HomePage();
