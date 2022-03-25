/// <reference types="cypress" />

import HomePage from "../../pageObject/homePage";

 
describe('Main Page test', () => {
    const home_page = new HomePage()    //init HomePage --> PageObject

    it('Visit Page and serach exact product', () => {
        home_page.navigateToHomePage()
        
        cy.findProduct('Iphone 13')
        cy.get('.l-products').first().click();
        
    })
  })