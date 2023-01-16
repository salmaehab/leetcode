var maxProfit = function(prices) {
    let profit=0
    let length =prices.length
    for(let i=0;i< length -1;i++)
    {
        let currentPrice=prices[i]
        for(let j=i+1; j<length;j++)
        {
        let currentProfit=prices[j]-currentPrice
            if( currentProfit>profit){
                 profit= currentProfit
            }   
        }
    }
  return profit
};
console.log(maxProfit([7,1,5,3,6,4]))