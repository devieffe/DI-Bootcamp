#ex1

def display_message():
    print('Learning Python')

display_message()    



#ex2

def favorite_book(title):
    print('One of my fav books is' + title)

favorite_book('Python Basics')



#ex3

def describe_city(city, country):
    print(f'{city} is in {country}')

describe_city('Madrid','Spain')



#ex4
#Create a function that accepts a number between 1 and 100 and generates another 
#number randomly between 1 and 100. Use the random module.
#Compare the two numbers, if it’s the same number, display a success message, 
#otherwise show a fail message and display both numbers.

from random import randint

def rand(num):
    randnum = randint(1, 100)
    if num == randnum:
        print('Success!')
    else:
        print(f'Fail with {num} and {randnum}')

rand(10)            