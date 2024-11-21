const text = "JavaScript does not seem very ease to me"
const words = text.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++){
    if(words[i] >= 5) {
        words[i] = "LongWord"
    } else {
        words[i] = "ShortWord"
    }
}
console.log(words.join(" "));