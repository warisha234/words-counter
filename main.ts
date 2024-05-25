#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// currency converter

console.log(chalk.blueBright("\n \t currency converter \n"));

let exchange_rate: any = {
    "USD" : 1,
    "EUR" :0.9,
    "JYP" :113,
    "CAD" :1.3,
    "AUD" :1.65,
    "PKR" :277,
}
 
// promt the user to select currencies to convert from and to.
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: (chalk.italic.blueBright("Select Currency to Convert from ")),
        choices: ["USD","EUR","JYP","CAD" ,"AUD","PKR"]
    },
    {
        name:"to_currency",
        type: "list",
        message:(chalk.italic.blueBright("select the currency to convert into")),
        choices:["USD","EUR","JYP","CAD" ,"AUD","PKR"],
    },
    {
        name:"amount",
        type: "input",
        message:(chalk.italic.blueBright("Enter the amount to convert:")),
    }
])
// perform the currency conversion by using formula

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// formula applying
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

//displayText
console.log(chalk.bold.greenBright(`converted_amount: ${converted_amount}`));



