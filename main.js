// ===================================> Buttons <================================================
var PlayerOneButton = document.getElementById("player_one_btn")
var PlayerTwoButton = document.getElementById("player_Tow_btn")

// ===================================> Error Message <==========================================
let errorMessage = document.getElementById("player_One_error")

// ===================================> Player One <=============================================

let game;
PlayerOneButton.addEventListener("click", function(){
    let PlayerOneValue = document.getElementById("player_one_input").value

    if (PlayerOneValue < 0) {
        player_One_error.innerText = "Error Number"
    } 
    else if(PlayerOneValue > 9){
        player_One_error.innerText = "Error Number"
    }
    else if(PlayerOneValue == ""){
        player_One_error.innerText = "Give a Number"
    }
    else {
        game = PlayerOneValue;
        document.getElementById("player_One").style.display = "none";
        document.getElementById("player_Two").style.display = "block";
    }
})

// =========================================== > player Two <============================================

let totalAttemps = 3
let live = 0 

PlayerTwoButton.addEventListener("click", function(){
    let PlayerTwoValue = document.getElementById("player_Two_input").value

    live++;

    if(live === 3){
        window.location.href = "loss.html"
    }
    if(PlayerTwoValue == game){
        window.location.href = "win.html"
    }
    if(live == 1){
        document.getElementById("green").style.display = "none"
    }
    if(live == 2){
        document.getElementById("orange").style.display = "none"
    }
    if(live == 3){
        document.getElementById("red").style.display = "none"
    }
})

// ================$$$$$$$$$$$$$$$$==============> CODE END HERE <================$$$$$$$$$$$$$$$$==============