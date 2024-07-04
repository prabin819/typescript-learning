type User = {
  readonly _id: string; //now _id becomes readonly
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; //OPTIONAL
};

// function createUser(u: User){}

let myUser: User = {
  _id: "1234",
  name: "h",
  email: "h@g.com",
  isActive: false,
};

myUser.email = "h@gmail.com"; //normal and allowed
//myUser._id = "5678"; //not allowed to do this

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
