
// find the right array entry 
// 1 - get which button clicked 
// 2 - decide based on that which draft to get
//   - if number == 1 then get index 0 of array
// chooses and displays the correct draft

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
    
    
}

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }