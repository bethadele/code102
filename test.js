var addNumbers = function(a, b){
    return a + b;
};

addNumbers(2, 5);
    //return 7

addNumbers(50, 20);
    //return 70

addNumbers = function(a, b){
    return a * b;
}

function () {
    return a + b;
}
    //this is an anonymous function, but how do we invoke this?

function () {
    return a + b;
}();

    //Adding the parens invokes the function. This is an IIFE.