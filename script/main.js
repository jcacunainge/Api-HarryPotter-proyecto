let datosLibros = [
    {
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/c4/e9/c4e93e876288b4a0021a0cef47efc8bf.jpg",
      "libro": "Harry Potter y la piedra filosofal",
      "fecha_de_lanzamiento": "26 de junio de 1997",
      "autora": "J. K. Rowling",
      "descripcion": "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee."
    },
    {

      "imagen": "https://www.librosyliteratura.es/wp-content/uploads/2013/01/harry-potter-y-la-camara-secreta.jpg",
      "libro": "Harry Potter y la cámara secreta",
      "fecha_de_lanzamiento": "2 de julio de 1998",
      "autora": "J. K. Rowling",
      "descripcion": "Harry Potter y los estudiantes de segundo año investigan una malévola amenaza para sus compañeros de clases de Hogwarts, una amenazante bestia que se esconde dentro del castillo."
    },
    {

      "imagen": "https://libreriadelau.vtexassets.com/arquivos/ids/20648802-800-auto?v=637578841032230000&width=800&height=auto&aspect=true",
      "libro": "Harry Potter y el prisionero de Azkaban",
      "fecha_de_lanzamiento": "8 de julio de 1999",
      "autora": "J. K. Rowling",
      "descripcion": "El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter."
    },
    {
      "id": 4,
      "imagen": "https://libreriadelau.vtexassets.com/arquivos/ids/26086718-800-auto?v=637899096972200000&width=800&height=auto&aspect=true",
      "libro": "Harry Potter y el cáliz de fuego",
      "titulo_original": "Harry Potter and the Goblet of Fire",
      "fecha_de_lanzamiento": "8 de julio de 2000",
      "autora": "J. K. Rowling",
      "descripcion": "Hogwarts se prepara para el Torneo de los Tres Magos, en el que competirán tres escuelas de hechicería. Para sorpresa de todos, Harry Potter es elegido para participar en la competencia, en la que deberá luchar contra dragones, internarse en el agua y enfrentarse a sus mayores miedos."
    },
    {
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/a0/b4/a0b46533ad541c885d6a406da0e9c429.jpg",
      "libro": "Harry Potter y la orden del Fénix",
      "fecha_de_lanzamiento": "21 de junio de 2003",
      "autora": "J. K. Rowling",
      "descripcion": "En su quinto año en Hogwarts, Harry descubre que muchos integrantes de la comunidad de magos no conocen la verdad acerca de su encuentro con Lord Voldemort. Cornelius Fudge, ministro de magia, designa a Dolores Umbridge como maestra de defensa contra de las artes oscuras porque cree que el profesor Dumbledore planea apoderarse de su trabajo. Pero sus enseñanzas son inadecuadas, por lo que Harry prepara a los estudiantes para defender la escuela en contra del mal."
    },
    {
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/ac/d2/acd22d20d3bd39e68e81b69ebcbe4c54.jpg",
      "libro": "Harry Potter y el misterio del príncipe",
      "fecha_de_lanzamiento": "16 de julio de 2005",
      "autora": "J. K. Rowling",
      "descripcion": "Harry descubre un poderoso libro y, mientras trata de descubrir sus orígenes, colabora con Dumbledore en la búsqueda de una serie de objetos mágicos que ayudarán en la destrucción de Lord Voldemort."
    },
    {
      "imagen": "https://images.cdn2.buscalibre.com/fit-in/360x360/48/ce/48cea8cee71c3e8bc19e8f587afc2469.jpg",
      "libro": "Harry Potter y las reliquias de la muerte",
      "fecha_de_lanzamiento": "21 de julio de 2007",
      "autora": "J. K. Rowling",
      "descripcion": "Harry, Ron y Hermione se van a una peligrosa misión para localizar y destruir el secreto de la inmortalidad y destrucción de Voldemort - los Horrocruces. Solos, sin la guía de sus profesores o la protección del Profesor Dumbledore, los tres amigos deben apoyarse el uno en el otro más que nunca. Pero hay Fuerzas Oscuras en medio que amenazan con separarlos. Harry Potter se está acercando cada vez más a la tarea para la que se ha preparado desde el primer día que pisó Hogwarts: la última batalla con Voldemort."
    },
    {
      "imagen": "https://libreriadelau.vtexassets.com/arquivos/ids/25876150-800-auto?v=637887411694530000&width=800&height=auto&aspect=true",
      "libro": "Harry Potter y el legado maldito",
      "fecha_de_lanzamiento": "30 de julio de 2016",
      "autora": "J. K. Rowling",
      "descripcion": "El segundo hijo de Harry entró a Hogwarts, pero en Slytherin. Su relación con Harry cada vez es peor y se hizo muy amigo del hijo de Draco, Scorpius Malfoy que se dice que es el hijo de Lord Voldemort"
    }
  ];
  

  function crearCardLibro(libro) {
    let itemsLibro = document.createElement('div');
    itemsLibro.innerHTML = `
      <div class="contenedor-libros">
        <div class="libros-container">
            <div>
                <h2 class="titulo-libros">${libro.libro}</h2>
                <p>${libro.fecha_de_lanzamiento}</p>
                <p class="descripción-libro">${libro.descripcion}</p>
                <p class="titulo-autora">${libro.autora}</p>
                <div class="btn-leerLibro">
                    <button class="custom-btn btn-1" id="libro1">
                        <span class="box">
                            Leer libro
                        </span>
                    </button> 
                    <img src="../assets/img/book-90.gif" width="70px" alt="">
                </div>
            </div>
            <div class="contenedorImagen">
                <img class="imagen-libro" src="${libro.imagen}" alt="">
            </div>
        </div>
      </div>
    `;
  
    return itemsLibro;
  }
  
  // Resto de tu código...
  
  

const listaPokemons = document.querySelector('#tarjetaLibrosgeneral');

  

// Generar el HTML de cada libro y agregarlo al contenedor
datosLibros.forEach(function(libro) {
  // const tarjetaLibro = document.createElement("div");
  let varibleLibro = crearCardLibro(libro);
  listaPokemons.appendChild(varibleLibro)



});


document.addEventListener('DOMContentLoaded', function() {
  // Tu código aquí
  const miElemento = document.getElementById('miElemento');
  miElemento.addEventListener('click', function() {
    console.log('Se hizo clic en miElemento');
  });
});