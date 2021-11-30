function login() {
    let user = document.getElementById('user');

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    localStorage.usrName = username;
    localStorage.passwrd = password;

    user.innerText = localStorage.usrName;
}

function validateEmail() {
    let email = document.getElementById('email');

    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value.match(filter)) {
        console.log("The email is ok");
        return true;
    } else {
        console.log("This email is invalid");
        email.focus;
        return false;
    }
}

function clearUser() {
    let uname = document.getElementById('username');
    uname.style.borderColor = "#d6d6d6";
    uname.focus();
    uname.select();
}

function clearPass(){    
    let pswd = document.getElementById('password');
    pswd.style.borderColor = "#d6d6d6";
    pswd.type = "password";
    pswd.focus();
    pswd.select();
}

function clearPass2() {
    let pswd2 = document.getElementById('confirm-password');
    pswd2.style.borderColor = "#d6d6d6";
    pswd2.type = "password";
    pswd2.focus();
    pswd2.select();
}

function register() {

    let user = document.getElementById('username').value;
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('confirm-password').value;

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

    validateEmail();

    let users = {};

    users.firstname = document.getElementById('firstname').value;
    users.lastname = document.getElementById('lastname').value;
    users.username = document.getElementById('username').value;
    users.email = document.getElementById('email').value;
    users.password = document.getElementById('password').value;

    localStorage[users.username] = JSON.stringify(users);
    
    
}




function validatePassword() {
    let pass = document.getElementById('password').value;

    let filter = ljjlks;

    if (pass.match(filter)) {
        console.log("Your password is strong");
        return true;
    } else {
        console.log("Your password is weak");
        password.focus;
        return false
    }
}