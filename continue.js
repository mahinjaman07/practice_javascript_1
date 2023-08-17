var numbers = [15, 52, 45, 62, 32, 45, 85, 75, 65, 54, 55, 58];
for(var i = 0; i < numbers.length; i += 1){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}