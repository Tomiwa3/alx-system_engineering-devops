document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // You can add your login logic here, such as sending a request to a server for authentication
    console.log('Username: ' + username + ', Password: ' + password);
  });
  