function sortedSquares(nums: number[]): number[] {

    let newNums : number[] = nums.map(num => num * num).sort((a , b) => a - b)
    return newNums
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
