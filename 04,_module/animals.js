const animals = ['puppy', 'cat'];

function showAnimals() {
  animals.map((el) => console.log(el));
}

// exports.animals = animals; // animals 를 animals라는 이름으로 빼줄거야

exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

module.exports = {
  animals,
  showAnimals,
};
