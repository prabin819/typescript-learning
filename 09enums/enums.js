"use strict";
//limit the choices of the user
//example: aeroplane seats:
Object.defineProperty(exports, "__esModule", { value: true });
// const aisle = 0;
// const middle = 1;
// const window = 2;
// if (seat===0) {
// }
//what if somebody changes the values (0,1,2 to 'a','b','c')
//**********************enums*********************/
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["aisle"] = 101] = "aisle";
    SeatChoice[SeatChoice["middle"] = 102] = "middle";
    SeatChoice[SeatChoice["window"] = 103] = "window";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.middle;
console.log(hcSeat); //102
