function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let title = document.getElementById("title").value;

    if(name === "" || email === "" || message === "" || title === "" ) {
        document.getElementById("error").innerHTML = "All fields Required";
        return false;
    }
    else if(name.length < 4){
        document.getElementById("error").innerHTML = "name must be at least four(4) characters long";
        return false;
    }
    
    else if(message.length < 20){
        document.getElementById("error").innerHTML = "Message must be at least 20 characters long";
        return false;
    }
    else {
        return true;
    }
}
