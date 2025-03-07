///<reference types="Cypress"/>

describe("Checking UI elements",()=>{

    
    it.skip("selectdropdowns",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html?src=homepage")
        cy.get("#zcf_address_country").select("Spain").should('have.value','Spain')
    })
    it.skip("without select dropdowns",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type("Italy").type('{enter}')
        cy.get('.select2-search__field').should('have.text','Italy')
    })
    it.skip("autosuggesstion dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Delhi')
        cy.get(".suggestion-title").contains("Delhi University") .click()
    })
    it("dynamicsuggesstion dropdown",()=>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type('cypress automation')
        cy.wait(3000)
        cy.get("div.wM6W7d>span").each(($el,index,$li)=>{

            if($el.text()=="cypress automation tool")
            {
                cy.wrap($el).click()
            }
        })
        cy.get("#APjFqb").should('have.value','cypress automation tool')

        
    })
})