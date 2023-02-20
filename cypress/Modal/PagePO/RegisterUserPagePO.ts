/// <reference types="cypress" />
import { RegisterPageUI } from "../PageUI/RegisterPageUI";
const registerPageUI = new RegisterPageUI();
export class RegisterUserPagePO {
    clickToMaleRadioButton() {
        cy.xpath(registerPageUI.MALE_RADIO_BUTTON).click();
    }
    inputToFirstName(firstName) {
        cy.xpath(registerPageUI.FIRST_NAME_TEXTBOX).type(firstName);
    }
    inputToLastName(lastName) {
        cy.xpath(registerPageUI.LAST_NAME_TEXTBOX).type(lastName);
    }
    inputToEmail(email) {
        cy.xpath(registerPageUI.EMAIL_TEXTBOX).type(email);
    }
    inputToCompany(company) {
        cy.xpath(registerPageUI.COMPANY_TEXTBOX).type(company);
    }
    inputToPassword(password) {
        cy.xpath(registerPageUI.PASSWORD_TEXTBOX).type(password);
    }
    inputToConfirmPassword(confirmPassword) {
        cy.xpath(registerPageUI.CONFIRM_PASSWORD_TEXTBOX).type(confirmPassword);
    }
    selectDay(day) {
        cy.get(registerPageUI.DAY_SELECT).select(day);
    }
    selectMonth(month) {
        cy.get(registerPageUI.MONTH_SELECT).select(month);
    }
    selectYear(year) {
        cy.get(registerPageUI.YEAR_SELECT).select(year);
        //cy.log(randomNumber());
        cy.log(this.randomNumber());
    }
    randomNumber(): number {
        return Math.floor(Math.random()*9999);
    }
    inputToEmailTextbox(email: string)
    {
        cy.xpath(registerPageUI.EMAIL_TEXTBOX).type(email);
    }
    clickToRegisterButton()
    {
        cy.xpath(registerPageUI.REGISTER_BUTTON).click();
    }
    verifySuccessfulText(text: string)
    {
        cy.xpath(registerPageUI.SUCCESSFUL_TEXT).contains(text);
    }
}
