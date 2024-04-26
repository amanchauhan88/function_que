

const charector = 'a';
const strings = ["hello world"]



function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

let count1 = countCharacterOccurrences(strings,charector)

console.log(`occurrences of charector "${charector}"  in  "${strings}" is : ${count1}`)


