document.addEventListener("DOMContentLoaded", function() {
    console.log("El sitio web de Benjamí Calvillo Melero está listo.");
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
