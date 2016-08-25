$(document).ready(function(getElement){
    function element(ele) {
        var a1, a2, a3, a4, a5, a6, a7, a8, a9;
        document.getElementById(ele).src = "images/cross.png";
        disable(ele);
        ele = 2;
        console.log(ele);
    }

    function main(el) {
        element(el);
    }

    element(getElement);}
