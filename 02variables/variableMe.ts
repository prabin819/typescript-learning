let greeting1: string;
greeting1 = "Hello world1";

let greeting2: string = "Hello world2";

greeting2.toUpperCase();

console.log(greeting1);
console.log(greeting2);

// video 5

//number

let userId1: number = 334455;
//userId.

//boolean

let isLoggedIn: boolean = false;
//isLoggedIn.valueOf();

/**********type inference*************/
let userId2: number = 334455; // too obvious, dont do this
let userId3 = 334455; // typescript is smart enough to automatically detect that you want to put a number in it. and doesnt let you do => userId3 = "prabin"; in the next line
userId3 = "33";
export {};
