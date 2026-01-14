import homePage from '../../support/page_object_model/homepage';
import loginPage from '../../support/page_object_model/loginpage';

describe("Login Scenario", () => {
    beforeEach(() => {
        cy.fixture('login').as('login');

        // Open the website
        cy.VisitAndClickMakeAppoinmentButton();
    })

    it('Login Success', function () {
        loginPage.loginButton().should('exist');
        cy.get('@login').then((login) => {
            loginPage.fillUsername().type(login.correctUsername);
            loginPage.fillPassword().type(login.correctPassword);    
        })
        loginPage.loginButton().click();
        // Validate Login Success
        homePage.reAdmissionCheckbox().should('exist');
    })

    it('login Failed', function () {
        loginPage.loginButton().should('exist');
        cy.get('@login').then((login) => {
            loginPage.fillUsername().type(login.incorrectUsername);
            loginPage.fillPassword().type(login.incorrectPassword);    
        })
        loginPage.loginButton().click();
        // Validate Login Failed
        homePage.reAdmissionCheckbox().should('not.exist');
        loginPage.failedLoginTextMessage().should('exist');
        loginPage.failedLoginTextMessage()
        .should('have.text', 'Login failed! Please ensure the username and password are valid.');
    })
})