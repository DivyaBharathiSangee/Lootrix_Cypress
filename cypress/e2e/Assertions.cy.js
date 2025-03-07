
describe("Asssertion",()=>{
    it("Implicit",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should and 
       /* cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')*/
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

        cy.title().should('include','Orange').and('eq','OrangeHRM').and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') //logo visible 
       // cy.get('.orangehrm-login-branding > img').should('exist')

       cy.xpath("//a").should('have.length','5') //no of links 
       cy.get("input[placeholder='Username']").type('Admin') //provide value to input box 
       cy.get("input[placeholder='Username']").should('have.value','Admin')


    })

    it("Explicit",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get(" button[type='submit']").click()

        let expname='Runtime de';
        cy.get(".oxd-userdropdown-tab").then( (x)=>{
            let actname=x.text()
            //BDD style
            expect(actname).to.equal(expname)
            //expect(actname).to.not.equal(expname)
            //TDD
            assert.equal(actname,expname)
    })
        
    })
})