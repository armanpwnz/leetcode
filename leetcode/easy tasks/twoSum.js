// two sum

const twoSum = function (nums, target) {
	const computed = {};
	for (let i = 0; i < nums.length; i++) {
		if (computed[nums[i]] >= 0) {
			return [computed[nums[i]], i];
		}
		computed[target - nums[i]] = i;
	}
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] or [1, 0]  equal 9
