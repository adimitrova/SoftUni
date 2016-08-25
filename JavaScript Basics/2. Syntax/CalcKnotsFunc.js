//http://www.aqua-calc.com/convert/speed/knot-to-kilometer-per-hour

function kmhToKn(kmh){
    var constVal = 0.539956803;
    var resInKn = Math.round(((constVal * kmh)*100)/100); //to round to 2 signs after decimal: num*100 / 100
    console.log(kmh + "km/h = " + resInKn + "kn");
}

function knToKmh(kn){
    var constVal2 = 1.852;
    var resInKmh = Math.round(((constVal2 * kn)*100)/100);
    console.log(kn + "kn = " + resInKmh + "km/h");
}

kmhToKn(120);
knToKmh(52);
