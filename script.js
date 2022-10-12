let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice,computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            loose(userChoice,computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

const convertName = (name) =>{
 if(name==="p"){
    return("paper");
 } if(name==='r'){
        return ("rock");
    }
    return "scissor";
}

const win = (userChoice,computerChoice) =>{
    userScore++
    userScore_span.innerHTML=userScore;
    result_div.innerHTML= ` ${convertName(userChoice)} wins from ${convertName(computerChoice)}`
}
const loose = (userChoice,computerChoice) =>{
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML= ` ${convertName(computerChoice)} wins from ${convertName(userChoice)}`
}
const draw = (userChoice,computerChoice) =>{
    result_div.innerHTML = "Tie"
}

function getComputerChoice() {
    const choices = ["p", "s", "r"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


const main = () => {
    rock_div.addEventListener("click", () => {
        game("r");
    })
    paper_div.addEventListener("click", () => {
        game("p");
    })
    scissors_div.addEventListener("click", () => {
        game("s");
    })
}
main();
