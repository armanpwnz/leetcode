function isPalindrom(param, isRecursion) {
	for (let i = 0; i < (param.length - 1) / 2; i += 1) {
		if (param[i].toLowerCase() !== param[param.length - 1].toLowerCase()) {
			if (isRecursion) {
				return false;
			}
			return (
				isPalindrom(param.slice(i + 1, param.length - i), true) ||
				isPalindrom(param.slice(i, param.length - 1 - i), true)
			);
		}
	}
	return true;
}

// Input: Abrar1ba
// Output: true
// Input: abraarba
// Output: true
// Input: abraa23rba
// Output: false

console.log(isPalindrom("Abrar1ba"));
console.log(isPalindrom("abraarba"));
console.log(isPalindrom("abraar23ba"));
