// Palindrome Check
// Check if a word/sentence is palindrome ignoring spaces and case.
// "Madam" → true, "Step on no pets" → true

let str = "Step on no pets";
let newStr = str.toLowerCase();

//remove space
let cleanStr = ""
for (const ch of newStr) {
    if (ch !== " ") {
        cleanStr += newStr
    }
}

//reverse
let reversed = ""
for (let i = cleanStr.length-1; i >= 0; i--) {
    reversed += cleanStr[i]  
}

if (cleanStr == reversed) {
    console.log(true);
} else {
    console.log(false); 
}