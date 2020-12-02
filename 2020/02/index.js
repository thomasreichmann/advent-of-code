const fs = require('fs');

let raw_input = fs.readFileSync('input.txt', { encoding: 'utf-8' });
let raw_lines = raw_input.split('\r\n');

// Lines ex:
//   [ '6-7 m', ' mtvbmpfpmm' ],
//   [ '4-13 t', ' wkmdgpwpcznlqsqtcjf' ]
let lines = raw_lines.map(s => s.split(':'));

let passwords = [];

// Separando as regras das senhas e criando um objeto para conter os dois
for (let line of lines) {
	let raw_rule = line[0];
	let raw_password = line[1].trim();

	let rule = raw_rule.split(' ');
	let char = rule[1];

	let minMax = rule[0].split('-');
	let min = minMax[0];
	let max = minMax[1];

	passwords.push({
		password: raw_password,
		rule: {
			min: min,
			max: max,
			char: char,
		},
	});
}

let valid = [];

// Part 1
for (let p of passwords) {
	let count = 0;
	for (char of p.password) {
		if (char === p.rule.char) count++;
	}

	if (count >= p.rule.min && count <= p.rule.max) valid.push(p.password);
}
console.log(`Part 1 valid length = ${valid.length}`);

// Clearing array for part 2
valid = [];

// Part 2
for (let p of passwords) {
	let count = 0;

	if (p.password[p.rule.min - 1] === p.rule.char) count++;
	if (p.password[p.rule.max - 1] === p.rule.char) count++;

	if (count === 1) valid.push(p.password);
}

console.log(`Part 2 valid length = ${valid.length}`);
