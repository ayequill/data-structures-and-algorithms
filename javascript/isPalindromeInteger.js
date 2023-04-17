/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const toStr = (x +="")

    const revStr =  toStr.split("").reverse().join("")
    return toStr != revStr ? false : true
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));
