//limit the choices of the user
//example: aeroplane seats:

// const aisle = 0;
// const middle = 1;
// const window = 2;

// if (seat===0) {
// }

//what if somebody changes the values (0,1,2 to 'a','b','c')

//**********************enums*********************/

const enum SeatChoice {
  aisle = 101, //default is 0
  middle,
  window,
}

const hcSeat = SeatChoice.middle;
console.log(hcSeat); //102
export {};
