const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your team\'s manager name: ',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Enter manager\'s employee ID: ',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'Enter manager\'s email address: ',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Enter manager\'s office number: ',
            name: 'managerOfficeNumber'
        }

    ]).then(answer => {
        const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber);
        employees.push(generateManagerHTML(manager));    
        addTeamMembers();
    });
};

const addTeamMembers = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employees do you want to enter?',
            choices: ['Engineer', 'Intern'],
            name: 'type'
        },
        {
            type: 'input',
            message: 'Enter employee\'s name: ',
            name: 'employeeName'
        },
        {
            type: 'input',
            message: 'Enter employee\'s ID: ',
            name: 'employeeID'
        },
        {
            type: 'input',
            message: 'Enter employee\'s email: ',
            name: 'employeeEmail'
        },
        {
            when: input => input.type === 'Engineer',
            type: 'input',
            message: 'Enter employee\'s github username: ',
            name: 'employeeGithub'
        },
        {
            when: input => input.type === 'Intern',
            type: 'input',
            message: 'Enter intern\'s school: ',
            name: 'employeeSchool'
        },
        {
            type: 'confirm',
            message: 'Would you like to enter another team member? ',
            name: 'confirmation',
            default: false
        }
    ]).then(data => {
        let employee;

        if(data.type === 'Engineer'){
            employee = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.employeeGithub);
            employees.push(generateEngineerHTML(employee));
        }
        else if(data.type === 'Intern'){
            employee = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.employeeSchool);
            employees.push(generateInternHTML(employee));
        }

        if(data.confirmation){
            addTeamMembers();
        }
        else{
            console.log('Creating Team Profile HTML file...');
            fs.writeFile('./dist/index.html', generateTeamProfile(employees), (err) => err ? console.log(err) : console.log("Successful! File was created."))
        }

    });
}

const generateManagerHTML = manager => {
    return `
    <div class="col-4">
        <div class="card m-3">
            <div class="card-header bg-primary">
                <h3>${manager.getName()}</h3>
                <h4><i class="fas fa-coffee" style="color:white;"></i> ${manager.getRole()}</h4>
            </div>

            <div class="card-body p-4">
                <p class="m-0 p-4" style="border: 1px solid grey">ID: ${manager.getID()}</p>
                <p class="m-0 p-4" style="border: 1px solid grey">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="m-0 p-4" style="border: 1px solid grey">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>`;
};

const generateEngineerHTML = engineer => {
    return `
    <div class="col-4">
        <div class="card m-3">
            <div class="card-header bg-primary">
                <h3>${engineer.getName()}</h3>
                <h4><i class="fas fa-glasses" style="color:white;"></i> ${engineer.getRole()}</h4>
            </div>

            <div class="card-body p-4">
                <p class="m-0 p-4" style="border: 1px solid grey">ID: ${engineer.getID()}</p>
                <p class="m-0 p-4" style="border: 1px solid grey">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="m-0 p-4" style="border: 1px solid grey">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
            </div>
        </div>
    </div>`;
};

const generateInternHTML = intern => {
    return `
    <div class="col-4">
        <div class="card m-3">
            <div class="card-header bg-primary">
                <h3>${intern.getName()}</h3>
                <h4><i class="fas fa-user-graduate" style="color:white;"></i> ${intern.getRole()}</h4>
            </div>

            <div class="card-body p-4">
                <p class="m-0 p-4" style="border: 1px solid grey">ID: ${intern.getID()}</p>
                <p class="m-0 p-4" style="border: 1px solid grey">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="m-0 p-4" style="border: 1px solid grey">School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div>`;
};

const generateTeamProfile = employees => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <style>
            .card {
                box-shadow: 3px 3px 5px black;
            }
        </style>
    </head>
    <body>
        <header class="p-4 mb-4 bg-danger">
            <h1 class="text-center" style="color:white;">My Team</h1>
        </header>

        <main>
            <div class="row justify-content-center">
                ${employees.join('')}
            </div>
        </main>
        
    </body>
    </html>`;
};

init();