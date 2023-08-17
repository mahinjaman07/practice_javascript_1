
// Break Loop


var numbers = [10, 20, 30, 40, 50, 60, 70, 80];
for(var i = 0; i < numbers.length; i +=1){
    var number = numbers[i];
    console.log(number);

    if(number >= 40){
        break;
    }
}

var friends = ['Mahin','Rahim', 'Rifat', 'Rana', 'Reduan'];
for(var i = 0; i < friends.length; i +=1){
    var friend = friends[i];
    console.log(friend);

    if(friend == 'Rahim'){
        break;
    }
}


var friends = ['Mahin','Rahim', 'Rifat', 'Rana', 'Reduan'];
var i = 0;
while(i < friends.length){
    var friend = friends[i];
    console.log(friend);
    i += 1;

    if(friend == 'Rifat'){
        break;
    }
}

var numbers = [10, 20, 30, 40, 50, 60, 70, 80];
var i = 0;
while(i < numbers.length){
    var number = numbers[i];
    console.log(number);
    i += 1;

    if(number > 40){
        break;
    }
}