describe("Check UI elemts",()=>{
    it.skip("Checking Radio buttons",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //radiobutton
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
        //check buttons 
        cy.get("input#monday").uncheck().should('not.be.checked')
        //selecting all the check boxes 
        cy.get().check().should('be.checked')
        cy.get().first().check() //first check box select 
         })
         //bootstrap 
    it.skip("dropdwon without select class",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('Italy')
    })
    it.skip("dropdwon without select class",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')

    })
    it.skip("auto suggest dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get(".suggestion-title").contains('Delhi University').click()

    })
    it("Dynamic dropdown",()=>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("cypress automation")
        cy.wait(3000)
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#APjFqb').should('have.value','cypress automation')
    })

})