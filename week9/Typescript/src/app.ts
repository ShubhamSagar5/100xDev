function addNumber(a:number,b:number):number{
    return a + b
}

const value :number = addNumber(2,6)

const multiply = (a:number,b:number) => {
    return a * b 
}

console.log(multiply(5,6))

interface User {
    name : string,
    age:number 
}


const ageisValid  = (user:User) => {
    if(user.age > 18){
        console.log("age is valid")
    }else{
        console.log("age is not valid")
    }
}

const result = ageisValid({name:"shubham",age:10}) 


type value = number | string 

const f1 = <a>(id:a) => {
    return id
}

const calledf1 = f1<number>(2)
const calledf2 = f1<string>("strunf")

console.log(calledf1 +" "+ calledf2.toUpperCase())


const maxValue = (arr : number[]) => {
    return arr
}

console.log(maxValue([1,2,3])) 


enum dir {
    up = "up",
    down = "down",
    left ="left",
    right = "right"
}

const maxValue2 = (arr :dir) => {
    return arr
}

console.log(maxValue2(dir.up))
console.log(maxValue2(dir.down))
console.log(maxValue2(dir.right))