// function saludar(xyz){
//     return `Hola: ${xyz}`
// }

const saludar =  (xyz = 'Peter') =>  `Hola: ${nombre}`







const nombre = 'Tony'

// console.log(saludar(nombre));


const getUser = ()=>({
    
        uid: 'ABCD',
        username: 'Tony'
    
})


const heroes = [{
    id : 1,
    name : 'batman'
},{
    id : 2,
    name: 'Superman'
}]

//const existe = heroes.some(( heroes )=> heroes.id === 1)

const {name } = heroes.find(( heroes )=> heroes.id === 1)



console.log(name);