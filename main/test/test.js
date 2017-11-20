
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
		it('Should return false for and array of string', () => {
			expect(word(["olly", "olly", "in", "come", "free"])).to.deep.equal(false);
		});
		it('Should return false for an object', () => {
			expect(word([jsonObject])).to.deep.equal(false);
		});
	});

	describe('valid input', () => {
		it('should return a json object', () => {
			expect(word("olly olly in come free")).to.deep.equal(jsonObject)
		});
		it('should return a json object "olly olly in come free"', () => {
			expect(word("olly, olly, in come free")).to.deep.equal(jsonObject)
		});
		it('should return a json object for value "word"', () => {
			expect(word("word")).to.deep.equal({"word":1})
		});
	});


});
