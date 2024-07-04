//union allows you to handle the situation where you dont know what type of data is gonna come
// Example: it might be either a number or a string
// not recommended to use any
var score1 = 33;
var score2 = "thirtythree";
var score3 = 44; //try to keep very strict as much as possible
var score4 = 55; //you can also do
var hitesh = {
    name: "hitesh",
    id: 23,
};
hitesh = {
    username: "hc",
    id: 23,
};
function getDbID(id) {
    //making some api call
    console.log("DB id is:".concat(id));
}
getDbID(3);
getDbID("3");
function getDbId(id) {
    //making some api call
    id.toUpperCase(); //not allowed in this case
    console.log("DB id is:".concat(id));
}
/******************better way*************/
function getDbIdd(id) {
    //making some api call
    if (typeof id === "string") {
        id.toUpperCase();
    } //no error in this case
}
/*********************arrays***************************************/
var data1 = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = ["1", "2", "3", "4", 5, 6];
//NOTE: string[] | number[] is different from (string | number)[]
var pi = 3.14;
pi = 3.145; //not allowed
var seatAllotment;
seatAllotment = "aisle"; //allowed
seatAllotment = "crew"; //not allowed
