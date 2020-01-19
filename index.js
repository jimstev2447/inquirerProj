const inquirer = require("inquirer");
const clear = require("clear");

const menu = {
  type: "list",
  name: "main",
  message: "welcome, please select from the option below",
  choices: ["play a game", "options", "exit"]
};
const grid = [
  [[], [], []],
  [[], [], []],
  [[], [], []]
];

const showGrid = () => {
  grid.forEach(line => {
    console.log("# # #");
  });
};

const welcome = () => {
  inquirer.prompt(menu).then(answer => {
    clear();
    switch (answer.main) {
      case "play a game":
        console.log("gamer are we???");
        showGrid();
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
