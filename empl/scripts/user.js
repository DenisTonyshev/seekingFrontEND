(
    function () {
        let App = window.App || {};

        function createUser(id,name, groupName, numberOfFollowers) {
            return {
                id:id,
                name: name,
                groupName: groupName,
                numberOfFollowers: numberOfFollowers,
                toString: function () {
                    return `id: ${this.id},name: ${this.name}, groupName: ${this.groupName},  numberOfFollowers: ${this.numberOfFollowers}`
                }
            }
        }



        App.users = createUser;
        window.App = App;
    }
)();