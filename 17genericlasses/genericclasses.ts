function anotherFunction1<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction1(3, "four");

/***************************************************************************/

function anotherFunction2<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

//anotherFunction(3,"four")       //notallowed
anotherFunction2(3, 4); //allowed

/***********************************************************************/

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction3<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

//anotherFunction(3,"four")       //notallowed
//anotherFunction3(3,{})       //allowed

/***********************************************************************/

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
