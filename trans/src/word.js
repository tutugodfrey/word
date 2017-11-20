'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var word = exports.word = function word(text) {
	if (typeof text === 'number') {
		return false;
	} else if (Array.isArray(text)) {
		return false;
	} else {
		var wordOccurence = {};
		var punctuations = /[^a-z]$/;
		var wordArray = text.split(' ');
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = wordArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _word = _step.value;

				if (_word.match(punctuations)) {
					var wordToAdd = _word.substr(0, _word.length - 1);
					if (!wordOccurence[wordToAdd]) {
						wordOccurence[wordToAdd] = 1;
					} else {
						wordOccurence[wordToAdd] = wordOccurence[wordToAdd] + 1;
					}
				} else {
					if (!wordOccurence[_word]) {
						wordOccurence[_word] = 1;
					} else {
						wordOccurence[_word] = wordOccurence[_word] + 1;
					}
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
//# sourceMappingURL=word.js.map