async function submitForm() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mobile, email }),
    });

    if (response.ok) {
        getUserList();
    } else {
        console.error('Failed to submit form');
    }
}

async function getUserList() {
    const response = await fetch('http://localhost:3000/api/users');
    const users = await response.json();

    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `Name: ${user.name}, Mobile: ${user.mobile}, Email: ${user.email}`;
        userListElement.appendChild(userDiv);
    });
}
