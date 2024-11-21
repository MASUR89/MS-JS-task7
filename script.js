const text = "JavaScript does not seem very ease to me"

const words = text.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++){
    if(words[i].length >= 5) {
        words[i] = "LongWord"
    } else {
        words[i] = "ShortWord"
    }
}
console.log(words.join(" "));


const text2 = text.split(" ");
let count = 0;
let i = 0;
while (i < text2.length) {
  if (text2[i].includes("a")) {
    count++;
  }
  i++;
}
console.log(count);
// ეს ნაწილი კარგად ვერ გავიგე


const newText = text.split(" ")
let index = 0;
do {
    console.log(newText[index]);
    index++; 
  } while (index < newText.length);