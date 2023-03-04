let initialvalue=100;
let highscore=null;

let random = randomNumbergeneration(100);

function randomNumbergeneration(max){
    return Math.floor(Math.random()*max)+1;
}

document.getElementById("check").addEventListener("click", checkNumber);

function checkNumber(){
    console.log(random);
    console.log("function is on");
    let guessnum = document.getElementById("guessnum").value;

    if(initialvalue !==0){
        if(guessnum > random){
            document.querySelector("#shru").textContent = "Your guess is High.";
            initialvalue--;
            document.querySelector("#chance").textContent = initialvalue;
        }
        else if(guessnum < random){
            document.querySelector("#shru").textContent = "Your guess is low.";
            initialvalue--;
            document.querySelector("#chance").textContent = initialvalue;
        }
        else{
            document.querySelector("#shru").textContent = "🤩💥That's awesome!🎉✨";
            initialvalue--;
            document.querySelector("#chance").textContent = initialvalue;
            document.querySelector("#highScore").textContent = initialvalue;
            document.querySelector(".container").style.background = "violet";
            document.querySelector("#check").style.display ="none";
            document.querySelector(".numberbox p").innerText = guessnum;
        }
    }
    else{
        document.querySelector("#shru").textContent = "Game Over !";
    }
}

document.getElementById("playBtn").addEventListener("click", playAgain);

function playAgain(){
    document.querySelector(".container").style.background = "pink";
    document.querySelector("#chance").textContent = initialvalue;
    document.querySelector("#shru").textContent = "Start Guessing...";
    document.querySelector("#highScore").textContent = "0";
    document.querySelector("#guessnum").value = "";
    document.querySelector("#check").style.display ="block";
}
document.querySelector("#guessnum").addEventListener("click", colorChange);
function colorChange(){
    document.querySelector(".container").style.background = "green";
}
