// Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.

const runningSum = function (nums) {
	let sum = 0;
	return nums.map((num) => num + sum);
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
