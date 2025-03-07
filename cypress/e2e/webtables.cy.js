
///<reference types="cypress" />
describe('Webtable',()=>{

    beforeEach('Login',()=>{
        //cy.visit("https://demo.opencart.com/admin/index.php")
        //cy.wait(5000)
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.wait(5000)
        cy.get('#input-username').type('demo')
        cy.get(' #input-password').type('demo')
        cy.get(" button[type='submit']").click()
        cy.get('#menu-customer>a').click();
        cy.get("#menu-customer>ul>.li:first-child").click()
    })
    it('check number of rows and columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6')
    })
    it('check the cell data from specific row and column ',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)").contains("minhkhoi@gmail.com");
     })
     it('Read all the rows and columns data in the first page ',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,$rows=>{
            cy.wrap($row.within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            }))
        }))
     })
     
     it.only('Pagination',()=>{
        //find total numbers of pages 
        let totalpages
        cy.get(' .col-sm-6.text-end').then((e)=>{
            let mytext=e.text(); //showing the full text
           totalpages= mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
           cy.log("Total number of pages in a table ========>"+totalpages);
        })
        let tp=5;
        for(let p=1;p<tp;p++)
        {
            if(tp>1)
            {
                cy.log("Active page is ====="+p)
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000)
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row,index,$rows)=>{
                    cy.wrap()
                }  )
            }
        }
     })

})

