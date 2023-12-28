import { $ } from "@wdio/globals";
import Page from "./page.js";
import dataLayer from "../../data/dataLayer.js";

class SettingsPage extends Page {
    get phoneNumberField() {
        return $("#user-settings-phoneNumber-input");
    }

    get lastNameField() {
        return $("#user-settings-lastName-input");
    }

    async inputLastNameValid() {
        (await this.lastNameField).setValue(dataLayer.checkLastName);
    }

    async inputPhoneNumInv() {
        await this.phoneNumberField.setValue(dataLayer.phoneInvalid);
    }

    get saveBtn() {
        return $('[data-test="user-settings-submit"]');
    }

    get errorMsgEmptyPhoneNumField() {
        return $("#user-settings-phoneNumber-input-helper-text");
    }

    async clickSaveBtn() {
        (await this.saveBtn).click();
    }
}
export default new SettingsPage();
