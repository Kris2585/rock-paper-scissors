var computerScore = 0;
var playerScore = 0;
var tie=0;

function playGame(playerChoice){
    var possibleChoices=["Rock", "Paper", "Scissors"];
    var choice=Math.floor(Math.random()*3);
    var computerChoice=possibleChoices[choice];
    var playerChoice=playerChoice.innerHTML;
    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice===possibleChoices[choice]){
        document.getElementById("result").innerHTML="Tie!";
        console.log("TIE");
        tie++;
    } else if (playerChoice==="Rock"){
              if (computerChoice==="Paper") {
                  document.getElementById("result").innerHTML="Paper covers Rock. You lose!";
                  console.log("Paper covers Rock. You lose!");
                  computerScore++;
              } else
              {
                  document.getElementById("result").innerHTML="Rock crushes scissors. You win!";
                  console.log("Rock crushes scissors. You win!");
                  playerScore++;
              }
    }else if (playerChoice==="Paper"){
              if (computerChoice==="Rock") {
                  document.getElementById("result").innerHTML="Paper covers Rock. You win!";
                  console.log("Paper covers Rock. You win!");
                  playerScore++;
              }else{
                document.getElementById("result").innerHTML="Scissors cut paper. You lose!";
                console.log("Scissors cut paper. You lose!");
                computerScore++;
              }
    } else if (playerChoice==="Scissors") {
              if (computerChoice==="Rock"){
                document.getElementById("result").innerHTML="Rock crushes scissors. You lose!";
                console.log("Rock crushes scissors. You lose!");
                computerScore++;
              }else{
                document.getElementById("result").innerHTML="Scissors cut paper. You win!";
                console.log("Scissors cut paper. You win!");
                playerScore++;
              }
    }
    document.getElementById("score").innerHTML="Player: "+playerScore+"    Computer: "+computerScore+"    Ties: "+tie;
    }
