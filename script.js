// Countdown Timer
var countdownDate = new Date("April 6, 2026 05:42:34").getTime();

// Update the timer
function updateTimer() {
    var now = new Date().getTime();
    var distance = countdownDate - now;
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("redirectButton").style.display = "block"; // Show redirect button
        document.getElementById("countdown").innerHTML = "Countdown finished!";
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}

var x = setInterval(updateTimer, 1000);
