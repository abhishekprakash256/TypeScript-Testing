/*

The file for the hasmap , arrays and others
*/
class array_testing {
    array_manipulation(nums) {
        nums.sort((a, b) => a - b);
        return nums;
    }
}
const array_test = new array_testing();
console.log(array_test.array_manipulation([1, 2, 9, 0, 6, 8]));
class Solution {
    two_sum(nums, target) {
        /*
        The function to find the two indices of the numbers that add up to the target.
        */
        // Base case
        if (nums.length < 2) {
            return [];
        }
        // Create a map to store the value and its index
        const mapper = new Map();
        // Array to store the result indices
        let result = [];
        // Start the traversal for finding the numbers
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            // Check if the complement exists in the map
            if (mapper.has(complement)) {
                // If found, return the indices
                result.push(mapper.get(complement)); // Use '!' for non-null assertion
                result.push(i);
                return result;
            }
            // Otherwise, add the current number and its index to the map
            mapper.set(nums[i], i);
        }
        // If no result is found
        return [];
    }
}
