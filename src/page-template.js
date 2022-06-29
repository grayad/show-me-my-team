// manager card html
const generateMgr = manager => {
    return `
        <div class="card col-3">
            <div class="card-header text-white bg-secondary .bg-gradient">
                ${manager.name} <br>
                <i class="fa fa-solid fa-mug-hot"></i> Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id} </li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    `
};

// engineer card html
const generateEng = engineer => {
    return `
        <div class="card col-3">
            <div class="card-header text-white bg-secondary .bg-gradient">
                ${engineer.name} <br>
                <i class="fa fa-solid fa-glasses"></i> Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id} </li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">Github: github.com/${engineer.github}</li>
            </ul>
        </div>
    `
};

// intern card html
const generateInt = intern => {
    return `
        <div class="card col-3">
            <div class="card-header text-white bg-secondary .bg-gradient">
                ${intern.name} <br>
                <i class="fa fa-solid fa-user-graduate"></i> Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id} </li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    `
};

const generatePage = teamArray => {
    // var html = [];

    const manager = teamArray.filter(employee => {
        return employee.getRole() === "Manager"
    }).map(m => {
        return generateMgr(m)
    }).join('');

    const engineers = teamArray.filter(employee => {
        return employee.getRole() === "Engineer"
    }).map(e => {
        return generateEng(e)
    }).join('');

    const interns = teamArray.filter(employee => {
        return employee.getRole() === "Intern"
    }).map(i => {
        return generateInt(i)
    }).join('');

    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        </head>

        <body>
            <header class="fs-2 bg-primary text-white text-center p-2">
                My Team
            </header>

            <main class="container p-5 mx-5 row justify-content-center gap-2">
                ${manager}
                ${engineers}
                ${interns}
            </main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        </body>
    `
};

module.exports = generatePage;

