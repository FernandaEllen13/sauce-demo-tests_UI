# Projeto de Testes E2E com Cypress (SauceDemo)

Este repositório contém um projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress. O alvo dos testes é o site de e-commerce de demonstração [SauceDemo](https://www.saucedemo.com/).

O projeto está configurado para gerar relatórios de execução detalhados usando o **Mochawesome**.

## ⚙️ Instalação e Configuração

Siga os passos abaixo para clonar e configurar o projeto:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_AQUI>
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd <NOME_DA_PASTA_DO_PROJETO>
    ```

3.  **Instale as dependências do Node.js (Cypress):**
    O npm irá ler o arquivo `package.json` e instalar o Cypress e todos os plugins necessários (como o mochawesome).
    ```bash
    npm install
    ```

## 🚀 Executando os Testes

Você pode executar os testes de duas formas:

### 1. Modo Interativo (Recomendado para desenvolver)

Este modo abre a interface gráfica do Cypress, permitindo que você veja os testes rodando em tempo real e use o depurador.

1.  Execute o comando:
    ```bash
    npx cypress open
    ```
2.  Na interface, clique em **"E2E Testing"**.
3.  Escolha um navegador (ex: Chrome, Edge, Firefox).
4.  Clique no arquivo `spec.cy.js` para iniciar os testes.



### 2. Modo Headless (Para rodar tudo e gerar relatório)

Este modo executa todos os testes de uma vez no terminal (sem abrir uma interface gráfica). É a forma correta de rodar os testes para gerar o relatório final.

```bash
npx cypress run
```

## 📊 Visualizando o Relatório de Testes

Após a execução do comando `npx cypress run`, o relatório Mochawesome será gerado automaticamente.

Para visualizá-lo:

1.  Navegue até a pasta `cypress/reports/`.
2.  Abra o arquivo **`index.html`** no seu navegador de preferência.

O relatório é um arquivo HTML interativo que mostra todos os testes, o tempo de execução e quais passaram