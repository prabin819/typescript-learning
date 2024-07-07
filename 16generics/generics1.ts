function identity1(arg: number): number {
  return arg;
}
function identity2(arg: string): string {
  return arg;
}
function identity3(arg: any): any {
  return arg;
} //problem here is you can pass number and return string which is inconsistent
function identity4(arg: number | boolean): number | boolean {
  return arg;
} //problem here is you can pass number and return boolean and vice versa which is inconsistent

/*******************generics******************** */

function identity5<Type>(arg: Type): Type {
  return arg;
}

identity5(1);
identity5("one");
identity5(true);
//type can be of your own type

interface Bootle {
  brand: string;
  type: number;
}

function identity6<Bootle>() {}

/*******************array************** */

const score: Array<number> = [];
const names: Array<string> = [];
