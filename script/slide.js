// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const images = document.querySelectorAll('.slider img');

// let currentIndex = 0;

// function showImage(index) {
//   images.forEach(image => image.classList.remove('active'));
//   images[index].classList.add('active');
// }

// function prevImage() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = images.length - 1;
//   }
//   showImage(currentIndex);
// }

// function nextImage() {
//   currentIndex++;
//   if (currentIndex >= images.length) {
//     currentIndex = 0;
//   }
//   showImage(currentIndex);
// }

// prevBtn.addEventListener('click', prevImage);
// nextBtn.addEventListener('click', nextImage);

// showImage(currentIndex);


    // Obtener las imágenes del slide
    const slideImages = document.querySelectorAll('.slide-image');

    // Definir el intervalo de tiempo en milisegundos (por ejemplo, 3 segundos)
    const intervaloTiempo = 3000;

    // Variable para almacenar el índice de la imagen activa
    let indiceImagenActiva = 0;

    // Función para cambiar la imagen activa en el slide
    function cambiarImagen() {
      // Ocultar la imagen actual
      slideImages[indiceImagenActiva].style.transform = 'translateX(-100%)';

      // Incrementar el índice de la imagen activa
      indiceImagenActiva++;

      // Si se alcanza el final del slide, volver al inicio
      if (indiceImagenActiva >= slideImages.length) {
        indiceImagenActiva = 0;
      }

      // Mostrar la siguiente imagen
      slideImages[indiceImagenActiva].style.transform = 'translateX(0)';
    }

    // Iniciar el intervalo para cambiar las imágenes automáticamente
    setInterval(cambiarImagen, intervaloTiempo);