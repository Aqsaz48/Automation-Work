describe('template spec', () => {

  // Function to create Random Email IDs for repitivie Sign up Form Testing
  function generateRandomEmail() {
    const timestamp = Date.now();
    return `user${timestamp}@example.com`
  }

  beforeEach(() => {
    cy.log('This runs before each test in the suite');
    cy.viewport('macbook-16')

    // Navigate to the Webook website to perform test actions
    cy.visit('https://webook.com/en')
    cy.wait(8000)
  });

  it('Test-1: Should load the Registration Form successfully', () => {

    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
  
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if we have landed successfully on Sign Up Screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

  });

  it('Test-2: Sign Up with Valid Email ID and Valid Password', () => {

    const randomEmail = generateRandomEmail()
    const randomEmail2 = randomEmail
  
    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if we have landed successfully on Sign Up Screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

    // Locate and enter the First Name for the new user
    cy.get('#first_name')
    .should('be.visible')
    .type(Cypress.env('firstName'))

    //// Locate and enter the Last Name for the new user
    cy.get('#last_name')
    .should('be.visible')
    .type(Cypress.env('lastName'))

    // Locate and enter the Email ID for the new user
    cy.get('#email')
    .should('be.visible')
    .type(randomEmail)

    // Locate and enter the Confirmed Email for the new user
    cy.get('#confirm_email')
    .should('be.visible')
    .type(randomEmail2)

  // Locate and enter the Valid Password for the new user
    cy.get('input[name="password"]')
    .should('be.visible')
    .type(Cypress.env('validPassword'))

    // Locate and enter the Mobile Number for the new user
    cy.get('input[name="mobile"]')
    .type(Cypress.env('mobileNumber'))

    // Check Mark the checkbox to Agree Terms and Conditions
    cy.get('input[name="agreeTerms"]')
    .should('be.visible')
    .check()

    // Click on the Create Account Button
    cy.get('button[type="submit"]')
    .should('have.text'," Create Account")
    .should('be.visible')
    .click()

    cy.wait(6000)

    // Verify if we have successfully created an account and landed on the next screen.
    cy.get('.relative.shrink-0 > .gap-1')
    .should('be.visible')

    // Verify that we have successfully signed in and the URl is correct
    cy.url().should('eq', 'https://webook.com/en');

  })

  it('Test-3: Sign Up with Invalid Email ID and valid Password', () => {

    const randomEmail = generateRandomEmail()
    const randomEmail2 = randomEmail
  
    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if we have landed successfully on Sign Up Screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

    // Locate and enter the First Name for the new user
    cy.get('#first_name')
    .should('be.visible')
    .type(Cypress.env('firstName'))

    //// Locate and enter the Last Name for the new user
    cy.get('#last_name')
    .should('be.visible')
    .type(Cypress.env('lastName'))

    // Locate and enter Invalid  Email ID for the new user
    cy.get('#email')
    .should('be.visible')
    .type(Cypress.env('invalidEmail'))

    // Locate and enter the Confirmed Invalid Email for the new user
    cy.get('#confirm_email')
    .should('be.visible')
    .type(Cypress.env('invalidEmail'))

  // Locate and enter the valid Password for the new user
    cy.get('input[name="password"]')
    .should('be.visible')
    .type(Cypress.env('validPassword'))

    // Locate and enter the Mobile Number for the new user
    cy.get('input[name="mobile"]')
    .should('be.visible')
    .type(Cypress.env('mobileNumber'))

    // Check Mark the checkbox to Agree Terms and Conditions
    cy.get('input[name="agreeTerms"]')
    .should('be.visible')
    .check()

    // Click on the Create Account Button
    cy.get('button[type="submit"]')
    .should('have.text'," Create Account")
    .should('be.visible')
    .click()

    cy.wait(4000)

    // Assert the Error Message on Invalid Email ID
    cy.get('.text-error')
    .first()
    .should('have.text',"Invalid Email")
    .should('be.visible')

  })

  it('Test-4: Sign Up with Valid Email ID and Short Password', () => {

    const randomEmail = generateRandomEmail()
    const randomEmail2 = randomEmail
  
    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if we have landed successfully on Sign Up Screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

    // Locate and enter the First Name for the new user
    cy.get('#first_name')
    .should('be.visible')
    .type(Cypress.env('firstName'))

    //// Locate and enter the Last Name for the new user
    cy.get('#last_name')
    .should('be.visible')
    .type(Cypress.env('lastName'))

    // Locate and enter the Email ID for the new user
    cy.get('#email')
    .should('be.visible')
    .type(randomEmail)

    // Locate and enter the Confirmed Email for the new user
    cy.get('#confirm_email')
    .should('be.visible')
    .type(randomEmail2)

  // Locate and enter the Short Password for the new user
    cy.get('input[name="password"]')
    .should('be.visible')
    .type(Cypress.env('shortPassword'))

    // Locate and enter the Mobile Number for the new user
    cy.get('input[name="mobile"]')
    .should('be.visible')
    .type(Cypress.env('mobileNumber'))

    // Check Mark the checkbox to Agree Terms and Conditions
    cy.get('input[name="agreeTerms"]')
    .should('be.visible')
    .check()

    // Click on the Create Account Button
    cy.get('button[type="submit"]')
    .should('have.text'," Create Account")
    .should('be.visible')
    .click()

    cy.wait(4000)

    // Assert the Error Message on Invalid Password
    cy.get('.text-error')
    .should('have.text',"Invalid password")
    .should('be.visible')

  })

  it('Test-5: Sign Up with Valid Email ID and Alphabets Only Password', () => {

    const randomEmail = generateRandomEmail()
    const randomEmail2 = randomEmail
  
    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if we have landed successfully on Sign Up Screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

    // Locate and enter the First Name for the new user
    cy.get('#first_name')
    .should('be.visible')
    .type(Cypress.env('firstName'))

    //// Locate and enter the Last Name for the new user
    cy.get('#last_name')
    .should('be.visible')
    .type(Cypress.env('lastName'))

    // Locate and enter the Email ID for the new user
    cy.get('#email')
    .should('be.visible')
    .type(randomEmail)

    // Locate and enter the Confirmed Email for the new user
    cy.get('#confirm_email')
    .should('be.visible')
    .type(randomEmail2)

  // Locate and enter the Alphabet Only Password for the new user
    cy.get('input[name="password"]')
    .type(Cypress.env('alphabetPasswordOnly'))

    // Locate and enter the Mobile Number for the new user
    cy.get('input[name="mobile"]')
    .should('be.visible')
    .type(Cypress.env('mobileNumber'))

    // Check Mark the checkbox to Agree Terms and Conditions
    cy.get('input[name="agreeTerms"]')
    .should('be.visible')
    .check()

    // Click on the Create Account Button
    cy.get('button[type="submit"]')
    .should('have.text'," Create Account")
    .should('be.visible')
    .click()

    cy.wait(4000)

    // Assert the Error Message on Invalid Password
    cy.get('.text-error')
    .first()
    .should('have.text',"The password format is invalid.")
    .should('be.visible')

  })

  it('Test-6: Sign Up with Valid Email ID and Numbers Only Password', () => {

    const randomEmail = generateRandomEmail()
    const randomEmail2 = randomEmail
  
    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if we have landed successfully on Sign Up Screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

    // Locate and enter the First Name for the new user
    cy.get('#first_name')
    .should('be.visible')
    .type(Cypress.env('firstName'))

    //// Locate and enter the Last Name for the new user
    cy.get('#last_name')
    .should('be.visible')
    .type(Cypress.env('lastName'))

    // Locate and enter the Email ID for the new user
    cy.get('#email')
    .should('be.visible')
    .type(randomEmail)

    // Locate and enter the Confirmed Email for the new user
    cy.get('#confirm_email')
    .should('be.visible')
    .type(randomEmail2)

  // Locate and enter the Number Only Password for the new user
    cy.get('input[name="password"]')
    .should('be.visible')
    .type(Cypress.env('numberPasswordOnly'))

    // Locate and enter the Mobile Number for the new user
    cy.get('input[name="mobile"]')
    .should('be.visible')
    .type(Cypress.env('mobileNumber'))

    // Check Mark the checkbox to Agree Terms and Conditions
    cy.get('input[name="agreeTerms"]')
    .should('be.visible')
    .check()

    // Click on the Create Account Button
    cy.get('button[type="submit"]')
    .should('have.text'," Create Account")
    .should('be.visible')
    .click()

    cy.wait(4000)

    // Assert the Error Message on Invalid Password
    cy.get('.text-error')
    .first()
    .should('have.text',"The password format is invalid.")
    .should('be.visible')

  })

  it('Test-7: Sign Up with Empty/Blank Registration Form Submit', () => {

    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if The button valid and visible on screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

    // Submit the Form Empty and Check for error messages
    cy.get('button[type="submit"]')
    .should('have.text'," Create Account")
    .should('be.visible')
    .click()

    cy.wait(4000)

    cy.get('.text-error')
    .should('contain',"Required")
    .should('be.visible')
    
  })

  it('Test-8: Sign Up with Duplicated Email Address which Already Exists', () => {

    // Search for Login/Sign up button and Click it
    cy.get('[data-testid="login-profile"] > .hidden')
    .click()
    cy.wait(8000)
    
    // Locate and Click on the Create an Accont button to go on registration Flow
    cy.get('.border-text')
    .should('have.text'," Create an account")
    .should('be.visible')
    .click()

    //Verifying if we have landed successfully on Sign Up Screen
    cy.get('.text-2xl')
    .should('have.text',"Create Your Account")
    .should('be.visible')

    // Locate and enter the First Name for the new user
    cy.get('#first_name')
    .should('be.visible')
    .type(Cypress.env('firstName'))

    //// Locate and enter the Last Name for the new user
    cy.get('#last_name')
    .should('be.visible')
    .type(Cypress.env('lastName'))

    // Locate and enter the Email ID for the new user
    cy.get('#email')
    .should('be.visible')
    .type(Cypress.env('duplicatedEmail'))

    // Locate and enter the Confirmed Email for the new user
    cy.get('#confirm_email')
    .should('be.visible')
    .type(Cypress.env('duplicatedEmail'))

  // Locate and enter the Number Only Password for the new user
    cy.get('input[name="password"]')
    .should('be.visible')
    .type(Cypress.env('validPassword'))

    // Locate and enter the Mobile Number for the new user
    cy.get('input[name="mobile"]')
    .should('be.visible')
    .type(Cypress.env('mobileNumber'))

    // Check Mark the checkbox to Agree Terms and Conditions
    cy.get('input[name="agreeTerms"]')
    .should('be.visible')
    .check()

    // Submit the Form Empty and Check for error messages
    cy.get('button[type="submit"]')
    .should('have.text'," Create Account")
    .should('be.visible')
    .click()

    cy.wait(4000)

    // Check for error message for Account Already Existed.
    cy.get('.text-error')
    .should('contain',"Account already exists.")
    .should('be.visible')

  })

})