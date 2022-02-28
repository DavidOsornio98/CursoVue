const characters =['Goku', 'Vegeta','Trunks','Goten']

const [, , , g = "sin valor" ] = characters

const returnArray = ([letters, numbers]) => {

    return [letters,numbers]

}



const [letter, number] = returnArray(['xyz', 987])

console.log(letter, number);