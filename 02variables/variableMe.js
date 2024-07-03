"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting1;
greeting1 = "Hello world1";
var greeting2 = "Hello world2";
greeting2.toUpperCase();
console.log(greeting1);
console.log(greeting2);
// video 5
//number
var userId1 = 334455;
//userId.
//boolean
var isLoggedIn = false;
//isLoggedIn.valueOf();
/**********type inference*************/
var userId2 = 334455; // too obvious, dont do this
var userId3 = 334455; // typescript is smart enough to automatically detect that you want to put a number in it. and doesnt let you do => userId3 = "prabin"; in the next line
userId3 = "33";
