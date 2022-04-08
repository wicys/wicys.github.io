const game_canvas = document.getElementById("myCanvas");
let game_context;
const game_terminal = document.getElementById("myTerminal");
const game_start_screen = document.getElementById("blinkingStartScreen");
const email_frame = document.getElementById("email-iframe");
const login_frame = document.getElementById("login-iframe");


/* HTML TEXT ATTRIBUTES */
const ongoing_game_text = document.getElementsByClassName("ongoing");
const completed_game_text = document.getElementsByClassName("complete");


/* HINT ATTRIBUTES */
const hint_options = document.getElementsByClassName("tab");
const hint_description = document.getElementsByClassName("tabcontent");
const hint_list = document.getElementsByClassName("hint_list");
let is_hint_view_displayed = false;


  const sql_frame = document.getElementById("sqliframe");
  const osint_frame = document.getElementById("osintiframe");
  let finished_cfk = false;
  let finished_osint = false;
  let finished_phishing = false;
  let finished_network = false;

  let cfk_checkbox = false;
  let osint_checkbox = false;
  let network_checkbox = false;
  let phishing_checkbox = false;

  let dialogue_idx = 0;


  /* SCENE ATTRIBUTES */
  // the following grouped variables store and position the hint icon pic
  let hint_icon;
  const hint_x_pos = 660;
  const hint_y_pos = 5;

  // the following grouped variables store pics of the game scenes
  let start_scene;
  let bedroom_scene;
  let kitchen_scene;
  let livingroom_scene;
  let end_scene;

  let cfk_scene;
  let pizza_scene;
  let teamote_scene;
  let moonbucks_interior_scene;
  let receipt_scene;

  let cfk_street_scene;
  let teamote_street_scene;
  let moonbucks_street_scene;
  let pizza_street_scene;

  // the following grouped variables store pics of zoomed in objects
  let whiteboard_scene;
  let computer_scene;
  let combo_lock_scene;
  let fridge_scene;
  let toaster_scene;
  let coffee_maker_scene;
  let terminal_scene;

  // the following grouped variables store pics of completed task images
  let fridge_complete_scene;
  let toaster_complete_scene;
  let coffee_maker_complete_scene;

  let alma;
  let dialogue_box;
  let alma_icon;

  let phishing_laptop;
  let computer;

  // booleans used for keeping track of current scene
  let is_start_scene = true;
  let is_bedroom_scene = false;
  let is_kitchen_scene = false;
  let is_livingroom_scene = false;
  let is_end_scene = false;
  let is_almaoffice_scene = false;
  let is_dialogue_box = false;
  let is_alma_icon = false;
  let is_cfk_scene = false;
  let is_cfk_laptop_scene = false;
  let is_uh_scene = false;
  let is_email_iframe_view_displayed = false;
  let is_login_iframe_view_displayed = false;
  let is_teamote_scene = false;
  let is_pizza_scene = false;

  // network is_ variables booleans
  let is_char_icon = false;
  let is_moonbucks_employee_icon = false;
  let is_moonbucks_interior_scene = false;

  // booleans used to keep track of current task zoom ins
  let is_whiteboard_scene = false;
  let is_computer_scene = false;
  let is_osint_computer_scene = false;
  let is_combo_lock_scene = false;
  let is_fridge_scene = false;
  let is_toaster_scene = false;
  let is_coffee_maker_scene = false;
  let is_terminal_scene = false;
  let is_receipt_scene = false;
  let is_winscp_scene = false;


  let is_cfk_street_scene = false;
  let is_teamote_street_scene = false;
  let is_moonbucks_street_scene = false;
  let is_pizza_street_scene = false;

  // current scene info
  let scene_pic;  // current background picture being displayed
  let current_room;  // current room the user is in (i.e. bedroom, kitchen, etc)


  /* CHARACTER ATTRIBUTES */
  let char_right1;  // stores pic of character facing right, step 1
  let char_right2;  // stores pic of character facing right, step 2
  let char_left1;  // stores pic of character facing left, step 1
  let char_left2;  // stores pic of character facing left, step 2

  // used to determine what direction and step the
  // current character image being displayed is
  let is_right1 = false;
  let is_right2 = false;
  let is_left1 = true;
  let is_left2 = false;

  // current character info
  let char_pic;  // current character picture being displayed
  let char_x_pos = 587;  // x pos of top left corner of char img
  let char_y_pos = 282;  // y pos of top left corner of char img

  const char_speed = 3;  // number of pixels the character img moves in a frame

  let step_counter = 0;  // used to determine whether the character step changes
  let step_change = 25;  // every 25 ms, character step changes

  // booleans representing if the specific arrow key is being pressed by user
  let is_key_up = false;
  let is_key_right = false;
  let is_key_down = false;
  let is_key_left = false;

  let is_alma = false;


  /* INTERACTIVE ATTRIBUTES (mostly bounds to interact with zoom-in items) */
  // hint icon
  const hint_left_bound = 660;
  const hint_right_bound = 697;
  const hint_bottom_bound = 37;
  const hint_top_bound = 5;

  // bedroom whiteboard
  const whiteboard_left_bound = 253;
  const whiteboard_right_bound = 408;
  const whiteboard_bottom_bound = 117;
  const whiteboard_top_bound = 0;

 // moonbucks computer
 const computer_left_bound = 206;
 const computer_right_bound = 236;
 const computer_bottom_bound = 270;
 const computer_top_bound = 261;

  // cashier bound
  const cashier_right_bound = 325;
  const cashier_left_bound = 275;
  const cashier_bottom_bound = 115;
  const cashier_top_bound = 100;

  // kitchen combo lock
  const combo_lock_left_bound = 20;
  const combo_lock_right_bound = 75;
  const combo_lock_bottom_bound = 235;
  const combo_lock_top_bound = 175;

  // kitchen fridge
  const fridge_left_bound = 75;
  const fridge_right_bound = 205;
  const fridge_bottom_bound = 238;
  const fridge_top_bound = 46;

  // kitchen toaster
  const toaster_left_bound = 240;
  const toaster_right_bound = 310;
  const toaster_bottom_bound = 178;
  const toaster_top_bound = 100;

  // kitchen coffee maker
  const coffee_maker_left_bound = 450;
  const coffee_maker_right_bound = 560;
  const coffee_maker_bottom_bound = 178;
  const coffee_maker_top_bound = 80;

  // alma
  const alma_left_bound = 285;
  const alma_right_bound = 405;
  const alma_bottom_bound = 165;
  const alma_top_bound = 90;

 const table_left_bound = 500;
 const table_right_bound = 540;
 const table_bottom_bound = 300;
 const table_top_bound = 250;

  const checkers_laptop_left_bound = 165;
  const checkers_laptop_right_bound = 260;
  const checkers_laptop_bottom_bound = 80;

   // cfk laptop
  const cfk_laptop_left_bound = 450;
  const cfk_laptop_right_bound = 560;
  const cfk_laptop_bottom_bound = 178;
  const cfk_laptop_top_bound = 80;

  const email_laptop_left_bound = 400;
  const email_laptop_right_bound = 650;
  const email_laptop_bottom_bound = 450;
  const email_laptop_top_bound = 50;

  const login_laptop_left_bound = 50;
  const login_laptop_right_bound = 350;
  const login_laptop_bottom_bound = 450;
  const login_laptop_top_bound = 50;

  /* MUSIC ATTRIBUTES */
  const bgm = document.getElementById("bgm");
  const congrats = document.getElementById("congrats");
  const computer_sound = document.getElementById("computer_audio");
  const lock_sound = document.getElementById("lock_audio");
  const lock_open_sound = document.getElementById("lock_open_audio");
  const lock_fail_sound = document.getElementById("lock_fail_audio");
  const coffee_pour_sound = document.getElementById("coffee_pour_audio");
  const toaster_pop_sound = document.getElementById("toaster_pop_up_audio");

  // conditionals for network puzzle
  let has_ordered_drink = false;
  let has_logged_into_wifi = false;
  let has_ran_show_ports = false;
  let has_viewed_port_scan = false;
  let has_ran_port_scan = false;
  let has_logged_into_winscp = false;
  let has_dragged_files = false;


  /* PUZZLE ATTRIBUTES */
  // phishing
  let email_solved = false;
  let login_solved = false;

  // combinationn lock puzzle
  let allowed_combo_keys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]  // e.which codes
  let lock_combo_string = " ";  // needs to have a space in between in order for backspace to work
  let is_lock_combo_incorrect_message_visible = false;  // determines whether to display incorrect message
  let is_lock_unlocked = false; // keeps track of whether the puzzle is complete

   // computer password puzzle
  let allowed_wifi_character = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  83, 84, 85, 86, 87, 88, 89, 90] // e.which codes
  let wifi_password_string = " ";  // needs to have a space in between in order for backspace to work
  let is_password_incorrect_message_visible = false;  // determines whether to display incorrect message
  let is_computer_unlocked = false;  // keeps track of whether the puzzle is complete

  // terminal
  let current_directory = "~";  // start in root directory
  let directory_archive = ["~"];
  let subdirectories, executables_in_current;  // stores content of current directory

  let currently_in_executable = false;
  let executing_ls_command = false;
  let curr_executable_name = "";

  let terminal_archive = [""];  // for up and down functionality to see terminal command history
  let user_input = "";  // stores what the user types in the terminal
  let num_inputs = 0;  // used for creating dividers that store user input
  let input_number = num_inputs;  // used for moving between commands

  // the directory tree structure - to access subdirectories and executables as needed
  // the directory tree structure - to access subdirectories and executables as needed
  const directory = {
    "~" : {
      "directories" : [],
      "executables" : [
        "show_ports.py",
        "scan_ports.py"
      ]
    },
  };

  /* TERMINAL PUZZLE ATTRIBUTES */
  // keeps track of whether terminal tasks are complete
  let is_fridge_unlocked = false;
  let is_coffee_brewed = false;

  // stores coffeeRequestSender.exe user inputs (for coffee brewing task)
  let current_coffee_state = "";
  let current_host_name = "";
  let current_port_name = "";
  let current_request_type = "";
  let current_request_url = "";

  // stores text for when network traffic is captured from the lineDolphin executable
  let display_coffee_text = false;
  const coffee_text = ["Pinging CYBA brewer using saved configuration...",
                        "Request sent:",
                        "GET mycyba/brewer/status CYBA/1.5",
                        "Host: mycyba:5000",
                        "Connection: keep-alive",
                        "...",
                        "CYBA/1.5 response received:",
                        "Host: mycyba",
                        "Port: 5000"
                        ];
   // stores scan_ports.py script
   let display_port_scan_code = false;
   const port_scan_code = ["# command to run script: python scan_ports.py",
                           "",
                           "# code reference: https://inc0x0.com/tcp-ip-packets-introduction/tcp-ip-packets-4-creating-a-syn-port-scanner/",
                           "",
                           "import socket",
                           "",
                           "def scan(host, port):",
                           "    \xa0\xa0s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
                           "    \xa0\xa0try:",
                           "        \xa0\xa0\xa0\xa0s.connect((host, port))",
                           "        \xa0\xa0\xa0\xa0print('Port open: ' + str(port))",
                           "        \xa0\xa0\xa0\xa0s.close()",
                           "    \xa0\xa0except:",
                           "        \xa0\xa0\xa0\xa0print('Port closed: ' + str(port))",
                           "",
                           "host = '10.10.10.1'",
                           "for port in [21, 22, 53, 80, 443]:",
                           "    \xa0\xa0scan(host, port)"
                         ]
 
  let display_port_scan_output = false;
  const port_scan_output = ["port\xa0\xa0proto\xa0\xa0name\xa0\xa0\xa0\xa0state  ",
                            "----\xa0\xa0-----\xa0\xa0----\xa0\xa0\xa0\xa0-----  ",
                            "21\xa0\xa0\xa0\xa0tcp\xa0\xa0\xa0\xa0ftp \xa0\xa0\xa0\xa0open   ",
                            "22\xa0\xa0\xa0\xa0tcp\xa0\xa0\xa0\xa0ssh \xa0\xa0\xa0\xa0closed ",
                            "53\xa0\xa0\xa0\xa0tcp\xa0\xa0\xa0\xa0dns \xa0\xa0\xa0\xa0closed ",
                            "80\xa0\xa0\xa0\xa0tcp\xa0\xa0\xa0\xa0http \xa0\xa0\xa0closed ",
                            "443\xa0\xa0\xa0tcp\xa0\xa0\xa0\xa0https \xa0\xa0closed ",
                          ]
  
  let display_ports = false;
  const ports = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",
                "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30",
                "31","32","33","34","35","36","37","83","39","40","41","42","43","44","45",
                "46","47","48","49","50","...","65535"];
  

  function cfkScreen() {
    is_dialogue_box = false;
    is_alma_icon = false;
    is_alma = false;

    iframe = document.getElementById("sqliframe");
    is_cfk_laptop_scene = true;
    char_x_pos = 210;
    char_y_pos = 80;
    game_canvas.style.display = "none";
    iframe.style.display = "block";
    closeButton = document.getElementById("closeiframe");
    closeButton.style.display = "inline-block";
  }
  function closeSQL() {
    game_canvas.style.display = "block";
    sql_frame.style.display = "none";
    closeButton = document.getElementById("closeiframe");
    closeButton.style.display = "none";
    draw(char_pic, 210, 90, 64, 64);
    scene_pic = cfk_scene;
    current_room == cfk_scene;
    is_cfk_laptop_scene = false;
    is_cfk_scene = true;
    moveOutOfDetectionZone(cfk_laptop_left_bound, cfk_laptop_right_bound, cfk_laptop_bottom_bound, cfk_laptop_top_bound);
  }
