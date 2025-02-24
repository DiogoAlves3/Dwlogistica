document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-animate');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-animate-left, .section-animate-right, .section-animate-top, .section-animate-bottom');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('hamburger');
    const menu = document.getElementById('itensnav');
    const closeMenu = document.getElementById('close-menu');

    // Abre/Fecha o menu ao clicar no hambúrguer
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fecha o menu ao clicar no botão "Fechar"
    closeMenu.addEventListener('click', function () {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const itensnav = document.getElementById('itensnav');
    const closeButton = document.querySelector('.close-button'); // Seleciona o botão de fechar

    if (menuToggle && itensnav && closeButton) {
        menuToggle.addEventListener('change', function () {
            itensnav.style.display = menuToggle.checked ? 'flex' : 'none';
        });

        // Adiciona um evento para corrigir o menu ao redimensionar a tela
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                itensnav.style.display = 'flex'; // Garante que o menu apareça corretamente em telas grandes
                closeButton.style.display = 'none'; // Oculta o botão de fechar
                menuToggle.checked = false; // Reseta o estado do checkbox
            } else {
                itensnav.style.display = 'none'; // Oculta novamente em telas pequenas
                closeButton.style.display = 'block'; // Mostra o botão de fechar apenas no mobile
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const itensnav = document.getElementById('itensnav');
    const closeButton = document.querySelector('.close-button');

    if (menuToggle && itensnav && closeButton) {
        menuToggle.addEventListener('change', function () {
            itensnav.style.display = menuToggle.checked ? 'flex' : 'none';
        });

        closeButton.addEventListener('click', function () {
            menuToggle.checked = false;
            itensnav.style.display = 'none';
        });

        // Oculta o botão de fechar e ajusta o menu ao redimensionar a tela
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                itensnav.style.display = 'flex'; // Menu normal em telas grandes
                closeButton.style.display = 'none'; // Esconde o botão de fechar
                menuToggle.checked = false; // Desmarca o checkbox do menu
            } else {
                itensnav.style.display = 'none'; // Oculta o menu no mobile
                closeButton.style.display = 'block'; // Exibe o botão de fechar no mobile
            }
        });
    }
});

