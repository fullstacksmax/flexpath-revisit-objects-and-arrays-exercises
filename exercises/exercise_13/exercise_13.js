/*Exercise 13: Enumerability and Property Attributes

Problem:

Create an object `user` with properties 'username', 'password', and 'email'. 

Make 'password' non-enumerable so that it doesn't show up during 
property enumeration or when converting the object to JSON. 

Verify this behavior.*/

const user = {
    username: "maxv",
    password: "abc123",
    email: "support@google.com",
}
Object.defineProperty(user, "password",
    {enumerable:false }
) 

console.log(JSON.stringify(user,null , 2))

for (keys in user) {
    console.log(user[keys])
}