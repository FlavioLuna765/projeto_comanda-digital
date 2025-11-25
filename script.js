        // Função que será executada ao clicar no botão
        function mostrarImagem() {
            // 1. Pega o elemento da imagem usando seu ID
            const imagem = document.getElementById('minhaImagem');
            
            // 2. Verifica se a imagem está atualmente escondida (se a propriedade display é 'none')
            // Se estiver escondida, mostra ela (muda para 'block')
            if (imagem.style.display === 'none' || imagem.style.display === '') {
                imagem.style.display = 'block';
                // Opcional: Altera o texto do botão
                document.getElementById('meuBotao').textContent = 'Esconder Qrcode';
            } else {
                // Se estiver visível, esconde ela
                imagem.style.display = 'none';
                // Opcional: Altera o texto do botão
                document.getElementById('meuBotao').textContent = 'Mostrar Qrcode';
            }
        }

        // Adiciona um "ouvinte de evento" (event listener) ao botão
        // Quando o evento 'click' ocorrer no botão 'meuBotao', a função 'mostrarImagem' será executada.
        document.getElementById('meuBotao').addEventListener('click', mostrarImagem);