(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemoteServer(url) {
            this.url = url;
        }

        // RemoteServer.prototype.add = function (id, employee, fn) {
        //     let bool;
        //     let URL = this.url;
        //     $.ajax({
        //         url: this.url + '/employee/add',
        //         type: 'POST',
        //         // async: false,
        //         data: JSON.stringify(employee),
        //         contentType: 'application/json',
        //         success: function (response) {
        //             fn(response);
        //             bool = response;
        //             if (bool)
        //                 getSalary(URL);
        //         }
        //     });
        //     return bool;
        // };

        // RemoteServer.prototype.remove = function (id) {
        //     let URL = this.url;
        //     $.ajax({
        //         url: this.url + '/employee/remove?id=' + id,
        //         type: 'DELETE',
        //         success: function (response) {
        //             console.log(response);
        //             getSalary(URL);
        //         }
        //     });
        // };

        // function getSalary(url) {
        //     return $.ajax({
        //         url: url + "/employees/salary",
        //         success: function (response) {
        //             $('[data-empl-role="sumo"]').text(response);
        //         }
        //     })
        // }

        RemoteServer.prototype.getAllUsers = function () {
            return $.getJSON(this.url + '/')
        };


        RemoteServer.prototype.logIn = function (user_id) {
            return $.ajax({
                url: `${this.url}/login?id=` + user_id,
                type: 'GET',
                contentType: 'application/json'
            });
        };

        // RemoteServer.prototype.followUnfollow = function (follow, follower) {
        //     return $.ajax({
        //         url: `${this.url}/`,
        //         type: 'POST',
        //         data: JSON.stringify(follow, follower),
        //         contentType: 'application/json'
        //     });
        // };

        // RemoteServer.prototype.getEmployeeById = function (id) {
        //     let res;
        //     $.ajax({
        //         url: this.url + '/employee?id=' + id,
        //         async: false,
        //         success: function (response) {
        //             res = response;
        //         }
        //     });
        //     return res;
        // };

        App.RemoteServer = RemoteServer;
    }
)();