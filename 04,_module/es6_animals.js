const animals = ['puppy', 'cat']; // 뺄 거 앞에 export

function showAnimals() {
  animals.map((el) => console.log(el));
}

export { animals, showAnimals };
