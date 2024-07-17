describe('template spec', () => {

    
    beforeEach(() => {
      cy.log('This runs before each test in the suite');
      cy.viewport('macbook-16')

      // Navigate to the Webook website to perform test actions
      cy.visit('https://webook.com/en')
      cy.wait(8000)
    });

    it('Test-1: Check the Visiblity of Search Bar on Webpage', () => {

      // Check if the search bar is visible and present on teh webpage
      cy.get('input[placeholder="Search events, experiences, restaurants, artists..."]')
      .should('be.visible')

    })

    it('Test-2: Search for "Asala & Ahmed Saad Concert" in the Search Bar', () => {

        // Search the text "Asala & Ahmed Saad Concert" in search bar and enter to see results
        cy.get('input[placeholder="Search events, experiences, restaurants, artists..."]')
        .should('be.visible')
        .click()
        .type("Asala & Ahmed Saad Concert{enter}")

        // Verify that we have successfully searched for that input text given in search bar 
        cy.get('.text-2xl')
        .should('be.visible')

        // Verify that the Correct result is displayed with matching the title of the result
        cy.get('.line-clamp-2')
        .first()
        .should('have.text',"Asala & Ahmed Saad Concert")
        .should('be.visible')
        
        // Verify that after the action of Search, the URL is also changed to searched results page URL
        cy.url()
        .should('eq', 'https://webook.com/en/search?q=Asala%20&%20Ahmed%20Saad%20Concert');
        
    })

    it('Test-3: Search for "Asala & Ahmed Saad Concert" from the Search Recommendations', () => {

      // Search the text "Asala & Ahmed Saad Concert" in search bar and enter to see results
      cy.get('input[placeholder="Search events, experiences, restaurants, artists..."]')
      .should('be.visible')
      .click()
      .type("Asala & Ahmed Saad Concert")

      // Verify that we have successfully searched for that input text given in search bar 
      cy.get('.space-y-px ')
      .should('contain.text',"Asala & Ahmed Saad Concert")
      .should('be.visible')
      .click()

      // Verify that the Correct result is displayed with matching the title of the result
      cy.get('.text-2xl')
      .should('contain',"Asala & Ahmed Saad Concert")
      .should('be.visible')
      
      // Verify that after the action of Search, the URL is also changed to searched results page URL
      cy.url()
      .should('eq', 'https://webook.com/en/events/asala-ahmed-saad-concert-379201');
      
  })

    it('Test-4: Search for Invalid Data in the Search Bar', () => {

      // Search the text "Asala & Ahmed Saad Concert" in search bar and enter to see results
      cy.get('input[placeholder="Search events, experiences, restaurants, artists..."]')
      .should('be.visible')
      .click()
      .type("hello{enter}")

      // Verify that what we have searched for is also refelcted in the URL redirection
      cy.url()
      .should('eq',"https://webook.com/en/search?q=hello")

      // Verify that Proper Error Message is displayed in case of invalid search
      cy.get('.mx-auto')
      .should('contain',"Sorry, we could not find what you were looking for.")
      .should('be.visible')

  })

})