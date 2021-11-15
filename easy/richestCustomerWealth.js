// Richest Customer Wealth
// Given an array of customers, each customer is represented by an array of two integers [customer_id, customer_wealth], where customer_id is the unique id of the customer and customer_wealth is the customer's total annual wealth.

const maximumWealth = function (accounts) {
	let result = 0;
	accounts.forEach((account) => {
		const accountWealth = account.reduce((sum, wealth) => (sum += wealth), 0);
		if (result < accountWealth) {
			result = accountWealth;
		}
	});
	return result;
};

console.log(
	maximumWealth([
		[1, 2, 3],
		[3, 2, 1],
	])
);
