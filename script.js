

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


/* ----- Contains Duplicate ----- */

const duplicate = (nums) =>
{
    const storage = [];
    let tof = '';

    for ( let i = 0; i < nums.length; i++) 
    {
        if (storage.includes(nums[i])) 
        {
            tof = 'true';
        } 
        else 
        {
            storage.push(nums[i]);
            tof = 'false';
        }
    }

    return tof;
}


/* ----- Product of Array Except Self ----- */

const array_except_self = (nums) =>
{
    const result = new Array(nums.length);
    
    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;

    for (let i = 1; i < left.length; i++) 
    {
        left[i] = left[i-1] * nums[i-1];
    }

    for (let i = right.length - 2; i >= 0; i--) 
    {
        right[i] = right[i+1] * nums[i+1];
    }

    for (let i = 0; i < nums.length; i++) 
    {
        result[i] = left[i] * right[i];
    }

    return result;
}