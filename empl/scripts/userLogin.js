(() => {
    let App = window.App || {};
    const $ = window.jQuery;

    function UserLogIn(selector) {
        this.$login = $(selector);
    }

    UserLogIn.prototype.addHandler = function (fn) {
        this.$login.on('click', (event) => {
            event.preventDefault();
            let user_id = prompt("Please enter your id");
            if (user_id < 0 || isNaN(user_id || user_id === null)) {
                alert("invalid parameter");
            } else {
                fn(user_id).then(() => {
                }).catch(a => {
                    alert(a.responseText);
                });
            }
        })
    };


    App.UserLogIn = UserLogIn;
    window.App = App;
})();
