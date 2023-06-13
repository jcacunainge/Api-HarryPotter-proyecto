
// Obtener referencia al contenedor de las tarjetas y paginación
const tarjetasContainer = document.getElementById('tarjetas-container');
const paginationContainer = document.getElementById('pagination-container');

// Variables para la paginación
const elementosPorPagina = 6; // 3 columnas * 2 filas
let paginaActual = 1;
let datosActuales = [];

// Hacer una solicitud HTTP a la API
fetch('https://harry-potter-api.onrender.com/personajes')
  .then(response => response.json())
  .then(data => {
    // Asignar los datos de la API a la variable datosActuales
    datosActuales = data;

    // Mostrar la primera página
    mostrarPagina(datosActuales, paginaActual);

    // Calcular el número total de páginas
    const totalPaginas = Math.ceil(datosActuales.length / elementosPorPagina);

    // Generar los botones de paginación
    generarPaginacion(totalPaginas);
  })
  .catch(error => console.error('Error al obtener los personajes:', error));

// Función para mostrar la página actual
function mostrarPagina(datos, pagina) {
  // Calcular los índices de los elementos que se mostrarán
  const indiceInicio = (pagina - 1) * elementosPorPagina;
  const indiceFin = indiceInicio + elementosPorPagina;

  // Filtrar los elementos de acuerdo a los índices calculados
  const elementosAMostrar = datos.slice(indiceInicio, indiceFin);

  // Limpiar el contenedor de tarjetas antes de mostrar los nuevos elementos
  tarjetasContainer.innerHTML = '';

  // Recorrer los elementos a mostrar y generar las tarjetas
  elementosAMostrar.forEach(personaje => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';

    // Crear la estructura interna de la tarjeta utilizando los datos del personaje
    tarjeta.innerHTML = `
      <div class="calor-superior-inferior"></div>
      <img class="imagenPersonaje" src="${personaje.imagen}" alt="">
      <h2 class="titulo">${personaje.personaje}</h2>
      <div class="contenedor-descripcion">
        <div class="descripcion-titulo">
          <p>Casa de Hogwarts:</p>
          <p>Interpretado Por:</p>
          <p>Apodo:</p>
        </div>
        <div class="descripcion-valor-titulo">
          <p>${personaje.casaDeHogwarts}</p>
          <p>${personaje.interpretado_por}</p>
          <p>${personaje.apodo}</p>
        </div>
      </div>
      <div class="calor-superior-inferior"></div>
    `;

    // Agregar la tarjeta al contenedor
    tarjetasContainer.appendChild(tarjeta);
  });
}

// Función para generar los botones de paginación
function generarPaginacion(totalPaginas) {
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement('button');
    boton.textContent = i;
    boton.addEventListener('click', () => {
      paginaActual = i;
      mostrarPagina(datosActuales, paginaActual);
    });

    paginationContainer.appendChild(boton);
  }
}