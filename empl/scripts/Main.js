if (!App)
    throw Error("main should be last script in HTML");

let allUsers = new App.RemoteServer('https://seekingalpha-home.herokuapp.com');
let table = new App.Table('[data-empl-role="table_body"]');
let userLogin = new App.UserLogIn('[data-login-button ="logIn"]');
let userLogOut = new App.UserLogOut('[data-logout-button ="logOut"]');
// let buton = new App.ButtonHandler();

userLogin.addHandler(login);
userLogOut.addLogOutHandler(table);
// buton.handlerButton(f);
//
// $('button').on("click", event=>{
//     event.preventDefault();
// });

// function f(follow, follower) {
//     return allUsers.followUnfollow(follow, follower);
// }

function login(user_id) {
    return allUsers.logIn(user_id).then(res => {
        if (res) {
            document.cookie = `user_id = ${user_id}`;
            displayAllUsers();
            DisableNextButton("logInBtn");
        }
    })
}

function DisableNextButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
}

async function displayAllUsers() {
    allUsers.getAllUsers().then(user => {
        table.$table.empty();
        Object.values(user).forEach(user => table.addRow(user));
    })
}