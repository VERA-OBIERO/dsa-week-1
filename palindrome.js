x=12345;
function palindrome(x){
    let stringx = x.toString();
    let arrayDigits = stringx.split('');
    let reversedArrayDigits = arrayDigits.reverse();
    let reversedStringx = reversedArrayDigits.join('');
    let reversedx = parseInt(reversedStringx, 10);
    return reversedx
}
console.log(palindrome(x))