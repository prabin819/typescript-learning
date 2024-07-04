const User1: (string | number)[] = ["hc", 1]; //order doesnt matter here
//what if order is necessary
let tuser: [string, number, boolean]; //order  matter here //this is a tuple
tuser = ["hc", 1, false]; //order  matter here

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

const newuser: User = [122, "example@google.com"];

/*something wrong about tuples*/

newuser[1] = "hc.com"; //allowed
newuser.push(true); //red squiggly indicating either a number or a string is allowed
newuser.push(35); // no error but i should not have been allowed
//this is the contradicting thing with the tuples

//https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
