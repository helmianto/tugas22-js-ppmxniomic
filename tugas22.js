const word = "Saya ingin belajar bersama";
const arrayOfWord = word.split(" ");

arrayOfWord.forEach(function(item, index){
    console.log(`Item : ${item} index ke ${index}`);
});