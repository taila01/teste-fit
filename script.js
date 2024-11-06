// Evento de rolagem da página
window.addEventListener('scroll', () => {
    const servicesSection = document.getElementById('services');
    if (window.scrollY > 100) {
        servicesSection.style.backgroundColor = '#d79447'; // Mudança de cor ao rolar
    } else {
        servicesSection.style.backgroundColor = ''; // Retorna a cor original
    }
});

// Animação de fade-in para as seções
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 0.5s';
        section.getBoundingClientRect(); // Força o reflow
        section.style.opacity = 1; // Aplica a animação de fade-in
    });
});