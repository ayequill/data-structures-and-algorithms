/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // let num = BigInt(digits.join(""))
    // num++
    // return num.toString().split('')
    
    let n = digits.length - 1
    console.log(n)
    
    
    
    function checker (position, nums){
        if (position == 0 && nums[position] == 9) {
            nums[0] = 1
            nums.push(0)
            return nums
        }
        else if (nums[position] != 9){
            nums[position] += 1
            return nums
        }
        else if(nums[position] == 9 && position != 0){
            nums[position] = 0 
            position = position - 1
    
            return checker(position, nums)
        }
    }
    
    return checker(n, digits)
    
    
    //  let n = digits.length - 1;
    //     for(let i=n; i>=0; i--){
    //         if(digits[i] !== 9){
    //             digits[i]++;
    //             break;
    //         } else {
    //             digits[i] = 0;
    //             if(i===0){
    //                 digits.unshift(1);
    //             }
    //         }
    //     }
    //     return digits;
    };

console.log(plusOne([9]));
console.log(plusOne([9,9]));
console.log(plusOne([1,2,3]));
console.log(plusOne([2,4,6,7,9,9,3,4]));
