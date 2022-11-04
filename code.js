var buttons = document.querySelectorAll("button");
var paras = document.querySelectorAll("p");
var questions = document.querySelectorAll("h2");

var numBtns = buttons.length;
var pBtns = paras.length;

var btnToggle = false;

var btnNumber;

console.log(numBtns);

function dropDown(btnNumber){
    if(btnToggle === false)
    {
        paras[btnNumber-1].style.display = "block";
        buttons[btnNumber-1].style.transform = "rotate(180deg)";
        questions[btnNumber-1].style.fontWeight = "700"

        btnToggle = true;
    }
    else{
        paras[btnNumber-1].style.display = "none";
        buttons[btnNumber-1].style.transform = "rotate(0deg)";
        questions[btnNumber-1].style.fontWeight = "400"

        btnToggle = false;
    }
}
