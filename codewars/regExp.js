const re = /(\w{1,3})/gi;
//new RegExp('^\\w{3}$', 'i')  - its the same like /^\w{3}$/i
console.log(re.test("aBc"));

const str = "abracadabra";
console.log(str.match(re));

const num = 4;

const re2 = new RegExp(`(\\w{1,${num}})`, "ig");
console.log(str.match(re2));
// строка 3 цифры и 1 буква

console.log(/^\d{3}\w+$/.test("122a")); // от 1 до бесконечности
console.log(/^\d{3}\w*$/.test("122")); // от нуля до бесконечности
console.log(/^\d{3,}\w*$/.test("1222222aaaaaaaaaaaaa")); // от нуля до бесконечности

const re3 = /([A-z0-9_+-]+)@([A-z0-9_+-]+)\.([A-z]{2,})/;
const mail = "test@gmail.com";
console.log(mail.match(re3));
// @ts-ignore
const [, name, domain, zone] = mail.match(re3);
console.log({
	name,
	domain,
	zone,
});

console.log(mail.replace(/t/g, "d"));
console.log(mail.replace("t", "d"));

console.log(mail.replace(/\d/g, "X"));

// i - ignore registr
// g - global fullstring
// m -
// s - special symbol
