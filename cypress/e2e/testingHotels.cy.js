describe("Hotel Filtering Test", ()=> {
    beforeEach(() => {
        cy.visit("https://hotels-cyan.vercel.app/");
    })
    
    it("Verificar que todas las cards aparecen desde el inicio", ()=> {
        cy.get(".hotel").filter(":visible").should("have.length", 18);
    })
    
    it("Aplicar filtro por precio y verificar las cards correspondientes", () => {
        cy.get("#filter-prices").select("$");
        cy.wait(600);
        cy.get(".hotel").filter(":visible").should("have.length", 3);
        
        cy.get("#filter-prices").select("$$");
        cy.wait(600);
        cy.get(".hotel").filter(":visible").should("have.length", 4);
        
        cy.get("#filter-prices").select("$$$");
        cy.wait(600);
        cy.get(".hotel").filter(":visible").should("have.length", 2);
        
        cy.get("#filter-prices").select("$$$$");
        cy.wait(600);
        cy.get(".hotel").filter(":visible").should("have.length", 9);
    });
    
    it('Limpiar los filtros y verificar que todas las cards estén presentes', () => {
        cy.get("#filter-prices").select("$$$$");
        cy.wait(600);
        cy.get(".hotel").filter(":visible").should("have.length", 9);

        cy.get('#clearButton').click();
        cy.get(".hotel").filter(":visible").should("have.length", 18);
      });
});