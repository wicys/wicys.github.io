var osintdialogue = [
  "We don't need to look here right now.",
  "Let's check the Doughmino's Pizza for fraud! I heard there might be some identity issues there.",
  "Let's see if we can find any information about the employees.",
  "This name could be useful. Let’s see what we can find out about this person.",
  "Perhaps we can find this person’s account because we know this business is " +
    "involved with some shady stuff. Let’s use our special search engine back at the base.",
  "All right, let's see what we can find out about __!",
  "It looks like we might be able to find some valuable information here.",
  "It looks like John Smith's email is johnatcheckers@email.com. Let's use this information to try" +
  " to get into his email to find evidence of shading doings.", 
  "I wonder if we can get into this email to find evidence of shady doings.",
  "Darn, I wonder how we can get the answers to these questions?",
  "That doesn't seem to be the right password.",
  "That isn't the correct email.",
  "One of these answers isn't correct.",
  "Great! We've reset the password. Now let's log in to this email and see if we can find some shady stuff!",
  "This won't be of much use if we don't have the email.",
  "I don't think we need to look at this email."
];

// chooses and displays the correct draft
function f(number) {
  console.log("open draft " + number);
}

var osintdialogueBox = document.getElementById("osintdialogue");
var osintdialogueDiv = document.getElementById("osintdialogueBox");
var osintdialogueShown = false;
var pageCover = document.getElementById("pageCover");

var visitedEmail = false;
var visitedInstagram = false;
var visitedLinkedIn = false;
var gotEmail = false;
var seenQuestions = false;

function visitInstabook() {
  visitedInstagram = true;
  window.location.replace("./instabook.html");
}

function visitEmail() {
  visitedEmail = true;
  window.location.replace("./email_login.html")
}

function visitLinkout() {
  window.location.replace("./linkedin.html");
}

function toggleComments(post) {
  console.log("toggling comments visibility");
  if (!osintdialogueShown) {
    var commentsname = "comments" + post;
    var buttonname = "load-comments" + post;
    var comments = document.getElementById(commentsname);
    var button = document.getElementById(buttonname)
    if (button.innerHTML === "Show comments") {
      button.innerHTML = "Hide comments";
    } else {
      button.innerHTML = "Show comments";
    }
    if (comments.style.display === "block") {
      comments.style.display = "none";
    } else {
      comments.style.display = "block";
    }
  }
}

function toggleDialogue(dialogueNumber) {
  console.log("Clicked to toggle dialogue " + dialogueNumber);
  if (osintdialogueShown === true) {
    osintdialogueShown = false;
    pageCover.style.display = "none";
    osintdialogueDiv.style.display = "none";
    console.log("Hiding dialogue");
  } else {
    osintdialogueShown = true;
    pageCover.style.display = "block";
    osintdialogueBox.innerHTML = osintdialogue[dialogueNumber];
    osintdialogueDiv.style.display = "block";
  }
}

function popup(img) {
  var modal = document.getElementById("modal");
  var modalimg = document.getElementById("modalimg");
  modal.style.display = "block";
  modalimg.src = images[img];
}

function hidemodal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

var emailPassword = "3FJj2093j3";
var suspiciousEmail = "johnatcheckers@email.com";
var carColor = "red";
var schoolName = "urbana";
var petName = "buddy";

function emailLogin() {
  var password = document.getElementById("passwordInput").value;
  var email = document.getElementById("usernameInput").value;
  console.log(password);
  if (password != emailPassword || email != suspiciousEmail) {
    toggleDialogue(10);
  } else {
    finished_osint = true;
    // document.getElementById("unlockComputer").innerHTML = " &#10004 Checkers &#127829";
    console.log("got into the email!");
    window.location.replace("./osintemail.html");
    let game = window.parent;
    game.postMessage("osint_solve", "*");
  }
}

function forgotPassword() {
  var loginbox = document.getElementById("loginbox");
  var resetPrompt = document.getElementById("resetPrompt");
  loginbox.style.display = "none";
  resetPrompt.style.display = "block";
}

function nextButton() {
  var resetPrompt = document.getElementById("resetPrompt");
  var securityQuestions = document.getElementById("securityQuestions");
  var email = document.getElementById("resetInput").value;
  console.log(email);
  console.log(suspiciousEmail);
  if (email == suspiciousEmail) {
    resetPrompt.style.display = "none";
    securityQuestions.style.display = "block";
    seenQuestions = true;
  } else {
    toggleDialogue(11);
  }
}

function resetPassword() {
  var securityQuestions = document.getElementById("securityQuestions");
  var resetPassword = document.getElementById("resetPassword");
  var petInput = document.getElementById("petInput").value;
  var schoolInput = document.getElementById("schoolInput").value;
  var carInput = document.getElementById("carInput").value;
  if (petInput.toLowerCase() === petName && schoolInput.toLowerCase() === schoolName && carInput.toLowerCase() == carColor) {
    securityQuestions.style.display = "none";
    resetPassword.style.display = "block";
    console.log("correct inputs");
  } else {
    toggleDialogue(12);
  }
}

function confirmNewPassword() {
  var resetPassword = document.getElementById("resetPassword");
  var loginbox = document.getElementById("loginbox");
  var newPassword = document.getElementById("newPassword").value;
  if (newPassword != "") {
    emailPassword = newPassword;
    resetPassword.style.display = "none";
    loginbox.style.display = "block";
    toggleDialogue(13);
  }
}


// find the right array entry 
// 1 - get which button clicked 
// 2 - decide based on that which draft to get
//   - if number == 1 then get index 0 of array
// chooses and displays the correct draft
function openDraft(number) {
  console.log("open draft " + number); // print statement

  document.getElementById("myForm").style.display = "block";
  const draft_array = ["draft1", "draft2", "draft3"];
  if(number == 1) {
    console.log(draft_array[0]);
    document.getElementById(draft_array[0]).style.display = "block";
  } 
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


var images = ["images_2022/dog.jpg", "images_2022/school.jpg", "images_2022/car.jpg", "images_2022/genericprofile.jpg"];
