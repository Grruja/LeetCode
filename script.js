

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


/* ----- Maximum Subarray ----- */

function maxSubArray(nums) {
    let solution = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
        solution = Math.max(solution, nums[i]);
    }
    
    return solution;
}


/* ----- Maximum Product Subarray ----- */

function maxProduct(nums) {
    let solution = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] * nums[i-1]);
        solution = Math.max(solution, nums[i]);
    }
    
    return solution;
}


/* ----- Find Minimum in Rotated Sorted Array ----- */

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}


/* ----- Search in Rotated Sorted Array ----- */

function findTargetInRotatedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            console.log(nums[mid]);
            return nums[mid];
        }

        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target >= nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    nums[left] = -1;
    console.log(nums[left]);
    return nums[left];
}


/* ----- 3 Sum ----- */

function threeSum(nums) {
    let solution = [];
    let left = 0;
    let right = nums.length - 1;

    if (nums.length < 3) {
        console.log(solution);
        return solution;
    }

    nums.sort((a, b) => { return a - b }); // Sort the array

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            console.log(solution);
            return solution;
        }
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        left = i + 1;
        let temp = 0;

        while (left < right) {
            temp = nums[i] + nums[left] + nums[right];
            if (temp === 0) {
                solution.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (temp > 0) {
                right--;
            } else if (temp < 0) {
                left++;
            }
        }
    }

    console.log(solution);
    return solution;
}


/* ----- Container With Most Water ----- */

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let amo = 0;

    while (left < right) {
        let total = (right - left) * Math.min(height[left], height[right]);
        amo = Math.max(amo, total);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return amo;
}


/* ----- Sum of Two Integers ----- */

function getSum(a, b) {
    while (b !== 0) {
        let tmp = (a & b) << 1;
        a = a ^ b;
        b = tmp;
    }
    console.log(a);
}


/* ----- Counting Bits ----- */

function countBits(n) {
    let ary = Array.from(Array(n + 1).keys());
    let output = [];
    let bin = 0;
    
    for (let i = 0; i < ary.length; i++) {
        if (i) {
            bin = i.toString(2).match(/1/g).length;
        } else {
            bin = 0;
        }
        
        output.push(bin);
    }
    return output;
}


/* ----- Missing Number ----- */

function missingNumber(nums) {
    let gsum = (nums.length * (nums.length + 1)) / 2; // Formula for sum of natural numbers
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0); // Sum of elements in the array
    
    return gsum - sum;
}


/* ----- Reverse Bits ----- */

function reverseBits(n) {
    let ary = n.toString(2).split('').reverse();
    
    while (ary.length < 32) {
        ary.push('0');
    }
    
    let output = parseInt(ary.join(''), 2);
    return output;
}


/* ----- Climbing Stairs ----- */

function climbStairs(n) {
    let arr = [];
    arr[1] = 1;
    arr[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    return arr[n];
}


/* ----- Coin Change ----- */

function minCoins(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < dp.length; i++) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    if (dp[dp.length - 1] === Infinity) {
        return -1;
    } else {
        return dp[dp.length - 1];
    }
}