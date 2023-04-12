

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
// -1 -1 2 -1 0 1
const nums = [-1,0,1,2,-1,-4];
let solution = [];
let left = 0;
let right = nums.length-1;

if (nums.length < 3) console.log(solution);
nums.sort((a,b) => {return a-b}); // [-4,-1,-1,0,1,2]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) console.log(solution);
    if (nums[i] === nums[i-1]) continue; // moze i ne mora

    left = i+1;
    let temp = 0;

    while (left < right) {
        temp = nums[i] + nums[left] + nums[right];
        if (temp === 0) {
            solution.push(nums[i],nums[left],nums[right]);
            left++;
            right--;

        } else if (temp > 0) {
            right--;
        } else if (temp < 0) {
            left++;
        }
    }
}