#Using the input function, ask the user for a string. The string must be 10 characters long.
#If it’s less than 10 characters, print a message which states “string not long enough”.
#If it’s more than 10 characters, print a message which states “string too long”.
#If it’s 10 characters, print a message which states “perfect string” and continue the exercise.
#
#Then, print the first and last characters of the given text.
#
#Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
#The user enters "HelloWorld"
#Then, you have to construct the string character by character
#H
#He
#Hel
#... etc
#HelloWorld
#
#4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
#Hlrolelwod


str = input('Write 10 characters string: ')

if len(str) == 10:
    print('Perfect string!')
elif len(str) > 10:
    print('The string is longer.')
else:
    print('The string is shorter.')

print(f'First character: {str[0]}, last character: {str[-1]}')



for i in range(0, len(str)):
    j = i + 1
    for j in range(0, j):
        print(f'{str[j]}', end='')
    print()


import random

len = list(str)
random.shuffle(len)
result = ''.join(len)

print(result)