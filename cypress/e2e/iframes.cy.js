describe('Handling frames',()=>{
    it('Approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
       const iframe= cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        iframe.clear().type("Welcome{cmd+a}"); //cmd+a will select the text 
        cy.get("[aria-label='Bold']").click();
    
    })
    //creating custom command
    it.only('Approach2 by using custom command',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe('#mce_0_ifr').clear().type("Welcome{cmd+a}"); //cmd+a will select the text 
        cy.get("[aria-label='Bold']").click();
    })
    //
    it('Approach3',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr'); //load the frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome");

    })
})