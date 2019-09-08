<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="styles.css" />
		<title>Josh"s form</title>
	</head>
	<body>
        <div class="form-container">
            <form action="index.php" method="post" onsubmit="return validateForm();" class="form">
                <input type="text" name="myname" id="name" placeholder="Your name here">

                <select id="title" name="mytitle" aria-placeholder="title">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                </select>

                <input type="email" name="myemail" id="email" placeholder="email here">

                <textarea placeholder="message here" name="mymessage" id="message"></textarea>
                <div id="error" style="color: red"></div>
                
                <input type="submit" name="submit" value="submit" id="button" >
            </form>
        </div>
          <script src="validate-form.js"></script>
	</body>
</html>

<?php

// to check if form is ready to submit
if (isset($_POST['submit'])) {

    // get name input
    $name = $_POST['myname'];

    // get user title
    $title = $_POST['mytitle'];

    // get user email
    $email = $_POST['myemail'];

    // get user input message
    $message = $_POST['mymessage'];

    // pints out user data to the screen
    echo
        "<pre>
            <h3>Welcome User, here are your details <br><h3> 
            <p>".$title." " .$name." <br> ".$email." <br> ".$message."</p>
         </pre>";     
}

?>
