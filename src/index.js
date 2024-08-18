// Inserte el código aquí
const reloj = document.getElementById("reloj");

function actualizarHora() {
    const ahora = new Date(); // Obtiene la hora actual
    const horaFormateada = ahora.toLocaleTimeString(); // Formatea la hora a un string legible
    reloj.textContent = horaFormateada; // Actualiza el contenido del elemento con id 'reloj'
}

// Llama a la función actualizarHora cada segundo
setInterval(actualizarHora, 1000);

// Llama a la función una vez al cargar la página para mostrar la hora inmediatamente
actualizarHora();


import { GetUsers } from "./servicios/getUsers";

let mostrarNombre = document.getElementById("mostrarNombre")


resolverPromesa() //llama a la funcion de resolver promesa

async function resolverPromesa() {
    let infoUsers = await GetUsers(); 
    console.log(infoUsers);
     
}

