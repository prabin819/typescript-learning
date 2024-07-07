class User {
  protected _courseCount = 1;
  //protected properties are available in this class as well as any class that inherits this class
  //but not outside of the class(es)
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

class SubUser extends User {
  //cannot inherit private properties
  //public properties are iherited
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const hitesh = new User("hitesh", "h@h.com");
//hitesh.deleteToken(); //obviously not allowed
