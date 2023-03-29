const usersTable = document.getElementById('users-table');

function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api/?results=10');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      populateTable(data.results);
    } else {
      console.error('Failed to fetch users');
    }
  };
  xhr.send();
}

function populateTable(users) {
  const tbody = usersTable.querySelector('tbody');
  tbody.innerHTML = '';
  for (const user of users) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.name.first} ${user.name.last}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
    `;
    tbody.appendChild(tr);
  }
}

getUsers();

