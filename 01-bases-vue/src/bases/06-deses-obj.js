const person = {
    name : 'tony',
    age:45,
    codeName:'Iroman'

    
}




const {age, name, codeName, power = 'No tiene poder'} = person

// console.log(name);
// console.log(age);
// console.log(codeName);
// console.log(power);


const createHero = ({age, name, codeName, power = 'No tiene poder'}) => ({
    id:121212121,
    name,
    age,
    codeName ,
    power

})

console.log(createHero(person));