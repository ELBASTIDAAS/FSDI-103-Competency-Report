let count = 0;
function User(email, password, fName, lName, age, address, phone, payment, color) {
    this.email = email;
    this.password = password;
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

//get the values from the inputs
let inputEmail = $("#txtEmail");
let inputpPassword = $("#txtPassword");
let inputFName = $("#txtFName");
let inputLName = $("#txtLName");
let inputAge = $("#txtAge");
let inputAddress = $("#txtAddress");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");

function isValid(user) {
    let valid = true;
    if (user.email == "" || user.password == "" || user.fName == "" || user.lName == "" || user.age == "" || user.address == "" || user.phone == "" || user.payment == "" || user.color == "") {
        alert("Please fill out all fields");
        valid = false;
    }
    return valid;
};

//register function
function register() {
    let user = new User(
        inputEmail.val(),
        inputpPassword.val(),
        inputFName.val(),
        inputLName.val(),
        inputAge.val(),
        inputAddress.val(),
        inputPhone.val(),
        inputPayment.val(),
        inputColor.val()
    );

    if (isValid(user) == true) {
        saveUser(user);
        alert("User registered");
    } else {
        alert("Please fill out all fields");
    }
}