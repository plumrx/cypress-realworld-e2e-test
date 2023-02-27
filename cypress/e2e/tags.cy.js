describe ('tags',()=>{
    beforeEach(()=>{
        cy.intercept({fixture:'tags.json'})
        cy.intercept(/\/api\/users\/login$/, {fixture:'login.json'})
        cy.visit('/')
    })
})