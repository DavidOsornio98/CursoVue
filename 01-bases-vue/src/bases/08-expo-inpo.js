// import {owners} from './data/heroes'
//import heroes from './data/heroes'
import heroes from '../data/heroes';
import superHeroes from '../data/heroes'


export const getHeroById = (id) => superHeroes.find(hero => hero.id === id);




// const result = heroes.filter((getHeroByOwner) => getHeroByOwner.owner === 'Marvel');

// console.log(result);

export const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner);

// import {getHeroById, getHeroByOwner} from './bases/08-expo-inpo'

// console.log(getHeroById(2)); 



// console.log(getHeroByOwner('Marvel')); 

