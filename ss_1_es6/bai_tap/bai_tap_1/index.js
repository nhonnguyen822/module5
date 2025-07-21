const kiemTraSNT = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrSNT = arr.filter((value) => {
    if (kiemTraSNT(value)) {
        return value;
    }
})

console.log(arrSNT);