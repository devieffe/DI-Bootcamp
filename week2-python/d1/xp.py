#Exercise 1 : Hello World
#Print the following output in one line of code:
#Hello world
#Hello world
#Hello world
#Hello world

#print('Hello world\nHello world\nHello world\nHello world')
print('Hello world\n' * 4)



#Exercise 2 : Some Math
#Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

a = (99 ^ 3) * 8
print(a)



#Exercise 3 : What Is The Output ?
#Predict the output of the following code snippets:
#>>> 5 < 3
#>>> 3 == 3
#>>> 3 == "3"
#>>> "3" > 3
#>>> "Hello" == "hello"

#False
#True
#False
#error
#False




#Exercise 4 : Your Computer Brand
#Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "Mac Pro"
print(f'I have a {computer_brand} computer')



#Exercise 5 : Your Information
#Create a variable called name, and set it’s value to your name.
#Create a variable called age, and set it’s value to your age.
#Create a variable called shoe_size, and set it’s value to your shoe size.
#Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
#Have your code print the info message.
#Run your code

name = 'Dave'
age = 40
shoe_size = 42
info = name + ' is ' + str(age) + ' but his shoes are ' + str(shoe_size)
print(info) 



#Exercise 6 : A & B
#Create two variables, a and b.
#Each variable value should be a number.
#If a is bigger then b, have your code print Hello World.


a = 10
b = 9
if a > b:
    print('Hello World')



#Exercise 7 : Odd Or Even
#Write code that asks the user for a number and determines whether this number is odd or even.

num = input('Give number: ')

if int(num) == (int(num) // 2) * 2:
    print('It\'s even.')
else: 
    print('It\'s odd.')



#Exercise 8 : What’s Your Name ?
#Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

name = input('What\'s your name? ')
if name == 'Dave':
    print('You\'re my brother!')
else:
    print('Great.')




#Exercise 9 : Tall Enough To Ride A Roller Coaster
#Write code that will ask the user for their height in centimeters.
#If they are over 145cm print a message that states they are tall enough to ride.
#If they are not tall enough print a message that says they need to grow some more to ride.


height = input('What\'s your height in cm? ')

if int(height) > 145:
    print('You\'re enough to ride.')
else: 
    print('Too small to ride.')
