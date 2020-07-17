// feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
// brickCalculator
function brickCalculator(floor){
    var feet = 1000;
        if(floor <= 10){
            var oneTo10 = feet * 15 * floor;
        }
        else if(floor >= 11 && floor <= 20){
            var elevenTo20 = feet * 12 * floor;
        }
        else if(floor >= 21){
            var twentyOneTo30 = feet * 10 * floor;
        }
        var totalBrick = oneTo10 + elevenTo20 + twentyOneTo30;
        return totalBrick;
}
// tinyFriend
function tinyFriend(name){
    var small = name[0];
    for(var i = 0; i < name.length; i++){
        tiny = name[i];
        if(tiny.length < small.length){
            small = tiny;
        }
    }
    return small;
}
