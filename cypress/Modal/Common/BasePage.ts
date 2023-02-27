/// <reference types="cypress-xpath"/>

export class BasePage{
    openPageURL(url: string)
    {
        cy.visit(url);
    }
    clickToElement(locator: string)
    {
        cy.xpath(locator).should('be.visible').click();
    }
    sendkeyToElement(locator: string, value: string)
    {
        cy.xpath(locator).clear().should('be.visible').type(value);
    }
    verifyText(locator: string, expectedText: string)
    {
        cy.xpath(locator).should("contain",expectedText);
    }
}