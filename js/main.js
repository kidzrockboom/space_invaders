// Function to retrieve all the user values in local storage and store them
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }

    return values;
}

function login() {
    let user = document.getElementById('user');
    let loginInfo = document.getElementById('info');


    let username = document.getElementById('logUsername').value;
    let password = document.getElementById('logPassword').value;

    values = allStorage();

    const userPass = values.map(item => {
        const container = {};

        container[item.username] = item.password;
        return container;
    })

    for (let key of userPass) {
        if (key[0] !== username) {
            if (key[1] === password) {
                // User can login
            } else {
                loginInfo.innerHTML = "Password is incorrect";
            }
        } else {
            // Invalid Username
        }
    }


    values.forEach(item => {
        if (item.username !== username) {
            if (atob(item.password) === password) {
                // User can login 
            } else {
                // password incorrect
            }
        } else {
            // invalid email
            
        }
    });


    if (values[0].username === username) {
        if (values[0].password === password) {
            
        }
    }
}

// Function to reset the Username field after validation check
function clearUser() {
    let uname = document.getElementById('username');
    uname.style.borderColor = "#d6d6d6";
    uname.focus();
    uname.select();
}

// Function to reset the Email field after validation check
function clearEmail() {
    let uname = document.getElementById('email');
    uname.style.borderColor = "#d6d6d6";
    uname.focus();
    uname.select();
}

// Function to reset the Password field after validation check
function clearPass(){    
    let pswd = document.getElementById('password');
    pswd.style.borderColor = "#d6d6d6";
    pswd.type = "password";
    pswd.focus();
    pswd.select();
}
// Function to reset the Second Password field after validation check
function clearPass2() {
    let pswd2 = document.getElementById('confirm-password');
    pswd2.style.borderColor = "#d6d6d6";
    pswd2.type = "password";
    pswd2.focus();
    pswd2.select();
}

// Function to validate the register page and makes sure inputs are correct
function register() {

    let user = document.getElementById('username').value;
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('confirm-password').value;

    // Checks if inputs fields are empty for important information
    if (user === "") {
        let warning = document.getElementById('username');
        warning.style.borderColor = "red";
        warning.style.border = "bold";
        warning.value = "Enter a Username";
        warning.focus();
        return false;
    }

    if (pass1 === "") {
        let warning = document.getElementById('password');
        warning.style.borderColor = "red";
        warning.value = "Enter a Password";
        warning.type = "text";
        warning.focus();
        return false;
    }

    if (pass1 !== pass2) {
        let warning = document.getElementById('confirm-password');
        warning.style.borderColor = "red";
        warning.value = "Enter your password again";
        warning.type = "text";
        warning.focus();
        return false;
    }

    // Checks the email input with regex to make sure it is a standard email
    let emailReg = document.getElementById('email');

    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailReg.value.match(filter)) {
        console.log("The email is ok");
    } else {
        let warning = document.getElementById('email');
        warning.style.borderColor = "red";
        warning.style.border = "bold";
        console.log("This email is invalid");
        emailReg.focus();
        return false;
    }

    // After all the checks, loads the information into local storage
    let users = {};

    users.firstname = document.getElementById('firstname').value;
    users.lastname = document.getElementById('lastname').value;
    users.username = document.getElementById('username').value;
    users.email = document.getElementById('email').value;
    users.password = btoa(document.getElementById('password').value);

    localStorage[users.username] = JSON.stringify(users);
    
    
}
