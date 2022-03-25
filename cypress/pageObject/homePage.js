class homePage{

    navigateToHomePage(){
       return cy.visit(Cypress.env('url'))
    }

}

export default homePage