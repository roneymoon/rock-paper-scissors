
const winScore = 5;

// playing buttons
const rockbutton = document.querySelector(".rockbutton");
const paperbutton = document.querySelector(".paperbutton");
const scissorbutton = document.querySelector(".scissorbutton");
const tryagain = document.querySelector(".try-again-button");

// result cards
const resultcard = document.querySelector(".result-card");
const wincard = document.querySelector(".win-card");
const losecard = document.querySelector(".lose-card");
const tiecard = document.querySelector(".tie-card");

// score boxes
const computerscorebox = document.querySelector(".computer-score-box")
const userscorebox = document.querySelector(".user-score-box")

// score board values
const userscoreboard = document.querySelector(".user-score");
const compscoreboard = document.querySelector(".comp-score");

// computer move value 
const computermovevalue = document.querySelector(".computer-move-value")


function CompMove() {
    let randNo = Math.floor(Math.random() * 3) + 1;
    if (randNo == 1) {
        computermovevalue.innerHTML = "👊"
        return "rock";
    } else if (randNo == 2) {
        computermovevalue.innerHTML = "✋"
        return "paper";
    } else if (randNo == 3) {
        computermovevalue.innerHTML = "✌️"
        return "scissor";
    }
    
}

let userScore = 0;
let compScore = 0;
let playmoves = 0;

function UserWin() {
    userScore += 1;
    playmoves += 1;
    userscoreboard.innerHTML = userScore;
    // red to green
    userscorebox.classList.remove("bg-red-200")
    userscorebox.classList.remove("bg-blue-100")
    userscorebox.classList.add("bg-green-200")

    // green to blue
    computerscorebox.classList.remove("bg-green-200")
    computerscorebox.classList.remove("bg-blue-100")
    computerscorebox.classList.add("bg-red-200")
    
    console.log("user won");
}   

function CompWin() {
    compScore += 1;
    playmoves += 1;
    compscoreboard.innerHTML = compScore;
    // red to green
    computerscorebox.classList.remove("bg-red-200")
    computerscorebox.classList.remove("bg-blue-50")
    computerscorebox.classList.add("bg-green-200")

    // green to red
    userscorebox.classList.remove("bg-green-200")
    userscorebox.classList.remove("bg-blue-50");
    userscorebox.classList.add("bg-red-200")

    console.log("comp won");
}

function TieBreak() {
    playmoves += 1;
    computerscorebox.classList.remove("bg-red-200")
    computerscorebox.classList.remove("bg-green-200")
    userscorebox.classList.remove("bg-green-200")
    userscorebox.classList.remove("bg-red-200")
    userscorebox.classList.add("bg-blue-100")
    computerscorebox.classList.add("bg-blue-100")
    console.log("tie break")
}

function TotalWin() {
    if (userScore == winScore) {
        resultcard.classList.add("hidden");
        losecard.classList.add("hidden");
        wincard.classList.remove("hidden");
        tiecard.classList.add("hidden");

        
        rockbutton.disabled = true;
        paperbutton.disabled = true;
        scissorbutton.disabled = true;
        
    } else if (compScore == winScore) {
        resultcard.classList.add("hidden");
        losecard.classList.remove("hidden");
        tiecard.classList.add("hidden");
        wincard.classList.add("hidden");

        rockbutton.disabled = true;
        paperbutton.disabled = true;
        scissorbutton.disabled = true;

        
    } else if (userScore == compScore && playmoves == winScore) {
        resultcard.classList.add("hidden");
        losecard.classList.add("hidden");
        wincard.classList.add("hidden");
        tiecard.classList.remove("hidden");

        rockbutton.disabled = true;
        paperbutton.disabled = true;
        scissorbutton.disabled = true;
       
    }
    
}

function PlayMove(userMove) {
    let computerMove = CompMove();
    console.log(computerMove);

    // rock paper combination
    if (userMove == "rock" && computerMove == "paper") CompWin();
    else if (userMove == "paper" && computerMove == "rock") UserWin();

    // tie possibilities
    else if (userMove == computerMove) TieBreak();

    // paper scissor combination
    else if (userMove == "paper" && computerMove == "scissor") CompWin();
    else if (userMove == "scissor" && computerMove == "paper") UserWin();

    // rock scissor combination
    else if (userMove == "rock" && computerMove == "scissor") UserWin();
    else if (userMove == "scissor" && computerMove == "rock") CompWin();

    TotalWin();
    // console.log(move);
}

function RockMove() {
    PlayMove("rock");
}

function PaperMove() {
    PlayMove("paper");
}
function ScissorMove() {
    PlayMove("scissor");
}

rockbutton.addEventListener("click", RockMove);
paperbutton.addEventListener("click", PaperMove);
scissorbutton.addEventListener("click", ScissorMove);
tryagain.addEventListener("click", () => location.reload());     

