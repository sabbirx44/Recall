function getValues() {
    // Retrieving elements by name
    var usernameInput = document.getElementsByName('username')[0];
    var emailInput = document.getElementsByName('email')[0];
    var passwordInput = document.getElementsByName('password')[0];

    // Getting values
    var username = usernameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    // Displaying values
    document.getElementById('output').innerHTML = `
      <p>Username: ${username}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
    `;
}  