
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css">
<body>
<div class="typewriter">
  <h1>WiCyS at Illinois</h1>
  </div>
<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="WiCyS-logo.png" style="width:100%">
</div>
<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="wicys-denver-2021.png" style="width:100%">
</div>
<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="maxresdefault.jpg" style="width:100%">
</div>
</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>
<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>
<div class = "typing">
<h2>Who We Are</h2>
</div>
<p>Women in CyberSecurity (WiCyS) is a student chapter of a larger non-profit national organization dedicated to bringing together women in cybersecurity from academia, research and industry to share knowledge, experience, networking and mentoring. This RSO helps women interested in cyber security through tech talks, workshops, networking opportunities, research, conferences, and leadership opportunities. Our members are given the opportunity to attend the annual WiCyS National Conference and network with companies and fellow students passionate about the field of cyber security. WiCys aims to provide a supportive community to women in all stages of their pursuit of a cybersecurity career.</p>
<div class = "typing">
<h2>Our Mission</h2>
  </div>
<p>To broaden participation in cybersecurity by recruiting, retaining and advancing women in the field of cybersecurity, and improve on the very low 11% statistic of women in cybersecurity jobs. Events we'll be putting on:</p>
  <ul>
  <li>Tech Talks</li>
  <li>Workshops: CTF, Projects, EOH</li>
  <li>Networking opportunities</li>
  <li>Research involvement</li>
</ul>
<div class = "typing">
  <h2>Announcements</h2>
  </div>
  <h3 style="color:red;">Sign up for the 2021 WiCyS National Conference.</h3>
  <p>If you are interested in applying, please fill out the Google Form below. Deadline to apply is November 1st.</p>
  <a href="https://forms.gle/ozyEtVS22TDVkhuz9"></a>
</body>
</html>


