var threeInputs = function(){

    var input = [];
    for(var i = 3; i > 0; i--) {
        input.push(prompt("give input"));
    }

    confirm(input + input.length);
};

// threeInputs();


var need15Char = function() {

    var input = "";
    do{
        input = input + prompt("give input");
    } while(input.length < 15);

    confirm(input);
}

// need15Char();


var getTrue = function() {
    var input = false;
    do {
        if(prompt("enter \"true\"") === "true"){
            input = true;
        }
    } while(input === false);
}

//getTrue();

function isNaN_wut() {

    var input = "blah";
    confirm(input);
    confirm(isNaN(input));

    input = 42;
    confirm(input);
    confirm(isNaN(input));
    
    input = "42";
    confirm(input);
    confirm(isNaN(input));
    confirm(input);

}

isNaN_wut();


// var day = 'Monday';
// console.log('the day is: ' + day);

// day = 'Tuesday';
// console.log('the day is: ' + day);

// day = 'Thursday';
// console.log('the day is: ' + day);

// day = 1;
// console.log('the day is: ' + day);

// var monday = 'monday';
// var tuesday = 'tuesday';
// var wednesday = 'wednesday';
// console.log('the variable monday contains: ' + monday);
// console.log('the variable tuesday contains: ' + tuesday);
// console.log('the variable wednesday contains: ' + wednesday);

// monday = tuesday;
// tuesday = wednesday;
// console.log('the variable monday contains: ' + monday);
// console.log('the variable tuesday contains: ' + tuesday);
// console.log('the variable wednesday contains: ' + wednesday);

// var number = 1;
// var numberString = '1';
// console.log('the variable number contains: ' + number);
// console.log('the variable numberString contains: ' + numberString);

// TODO: What if we look at these in the console?
// In the console, type:
// number
// numberString

// console.log('the type of variable number is: ' + typeof number);
// console.log('the type of variable numberString is: ' + typeof numberString);
