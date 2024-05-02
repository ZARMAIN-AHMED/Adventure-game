import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.italic.yellow("WELCOME TO ADVENTURE GAME"));
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = +100;
    }
}
class opponent {
    name;
    fuel = 100;
    static select;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let players = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter yor name",
    }
]);
console.log(players.name);
let opponents = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your opponent",
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
]);
let p1 = new player(players.name);
let o1 = new opponent(opponents.select);
do {
    if (opponents.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life...!"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose Better Luck Next Time....!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win...!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`Your Drink Health Portion Your Fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run For Your Life...!") {
            console.log(chalk.bold.red.italic("You Loose Better Luck Next Time"));
            process.exit();
        }
    }
    //Assassain
    if (opponents.select == "Assassin") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life...!"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose Better Luck Next Time....!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win...!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`Your Drink Health Portion Your Fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run For Your Life...!") {
            console.log(chalk.bold.red.italic("You Loose Better Luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (opponents.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life...!"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose Better Luck Next Time....!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win...!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`Your Drink Health Portion Your Fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run For Your Life...!") {
            console.log(chalk.bold.red.italic("You Loose Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
