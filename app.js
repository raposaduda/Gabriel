'use strict';
// Seleciona o botão que tem a classe "btn"
const btn = document.querySelector('.btn');

// Adiciona um evento de clique ao botão
btn.addEventListener('click', () => {

    // Alterna a classe "light-theme" no body
    // Se existir, remove; se não existir, adiciona
    document.body.classList.toggle('light-theme');

    // Alterna a classe "dark-theme" no body
    document.body.classList.toggle('dark-theme');

    // Verifica se o body contém a classe "light-theme"
    // Retorna true se estiver no tema claro
    const isLight = document.body.classList.contains('light-theme');

    // Altera o texto do botão de acordo com o tema atual
    // Se estiver no tema claro, mostra "Dark"
    // Se estiver no tema escuro, mostra "Light"
    btn.textContent = isLight ? 'Dark' : 'Light';
});
