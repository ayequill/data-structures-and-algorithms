function addBinary(a: string, b: string): string {
    const numA : bigint = BigInt('0b' + a)
    const numB : bigint = BigInt('0b' + b)
    return (numA + numB).toString(2)
};

console.log(addBinary('11','1'))
console.log(addBinary('110111','1000111'))
console.log(addBinary('1101011','1111'))
