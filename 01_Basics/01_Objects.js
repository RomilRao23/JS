const jsUser={
    name:"romil",
    "Full name":"Romil Yadav",
    email:"abc@xyz.com",
    isLogggedIn:false,
    age:22

}

// console.log(jsUser.name)
// console.log(jsUser["Full name"])
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello");
}

jsUser.greetingTwo=function(){
    console.log(`Hello ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
