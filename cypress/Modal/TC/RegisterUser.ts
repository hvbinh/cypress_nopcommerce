/// <reference types="cypress-xpath"/>

import { NotLoginPageUI } from "../PageUI/NotLoginPageUI";
import { NotLoginPagePO } from "../PagePO/NotLoginPagePO";
import { sys } from "../../../node_modules/typescript/lib/typescript";
import { RegisterUserPagePO } from "../PagePO/RegisterUserPagePO";
import { GlobalConstant } from "../GlobalConstant";
import { test } from "../test";


const notLoginPagePO = new NotLoginPagePO();
const registerPagePO = new RegisterUserPagePO();
const email = "tony"+registerPagePO.randomNumber()+"@gmail.com";
const url = new GlobalConstant();

describe('Register a user', () => {
    it('Verify that register a user successfully', () => {
        cy.visit(url.NOPCOMMERCE_USER_URL);
        notLoginPagePO.clickToRegisterLink();
        registerPagePO.clickToMaleRadioButton();
        registerPagePO.inputToFirstName("tony");
        registerPagePO.inputToLastName("buoi sang");
        registerPagePO.inputToCompany("test company");
        registerPagePO.inputToPassword("123456");
        registerPagePO.inputToConfirmPassword("123456");
        registerPagePO.selectDay("1");
        registerPagePO.selectMonth("January");
        registerPagePO.selectYear("1987");
        registerPagePO.inputToEmail(email);
        registerPagePO.clickToRegisterButton();
        registerPagePO.verifySuccessfulText("Your registration completed");
        
        
    });
    
});
