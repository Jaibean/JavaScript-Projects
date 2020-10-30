// creating a timer that will countdown by seconds

function countdown() {
	var seconds = document.getElementById("seconds").value;
	
	function tick() {
		seconds = seconds -1;
		timer.innerHTLM = seconds;
		setTimeout(tick, 1000);
	if (seconds == -1) {
		alert("time's up");
	}
		}
	tick();
}