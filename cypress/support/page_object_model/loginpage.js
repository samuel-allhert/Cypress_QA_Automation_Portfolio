class LoginPage{
    // verify Login Button
    loginButton(){
        return cy.get('button[id="btn-login"]');
    }

    // Field Username
    fillUsername(){
        return cy.get('input[id="txt-username"]');
    }

    // Field Password
    fillPassword(){
        return cy.get('input[id="txt-password"]');
    }

    // Failed Login Notification Text
    failedLoginTextMessage(){
        return cy.get('p[class="lead text-danger"]');
    }
}

//export const loginPage = new LoginPage();
export default new LoginPage();