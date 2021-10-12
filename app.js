let sum = slowMath
//     .add(6, 2)
//     .then(sum => {
//         console.log(sum);
//         return slowMath.multiply(sum, 2)    
//     })
//     .then(div => {
//         console.log(res);
//         return slowMath.divide(div, 4)
//     })
//     .then(sub => {
//         console.log(quotient);
//         return slowMath.subtract(sub, 3)
//     })
//     .then(sum => {
//         console.log(res);
//         return slowMath.add(sum, 98)
//     })
//     .then(mult => {
//         console.log(res)
//         return slowMath.remainder(mult, 2)
//     })
//     .then(mult => {
//         console.log(res)
//         return slowMath.multiply(mult, 50)
//     })
//     .then(rem => {
//         console.log(res)
//         return slowMath.remainder(rem, 40)
//     })
//     .then(sum => {
//         console.log(res)
//         return slowMath.add(sum, 32)
//     })
//     .then(result => console.log(`The final result is ${result}`))
//     .catch(err => console.log(err))

const doMath = async () => {
    try {
        let wait = await slowMath.add(6, 2);
        console.log(wait);
        wait = await slowMath.multiply(wait, 2);
        console.log(wait);
        wait = await slowMath.divide(wait, 4);
        console.log(wait);
        wait = await slowMath.subtract(wait, 3);
        console.log(wait);
        wait = await slowMath.add(wait, 98);
        console.log(wait);
        wait = await slowMath.remainder(wait, 2);
        console.log(wait);
        wait = await slowMath.multiply(wait, 50)
        console.log(wait);
        wait = await slowMath.remainder(wait, 40);
        console.log(wait);
        wait = await slowMath.add(wait, 32)
        console.log(`The final result is ${wait}`)
    } catch (error) {
        console.log(error)
    }
}

doMath();