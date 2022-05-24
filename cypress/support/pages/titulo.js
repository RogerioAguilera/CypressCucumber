import { el } from "./elements";

class BuscaTitulo {
  go() {
    cy.visit("/");
  }

  buscaTitulo() {
    cy.get(el.busca).click();
  }
}

export default new BuscaTitulo();
