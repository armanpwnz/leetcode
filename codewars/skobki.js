// Stack

// push / pop

const string = "()((([{}}]sdfsdfsfsdf)()))";
let counter = 0;
let stack = [];

let dict = {
	"(": ")",
	"[": "]",
	"{": "}",
};

let dict2 = Object.keys(dict).reduce((acc, rec) => {
	return { ...acc, [dict[rec]]: rec };
}, {});

for (let i = 0; i < string.length; i += 1) {
	let symb = string[i];
	if (typeof dict[symb] !== "undefined") {
		stack.push(symb);
		continue;
	}

	if (typeof dict2[symb] !== "undefined") {
		const closingSymbol = stack.pop();
		if (dict[closingSymbol] !== symb) {
			console.log("error", symb, "expects to be", dict[closingSymbol]);
			break;
		}
	}
}

if (stack.length !== 0) {
	console.log("error");
}
