const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./object_classes').Manager;
const Engineer = require('./object_classes').Engineer;
const Intern = require('./object_classes').Intern;
const teamMembers = []

function logicChain(choice) {
    switch(choice) {
        case 'Add a Manager to the Team':
            return(askManager())
        case 'Add an Engineer to the Team':
            let engineerAnswers = askEngineer();
            return(engineerAnswers)
        case 'Add an Intern to the Team':
            return('something')
        case 'QUIT':
            return('something')
    }

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
                managerOutput.push(answers);
                ask();
              } else {
                  managerOutput.push(answers);
                //   console.log(answerOutput);
                  return(managerOutput);
                }
            });
        }
        ask();

        teamMembers.push(managerOutput)
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
                name: 'phone',
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
                engineerOutput.push(answers);
                ask();
              } else {
                  engineerOutput.push(answers);
                  return(answerOutput);
                }
            });
        }
        ask();
    }
}

const processQuestions = [
        {
        type: 'list',
        name: 'process',
        message: 'What would you like to do?',
        choices: [ "Add a Manager to the Team", "Add an Engineer to the Team","Add an Intern to the Team", "QUIT"]
        }
    ]


    inquirer.prompt (processQuestions)
        .then(answers => {
            logicChain(answers.process)
        })
        .catch( error => {
            if(error) {
                console.log(error);
            }
        })
    
    // const managerCard = new Manager('joe', '1234', 'j@j.com', '1234568910').createManagerCard();
    // console.log(managerCard)
      
// // var engineerCard = `
// // `        
// // var internCard = `
// // `            

// // var manager = $('#manager');
// // var engineer = $('.engineer');
// // var intern = $('intern')