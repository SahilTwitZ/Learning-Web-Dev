//check npm website for packages and how to use them

// var nameGenerator = require("sillyname"); // CommonJS syntax 
// import nameGenerator from "sillyname";  // ES6 syntax
// var sillyname = nameGenerator();

// console.log(`My name is ${sillyname}.`);

import {randomSuperhero} from 'superheroes';
var mySuperHeroName = randomSuperhero();;
console.log(`My superhero name is ${mySuperHeroName}.`);

// import * as superheroes from 'superheroes';

// const mySuperHeroName = superheroes.randomSuperhero();
// console.log(`My superhero name is ${mySuperHeroName}.`);
