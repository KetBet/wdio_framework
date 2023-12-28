import { $ } from "@wdio/globals";
import Page from "./page.js";
import dataLayer from "../../data/dataLayer.js";

class TransactionsPage extends Page {
  get firstContactInTheList() {
    return $("[data-test='user-list-item-qywYp6hS0U']");
  }

  get transactionForm() {
    return $("[data-test='transaction-create-form']");
  }

  get amountInputField() {
    return $("#amount");
  }

  get noteInputField() {
    return $("#transaction-create-description-input");
  }

  get payBtn() {
    return $("[data-test='transaction-create-submit-payment']");
  }

  get completeStep() {
    return $('//*[text()="Complete"]');
  }

  get errorMsgInvalidAmount() {
    return $("#transaction-create-amount-input-helper-text");
  }

  get newCommentField() {
    return $("[placeholder='Write a comment...']");
  }

  get likeIcon() {
    return $(
      "div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.MuiGrid-align-items-xs-center > div:nth-child(2)"
    );
  }

  async clickPayBtn() {
    (await this.payBtn).click();
  }

  async inputAmount(randomAmount) {
    (await this.amountInputField).setValue(randomAmount);
  }

  async inputNote(randomNote) {
    (await this.noteInputField).setValue(randomNote);
  }

  async clickOnTheFirstContact() {
    (await this.firstContactInTheList).click();
  }
}

export default new TransactionsPage();
