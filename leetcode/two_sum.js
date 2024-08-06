/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const difference = target - value;
        const differnceIdx = hashMap.get(difference)

        if (typeof differnceIdx !== 'undefined') {
            const twoSumArray = [i, differnceIdx]

            return twoSumArray.sort()
        }

        hashMap.set(value, i)
    }
};
