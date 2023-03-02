/// <reference types="cypress-xpath"/>

import { LoginPagePO } from "../PagePO/LoginPagePO";
import {LoginPageUI} from "../PageUI/LoginPageUI";
import { GlobalConstant } from "../GlobalConstant";



const loginPagePO = new LoginPagePO();
const adminUrl = new GlobalConstant();


describe('Login function', () => {
    it('Verify that login to admin successfully', () => {
        cy.visit(adminUrl.NOPCOMMERCE_ADMIN_URL);
        loginPagePO.inputToEmailTextbox("admin@yourstore.com");
        loginPagePO.inputToPasswordTextbox("admin");
        loginPagePO.clickToLoginButton();
        loginPagePO.verifyFullNameDisplayAfterLoginSuccessfully("John Smith");
        loginPagePO.clickToCatalogIcon();
        loginPagePO.clickToProduct();
        loginPagePO.inputToSearchProductTextbox("Lenovo IdeaCentre 600 All-in-One PC");
        loginPagePO.clickToSearchProductButton();
        loginPagePO.verifyProductResultContains("Lenovo IdeaCentre 600 All-in-One PC");
    });
    it('Verify that search product with checked', () => {
        
        cy.visit(adminUrl.NOPCOMMERCE_ADMIN_URL);
        loginPagePO.inputToEmailTextbox("admin@yourstore.com");
        loginPagePO.inputToPasswordTextbox("admin");
        loginPagePO.clickToLoginButton();
        loginPagePO.verifyFullNameDisplayAfterLoginSuccessfully("John Smith");
        loginPagePO.clickToCatalogIcon();
        loginPagePO.clickToProduct();
        loginPagePO.inputToSearchProductTextbox("Lenovo IdeaCentre 600 All-in-One PC");
        loginPagePO.selectToCategoryDropdown("Computers");
        loginPagePO.clickToSearchCategoryCheckbox();
        loginPagePO.clickToSearchProductButton();
        loginPagePO.verifyProductResultContains("Lenovo IdeaCentre 600 All-in-One PC");
        

    });
    
});