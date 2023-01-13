var twoSum = function(nums, target) {
    for(let i =0;i<nums.length;i++)
    {
       number= target-nums[i]
       let foundIndex= nums.indexOf(number)
        if(foundIndex!=-1 && foundIndex!=i)
        {
            let result = [i,foundIndex].sort()
            return result
        }
    }
};
twoSum([])