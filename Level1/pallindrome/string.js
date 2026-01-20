let str = "madam"
let str1 = ""
let str2 = ""
isPallindrome = true
let mid = str.length/2

for (let i = 0; i < mid-1; i++) {
     str1 += str[i]  
}
//  console.log(str1);

for (let i = str.length-1; i > mid; i--) {
    str2 += str[i]    
}
//   console.log(str2);

if (str1 == str2) {
    console.log(str, "is pallindrome");
    console.log(isPallindrome);
} else isPallindrome = false





