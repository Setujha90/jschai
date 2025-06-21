//object can be declare in two ways first as literals and second as constructor
//in constructor we made a singleton type object in other type multiple instances are created 

//object literals
// const sym1=Symbol("mykey")
// const user={
//     name:"setu",//by defalut name is store as "name" in js
//     age:22,
//     [sym1]:"mykey"
// }
//to access object data
// console.log(user.name)
// console.log(user["name"])
// console.log(user[sym1])
// console.log(typeof user[sym1])
// console.log(user)
// user.greet=function(){ //adding greeat function to the user object 
//     console.log("Good Morning")
// }
// console.log(user.greet())
// console.log(user.greet)

//**lecture 17 object */
//const obj1=new Object() //singlenton object

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// //concanating two object
// const obj3=Object.assign({},obj1,obj2)  //{}is a empty object or target object where we store concanating value of ob1 and obj2
// console.log(obj3)
// console.log(obj1.hasOwnProperty('1')) //check wheather 1 key is included or not in the object


//**lecture 18 */
//object destructuring 
// const user={
//     name:"setu",
//     age:22,

// }
// const {name:n}=user
// //console.log(name)    //to print name of user object we need to write it as user.name to simplify it we destrucured it and define above above line 41 and now we just need to write name to print name and it can further simplify to n to print it
// console.log(n)
//API
//we fetch data from database through api call and it respond and give data in JSON format which is like object form it can be array form also and when object form data we get we further decode it by various object method

// var a=6
// if(true){
//     let a=7
// }
// console.log(a)


//*function lectur-22
// function one(){

//     let name="setu"
//     console.log(this)
//     console.log(this.name)
// }

// one()

// const two=function (){

//     let name="setu"
//     console.log(this)
//     console.log(this.name)
// }

// two()

// //arrow function
// const three=()=>{

//     let name="setu"
//     console.log(this)
//     console.log(this.name)
// }
// three()

//**lecture 30 filter,map and reduce */
const arr=[1,2,4,45]
const ans=arr.map((num)=>num+10) //add ten to  each value
const total=arr.reduce((acc,curr)=>(acc+curr),0) //store total sum in acc and for first step take 0 as initialvalue that store in the acc
console.log(total)
console.log(ans)