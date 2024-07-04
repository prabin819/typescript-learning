"use strict";
/**************************vid 7*************************** */
// function addTwo (num){
//     num.toUpperCase();      //allowed to do this which i shouldnt be allowed
//     return num+2
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo(5)       //of type any
// addTwo("5")     //allowed
// export {}
/************fix***************/
function addTwo(num) {
    //num.toUpperCase();      //not allowed
    return num + 2;
}
addTwo(5); //of type num
//addTwo("5")     // not allowed
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hitesh");
function signupUser(name, email, password) { }
//signupUser(1, 2, 3);
signupUser("hitesh", "h@h.com", "3");
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //providing default value
loginUser("h", "h@h.com");
/**************************vid 7*************************** */
//what if
function addThree(num) {
    return "hello";
}
addThree(5); // returns string by inference
/***********************************annotating a function************************************* */
function addFour(num) {
    //now this function always has to return a number
    return num + 4;
}
addThree(5);
function getValue(myVal) {
    ///this function can return any type (a boolean or a string)
    if (myVal > 5) {
        // this kind of scenarios will happen
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "hello";
};
//const heroes = ["thor", "spiderman", "ironman"]
var heroes = [1, 2, 3];
heroes.map(function (hero) {
    //here TS is smart enough to know the type of hero
    return " hero is ".concat(hero);
});
//or you can explicitly tell that hero is a number
/*******************************importtant (differs from code above_)***************************************************************************** */
heroes.map(function (hero) {
    //**********************this sets the return type of function to string */
    //here TS is smart enough to know the type of hero
    return " hero is ".concat(hero);
});
