const inquirer = require("inquirer");
const clear = require("clear");

const menu = {
  type: "list",
  name: "main",
  message: "welcome, please select from the option below",
  choices: ["play a game", "options", "exit"]
};
const grid = [
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []]
];

const makeGrid = size => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    grid.push([]);
    for (let j = 0; j < size; j++) {
      grid[i].push(0);
    }
  }
  return grid;
};

const makeMonsters = gridSize => {
  let monsters = [];
  monsters.push([
    Math.floor(Math.random() * Math.floor(gridSize)),
    Math.floor(Math.random() * Math.floor(gridSize))
  ]);
  return monsters;
};

const showGrid = grid => {
  let count = grid.length;
  grid.forEach(line => {
    console.log(
      line.reduce((acc, cur) => {
        const tolog = cur || " ";
        return `${acc} ${tolog}`;
      }, `${count}`)
    );
    count--;
  });
  console.log("  a b c d e f g h j");
};

const welcome = () => {
  inquirer.prompt(menu).then(answer => {
    clear();
    switch (answer.main) {
      case "play a game":
        console.log("gamer are we???");
        let newGrid = makeGrid(9);
        const Monster = makeMonsters(9);
        Monster.forEach(([monsterX, monsterY]) => {
          newGrid[monsterY][monsterX] = "M";
          if (monsterY > 0) {
            newGrid[monsterY - 1][monsterX]++;
          }
          if (monsterY < 8) {
            newGrid[monsterY + 1][monsterX]++;
          }
          if (monsterX > 0) {
            newGrid[monsterY][monsterX - 1]++;
          }
          if (monsterX < 8) {
            newGrid[monsterY][monsterX + 1]++;
          }
        });
        showGrid(newGrid);

        welcome();
        break;
      case "options":
        console.log("there are no options only games");
        welcome();
        break;
      case "exit":
        console.log("you cant leave yet play a game with me ...");
        break;
    }
  });
};

welcome();
