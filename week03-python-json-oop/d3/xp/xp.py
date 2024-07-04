# ex 1: Currencies
# Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
#     #Your code starts HERE
# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)
# >>> str(c1)
# '5 dollars'
# >>> int(c1)
# 5
# >>> repr(c1)
# '5 dollars'
# >>> c1 + 5
# 10
# >>> c1 + c2
# 15
# >>> c1 
# 5 dollars
# >>> c1 += 5
# >>> c1
# 10 dollars
# >>> c1 += c2
# >>> c1
# 20 dollars
# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, int):
            return Currency(self.currency, self.amount + other)

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1)) 
print(int(c1))  
print(repr(c1)) 
print(c1 + 5) 
print(c1 + c2) 
print(c1) 
c1 += 5
print(c1) 
c1 += c2
print(c1) 

try:
    print(c1 + c3)  
except TypeError as e:
    print(e) 




# ex 2: Import
# Instructions
# In a file named func.py create a function that sum 2 numbers, and prints the result
# In a file named exercise_one.py import the function and call it to print the result
# Hint: You can use the the following syntaxes:
# import module_name 
# OR 
# from module_name import function_name 
# OR 
# from module_name import function_name as fn 
# OR
# import module_name as mn

import exercise_one

print(exercise_one)




# ex 3: String Module
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower 
# case letters only. No numbers and a special symbol.
# Hint: use the string module

import random
import string

def gen_rand_str(length=5):
    letters = string.ascii_letters
    rand_str = ''.join(random.choice(letters) for _ in range(length))
    return rand_str

rand_str = gen_rand_str()

print(rand_str)



# ex 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now 
# until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).


from datetime import datetime

def time_jan1():
    now = datetime.now()
    
    the_year = now.year + 1
    the_date = datetime(the_year, 1, 1)
    
    time_diff = the_date - now
    
    days = time_diff.days
    seconds = time_diff.seconds
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    
    print(f"Till Jan 1st: {days} days and {hours:02}:{minutes:02}:{seconds:02} hrs.")

time_jan1()



# ex 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument 
# (in the format of your choice), then displays a message stating how many 
# minutes the user lived in his life.

from datetime import datetime

def mins_live(birthdate, date_format="%Y-%m-%d"):

    birthdate = datetime.strptime(birthdate, date_format)
    
    now = datetime.now()
    
    time_diff = now - birthdate
    
    mins_format = time_diff.total_seconds() / 60
    
    print(f"Lived approx since {birthdate}: {int(mins_format)} minutes.")


birthdate = "1888-01-01"

mins_live(birthdate)




# ex 7 : Faker Module
# Install the faker module, and take a look at the documentation and learn 
# how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. 
# Each user has the following keys: name, adress, langage_code. 
# Use faker to populate them with fake data.

from faker import Faker

fake = Faker()

users = []

def add_user(all_users_list):
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    all_users_list.append(user)

for _ in range(5):
    add_user(users)

for user in users:
    print(user)
