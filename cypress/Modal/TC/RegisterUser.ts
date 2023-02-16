/// <reference types="cypress-xpath"/>

import { NotLoginPageUI } from "../PageUI/NotLoginPageUI";
import { NotLoginPagePO } from "../PagePO/NotLoginPagePO";
import { sys } from "../../../node_modules/typescript/lib/typescript";

const notLoginPagePO = new NotLoginPagePO();

describe('Register a user', () => {
    it('Verify that register a user successfully', () => {
        cy.visit("");
        notLoginPagePO.clickToRegisterLink();
        
    });
    
});
