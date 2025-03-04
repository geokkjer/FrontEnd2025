import inquirer from 'inquirer'

async function runDemo() {
    let answers = await inquirer.prompt([
        {
        type: "input",
        name: "first_name",
        message: "Hva er navnet ditt?" 
        }
    ]).then(answers => console.log(`Hello, ${answers.first_name}`))
    
}
runDemo()