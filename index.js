const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

function init() {
    inquirer.prompt([
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

    ]);
}