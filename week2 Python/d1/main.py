#ex0 Hello, world

my_name = "Dave"
my_age = "25"

print("I'm " + my_name + " and I'm " + my_age)



#ex1

print(int(my_age) + 123879) 



#ex2

first_name = "dave"
last_name = "yofi"

print(first_name + " " + last_name)



#ex3

age = input("How old are you? ")

print(f"You are {age} years old")



#ex4 ??

num = input("A number from 1 to 100 pls: ")


if int(num) % 3 and int(num) % 5 is int:
    print("FizzBuzz")
if int(num) % 3 is int:
    print("Fizz")  
elif int(num) % 5 is int:
    print("Buzz")     







#functions

#map, filter, zip, reduce


my_list1 = [1,2,3]
my_list2 = [10,20,30]

def x2(i):
    return i*2
print(list(map(x2, my_list1)))


def odd(i):
    return i % 2 != 0
print(list(filter(odd, my_list1)))


print(list(zip(my_list1, my_list2)))


from functools import reduce

def acc(a, i):
    return a + i

print(reduce(acc, my_list1, 0))



#list unpacking

a,b,c,*x,d = [1,2,3,4,5,6,7,8,9]

print(a)
print(b)
print(c)
print(x)
print(d)




#list, set, dictionary

word = [char for char in 'hello']
nums = [num for num in range(0,11)]

print(word)
print(nums)




#ex10 sanswitch

#orders = ["Tuna", "Pastrama", "Avocado", "Veg"]
#finish = []

#while orders != []:
#    order1 = orders[0]
#    if order1 != "Pastrama":
#        finish.append(order1)
#    orders.pop(0)
#print(finish)       
#print(orders)     


