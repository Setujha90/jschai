// console.log("Setu")
// console.log(typeof null)
// console.log(typeof undefined)
// let x=Number("setu");
// console.log(x)
// let y="setu";
// console.log(typeof "kumar");
// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id===anotherid)
// const bignumber=21496546523683n
// console.log(typeof bignumber)

//**lecture 9 */

// const arr=["setu","kumar","jha"]
// let myobj={
//     name:"setu",
//     age:22,
// }

// const myfun=function(){
//     console.log("hello")
// }

// console.log(arr)
// console.log(typeof arr)
// console.log(typeof myobj)
// console.log(typeof myfun)
// console.table([typeof arr,typeof myobj,typeof myfun])
// console.log("1"+2)

//*lecture 11
// const name="setu"
// const repocount=30
//string interpolation to insert string at any position
//console.log(`My name is ${name} and my repo count is ${repocount}`)
// const slicename=name.slice(-8,3)
// console.log(slicename)

// const bal=new Number(100.834)
// console.log(bal.toFixed(2))
// console.log(bal.toPrecision(3))
// console.log(bal.toPrecision(2))

// const balance =10000000000000
//console.log(balance.toLocaleString('en-IN')) //en-IN is used for the indian standard if nothing is used by default it show the US standard

//*lecture 13 date
//  const mydate=new Date()
//  console.log(mydate)
//  console.log(mydate.getDate())
 //let createddate=new Date(2025,5,17)
// console.log(createddate.toDateString())
// console.log(typeof mydate)

// let mytimestamp=Date.now();
// console.log(mytimestamp) //give time from 1 jan 1970 to now in millisecond
// console.log(createddate.getTime())//is date tk ka timestamp de dega
// console.log(Math.floor(Date.now()/1000)) //time till current date in second

//localestring for date is important as it is used in the customization
// mydate.toLocaleString('string',{
//     weekday:"long",
// })

//*lecture 14:-Array */

//const myarr=[1,2,3,4]
// const myarr1=new Array(2,3,4)
// myarr1.push(5)
// myarr1.unshift(9)
// myarr1.shift()
// myarr1.shift()
// console.log(myarr1)

/*diffrence between slice and splice*/
// console.log("A",myarr)
// const newarr1=myarr.slice(1,2)
// console.log(newarr1)
// console.log("B",myarr)
// const newarr2=myarr.splice(1,2)
// console.log(newarr2)
// console.log("C",myarr)
///////in splice array also get changed the range that is included in the splice is deleted from the array whereas in the slice the array remain the same


//**lecture 15 array */
// const arr1=[1,2,3,4]
// const arr2=[5,6,7]
//arr1.push(arr2)
// console.log(arr1)
// const arr3=arr1.concat(arr2)
// console.log(arr3)
//spread operator is used to join two or more array
// const arr4=[...arr1,...arr2]
// console.log(arr4)

const arr=[1,2,3,[4,5],6,[7,8,[3,5]]]
const flattenarr=arr.flat(Infinity) //infinity is the depth till which we want to flat it here it is 2 but we can use infinity for our safety
 console.log(flattenarr)


 console.log(Array.isArray("setu")) //checking weather it is array or not   
 console.log(Array.from("setu")) //making this as array
 console.log(Array.from({name:"setu"})) //here it give empty as object directly didn't converted to array we need to define weather we want to make key as a array or value as a array
 let x=10;
 let y=90;
 let z=78;
 console.log(Array.of(x,y,z)) //converting different variable as a array