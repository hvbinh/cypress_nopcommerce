/// <reference types="cypress" />
 import { BasePage } from "../Common/BasePage";
import {LoginPageUI} from "../PageUI/LoginPageUI"
import {DashboardPageUI} from "../PageUI/DashboardPageUI"
 

 const loginPageUI = new LoginPageUI();
 const basePage = new BasePage();
 const dashboardPageUI = new DashboardPageUI();


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
    verifyFullNameDisplayAfterLoginSuccessfully(fullName: string)
    {
        basePage.verifyText(dashboardPageUI.FULL_NAME,fullName);
    }
    clickToCatalogIcon()
    {
        basePage.clickToElement(dashboardPageUI.CATALOG_ICON);
    }
    clickToProduct()
    {
        basePage.clickToElement(dashboardPageUI.PRODUCT_OPTION);
    }
    inputToSearchProductTextbox(productName: string)
    {
        basePage.sendkeyToElement(dashboardPageUI.SEARCH_PRODUCT_TEXTBOX, productName);
    }
    clickToSearchProductButton()
    {
        basePage.clickToElement(dashboardPageUI.SEARCH_PRODUCT_BUTTON);
    }
    verifyProductResultContains(productResult: string)
    {
        basePage.verifyText(dashboardPageUI.PRODUCT_RESULT, productResult);
    }
    selectToCategoryDropdown(dropdownOption: string)
    {
        basePage.selectDropdown(dashboardPageUI.CATEGORY_DROPDOWN,dropdownOption);
    }
    clickToSearchCategoryCheckbox()
    {
        basePage.clickToElement(dashboardPageUI.SEARCH_SUBCATEGORY_CHECKBOX);
    }

}