// Espera o carregamento completo do DOM para garantir que todos os elementos estejam disponíveis.
document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona o botão do menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    // Seleciona o menu mobile que será exibido/ocultado
    const mobileMenu = document.getElementById('mobile-menu');

    // Adiciona um listener de clique ao botão do menu mobile
    mobileMenuButton.addEventListener('click', () => {
        // Verifica se o menu está visível ou não
        if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
            // Se estiver oculto, exibe
            mobileMenu.style.display = 'block';
        } else {
            // Se estiver visível, oculta
            mobileMenu.style.display = 'none';
        }
    });

    // Opcional: Oculta o menu mobile se a janela for redimensionada para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) { // 768px é o breakpoint 'md' do Tailwind
            mobileMenu.style.display = 'none';
        }
    });
});
