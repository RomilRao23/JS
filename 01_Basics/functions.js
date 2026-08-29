// function addTwo(n1,n2=1){
//     let result=n1+n2;
//     return result;
//     console.log("value of addition is", result);  
// }

// const result=addTwo(5)
// console.log("Value of addition is", result);


// Function with object:

const course={
    username:"Romil",
    price: 200
}

function courseInfo(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

courseInfo(course);