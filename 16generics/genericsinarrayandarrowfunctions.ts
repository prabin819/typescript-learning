function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
//or you can use Array<T>
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

function getSearchProduct<T>(arg: T[]): T {
  //console.log(arg.length);
  //do some database operations
  const myIndex = 0;
  return arg[myIndex];
}

/**************arrow functions*************/

const getMoreSearchProduct = <T>(arg: T[]): T => {
  //do some database operations
  const myIndex = 0;
  return arg[myIndex];
};
