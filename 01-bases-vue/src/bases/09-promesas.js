import {getHeroById} from './bases/08-expo-inpo'
// console.log('Inicio');


// new Promise( (resolve, reject) => {

//     console.log('Cuerpo de la promesa');
//     reject('Promesa No Resuelta')


// })

// .then(console.log)
// .catch(console.log)
// console.log('fin');


const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroById(id)


            if (hero){
                resolve(hero)
            }else{
                reject('No Existe')

            }

            
        },1000);
    });
}

getHeroByIdAsync(1)
.then( h => {
    console.log(`El heroe es:  ${h.name}`);
})
.catch(console.log)