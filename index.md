<div align = "center"> <span style="color: purple"> <h1> WiCyS at Illinois </span> </h1>
<img src ="https://wicys.github.io/WiCyS-logo.png">
<p id="demo"></p>
var i = 0;
var txt = 'WiCyS at Illinois'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} 

