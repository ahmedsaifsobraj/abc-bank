// login setup 
document.getElementById("login-btn").addEventListener('click', function () {
    const getUserEmail = document.getElementById('email-info');
    const userEmail = getUserEmail.value;
    const getUserPass = document.getElementById('pass-info');
    const userPass = getUserPass.value;

    if (userEmail == "admin" && userPass == "123") {
        window.location.href = "banking.html";
    }


})