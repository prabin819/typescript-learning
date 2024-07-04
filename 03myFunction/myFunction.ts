/**************************vid 7*************************** */
// function addTwo (num){
//     num.toUpperCase();      //allowed to do this which i shouldnt be allowed
//     return num+2
// }

// addTwo(5)       //of type any
// addTwo("5")     //allowed
// export {}

/************fix***************/

function addTwo(num: number) {
  //num.toUpperCase();      //not allowed
  return num + 2;
}

addTwo(5); //of type num
//addTwo("5")     // not allowed

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("hitesh");

function signupUser(name: string, email: string, password: string) {}

//signupUser(1, 2, 3);
signupUser("hitesh", "h@h.com", "3");

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; //providing default value

loginUser("h", "h@h.com");

/**************************vid 7*************************** */

//what if

function addThree(num: number) {
  return "hello";
}

addThree(5); // returns string by inference

/***********************************annotating a function************************************* */

function addFour(num: number): number {
  //now this function always has to return a number
  return num + 4;
}

addThree(5);

function getValue(myVal: number) {
  ///this function can return any type (a boolean or a string)
  if (myVal > 5) {
    // this kind of scenarios will happen
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "hello";
};
//const heroes = ["thor", "spiderman", "ironman"]
const heroes = [1, 2, 3];

heroes.map((hero: number) => {
  //here TS is smart enough to know the type of hero
  return ` hero is ${hero}`;
});

//or you can explicitly tell that hero is a number

/*******************************importtant (differs from code above_)***************************************************************************** */

heroes.map((hero: number): string => {
  //**********************this sets the return type of function to string */
  //here TS is smart enough to know the type of hero
  return ` hero is ${hero}`;
});

function consoleError(errmsg): void {
  //use of void in js
  console.log(errmsg);
}

function handleError(errmsg): never {
  //read the docs(imp)
  //use of never in js
  throw new Error(errmsg);
}
export {};
