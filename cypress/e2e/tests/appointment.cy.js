import homePage from '../../support/page_object_model/homepage';
import loginPage from '../../support/page_object_model/loginpage';

describe("Appointment Scenario", () => {
    beforeEach(() => {
        cy.fixture('login').as('login');
        cy.fixture('appointment').as('appointment');

        // Open the Website
        cy.VisitAndClickMakeAppoinmentButton();
    })

    it('Make Appointment Success', function () {
        loginPage.loginButton().should('exist');

        cy.get('@login').then((login) => {
            loginPage.fillUsername().type(login.correctUsername);
            loginPage.fillPassword().type(login.correctPassword);    
        })
        
        loginPage.loginButton().click();
        // Validate Login Success
        homePage.reAdmissionCheckbox().should('exist');
        
        //homePage.dropdownFacility().click();
        homePage.optionFacility();
        homePage.radioHealthcare().click();
        
        cy.get('@appointment').then((appointment) => {
            homePage.fieldDate().click().type(appointment.date).type('{enter}').type('{esc}');
            homePage.fieldComment().type(appointment.comment);            
        })
        
        homePage.reAdmissionCheckbox().click();
        homePage.buttonBookAppointment().click();

        homePage.textAppointmentConfirmation().should('exist');
    })
})