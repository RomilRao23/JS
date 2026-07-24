const arr=[0,1,2,3,4,5,6]

console.log(arr)
arr.push(9)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(10)
console.log(arr)
arr.shift()
console.log(arr)

const newArr=arr.slice(1,3)
console.log(newArr)
console.log(arr)

const newArr1=arr.splice(1,3)
console.log(newArr1)
console.log(arr)


