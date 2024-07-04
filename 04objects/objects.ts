const User = {
  name: "hitesh",
  email: "hitesh@h.com",
  isActive: true,
};

function createUSer({ name: string, ispaid: boolean }) {}

let newUser = { name: "hitesh", ispaid: true, email: "h@h.com" };
//createUSer({ name: "hitesh", ispaid: true, email: "h@h.com"});    //shows error
createUSer(newUser); //doesnt show error

function createCourse(): { name: string; ispaid: boolean } {
  return { name: "science", ispaid: false };
}

/********************************vid:10 type aliases*****************************/

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  //now user  is of type User
  return { name: "", email: "", isActive: false };
}

createUser({ name: "", email: "", isActive: false });

//type MyString = string; //technically allowed but illogical

//see docs

export {};
