const human = ['철수', '영희'];

function showHuman() {
  human.map((el) => console.log(el));
}

exports.human = human;

exports.showHuman = function showHuman() {
  human.map((el) => console.log(el));
};
