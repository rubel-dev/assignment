


//to convert kilometer to meter

function kilometerToMeter(km){
    if(km < 0){
        console.log('distance can not be negative');
    }
    else{
        var meter = km * 1000;
    } 
    return meter;
}

var result = kilometerToMeter(58)
console.log(result)


// budgetCalculator

function budgetCalculator(watch,mobile,laptop){
    if(watch < 0 || mobile < 0 || laptop < 0){
        console.log('input is not valid')
    }
    else{
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + mobilePrice + laptopPrice;
    }
    return totalPrice;
}

var total = budgetCalculator(2,5,2)
console.log(total)



// calculate hotelCost

function hotelCost(day){
    var totalCost = 0;
    if(day < 0){
        return 'Input a valid day'; 
    }
   else if(day <= 10){
        totalCost = day * 100;
    }
    else if(day <= 20){
        var first10 = 10 * 100;
        var remainDay = day - 10;
        var second10 = remainDay * 80;
        totalCost = first10 + second10;
    }
    else{
        var first10 = 10 * 100;
        var second10 = 10 * 80;
        var remainDay = day - 20;
        var thirdPart = remainDay * 50;
        totalCost = first10 + second10 + thirdPart;
    }
    return totalCost;
}
var cost = hotelCost(-5)
console.log(cost)



// find a megaFriend from a friendList 

function megaFriend(friendList){
    var initial = 0;
    var biggerFriend = friendList[i];
    for(var i = 0; i < friendList.length; i++){
        if(friendList[i].length > initial){
            initial = friendList[i].length;
            biggerFriend = friendList[i];
        }
    }
    return biggerFriend;
}
var friends = ['rubel','kamal','jamal','jhankarvaia','mahmuduhasnvaia'];
var bigFriend = megaFriend(friends);
console.log(bigFriend);

