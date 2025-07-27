
Feature: Sample Test

    Background: Login Test
        Given I am on the home page
        Then I click on the Login Tab
        Then I enter my email address
        Then I enter my password
        Then I click on the Login button


    Scenario: Verify user can Add Product to cart
        Then I click on View product
        Then I click on Add to Cart
        Then I click on continue Shopping


    Scenario: Verify user can edit product in cart
        Then I click on View product
        Then I click on Add to Cart
        Then I click View Cart
        Then I Edit the qunatity of the Product
        Then I click on Add to Cart
        Then I click on continue Shopping

    Scenario: Verify user can Delete Product from Cart
        Then I click on View product
        Then I click on Add to Cart
        Then I click View Cart
        Then I click on Delete Button
        Then I check the cart is empty

 
    Scenario: Verify Invalid Login
        Then I click on Logout Button
        Then I enter Invalid Email Address
        Then I enter Invalid password
        Then I click on the Login button
        Then I verify the system displayed an error message






