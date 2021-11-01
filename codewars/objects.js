const obj = {
	id: 2,
	first_name: "Zuzana",
	last_name: "Jirus",
	email: "zjirus1@reverbnation.com",
	gender: null,
	ip_address: "221.81.92.35",
};

const result = Object.keys(obj).reduce((acc, rec) => {
	if (typeof obj[rec] === "string") {
		return acc.concat([obj[rec]]);
	}

	return acc;
}, []);
console.log(Object.keys(obj));
console.log(result);
