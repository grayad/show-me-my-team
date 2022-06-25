// required module packages
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

// array where user inputs of employee data will be pushed
const teamArr = [];

console.log('Please build your team');

// questions for manager
const mgrQArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the team manager's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the team manager's id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the team manager's email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?",
        validate: office => {
            if (office) {
                return true;
            } else {
                console.log("Please enter the team manager's office number.");
                return false;
            }
        }
    },
];

// questions for engineer
const engQArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the engineer's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the engineer's id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the engineer's email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter the engineer's github username.");
                return false;
            }
        }
    }
]

// questions for intern
const intQArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the intern's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the intern's id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the intern's email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter the intern's school.");
                return false;
            }
        }
    }
]

const typeQArr = [
    {
        type: 'list',
        name: 'type',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I do not want to add anymore team members']
    }
]

const promptEng = () => {
    inquirer.prompt(engQArr)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArr.push(engineer);

            promptType();
        })
};

const promptInt = () => {
    inquirer.prompt(intQArr)
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArr.push(intern);

            promptType();
        })

};

const promptType = () => {
    inquirer.prompt(typeQArr)
        .then(answer => {
            if(answer.type === 'Engineer') {
                promptEng();
            } else if(answer.type === 'Intern') {
                promptInt();
            } else {
                console.log('Your team profile has been created! Check out team.html!')
                return;
            }
        })
}
const promptUser = () => {
    inquirer
        .prompt(mgrQArr)
            .then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamArr.push(manager);

                promptType();
            })
};

promptUser();



function showTeam() {

};

module.exports = showTeam;