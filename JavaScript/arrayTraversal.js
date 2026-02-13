const nums = [3, 5, 8, 9, 12, 18]

for(let n of nums){
    // console.log(n*2);
    
}

nums.forEach((a, i, arr) => {
    // console.log(a, i, arr);
});

const newArr = nums.map((n) => {
    return n * 3;
})

console.log(newArr);

const num2 = [1, 2, 3, 4, 5]

const sqr = num2.map((n) => {
    return n ** 2;
})

console.log(sqr);

// Filter function 

const evenNums = nums.filter((n) => {
    return n % 2 === 0;
})

console.log(evenNums);

const prices = [345.95, 34.32, 874.5, 23.45, 56.78]

const GST = prices.map((n) => {
    return n * 1.18
})

console.log(GST);

// Filter all prices b/w 40 and 200

const NewPrices = prices.filter((n) => {
    return n >= 40 && n <= 200
})

console.log(NewPrices);
