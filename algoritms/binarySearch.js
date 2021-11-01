const arr = [12, 20, 44, -34, 13, 6, 3, 2, 100];
const sortedArr = arr.sort((a, b) => a - b);

const binarySearch = (arr, num) => {
	let startArray = 0;
	let endArray = arr.length - 1;

	while (startArray <= endArray) {
		let midArray =
			(startArray + endArray) % 2 !== 0
				? Math.floor((startArray + endArray) / 2)
				: (startArray + endArray) / 2;
		if (arr[midArray] === num) {
			console.log(`The ${num} was found in arr`);
		}
		if (arr[midArray] > num) {
			endArray = midArray - 1;
		} else {
			startArray = midArray + 1;
		}
	}

	return console.log("end of function");
};

binarySearch(sortedArr, -34);
binarySearch(sortedArr, 12);
