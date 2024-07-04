// interface User {
//   readonly dbId: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   startTrial1: () => string; //method 1
//   starttrial2(): string; //method 2
//   getCoupon(couponname: string, value: number): number;
// }

// const user1: User = {
//   dbId: 22,
//   email: "h@h.com",
//   userId: 23,
//   startTrial1: () => {
//     return "trial 1 Started";
//   },
//   starttrial2() {
//     return "trial 2 started";
//   },
//   getCoupon: (name: "hitesh10", off: 10) => {
//     return 10;
//   },
// };

// user1.email = "h@hc.com"; //allowed
// //user1.dbId = 333; //not allowed

/**************************vid-15 interface vs type*************************************/

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial1: () => string; //method 1
  starttrial2(): string; //method 2
  getCoupon(couponname: string, value: number): number;
}

interface User {
  //people call this as re-opening of the interface
  githubToken: string;
}

const user1: User = {
  dbId: 22,
  email: "h@h.com",
  userId: 23,
  startTrial1: () => {
    return "trial 1 Started";
  },
  starttrial2() {
    return "trial 2 started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
  githubToken: "hbkjnlkdkbjnl",
};

user1.email = "h@hc.com"; //allowed
//user1.dbId = 333; //not allowed

//************************************************** */

interface Admin extends User {
  // inheritance, and also multiple inheritance as well
  adminId: number;
  role: "admin" | "ta" | "learner";
}

const user2: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 23,
  startTrial1: () => {
    return "trial 1 Started";
  },
  starttrial2() {
    return "trial 2 started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
  githubToken: "hbkjnlkdkbjnl",
  adminId: 55,
  role: "ta",
};

//difference => see docs
