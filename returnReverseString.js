const testSentences = [
    "Hello world",
    "12345 67890",
    "Programming is fun"
];


function reverseWords(sentence) {
    let reversedSentence = "";
    let word = "";
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            word += sentence[i];
        } 
        if (sentence[i] === " " || i === sentence.length - 1) {
            for (let j = word.length - 1; j >= 0; j--) {
                reversedSentence += word[j];
            }
            if (i !== sentence.length - 1) {
                reversedSentence += " ";
            }
            word = "";
        }
    }
    
    return reversedSentence;
}



testSentences.forEach(sentence => {
    console.log(`Original: ${sentence}`);
    console.log(`Reversed: ${reverseWords(sentence)}`);
    console.log("-------------------------");
});
