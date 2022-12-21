function displayUsers(usersArray) {
    //travel the array of users
    let table = "";
    //get the user
    for (let i = 0; i < usersArray.length; i++) {
        let user = usersArray[i];
        //create the html row
        table += `
        <tr>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.fName}</td>
        <td>${user.lName}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td>${user.payment}</td>
        <td>${user.color}</td>
        </tr>`;
        //append the user into the table
        $("#users-table").append(table);
    }
    

}
function init() {
    console.log("Listing users ...");
    let users = readUser();//getting the users from LS
    displayUsers(users);//display the users
}
window.onload = init;