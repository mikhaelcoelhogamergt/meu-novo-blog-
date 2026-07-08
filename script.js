// ==========================================================================
// INTERATIVIDADE DO BLOG: CONTADORES DE REAÇÃO E ALTERNAÇÃO DE TEMA
// ==========================================================================

// 1. Funcionalidade dos Botões de Reação (❤️ e 👍)
const botoesReacao = document.querySelectorAll('main article button');

botoesReacao.forEach(botao => {
    botao.addEventListener('click', () => {
        // Seleciona o span numérico dentro do botão clicado
        const contador = botao.querySelector('span');
        
        // Converte o texto atual para número, soma 1 e atualiza a tela
        let contagemAtual = parseInt(contador.textContent, 10);
        contagemAtual++;
        contador.textContent = contagemAtual;

        // Efeito visual rápido de "clique de botão de painel"
        botao.style.transform = 'scale(0.95)';
        setTimeout(() => {
            botao.style.transform = '';
        }, 100);
    });
});

// 2. Funcionalidade de Alternar o Tema (Acelerando o Visual)
const btnTema = document.querySelector('.btn-tema-escuro');

btnTema.addEventListener('click', () => {
    // Verifica se o tema atual já está ativo no elemento principal (html)
    const temaAtual = document.documentElement.getAttribute('data-theme');
    
    if (temaAtual === 'dark') {
        // Se estiver escuro, remove o atributo para voltar ao laranja clássico
        document.documentElement.removeAttribute('data-theme');
    } else {
        // Se estiver no clássico, ativa o modo escuro de alta performance (SRT)
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});
