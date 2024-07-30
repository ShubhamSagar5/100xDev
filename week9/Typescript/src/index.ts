type table = {
    name:string,
    age:number
}

function addData (data : table) {
   return  data.age
}
const usrdata = {
    name:"shubham",
    age:10
}
addData(usrdata)