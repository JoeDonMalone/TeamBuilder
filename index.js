const fs = require('fs'); // write html file to './dist';
const inquirer = require('inquirer');
const Manager = require('./lib/object_classes').Manager;
const Engineer = require('./lib/object_classes').Engineer;
const Intern = require('./lib/object_classes').Intern;
const teamMembers = { managers: [], employees:[], engineers: [], interns: [] }
const managerDivs = []
const engineerDivs = []
const internDivs = []

function askManager() {
    // name, EID, email, phone
   const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager Name?"
        },
        {
            type: 'input',
            name: 'EID',
            message: "What is the Manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?"
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is the Manager Phone Number?'
        }, 
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Would you like to add another Manager? (Enter for YES)?',
            default: true,
          }
    ];

    let managerOutput = [];

    function ask() {
        inquirer.prompt(managerQuestions).then((answers) => {
          if (answers.askAgain) {
            teamMembers.managers.push(answers)
            console.log(teamMembers)
            ask();
          } else {
            teamMembers.managers.push(answers)
              console.log(teamMembers);
              return(askQuestions());
            }
        });
    }
    ask();
}

function askEngineer() {
    // name, EID, email , github
   const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer Name?"
        },
        {
            type: 'input',
            name: 'EID',
            message: "What is the Engineer ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username(Not a url, only the Username)?"
        }, 
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Would you like to add another Engineer? (Enter for YES)?',
            default: true,
          }
    ];

    let engineerOutput = [];

    function ask() {
        inquirer.prompt(engineerQuestions).then((answers) => {
          if (answers.askAgain) {
            teamMembers.engineers.push(answers)
            console.log(teamMembers)
            ask();
          } else {
            teamMembers.engineers.push(answers)
              console.log(teamMembers)
              return(askQuestions());
            }
        });
    }
    ask();
}

function askIntern() {
    // name, EID, email , github
   const internQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern Name?"
        },
        {
            type: 'input',
            name: 'EID',
            message: "What is the intern ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school/university is the intern currently attending?"
        }, 
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Would you like to add another Engineer? (Enter for YES)?',
            default: true,
          }
    ];
//name, EID, email, school
    function ask() {
        inquirer.prompt(internQuestions).then((answers) => {
          if (answers.askAgain) {
            teamMembers.interns.push(answers)
            console.log(teamMembers)
            ask();
          } else {
            teamMembers.interns.push(answers)
              console.log(teamMembers)
              return(askQuestions());
            }
        });
    }
    ask();
}

function askQuestions() {

    const processQuestions = {
            type: 'list',
            name: 'process',
            message: 'What would you like to do?',
            choices: [ "Add a Manager to the Team", "Add an Engineer to the Team", "Add an Intern to the Team", "DONE. Take Me to My Team!"]
    }

    inquirer.prompt (processQuestions).then((answers) => {
        if (answers.process === "Add a Manager to the Team") {
            askManager();
        }
        else if (answers.process === "Add an Engineer to the Team") {
            askEngineer();
        }
        else if (answers.process === "Add an Intern to the Team") {
            askIntern();
        } 
        else { 
            // writeHTML();
            getEmployeecards();
        };
    })
    .catch( error => {
        if(error) {
            console.log(error);
        }
    })
}

function writeHTML() {
   var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Team Builder</title>
    </head>
    <body>
    
        <header>
            <div class = 'headers-title-container-flex-row'>
                <h1>Team Structure</h1>
            </div>
        </header>
        <div class = 'main-container-flex-column'>
            <div class = 'headers-title-container-flex-row'>
                <h2> Management</h2>
            </div>
            <div class = 'manager-container-row'>
                ${managerDivs.join('')}
            </div>

            <div class = 'emp-intern-column'>
    
                <div class = 'intern-employee-container'>
                    <div class = 'intern-employee-container-flex-row'>
                        ${engineerDivs.join('')}
                    </div>
                    <div class = 'headers-title-container-flex-row'>
                        <h3>Engineers</h3>
                    </div>
                </div>
    
                <div class = 'intern-employee-container'>
                    <div class = 'intern-employee-container-flex-row'>
                        ${internDivs.join('')}
                    </div>
                    <div class = 'headers-title-container-flex-row'>
                        <h3>Interns</h3>
                    </div>
                </div>
                
            </div>
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    </body>
    </html>`
    return(html)
}

askQuestions();

function getEmployeecards() {
    let managers = teamMembers.managers;
    let engineers = teamMembers.engineers;
    let interns = teamMembers.interns;

    managers.forEach(manager => {
        var managerObject = new Manager(manager);
        managerDivs.push(managerObject.createManagerCard());
    });

    engineers.forEach(engineer => {
        var engineerObject = new Engineer(engineer);
        engineerDivs.push(engineerObject.createEngineerCard());
    });

    interns.forEach(intern => {
        var internObject = new Intern(intern);
        internDivs.push(internObject.createInternCard());
    });

    fs.writeFile('testing.html', writeHTML(), (err) =>
  err ? console.error(err) : console.log('Success!'));
}

function drawLines() {
    
}
