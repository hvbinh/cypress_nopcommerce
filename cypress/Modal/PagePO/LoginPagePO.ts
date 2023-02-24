/// <reference types="cypress" />
 import { BasePage } from "../Common/BasePage";
import {LoginPageUI} from "../PageUI/LoginPageUI"
 

 const loginPageUI = new LoginPageUI();
 const basePage = new BasePage();


export class LoginPagePO{
    inputToEmailTextbox(email: string)
    {
        basePage.sendkeyToElement(loginPageUI.EMAIL_TEXTBOX,email);
    }
    inputToPasswordTextbox(password: string)
    {
        basePage.sendkeyToElement(loginPageUI.PASSWORD_TEXTBOX,password);
    }
    clickToLoginButton()
    {
        basePage.clickToElement(loginPageUI.LOGIN_BUTTON);
    }

}