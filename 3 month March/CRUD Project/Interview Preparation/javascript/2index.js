// javaScript
//React js
//Node js

//Synchronous and Asynchronous
//Call backs
//Promise
//async await

//1.Set Timeout
// console.log(1)
// console.log(11)

// setTimeout(()=>{
//     console.log(2)
// },1000)
// console.log(3)

//1. Callbacks

const getdata = (callbackFunction) =>{
    console.log("Hello get data")
    callbackFunction()
}
// const callbackFunction =()=>{
//     console.log("Hello call back function")
// }
// getdata(callbackFunction)

getdata(()=>console.log(12233))

//2.promises - asynchronous
// resolve / pending/ reject

const mypromise = new Promise(
    (resolve ,reject)=> {
        const error = false
        if(error == true){
            resolve("promise Rejected")
        }else{
            reject("promise resolved")
        }
    }
)

mypromise.then((res) => console.log(res)).catch((error) => console.log(error))



// 3. async/await - Asynchronous

const myFunction = async () => {
  // API integration
  // DB Call - add delete update get from DB - await
}