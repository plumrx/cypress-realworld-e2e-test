describe('setting',()=>{
    beforeEach(() => {
        
    });
    
    context('logout',()=>{
        
        
        cy.contains('settings').click()
        cy.contains('Or click here to logout.').click()
    })
})