function openComputer() {
    is_osint_computer_scene = true;
    char_x_pos = 210;
    char_y_pos = 80;
    game_canvas.style.display = "none";
    osint_frame.style.display = "block";
    closeButton = document.getElementById("closeiframe");
    closeButton.style.display = "inline-block";
  }

  function closeComputer() {
    is_osint_computer_scene = false;
    game_canvas.style.display = "block";
    is_pizza_scene = true;
    scene_pic = pizza_scene;
    osint_frame.style.display = "none";
    char_x_pos = 210;
    char_y_pos = 90;
    closeButton = document.getElementById("closeiframe");
    closeButton.style.display = "none";
    draw(char_pic, 210, 90, 64, 64);
  }

  // /* GENERAL ATTRIBUTES */
  // // get the canvas element and context (context allows you to draw on the canvas)
  // // get the element with id="defaultOpen" and click on it (i.e. computer hint tab)
  // document.getElementById("defaultOpen").click();

  // keeps track of what hints have been shown for a puzzle
  let current_hint_for_puzzle = {
    "Computer" : 0,
    "Toast" : 0,
    "Fridge" : 0,
    "Coffee" : 0
  }

  // hints for puzzles
  const hints = {
    "Checkers" : [
      // unlock fridge hints below
      "If we can get the name of an employee, maybe we can find out more information about Checkers.",
      "That plaque looks interesting. Let's go look at it!",
      "Let's go check out the computer!"
    ],
    "CoffeeEmoticon" : [
      "Explore a bit, maybe try to sit down...?",
      "Take a look at the login page first.",
      "Pay attention to URLs!",
      "The forgot your password form sends a GET request",
      "Take a look at the CSRF guide",
      "The GET request only has one parameter",
      "How could you modify a URL to send a GET request? ",
      "Don't forget a '?' before the parameter(s)!",
      "Good phishing emails tend to have a tone of urgency!! For example, offering a discount which expires soon or a limited time to opt-in to a raffle.",
      "Take a look at the Phishing Email guide",
      "Proofread your email! Nothing gives you away like typos!",
      "Format and word your email professionally! Have a greeting and sign-off.",
    ],
    "Toast" : [
      // make toast hints below
      "Go to the whiteboard to find the right number conversion for the lock.",
      "Take a look at the Number Systems and ASCII guide!",
      "The binary code given on the whiteboard translates to ‘hexadec’ in ASCII.",
      "The lock combination is in hexadecimal form. The correct combination is in decimal form."
    ],
    "Fridge" : [
      // unlock fridge hints below
      "Unlock the computer to access the terminal",
      "Use the terminal to try to access your smart fridge.",
      "Take a look at the CLI guide!",
      "Try the command 'ls' to see what is available to view in the system.",
      "Try the command 'cd <folder-name>' to navigate to the folder.",
      "Type ./<executable-file-name> to run the executable.",
      "Once you run the exe file, type “lock” to lock, and “unlock” to unlock your fridge."
    ],
    "Coffee" : [
      // brew coffee hints below
      "Unlock the computer to access the terminal",
      "Use the terminal to try to access your smart coffee brewer.",
      "Take a look at the CLI guide!",
      "Type 'exit' to return to the folder the executable file is located.",
      "Use the command 'cd ../' to navigate to the previous folder.",
      "Run 'lineDolphin.exe' to capture network traffic.",
      "Type 'capture' to see what GET request looks like!",
      "Run 'coffeeRequestSender.exe' to send a request to the coffee machine.",
      "To check the status, use the URL 'mycyba/brewer/status'. You can also brew coffee using a VERY similar URL.",
      "The host address is 'mycyba', port number is '5000', request type is 'GET', and URL is 'mycyba/brewer/brew'."
    ]
  }


  const dialogue = {
    "Office" : [
      ["Hello, and welcome to the investigators’ office. This may", "be a bit sudden, but today, you’re being assigned to", "investigate a case of fraud happening in restaurants", "on Green Street."],
      ["You can begin your investigation after going through the", "portal in the top left corner of the room. Good luck!"],
    ],
    "CFK" : [
      ["Welcome to CFK! Things are looking real empty in here.", "There's a computer over there! Let's go take a look!"],
      ["Good job on discovering CFK's case of fraud!", "Let's check out the other restaurants on Green Street."]
    ],
    "OSINT": [
      ["For such a popular pizza chain, it's so strange", "that nobody is in here.", "Let's take a look at the computer behind the counter"],
      ["Wow! Now it makes sense why I've never", "seen anyone get pizza here!", "Those emails are great evidence for criminal activity."]
    ], 
    "Moonbucks" : [
      ["Hiya Detective! Thanks for popping into Moonbucks today.", "There's been some really suspicious activities going", "on at Moonbucks and we need your help. Why don't you", "go get a drink before I explain?"],
      ["Hi, can I get a coffee?"],
      ["Yep, that will be $3.50. Your drink will be ready soon.", "Here's your receipt."],
      ["While we wait for your drink, let me explain the", "situation."],
      ["We suspect that the owner of this company is committing", "tax fraud and believe that accessing their tax documents", "can unveil the truth. Today's mission is to uncover", "those documents and see what Moonbucks has been up to."],
      ["Here's your coffee. Enjoy your day!"],
      ["Alright, we should get to work. Why don't you try", "connecting to the WiFi?"],
      ["Okay, now that you're logged in, we can try to acccess", "an open port in the network's Firewall through writing", "commands in the command line..."],
      ["In computer science, there are two types of ports:", "physical ports and logical ports."],
      ["A physical port is a physical docking point where", "other devices connect, and a logical port is a", "well-programmed docking point from where data flows", "over the internet."],
      ["For our task at hand, we will use a logical port in", "order to complete our objective."],
      ["Now, with our understanding of a port, let's take a", "look at what ports are available."],
      ["First, let's look at all the ports. In order to see them,", "run the command 'python show_ports.py' in the terminal."],
      ["Oh my! There's so many ports...we need to check to see if", "any of these are open! We can do this by executing a", "port scan by running the python script found in the", "computer files. Let's take a look at the script!"],
      ["Now that we have the script, let's look at it to see how", "we might be able to run it in the command line.", "Here's a hint: comments in lines of code often give", "important information about the details of the code."],
      ["It looks like port 21 is open! Now let's check it out by", "connecting to port 21. To do that, we need to get in.", "Let's try loggin in to WinSCP as an ANONYMOUS user."],
      ["Great job! You made it into port 21! Wondering how this", "works on a technical level?"],
      ["Well, if the server is configured to allow users to input", "'anonymous' for the username and password to connect with", "the FTP (File Transfer Protocol), you can sign", "in. This is called a clear-text sign-in protocol."],
      ["This is basically when passwords are stored in a raw", "format, which means your password can be viewed by lots", "of peoples like IT staff and staff who are managing", "code."],
      ["This can be really dangerous since people tend to reuse", "passwords a lot for their online presence, so make sure", "you are staying safe!"],
      ["Many servers allow limited access to anonymous users,", "but this server gives you full access. that's why open", "ports and lax security can be dangerous!"],
      ["Now, try dragging their files over to your interface on", "the right."],
      ["Great job! You now have collected evidence that Moonbucks", "may have committed tax fraud. We can now hand these", "files over to the cops in order to help them with", "their investigation!"]
    ],
    "CoffeeEmoticon" : [
      ["Welcome to Teamote! Please take a seat at the top", "right table!"],
      ["We've found suspicious transactions in this packing",
      "company and I've gotten the email of one of the",
      "managers involved in these transactions!"],
    ],
    "CoffeeEmoticon-Laptop" : [
      ["I've pulled up the website for the packing company that",
      "delivers here on the left and your email with a couple",
      "pre-filled drafts on the right"],
      ["George's email is gd13@packingcompany.com"],
      ["So let's try to craft a link so it'll change",
      "George's packingcompany account password",
      "to something you know: pizza"],
      ["Let's look at the login first!"]
    ],
    "Phishing-Solved" : [
      ["Well done! You've found evidence of suspicious", 
       "transactions with the Packing Company's account!"]
    ]
      

  }

   /**
   * Begins game by loading in all images that will be used (i.e. character, scenes, etc),
   * initializing game scene and character images, and calling the function that updates the game.
   */
  function start() {
    // load hint icon to be diplayed in all ongoing game scenes
    game_context = game_canvas.getContext("2d");
    hint_icon = loadCharacter("images/hint_icon_filled_64x64_x0.5.png", hint_x_pos, hint_y_pos, 32, 32);

    // load initial game setting components
    start_scene = loadBackground("images/eceb-1.png");
    bedroom_scene = loadBackground("images/bedroom.png");
    kitchen_scene = loadBackground("images/new_new_kitchen.png");
    livingroom_scene = loadBackground("images/big-out-living.png");
    end_scene = loadBackground("images_2022/office_exterior.png");
    almaoffice_scene= loadBackground("images_2022/office_interior.png");
    pizza_scene = loadBackground("images_2022/checkers_interior.png");
    cfk_scene = loadBackground("images_2022/kfc-interior.png");
    teamote_scene = loadBackground("images_2022/teamote.png");
    uh_scene = loadBackground("images/computer_screen.png");
    moonbucks_interior_scene = loadBackground("images_2022/moonbucks_interior_new.png");

    cfk_street_scene = loadBackground("images_2022/cfk_street.png")
    teamote_street_scene = loadBackground("images_2022/teamote_street-2.png")
    moonbucks_street_scene = loadBackground("images_2022/moonbucks_street.png")
    pizza_street_scene = loadBackground("images_2022/checkers_street.png")
    // load zoomed in puzzle images
    whiteboard_scene = loadBackground("images/whiteboard_w_lock_clue.png");
    computer_scene = loadBackground("images/locked_computer.png");
    combo_lock_scene = loadBackground("images/combination_lock_with_numbers_on_cabinet_w_box1.png");
    fridge_scene = loadBackground("images/fridge_display_w_text.png");
    toaster_scene = loadBackground("images/zoomed_in_toaster_with_background.png");
    coffee_maker_scene = loadBackground("images/coffee.png");
    terminal_scene = loadBackground("images/computer_screen.png");
    receipt_scene = loadBackground("images_2022/receipt_zoomed_in.png");

    // load completed puzzle images
    fridge_complete_scene = loadBackground("images/fridge_completed.png");
    toaster_complete_scene = loadBackground("images/toaster_task_complete.png");
    coffee_maker_complete_scene = loadBackground("images/coffee_task_complete_w_text.png");

    // load initial character components
    char_right1 = loadCharacter("images/step1.png", char_x_pos, char_y_pos, 64, 64);
    char_right2 = loadCharacter("images/step2.png", char_x_pos, char_y_pos, 64, 64);
    char_left1 = loadCharacter("images/step1_left.png", char_x_pos, char_y_pos, 64, 64);
    char_left2 = loadCharacter("images/step2_left.png", char_x_pos, char_y_pos, 64, 64);
    alma = loadCharacter("images_2022/alma_overworld.png", 356, 90, 50, 112);
    alma_icon = loadCharacter("images_2022/alma_icon.png");
    dialogue_box = loadCharacter("images_2022/dialogue.png");
    phishing_laptop = loadCharacter("images_2022/alaptop.png", 538, 259, 16, 16);
    computer = loadCharacter("images_2022/blank_computer_monitor.png");
    // initialize values for starting game scene
    scene_pic = start_scene;
    current_room = start_scene;
    char_pic = char_left1;

    setInterval(update, 20)  // infinite loop, runs every 2 ms

  }


  /**
   * Initial loading of background (image takes up the entire canvas space).
   * Loads the image into the page. Must be called prior to drawing or will face the problem
   * of the image not always displaying when the page is opened/refreshed.
   *
   * @param img_url String representing the path to the image
   * @return Object representing the background image
   */
   function loadBackground(img_url) {
    const background_img = new Image();
    background_img.src = img_url;

    // load images first
    // - Note: the following line is needed to fix the problem of the background img not always
    // displaying when the page is refreshed
    // - Source: https://stackoverflow.com/questions/22889641/simple-html5-canvas-image-not-displaying
    background_img.addEventListener("load", drawBackground, false);

    function drawBackground() {}

    return background_img;
  }


  /**
   * General function to initially load components that don't take up the entire canvas
   * (i.e. character). Similar to loadBackground(), this function loads the image into the
   * page and must be called prior to drawing.
   *
   * @param img_url String representing the path to the image
   * @param x Integer representing the x-coordinate of where the image should be positioned in the canvas
   * @param y Integer representing the y-coordinate of where the image should be positioned in the canvas
   * @param width Integer representing the width of the image
   * @param height Integer representing the height of the image
   * @return Object representing the component image
   */
  // general function to initially load and draw components (i.e. character)
  function loadCharacter(img_url, x, y, width, height) {
    const img = new Image();
    img.src = img_url;

    // load images first
    // - Note: the following line is needed to fix the problem of the background img not always
    // displaying when the page is refreshed
    // - Source: https://stackoverflow.com/questions/22889641/simple-html5-canvas-image-not-displaying
    img.addEventListener("load", drawCharacter, false);

    function drawCharacter() {}

    return img;
  }


  /**
   * Draws the image in the specified location. Is needed for redrawing images in the
   * infinite loop that updates the game visuals.
   *
   * @param img Object representing the image
   * @param x Integer representing the x-coordinate of where the image should be positioned in the canvas
   * @param y Integer representing the y-coordinate of where the image shoudl be positioned in the canvas
   * @param width Integer representing the width of the image
   * @param height Integer representing the height of the image
   */
   function draw(img, x, y, width, height) {
    game_context.drawImage(img, sx=x, sy=y, swidth=width, sheight=height);
  }


  function isScene() {
    return ((scene_pic == almaoffice_scene) || (scene_pic == teamote_scene) || (scene_pic == pizza_scene) || (scene_pic == pizza_street_scene) || (scene_pic == cfk_scene) || (scene_pic == cfk_street_scene) || (scene_pic == teamote_street_scene) || (scene_pic == moonbucks_interior_scene) || (scene_pic == moonbucks_street_scene));
  }


  /**
   * Updates game visuals and stats.
   */
  function update() {
    if (finished_cfk && !cfk_checkbox) {
      console.log("done cfk!!");
      cfk_checkbox = true;
      document.getElementById("makeCoffee").innerHTML = " &#10004 CFK &#127831";
    }

    if (finished_osint && !osint_checkbox) {
      osint_checkbox = true;
      document.getElementById("unlockComputer").innerHTML = " &#10004 Checkers &#127829";
    }

    if (finished_phishing && !phishing_checkbox) {
      phishing_checkbox = true;
      document.getElementById("openFridge").innerHTML = " &#10004 Teamote &#129483";
    }

    if (finished_network && !network_checkbox) {
      network_checkbox = true;
      document.getElementById("makeToast").innerHTML = " &#10004 Moonbucks &#9749";
    }
    // step 1 - clear the canvas
    clearCanvas();

    // step 2 - update character position + scene
    // update characteristics for start screen
    if (is_start_scene) {
      // update start screen position
      game_start_screen.style.left = game_canvas.offsetLeft + "px";
      game_start_screen.style.top = game_canvas.offsetTop + "px";
    } else {
      // hide start screen with text once game starts (i.e. stop the blinking)
      game_start_screen.style.visibility = "hidden";
    }

    moveCharacter();
    step_counter++;

    // update any task scene by switching in between puzzle images
    zoomInOnItem();

    // update game scene by switching between rooms
    changeRooms();

    // update positioning and visibility for terminal - ensure it overlaps game canvas
    // source1: https://www.w3schools.com/jsref/prop_element_offsettop.asp
    // source2: https://www.w3schools.com/jsref/prop_style_left.asp
    game_terminal.style.left = game_canvas.offsetLeft + 50 + "px";
    game_terminal.style.top = game_canvas.offsetTop + 54 + "px";

    // only display scrolling text box when terminal is open
    // source: https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
    if (is_terminal_scene) {
      game_terminal.style.visibility = "visible";
    } else {
      game_terminal.style.visibility = "hidden";
    }

    // update positioning of hint view
    positionHints();

    // step 3 - redraw
    // redraw scene
    draw(scene_pic, 0, 0, 700, 500);

        // redraw character only if it is in a room (i.e. not a puzzle scene)
    if (scene_pic == moonbucks_interior_scene) {
      draw(computer, 218, 280, 30, 30);
    }
    
    if (scene_pic == moonbucks_interior_scene || scene_pic == moonbucks_street_scene) {
      draw(char_pic, char_x_pos, char_y_pos, 64, 64);
    }

    if (scene_pic == almaoffice_scene) {
        draw(alma, 356, 90, 50, 112)
    }

    // redraw character only if it is in a room (i.e. not a puzzle scene)
    if (isScene()) {
      draw(char_pic, char_x_pos, char_y_pos, 64, 64);
    }

    // redraw hint only if not on starting or ending scene
    if (!is_start_scene && !is_end_scene) {
      draw(hint_icon, hint_x_pos, hint_y_pos, 32, 32);
    }

    if (is_teamote_scene) {
      draw(phishing_laptop, 538, 259, 16, 16);
    }

  if (is_dialogue_box) {
    draw(dialogue_box, 0, 400, 700, 100);

    if (is_alma_icon) {
      draw(alma_icon, 650, 450, 50, 50);
    }
  }
    
    // display text (needs to be after scene pics are drawn in order to be seen)
    displayUserInput();
    displayComboLockHint();
    displayIncorrectMessage();
    displayDialogue();
    displayMoonbucksDialogue();


    // console.log("x:", char_x_pos)
    // console.log("y:", char_y_pos)

    // check to see if all tasks are done--if yes, render ending scene instead and play music
    displayCompleteGameScene();
  }


  /**
   * Clears the canvas.
   */
  function clearCanvas() {
    // clears everything on the canvas
    game_context.clearRect(0, 0, 700, 500);
  }


  /* FUNCTIONS FOR CHARACTER MOVEMENT */
  /**
   * Moves the character by updating its position and determining which pose the character takes.
   *
   * A character is only allowed to move when it is in a room, within the bounds of a room, and
   * hint view is not displayed.
   */
  function moveCharacter() {
    if (!is_hint_view_displayed && (isScene()) && scene_pic != moonbucks_interior_scene) {  
      // move up
      if (is_key_up && (char_y_pos - char_speed >= 0) && (char_y_pos - char_speed <= 436)) {
        char_y_pos -= char_speed;

        changeSteps(false, false, false);
      }

      // move right
      if (is_key_right && (char_x_pos + char_speed >= 0) && (char_x_pos + char_speed <= 636)) {
        char_x_pos += char_speed;

        changeSteps(true, false, (char_pic == char_left1 || char_pic == char_left2));
      }

      // move down
      if (is_key_down && (char_y_pos + char_speed >= 0) && (char_y_pos + char_speed <= 436)) {
        char_y_pos += char_speed;

        changeSteps(false, false, false);
      }

      // move left
      if (is_key_left && (char_x_pos - char_speed >= 0) && (char_x_pos - char_speed <= 636)) {
        char_x_pos -= char_speed;

        changeSteps(false, true, (char_pic == char_right1 || char_pic == char_right2));
      } 
    }  else if (!is_hint_view_displayed && scene_pic == moonbucks_interior_scene) {
      // move up
      if (is_key_up && (char_y_pos - char_speed >= 0) && (char_y_pos - char_speed <= 355)) {
        char_y_pos -= char_speed;

        changeSteps(false, false, false);
      }
      // move right 
      if (is_key_right && (char_x_pos + char_speed >= 205) && (char_x_pos + char_speed <= 430)) {
        char_x_pos += char_speed;

        changeSteps(true, false, (char_pic == char_left1 || char_pic == char_left2));
      }

      // move down
      if (is_key_down && (char_y_pos + char_speed >= 0) && (char_y_pos + char_speed <= 355)) {
        char_y_pos += char_speed;

        changeSteps(false, false, false);
      }

      // move left
      if (is_key_left && (char_x_pos - char_speed >= 205) && (char_x_pos - char_speed <= 430)) {
        char_x_pos -= char_speed;

        changeSteps(false, true, (char_pic == char_right1 || char_pic == char_right2));
      }
    }
  }


  /**
   * Changes the steps of the character to create an animation of the character walking.
   *
   * @param is_moving_right Boolean representing if the user wants to move the character right
   * @param is_moving_left Boolean representing if the user wants to move the character left
   * @param is_changing Boolean that's true if the character is changing directions horizontally
   *   (i.e. if the character is moving from right to left or vice versa)
   */
  function changeSteps(is_moving_right, is_moving_left, is_changing) {
    // determine if steps are changed
    if (step_counter % step_change == 0 || is_changing) {
      if (!is_moving_right && !is_moving_left) {  // i.e. moving up or down
        if (is_right1) {
          // change char pic
          char_pic = char_right2;

          is_right2 = true;
          is_right1 = false;
        } else if (is_right2) {
          // change char pic
          char_pic = char_right1;

          is_right1 = true;
          is_right2 = false;
        } else if (is_left1) {
          // change char pic
          char_pic = char_left2;

          is_left2 = true;
          is_left1 = false;
        } else if (is_left2) {
          // change char pic
          char_pic = char_left1;

          is_left1 = true;
          is_left2 = false;
        }
      } else if (is_moving_right && !is_moving_left) {  // moving right
        if (is_right1) {
          // change char pic
          char_pic = char_right2;

          is_right2 = true;
          is_right1 = false;
        } else if (is_right2) {
          // change char pic
          char_pic = char_right1;

          is_right1 = true;
          is_right2 = false;
        } else {
          // change char pic
          char_pic = char_right1;

          is_right1 = true;
          is_left1 = false;
          is_left2 = false;
        }
      } else if (is_moving_left && !is_moving_right) {  // moving left
        if (is_left1) {
          // change char pic
          char_pic = char_left2;

          is_left2 = true;
          is_left1 = false;
        } else if (is_left2) {
          // change char pic
          char_pic = char_left1;

          is_left1 = true;
          is_left2 = false;
        } else {
          // change char pic
          char_pic = char_left1;

          is_left1 = true;
          is_right1 = false;
          is_right2 = false;
        }
      }
    }
  }


  /* RECORD KEY DOWNS (specifically character movements) */
  /**
   * Determines which keys are being pressed and updates the boolean variables that
   * store which direction the character moves in.
   *
   * source for recording key downs: https://stackoverflow.com/questions/39806858/how-to-use-arrow-keys-to-move-object-smoothly-in-canvas
   * source for stopping scrolling when using arrow keys: https://stackoverflow.com/questions/40905098/how-to-stop-scrolling-while-html5-game-is-playing
   */
   document.onkeydown = function(event) {
    if (event.code === "ArrowUp") {
      is_key_up = true;
      event.preventDefault();
    }

    if (event.code === "ArrowRight") {
      is_key_right = true;
      event.preventDefault();
    }

    if (event.code === "ArrowDown") {
      is_key_down = true;
      event.preventDefault();
    }

    if (event.code === "ArrowLeft") {
      is_key_left = true;
      event.preventDefault();
    }
  }

  document.onkeyup = function(event) {
    if (event.code === "ArrowUp") {
      is_key_up = false;
    }

    if (event.code === "ArrowRight") {
      is_key_right = false;
    }

    if (event.code === "ArrowDown") {
      is_key_down = false;
    }

    if (event.code === "ArrowLeft") {
      is_key_left = false;
    }
  }

  /** FUNCTION FOR DIALOGUE */

  function dialogueBox(room) {
      if (almaoffice_scene == room) {
        if (!is_dialogue_box && !is_alma_icon && !is_alma) {
          dialogue_idx = 0;
          is_dialogue_box = true;
          is_alma_icon = true;
          is_alma = true;
        }
        console.log("alma's office");
        displayDialogue(room);

      }
      if (room == cfk_scene) {
        if (!is_dialogue_box && !is_alma_icon && !is_alma) {
          dialogue_idx = 0;
          is_dialogue_box = true;
          is_alma_icon = true;
          is_alma = true;
        }
        displayDialogue(room);
      }
      if (room == pizza_scene) {
        if (!is_dialogue_box && !is_alma_icon && !is_alma) {
          dialogue_idx = 0;
          is_dialogue_box = true;
          is_alma_icon = true;
          is_alma = true;
        }
        displayDialogue(room);
      }
      if (room == teamote_scene) {
        if (!is_dialogue_box && !is_alma_icon && !is_alma) {
          dialogue_idx = 0;
          is_dialogue_box = true;
          is_alma_icon = true;
          is_alma = true;
        }
        // console.log("why");
        
        displayDialogue(room);
      }
      if (room == uh_scene) {
        if (!is_dialogue_box && !is_alma_icon && !is_alma) {
          dialogue_idx = 0;
          is_dialogue_box = true;
          is_alma_icon = true;
          is_alma = true;
        }
        console.log(room);
        displayDialogue(room);
      }
      if (room == moonbucks_interior_scene) {
        is_dialogue_box = true;
        // displayMoonbucksDialogue();
      }
  }

  /* FUNCTIONS FOR SCENE CHANGES */
  /**
   * Checks if the user character landed in any zoom in area (i.e. within triggering bounds).
   * If so, zoom into the item by updating the scene images.
   */
   function zoomInOnItem() {

    if (scene_pic == almaoffice_scene && char_x_pos >= alma_left_bound &&
      char_x_pos <= alma_right_bound && char_y_pos <= alma_bottom_bound) {
        dialogueBox(almaoffice_scene);
    } else {
      is_alma = false;
    }
    if (scene_pic == cfk_scene) {
      dialogueBox(cfk_scene);
    } else {
      is_alma = false;
    }
    if (scene_pic == pizza_scene) {
      dialogueBox(pizza_scene);
    } else {
      is_alma = false;
    }
    if (scene_pic == teamote_scene) {
      // console.log("what");
      dialogueBox(teamote_scene);
    } else {
      is_alma = false;
    }

    if (scene_pic == uh_scene) {
      dialogueBox(teamote_scene);
    } else {
      is_alma = false;
    }
    if (scene_pic == pizza_scene && char_x_pos >= checkers_laptop_left_bound && char_x_pos <= checkers_laptop_right_bound
      && char_y_pos <= checkers_laptop_bottom_bound) {
        is_pizza_scene = false;
        is_osint_computer_scene = true;
        // is_pizza_computer_scene = true;
        openComputer();
      }
    if (scene_pic == cfk_scene && char_x_pos >= cfk_laptop_left_bound &&
      char_x_pos <= cfk_laptop_right_bound && char_y_pos <= cfk_laptop_bottom_bound) {

      // zoom into whiteboard - switch out of bedroom scene
      // update scene images
      is_cfk_laptop_scene = true;
      is_cfk_scene = false;
      scene_pic = is_cfk_laptop_scene;
      // cfkScreen();
      changeIFrameDisplay("block", "cfk");

     // update scene images
    }
    if (scene_pic == teamote_scene && char_x_pos >= table_left_bound && char_x_pos <= table_right_bound &&
      char_y_pos <= table_bottom_bound && char_y_pos >= table_top_bound) {
        console.log("aaaaaaaa");
        scene_pic = uh_scene;
        is_uh_scene = true;
        is_teamote_scene = false;
    }

    // cashier zoom in
    if (scene_pic == moonbucks_interior_scene && char_x_pos >= cashier_left_bound &&
      char_x_pos <= cashier_right_bound && char_y_pos <= cashier_bottom_bound && char_y_pos >= cashier_top_bound) {

      // begin character dialogue
      if (dialogue_idx === 1) {
        dialogueBox(moonbucks_interior_scene);
      }
    }

    // moonbucks computer
    if (scene_pic == moonbucks_interior_scene && char_x_pos >= computer_left_bound && 
      char_x_pos <= computer_right_bound && char_y_pos <= computer_bottom_bound &&
      char_y_pos >= computer_top_bound) {

      console.log("ALWAYS IN!")
      
      if (dialogue_idx != 6) {  // i.e. after the point alma asks user to log into wifi
        if (!has_logged_into_wifi) {
          // zoom into computer lock screen - switch out of moonbucks interior scene
          scene_pic = computer_scene;
          is_computer_scene = true;
          is_moonbucks_interior_scene = false;
        } else if (!has_ran_show_ports && !has_viewed_port_scan && !has_ran_port_scan) {
          // zoom into terminal scene if computer is unlocked
          scene_pic = terminal_scene;
          is_terminal_scene = true;
          is_computer_scene = false;
          is_moonbucks_interior_scene = false;
        } else if (!has_logged_into_winscp) {  // TODO: change accordingly
          // zoom into terminal scene if computer is unlocked
          console.log("ALWAYS NOT LOGGED IN")
          scene_pic = terminal_scene;
          is_winscp_scene = true;
          is_terminal_scene = false;
          is_computer_scene = false;
          is_moonbucks_interior_scene = false;
        } else if (!has_dragged_files) {  // TODO: change accordingly
          // zoom into terminal scene if computer is unlocked
          console.log("ALMWAYS NOT DRAGGED")
          scene_pic = terminal_scene;
          is_winscp_scene = true;
          is_moonbucks_interior_scene = false;
        }
      }
    }
  }


  /**
   * Checks if the character is within the bounds of a door to change rooms. If so, change
   * the room the character is in, update the scene attributes, and position the character
   * in the doorway of the next room.
   */
   function changeRooms() {
    // if character is currently in bedroom and within bounds of left door, enter living room
    if (scene_pic == almaoffice_scene && (char_y_pos <= 75 && (char_x_pos <= 110 && char_x_pos >= 65))){
      scene_pic = cfk_street_scene;
      current_room = cfk_street_scene;
      char_x_pos = 625;
      char_y_pos = 400
      is_almaoffice_scene = false;
      is_cfk_street_scene = true;

      is_alma_icon = false;
      is_dialogue_box = false;
      is_alma = false;
    }

    // if character is currently in living room and within bounds of top door, enter kitchen
    if (scene_pic == cfk_street_scene && (char_x_pos <= 25)){
      scene_pic = teamote_street_scene;
      current_room = teamote_street_scene;
      char_x_pos = 400;
      char_y_pos = 380;
      is_teamote_street_scene = true;
      is_cfk_street_scene = false;
    }

    if (scene_pic == teamote_street_scene && (char_x_pos <= 25)){
      scene_pic = moonbucks_street_scene;
      current_room = moonbucks_street_scene;
      char_x_pos = 400;
      char_y_pos = 380;
      is_teamote_street_scene = false;
      is_moonbucks_street_scene = true;
    }

    if (scene_pic == teamote_street_scene && (char_x_pos >= 605)){
      scene_pic = cfk_street_scene;
      current_room = cfk_street_scene;
      char_x_pos = 100;
      char_y_pos = 380;
      is_teamote_street_scene = false;
      is_cfk_street_scene = true;
    }

    // if character is currently in kitchen and within bounds of bottom door, enter living room
    if (scene_pic == moonbucks_street_scene && (char_x_pos <= 25 )){
      scene_pic = pizza_street_scene;
      current_room = pizza_street_scene;
      char_x_pos = 400;
      char_y_pos = 380;
      is_moonbucks_street_scene = false;
      is_pizza_street_scene = true;
    }

    if (scene_pic == moonbucks_street_scene && (char_x_pos >= 605 )){
      scene_pic = teamote_street_scene;
      current_room = teamote_street_scene;
      char_x_pos = 100;
      char_y_pos = 380;
      is_moonbucks_street_scene = false;
      is_teamote_street_scene = true;
    }

    // if character is currently in living room and within bounds of right door, enter bedroom
    if (scene_pic == pizza_street_scene && (char_x_pos >= 600)){
      scene_pic = moonbucks_street_scene;
      current_room = moonbucks_street_scene;
      char_x_pos = 100;
      char_y_pos = 380;
      is_moonbucks_street_scene = true;
      is_pizza_street_scene = false;
    }

    if (scene_pic == pizza_street_scene && ((char_x_pos >= 57 && char_x_pos <= 135) && char_y_pos <= 295) ){
      scene_pic = pizza_scene;
      current_room = pizza_scene;
      char_x_pos = 105;
      char_y_pos = 300;
      is_pizza_street_scene = false;
      is_pizza_scene = true;
      // openComputer();

      is_alma_icon = false;
      is_dialogue_box = false;
    }

    if (scene_pic == pizza_scene && ((char_x_pos >= 85 && char_x_pos <= 130) && char_y_pos >= 385)){
      // console.log("go back out!");
      scene_pic = pizza_street_scene;
      current_room = pizza_street_scene;
      char_x_pos = 160;
      char_y_pos = 350;
      is_pizza_street_scene = true;
      is_pizza_scene = false;

      is_alma_icon = false;
      is_dialogue_box = false;
      is_alma = false;
    }

    if (scene_pic == cfk_street_scene && ((char_x_pos >= 166 && char_x_pos <= 280) && char_y_pos <= 300)){
      is_cfk_street_scene = false;
      is_cfk_scene = true;
      scene_pic = cfk_scene;
      current_room = cfk_scene;
      char_x_pos = 250;
      char_y_pos = 250;

      is_alma_icon = false;
      is_dialogue_box = false;
    }

    if (scene_pic == cfk_scene && (char_y_pos >= 420) ){
      scene_pic = cfk_street_scene;
      current_room = cfk_street_scene;
      char_x_pos = 160;
      char_y_pos = 310;
      is_cfk_street_scene = true;
      is_cfk_scene = false;
      is_alma_icon = false;
      is_dialogue_box = false;
      is_alma = false;
    }

    if (scene_pic == teamote_scene  && char_y_pos >= 385){
      scene_pic = teamote_street_scene;
      current_room = teamote_street_scene;
      char_x_pos = 350;
      char_y_pos = 310;
      is_teamote_scene = false;
      is_teamote_street_scene = true;
    }

    if (scene_pic == teamote_street_scene && ((char_x_pos >= 440 && char_x_pos <= 540) && char_y_pos <= 300)){
      scene_pic = teamote_scene;
      current_room = teamote_scene;
      char_x_pos = 250;
      char_y_pos = 250;
      is_teamote_street_scene = false;
      is_teamote_scene = true;
    }

    // if character is currently in moonbucks and within bounds of door, enter moonbucks street view
    if (scene_pic == moonbucks_interior_scene && (char_y_pos >= 350 && (char_x_pos <= 330 && char_x_pos >= 305))){
      scene_pic = moonbucks_street_scene;
      current_room = moonbucks_street_scene;
      char_x_pos = 358;
      char_y_pos = 332;
      is_moonbucks_interior_scene = false;
      is_moonbucks_street_scene = true;
    }

    // if character is currently in moonbucks street view and within bounds of top door, enter moonbucks
    if (scene_pic == moonbucks_street_scene && ((char_x_pos >= 300 && char_x_pos <= 415) && char_y_pos <= 315) ){
      scene_pic = moonbucks_interior_scene;
      current_room = moonbucks_interior_scene;
      char_x_pos = 323;
      char_y_pos = 345;
      is_moonbucks_interior_scene = true;
      is_moonbucks_street_scene = false;

      // immediately begin dialogue upon entering Moonbucks
      dialogueBox(moonbucks_interior_scene);
      dialogue_idx = 0;
    }

  }


  /* FUNCTIONS FOR HINTS */
  /**
   * Positions the hints in the hint view so that it fits within the canvas.
   */
  function positionHints() {
    // update position of every element in 'tab' class
    // hint_options contains a list of the elements
    for (let puzzle_num = 0; puzzle_num < hint_options.length; ++puzzle_num) {
      hint_options[puzzle_num].style.left = game_canvas.offsetLeft + "px";
      hint_options[puzzle_num].style.top = game_canvas.offsetTop + "px";
    }

    // update position of every element in 'tab_content' class (contains hint list and button)
    // hint_description contains a list of the elements
    for (let puzzle_hints = 0; puzzle_hints < hint_description.length; ++puzzle_hints) {
      hint_description[puzzle_hints].style.left = game_canvas.offsetLeft + 200 + "px"; /* 100 is the width of the tab, thus need that offset */
      hint_description[puzzle_hints].style.top = game_canvas.offsetTop + "px";
    }

    // update position of every element in 'hint_list' class
    for (let puzzle_list = 0; puzzle_list < hint_list.length; ++puzzle_list) {
      hint_list[puzzle_list].style.left = game_canvas.offsetLeft + 200 + "px"; /* 100 is the width of the tab, thus need that offset */
      hint_list[puzzle_list].style.top = game_canvas.offsetTop + 100 + "px";
    }
  }


  /**
   * Listens for a user mouse-click.
   *
   * If the user clicks within the bounds of the hint icon while on a game scene, the hint view is opened.
   */
  game_canvas.addEventListener("mousedown", e => {

    // source: https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y
    let mouse_x = e.pageX - game_canvas.offsetLeft;
    let mouse_y = e.pageY - game_canvas.offsetTop;

    // if user clicks on hint icon while in a game scene, open up hint view
    if (!is_start_scene && !is_end_scene && !is_hint_view_displayed && mouse_x >= hint_left_bound && mouse_x <= hint_right_bound &&
        mouse_y >= hint_top_bound && mouse_y <= hint_bottom_bound) {

      changeHintVisibility("visible");
      is_hint_view_displayed = true;
    }
    if (is_almaoffice_scene && is_dialogue_box && is_alma_icon) {
      dialogue_idx += 1;
    }

    if (is_cfk_scene && is_dialogue_box && is_alma_icon) {
      dialogue_idx += 1;
    }

    if (is_teamote_scene && is_dialogue_box && is_alma_icon) {
      console.log("inc teamote_scene");
      dialogue_idx += 1;
    }

    if (is_uh_scene && is_dialogue_box && is_alma_icon) {
      console.log("inc uh_scene");
      dialogue_idx += 1;
    }

    if (is_uh_scene && !is_email_iframe_view_displayed && mouse_x >= 400 && mouse_x <= 650 &&
      mouse_y >= 50 && mouse_y <= 450) {
        is_email_iframe_view_displayed = true;
        //
        changeIFrameDisplay("block", "email");
        is_uh_scene = false;
    }

    // phishing login iframe
    if (is_uh_scene && !is_login_iframe_view_displayed && mouse_x >= login_laptop_left_bound && mouse_x <= login_laptop_right_bound &&
      mouse_y >= login_laptop_top_bound && mouse_y <= login_laptop_bottom_bound) {
        is_login_iframe_view_displayed = true;
        is_uh_scene = false;

        //
        changeIFrameDisplay("block", "login");
    }

    // network puzzle 
    if ((is_moonbucks_interior_scene || is_receipt_scene || is_computer_scene || is_terminal_scene || is_winscp_scene)) {
      if (is_dialogue_box) {
        // manually syncing the dialogue - decide when dialogue box disappears (i.e. waiting for user to perform the task)
        // key mapping what we're waiting for the user to do after each index:
        // - 0: walk up to the cashier
        // - 6: log into the wifi
        // - 12: run the script that shows all the ports
        // - 13: look at script that runs a port scan
        // - 14: run the script that runs a port scan
        // - 15: log into WinSCP
        // - 21: drag the files over in WinSCP
        if (dialogue_idx === 0 || dialogue_idx === 6 || dialogue_idx === 12
            || dialogue_idx === 13 || dialogue_idx === 14 || dialogue_idx === 15
            || dialogue_idx === 21) {
          is_dialogue_box = false;
          is_alma_icon = false;
          is_char_icon = false;
          is_moonbucks_employee_icon = false;
        }

        dialogue_idx += 1;

        // change scene (happends when dialogue ends)
        if (dialogue_idx === 2) {
          scene_pic = receipt_scene;
          is_receipt_scene = true;
          is_moonbucks_interior_scene = false;
        } else if (dialogue_idx === 6) {
          scene_pic = moonbucks_interior_scene;
          is_moonbucks_interior_scene = true;
          is_receipt_scene = false;

          // manually move the cat to the table with computer
          char_x_pos = 236;
          char_y_pos = 261;
        } else if (dialogue_idx === 16) {
          scene_pic = terminal_scene;
          is_winscp_scene = true;
          is_terminal_scene = false;
        }
      }
    }


    console.log("mouse x: ", mouse_x)
    console.log("mouse y: ", mouse_y)
  });

  /**
   * Changes the visibility of hint elements to "visible" or "hidden", depending on the
   * passed in argument.
   *
   * If the argument passed is "visible", all hint elements become visible to the user; else,
   * all hint elements are hidden to the user and are not displayed on the HTML page.
   *
   * @param visibility String that represents the visibility for the hint elements; can be either
   *     "visible" or "hidden"
   */
  function changeHintVisibility(visibility) {
    // make every element in 'tab' class visible
    // hint_options contains a list of the elements
    for (let puzzle_num = 0; puzzle_num < hint_options.length; ++puzzle_num) {
      hint_options[puzzle_num].style.visibility = visibility;
    }

    // make every element in 'tab_content' class visible
    // hint_description contains a list of the elements
    for (let puzzle_hints = 0; puzzle_hints < hint_description.length; ++puzzle_hints) {
      hint_description[puzzle_hints].style.visibility = visibility;
    }

    // make every element in 'hint_list' class visible
    for (let puzzle_list = 0; puzzle_list < hint_list.length; ++puzzle_list) {
      hint_list[puzzle_list].style.visibility = visibility;
    }
  }

  function changeIFrameDisplay(display, frame) {
    if (frame == "email") {
      email_frame.style.display = display;
    }
    else if (frame == "login") {
      login_frame.style.display = display;
    }
    else if (frame == "cfk") {
      sql_frame.style.display = display;
    }

    if(display == "none") {
      game_canvas.style.display = "block";
    }
    else if(display == "block") {
      game_canvas.style.display = "none";
    }
  }


  /**
   * Displays the hints for the passed in puzzle name. Is called when a user selects the
   * tab with the passed in puzzle's name.
   *
   * Source for this function: https://www.w3schools.com/howto/howto_js_vertical_tabs.asp
   *
   * @param evt The event variable for the onclick listener
   * @param puzzle_name String representing the name of the puzzle whose tab was
   *     selected by the user
   */
  function viewHints(evt, puzzle_name) {
    let i, tabcontent, tablinks;

    // don't display any tab content for any tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // inactivate all buttons for selecting hints for puzzles
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // display and activate the tab for the hint that is selected via mouse click
    // - will show that the hints for that puzzle is selected and display the hints
    //   for that puzzle
    document.getElementById(puzzle_name).style.display = "block";
    evt.currentTarget.className += " active";
  }


  /**
   * Adds a hint to the hint list in the hint view. Is called when the user clicks
   * the "Add a Hint" button in the hint view.
   *
   * @param evt The event variable for the onclick listener
   * @param puzzle_name String representing the name of the puzzle to add a hint for
   */
  function addHintToView(evt, puzzle_name) {
    // get the hints for the puzzle and the number of hints for the puzzle
    // that are displayed
    let hints_for_puzzle = hints[puzzle_name];
    let current_hint_location = current_hint_for_puzzle[puzzle_name];

    // display a new hint if there are any
    if (current_hint_location < hints_for_puzzle.length) {
      // repeat a hint if the user hasn't followed it yet
      if ((puzzle_name === "Fridge" || puzzle_name === "Coffee") && !is_computer_unlocked) {
        current_hint_for_puzzle[puzzle_name]--;
      }

      // get the element that lists the puzzle hints
      let puzzle_hint_listing = document.getElementById(puzzle_name + "_hint_listing");

      // get the new hint and increment the counter
      let new_hint = hints[puzzle_name][current_hint_location];
      current_hint_for_puzzle[puzzle_name]++;

      // display the hint
      puzzle_hint_listing.innerHTML += "- " + new_hint + "<br><br>";

      // scroll to display newest hint
      puzzle_hint_listing.scrollTop = puzzle_hint_listing.scrollHeight;
    }

    // if all hints are displayed, disable button to add hints
    if (current_hint_for_puzzle[puzzle_name] === hints_for_puzzle.length) {
      // disable button
      let puzzle_hint_btn = document.getElementById(puzzle_name + "_btn");
      puzzle_hint_btn.style.opacity = 0.6;
      puzzle_hint_btn.style.cursor = "not-allowed";

      // change instruction displayed
      let puzzle_hint_instr = document.getElementById(puzzle_name + "_hint_instruction");
      puzzle_hint_instr.innerHTML = "All hints for this puzzle are displayed below.  To go back to the game, press ESCAPE."
    }
  }


  /* RECORD KEY DOWNS (i.e. for closing windows, hints, etc) */
  /**
   * Listens for a user key down.
   *
   * If a user presses one of the special key downs, the functionality defined for that
   * key down is executed.
   *
   * ESCAPE - closes out of zoomed in windows (including hints)
   * ENTER - submits the user input; can be a lock combination, computer password, or terminal command
   * BACKSPACE - removes a character from the user input
   */
  document.addEventListener('keydown', logKey);
  osint_frame.contentWindow.addEventListener("keydown", logKey);
  sql_frame.contentWindow.addEventListener("keydown", logKey);
  email_frame.contentWindow.addEventListener("keydown", logKey);
  login_frame.contentWindow.addEventListener("keydown", logKey);
  function logKey(key) {

    if (key.code === "Escape") {
      key.preventDefault();

      if (is_hint_view_displayed) {
        // close out hint view
        changeHintVisibility("hidden");
        is_hint_view_displayed = false;
      } else {
        if (is_whiteboard_scene) {
          // zoom out of whiteboard
          scene_pic = current_room;

          // need the following to prevent the character from triggering the zoom in again
          moveOutOfDetectionZone(whiteboard_left_bound, whiteboard_right_bound, whiteboard_bottom_bound, whiteboard_top_bound);

          // update values
          is_whiteboard_scene = false;
          if (current_room === bedroom_scene) {
            is_bedroom_scene = true;
          }
        }
        if (is_cfk_laptop_scene) {
          console.log("try to escape");
          is_cfk_laptop_scene = false;
          is_cfk_scene = true;
          current_room = cfk_scene;
          scene_pic = cfk_scene;
          moveOutOfDetectionZone(cfk_laptop_left_bound, cfk_laptop_right_bound, cfk_laptop_bottom_bound, cfk_laptop_top_bound);
          // closeSQL();
          changeIFrameDisplay("none", "cfk");
        }
        
        if (is_osint_computer_scene) {
          closeComputer();
          is_osint_computer_scene = false;
          is_pizza_scene = true;
          scene_pic = pizza_scene;
        }
        if (is_email_iframe_view_displayed) {
          changeIFrameDisplay("none", "email");
          is_email_iframe_view_displayed = false;
          is_uh_scene = true;
          // current_room = uh_scene;
        }
        else if (is_login_iframe_view_displayed) {
          changeIFrameDisplay("none", "login");
          is_login_iframe_view_displayed = false;
          is_uh_scene = true;
          // current_room = uh_scene;
        }
        else if (is_uh_scene) {
          // zoom out of terminal
          scene_pic = current_room;
          console.log("here");
          // move out of the zone that triggered zoom in
          moveOutOfDetectionZone(table_left_bound, table_right_bound, table_bottom_bound, table_top_bound);

          // update values
          is_uh_scene = false;
          if (current_room == teamote_scene) {
            is_teamote_scene = true;
          }
        }
        if (is_computer_scene) {  
          // zoom out of computer
          scene_pic = current_room;

          // move out of the zone that triggered zoom in
          moveOutOfDetectionZone(computer_left_bound, computer_right_bound, computer_bottom_bound, computer_top_bound);

          // update values of the game scene
          is_computer_scene = false;
          if (current_room === moonbucks_interior_scene) {
            is_moonbucks_interior_scene = true;
          }

          // clear text
          wifi_password_string = " ";
          if (is_password_incorrect_message_visible) {
            is_password_incorrect_message_visible = false;
          }
        }

        if (is_terminal_scene) {
          // zoom out of terminal
          scene_pic = current_room;

          // move out of the zone that triggered zoom in
          moveOutOfDetectionZone(computer_left_bound, computer_right_bound, computer_bottom_bound, computer_top_bound);

          // update values
          is_terminal_scene = false;
          if (current_room === moonbucks_interior_scene) {
            is_moonbucks_interior_scene = true;
          }

          // reset terminal
          resetTerminal();
        }  // closing terminal conditional

        if (is_winscp_scene) {
          console.log("ESCAPE winscp!")
          // zoom out of terminal
          scene_pic = current_room;

          // move out of the zone that triggered zoom in
          moveOutOfDetectionZone(computer_left_bound, computer_right_bound, computer_bottom_bound, computer_top_bound);

          // update values
          is_winscp_scene = false;
          if (current_room === moonbucks_interior_scene) {
            console.log("back to moonbucks!")
            is_moonbucks_interior_scene = true;
          }
        }  // closing winscp conditional

      }  // closing conditional that checks if hints are displayed

    }  // closing the escape key conditional

    if (key.code === "Backspace") {

      if (is_combo_lock_scene) {
        if (is_lock_combo_incorrect_message_visible) {
          is_lock_combo_incorrect_message_visible = false;
        }

        if (lock_combo_string.length > 0) {
          // user only needs to delete the numbers they inputted, not the spaces
          if (lock_combo_string[lock_combo_string.length - 1] == " ") {
            lock_combo_string = lock_combo_string.substring(0, lock_combo_string.length - 1);
          }

          // delete a character
          lock_combo_string = lock_combo_string.substring(0, lock_combo_string.length - 1);
        }

        // play sound effect
        lock_sound.play();
      }  // closing lock scene conditional

      if (is_computer_scene) {
        if (is_password_incorrect_message_visible) {
          is_password_incorrect_message_visible = false;
        }

        if (wifi_password_string.length <= 1) {
          // keep the blank space
          wifi_password_string = " ";
        } else {
          // delete a character
          wifi_password_string = wifi_password_string.substring(0, wifi_password_string.length - 1);
        }

        // play sound effect
        computer_sound.play();
      }  // closing computer scene conditional

      if (is_terminal_scene) {
        // delete a character
        user_input = user_input.substring(0, user_input.length - 1);
      }

    }  // closing the backspace key conditional

    if (key.code === "Enter") {
      if (is_start_scene) {
        // enter game and spawn the user in the bedroom
        scene_pic = almaoffice_scene;
        current_room = almaoffice_scene;
        is_start_scene = false;
        is_almaoffice_scene = true;

        // play bgm
        bgm.play();
      }
    }
    else if (is_terminal_scene) {

      // execute user input and display the output into terminal
      let terminal_output = executeUserInput();
      displayTerminalOutput(terminal_output);

      // remove cursor from current line, so it'll only be displayed on the next line
      // source: https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild
      let current_divider = document.getElementById("input" + num_inputs);
      current_divider.removeChild(current_divider.lastChild);

      // create new divider to hold next line of user input
      // source1: https://www.encodedna.com/javascript/append-or-add-text-to-div-using-javascript.htm
      // source2: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
      let new_divider = document.createElement("div");
      ++num_inputs;
      new_divider.id = "input" + num_inputs;

      // display current directory for new line
      let directory_display = getFullDirectory()
      let text = document.createTextNode(directory_display);
      new_divider.appendChild(text);
      
      game_terminal.append(new_divider);
      game_terminal.scrollTop = game_terminal.scrollHeight;  // scroll down to show the newly added element/line

      // reset user input text
      user_input = "";
      terminal_archive.push(user_input);
      input_number = num_inputs;

    } else {
      checkPasswordCorrectness();
    }

    // check for key downs for alphanumeric characters
    updateUserInput(key);

  }  // closing log key function


  /**
   * Moves the character out of the area that would trigger the zoom in again. Is called
   * when trying to zoom out of a zoomed in image.
   *
   * @param left_bound The left bound of the trigger area for the zoomed in item
   * @param right_bound The right bound of the trigger area for the zoomed in item
   * @param bottom_bound The bottom bound of the trigger area for the zoomed in item
   * @param top_bound The top bound of the trigger area for the zoomed in item
   */
  function moveOutOfDetectionZone(left_bound, right_bound, bottom_bound, top_bound) {
    // the following conditionals essentially check which direction the character
    // approached the item that caused it to zoom in; these checks will require
    // the user to only press 'ESCAPE' once when they want to close the window

    if (char_y_pos <= bottom_bound && char_y_pos + char_speed > bottom_bound) {
      // came from bottom
      char_y_pos += char_speed;
    } else if (char_x_pos >= left_bound && char_x_pos - char_speed < left_bound) {
      // came from left
      char_x_pos -= char_speed;
    } else if (char_x_pos <= right_bound && char_x_pos + char_speed > right_bound) {
      // came from right
      char_x_pos += char_speed;
    } else if (char_y_pos >= top_bound && char_y_pos - char_speed < top_bound) {
      // came from top
      char_y_pos -= char_speed;
    }
  }


  /**
   * Resets the game terminal into its original state (empty in root directory) by
   * clearing the terminal history and text.
   */
  function resetTerminal() {
    // reset terminal history
    current_directory = "~";
    directory_archive = ["~"];
    terminal_archive = [""];
    user_input = "";
    currently_in_executable = false;

    // remove text from terminal display - https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
    while (num_inputs > 0) {
      let terminal_line = document.getElementById("input" + num_inputs);
      game_terminal.removeChild(terminal_line);

      let output_line = document.getElementById("output" + (num_inputs - 1));
      game_terminal.removeChild(output_line);

      --num_inputs;
    }
    input_number = num_inputs;
  }


  /* FUNCTIONS FOR PUZZLES */
  /**
   * Updates the user input for combo lock, computer password, and terminal puzzles. Is
   * only updated when the keys the user presses are part of the allowed keys for that puzzle.
   *
   * @param key The keyboard key the user presses.
   */
  function updateUserInput(key) {

    if (key.code === "Space") {
      key.preventDefault();
    }

    if (is_combo_lock_scene) {
      // check if the key pressed is allowed and if the input has reached its max length
      if (allowed_combo_keys.includes(key.which) && lock_combo_string.length < 9) {
        // play sound effect of lock moving
        lock_sound.play();

        // remove incorrect message text
        if (is_lock_combo_incorrect_message_visible) {
          is_lock_combo_incorrect_message_visible = false;
        }

        // automatically add spaces between numbers for user
        if ((lock_combo_string.length) % 3 == 0) {
          lock_combo_string += " ";
        }

        // add user input
        lock_combo_string += String.fromCharCode(key.which);
      }
    }  // closing lock conditional

    if (is_computer_scene) {
      // check if the key pressed is allowed and if the input has reached its max length
      if (allowed_wifi_character.includes(key.which) && wifi_password_string.length < 18) {
        // play sound effect of typing keys
        computer_sound.play()

        // remove incorrect message text
        if (is_password_incorrect_message_visible) {
          is_password_incorrect_message_visible = false;
        }

        // add user input
        wifi_password_string += String.fromCharCode(key.which);
      }    
    }  // closing computer password conditional

    if (is_terminal_scene) {

      if (key.key === "Shift" ||
          key.key === "Alt" ||
          key.key === "Meta" ||
          key.key === "Control" ||
          key.key === "Backspace" ||
          key.key === "Enter" ||
          key.key === "ArrowRight" ||
          key.key === "ArrowLeft" ||
          key.key === "Escape" ||
          key.key === "CapsLock") {
        // do nothing
      } else if (key.key === "ArrowUp") {
        // display previous terminal command from current command
        if (input_number - 1 >= 0) {
          user_input = terminal_archive[input_number - 1];
          --input_number;
        }
      } else if (key.key === "ArrowDown") {
        // display next terminal command from current command
        if (input_number + 1 <= num_inputs) {
          user_input = terminal_archive[input_number + 1];
          ++input_number;
        }
      } else if (key.key === "Tab") {
        // prevent default behavior
        key.preventDefault();

        // autocomplete the current command the user has inputted, if possible
        autocompleteInput();
      } else {
        // add to user input and store it
        user_input += key.key;
        terminal_archive[num_inputs] = user_input;

        // make new command typed out the most recent command (used
        // for arrowup and arrowdown keys for viewing terminal archive)
        input_number = num_inputs;
      }

    }  // closing terminal conditional

  }  // closing updateUserInput() function


  /**
   * Checks if the password submitted by the user is correct for both the combo lock and
   * computer puzzles.
   */
  function checkPasswordCorrectness() {

    if (!is_lock_unlocked && is_combo_lock_scene) {
      if (lock_combo_string === " 86 37 49") {  // correct combo

        // zoom out of cabinet
        scene_pic = current_room;
        is_kitchen_scene = true;

        moveOutOfDetectionZone(combo_lock_left_bound, combo_lock_right_bound, combo_lock_bottom_bound, combo_lock_top_bound);

        if (scene_pic === kitchen_scene) {
          is_combo_lock_scene = false;
        }

        // update status of puzzle
        is_lock_unlocked = true;
        document.getElementById("makeToast").innerHTML = " &#10004 Make Toast &#127838";

        // play sound effects
        lock_open_sound.play();
        toaster_pop_sound.play();

      } else {  // incorrect combo
        is_lock_combo_incorrect_message_visible = true;

        // play sound effects
        lock_fail_sound.play();
      }
    }  // closing lock conditional

    if (!is_computer_unlocked && is_computer_scene) {
      
      if (wifi_password_string === " ALMAMATER1867") {  // correct password

        // show terminal
        scene_pic = terminal_scene;
        is_terminal_scene = true;
        is_computer_scene = false;

        // update status of computer => unlocked
        has_logged_into_wifi = true;
        document.getElementById("unlockComputer").innerHTML = " &#10004 Unlock the Computer &#128187";

        // display dialogue box
        dialogueBox(moonbucks_interior_scene);
      
      } else {  // incorrect password
        if (!is_password_incorrect_message_visible) {
          is_password_incorrect_message_visible = true;
        }
      }

    }  // closing computer password conditional

  }  // closing check password correctness function


  /**
   * Displays the text the user types in the combination lock text box, computer password text box,
   * and computer terminal.
   */
  function displayUserInput() {
    if (is_combo_lock_scene) {
      game_context.font = "25px Comic Sans MS";
      game_context.fillStyle = "black";
      game_context.fillText(lock_combo_string, 290, 443);
    }

    if (is_computer_scene) {
      game_context.font = "25px Comic Sans MS";
      game_context.fillStyle = "black";
      game_context.fillText(wifi_password_string, 144, 270);
    }

    if (is_terminal_scene) {
      // source: https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild

      // create the replacement elements
      let replacement_divider = document.createElement("div");
      let directory_display = getFullDirectory();
      let replacement_text = document.createTextNode(directory_display + user_input);
      // source for cursor block: https://www.w3schools.com/charsets/ref_utf_block.asp
      let cursor = document.createTextNode("\u258A");
      replacement_divider.appendChild(replacement_text);
      replacement_divider.appendChild(cursor);

      // retrieve the element to replace
      let divider_to_replace = document.getElementById("input" + num_inputs);

      // rename dividers so new divider will have original divider name (for consistency)
      divider_to_replace.id = "old" + num_inputs;
      replacement_divider.id = "input" + num_inputs;

      // replace current input line with updated user input
      game_terminal.replaceChild(replacement_divider, divider_to_replace);
    }
  }


  /**
   * Displays a message saying the user input submitted is not correct. Is used for
   * the combo lock and computer password puzzles.
   */
  function displayIncorrectMessage() {

    // check to see if the input the user submitted was marked as incorrect
    if (is_lock_combo_incorrect_message_visible) {
      game_context.font = "25px Comic Sans MS";
      game_context.fillStyle = "red";
      // position the error message below the input box
      game_context.fillText("Combo incorrect. Please try again.", 150, 480);
    }

    // check to see if the input the user submitted was marked as incorrect
    if (is_password_incorrect_message_visible) {
      game_context.font = "25px Comic Sans MS";
      game_context.fillStyle = "red";
      // position the error message below the input box
      game_context.fillText("Password incorrect. Please try again.", 130, 350);
    }

  }


  /**
   * Displays the hint for the combo lock problem. Is only shown when the combo lock
   * scene is being displayed.
   */
  function displayComboLockHint() {
    if (is_combo_lock_scene) {
      game_context.font = "30px courier";
      game_context.fillStyle = "black";
      game_context.fillText("56 25 31", 10, 30);
    }
  }

  function displayMoonbucksDialogue() {
    console.log("printing moonbucks dialogue: " + dialogue_idx);
    
    if (is_dialogue_box) {
      if (current_room == moonbucks_interior_scene && (is_moonbucks_interior_scene || is_receipt_scene || is_computer_scene || is_terminal_scene || is_winscp_scene) && dialogue_idx < dialogue["Moonbucks"].length) {
        // display icons - changing the icons of who is speaking
        if (dialogue_idx === 1 ) {
          is_alma_icon = false;
          is_char_icon = true;
          is_moonbucks_employee_icon = false;
        } else if (dialogue_idx === 2 || dialogue_idx === 5) {
          is_alma_icon = false;
          is_char_icon = false;
          is_moonbucks_employee_icon = true;
        } else {
          is_alma_icon = true;
          is_char_icon = false;
          is_moonbucks_employee_icon = false;
        }

        // display text
        game_context.font = "20px courier";
        game_context.fillStyle = "white";

        let dialogue_text = dialogue["Moonbucks"][dialogue_idx];

        for (let i=0; i<dialogue_text.length; ++i) {
          game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
        }
      } else {
        is_dialogue_box = false;
        is_alma_icon = false;
        is_char_icon = false;
        is_moonbucks_employee_icon = false;
      }
    }
  }

  function displayDialogue(room) {  // room needs to be a string
    if (scene_pic == almaoffice_scene && is_dialogue_box && is_alma_icon && dialogue_idx < dialogue["Office"].length) {
      console.log("alma dialogue idx ", dialogue_idx);
      game_context.font = "20px courier";
      game_context.fillStyle = "white";

      let dialogue_text = dialogue["Office"][dialogue_idx];

      for (let i=0; i<dialogue_text.length; ++i) {
        game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
      }
    } else if (scene_pic == cfk_scene && is_dialogue_box && is_alma_icon && dialogue_idx <= dialogue["CFK"].length) {
      game_context.font = "20px courier";
      game_context.fillStyle = "white";

      if (!finished_cfk) {
        let dialogue_text = dialogue["CFK"][0];

        for (let i=0; i<dialogue_text.length; ++i) {
          game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
        }
      } else {
        let dialogue_text = dialogue["CFK"][1];

        for (let i=0; i<dialogue_text.length; ++i) {
          game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
        }
      }
    } else if (scene_pic == pizza_scene && is_dialogue_box && is_alma_icon && dialogue_idx <= dialogue["OSINT"].length) {
      game_context.font = "20px courier";
      game_context.fillStyle = "white";

      if (!finished_osint) {
        let dialogue_text = dialogue["OSINT"][0];

        for (let i=0; i<dialogue_text.length; ++i) {
          game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
        }
      } else {
        let dialogue_text = dialogue["OSINT"][1];

        for (let i=0; i<dialogue_text.length; ++i) {
          game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
        }
      }
    }
    else if (login_solved && (scene_pic == teamote_scene || scene_pic == is_uh_scene) && 
             is_dialogue_box && is_alma_icon) {
      if (login_solved) {
        let dialogue_text = dialogue["Phishing-Solved"][0];
        for (let i=0; i<dialogue_text.length; ++i) {
          game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
        }
      }
    }
    else if (scene_pic == teamote_scene && is_dialogue_box && is_alma_icon) {
      game_context.font = "20px courier";
      game_context.fillStyle = "white";

      console.log("teamote dialogue idx ", dialogue_idx);

      dialogue_idx = dialogue_idx % dialogue["CoffeeEmoticon"].length;

      let dialogue_text = dialogue["CoffeeEmoticon"][dialogue_idx];

      for (let i=0; i<dialogue_text.length; ++i) {
        game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
      }
    } else if (scene_pic == uh_scene && is_dialogue_box && is_alma_icon) {
      game_context.font = "20px courier";
      game_context.fillStyle = "white";
      
      dialogue_idx = dialogue_idx % dialogue["CoffeeEmoticon-Laptop"].length;

      let dialogue_text = dialogue["CoffeeEmoticon-Laptop"][dialogue_idx];

      for (let i=0; i<dialogue_text.length; ++i) {
        game_context.fillText(dialogue_text[i], 10, 420 + 25*i);
      }
    } else {
      is_dialogue_box = false;
      is_alma_icon = false;
    }
  }


  /* FUNCTIONS FOR TERMINAL PUZZLES */
  /**
   * Autocompletes the user input. Is called when the user presses the TAB key.
   * Only available when changing directory (cd) to a valid subdirectory or running
   * an executable that exists in the directory. Also available when listing out
   * the contents of a valid subdirectory.
   *
   * For the 'cd' and 'ls' commmands, the user does not need to begin writing out the
   * subdirectory name if there's only one subdirectory. For running an executable, the
   * user needs to begin writing out the executable name.
   */
   function autocompleteInput() {
    // retrieve user-inputted command
    let command_to_process = [];
    if (user_input.trim() != "") {
      command_to_process = user_input.split(" ");
    }

    // retrieve directories and executables of current dir
    subdirectories = directory[current_directory]["directories"];
    executables_in_current = directory[current_directory]["executables"];

    if (command_to_process.length === 2) {  // can be ls or cd a directory
      if (command_to_process[0] === "cd" || command_to_process[0] === "ls") {
        // get work-in-progress directory name (i.e. what the user has typed out in the place of a dir)
        let possible_dir = command_to_process[1];

        // check if the work-in-progress directory is an actual subdirectory; if so, autocomplete
        // the user input to that directory
        for (let s = 0; s < subdirectories.length; ++s) {
          if (subdirectories[s].slice(0, possible_dir.length) === possible_dir) {
            // autocomplete directory name for user command
            user_input = command_to_process[0] + " " + subdirectories[s];
          }
        }
      } else if (command_to_process[0] === "python" || command_to_process[0] === "cat") {
        // get work-in-progress filename (i.e. what the user has typed out in the place of a file)
        let possible_file = command_to_process[1];

        // check if the work-in-progress filename is an actual file; if so, autocomplete
        // the user input to that file
        for (let e = 0; e < executables_in_current.length; ++e) {
          if (executables_in_current[e].slice(0, possible_file.length) === possible_file) {
            // autocomplete executable name for user command
            user_input = command_to_process[0] + " " + executables_in_current[e];
          }
        }
      }
    } else if (command_to_process.length === 1) {
      if (command_to_process[0].length > 2 && command_to_process[0].slice(0, 2) === "./") {
        // get work-in-progress executable name
        let possible_exe = command_to_process[0].slice(2, command_to_process[0].length);

        // check if the work-in-progress executable name is an actual executable; if so, autocomplete
        // the user input to that executable
        for (let e = 0; e < executables_in_current.length; ++e) {
          if (executables_in_current[e].slice(0, possible_exe.length) === possible_exe) {
            // autocomplete executable name for user command
            user_input = "./" + executables_in_current[e];
          }
        }
      }
    }
  }


 /**
   * Executes the input the user submits in terminal and outputs corresponding messages based
   * on the input the user submits. Is called after the user submits their input by pressing
   * the ENTER key.
   *
   * @return String representing the output message for the submitted user input in terminal
   */
  function executeUserInput() {
    // split the user input to process it easier
    let command_to_process = [];
    user_input = user_input.trim();
    if (user_input != "") {
      command_to_process = user_input.split(" ");
    }
    let output_text = "";

    // update variables that store the contents of the current directory
    subdirectories = directory[current_directory]["directories"];
    executables_in_current = directory[current_directory]["executables"];

    // check commands
    if (command_to_process.length != 0) {  // only check commands if command exists

      if (currently_in_executable) {  // execute executable
        output_text = executeExecutable(command_to_process);
      } else if (command_to_process[0] === "cd") {
        output_text = executeCdCommand(command_to_process);
      } else if ((command_to_process.length === 1 || command_to_process.length === 2)
          && command_to_process[0].toLowerCase() == "ls") {  // "ls" or "ls" + valid_subdir_name
        output_text = executeLsCommand(command_to_process);
      } else if (command_to_process[0].slice(0, 2) === "./") {

        // check if given executable is in the current directory
        if (checkExecutableExistence(command_to_process[0].slice(2))) {
          // enter executable
          currently_in_executable = true;
          curr_executable_name = command_to_process[0].slice(2);
          output_text = getExecutableWelcomeMessage();
        } else {
          output_text = "Error: specified executable does not exist.";
        }

      } else if (command_to_process.length === 1 && command_to_process[0].toLowerCase() === "exit") {
        output_text = "Error: nothing to exit from.";
      } else if (command_to_process.length === 2 && command_to_process[0].toLowerCase() === "python") {
        
        if (command_to_process[1].toLowerCase() === "show_ports.py") {
          display_ports = true;
          // output_text = "All Ports Shown";

          has_ran_show_ports = true;
          dialogue_idx = 13;  // hardcode to this dialogue
          dialogueBox(moonbucks_interior_scene);
        } else if (command_to_process[1].toLowerCase() === "scan_ports.py") {
          display_port_scan_output = true;
          // output_text = "Port Scan Complete";

          has_ran_show_ports = true;
          has_viewed_port_scan = true;
          has_ran_port_scan = true;

          // temporarily end of puzzle
          finished_network = true;
          dialogue_idx = 15;  // hardcode to this dialogue
          dialogueBox(moonbucks_interior_scene);
        } else {
          output_text = "Error: file does not exist.";
        }

      } else if (command_to_process.length === 2 && command_to_process[0].toLowerCase() === "cat") {
        
        if (command_to_process[1].toLowerCase() === "scan_ports.py") {
          display_port_scan_code = true;
          // output_text = "-- End of File --";

          has_ran_show_ports = true;
          has_viewed_port_scan = true;
          dialogue_idx = 14;  // hardcode to this dialogue
          dialogueBox(moonbucks_interior_scene);
        } else {
          output_text = "Error: file does not exist.";
        }

      } else {
        output_text = "Error: Invalid Command";
      }

    }

    return output_text;
  }


    /**
   * Executes the terminal change directory ('cd') command. Is able to execute the following
   * 'cd' commands:
   * - "cd" -- move into home directory
   * - "cd ../" -- move into previous directory
   * - "cd" + valid_subdirectory -- move into a subdirectory
   *
   * @return String representing the output message for the submitted user input in terminal;
   *     if inputted 'cd' command is valid, outputs an empty string; else, outputs an error message
   */
     function executeCdCommand(command_to_process) {
      let output_text = "";
  
      if (command_to_process.length === 1) {  // "cd"
  
        // move to home directory if not already in it
        if (current_directory != "~") {
          current_directory = "~";
          directory_archive = ["~"];
        }
  
      } else if (command_to_process.length === 2) {  // "cd" + other command
  
        if (command_to_process[1] == "../") {  // "cd ../"
          if (current_directory != "~" && directory_archive.length != 1) {
            // move to parent/previous directory
            directory_archive.pop();
            current_directory = directory_archive[directory_archive.length - 1];
          }
        } else {  // check if it's a valid directory (i.e. if the user wants to move into a directory)
          let valid_directory = false;
  
          for (let s = 0; s < subdirectories.length; ++s) {
            if (subdirectories[s] === command_to_process[1]) {
              // change directory and save into archive
              current_directory = subdirectories[s];
              directory_archive.push(current_directory);
              valid_directory = true;
              break;
            }
          }
  
          if (!valid_directory) {
            output_text = "Error: specified directory not found.";
          }
        }
  
      } else {
        output_text = "Error: Invalid Command";
      }
  
      return output_text;
    }
  
  
    /**
     * Executes the terminal list directory command ('ls'). Is able to execute the following
     * 'ls' commands:
     * - "ls" -- lists the contents of the current directory
     * - "ls" + valid_subdirectory -- lists the contents of the specified directory
     * 
     * @return String representing the output message for the submitted user input in terminal;
     *     if inputted 'ls' command is valid, outputs a list of the directory's contents
     */
    function executeLsCommand(command_to_process) {
      executing_ls_command = true;
      
      let output_text = "";
  
      if (command_to_process.length === 1) {  // "ls"
        // display subdirectories and executables in current directory
        for (let i = 0; i < subdirectories.length; ++i) {
          output_text += subdirectories[i] + " ";
        }
  
        for (let j = 0; j < executables_in_current.length; ++j) {
          output_text += executables_in_current[j] + " ";
        }
      } else {  // "ls" + valid_subdir_name
        let dir = command_to_process[1];
  
        // check if the given directory is a valid subdirectory
        let is_subdirectory = false;
        for (let d = 0; d < subdirectories.length; ++d) {
          if (dir === subdirectories[d]) {
            is_subdirectory = true;
          }
        }
  
        // list out contents in the specified directory
        if (is_subdirectory) {
          let dir_contents = directory[dir];
  
          for (let i = 0; i < dir_contents["directories"].length; ++i) {
            output_text += dir_contents["directories"][i] + " ";
          }
  
          for (let j = 0; j < dir_contents["executables"].length; ++j) {
            output_text += dir_contents["executables"][j] + " ";
          }
        } else {
          output_text = "Error: specified directory not found.";
        }
      }
  
      return output_text;
    }
  
  
    /**
     * Colors the content names (i.e. subdirectories, executables) in a directory; is used for
     * the ls command.
     * 
     * @param output_text String containing the contents of a directory (output of the ls command)
     * @param output_divider HTML div that will hold the output of the ls command (i.e. the list
     *     of contents in the directory)
     */
     function colorDirectoryExecutable(output_text, output_divider) {
      let directory_contents = [];
  
      // split the output of contents of the directory - after ls command is executed
      output_text = output_text.trim();
      if (output_text != "") {
        directory_contents = output_text.split(" ");
      }
  
      // create span for coloring text and append to the output divider based on class
      for (let index = 0; index < directory_contents.length; ++index) {
  
        // source to create the span element: https://stackoverflow.com/questions/5802663/create-a-span-element-inside-another-element-using-javascript
        let ls_span = document.createElement("span");
        let check_exe_file = directory_contents[index].slice(-4);
  
        // color the text based on class - directory and executable
        if (check_exe_file === ".exe") {
          ls_span.className = "executable_file";
        } else {
          ls_span.className = "subdirectory";
        }
  
        // append to the divider after setting the colors
        ls_span.innerHTML = directory_contents[index] + " ";
        output_divider.appendChild(ls_span);
      }
    }
  
  
    /**
     * Executes the executable based on the user input command; only occurs when within an executable.
     * 
     * @param command_to_process An array containing the user input while in the executable
     * @return String representing the output message for the submitted user input in executable
     */
    function executeExecutable(command_to_process) {
      let output_text = "";
  
      if (command_to_process.length === 1 && command_to_process[0] === "exit") {
        currently_in_executable = false;
        current_coffee_state = "";
        output_text = "Exiting current executable.";
      } else {
        // redirect to the specific executable
        if (curr_executable_name === "lineDolphin.exe") {
          output_text = executeLineDolphinExecutable(command_to_process);
        } else if (curr_executable_name === "coffeeRequestSender.exe") {
          output_text = executeCoffeeRequestExecutable(command_to_process);
        } else if (curr_executable_name === "fridgeLoginPortal.exe") {
          output_text = executeFridgeLoginExecutable(command_to_process);
        }
      }
  
      return output_text;
    }


  /**
   * Executes the executable based on the user input command; only occurs if within the lineDolphin
   * executable.
   *
   * @param command_to_process An array containing the user input while in the executable
   * @return String representing the output message for the submitted user input in lineDolphin executable;
   *     if user input is invalid, outputs an error message
   */
  function executeLineDolphinExecutable(command_to_process) {
    let output_text = "";

    if (command_to_process.length === 1 && command_to_process[0].toLowerCase() === "capture") {
      display_coffee_text = true;

      output_text = "STATUS: OK, READY TO BREW";
    } else {
      output_text = "Error: Invalid Command";
    }

    return output_text;
  }


  /**
   * Determines what instruction text to output to the terminal while in the coffeeSenderRequest executable and
   * stores the responses the user inputs for the coffeeSenderRequest.
   *
   * @param command_to_process An array containing the user input while in the executable
   * @return String representing the instruction text for the user to respond to
   */
  function executeCoffeeRequestExecutable(command_to_process) {
    let output_text = "";

    if (command_to_process[0].toLowerCase() === "start" && current_coffee_state === "") {
      output_text = "What host would you like to send a request to?";
      current_coffee_state = "port";
    } else if (current_coffee_state === "port") {
      current_host_name = command_to_process[0].toLowerCase();
      output_text = "Which port number are you sending to?";
      current_coffee_state = "type";
    } else if (current_coffee_state === "type") {
      current_port_name = command_to_process[0].toLowerCase();
      output_text = "What type of request are you sending? (GET or POST)";
      current_coffee_state = "url";
    } else if (current_coffee_state === "url") {
      current_request_type = command_to_process[0].toLowerCase();
      output_text = "Which URL are you sending this request to?";
      current_coffee_state = "process";
    } else if (current_coffee_state === "process") {
      current_request_url = command_to_process[0].toLowerCase();

      // now we have all info, process and set error messages accordingly
      output_text = processCoffeeRequest();

      // reset coffee state
      current_coffee_state = "";
    } else {
      output_text = "Error: invalid command.";
      current_coffee_state = "";
    }

    return output_text;
  }


  /**
   * Verifies if the user's request for the coffeeRequestSender executable is valid and outputs
   * the corresponding message status or error.
   *
   * @return String representing the corresponding message status or error to the user's input
   */
  // function processCoffeeRequest() {
  //   let output_text = "";

  //   if (current_host_name != "mycyba") {
  //     output_text = "Error: could not reach specified host.";
  //   } else if (current_port_name != "5000") {
  //     output_text = "Error: host is reachable, but port number is incorrect.";
  //   } else if (current_request_type != "get") {
  //     output_text = "Error: not the expected request type.";
  //   } else if (current_request_url === "mycyba/brewer/brew") {
  //     output_text = "STATUS: BREW REQUEST RECEIVED. WILL PROCEED TO FULFILL REQUEST.";

  //     // update puzzle status
  //     is_coffee_brewed = true;
  //     document.getElementById("makeCoffee").innerHTML = " &#10004 CFK &#9749";

  //     // play sound effect
  //     coffee_pour_sound.play();

  //   } else if (current_request_url === "mycyba/brewer/status") {
  //     output_text = "STATUS: OK, READY TO BREW";
  //   } else {
  //     output_text = "Error: valid request, but invalid URL.";
  //   }

  //   return output_text;
  // }


  /**
   * Executes the fridgeLogin executable. Valid commands for this executable include the following:
   * - "stock" -- displays the fridge contents
   * - "lock" -- locks the fridge
   * - "unlock" -- unlocks the fridge
   *
   * @param command_to_process An array containing the user input while in the executable
   * @return String describing whether the command was executed or, if invalid, an error message
   */
  function executeFridgeLoginExecutable(command_to_process) {
    let output_text = "";

    if (command_to_process.length === 1 && command_to_process[0] === "stock") {
      // display fridge contents
      output_text = "Current fridge contents: 1x baking soda. 6x bell pepper. 3x Golden Harbor Soup Dumplings. 1x half and half. 34x chicken eggs. 10x quail eggs.";

    } else if (command_to_process.length === 1 && command_to_process[0] === "lock") {
      // check if fridge is locked
      if (!is_fridge_unlocked) {
        output_text = "Fridge is already locked!";
      } else {
        // if fridge isn't locked, lock it
        output_text = "Fridge locked!";
        is_fridge_unlocked = false;

        // play sound effect of lock closing
        lock_fail_sound.play();
      }

    } else if (command_to_process.length === 1 && command_to_process[0] === "unlock") {
      // check if fridge is locked
      if (!is_fridge_unlocked) {
        output_text = "Fridge unlocked!";

        // update puzzle status
        is_fridge_unlocked = true;
        document.getElementById("openFridge").innerHTML = " &#10004 Open the Fridge &#127859";

        // play sound effect of lock opening
        lock_open_sound.play()
      } else {
        output_text = "Fridge is already unlocked!";
      }

    } else {
      // all other commands are invalid
      output_text = "Error: Invalid Command";
    }

    return output_text;
  }


  /**
   * Checks if the passed in executable exists in the current directory.
   *
   * @param executable_name String representing the name of the executable to check
   *     existence for
   * @return Boolean representing whether the passed in executable exists
   */
  function checkExecutableExistence(executable_name) {
    for (let i = 0; i < executables_in_current.length; ++i) {
      if (executable_name === executables_in_current[i]) {
        return true;
      }
    }

    return false;
  }


  /**
   * Returns the messages that display upon opening a valid executable (i.e. the welcome message).
   * Contains the welcome messages for the following executables:
   * - lineDolphin
   * - coffeeRequestSender
   * - fridgeLoginPortal
   */
  function getExecutableWelcomeMessage() {
    if (curr_executable_name === "lineDolphin.exe") {
      return "Welcome to lineDolphin! Default configuration: display CyberCoffee traffic.";
    } else if (curr_executable_name === "coffeeRequestSender.exe") {
      return "Welcome to the coffee request portal! Here, one can send requests to the CYBA coffee brewer.";
    } else if (curr_executable_name === "fridgeLoginPortal.exe") {
      //return "Welcome to your smart fridge portal! Your username is GreenStreet. However, to access fridge features, you must authenticate yourself.";
      return "Welcome to your smart fridge control portal!";
    }
  }

  function displayTextOutput(output_divider, should_show, array_of_text) {
    if (should_show) {
      // output coffee brew message, if necessary
      for (let i=0; i < array_of_text.length; ++i) {
        let line_of_text = document.createTextNode(array_of_text[i]);
        output_divider.appendChild(line_of_text);
        output_divider.appendChild(document.createElement("br"))
      }
    }
  }

   /**
   * Displays output message for a terminal command in the game scene view.
   */
    function displayTerminalOutput(output_text) {
      // create divider to store output
      let output_divider = document.createElement("div");
      output_divider.id = "output" + num_inputs;
  
      displayTextOutput(output_divider, display_coffee_text, coffee_text);
      display_coffee_text = false;
      displayTextOutput(output_divider, display_ports, ports);
      display_ports = false;
      displayTextOutput(output_divider, display_port_scan_code, port_scan_code);
      display_port_scan_code = false;
      displayTextOutput(output_divider, display_port_scan_output, port_scan_output);
      display_port_scan_output = false;
  
      // if currently executing a ls command, then display directories
      // and executables in respective colors and append to output_divider
      if (executing_ls_command) {
        colorDirectoryExecutable(output_text, output_divider);
        executing_ls_command = false;
      } else {  // add output text into a text node
        let text = document.createTextNode(output_text);
        output_divider.appendChild(text);
      }
  
      // add divider containing output text to terminal
      game_terminal.append(output_divider);
    }
  
  
    /**
     * Returns a string of the full directory to display in a new line in the terminal.
     * 
     * @return String representing the full directory path
     */
    function getFullDirectory() {
      let directory_string = directory_archive[0];  // "~" directory
  
      if (currently_in_executable) {
        directory_string = curr_executable_name + "> ";
      } else {
        // add in rest of directories
        for (let dir = 1; dir < directory_archive.length; ++dir) {
          directory_string += "/" + directory_archive[dir]; 
        }
        
        // signal the end of the current working directory path
        directory_string += "$ ";
      }
  
      return directory_string;
    }
  
  
    /**
     * Displays the end game scene and text and plays congratualory music to signal the game
     * completion; only occurs if user has completed all required tasks
     */
    function displayCompleteGameScene() {
      // check to see if all tasks are completed
      if (finished_cfk && finished_network && finished_osint && finished_phishing) {
        // change scene
        scene_pic = end_scene;
        current_room = end_scene;
        is_end_scene = true;
        is_cfk_scene = false;
        is_cfk_street_scene = false;
        is_pizza_scene = false;
        is_pizza_street_scene = false;
        is_teamote_scene = false;
        is_teamote_street_scene = false;
        is_terminal_scene = false;
        is_moonbucks_interior_scene = false;
        is_moonbucks_street_scene = false;
  
        // update html text to hide elements that are only to be displayed while game is ongoing
        // and display elements that are only to be displayed when game is completed
        for (let task = 0; task < ongoing_game_text.length; ++task) {
          ongoing_game_text[task].style.visibility = "hidden";
          ongoing_game_text[task].style.display = "none";
        }
  
        for (let text = 0; text < completed_game_text.length; ++text) {
          completed_game_text[text].style.visibility = "visible";
          completed_game_text[text].style.display = "block";
        }
  
        // stop the game bgm and play congrats bgm
        bgm.pause();
        congrats.play();
      }
    }

  window.addEventListener('message', (e) => {
    console.log(e.data);
    if (e.data == "phishing email solve") {
      email_solved = true;
      login_frame.contentWindow.postMessage("phishing email solve", "*");
      console.log("haha");
      if (login_solved && email_solved) {
        finished_phishing = true;
        document.getElementById("openFridge").innerHTML = " &#10004 Teamote &#129483";
      }
    }
    else if (e.data == "phishing login solve") {
      login_solved = true;
      if (login_solved && email_solved) {
        finished_phishing = true;
        document.getElementById("openFridge").innerHTML = " &#10004 Teamote &#129483";
      }
    } else if (e.data == "cfk_solve") {
      console.log("solved cfk!");
      finished_cfk = true;
      console.log("changing CFK to checkmark");
      lock_open_sound.play();
      document.getElementById("makeCoffee").innerHTML = "&#10004 CFK &#127831";
    } else if (e.data=="osint_solve") {
      console.log("finished OSINT!");
      finished_osint = true;
      lock_open_sound.play();
      document.getElementById("unlockComputer").innerHTML = " &#10004 Checkers &#127829";
    }
  });
