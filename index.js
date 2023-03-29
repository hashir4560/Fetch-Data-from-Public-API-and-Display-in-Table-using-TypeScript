var usersTable = document.getElementById('users-table');
function getUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/?results=10');
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            populateTable(data.results);
        }
        else {
            console.error('Failed to fetch users');
        }
    };
    xhr.send();
}
function populateTable(users) {
    var tbody = usersTable.querySelector('tbody');
    tbody.innerHTML = '';
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        var tr = document.createElement('tr');
        tr.innerHTML = "\n      <td>".concat(user.name.first, " ").concat(user.name.last, "</td>\n      <td>").concat(user.email, "</td>\n      <td>").concat(user.phone, "</td>\n    ");
        tbody.appendChild(tr);
    }
}
getUsers();
