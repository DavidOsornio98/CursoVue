const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad : 45,
    direccion: {
        ciudad:'NW',
        zip:3434,
        lat:34343,
        lng:32434

    }
}


const persona2 = {...persona}


persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);