let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const result=document.querySelector("#msg");
const ys=document.querySelector("#ys");
const cs=document.querySelector("#cs");

let genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const indx=Math.floor(Math.random()*3);
    return options[indx];
}

const draw=()=>{
    console.log("The game was draw");
    result.innerText="The game was draw. Play again";
}


const playGame = (userchoice)  =>{
    console.log("user choice",userchoice);
    const compChoice=genCompChoice();
    console.log("computer choice",compChoice);
   // const result=document.querySelector("#msg");
    if(userchoice===compChoice)
    {
        draw();
        result.style.backgroundColor="blue";
    } else if(compChoice==="rock" && userchoice==="scissor")
    {
        console.log("You loose");
        result.innerText=`You loose! ${compChoice} beated your ${userchoice}`;
        result.style.backgroundColor="red";
        computerScore++;
        cs.innerText=computerScore;
    }else if(compChoice==="paper" && userchoice==="rock")
    {   console.log("You loose");
        result.innerText=`You loose! ${compChoice} beated your ${userchoice}`;
        result.style.backgroundColor="red";
        computerScore++;
        cs.innerText=computerScore;
    }else if(compChoice==="scissor" && userchoice==="paper")
    {
        console.log("You loose");
        result.innerText=`You loose! ${compChoice} beated your ${userchoice}`;
        result.style.backgroundColor="red";
        computerScore++;
        cs.innerText=computerScore;
    }
    else{
        console.log("You won!");
        result.innerText=`You won! your ${userchoice} beated ${compChoice}`;
        result.style.backgroundColor="green";
        userScore++;
        ys.innerText=userScore;
        
    }

    };
    
    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userchoice=choice.getAttribute("id");
            playGame(userchoice);
        });
    });


    
   

   