let gametrack = [];
let Usretrack = [];

let btns = ["green","red","yellow","blue"];

let start = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start == false){
        start = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },250);
}

function UserFlash(btn){
    btn.classList.add("pink");
    setTimeout(function(){
        btn.classList.remove("pink");
    },250);
}

function levelUp(){
    Usretrack = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gametrack.push(randColor);
    btnFlash(randBtn);

   

}

function CheckAns(idx){
    if(Usretrack[idx] === gametrack[idx]){
        if(Usretrack.length == gametrack.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game Is Over Now! Your Score was <b>${level}</b> .<br> Please press the Any key to Restart`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";

        setTimeout(function(){
            let body = document.querySelector("body");
        body.style.backgroundColor = "white";
        },250);

        reset();
    }
}

function btnPress(){
    let btn = this;
    UserFlash(btn);

    Usercolor = btn.getAttribute("id");

    Usretrack.push(Usercolor);
    CheckAns(Usretrack.length-1);
}

let allbtn = document.querySelectorAll(".btn");
    for (btn of allbtn) {
       btn.addEventListener("click",btnPress);
        
    

    }

    function reset(){
        start = false;
        Usretrack =[];
        gametrack = [];
        level = 0;
        
    }