document.addEventListener("DOMContentLoaded", () => {
    const iniciarSesionBtn = document.querySelector(".iniciarSesion");
    iniciarSesionBtn.addEventListener("click", () => {
        if (iniciarSesionBtn.textContent === "Iniciar sesión") {
        iniciarSesionBtn.textContent = "Cerrar sesión";
        } else {
        iniciarSesionBtn.textContent = "Iniciar sesión";
        }
    });
    });

const agregarDefinicionBtn = document.querySelector('#agregarDefinicion');
agregarDefinicionBtn.addEventListener('click', function() {
    agregarDefinicionBtn.style.display = 'none';
});

const botonesMeGusta = document.querySelectorAll('.meGusta');
botonesMeGusta.forEach(function(boton) {
    boton.addEventListener('click', function() {
        const titulo = this.parentElement.querySelector('h2').textContent;
        alert(`Te gustó la definición: ${titulo}`);
        let numeroLikes = parseInt(this.textContent.split(' ')[0]);
        numeroLikes++;
        this.textContent = `${numeroLikes} me gusta`;
    });
});
