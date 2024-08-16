//Función para clonar arreglo
function clonarArreglo(arreglo) {
    return [...arreglo]   
}

const arreglo = [1, 2, 3, 4];
let arregloClonado = clonarArreglo(arreglo);

////Función para clona objeto
function clonarObjeto(jardin) {
    return {...jardin}   
}

const jardin = {
    flores: "rosas",
    arboles: "almendro",
    macetas: 3,
};
let jardinClonado = clonarObjeto(jardin);

//Función para sumar varios números
function sumar(...numeros) {
    return numeros.reduce ((acumulador, numeroActual) => acumulador + numeroActual, 0)
}

const resultadoSuma = sumar(2,4,5,6);

//Función saludar
function saludar(nombre = `Desconocido`) {
    return `Hola`, nombre;    
}


// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };