window.addEventListener('load', () => {
    alert('Bem-vindo ao portfólio do Kaio Vinicius!');
});

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(el => el.classList.remove('ativo'));
        link.classList.add('ativo');
    });
});
