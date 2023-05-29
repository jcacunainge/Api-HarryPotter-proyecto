



fetch('https://harry-potter-api.onrender.com/personajes')
  .then(response => response.json())
  .then(data => {
    const selectedData = data.map(character => ({
      name: character.personaje,
      image: character.imagen,
      house: character.casaDeHogwarts,
      dateOfBirth: character.interpretado_por,
    }));

    const contenedorPersonaje = document.querySelector('#personaje');
    const searchInput = document.querySelector('#searchInput');

    searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.toLowerCase();
      const filteredData = selectedData.filter(character =>
        character.name.toLowerCase().includes(searchText)
      );

      mostrarPersonajes(filteredData);
    });

    function mostrarPersonajes(characters) {
      contenedorPersonaje.innerHTML = '';

      characters.forEach(selectedCharacter => {
        const personaje = crearPersonaje(selectedCharacter);
        contenedorPersonaje.appendChild(personaje);
      });
    }

    mostrarPersonajes(selectedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function crearPersonaje(selectedData) {
  const listaPersonaje = document.createElement('li');

  const imagenPersonaje = document.createElement('img');
  imagenPersonaje.src = selectedData.image;

  const nombrePersonaje = document.createElement('h3');
  nombrePersonaje.innerHTML = selectedData.name;

  const casaPersonaje = document.createElement('h5');
  casaPersonaje.innerHTML = selectedData.house;

  const cumpleañosPersonaje = document.createElement('p');
  cumpleañosPersonaje.innerHTML = selectedData.dateOfBirth;

  listaPersonaje.appendChild(imagenPersonaje);
  listaPersonaje.appendChild(nombrePersonaje);
  listaPersonaje.appendChild(casaPersonaje);
  listaPersonaje.appendChild(cumpleañosPersonaje);

  return listaPersonaje;
}
