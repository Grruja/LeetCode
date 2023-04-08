let nums = [3, 2, 4];
let target = 6;

const twoSum = () => {
    const map = new Map();
    
    for ( let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        
        if (map.has(num2)) {
            console.log (map.get(num2), i);
        }
        map.set(nums[i], i);
    }
};
twoSum();