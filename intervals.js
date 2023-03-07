// Example of setIntervals for looping data

let num = 0;
const intervalId = setInterval(()=>{
    // console.log(num++);
    console.log(++num)
    if (num === 10) {
        clearInterval(intervalId)
    }
}, 500);



// Example of setIntervals: 

console.log(1);
console.log(2);
// console.log(3);
setInterval(() =>{
    console.log(3);
}, 1000)
console.log(4);
console.log(5);