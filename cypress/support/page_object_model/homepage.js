class HomePage{
    //Make Appointment Button
    MakeAppointmentButton(){
        return cy.get('a[id="btn-make-appointment"]');
    }

    // Re-Admission Checkbox
    reAdmissionCheckbox(){
        return cy.get('input[id="chk_hospotal_readmission"]');
    }

    // Dropdown Facility
    //dropdownFacility(){
    //    return cy.get('select[id="combo_facility"]');
    //}

    // Option Facility
    optionFacility(){
        const randomIndex = Math.floor(Math.random() * 2) + 1;

        return cy.get('select[id="combo_facility"]').select(randomIndex);
    }

    // Radio Healthcare
    radioHealthcare(){
        const randomIndex = Math.floor(Math.random() * 2) + 1;

        return cy.get('div[class="col-sm-4"] > label > input').eq(randomIndex).check();
    }
    
    // Field Date
    fieldDate(){
        return cy.get('input[placeholder="dd/mm/yyyy"]');
    }
    
    // Field Comment
    fieldComment(){
        return cy.get('textarea[id="txt_comment"]');
    }

    // Button Book Appointment
    buttonBookAppointment(){
        return cy.get('button[id="btn-book-appointment"]');
    }

    // Text Appointment Confirmation
    textAppointmentConfirmation(){
        return cy.get('p[class="lead"]');
    }
}

//export const homePage = new HomePage();
export default new HomePage();