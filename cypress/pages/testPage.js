class testPage{
    loginTab = "a[href='/login']"
    emailAddressField = "input[data-qa='login-email']"
    passwordField = "input[placeholder='Password']"
    loginButton = "button[data-qa='login-button']"
    viewProductLink = "a[href='/product_details/1']"
    addtoCartButton = "button[type='button']"
    continueButton = ".btn.btn-success.close-modal.btn-block"
    viewCartLink = "//u[normalize-space()='View Cart']"
    quantityField = "#quantity"
    deleteBtn = ".cart_quantity_delete"
    emptyVerified = "#empty_cart"
    logoutButton = "a[href='/logout']"



    clickLoginTab(){
        cy.get(this.loginTab).click()
    }
    enterEmailAddress(){
        cy.get(this.emailAddressField).type("gbengdan@gmail.com")
    }
    enterPassword(){
        cy.get(this.passwordField).type("Gbenga1@")
    }
    clickLogin(){
        cy.get(this.loginButton).click()
    }

    clickViewProduct(){
        cy.get(this.viewProductLink)
        .scrollIntoView({duration:2000})
        .click()
    }
    clickAddtoCart(){
        cy.get(this.addtoCartButton).click()
    }
    clickContinueShopping(){
        cy.get(this.continueButton).click()
    }
    editCartBtn(){
        cy.xpath(this.viewCartLink).click()
    }
    editQuantity(){
        cy.get("a[href='/product_details/1']").click()
        cy.get(this.quantityField)
        .clear()
        .type('5')
    }

    deleteProduct(){
        cy.get(this.deleteBtn).click()
    }
    verifyEmptyCart(){
        cy.get(this.emptyVerified)
        .should('contain','Cart is empty!')
    }
    clickLogout(){
      cy.get(this.logoutButton).click()  
    }
    enterInvalidEmail(){
        cy.get(this.emailAddressField).type('invlaidemail@gmail.com')
    }
    enterInvalidPassword(){
        cy.get(this.passwordField).type('invalid password')
    }
    verifyErrorMessage(){
        cy.contains('Your email or password is incorrect!')
    }



}
export default testPage