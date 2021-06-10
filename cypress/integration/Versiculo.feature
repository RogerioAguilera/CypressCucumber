Feature: Versiculo

   Como um usuario, quero acessar e verificar versiculos do
   antigo e novo testamento

Scenario: Verificar versiculo do antigo testamento
    Given que acesse o site
    And seja possível fazer uma busca de um Livro
    When consiga buscar determinado versículo deste Livro
    Then deve mostrar o versículo mencionado