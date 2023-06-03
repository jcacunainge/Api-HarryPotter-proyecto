
// Obtener referencia al contenedor de las tarjetas y paginación
const tarjetasContainer = document.getElementById('tarjetas-container');
const paginationContainer = document.getElementById('pagination-container');

// Variables para la paginación
const itemsPerPage = 6; // 3 columnas * 2 filas
let currentPage = 1;
let currentData = [];

// Hacer una solicitud HTTP a la API
fetch('https://harry-potter-api.onrender.com/personajes')
  .then(response => response.json())
  .then(data => {
    // Asignar los datos de la API a la variable currentData
    currentData = data;

    // Mostrar la primera página
    showPage(currentData, currentPage);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(currentData.length / itemsPerPage);

    // Generar los botones de paginación
    generatePagination(totalPages);
  })
  .catch(error => console.error('Error al obtener los personajes:', error));

// Función para mostrar la página actual
function showPage(data, page) {
  // Calcular los índices de los elementos que se mostrarán
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtrar los elementos de acuerdo a los índices calculados
  const itemsToShow = data.slice(startIndex, endIndex);

  // Limpiar el contenedor de tarjetas antes de mostrar los nuevos elementos
  tarjetasContainer.innerHTML = '';

  // Recorrer los elementos a mostrar y generar las tarjetas
  itemsToShow.forEach(personaje => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';

    // Crear la estructura interna de la tarjeta utilizando los datos del personaje
    tarjeta.innerHTML = `
      <div class="calor-superior-inferior"></div>
      <img class="imagenPersonaje" src="${personaje.imagen}" alt="">
      <h2>${personaje.personaje}</h2>
      <div class="contenedor-descripcion">
        <div class="descripcion-titulo">
          <p>Casa de Hogwarts:</p>
          <p>Interpretados Por:</p>
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
function generatePagination(totalPages) {
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      showPage(currentData, currentPage);
    });

    paginationContainer.appendChild(button);
  }
}