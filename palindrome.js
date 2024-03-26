function palindrome(x){
    let stringx = x.toString();
    let arrayDigits = stringx.split('');
    let reversedArrayDigits = arrayDigits.reverse();
    let reversedStringx = reversedArrayDigits.join('');
    if (x == reversedStringx){
        return true
    }else{
        return false
    }
}
console.log(palindrome("mom"))