function generateHtml() {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> 
        <title>Team-Profile-Generator</title>
    </head>
    <body>
    <nav class="navbar navbar-light  mb-5" style="background-color: #a3d8ec;">
    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
</nav>
        <div class="container">
            <div class="row">`;
  fs.writeFile("./team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("generate");
}

function generateHtml(employee) {
  return new Promise(function (resolve, reject) {
    const name = employee.getName();
    const id = employee.getId();
    const role = employee.getRole();
    const email = employee.getEmail();
    const gitHub = employee.getGitHub();

    let data = "";
    if (role === "Engineer") {
      const gitHub = employee.getGithub();
      data = `<div class="col-6">
      <div class="card mx-auto card text-black bg-info mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
                <li class="list-group-item">Email Address: ${email}</li>
            </ul>
            </div>
        </div>`;
    } else if (role === "Intern") {
      const school = employee.getSchool();
      data = `<div class="col-6">
      <div class="card mx-auto card text-black bg-info mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">School: ${school}</li>
                <li class="list-group-item">Email Address: ${email}</li>
              
            </ul>
            </div>
        </div>`;
    }
    console.log("Team Profile Generated");
    fs.appendFile("./team-profile.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}
