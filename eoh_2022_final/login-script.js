let email_solved = false;
let curr = "login";

function forgot() {
    document.getElementById("login").style.display = "none";
    document.getElementById("forgot-password").style.display = "block";
    curr = "login";
}

function login() {
    document.getElementById("login").style.display = "block";
    document.getElementById("forgot-password").style.display = "none";
    curr = "login";
}

function eventlistener() {
    document.getElementById("LOGIN").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("email-solved-login: " + email_solved);

        var data = new FormData(document.querySelector('form'));
        console.log(data.get('email'));
        console.log(data.get('psw'));
        console.log(data.get('email') === 'gd13@packingcompany.com');
        if (email_solved == true && 
            (data.get('email') === 'gd13@packingcompany.com' && 
            data.get('psw') === 'pizza'))
            {
                solved = true;
                console.log("solved");
                let game = window.parent;
                game.postMessage("phishing login solve", "*");
                document.getElementById('phishing-solved').style.display = "block";
                finished_phishing = true;
                document.getElementById('login').style.display = "none";
                document.getElementById('forgot-password').style.display = "none";
                toggleDialogue("solved");
                curr = "solved";
            }
        else {
            alert("Incorrect username or password!");
        }
        
        

        
    });
}

window.addEventListener('message', (e) => {
    console.log("LOGIN RECEIVED MSG");
    console.log(e.data);
    if (e.data == "phishing email solve") {
        email_solved = true;
        console.log("email solved login");
    }
})


var dialogue_idx = 0;

var dialogues = {
    "login" : [
        "Note the URL.", 
        "Could you modify it to change George's password? How?",
        "Try clicking around", 
        "Take a look at the hints or the CSRF guide", 
        "Don't forget, we're trying to make a link so that if George clicks it, it'll change his packingcompany.com password!",
        "Think you got the right link? Press Esc and head on over to the email!"
    ],
    "solved" : [
        "Well done! You've found evidence of suspicious transactions with the Packing Company's account!"
    ]
};

let dialogue;
let dialogueDiv;
function toggleDialogue() {
    dialogue = document.getElementById("dialogue");
    dialogueDiv = document.getElementById("dialogueBox");
    console.log("clicked!");
    switch(curr) {
        case 'solved': 
            dialogue.innerHTML = dialogues[curr][0];
        default:
            dialogue_idx = dialogue_idx % dialogues[curr].length;
            dialogue.innerHTML = dialogues[curr][dialogue_idx];
            dialogue_idx++;
            break;
        }
    }