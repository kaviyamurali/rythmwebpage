
function checkPassword() {
    // Get the password entered by the user
    var enteredPassword = document.getElementById("password").value;

    // Define the correct password
    var correctPassword = "kaviyamk2004";

    // Compare the entered password with the correct password
    if (enteredPassword === correctPasswort) {
        alert("Password Correct!");
    } else {
        alert("Incorrect Password. Please try again.");
    }
}