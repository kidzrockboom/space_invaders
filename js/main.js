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
        if (key[0] === username) {
            if (key[1] === password) {
                console.log("Login successful")
            } else {
                loginInfo.innerHTML = "Password is incorrect";
                loginInfo.style.fontWeight = "bold";
                loginInfo.style.color = "black";
            }
        } else {
            loginInfo.innerHTML = "Your Username is invalid";
            loginInfo.style.fontWeight = "bold";
            loginInfo.style.color = "black";
        }
    }
}

// Function to reset the Username field after validation check
function clearUser() {
    let userInfo = document.getElementById('feedback');

    userInfo.innerHTML = "* Required ";
    userInfo.style.fontWeight = "bold";
    userInfo.style.color = "grey";

    let uname = document.getElementById('username');
    uname.style.borderColor = "#d6d6d6";
    uname.focus();
    uname.select();
}

// Function to reset the Email field after validation check
function clearEmail() {
    let emailInfo = document.getElementById('feedback');

    emailInfo.innerHTML = "* Required ";
    emailInfo.style.fontWeight = "bold";
    emailInfo.style.color = "grey";

    let uname = document.getElementById('email');
    uname.style.borderColor = "#d6d6d6";
    uname.focus();
    uname.select();
}

// Function to reset the Password field after validation check
function clearPass(){  
    let PassInfo = document.getElementById('feedback');

    PassInfo.innerHTML = "* Required ";
    PassInfo.style.fontWeight = "bold";
    PassInfo.style.color = "grey";
    
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

    let user = document.getElementById('username');
    let emailReg = document.getElementById('email');
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('confirm-password');
    let RegInfo = document.getElementById('feedback');

    // Checks if inputs fields are empty for important information
    if (user.value === "") {        
        user.style.borderColor = "red";
        user.style.border = "bold";
        user.value = "Enter a Username";
        user.focus();
        return false;
    }

    if (pass1.value === "") {
        pass1.style.borderColor = "red";
        pass1.value = "Enter a Password";
        pass1.type = "text";
        pass1.focus();
        return false;
    }

    if (!(pass1.value.length > 8)) {
        pass1.style.borderColor = "red";
        RegInfo.innerHTML = "* Password is too short";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        pass1.focus();
        return false;
    }
    

    if (pass1.value !== pass2.value) {
        pass2.style.borderColor = "red";
        pass2.value = "Enter your password again";
        pass2.type = "text";
        pass2.focus();
        return false;
    }

    // Checks the email input with regex to make sure it is a standard email
    let emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailReg.value.match(emailFilter)) {
        
    } else {
        emailReg.style.borderColor = "red";
        emailReg.style.border = "bold";
        RegInfo.innerHTML = "* Email is Incorrect";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        emailReg.focus();
        return false;
    }

    let passFilter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (pass1.value.match(passFilter)) {
        console.log("The password is ok");
    } else {
        pass1.style.borderColor = "red";
        pass1.style.border = "bold";
        RegInfo.innerHTML = "* Password needs one number and special character";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        pass1.focus();
        return false;
    }

    // After all the checks, loads the information into local storage
    let users = {};

    users.firstname = document.getElementById('firstname').value;
    users.lastname = document.getElementById('lastname').value;
    users.username = document.getElementById('username').value;
    users.email = document.getElementById('email').value;
    users.password = document.getElementById('password').value;

    localStorage[users.username] = JSON.stringify(users);
    
    
}
