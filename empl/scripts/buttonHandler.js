(() => {
    let App = window.App || {};
    const $ = window.jQuery;

    function ButtonHandler() {
        this.$btn = $('button');
    }

    ButtonHandler.prototype.handlerButton = function (fn) {
        this.$btn.on('click',function(){
            let user_id = document.cookie.split("=");
            // let pair = {
            //     "id1" : user_id[1],
            //     "id2" : this.id,
            // };
            console.log("TEST TEST TEST");
            fn(user_id[1],this.id).then(() => {
            }).catch(a => {
                alert(a.responseText);
            });
        });
    };

    App.ButtonHandler = ButtonHandler;
    window.App = App;
})();