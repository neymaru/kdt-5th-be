// const animalModule = require('./animals');

// console.log(animalModule);
// console.log(animalModule.animals); //  모듈명.animals
// animalModule.showAnimals();  //

// 구조분해 할당 문법
// {
//   animals,
//   showAnimals,
// };
const { animals, showAnimals } = require('./animals'); // 객체형태를 바로써서 모듈명을 안쓰고도 바로 접근 가능하다.

console.log(animals);
showAnimals();
