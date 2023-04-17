function isPalindrome(x: number): boolean {
    const toStr: string = x.toString();
    const revStr: string = toStr.split("").reverse().join("");
    return toStr === revStr;
}

console.log(isPalindrome(121));
console.log(isPalindrome(10));