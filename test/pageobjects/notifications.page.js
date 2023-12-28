import { $ } from "@wdio/globals";
import Page from "./page.js";

class NotificationsPage extends Page {
    get dismissButton() {
        return $("ul li:first-child button");
    }
}

export default new NotificationsPage();
