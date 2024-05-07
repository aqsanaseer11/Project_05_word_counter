#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.redBright.bold("Please! Enter the phrase you want to count the words and letters?"))
    }
]);
const words = answers.sentence.trim().split(" ");
const letters = answers.sentence.replace(/\s+/g, "");
console.log(chalk.bgWhiteBright.black.bold(`"${words}"`));
console.log(chalk.blueBright.bold.underline(`"Your total number of words are: ${words.length}" & "letters are: ${letters.length}".`));
