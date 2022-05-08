const inquirer = require('inquirer');
const Employee = require('./__tests__/Employee');
const Manager = require('./__tests__/Manager');
const Engineer = require('./__tests__/Engineer');
const Intern = require('./__tests__/Intern');
const fs = require('fs');

team = [];
    const managerQuestions = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team managers id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team managers email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team managers office number?',
            },
            {
                type: 'list',
                name: 'addMember',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
            }
        ])}