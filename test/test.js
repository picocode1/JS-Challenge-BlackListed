const fs = require('fs');
const assert = require('assert');

// Import our solution
eval(String(fs.readFileSync('solution.js')));

describe("Random tests", function () {
	for (let i = 0; i < 10; i++) {
		let selected_value = Math.floor(Math.random() * (100000 - 1) + 1)
		let result = blackListed(selected_value)

		it(`Checking if ${selected_value} equals to "${result}"`, function () {
			assert.strictEqual(blackListed(selected_value), String(selected_value));
		});
	}
	for (let i = 0; i < 10; i++) {
		let selected_value = String(Math.floor(Math.random() * (100000 - 1) + 1))
		let result = blackListed(selected_value)

		it(`Checking if "${selected_value}" equals to the number ${result}`, function () {
			assert.strictEqual(blackListed(selected_value), Number(selected_value));
		});
	}
})

describe("Checking code", function () {
	const code = require('fs').readFileSync('solution.js', 'utf8');

	it("Checking if the code does not contain blacklisted characters.", function () {
		const blacklist = code.match(/[`'".~()0123456789\/]/g);
		if (blacklist) {
			if (blacklist.length > 1) {
				assert.fail("ERROR: Your code contains blacklisted characters: " + blacklist.join(' '));
			}
			assert.fail("ERROR: Your code contains a blacklisted character: " + blacklist.join(' '));
		};
	})

	it("Checking if the code is no longer than 100 characters.", function () {
		if (code.length > 100) {
			assert.fail("ERROR: Your code is longer than 100 characters");
		}
	});
});