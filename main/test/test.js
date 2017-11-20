
import chai from 'chai';
import { word } from './../src/word';
const assert = chai.assert;
const expect = chai.expect
const jsonObject = {
			"olly":2,
			"in":1,
			"come":1,
			"free":1
		}
describe('word', () => {
	describe('invalid input', () => {
		it('Should return false for 0', () => {
			assert.equal(word(0), false);
		});
	});

	describe('valid input', () => {
		it('should return a json object', () => {
			// assert.equal(word("olly olly in come free"), jsonObject)
			expect(word("olly olly in come free")).to.deep.equal(jsonObject)
		});
		it('should return a json object', () => {
			// assert.equal(word("olly olly in come free"), jsonObject)
			expect(word("olly, olly, in come free")).to.deep.equal(jsonObject)
		});
	});


});
