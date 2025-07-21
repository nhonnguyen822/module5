var checkSNT = function (number) {
    if (number < 2)
        return false;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrSNT = arr.filter(function (value) {
    if (checkSNT(value)) {
        return value;
    }
});
console.log(arrSNT);
