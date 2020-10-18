<!DOCTYPE html>
<html>
<body>

<h1>WiCyS at Illinois</h1>

<p id="demo"></p>

<script>
var i = 0;
var txt = 'WiCyS at Illinois.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
</script>

</body>
</html>


