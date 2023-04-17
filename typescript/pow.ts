function myPow(x: number, n: number): number {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    let pow = 1;
    
    while (n > 0) {
        if (n % 2 === 1) {
            pow *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    
    return pow;
}

console.log(myPow(2, 10));
console.log(myPow(2, 10));
console.log(myPow(2, 10));
