interface Person {
    name: string,
    age: number,
    isMarried?:boolean
}

function createUser(p: Person) {
    console.log(p)
}

createUser({name:"chandan", age:3})

// const person: Person = {
//     name: "chandam",
//     age: 22,
//     isMarried:false
// }