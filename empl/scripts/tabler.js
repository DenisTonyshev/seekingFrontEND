(
    function () {
        let App = window.App || {};
        $ = window.jQuery;

        function Row(user) {
            let id = user.id;
            const $tr = $('<tr id=' + "A" + id + '>', {
                type: 'row-row',
                name: 'row-check',
            });

            const td_id = '<td>' + user.id + '</td>' + '\n';
            const td_name = '<td>' + user.name + '</td>' + '\n';
            const td_group = '<td>' + user.groupName + '</td>' + '\n';
            const td_numberOfFollowers = '<td>' + user.numberOfFollowers + '</td>' + '\n';
            const td_but = '<td><button type="button" id="' + id + '" ' +
                'class="btn btn-outline-danger" ' +
                'data-empl-role="button">' + 'FOLLOW' + '</button></td>';

            $tr.append(td_id + td_name + td_group + td_numberOfFollowers + td_but);
            this.$rowElement = $tr;
        }

//----------------------------------------------------------------------------------------------------

        function Table(selector) {
            this.$table = $(selector);
        }

        Table.prototype.addRow = function (user) {
            let row = new Row(user);
            let append = this.$table.append(row.$rowElement);
            $(`#${user.id}`).on('click', function () {
                let user_id = document.cookie.split("=");
                let pair = {
                    "id1": this.id,
                    "id2": user_id[1]
                };
                follow(pair).then(res=>console.log(res))
            });

            return append;
        };

        function follow(pair) {
            return $.ajax({
                url: `https://seekingalpha-home.herokuapp.com/`,
                type: 'POST',
                data: JSON.stringify(pair),
                contentType: 'application/json'
            });
        }

        // function addSorting() {
        //     document.querySelector('.one').addEventListener('click', (event) => {
        //         event.preventDefault();
        //         sortTable(1)
        //     });
        //     document.querySelector('.two').addEventListener('click', (event) => {
        //         event.preventDefault();
        //         sortTable(2)
        //     });
        //     document.querySelector('.tre').addEventListener('click', (event) => {
        //         event.preventDefault();
        //         sortTable(3)
        //     });
        //     document.querySelector('.for').addEventListener('click', (event) => {
        //         event.preventDefault();
        //         sortTable(4)
        //     });
        //
        // }
        // function sortTable(n) {
        //     let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        //     table = document.getElementById("myTable2");
        //     switching = true;
        //     // Set the sorting direction to ascending:
        //     dir = "asc";
        //     /* Make a loop that will continue until
        //     no switching has been done: */
        //     while (switching) {
        //         // Start by saying: no switching is done:
        //         switching = false;
        //         rows = table.rows;
        //         /* Loop through all table rows (except the
        //         first, which contains table headers): */
        //         for (i = 1; i < (rows.length - 1); i++) {
        //             // Start by saying there should be no switching:
        //             shouldSwitch = false;
        //             /* Get the two elements you want to compare,
        //             one from current row and one from the next: */
        //             x = rows[i].getElementsByTagName("TD")[n];
        //             y = rows[i + 1].getElementsByTagName("TD")[n];
        //             /* Check if the two rows should switch place,
        //             based on the direction, asc or desc: */
        //             if (dir == "asc") {
        //                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //                     // If so, mark as a switch and break the loop:
        //                     shouldSwitch = true;
        //                     break;
        //                 }
        //             } else if (dir == "desc") {
        //                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //                     // If so, mark as a switch and break the loop:
        //                     shouldSwitch = true;
        //                     break;
        //                 }
        //             }
        //         }
        //         if (shouldSwitch) {
        //             /* If a switch has been marked, make the switch
        //             and mark that a switch has been done: */
        //             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        //             switching = true;
        //             // Each time a switch is done, increase this count by 1:
        //             switchcount ++;
        //         } else {
        //             /* If no switching has been done AND the direction is "asc",
        //             set the direction to "desc" and run the while loop again. */
        //             if (switchcount == 0 && dir == "asc") {
        //                 dir = "desc";
        //                 switching = true;
        //             }
        //         }
        //     }
        // }
        App.Table = Table;
        window.App = App;
    }
)();