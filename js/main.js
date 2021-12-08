showUser()


// Function to retrieve all the user values in local storage and store them
function allStorage() {

    let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }

    return values;
}

// Shows the username across all pages from session storage
function showUser() {
    if (sessionStorage.length == 0){

    } else {
        let userInfo = sessionStorage.key(0);
        let user = document.getElementById('user');

        user.innerHTML = userInfo;
    }
}

// Store the output into an array 
values = allStorage();

// Function to clear the current session on user logout 
function clearStorage() {

}

// Function to check Login validation 
function login() {
    // Store all the needed elements
    let user = document.getElementById('user');
    let loginInfo = document.getElementById('info');
    let username = document.getElementById('logUsername').value;
    let password = document.getElementById('logPassword').value;
    let userHighscore = 0;

    
    if (Object.keys(localStorage).includes(username)) { // Check if username is in the local storage
        console.log("Username is valid")
        // Get the value of the username in local storage
        let a = JSON.parse(localStorage.getItem(username)); 
        if (password === a.password) { // Check if password matches password in local storage
            sessionStorage.setItem(username, userHighscore);
            console.log("Log In Successful");
            user.innerHTML = username;
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

// Function to reset the Username field after validation check
function clearUser() {
    let userInfo = document.getElementById('feedback');

    // Reset the CSS values back to default
    userInfo.innerHTML = "* Required ";
    userInfo.style.fontWeight = "bold";
    userInfo.style.color = "grey";

    let uname = document.getElementById('username');
    uname.style.borderColor = "#d6d6d6";
    uname.focus();
}

// Function to reset the Email field after validation check
function clearEmail() {
    let emailInfo = document.getElementById('feedback');
    
    // Reset the CSS values back to default
    emailInfo.innerHTML = "* Required ";
    emailInfo.style.fontWeight = "bold";
    emailInfo.style.color = "grey";

    let uname = document.getElementById('email');
    uname.style.borderColor = "#d6d6d6";
    uname.focus();
}

// Function to reset the Password field after validation check
function clearPass(){  
    let PassInfo = document.getElementById('feedback');

    // Reset the CSS values back to default
    PassInfo.innerHTML = "* Required ";
    PassInfo.style.fontWeight = "bold";
    PassInfo.style.color = "grey";
    
    let pswd = document.getElementById('password');
    pswd.style.borderColor = "#d6d6d6";
    pswd.type = "password";
    pswd.focus();
}
// Function to reset the Second Password field after validation check
function clearPass2() {

    // Reset the CSS values back to default
    let pswd2 = document.getElementById('confirm-password');
    pswd2.style.borderColor = "#d6d6d6";
    pswd2.type = "password";
    pswd2.focus();
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

    // Checks if password is less than 8 characters
    if (!(pass1.value.length > 8)) {
        pass1.style.borderColor = "red";
        RegInfo.innerHTML = "* Password is too short";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        pass1.focus();
        return false;
    }
    
    // Checks if password and retyped password match 
    if (pass1.value !== pass2.value) {
        pass2.style.borderColor = "red";
        pass2.value = "Passwords dont match";
        pass2.type = "text";
        pass2.focus();
        pass2.select();
        return false;
    }

    // Checks the email input with regex to make sure it is a standard email
    let emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailReg.value.match(emailFilter)) {
        
    } else {
        // Alert User if the Email format is incorrect
        emailReg.style.borderColor = "red";
        emailReg.style.border = "bold";
        RegInfo.innerHTML = "* Email is Incorrect";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        emailReg.focus();
        return false;
    }
    
    // Checks password to make sure it has one number and special character and is between 7-15 characters
    let passFilter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (pass1.value.match(passFilter)) {
        
    } else {
        // Alert User if the Password format is Incorrect
        pass1.style.borderColor = "red";
        pass1.style.border = "bold";
        RegInfo.innerHTML = "* Password needs one number and special character \n and should be less than 15 characters";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        pass1.focus();
        return false;
    }

    // Get an array of all the user emails
    nonPermittedValues = values.map(function(value) {
        return value.email;
    });

    // Check if the username the User is trying is already in local storage if yes alert user then return false
    if (Object.keys(localStorage).includes(user.value)) {
        RegInfo.innerHTML = "* Username is already taken";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        user.focus();
        return false;
    }

    // Check if the email the User is trying is already in our array if yes alert user then return false
    if (nonPermittedValues.includes(emailReg.value)) {
        RegInfo.innerHTML = "* Email is already being used";
        RegInfo.style.fontWeight = "bold";
        RegInfo.style.color = "black";
        emailReg.focus();
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
