'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _word = require('./../src/word');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = _chai2.default.assert;

describe('word', function () {
	describe('invalid input', function () {
		it('Should return false for 0', function () {
			assert.equal((0, _word.word)(0), false);
		});
	});

	describe('valid input', function () {
		it('should return a json object', function () {
			assert.equal((0, _word.word)('i love what i do so much'), {
				'i': 2,
				'love': 1,
				'what': 1,
				'do': 1,
				'so': 1,
				'much': 1
			});
		});
	});
});
//# sourceMappingURL=test.js.map