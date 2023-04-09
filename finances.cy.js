

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('Transações de Entrada', () => {
        criarTransacao("Testes Freelance", 500)
        cy.get("tbody tr td.description").should("have.text", "Testes Freelance")

    }); 
    
    it('Transações de Saída', () =>{
        criarTransacao("Cinema", -60)
        cy.get("tbody tr td.description").should("have.text", "Cinema")

        
    });

    it('Excluir Transação', () => {
        criarTransacao ("Conta de água", -60)
        cy.contains(".description", "Conta de água")
        .parent()
        .find('img')
        .click()
    });
});

function criarTransacao(descricao,valor){
        cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2023-04-08")
        cy.contains('button', 'Salvar').click()

}