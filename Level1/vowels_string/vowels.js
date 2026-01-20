let str = "education"
let vowels = 0;

for (const ch in str) {
    if (str[ch]=='a' || str[ch]=='e' || str[ch]=='i' || str[ch]=='o' || str[ch]=='u') {
        vowels++
    }
}

console.log(vowels);
