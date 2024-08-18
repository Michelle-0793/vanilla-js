async function GetUsers() {
    try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();
        console.log(data); // Esto muestra los datos en la consola
        return data; // Esto permite que los datos se utilicen fuera de la función
    } catch (error) {
        console.error(error);
        return undefined; // Devolver undefined en caso de error
    }
}

export { GetUsers };