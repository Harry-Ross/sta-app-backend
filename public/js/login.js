function login () {
    var emailElement = document.getElementById('email');
    var passwordElement = document.getElementById('password');

    var email = emailElement.value;
    var password = passwordElement.value;

    var data = { email, password }

    fetch('/api/auth/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        sessionStorage.setItem('token', data.token);
        window.location.replace("/")
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}