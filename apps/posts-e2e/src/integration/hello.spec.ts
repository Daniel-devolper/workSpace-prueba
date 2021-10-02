

describe('hello', () => {
    
    beforeEach(()=> cy.visit('/hello'));

    it('hello message',()=>{
        cy.get('[data-cy=hello]').should('have.text','Hello from posts');
        cy.get('[data-cy=counter]').should('have.text','0');
        cy.get('[data-cy=btn-counter]').click();
        cy.get('[data-cy=counter]').should('have.text','1');
    })
})
