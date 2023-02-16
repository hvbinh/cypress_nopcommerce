/// <reference types="cypress" />

import {NotLoginPageUI} from "../PageUI/NotLoginPageUI"

const notLoginPageUI = new NotLoginPageUI();

export class NotLoginPagePO{
    clickToRegisterLink()
    {
        cy.xpath(notLoginPageUI.REGISTER_LINK).click();
    }
    clickToLoginLink()
    {
        cy.xpath(notLoginPageUI.LOGIN_LINK).click();
    }

}