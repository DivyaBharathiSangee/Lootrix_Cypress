


describe('alerts',()=>{
  it.skip('js alert',()=>{
   
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click();
    //alert is an event 
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('I am a JS Alert');
    })
    //cypress will close the alert 
    cy.get('#result').should('have.text','You successfully clicked an alert')

   })
   it.skip('confrimation alert-ok',()=>{
   
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on('window:confirm', (t)=>{
      expect(t).to.contains('I am a JS Confirm');
    })
    //cypress automatically close the alert window by clicking ok button
    cy.get('#result').should('have.text','You clicked: Ok')

  })
  it('confrimation alert-cancel',()=>{
   
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on('window:confirm', ()=>false); //cypress automatically close the alert window by clicking cancel button
    
    cy.get('#result').should('have.text','You clicked: Cancel')

  })
  it('js prompt alert',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('welcome');
    })
    cy.get("button[onclick='jsPrompt()']").click()
    cy.get(' #result').should('have.text','You entered: welcome');

  })
  it.only('authendicated-alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username: "admin",password:"admin"}}
    )
    cy.get("div[class='example'] p").should('have.contain','Congratulations!')

  })

})