//set the date we're counting down to
var countDownDate = new Date("Jan 31, 2024 00:00:00").getTime();

//Update the count down every second
var x = setInterval(function() {
    //Get today's date and time();
    var now = new Date 

    //Find the distance bewteen now and the count date
    var distance = countDownDate - now;

    //Time calculations for days, hours, min and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Output the result in an element id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    //If the countdown is over, it shows a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "CONGRATULATIONS! You proudly finished the first challenge of the year 2024!";
    }
}, 1000);