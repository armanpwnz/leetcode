function solve(arr) {
	// const arrayInArray = arr.map((item, index) => console.log(item.split('on')[1]));
	// const firstPartArray = arr.map((item, index) => console.log(item.split('on')[0]));
	// const secondPartArray = arrayInArray.reduceRight((acc, rec) => [...acc, rec], []);
	// const resultArray = firstPartArray.map((firstPart, index) => `${firstPart}on${secondPartArray[index]}`)
	// return resultArray;
	return arr.reverse().map((item, index) => {
		let newArray = item.split(" ");
		newArray[0] =
			index === 0
				? "Begin"
				: arr[index - 1].split(" ")[0] === "Right"
				? "Left"
				: "Right";
		return newArray.join(" ");
	});
}

console.log(
	solve([
		"Begin on Road A",
		"Right on Road B",
		"Right on Road C",
		"Left on Road C",
	])
);

const people = [
	{ name: "Arman", age: 23, budget: 50000 },
	{ name: "Arman2", age: 22, budget: 40000 },
	{ name: "Arman3", age: 21, budget: 30000 },
	{ name: "Arman4", age: 20, budget: 20000 },
	{ name: "Arman5", age: 50, budget: 10000 },
];

// for (let i = 0; i < people.length; i += 1) {
//   console.log(people[i])
// }

// for (let person of people) {
//   console.log(person)
// }

// forEach
// people.forEach((item) => console.log(item))

// map
const newpeople = people.map((it) => it.age * 2);
console.log(newpeople);

const filterPeople = people.filter((it) => it.age >= 21);
console.log(filterPeople);

const reducePeople = people.reduce((acc, rec) => acc + rec.budget, 0);
console.log(reducePeople);
