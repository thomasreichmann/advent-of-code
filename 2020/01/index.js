const fs = require("fs");

let raw_input = fs.readFileSync("input.txt", { encoding: "utf-8" });
let raw_numbers = raw_input.split("\n");
let input = raw_numbers.map(s => parseInt(s));

// Find two entries that sum to 2020
console.time("Primeira parte");
(() => {
	for (let x of input) {
		for (let y of input) {
			let sum = x + y;
			if (sum === 2020)
				return console.log(
					`Primeira parte: "${x * y}" nums: "${x}, ${y}"`
				);
		}
	}
})();
console.timeEnd("Primeira parte");

// Find three entries that sum to 2020
console.time("Segunda parte");
(() => {
	// Considerando que a menor combinacao de dois numeros no input e 447 + 611, o maior terceiro numero
	// precisa ser menor que 2020 - 611 (1409) logo podemos remover todos os numeros acima de 1409 do input
	// isso reduz o tamanho do input o suficiente para achar o resultado com brute-force
	let filteredInput = input.filter(n => n < 1410);
	for (let x of filteredInput) {
		for (let y of filteredInput) {
			for (let z of filteredInput) {
				let sum = x + y + z;
				if (sum === 2020)
					return console.log(
						`Segunda parte: "${x * y * z}" nums: "${x}, ${y}, ${z}"`
					);
			}
		}
	}
})();
console.timeEnd("Segunda parte");
