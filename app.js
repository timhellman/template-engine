const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { ifError } = require("assert");

// var questions = []

var employeeArray = []

inquirer.prompt([
    {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: ["Engineer", "Manager", "Intern"]
    }])
    .then((data) => {
        if (data.role === "Engineer") {
            inquirer.prompt([{
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your GitHub address?",
                name: "github"
            }]).then(response => {
                employeeArray.push(new Engineer(response.name, response.id, response.email, response.github))
                console.log(employeeArray)
            })

        };
        if (data.role === "Manager") {
            inquirer.prompt([{
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber"
            }]).then(response => {
                employeeArray.push(new Manager(response.name, response.id, response.email, response.officeNumber))
            })
        };
        if (data.role === "Intern") {
            inquirer.prompt([{
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your school?",
                name: "school"
            }]).then(response => {
                employeeArray.push(new Intern(response.name, response.id, response.email, response.school))
                addEmployees()
            })
        }
    });

    function addEmployees(){ 
        fs.writeFile("team.html", JSON.stringify(employeeArray), function (error) {
        console.log(employeeArray);
        if (error) throw error
    })}
    
    
    // addEmployees()
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work 
// 


// function addEmployees() {
//     if (i < 3){
//         console.log(array1[i])
//         i++
//         addEmployees()
//     }
// }

// 
// addEmployees()