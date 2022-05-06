console.time();

function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar)+1 );
            } else { 
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

const count = vowelCount("Pesto Curriculam");
console.log(count);

console.timeEnd();


console.time();

function vowelCountModified(str) {
    const vowelMap = new Map();
    [...str].forEach( char => {
        if("aeiou".includes(char)) {
            vowelMap.has(char) ? vowelMap.set(char, vowelMap.get(char) +1 ) : vowelMap.set(char, 1);
        }
    })
    console.log(vowelMap); 
}

const str = "Pesto Curriculam";
vowelCountModified(str.toLowerCase());

console.timeEnd();