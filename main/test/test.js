
import chai from 'chai';
import { word } from './../src/word';
const assert = chai.assert;

describe('word', () => {
	describe('invalid input', () => {
		it('Should return false for 0', () => {
			assert.equal(word(0), false);
		});
	});

	describe('valid input', () => {
		it('should return a json object', () => {
			assert.equal(word('i love what i do so much'), {
				'i':2,
				'love':1,
				'what':1,
				'do': 1, 
				'so':1,
				'much':1
			})
		})
	})

});
