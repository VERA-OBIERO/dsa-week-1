def palindrome(x):
    stringx = str(x)
    reversed_stringx = stringx[::-1]
    if stringx == reversed_stringx:
        return True
    else:
        return False

#print(palindrome("mom"))
print(palindrome(-121))

