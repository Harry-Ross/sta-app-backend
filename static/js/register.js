function register() {
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var emailElement = document.getElementById('email');
    var passwordElement = document.getElementById('password');

    var firstname = firstnameElement.value;
    var lastname = lastnameElement.value;
    var email = emailElement.value;
    var password = passwordElement.value;

    var data = { firstname, lastname, email, password }

    fetch('/api/register', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("here")
        sessionStorage.setItem('token', data.token);
        window.location.replace("/")
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}