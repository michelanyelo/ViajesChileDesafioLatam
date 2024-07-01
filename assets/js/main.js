// cambiar background del navbar en movimiento
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 300) {
        $(".navbartop").css("background-color", "#259FAA").removeClass("bg-transparent");
    } else {
        $(".navbartop").addClass("bg-transparent");
    }
});

// modificaciones para el carrusel
const myCarouselElement = document.querySelector('#carruselviajes')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    // intervalo en milisegundos
    interval: 5000,
    // pausar el slide si el mouse está encima
    pause: "hover",

});


// activación de pestañas según sección
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarviajes'
});


// validación formulario de contacto desde documentación de bootstrap
(() => {
    'use strict'
    // obtengo todos los formularios a los que quiero aplicar estilos de validación personalizados de bootstrap
    const forms = document.querySelectorAll('.needs-validation')

    // recorro cada uno de ellos y prevengo el envío
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            // si el formulario no es válido, prevengo el envío y la propagación del evento
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                // si el formulario es válido, envío un mensaje de éxito
                alert("¡El mensaje fue enviado correctamente!")
            }

            // añado la clase 'was-validated' al formulario para aplicar los estilos de validación
            form.classList.add('was-validated')
        }, false)
    })
})();

// tooltips redes sociales
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))