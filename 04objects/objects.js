"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@h.com",
    isActive: true,
};
function createUSer(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
var newUser = { name: "hitesh", ispaid: true, email: "h@h.com" };
//createUSer({ name: "hitesh", ispaid: true, email: "h@h.com"});    //shows error
createUSer(newUser); //doesnt show error
function createCourse() {
    return { name: "science", ispaid: false };
}
function createUser(user) {
    //now user  is of type User
    return { name: "", email: "", isActive: false };
}
createUser({ name: "", email: "", isActive: false });
