//union allows you to handle the situation where you dont know what type of data is gonna come
// Example: it might be either a number or a string
// not recommended to use any

let score1: number = 33;
let score2: string = "thirtythree";

let score3: number | string = 44; //try to keep very strict as much as possible
let score4: number | string | boolean | bigint = 55; //you can also do

//you can also use this union with your custom datatype as well

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = {
  name: "hitesh",
  id: 23,
};

hitesh = {
  username: "hc",
  id: 23,
};

function getDbID(id: number | string) {
  //making some api call
  console.log(`DB id is:${id}`);
}

getDbID(3);
getDbID("3");

function getDbId(id: number | string) {
  //making some api call
  id.toUpperCase(); //not allowed in this case
  console.log(`DB id is:${id}`);
}

/******************better way*************/
function getDbIdd(id: number | string) {
  //making some api call
  if (typeof id === "string") {
    id.toUpperCase();
  } //no error in this case
}

/*********************arrays***************************************/

const data1: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number)[] = ["1", "2", "3", "4", 5, 6];

//NOTE: string[] | number[] is different from (string | number)[]

let pi: 3.14 = 3.14;
pi = 3.145; //not allowed

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"; //allowed
seatAllotment = "crew"; //not allowed
