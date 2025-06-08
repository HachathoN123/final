document.addEventListener('DOMContentLoaded', () => {
    // Funkcja do animacji elementów przy przewijaniu
    const animatedElements = document.querySelectorAll('.animated-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Opcjonalnie: animuj tylko raz
            }
        });
    }, {
        threshold: 0.1 // Wywołaj, gdy 10% elementu jest widoczne
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});