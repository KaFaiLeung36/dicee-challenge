function randomNumber1(){

    return Math.floor(Math.random() * 6 + 1);

}
var num1 = randomNumber1();
var num2 = randomNumber1();

document.querySelector(".img1").setAttribute("src", "images/dice" + num1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + num2 +".png");

if(num1 > num2){
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!";
}
else if(num1 < num2){document.querySelector("h1").innerHTML ="🚩 Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}