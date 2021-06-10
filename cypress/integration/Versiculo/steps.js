
Given(/^que acesse o site$/, () => {
	cy.visit('/')
});


When(/^seja possível fazer uma busca de um Livro$/, () => {
	cy.get('[book="gn"] > .buttonBooks').click()
	cy.wait(2000)
});

When(/^consiga buscar determinado versículo deste Livro$/, () => {
	cy.get('#gn11 > .bibleTool').click()
});

Then(/^deve mostrar o versículo mencionado$/, () => {
	return true;
});

