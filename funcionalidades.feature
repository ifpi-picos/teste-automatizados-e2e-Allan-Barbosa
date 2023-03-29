Feature: caixa de pesquisa dos recursos

    A caixa de pesquisa pode ser usada pelo usuário para buscar os recursos desejados

    Scenario: pesquisar um recurso existente

        Given que eu estou na página de biblioteca de recursos
        When  eu clico na caixa de pesquisa
        And eu digito o nome de um recurso existente
        Then eu devo receber todos os recursos que contenham esse nome

    Scenario: pesquisar um recurso que não existe

        Given  que eu estou na página de biblioteca de recursos
        When  eu clico na caixa de pesquisa
        And eu digito o nome de um recurso que não existente
        Then  eu devo receber um aviso que o recurso não existe
        And não deve ser retornado nenhum recurso

Feature: Navegação de páginas

    A navegação de páginas pode ser usada pelo usuário para navegar pelas páginas de recursos e encontrar os outros recursos existentes

    Scenario: Clicar no índice da página anterior ao agrupamento de índices

        Given que eu estou na página de biblioteca de recursos
        When eu clico no índice da página anterior ao agrupamento de índices
        Then o sistema deve me redirecionar para a nova página de recursos
        And me levar ao topo da página
        And mostrar os próximos índices que estavam ocultos na barra de navegação
