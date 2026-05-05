// Union type :- This value can be one of several types, but only one at a time.

let value: number | string;

//basic

let id: number | string;

id=3;
id="raj"

//Useful because:
//Sometimes APIs return number IDs
//Sometimes string IDs
function print(id:number | string){
    console.log(id);
}

//type narrowing 

function printId(id: number | string) {
//   console.log(id.toUpperCase()); // ❌ error
}
//toUpperCase() only works on strings not on numbers and id might be a number

//narrowing the type
function print_id(id:number|string){
    if(typeof id ==="string"){
        console.log(id.toLowerCase());
    }else{
        console.log(id)
    }
}


//Beginer mistakes
let val: number | string;

val = "hello";
console.log(val.length);//What if val becomes number later ?


//Union with Array

let a:(number|string)[]=[1,"ii",6];


//Literal types

let status :("online" | "offline" | "loading");
status="online";

//Real world patterns

type Result ="success"|"fail";

function handleResult(result: Result){
    if(result==="success"){
        console.log("Done")
    }
    else {
        console.log("Failed")
    }
}
handleResult("success")


//Union vs Any

let val1: any;                // ❌ no safety
let val2: number | string; 

//Union = safe flexibility
//any = no safety