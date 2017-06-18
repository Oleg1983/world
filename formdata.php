<?php

	$result = mail("youremail@gmail.com","Register member","On the site registered member\nName: $_POST[name]\nSurname: $_POST[surname]\nPhone: $_POST[tel]\nEmail: $_POST[email]\nEnglish level: $_POST[eng_level]\nAccept: $_POST[terms]");

	if ($result) {
		echo "<p>Order send successfully</p>";
	} else {
		echo "<p>Order dont send. Fail</p>";
	}

?> 