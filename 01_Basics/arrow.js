const user={
 username:"Romil",
 price:999,
 welcomeMessage: function(){
    console.log(`${this.username}, welocme to website`)
    console.log(this)
 }
}

user.welcomeMessage();
user.username="Romil Yadav";
console.log(this)
