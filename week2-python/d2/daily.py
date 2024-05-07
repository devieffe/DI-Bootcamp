
#ex1
#Ask the user for a number and a length.
#Create a program that prints a list of multiples of the number 
#until the list length reaches length.


num = int(input("Enter a number: "))
len = int(input("Enter the length of the list: "))

multiples = []
for i in range(1, len + 1):
    multiples.append(num * i)

print("List of multiples:")
print(multiples)



#ex2
#Write a program that asks a string to the user, 
#and display a new string with any duplicate consecutive letters removed.

str = input("String: ")

new_str = ''
prev = ''
for char in str:
    if char != prev:
        new_str += char
    prev = char

print(f"The new string: {new_str}")