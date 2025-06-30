let button=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let newButton=document.querySelector("#newGame");
let msgContainer=document.querySelector(".container");
let msg = document.querySelector("#msg");
let player="O";
let patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
button.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(player==="O")
        {
            box.innerText=player;
            player="X";
        }
        else{
            box.innerText=player;
            player="O";
        }
        box.disabled = true;
        winner();
    });
});

const resetAll=()=>{
    player="O";
    enableBox();
    msgContainer.classList.add("hide");
};
const disableBox=()=>{
    for(let box of button)
    {
        box.disabled=true;
    }
};
const enableBox=()=>{
    for(let box of button)
    {
        box.disabled=false;
        box.innerText="";
        box.classList.remove("win");
        resetButton.classList.remove("hide");

    }
};


const winner =()=>{
 
    let isWinner = false;

    for (let pattern of patterns) {
        let val1 = button[pattern[0]].innerText;
        let val2 = button[pattern[1]].innerText;
        let val3 = button[pattern[2]].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                msg.innerText = `Congratulations, Winner is ${val1}!`;
                msgContainer.classList.remove("hide");
                disableBox();
                resetButton.classList.add("hide");
                button[pattern[0]].classList.add("win");
                button[pattern[1]].classList.add("win");
                button[pattern[2]].classList.add("win");
                isWinner = true;
                return;
            }
        }
    }
    let allFilled = true;
    for (let box of button) {
        if (box.innerText === "") {
            allFilled = false;
            break;
        }
    }

    if (!isWinner && allFilled) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        resetButton.classList.add("hide");
        disableBox();
    }
};


newButton.addEventListener("click",resetAll);
resetButton.addEventListener("click",resetAll);