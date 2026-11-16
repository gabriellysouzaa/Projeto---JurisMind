/* ====================================
   JURISMIND AI - JAVASCRIPT
   VALIDAÇÃO DO FORMULÁRIO
   ==================================== */

// Localiza o formulário no HTML
const formulario = document.getElementById("formulario");

// Identifica quando o usuário clica em Enviar
formulario.addEventListener("submit", function(event) {

    // Impede o envio automático do formulário
    event.preventDefault();

    // Captura os valores digitados pelo usuário
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();

    // Verifica se algum campo está vazio
    if (nome === "" || email === "") {

        alert("Por favor, preencha o nome e o e-mail.");

    }

    // Verifica se o e-mail contém @ e ponto
    else if (!email.includes("@") ||
             !email.includes(".") ||
             email.includes(" ")) {

        alert("E-mail inválido! Digite um e-mail válido. Exemplo: nome@email.com");

    }

    // Se os campos estiverem preenchidos corretamente
    else {

        alert("Obrigada, " + nome +
              "! Seu formulário foi validado com sucesso. Esta é uma demonstração.");

    }

});
