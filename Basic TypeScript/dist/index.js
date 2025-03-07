"use strict";
console.log("Starting");
const AddAge = (user1, user2) => {
    return user1.age + user2.age;
};
console.log(AddAge({ name: "John", age: 30 }, { name: "Jane", age: 25 }));
