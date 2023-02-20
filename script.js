

/* ----- Two Sum ----- */

const two_sum = (nums, target) => 
{
    const map = new Map();
    
    for ( let i = 0; i < nums.length; i++) 
    {
        let num1 = nums[i];
        let num2 = target - num1;
        
        if (map.has(num2)) 
        {
            return [map.get(num2), i];
        }

        map.set(nums[i], i);
    }
}


/* ----- Best Time to Buy and Sell Stock ----- */

const buy_stock = (price) =>
{
    let buy = price[0];
    price[0] = 0;
    let profit = 0;

    for (let i = 1; i < price.length; i++) 
    {
        if (buy > price[i]) 
        {
            buy = price[i];
            price[i] = 0;
            profit = 0;
        } 
        else 
        {
            profit = Math.max(...price) - buy;
        }
    }

    return profit;
}