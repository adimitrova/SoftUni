// var img = new Image();
// var div = document.getElementById('foo');
//
// img.onload = function() {
//     div.appendChild(img);
// };
//
// img.src = 'path/to/image.jpg';


// define the fields from A1 to A9
// A1 | A2 | A3
// A4 | A5 | A6
// A7 | A8 | A9
// check turn
// add onclick event for each cell
//

var currentPlayer = true;
// var player1 = true;
// var player2 = false;
var clickedElement;
var winningCombs;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var sum = 0;
var row1;
var row2 = a4+a5+a6;
var row3 = a7+a8+a9;
var col1 = a1+a4+a7;
var col2 = a2+a5+a8;
var col3 = a3+a6+a9;
var fordiag = a3+a5+a7;
var backdiag = a1+a5+a9;

function getChoice(eve){
    eve = eve || window.event;
    eve = eve.target || eve.srcElement;
    clickedElement = eve.id;
}

function disable(cell) {
    document.getElementById(cell).disabled = 'disabled';
}

function checkIfWinner() {
    row1 = a1+a2+a3;
    console.log(a1+a2+a3);
    row2 = a4+a5+a6;
    console.log(a4+a5+a6);


    if(row1 || row2 || row3 || col1 || col2 || col3 || fordiag || backdiag == 6){
        window.alert("Player 1 wins");
    } else if(row1 || row2 || row3 || col1 || col2 || col3 || fordiag || backdiag == 3){
        window.alert("Player 2 wins");
    } else{
        console.log(row1,row2,row3,col1,col2,col3,fordiag,backdiag);
    }
}

/*function winningCombinations(){
    var winningCombs[] = [[a1,a2,a3],[a4,a5,a6],[a7,a8,a9],[a1,a4,a7],[a2,a5,a8],[a3,a6,a9],[a1,a5,a9],[a3,a5,a7]];
    for(var element = 0; element < winningCombs.length; element++){
        for(var elofel = 0; elofel < winningCombs.length; elofel++){
            if(winningCombs[[element][elofel]].src != "images/blank.png"){
                if(winningCombs[[element][elofel]].src == "images/cross.png"){
                    window.alert("Player 1 wins");
                } else if (winningCombs[[element][elofel]].src == "images/circle.png"){
                    window.alert("Player 2 wins");
                } else {
                    window.alert("No winner");
                }
            }
        }
    }

/!*    if(a1.src == a2.src == a3.src){}
    if(a4.src == a5.src == a6.src){}
    if(a7.src == a8.src == a9.src){}
    if(a1 == a4 == a7){}
    if(a2 == a5 == a8){}
    if(a3 == a6 == a9){}
    if(a1 == a5 == a9){}
    if(a3 == a5 == a7){}*!/
}*/

