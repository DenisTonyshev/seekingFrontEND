(() => {
    let App = window.App || {};
    const $ = window.jQuery;

    function UserLogOut(selector) {
        this.$logOut = $(selector);
    }

    UserLogOut.prototype.addLogOutHandler = function (fn) {
        this.$logOut.on('click', (event) => {
            let user = document.cookie;
            delete_cookie(user);
            fn.$table.empty();
            DisableNextButton("logInBtn");
        })
    };

    function delete_cookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function DisableNextButton(btnId) {
        document.getElementById(btnId).removeAttribute("Disabled");
    }

    App.UserLogOut = UserLogOut;
    window.App = App;

})();