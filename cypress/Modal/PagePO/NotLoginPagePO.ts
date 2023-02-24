/// <reference types="cypress" />
import { BasePage } from "../Common/BasePage";
import { NotLoginPageUI } from "../PageUI/NotLoginPageUI";

const notLoginPageUI = new NotLoginPageUI();
const basePage = new BasePage();

export class NotLoginPagePO {
    clickToRegisterLink() {
        basePage.clickToElement(notLoginPageUI.REGISTER_LINK);
    }
    clickToLoginLink() {
        basePage.clickToElement(notLoginPageUI.LOGIN_LINK);
    }
}
