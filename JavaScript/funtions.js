function addNums(a, b) {
    c = a+b
    // console.log(c);
}

// addNums(5, 3);

const calcAvg = function (m1, m2, m3) {
    const avg = (m1+m2+m3)/3;
    // console.log(avg);
    return avg;
}


const avg = calcAvg(45, 67, 89)

console.log(avg);

// Arrow Funtions

const checkEven = (num) => {
    if (num % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

const isEven = checkEven(45);
console.log(isEven);
