
// find the right array entry 
// 1 - get which button clicked 
// 2 - decide based on that which draft to get
//   - if number == 1 then get index 0 of array
// chooses and displays the correct draft
curr = "email";

function openDraft(number) {
    // console.log("open draft " + number); // print statement

    document.getElementById("myForm").style.display = "block";
    const draft_array = ["draft1", "draft2", "draft3"];
    if(number == 1) {
      document.getElementById('subj').innerText = "Subject: Draft: Raffle Program";
      console.log(draft_array[0]);
      document.getElementById(draft_array[0]).style.display = "block";
      document.getElementById(draft_array[1]).style.display = "none";
      document.getElementById(draft_array[2]).style.display = "none";
    }
    if(number == 2) {
      document.getElementById('subj').innerText = "Subject: Draft: Internal Discount";
      console.log(draft_array[1]);
      document.getElementById(draft_array[0]).style.display = "none";
      document.getElementById(draft_array[1]).style.display = "block";
      document.getElementById(draft_array[2]).style.display = "none";
    }
    if(number == 3) {
      document.getElementById('subj').innerText = "Subject: Draft: HR Training";
      console.log(draft_array[2]);
      document.getElementById(draft_array[0]).style.display = "none";
      document.getElementById(draft_array[1]).style.display = "none";
      document.getElementById(draft_array[2]).style.display = "block";
    }
    
    dialogueDiv = document.getElementById("dialogueBox");
    dialogueDiv.style.display = "none";
}

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    dialogueDiv = document.getElementById("dialogueBox");
    dialogueDiv.style.display = "block";
  }

var dialogue_idx = 0;
var show_dialogue = true;

var dialogues = {
    "email" : [
      "I've got 3 drafts pre-written for you, just fill in the blanks with the words you think will convince him to click quickly!",
      "Don't forget to put in your link in the draft! (Remember, we want to set George's password to 'pizza'!)", 
      "Did George click the link? Did the link work? To check, send the email, go back to the login page, and try to login.",
      "Don't forget, the username is 'gd13@packingcompany.com' and the password is 'pizza'"
    ]
};

let dialogue;
let dialogueDiv;
function toggleDialogue() {
    dialogue = document.getElementById("dialogue");
    dialogueDiv = document.getElementById("dialogueBox");
    
    console.log("clicked!");
    
    dialogue_idx = dialogue_idx % dialogues[curr].length;
    dialogue.innerHTML = dialogues[curr][dialogue_idx];
    dialogue_idx++;
}