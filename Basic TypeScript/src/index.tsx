// console.log("Starting")

// interface User {
//     name : string,
//     age : number,
// }

// const AddAge = (user1 : User , user2 : User) => {
//     return user1.age + user2.age;
// }

// console.log(AddAge({ name: "John", age: 30 }, { name: "Jane", age: 25 }));


// PICK API (pick values from types and interfaces)

interface User {
    name : string,
    age : number,
    occupation : string
    password : string
}
type UpdateProps = Pick<User , "name" | "age"> ;


const updateUser = (updateProps  : UpdateProps) =>{
    // updation code whatever
}


// partial  -------------------------------------------------------------->

interface User2  {
    name : string,
    age : number,
}

type OptionalProps = Pick<User2, "name" | "age">;

type OptionalProps2 = Partial<User2>;


// readonly      -------------------------------------------------------------->

type User3 = {
    name : string,
    readonly password : string, 
}

const auser : User3 = { name : "sfs" , password : "323" };

type User4 = {
    name : string,
    password : string, 
}

const buser : Readonly<User4> = { name : "sfs" , password : "323" };

buser.name = "sdsf";
buser.password = "sdds";


// Reacord AND Map   -------------------------------------------------------------->

type UserNew = {
    name : string,
    age : number
}
// type Users = {
//     [key : string] : UserNew
// }

// or

type Users2 = Record<string, UserNew>;

const users : Users2 = {
    "as@asd" : {
        "name" : "rese",
        "age" : 23
    },
    "as@a3sd" : {
        "name" : "r1ese",
        "age" : 26,
    },

}


const mapUsers = new Map<string, UserNew>([
    ["as@asd" , {
        name : "sdf",
        age : 23
    }]
])

// Exclude  -------------------------------------------------------------->


 
// type inferance zod greate thing search online (zod is validation library for backend.....)