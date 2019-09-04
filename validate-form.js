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

// function submit_by_id() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     if (validation()) // Calling validation function
//     {
//     document.getElementById("form_id").submit(); //form submission
//     alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
//     }
//     }