describe('Log into orage hrm',()=>{
    it('Login successfully',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('admin', 'admin123')        
        cy.url().should('include', '/dashboard')
    })



})