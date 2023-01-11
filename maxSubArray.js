const maxSubArray = function(nums) {
    let sum=0;
    let max=-Infinity;
    for(let i=0; i<nums.length;i++)
    {
     sum=Math.max(nums[i], sum+nums[i])
     max= Math.max(sum, max)
    }
    return max
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))