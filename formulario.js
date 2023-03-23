function crearTarjeta() {
  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var nacionalidad = document.getElementById("nacionalidad").value;

  // Crear una nueva tarjeta con los valores del formulario
  var tarjeta = document.createElement("div");
  tarjeta.className = "elemento-lista";
  tarjeta.innerHTML = `
    <h2>${nombre}</h2>
    <p>Edad: ${edad}</p>
    <p>Nacionalidad: ${nacionalidad}</p>
    <button onclick="eliminarTarjeta(this)">Eliminar</button>
  `;

  // Agregar la nueva tarjeta al contenedor de tarjetas
  var contenedorTarjetas = document.getElementById("tarjetas");
  contenedorTarjetas.appendChild(tarjeta);

  // Limpiar los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("nacionalidad").value = "";
}

function eliminarTarjeta(boton) {

  var tarjeta = boton.parentNode;


  var contenedorTarjetas = document.getElementById("tarjetas");
  contenedorTarjetas.removeChild(tarjeta);
}