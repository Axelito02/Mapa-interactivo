// Inicialmente, la ventana de información está oculta
var verVentana = false;

// Obtener los elementos del documento que tienen la clase "punto"
var ElementoPunto = document.getElementsByClassName('punto');
// A partir de un bucle for, se recorren todos los elementos que tienen la clase "punto", a cada elemento se le agrega la acción "click".
for (var i = 0; i < ElementoPunto.length; i++) {
    ElementoPunto[i].addEventListener('click', function(event) {
        var puntoId = parseInt(this.id.substring(5)); // Obtener el número de puntoId desde el id del elemento
        VerInfo(puntoId);
    });
}

// Agregar evento de clic al documento
document.addEventListener('click', function(event) {
    // Obtener el elemento de información
    var ElementoInfo = document.getElementById('info');

    // Verificar si la ventana de información está visible
    if (verVentana) {
        // Ocultar la ventana de información al hacer clic en cualquier parte de la página, excepto en los puntos
        if (!event.target.classList.contains('punto')) {
            ElementoInfo.style.display = 'none';
            verVentana = false;
        }
    }
});

function VerInfo(puntoId) {
    // Obtener el elemento del título y descripción
    var ElementoT = document.getElementById('titulo');
    var ElementoD = document.getElementById('contenido');
    var ElementoI = document.getElementById('imagen');

    // Mostrar información según el punto seleccionado
    switch (puntoId) {
        case 1:
            ElementoT.textContent = 'Ciudad Amurallada';
            ElementoD.textContent = 'Esta muralla protegía a la ciudad de los ataques piratas en la costa, se construyó en piedra y actualmente se conserva su diseño colonial, pues dentro de esta se pueden observar calles y casas empedradas que llaman la atención.';
            ElementoI.src = 'IMAGENES/1.jpg';
            break;
        case 2:
            ElementoT.textContent = 'Getsemaní';
            ElementoD.textContent = 'Un barrio histórico y cultural en Cartagena, conocido por sus vibrantes murales, estrechas calles y animada vida nocturna.';
            ElementoI.src = 'IMAGENES/2.jpg';
            break;
        case 3:
            ElementoT.textContent = 'Castillo de San Felipe';
            ElementoD.textContent = 'Un logro de la ingeniería militar que refleja la estrategia defensiva de la ciudad durante la época colonial. Es un sitio que ofrece una gran vista a la ciudad y un lugar imprescindible de visitar.';
            ElementoI.src = 'IMAGENES/3.jpg';
            break;
        case 4:
            ElementoT.textContent = 'Parque el Centenario';
            ElementoD.textContent = 'De los parques más antiguos de la ciudad, se inauguró en 1911 para el centenario de la independencia de Colombia. Allí se pueden ver diferentes esculturas y monumentos que son de atractivo para los habitantes y visitantes de esta ciudad.';
            ElementoI.src = 'IMAGENES/4.jpg';
            break;
        case 5:
            ElementoT.textContent = 'Baluarte de Santo Domingo';
            ElementoD.textContent = 'Este baluarte fue estratégicamente ubicado en la esquina al noroeste de la muralla, su función era defender la entrada al puerto de la ciudad, se contruyó con muros de piedra sólidos. Este baluarte cuenta con cañones que defendían la ciudad ante cualquier amenaza.';
            ElementoI.src = 'IMAGENES/5.jpg';
            break;
        case 6:
            ElementoT.textContent = 'Torre del Reloj';
            ElementoD.textContent = 'Un monumento ubicado a la entrada de la ciudad amurallada, su contrucción inició en el siglo XIX y simboliza la entrada a esta ciudad en donde se marca el acceso al casco antiguo de Cartagena.';
            ElementoI.src = 'IMAGENES/6.jpg';
            break;
        // Agrega más casos según tus marcadores
    }

    // Mostrar el elemento de información
    var informacionElemento = document.getElementById('info');
    informacionElemento.style.display = 'block';
    verVentana = true;
}
