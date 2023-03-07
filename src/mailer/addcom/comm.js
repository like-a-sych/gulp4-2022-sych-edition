function doLoad(value) {
	err = document.querySelector('err');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				// err.innerHTML = ' ';
				// err.innerHTML = req.responseJS.ok;
				var url = "thankyou.php";
				$(location).attr('href', url); window.location = 'thankyou.php';
				// showModal();
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}
	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}
