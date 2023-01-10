var containsDuplicate = function(nums) {
    let sortedNums= nums.sort()
   for(let i =0;i<sortedNums.length;i++)
   {
       for(let j=i+1;j<sortedNums.length+1;j++)
       {
           if(sortedNums[i]==sortedNums[j])
           {
               return  true
           }
        
       }
   }
   return false

};
console.log(containsDuplicate([1,2,3,5]))