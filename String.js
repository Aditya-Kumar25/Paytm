// let s = "asdfghjkl"

// function len(str){
//     let i=0;
//     while(str[i])
//     {
//         i++;
//     }
//     console.log(i);
// }
// len(s)

let str = "madam"
let rev = ""

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i]
}
console.log(rev)
if (str === rev) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}