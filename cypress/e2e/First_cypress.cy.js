describe('MyfirstCypressProgram' ,()=>{
    it('Test1',() =>{
    // cy.visit("https://dev.lootrix.utwebapps.com/phase2/")
        cy.visit("https://lootrix.utwebapps.com/phase2/")
        cy.title().should('eq','LOOTRIX')
    })

    /*it('Aviator',()=>{
        cy.visit("https://lootrix.utwebapps.com/phase2/")
        //cy.get("(//img[@alt='aviator'])")
        cy.get("#searchInput").type("aviator")
        cy.xpath("//div[@id='games']/descendant::img").should('have.length',29)
       // cy.get("[alt='aviator']").click()
      // cy.wait(1000)
       const avit=cy.xpath("//a[@class='aviator hoverfocus']")
       //cy.wait(1000)
       avit.click()
      cy.wait(2000)
      const play= cy.xpath("//button[@class='Play_game open-popup desktop Play_gamebutton']")
      play.click()
      cy.wait(17000)

        })*/

        it('cricketx',()=>{
            cy.visit("https://lootrix.utwebapps.com/phase2/")
            //cy.get("(//img[@alt='aviator'])")
            cy.get("#searchInput").type("cri")
           // cy.xpath("//div[@id='games']/descendant::img").should('have.length',29)
           // cy.get("[alt='aviator']").click()
          // cy.wait(1000)
           const avit=cy.xpath("//a[@class='cricketx hoverfocus']")
           //cy.wait(1000)
           avit.click()
          cy.wait(2000)
         // const play= cy.xpath("//button[@class='Play_game open-popup desktop Play_gamebutton']")
         const play=cy.xpath("//video[@class='gameVideo Play_game']")
         // play.click()
         // cy.wait(17000)
         //cy.scrollTo(200, 850)
          const next=cy.xpath("//button[normalize-space()='Next']")
          
          cy.wait(4000)
          
            
          next.click()
          next.click()
          //cy.scrollTo(200, -100)
          cy.wait(2000)
         // const prev=cy.xpath("//button[normalize-space()='Previous']")
          //prev.click()
         // const close=cy.xpath("//img[@class='closebtN popup-close']")
         // close.click()
          cy.wait(2000)
          
            })
     it('Assertions',()=>{

     })

    /*it('ChainedXpath',() =>{
        cy.visit("https://dev.lootrix.utwebapps.com/phase2/")
        
        cy.xpath("//div[@id='games']").xpath("(//img[@alt='aviator'])[1]")

    })*/



}
)