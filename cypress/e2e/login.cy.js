describe('Log into orage hrm',()=>{
    it('Login successfully',()=>{
        cy.wisit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin', 'Admin123')        
        cy.url().should('include', '/dashboard')
    })



})