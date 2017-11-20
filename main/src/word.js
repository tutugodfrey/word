

export const word = function(text) {
	if(typeof text !== "string") {
		return false;
	}  else {
		const wordOccurence = {};
		const jsonObject = {
			"olly":2,
			"in":1,
			"come":1,
			"free":1
		}
		const wordArray = text.split(' ');
		for(let word of wordArray) {
				if(!wordOccurence[word]) {
					wordOccurence[word] = 1;
				} else {
					wordOccurence[word] = wordOccurence[word] + 1
				}
		}
		return wordOccurence;
	}
}
//console.log(word("welcome to andela bootcamp, hope you enjoy you codding day"));