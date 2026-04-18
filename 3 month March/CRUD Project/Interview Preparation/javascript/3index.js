// Spread Operator
//(...)
//we can use for array and object=> [ ],{}
// expants elements (array and object)-we can add new elements to the array and object
const array1=[1,2,3]
const array2=[4,5,6]
const finalarray= [...array1,...array2]
console.log(finalarray)
// Rest Operator
//(...)

function sum(...numbers){
    console.log(numbers); //[1,2,3]
    return numbers.reduce((a,b)=>a+b);
}
console.log(sum(1,2,3,45,52,85)); 


// Closures

// nested function
function mainfunction(){
    let name = "Hoc1"
    function nestedfunction(){
          let age = "1000"
    console.log(name)//hoc
console.log(age)
    }
return nestedfunction();

 }
 console.log(mainfunction())

// Immediately Invoked Function Expressions (IIFE)
;(function (){
    console.log("Immediately Invoked Function Expressions (IIFE)")
})();


// Self-Invoking Function
;(function (){
    console.log("Self-Invoking Function")
})();
// Higher-Order Component (HOC)

// Higher-Order Functions
//takes function as an argument and returns a function
//use for code reusability
const myfunction = (name)=>{

    const a =5
    console.log(a)
    return "Hello " + name


     var b = 5

     
     console.log(b)

}
const processedfunction = (fun)=>{
    console.log("processing function...." , fun("Hoc"))
}
console.log(processedfunction( myfunction))//processing function...undefined

// Destructuring - Object, Array
// object destructuring
const data = {
    name : "nikita",
    email : "abcgmail.com",
    age : 22
}
 console.log(data,"==> full object")
const{name, email , age }= data

console.log(name)
console.log(email)
console.log(age)

// array destructuring
            // const array = [1,2,3,4,5]
const array = ["test1","test2","test3","test4","test5"]

const [a,b,c] = array


console.log(a)
console.log(b)
console.log(c)