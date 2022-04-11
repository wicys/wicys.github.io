var sqlusername = "SELECT username FROM users WHERE privilege = 'admin'";
var sqlpassword = "SELECTpasswordFROMusersWHEREusername=(SELECTusernameFROMusersWHEREprivilege='admin')";

var sqldialogueBox = document.getElementById("sqldialogue");
var sqldialogueDiv = document.getElementById("sqldialogueBox");
var databasedialogueBox = document.getElementById("databasedialogue");
var databasedialogueDiv = document.getElementById("databasedialogueBox");
var sqldialogueShown = false;
var sqldialogue_idx = 0;

var sqldialogue = [
    "There is a database called 'users' that has columns called 'username', 'password', and 'privilege'.",
    "We want to login as an admin.",
    "How can we use a SQL query to get the username of someone with 'admin' privileges?",
    "Take a look at the SQL Query guide!",
    "To get the username, we want to select the username from the 'user' database, where the user has privilege = 'admin'",
    "The correct username is SELECT username FROM users WHERE privilege = 'admin'",
    "To get the password, find the password corresponding to the above username.",
    "The correct password is SELECT password FROM users WHERE username = (SELECT username FROM users WHERE privilege = 'admin')"
  ];
  

function sqllogin() {
    var psw = document.getElementById("passwordInput").value;
    var strip_psw = psw.replaceAll(" ", "");
    var uname = document.getElementById("usernameInput").value;
    if (strip_psw != sqlpassword || uname != sqlusername) {
        sqltoggleDialogue();
    } else {
        loginButton = document.getElementById("loginButton");
        loginButton.style.display = "none";
        database = document.getElementById("databaseButton");
        database.style.visibility = "visible";
        database.style.display = "block";
        sqldialogueShown = false;
        sqldialogueDiv.style.display = "none";
        // document.getElementById("makeCoffee").innerHTML = " &#10004 CFK &#127831";
    }
}

function sqltoggleDialogue() {
  console.log("clicked!");
  sqldialogue_idx = sqldialogue_idx %8;
    if (sqldialogueShown === true && sqldialogue_idx == 8) {
      sqldialogueShown = false;
      sqldialogueDiv.style.display = "none";
      sqldialogue_idx = 0;
    } else {
      sqldialogueShown = true;
      sqldialogueBox.innerHTML = sqldialogue[sqldialogue_idx];
      sqldialogueDiv.style.display = "block";
      sqldialogue_idx = sqldialogue_idx + 1;
    }
  }

  function showDatabase() {
    logindiv = document.getElementById("login");
    logindiv.style.display = "none";
    databasediv = document.getElementById("database");
    databasediv.style.visibility= "visible";
    databasediv.style.display="block";
    dbdiv = document.getElementById("dbdivv");
    dbdiv.style.visibility = "visible";
    dbdiv.style.display="block";
    is_cfk_laptop_scene = true;
    let game = window.parent;
    game.postMessage("cfk_solve", "*");
  }
