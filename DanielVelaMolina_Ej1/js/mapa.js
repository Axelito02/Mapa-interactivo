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
            ElementoT.textContent = 'Bahía málaga';
            ElementoD.textContent = 'La Bahía Málaga es una bahía del océano Pacífico ubicada al occidente del departamento del Valle del Cauca, en Colombia, entre el delta del río San Juan y la bahía de Buenaventura.';
            ElementoI.src = 'img/actividades_1.jpg';
            break;
        case 2:
            ElementoT.textContent = 'La Bocana';
            ElementoD.textContent = 'La Bocana es una de las playas más espectaculares del Pacífico colombiano, está muy cerca al puerto de Buenaventura, lo que hace que sea muy visitada por los turistas nacionales y extranjeros que buscan un destino sostenible y rico en naturaleza.';
            ElementoI.src = 'img/actividades_7.jpg';
            break;
        case 3:
            ElementoT.textContent = 'La Cascada La Sierpe';
            ElementoD.textContent = 'La cascada se encuentra ubicada en la Vereda la laja más o menos a 5 km del pueblo y una media hora en carro.';
            ElementoI.src = 'img/actividades_2.jpg';
            break;
        case 4:
            ElementoT.textContent = 'Juanchaco y Ladrilleros';
            ElementoD.textContent = 'De los parques más antiguos de la ciudad, se inauguró en 1911 para el centenario de la independencia de Colombia. Allí se pueden ver diferentes esculturas y monumentos que son de atractivo para los habitantes y visitantes de esta ciudad.';
            ElementoI.src = 'img/actividades_5.jpg';
            break;
        case 5:
            ElementoT.textContent = 'Reserva Forestal Protectora de los ríos Escalerete y San Cipriano';
            ElementoD.textContent = 'La Reserva protectora de los ríos Escalerete y San Cipriano se llega en ‘moto brujitas’, unos vehículos pequeños que avanzan sobre el ferrocarril. Ese es el primer atractivo que encuentran quienes viajan a este sitio de 8.564 ha, ubicado a unos 40 minutos de Buenaventura. Allí los turistas se pueden bañar en nueve pozos de agua dulce, hospedarse en cabañas y probar platos típicos de la región.';
            ElementoI.src = 'img/actividades_6.jpg';
            break;
        case 6:
            ElementoT.textContent = 'Atedral de Buenaventura';
            ElementoD.textContent = 'Un monumento ubicado a la entrada de la ciudad amurallada, su contrucción inició en el siglo XIX y simboliza la entrada a esta ciudad en donde se marca el acceso al casco antiguo de Cartagena.';
            ElementoI.src = 'img/actividades_8.jpg';
            break;
        case 7:
            ElementoT.textContent = 'Pianguita';
            ElementoD.textContent = 'En el océano Pacífico colombiano a menos de 30 minutos de Buenaventura, está ubicada la paradisiaca playa de Piangüita. Lugar ideal para el descanso y la recreación, rodeado por un imponente paisaje y una exuberante vegetación de manglar.';
            ElementoI.src = 'img/actividades_11.jpg';
            break;
    }

    // Mostrar el elemento de información
    var informacionElemento = document.getElementById('info');
    informacionElemento.style.display = 'block';
    verVentana = true;
}
