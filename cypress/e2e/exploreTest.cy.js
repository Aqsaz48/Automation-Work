describe('template spec', () => {


    beforeEach(() => {

        cy.log('This runs before each test in the suite');
        cy.viewport('macbook-16')

        // Navigate to the Webook website to perform test actions
        cy.visit('https://webook.com/en')
        cy.wait(8000)
    });

    it('Test-1: Check if Explore Button is present and visible on the webpage', () => {

    // Go to Explore button and click on it
    cy.get('a[data-title="Explore"]')
    .should('be.visible')
    .click()

    // Verify that we have successfully landed on explore page
    cy.url().
    should('eq', 'https://webook.com/en/explore')
    cy.get('.text-2xl')
    .should('contain.text',"Explore fun things to book")
    cy.wait(4000)

    })

    it('Test-2: Go to Explore Screen to Apply Type "Events" Filter', () => {

    // Go to Explore button and click on it
    cy.get('a[data-title="Explore"]')
    .should('be.visible')
    .click()
    cy.wait(4000)

    // Verify that we have successfully landed on explore page
    cy.url().
    should('eq', 'https://webook.com/en/explore')
    cy.get('.text-2xl')
    .should('contain.text',"Explore fun things to book")


    //NOTE and Recommendation: There are NO PROPER "ID" or "Class" Attributes set for a lot of Elements

    // Go to Experiences Filter and Select it
    cy.get('#explore-top-filters > div > ul > li')
    .eq(0)
    .click()

    // Validating that we are on Experiences Filter Result Screen that we selected
    cy.url()
    .should('eq', 'https://webook.com/en/explore?type=events')

    cy.get('.leading-none').should('contain.text',"Event")

    })


    it('Test-3: Go to Explore Screen to Apply Zone Filter', () => {

    // Go to Explore button and click on it
    cy.get('a[data-title="Explore"]')
    .should('be.visible')
    .click()
    cy.wait(4000)

    // verify that we have landed on Explore screen
    cy.url().
    should('eq', 'https://webook.com/en/explore')
    cy.get('.text-2xl')
    .should('contain.text',"Explore fun things to book")

    // Recommendation: There are NO PROPER "ID" or "Class" Attributes set for a lot of Elements

    // Go to Zone Filter and Select City Walk
    cy.get('div > ul > li > button')
    .eq(0)
    .should('be.visible')
    .click()

    // Go to Apply button and click
    cy.get('.text-center')
    .contains('button', "Apply")
    .click()

    // Validating the results are related to City Walk Zone Selected
    cy.get('.shrink-0.grow')
    .should('have.attr', 'alt',"CityWalk: Every Corner Holds a New Surprise!")
    

    // Validating tha we have landed on right URL after selecting Zone Filter for City Walk
    cy.url().should('eq', 'https://webook.com/en/explore?zone=city-walk-tickets-748638')

    })

    it('Test-4: Clear the Applied Zone Filter', () => {

        // Go to Explore button and click on it
        cy.get('a[data-title="Explore"]')
        .should('be.visible')
        .click()
        cy.wait(4000)
    
        // verify that we have landed on Explore screen
        cy.url().
        should('eq', 'https://webook.com/en/explore')
        cy.get('.text-2xl')
        .should('contain.text',"Explore fun things to book")
    
        // Recommendation: There are NO PROPER "ID" or "Class" Attributes set for a lot of Elements
    
        // Go to Zone Filter and Select City Walk
        cy.get('div > ul > li > button')
        .eq(0)
        .should('be.visible')
        .click()
    
        // Go to Apply button and click
        cy.get('.text-center')
        .contains('button', "Apply")
        .click()
    
        // Validating the results are related to City Walk Zone Selected
        cy.get('.shrink-0.grow')
        .should('have.attr', 'alt',"CityWalk: Every Corner Holds a New Surprise!")
        
    
        // Validating tha we have landed on right URL after selecting Zone Filter for City Walk
        cy.url().should('eq', 'https://webook.com/en/explore?zone=city-walk-tickets-748638')

        // Go to Zone Filter and Select City Walk again to clear the filter
        cy.get('div > ul > li > button')
        .eq(0)
        .should('be.visible')
        .click()

        cy.get('.shrink-0.grow')
        .should('not.have.attr', 'alt',"CityWalk: Every Corner Holds a New Surprise!")
        
        })

    it('Test-5: Go to Explore Screen to to Apply Experiences Filter', () => {

    // Go to Explore button and click on it
    cy.get('a[data-title="Explore"]')
    .should('be.visible')
    .click()
    cy.wait(4000)

    cy.url().
    should('eq', 'https://webook.com/en/explore')
    cy.get('.text-2xl')
    .should('contain.text',"Explore fun things to book")

    //NOTE and Recommendation: There are NO PROPER "ID" or "Class" Attributes set for a lot of Elements

    // Go to Experiences Filter and Select it
    cy.get('#explore-top-filters > div > ul > li')
    .eq(1)
    .should('be.visible')
    .click()
    cy.wait(2000)

    // Verify that the results are related to Experinces Filter
    cy.get('.leading-none').should('contain.text',"Experience")

    // Validating that we are on Experiences Filter Result Screen that we selected
    cy.url().should('eq', 'https://webook.com/en/explore?type=experiences')

    })

    it('Test-6: Apply Experiences Filter and Zone Filter Combined', () => {

    // Go to Explore button and click on it
    cy.get('a[data-title="Explore"]')
    .should('be.visible')
    .click()
    cy.wait(4000)

    // Verify that we have landed successfully on Explore Page
    cy.url().
    should('eq', 'https://webook.com/en/explore')
    cy.get('.text-2xl')
    .should('contain.text',"Explore fun things to book")

    //NOTE and Recommendation: There are NO PROPER "ID" or "Class" Attributes set for a lot of Elements

    // Go to Experiences Filter and Select it
    cy.get('#explore-top-filters > div > ul > li')
    .eq(1)
    .should('be.visible')
    .click()

    // Go to Zone filter City Walk and Click it
    cy.get('div > ul > li > button')
    .first()
    .should('be.visible')
    .click()

    // Verify that the results are related to Experinces Filter and Zone City Walk
    cy.get('.leading-none').should('contain.text',"Experience")
    cy.get('.shrink-0.grow')
    .should('not.have.attr', 'alt',"CityWalk: Every Corner Holds a New Surprise!")

    // Validating that we are on Experiences Filter Result Screen that we selected
    cy.url().should('eq', 'https://webook.com/en/explore?type=experiences&zone=city-walk-tickets-748638')

    })


})