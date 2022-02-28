const nombre = 'Alexandra'
const apellido = 'vieyra'

const nombreCompleto = `${nombre} ${apellido}`


function getSaludo(nombre) {
    return 'Hola ' + nombre
    
}

console.log(`Este un texto : ${getSaludo(nombre)}`);