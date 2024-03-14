#ex1
#Create a set called my_fav_numbers with all your favorites numbers.
#Add two new numbers to the set.
#Remove the last number.
#Create a set called friend_fav_numbers with your friend’s favorites numbers.
#Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


my_fav_num = {7, 21, 42, 3}

my_fav_num.add(8)
my_fav_num.add(13)

my_fav_num.remove(13)

friend_fav_num = {1, 2, 3, 4, 5}

our_fav_num = my_fav_num.union(friend_fav_num)

print(our_fav_num)



#ex2
#Given a tuple which value is integers, is it possible to add more integers to the tuple?

my_tuple = (1, 2, 3, 4, 5)
# Adding more integers to the tuple by creating a new tuple
new_tuple = my_tuple + (6, 7, 8)
print(new_tuple)




#ex3
#Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#Remove “Banana” from the list.
#Remove “Blueberries” from the list.
#Add “Kiwi” to the end of the list.
#Add “Apples” to the beginning of the list.
#Count how many apples are in the basket.
#Empty the basket.
#Print(basket)


basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

apple_count = basket.count("Apples")

basket.clear()

print(basket)




#ex4
#Recap – What is a float? What is the difference between an integer and a float?
#Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#Can you think of another way to generate a sequence of floats?

sequence = []
for i in range(1, 6):
    sequence.append(i + 0.5)
    sequence.append(i)

print(sequence)


sequence = [i + 0.5 if i % 2 != 0 else i for i in range(1, 6)]

print(sequence)



#ex5
#Use a for loop to print all numbers from 1 to 20, inclusive.
#Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.


print("From 1 to 20:")

for i in range(1, 21):
    print(i)

print("\nWith even index from 1 to 20:")
for i in range(1, 21):
    if i % 2 == 0:
        print(i)



#ex6
#Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
        

name = 'Dave'

while True:
    iname = input('Name : ')
    if iname == name:
        break



#ex7
#Ask the user to input their favorite fruit(s) (one or several fruits).
#Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#Now that we have a list of fruits, ask the user to input a name of any fruit.
#If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


fav_fruits_input = input("Enter your favorite fruits (with spaces): ")

fav_fruits = fav_fruits_input.split()

fruit = input("Fruit: ")

if fruit in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy!")



#ex8
#Write a loop that asks a user to enter a series of pizza toppings, 
#when the user inputs ‘quit’ stop asking for toppings.
#As they enter each topping, print a message saying you’ll add that topping to their pizza.
#Upon exiting the loop print all the toppings on the pizza pie and what the 
#total price is (10 + 2.5 for each topping).
    

toppings = []
total_price = 10

while True:
    topping = input("Enter a topping to add to your pizza (or 'quit'): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    total_price += 2.5
    print(f"Adding {topping}...")

print("\nToppings:")
for topping in toppings:
    print(f"- {topping}")

print(f"\nTotal price for your pizza: ${total_price}")



#ex9
#A movie theater charges different ticket prices depending on a person’s age.
#if a person is under the age of 3, the ticket is free.
#if they are between 3 and 12, the ticket is $10.
#if they are over the age of 12, the ticket is $15.
#Ask a family the age of each person who wants a ticket.
#Store the total cost of all the family’s tickets and print it out.
#A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#At the end, print the final list.


ages = []
while True:
    age_input = input("Age (or 'done' if finished): ")
    if age_input.lower() == 'done':
        break
    age = int(age_input)
    ages.append(age)

total = 0
for age in ages:
    if age < 3:
        ticket_cost = 0
    elif 3 <= age <= 12:
        ticket_cost = 10
    else:
        ticket_cost = 15
    total += ticket_cost

print(f"Total: ${total}")

teenagers = ["Anne", "Paul", "Charlie", "David", "Helga"]

allowed = []
for teen in teenagers:
    age = int(input(f"Enter {teen}'s age: "))
    if 16 <= age <= 21:
        allowed.append(teen)

print("Approved: ")
print(allowed)



#ex10
#Using the list below :
#sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
#The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
#We need to prepare the orders of the clients:
#Create an empty list called finished_sandwiches.
#One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
#After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
#I made your tuna sandwich
#I made your avocado sandwich
#I made your egg sandwich
#I made your chicken sandwich


orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in orders:
    orders.remove("Pastrami sandwich")

finished = []
while orders:
    sandwich = orders.pop(0)
    finished.append(sandwich)
    print(f"I made your {sandwich.lower()}")

print("\nSandwiches:")
for sandwich in finished:
    print(sandwich)
