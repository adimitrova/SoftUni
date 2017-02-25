/* MADE BY ANELIA DIMITROVA as per Softuni Homework assignment on JS
BOARD:
A1 | A2 | A3
A4 | A5 | A6
A7 | A8 | A9
1. Start with player 1 (when clicked, change the image from blank to circle).
Save redult, disable the cell (to be not clickable anymore), change the player. 
Do this for all clicked cells and for both players
2. After each cell is clicked, assign the value of the user to that cell. 
Player 1 gets 2 points for each clicked cell, player 2 gets 1 point.
    In the end the sum for player 1 will be 6 and for player 2 = 3
3. Check if winner: sum the cells and assign the value to rows, cols or diagonals. 
If any of these is = 3, player 2 wins, if = 6, player 1 wins.
4. Ask user to play again    */

// (sort of) Working example: http://worldofinspiration.net/tests/js/TicTacToe.html
// Note: ugly repeating code for beginners

var currentPlayer = true;
// var player1 = true;
// var player2 = false;
var clickedElement;
var winningCombs;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var sumPlayer1 = 0;
var sumPlayer2 = 0;
var row1 = 0;
var row2 = 0;
var row3 = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var fordiag = 0;
var backdiag = 0;

function getChoice(eve){
    eve = eve || window.event;
    eve = eve.target || eve.srcElement;
    clickedElement = eve.id;
}

function disable(cell) {
    document.getElementById(cell).disabled = 'disabled';
}

function playAgain(){
    var playOnceMore = window.prompt("Play again? Enter \"y\" or \"n\"");
    if(playOnceMore === "y"){
        location.reload();
    } else if(playOnceMore === "n"){
        window.alert("Thanks for playing. Goodbye! =)");
    } else {
        window.alert("Invalid input");
        playAgain();
    }
}

function checkIfWinner(sum) {
    var row1 = a1+a2+a3;
    var row2 = a4+a5+a6;
    var row3 = a7+a8+a9;
    var col1 = a1+a4+a7;
    var col2 = a2+a5+a8;
    var col3 = a3+a6+a9;
    var fordiag = a3+a5+a7;
    var backdiag = a1+a5+a9;

    console.log(" row1 = " + row1 + " row2 = " + row2  + " row3 = " + row3 + " col1 = " + col1 + " col2 = " + col2 + " col3 = " + col3 + " fordiag = " + fordiag + " backdiag = " + backdiag);
    if(sum === row1 && row1 === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === row2 && row2 === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === row3 && row3 === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === col1 && col1 === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === col2 && col2 === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === col3 || col3 === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === fordiag && fordiag === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === backdiag && backdiag === 6){
        window.alert("Player 1 wins");
        playAgain();
    } else if(sum === row1 && row1 === 3){
        window.alert("Player 2 wins");
        playAgain();
    } else if(sum === row2 && row2 === 3){
        window.alert("Player 2 wins");
        playAgain();
    } else if(sum === row3 && row3 === 3){
        window.alert("Player 2 wins");
        playAgain();
    } else if(sum === col1 && col1 === 3){
        window.alert("Player 2 wins");
        playAgain();
    } else if(sum === col2 && col2 === 3){
        window.alert("Player 2 wins");
        playAgain();
    } else if(sum === col3 || col3 === 3){
        window.alert("Player 2 wins");
        playAgain();
    } else if(sum === fordiag && fordiag === 3){
        window.alert("Player 2 wins");
        playAgain();
    } else if(sum === backdiag && backdiag === 3){
        window.alert("Player 2 wins");
        playAgain();
    }
}


function main(eid){
    checkIfWinner()
    if(currentPlayer == true){
        getChoice(eid);
        if(clickedElement === "a1"){
            document.getElementById("a1").src="images/cross.png";
            disable("a1");
            a1 = 2;
            sumPlayer1 += a1; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a2"){
            document.getElementById("a2").src="images/cross.png";
            disable("a2");
            a2 = 2;
            sumPlayer1 += a2; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a3"){
            document.getElementById("a3").src="images/cross.png";
            disable("a3");
            a3 = 2;
            sumPlayer1 += a3; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a4"){
            document.getElementById("a4").src="images/cross.png";
            disable("a4");
            a4 = 2;
            sumPlayer1 += a4; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a5"){
            document.getElementById("a5").src="images/cross.png";
            disable("a5");
            a5 = 2;
            sumPlayer1 += a5; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a6"){
            document.getElementById("a6").src="images/cross.png";
            disable("a6");
            a6 = 2;
            sumPlayer1 += a6; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a7"){
            document.getElementById("a7").src="images/cross.png";
            disable("a7");
            a7 = 2;
            sumPlayer1 += a7; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a8"){
            document.getElementById("a8").src="images/cross.png";
            disable("a8");
            a8 = 2;
            sumPlayer1 += a8; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
        if(clickedElement === "a9") {
            document.getElementById("a9").src = "images/cross.png";
            disable("a9");
            a9 = 2;
            sumPlayer1 += a9; console.log("sumPlayer1 = " + sumPlayer1);
            checkIfWinner(sumPlayer1);
            currentPlayer = false;
        }
    } else {
        getChoice(eid);
        if(clickedElement === "a1"){
            document.getElementById("a1").src="images/circle.png";
            disable("a1");
            a1 = 1;
            sumPlayer2 += a1; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a2"){
            document.getElementById("a2").src="images/circle.png";
            disable("a2");
            a2 = 1;
            sumPlayer2 += a2; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a3"){
            document.getElementById("a3").src="images/circle.png";
            disable("a3");
            a3 = 1;
            sumPlayer2 += a3; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a4"){
            document.getElementById("a4").src="images/circle.png";
            disable("a4");
            a4 = 1;
            sumPlayer2 += a4; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a5"){
            document.getElementById("a5").src="images/circle.png";
            disable("a5");
            a5 = 1;
            sumPlayer2 += a5; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a6"){
            document.getElementById("a6").src="images/circle.png";
            disable("a6");
            a6 = 1;
            sumPlayer2 += a6; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a7"){
            document.getElementById("a7").src="images/circle.png";
            disable("a7");
            a7 = 1;
            sumPlayer2 += a7; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a8"){
            document.getElementById("a8").src="images/circle.png";
            disable("a8");
            a8 = 1;
            sumPlayer2 += a8; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
        if(clickedElement === "a9"){
            document.getElementById("a9").src="images/circle.png";
            disable("a9");
            a9 = 1;
            sumPlayer2 += a9; console.log("sumPlayer2 = " + sumPlayer2);
            checkIfWinner(sumPlayer2);
            currentPlayer = true;
        }
    }
}





