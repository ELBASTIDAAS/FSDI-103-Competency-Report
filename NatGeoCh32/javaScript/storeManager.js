function saveUser(newUser) {
    let oldUsers = readUser();//get the old users
    oldUsers.push(newUser);//add the new user to the old users
    let val = JSON.stringify(oldUsers);//convert the object to a string
    localStorage.setItem("user", val);
}
function readUser() {
    let users = localStorage.getItem("user");//getting the user from local storage
    console.log(users);
    if (!users) {//not users?
        //if you get here the LS is empty
        return [];//creating an empty array
    } else {
        let list = JSON.parse(users);//parse the users back to an array
        console.log(list);
        return list;
    }
}