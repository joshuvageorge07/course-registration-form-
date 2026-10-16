document.getElementById("myform").onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let file = document.getElementById("record").value;
    if (name.length < 3) {
        alert("Enter valid name");
    }
    else if (mobile.length != 10) {
        alert("Enter 10 digit mobile number");
    }
    else if (password.length < 8) {
        alert("Password must be 8 characters");
    }
    else if (file == "") {
        alert("Upload record file");
    }
    else {
        document.getElementById("msg").innerHTML =
            "Registration Successful!";
    }
};
