console.log("We are using javascript")


//variables
const name = "hoc"       //fix value we can not change
var surname = "Tech"      //Globle we can change anywhere in file
let middlename = "solution"

//function 
// 1 normal function 

function getyourname() {
console.log("function 2")
}
getyourname()

//Arrow function
const getmyname = ()=>{
    console.log("function 1")
}
getmyname()

//parametre
const getmyfullname = (data = "no name") =>{
    console.log("my full name",data)
}
const myname = "Nikita Narale"
getmyfullname(myname )

const test = "Ajay"
getmyfullname(test)

getmyfullname()   // undefinded parameter


//Array         0           1        2         3
const items = ["Test 1" , "Test 2"," Test 3", "Test 4"]
console.log(items, "Full item print")
console.log(items[1] , "Full item print")
console.log(items[3] , "- print only index 0 -( First valueS)")
//Object 
// key - value paire
const studentdetails ={
    // key - value
    name : "Nikita khandekar",
    City: "karad"
}
console.log (studentdetails, "=> studentdetails full object")
console.log (studentdetails.name, "=> studentdetails full object")