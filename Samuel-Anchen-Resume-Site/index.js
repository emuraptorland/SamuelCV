var index = 0;
var txt = "Data Analyst."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (index < txt.length) {
    document.getElementById("typewriter-text").innerHTML += txt.charAt(index);
    i++;
    setTimeout(typeWriter, speed);
  }
}
