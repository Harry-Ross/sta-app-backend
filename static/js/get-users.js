var myHeaders = new Headers();
myHeaders.append("token", sessionStorage.token);

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

fetch("/api/users", requestOptions)
.then((response) => {
    return response.json()
})
.then((data) => {
    data.forEach(element => {
        var table = document.getElementById("usertable");
        var row = table.insertRow();
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        cell1.innerHTML = element.email;
        cell2.innerHTML = element.firstname;
        cell3.innerHTML = element.lastname;
    });
})
.catch((error) => {
    console.error('Error:', error);
});