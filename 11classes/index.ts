// class User0 {
//   constructor(email, name) {
//     (this.email = email), (this.name = name);
//   }
// }

class User1 {
  email: string;
  name: string;
  city: string;
  constructor(email: string, name: string) {
    (this.email = email), (this.name = name);
  }
}

const hitesh1 = new User1("h@H.com", "hitesh");
hitesh1.city = "delhi";

/*****************************Classes part two******************************/

class User2 {
  public email: string;
  private name: string;
  city: string;
  constructor(email: string, name: string) {
    (this.email = email), (this.name = name);
  }
}

const hitesh2 = new User2("h@H.com", "hitesh");
hitesh2.city = "delhi";
//hitesh2.name        //cannot access the name property cuz its marked private, only the class's functions can access private property
console.log(hitesh2.email); // can access public property and default access modifier is public (if you dont specify any)

/*
in javascript we use # to mark fields as private
*/

/* a shortcut method to write above class */

class User3 {
  readonly city: string = "Jaipur";
  constructor(public email: string, private name: string) {}
}

//this also generates the same code
