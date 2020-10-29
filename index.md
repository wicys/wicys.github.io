
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/3/w3.css">
<body>
<p id="demo"></p>

<script>
var i = 0;
var txt = 'WiCyS at Illinois';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
</script>
 <section>
  <img class="mySlides" src="WiCyS-logo.png" style="width:100%">
  <img class="mySlides" src="maxresdefault.jpg" style="width:100%">
</section>

<h2>Who We Are</h2>
<p>Women in CyberSecurity (WiCyS) is a student chapter of a larger non-profit national organization dedicated to bringing together women in cybersecurity from academia, research and industry to share knowledge, experience, networking and mentoring. This RSO helps women interested in cyber security through tech talks, workshops, networking opportunities, research, conferences, and leadership opportunities. Our members are given the opportunity to attend the annual WiCyS National Conference and network with companies and fellow students passionate about the field of cyber security. WiCys aims to provide a supportive community to women in all stages of their pursuit of a cybersecurity career.</p>
<h2>Our Mission</h2>
<p>To broaden participation in cybersecurity by recruiting, retaining and advancing women in the field of cybersecurity, and improve on the very low 11% statistic of women in cybersecurity jobs. Events we'll be putting on:</p>
  <ul>
  <li>Tech Talks</li>
  <li>Workshops: CTF, Projects, EOH</li>
  <li>Networking opportunities</li>
  <li>Research involvement</li>
</ul>
  <h2>Announcements</h2>
  <h3 style="color:red;">Sign up for the 2021 WiCyS National Conference.</h3>
  <p>If you are interested in applying, please fill out the Google Form below. Deadline to apply is November 1st.</p>
  <a href="https://forms.gle/ozyEtVS22TDVkhuz9"></a>
</body>
</html>


