// class User {
//     public name: string
//     private email: string
//     constructor(name: string, email: string){
//         this.name=name,
//         this,email=email
//     }
// }

// const hitesh = new User('hitesh','h@h.com')

class User {
  private _courseCount = 1;
  constructor(public name: string, private email: string) {}

  get getAppleEmail(): string {
    //this is now a getter
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    //not even a void return type annotation (not allowed anything)
    if (courseNum <= 1) {
      throw new Error("course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("token deleted");
  }
}

const hitesh = new User("hitesh", "h@h.com");
//hitesh.deleteToken(); //obviously not allowed
