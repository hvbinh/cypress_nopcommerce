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

        cy.xpath("//a[@class='nav-link disabled']").should("have.text","John Smith");
        cy.title().should("include", "Dashboard / nopCommerce administration");
        cy.url("include","https://admin-demo.nopcommerce.com/admin/");
        cy.xpath("//i[contains(@class,'fa-book')]").click();
        cy.xpath("(//p[contains(text(),' Products')])[1]").click();
        cy.xpath("//input[@id='SearchProductName']").type("Apple MacBook Pro 13-inch");
        cy.xpath("//button[@id='search-products']").click();
        cy.xpath("(//td)[3]").should("have.text","Apple MacBook Pro 13-inch");
        

    });
    it('Verify that search product with checked', () => {
        
        cy.visit(adminUrl.NOPCOMMERCE_ADMIN_URL);
        cy.xpath("//input[@id='Email']").clear().type("admin@yourstore.com");
        cy.xpath("//input[@id='Password']").clear().type("admin");
        cy.xpath("//div[@class='topic-block-body']/p").then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log("get text: "+headerText)
            expect(headerText).is.contain("admin@yourstore.com");
        });
        //cy.wait(30000);
        cy.xpath("//button[@type='submit']").should('be.enabled') .click();
        cy.xpath("//a[@class='nav-link disabled']").should("have.text","John Smith");
        cy.title().should("include", "Dashboard / nopCommerce administration");
        cy.url("include","https://admin-demo.nopcommerce.com/admin/");
        cy.xpath("//i[contains(@class,'fa-book')]").click();
        cy.xpath("(//p[contains(text(),' Products')])[1]").click();
        cy.xpath("//input[@id='SearchProductName']").type("Lenovo IdeaCentre 600 All-in-One PC");


        cy.get("select[id='SearchCategoryId']").select("Computers");
        cy.xpath("//input[@id='SearchIncludeSubCategories']").click();
        

    });
    
});