
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
			expect(word(9)).to.equal(false);
		});
		it('Should return false for 0', () => {
			expect(word([])).to.deep.equal(false);
		});
	});

	describe('valid input', () => {
		it('should return a json object', () => {
			// test sentence with only without punctuations
			expect(word("olly olly in come free")).to.deep.equal(jsonObject)
		});
		it('should return a json object "olly olly in come free"', () => {
			// test for word with punctations
			expect(word("olly, olly, in come free")).to.deep.equal(jsonObject)
		});
		it('should return a json object for value "word"', () => {
			// test for word with punctations
			expect(word("word")).to.deep.equal({"word":1})
		});
	});


});
