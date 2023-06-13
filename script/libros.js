//Libro 1, la piedra filosofal
//Apartado para descargar el hoja de vida  
let openButton = document.getElementById("libro1");
openButton.addEventListener("click", function() {
  fetch("../assets/libros/libro1.pdf")
    .then(response => response.arrayBuffer())
    .then(buffer => {
      let blob = new Blob([buffer], { type: "application/pdf" });
      let url = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.click();
    });
});