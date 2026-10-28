
(function () {
    "use strict";

    function mostrarSeccion(id, boton) {
        const secciones = document.querySelectorAll(".seccion");
        const botones = document.querySelectorAll(".nav-link");
        const elegida = document.getElementById(id);

        if (!elegida) {
            console.error("No se encontró la sección:", id);
            return;
        }

      
        secciones.forEach(function (seccion) {
            seccion.classList.add("oculto");
        });

      
        elegida.classList.remove("oculto");

        
        botones.forEach(function (elemento) {
            elemento.classList.remove("activo");
        });

        if (boton && boton.classList.contains("nav-link")) {
            boton.classList.add("activo");
        } else {
            botones.forEach(function (elemento) {
                const accion = elemento.getAttribute("onclick");

                if (accion && accion.includes("'" + id + "'")) {
                    elemento.classList.add("activo");
                }
            });
        }

        window.scrollTo(0, 0);
    }

    
    window.mostrarSeccion = mostrarSeccion;

  
    function iniciarPagina() {
        const secciones = document.querySelectorAll(".seccion");

        if (!document.getElementById("inicio") || secciones.length === 0) {
            console.error("No se encontraron las secciones de la página.");
            return;
        }

        
        mostrarSeccion("inicio");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", iniciarPagina);
    } else {
        iniciarPagina();
    }
})();
