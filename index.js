//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
const numbers = [22, 15, 1114, 416, 37, 4];

//question 1
const shortWords = (arr) => arr.filter(word => word.length < 5);
// console.log(shortWords(animals));

//question 2
const vowels = /[aeiou]/gi;
const noVowel = (arr) => arr.map(word => word.replace(vowels,'x'));
// console.log(noVowel(animals));

//question 3
const longToShort = (arr) => arr.sort(function(a,b) {
    return b.length - a.length;
});
// console.log(longToShort(animals));

//question 4
const onlyVowelA = (arr) => arr.filter(word => word.includes('a'));
// console.log(onlyVowelA(animals));

//question 5
const pluralize = (arr) => arr.map(word => `${word}s`);
// console.log(pluralize(animals));

//question 6
const longerThanSeven = (arr) => arr.some(word => word.length > 7);
// console.log(longerThanSeven(animals));

//question 7
const oddLength = (arr) => arr.filter(word => word.length % 2 !== 0);
// console.log(oddLength(animals));

//question 8
const allFour = (arr) => arr.every(word => word.length === 4)
// console.log(allFour(animals));

//question 9
const sum = (arr) => arr.reduce((a,b) => a + b);
// console.log(sum(numbers));

//question 10
const longWords = (arr) => arr.filter(word => word.length > 3);
// console.log(longWords(animals));

//question 11
const uppercase = (arr) => arr.map(word => word[0].toUpperCase() + word.substring(1));
// console.log(uppercase(animals))

//question 12
const concatStrings = (arr) => arr.join(" ");
// console.log(concatStrings(animals));