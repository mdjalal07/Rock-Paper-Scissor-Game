let userScore=0;
let compScore=0;

let genCompChoice = () => {
    let options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random() * 3);
    return options[idx];

}
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector(".user-score");
const compScorePara=document.querySelector(".comp-score");

let showWinner= (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you won :)");
        // msg.innerText=`you won ${userChoice} beat computer ${compChoice}`;
        msg.innerText=`you won`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lost :(");
        // msg.innerText=`you lost ${compChoice} beat your ${userChoice}`;
        msg.innerText=`You lost`;
        msg.style.backgroundColor="red";
    }
};

let playGame=(userChoice ) => {
    console.log("user choide = ",userChoice);
    let compChoice=genCompChoice();
    console.log("computer choice = ",compChoice);
    if(userChoice === compChoice){
        console.log("match Tied! chose again");
        // msg.innerText=`match tied | both chose ${compChoice}`;
        msg.innerText=`Match tied`;
        msg.style.backgroundColor="yellow";
        msg.style.color="black";

    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            //paper scissor
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            //rock scissor
            userWin = compChoice === "scissor" ? false:true; 
        }
        else{
            //rock paper
            userWin = compChoice === "rock" ? false:true;
        }


       showWinner(userWin,userChoice,compChoice);
    }

   
};
const choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        
        
        playGame(userChoice);
    });
    
});