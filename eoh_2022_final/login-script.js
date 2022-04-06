let email_solved = false;

function forgot() {
    document.getElementById("login").style.display = "none";
    document.getElementById("forgot-password").style.display = "block";
}

function login() {
    document.getElementById("login").style.display = "block";
    document.getElementById("forgot-password").style.display = "none";
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
