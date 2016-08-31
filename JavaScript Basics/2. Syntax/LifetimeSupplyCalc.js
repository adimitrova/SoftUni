//testing the branch changes

function calcSupply(age, maxAge, food, foodPerDay){
    var yearsLeft = maxAge - age;
    var daysLeft = yearsLeft*365;
    var foodInKg = foodPerDay / 1000;
    // multiply by 1000 to convert into grams, then round with math.round
    var calcFood = Math.round(((foodInKg*daysLeft)*1000));
    console.log(calcFood + "kg of " + food + " would be enough until you are " + maxAge + " years old.");
}

calcSupply(38,118,"chocolate",0.5);
calcSupply(20,87,"fruits",2);
calcSupply(16,102,"nuts",1.1);
calcSupply(26,80,"chicken",0.9);
calcSupply(26,27,"chicken",0.9);

// 14600kg of chocolate would be enough until you are 118 years old.
// 48910kg of fruits would be enough until you are 87 years old.
// 34529kg of nuts would be enough until you are 102 years old.
// 17739kg of chicken would be enough until you are 80 years old.
// 329kg of chicken would be enough until you are 27 years old.