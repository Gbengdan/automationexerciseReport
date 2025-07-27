
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import testPage from '../../pages/testPage';
const log = new testPage

Given('I am on the home page', () => {
    cy.visit('/')
})
Then('I click on the Login Tab', () => {
    log.clickLoginTab()
})
Then('I enter my email address', () => {
    log.enterEmailAddress()
})
Then('I enter my password', () => {
    log.enterPassword()
})
Then('I click on the Login button', () => {
    log.clickLogin()
})


// ADD PRODUCT TO CART
Then('I click on View product', () => {
    log.clickViewProduct()
})
Then('I click on Add to Cart', () => {
    log.clickAddtoCart()
})
Then('I click on continue Shopping', () => {
    log.clickContinueShopping()
})

//EDIT PRODUCT IN CART
Then('I click View Cart', () => {
    log.editCartBtn()
})
Then('I Edit the qunatity of the Product', () => {
    log.editQuantity()
})
Then('I click on Delete Button', () => {
    log.deleteProduct()
})
Then('I check the cart is empty', () => {
    log.verifyEmptyCart()
})
Then('I click on Logout Button', () => {
    log.clickLogout()
})
Then('I enter Invalid Email Address', () => {
    log.enterInvalidEmail()
})
Then('I enter Invalid password', () => {
    log.enterInvalidPassword()
})
Then('I verify the system displayed an error message', () => {
    log.verifyErrorMessage()
})
