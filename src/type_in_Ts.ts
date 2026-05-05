//Type Annotations → you explicitly tell TypeScript the type

//Basic
let age: number = 20;
let name: string = "Sam";
let isActive: boolean = true;

//Function Annotations
function add(a: number, b: number): number {
  return a + b;
}

//object annotations
let user: { name: string; age: number } = {
  name: "Sam",
  age: 26,
};

//Array annotation
let number: number[] = [1, 2, 3, 4];

//Type Inference → TypeScript figures out the type automatically

let numb = 30;

let message = "hello";

function sub(a: number, b: number) {
  return a - b;
}

let nums = [1, 2, 3];

//Where Inference Can Go Wrong

    //infered as any , breaks at runtime
    let data;
    data = 10;
    data = "hello";

    //object mutation
    let user1 = {
    name: "Rahul",
    };

    user.name = "Amit";   // OK
    user.age = 20;  //error


//Best Practice

    let price = 100;//inference 
    function calculate(amount:number){ //annotations
        return amount*0.18;
    }

    let cartTotal = 500;//inference

    function Discount(total:number, discount:number):number {//Annotations
        return total=discount;
    }

    // inference works here
    let finalPrice = Discount(cartTotal, 50);