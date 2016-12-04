var arrObj = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
console.log(typeof(arrObj));
var numArr = new Array();
var newNumArr = new Array();

function findNum(sourceArr,destArr){
    var lookFor = /\d+$/g; //regex to look for: only numbers
    for(var index = 0; index <= sourceArr.length; index++) {
        if (lookFor.test(sourceArr[index])) {
            //adds the current element found being a number at the end (as new element) of the destination array
            destArr.push(sourceArr[index]);
            return Math.max[destArr];
        }
    }
}

findNum(arrObj,numArr);

console.log(Math.max[numArr]);

console.log(numArr);

// TO COMPLETE
// now it finds all numbers or array of numbers
// has to divide the array of numbers also in numbers
// doesn't find the biggest number correctly
