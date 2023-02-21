/// <reference types="cypress-xpath"/>

export class BasePage{
    openPageURL(url: string)
    {
        cy.visit(url);
    }
    clickToElement(locator: string)
    {
        cy.xpath(locator).should('be.enabled').click();
    }
    sendkeyToElement(locator: string, value: string)
    {
        cy.xpath(locator).should('be.visible').type(value);
    }
}