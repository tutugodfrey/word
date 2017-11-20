"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var word = exports.word = function word(text) {
	if (typeof text !== "string") {
		return false;
	} else {
		var wordOccurence = {};
		var jsonObject = {
			"olly": 2,
			"in": 1,
			"come": 1,
			"free": 1
		};
		var wordArray = text.split(' ');
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = wordArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _word = _step.value;

				if (!wordOccurence[_word]) {
					wordOccurence[_word] = 1;
				} else {
					wordOccurence[_word] = wordOccurence[_word] + 1;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return wordOccurence;
	}
};
//console.log(word("welcome to andela bootcamp, hope you enjoy you codding day"));
//# sourceMappingURL=word.js.map