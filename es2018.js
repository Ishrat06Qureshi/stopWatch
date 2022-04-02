//1 - spread/rest 
// was introduce in 2015 only for array but they have introduce the same for object in
//2018


let testObj = {
    name:'ishrat',
    age:'23',
    degree:'MSC',
    designatin:'engineering',
    gender:'female',
    fullName:'ishrat Quresh'
}

let {name,age,...keys} = testObj;
console.log('keys',keys)