/*function markAnsAndChangePlayer(eid) {
    //var answer = "";
    if(currentPlayer == true) {
        getChoice(eid);
        switch (eid) {
            case a1:
                document.getElementById("a1").src="images/cross.png";
                currentPlayer = false;
                break;
            case a2:
                document.getElementById("a2").src="images/cross.png";
                currentPlayer = false;
                break;
            case a3:
                document.getElementById("a3").src="images/cross.png";
                currentPlayer = false;
                break;
            case a4:
                document.getElementById("a4").src="images/cross.png";
                currentPlayer = false;
                break;
            case a5:
                document.getElementById("a5").src="images/cross.png";
                currentPlayer = false;
                break;
            case a6:
                document.getElementById("a6").src="images/cross.png";
                currentPlayer = false;
                break;
            case a7:
                document.getElementById("a7").src="images/cross.png";
                currentPlayer = false;
                break;
            case a8:
                document.getElementById("a8").src="images/cross.png";
                currentPlayer = false;
                break;
            case a9:
                document.getElementById("a9").src = "images/cross.png";
                currentPlayer = false;
                break;
            default:
                answer = "Massive or Tiny?";
        }
    } else {
        getChoice(eid);
        switch (eid) {
            case a1:
                document.getElementById("a1").src="images/circle.png";
                currentPlayer = true;
                break;
            case a2:
                document.getElementById("a2").src="images/circle.png";
                currentPlayer = true;
                break;
            case a3:
                document.getElementById("a3").src="images/circle.png";
                currentPlayer = true;
                break;
            case a4:
                document.getElementById("a4").src="images/circle.png";
                currentPlayer = true;
                break;
            case a5:
                document.getElementById("a5").src="images/circle.png";
                currentPlayer = true;
                break;
            case a6:
                document.getElementById("a6").src="images/circle.png";
                currentPlayer = true;
                break;
            case a7:
                document.getElementById("a7").src="images/circle.png";
                currentPlayer = true;
                break;
            case a8:
                document.getElementById("a8").src="images/circle.png";
                currentPlayer = true;
                break;
            case a9:
                document.getElementById("a9").src = "images/circle.png";
                currentPlayer = true;
                break;
            default:
                answer = "Massive or Tiny?";
        }
    }
}*/

function main(eid){
    checkIfWinner()
    if(currentPlayer == true){
        getChoice(eid);
        if(clickedElement === "a1"){
            document.getElementById("a1").src="images/cross.png";
            disable("a1");
            a1 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a2"){
            document.getElementById("a2").src="images/cross.png";
            disable("a2");
            a2 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a3"){
            document.getElementById("a3").src="images/cross.png";
            disable("a3");
            a3 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a4"){
            document.getElementById("a4").src="images/cross.png";
            disable("a4");
            a4 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a5"){
            document.getElementById("a5").src="images/cross.png";
            disable("a5");
            a5 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a6"){
            document.getElementById("a6").src="images/cross.png";
            disable("a6");
            a6 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a7"){
            document.getElementById("a7").src="images/cross.png";
            disable("a7");
            a7 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a8"){
            document.getElementById("a8").src="images/cross.png";
            disable("a8");
            a8 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
        if(clickedElement === "a9") {
            document.getElementById("a9").src = "images/cross.png";
            disable("a9");
            a9 = 2;
            checkIfWinner();
            currentPlayer = false;
        }
    } else {
        getChoice(eid);
        if(clickedElement === "a1"){
            document.getElementById("a1").src="images/circle.png";
            disable("a1");
            a1 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a2"){
            document.getElementById("a2").src="images/circle.png";
            disable("a2");
            a2 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a3"){
            document.getElementById("a3").src="images/circle.png";
            disable("a3");
            a3 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a4"){
            document.getElementById("a4").src="images/circle.png";
            disable("a4");
            a4 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a5"){
            document.getElementById("a5").src="images/circle.png";
            disable("a5");
            a5 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a6"){
            document.getElementById("a6").src="images/circle.png";
            disable("a6");
            a6 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a7"){
            document.getElementById("a7").src="images/circle.png";
            disable("a7");
            a7 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a8"){
            document.getElementById("a8").src="images/circle.png";
            disable("a8");
            a8 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
        if(clickedElement === "a9"){
            document.getElementById("a9").src="images/circle.png";
            disable("a9");
            a9 = 1;
            checkIfWinner();
            currentPlayer = true;
        }
    }

    // switch(clickedElement) {
    //     case "a1":
    //         document.write("Choice: a1");
    //         break;
    //     case "a2":
    //         code block
    //         break;
    //     case a3:
    //         code block
    //         break;
    //     case a4:
    //         code block
    //         break;
    //     case a5:
    //         code block
    //         break;
    //     case a6:
    //         code block
    //         break;
    //     case a7:
    //         code block
    //         break;
    //     case a8:
    //         code block
    //         break;
    //     case a9:
    //         code block
    //         break;
    //     default:
    //     default code block
    // }
}





