function Clock() {
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	hour = checkTime(hour);
	minute = checkTime(minute);
	second = checkTime(second);

	document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second;

	var t = setTimeout(Clock, 1000);
}

function checkTime(a) {
	if (a < 10) {
		a = "0" + a;
	}
	return a;
}