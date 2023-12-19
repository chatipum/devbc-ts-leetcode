export function sumOfDigits(n: number) {
    let result = n
    const totalRound = n.toString().split('').length
    Array.from({ length: totalRound }).forEach(() => {
        if(result < 10) {
            return
        }

        const arrayOfSplitNumber = result.toString().split('').map((n) => Number(n))
        
        const sum = arrayOfSplitNumber.reduce((acc, cur) => acc + cur, 0);

        result = sum
     })

    console.log(result);
}

sumOfDigits(493193)
