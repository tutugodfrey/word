

export const word = function(text) {
	if(typeof text === 'number') {
		return false;
	} else if(Array.isArray(text)) {
		return false;
	}  else {
		const wordOccurence = {};
		const punctuations = /[^a-z]$/;
		const wordArray = text.split(' ');
		for(let word of wordArray) {
			if (word.match(punctuations)) {
				const wordToAdd = word.substr(0, word.length-1)
				if(!wordOccurence[wordToAdd]) {
					wordOccurence[wordToAdd] = 1;
				} else {
					wordOccurence[wordToAdd] = wordOccurence[wordToAdd] + 1
				}
			} else {
				if(!wordOccurence[word]) {
					wordOccurence[word] = 1;
				} else {
					wordOccurence[word] = wordOccurence[word] + 1
				}
			}
				
		}
		return wordOccurence;
	}
}