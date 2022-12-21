function login(){
    let password = $("#inputPassword").val();
    let userName = $("#inputUserName").val();

    let users = readUser();//getting the users from LS

    for(let i = 0; i < users.length; i++){
        let user = users[i];
        if(user.userName == userName && user.password == password){
            window.location = "user.html";
        }
    }
}