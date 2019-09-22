var developers = JSON.parse(localStorage.getItem("developers"));//Retrieve the stored data_ 
//If there is no data, initialize an empty array
if (developers == null) {
    var developers = []
}
// READS ALL DEVELOPERS 
function Read() {
    employee.innerHTML = ''
    developers2 = JSON.parse(localStorage.getItem("developers"))
    if (developers2 !== null) {
        for (var i = 0; i < developers2.length; i++) {
            employee.innerHTML += `
            <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 pr-0 mr-0">
            <div class="card border border-success mb-3">
            <img class="card-img-top" src="${developers2[i].photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${developers2[i].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Email : </strong>${developers2[i].email}</li>
                <li class="list-group-item"><strong>Designation : </strong>${developers2[i].designation}</li>
                <li class="list-group-item"><strong>Languages : </strong>${developers2[i].language}</li>
                <li class="list-group-item"><strong>Salary : </strong>${developers2[i].salary}</li>
                <li class="list-group-item"><strong>Linkedin Account : </strong>${developers2[i].linkedin}</li>
                <li class="list-group-item"><strong>Github Account : </strong>${developers2[i].github} </li>
                
            </ul>
            <div class="text-center card-body">
                <button class="col-5 text-white btn btn-success" onclick="Update(${i})"><i class="fas fa-pen"></i></i>Edit</button>
                <button class="col-5 text-white btn btn-danger" onclick="Delete(${i})"><i class="fas fa-trash"></i></i>Delete</button>
            </div>
            </div>
            </div>
            `
        }
    }
}

var employee = document.getElementById('developerCard')

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    Read()
    document.getElementById("form").reset()
});
//CREATE DEVELOPER FUNCTION
$(document).ready(function() {
    $('form').on('submit', function(event) {
      $.ajax({
            data: $('form').serialize(),
            type : 'POST',
            url : '/submit',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
           })
     event.preventDefault();
     });
});
//UPDATE DEVELOPER FUNCTION
function Update(i3) {
    let developers3 = JSON.parse(localStorage.getItem("developers"));
    employee.innerHTML = ''
    for (var i = 0; i < developers3.length; i++) {
        if (i === i3) {
            employee.innerHTML += `
            <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 pr-0 mr-0">
            <div class=" border border-danger card mb-2">
            <div class="card-body">
            <p><img src="https://img.icons8.com/material/24/000000/employee-card.png"> Name:</p>
            <input type="text" class="mb-2 form-control" id="newName" placeholder="${developers3[i].name}" required></input>
            <p><img src="https://img.icons8.com/ios/20/000000/secured-letter.png"> Email:</p>
            <input type="email" class="mb-2 form-control" id="newEmail" placeholder="${developers3[i].email}" validate required></input>
            <p><img src="https://img.icons8.com/material/24/000000/collaborator-female.png"> Designation:</p>
            <input type="text" class="mb-2 form-control" id="newDesignation" placeholder="${developers3[i].designation}" required></input>
            <p><img src="https://img.icons8.com/metro/22/000000/source-code.png"> Languages:</p>
            <input type="text" class="mb-2 form-control" id="newLanguage" placeholder="${developers3[i].language}" required></input>
            <p><img src="https://img.icons8.com/windows/30/000000/cash-in-hand.png"> Salary:</p>
            <input type="number" class="mb-2 form-control" id="newSalary" placeholder="${developers3[i].salary}" required></input>
            <p><img src="https://img.icons8.com/material/24/000000/link.png"> Linkedin Account:</p>
            <input input type="text" class="mb-2 form-control" id="newLinkedin" placeholder="${developers3[i].linkedin}" required></input>
            <p><img src="https://img.icons8.com/material/24/000000/link.png"> Github Account:</p>
            <input input type="text" class="mb-2 form-control" id="newGithub" placeholder="${developers3[i].github}" required></input>
            <p><img src="https://img.icons8.com/ios-glyphs/24/000000/pictures-folder.png"> Github Photo:</p>
            <input input type="text" class="mb-2 form-control" id="newPhoto" placeholder="${developers3[i].photo}" required></input>
            <div class="text-center">
            <button class="col-5 text-white btn btn-success" onclick="Update2(${i})"><i class="fas fa-pen"></i></i>Update</button>
            <button class="col-5 text-white btn btn-danger" onclick="Read()"><i class="fas fa-ban"></i>Cancel</button>
            </div>
            </div>
            </div>
            </div>
            `
        } else {
            employee.innerHTML += `
            <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 pr-0 mr-0">
            <div class="border border-success card mb-2">
            <div class="card-body">
            <p><strong>Name: </strong>${developers3[i].name}</p>
            <p><strong>Email: </strong>${developers3[i].email}</p>
            <p><strong>Designation: </strong>${developers3[i].designation}</p>
            <p><strong>Languages: </strong>${developers3[i].language}</p>
            <p><strong>Salary: </strong>${developers3[i].salary}</p>
            <p><strong>Linkedin Account: </strong>${developers3[i].linkedin}</p>
            <p><strong>Github Account: </strong>${developers3[i].github}</p>
            <p><strong>Github Photo: </strong>${developers3[i].photo}</p>
            <div class="text-center">
            <button disabled class="col-5 text-white btn btn-warning" onclick="Update(${i})"><i class="fas fa-pen"></i>Edit</button>
            <button disabled class="col-5 text-white btn btn-danger" onclick="Delete(${i})"><i class="fas fa-trash"></i></i>Delete</button>
            </div>
            </div>
            </div>
            </div>
            `
        }
    }
}
function Update2(x) {
    developers[x] = {
        name: document.getElementById("newName").value,
        email: document.getElementById("newEmail").value,
        designation: document.getElementById("newDesignation").value,
        language: document.getElementById("newLanguage").value,
        salary: document.getElementById("newSalary").value,
        linkedin: document.getElementById("newLinkedin").value,
        github: document.getElementById("newGithub").value,
        photo: document.getElementById("newPhoto").value
    };
    var re = /\S+@\S+/;
    if (developers[x].photo === '') {
        developers[x].photo = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
    if (!re.test(developers[x].email)) {
        alert('Wrong address')
    }
    else {

        if ((developers[x].name === '') || (developers[x].email === '') || (developers[x].designation === '') || (developers[x].language === '') || (developers[x].salary === '') || (developers[x].linkedin === '') || (developers[x].github === '')) {
            alert("You have missed out a field")
        }
        else {
            localStorage.setItem("developers", JSON.stringify(developers))
            Read()
        }
    }
}
// DELETE DEVELOPER FUNCTION
function Delete(y) {
    let developers5 = JSON.parse(localStorage.getItem("developers"))
    developers5.splice(y, 1)
    localStorage.setItem("developers", JSON.stringify(developers5))

    Read()
}
// SORT DEVELOPER FUNCTION
function sort() {
    developers6 = JSON.parse(localStorage.getItem("developers"))
    if (developers6 !== null) {
        for (var i = 0; i < developers6.length; i++) {
            for (var j = i + 1; j < developers6.length; ++j) {
                if (developers6[i].name.toLowerCase() > developers6[j].name.toLowerCase()) {
                    var a = developers6[i];
                    developers6[i] = developers6[j];
                    developers6[j] = a;
                }
            }
        }
    }
    localStorage.setItem("developers", JSON.stringify(developers6))
    Read()
}