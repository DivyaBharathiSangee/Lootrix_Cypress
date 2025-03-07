//by default cypress not handling child tabs 
describe('handling tabs',()=>{
    it('approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") ;//paent web
        cy.get('.example>a').invoke('removeAttr','target').click(); //click on link
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        //operation
        cy.wait(5000);
        cy.go('back'); //back to parent tab
    })
    it.only('approach2',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") ;//paent web
        cy.get('.example>a').then((e)=>{
           let url= e.prop('href');

           cy.visit(url)
        }) //click on link  //domain should be same 
      

       cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
       //operation
       cy.wait(5000);
       cy.go('back');
        
    })
})