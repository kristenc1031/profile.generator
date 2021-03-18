const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template");
const team = [];

function menu() {
    function manager() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is team managers name?"
            },
            {
                type: "input",
                name: "ID",
                message: "What is team managers ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is managers email?",
            },
            {
                type: "input", 
                name: "officeNumber",
                message: "What is managers office number?",
            },
        ]).then(answer => {
            const manager = new Manager(answer.name, answer.ID, answer.email, answer.officeNumber);
            team.push(manager);
            buildTeam();
        })
    }

    function buildTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Which type of member would you like to add?",
                choices: ["Engineer", "Intern", "buildTeam"]
            },
        ]).then(answer => {
            switch (answer.choice) {
                case "Engineer":
                    createEngineer()
                    break;
                case "Intern":
                    createIntern()
                    break;
                default:
                    generateTeam()
            }
        })
    }
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is team engineers name?"
            },
            {
                type: "input",
                name: "ID",
                message: "What is team engineers ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is engineers email?",
            },
            {
                type: "input", 
                name: "gitHub",
                message: "What is engineers GitHub account?",
            },
        ]).then(answer => {
            const engineer = new Engineer(answer.name, answer.ID, answer.email, answer.gitHub);
            team.push(engineer);
            buildTeam();
        })
    }
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is team Interns name?"
            },
            {
                type: "input",
                name: "ID",
                message: "What is team Interns ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is Interns email?",
            },
            {
                type: "input", 
                name: "schoolName",
                message: "What is Interns school name?",
            },
        ]).then(answer => {
            const intern = new Intern(answer.name, answer.ID, answer.email, answer.schoolName);
            team.push(intern);
            buildTeam();
        })
    }
    function generateTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(team), "utf-8")
    }
    manager()
}

menu()