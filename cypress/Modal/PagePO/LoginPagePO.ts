/// <reference types="cypress" />
 import {LoginPageUI} from "../PageUI/LoginPageUI"
 

 const loginPageUI = new LoginPageUI();


export class LoginPagePO{
    inputToEmailTextbox(email: string)
    {
        cy.xpath(loginPageUI.EMAIL_TEXTBOX).clear().type("admin@yourstore.com");
    }
    inputToPasswordTextbox(password: string)
    {
        cy.xpath(loginPageUI.PASSWORD_TEXTBOX).clear().type("admin");
    }
    clickToLoginButton()
    {
        cy.xpath(loginPageUI.LOGIN_BUTTON).should('be.enabled').click();
    }

}