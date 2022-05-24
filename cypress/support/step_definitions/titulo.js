import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import titulo from "../pages/titulo";

Given(`que acesso o site da Biblia`, () => {
  titulo.go();
});

And(`busco um livro do Antigo Testamento`, () => {
  titulo.buscaTitulo();
});

Then(`valido o capitulo a ser lido`, () => {
  return true;
});
