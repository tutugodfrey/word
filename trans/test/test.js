'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _word = require('./../src/word');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = _chai2.default.assert;
var expect = _chai2.default.expect;
var jsonObject = {
	"olly": 2,
	"in": 1,
	"come": 1,
	"free": 1
};
describe('word', function () {
	describe('invalid input', function () {
		it('Should return false for 0', function () {
			expect((0, _word.word)(9)).to.equal(false);
		});
		it('Should return false for 0', function () {
			expect((0, _word.word)([])).to.deep.equal(false);
		});
	});

	describe('valid input', function () {
		it('should return a json object', function () {
			// assert.equal(word("olly olly in come free"), jsonObject)
			expect((0, _word.word)("olly olly in come free")).to.deep.equal(jsonObject);
		});
		it('should return a json object', function () {
			// assert.equal(word("olly olly in come free"), jsonObject)
			expect((0, _word.word)("olly, olly, in come free")).to.deep.equal(jsonObject);
		});
	});
});
//# sourceMappingURL=test.js.map