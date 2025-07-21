const checkSNT = (number: number): boolean => {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }

    }
    return true;
}
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrSNT: number[] = arr.filter((value: number):number=> {
    if (checkSNT(value)) {
        return value
    }
})

console.log(arrSNT)