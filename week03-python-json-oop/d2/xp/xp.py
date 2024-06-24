# ex1: Pets
# Using this code:
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals
#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())
# class Cat():
#     is_lazy = True
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#     def walk(self):
#         return f'{self.name} is just walking around'
# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, 
#one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value 
#is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


bengal = Bengal("Bengal", 5)
chartreux = Chartreux("Chartreux", 3)
siamese = Siamese("Siamese", 2)

all = [bengal, chartreux, siamese]

sara_pets = Pets(all)

sara_pets.walk()






#ex2 Dogs
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog.
# This method returns a string stating which dog won the fight. 
# The winner should be the dog with the higher run_speed x weight.
# Create 3 dogs and run them through your class.


class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"

dog1 = Dog("Max", 3, 20)
dog2 = Dog("Buddy", 4, 25)
dog3 = Dog("Charlie", 2, 15)

print(dog1.bark())
print(dog2.run_speed())
print(dog3.fight(dog2))





#ex3
# --> dog.py pet_dog.py





#ex4
# Family
# Instructions
# Create a class called Family and implement the following attributes:
# members: list of dictionaries
# last_name : (string)
# Implement the following methods:
# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.
# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]


class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the new arrival!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, is_child: {member['is_child']}")

family = Family("Smith", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

family.born(name='Emily', age=0, gender='Female', is_child=True)

print(f"Is Michael over 18? {family.is_18('Michael')}")

family.family_presentation()






#ex5  TheIncredibles Family
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore 
# the members attributes, will be a list of dictionaries containing the additional keys :
# power and incredible_name. (See Point 4)
# Add a method called use_power, this method should print the power of a member only 
# if they are over 18 years old. If not raise an exception (look up exceptions) which 
# stated they are not over 18 years old.
# Add a method called incredible_presentation which :
# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]
# Call the incredible_presentation method.
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.


class NewFamily:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, **attributes):
        self.members.append(attributes)

    def family_prs(self):
        print(f"Here is our family {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

class TheIncredibles(NewFamily):
    def __init__(self, members):
        super().__init__("Incredibles")
        self.members = members

    def use_power(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                if member['age'] >= 18:
                    print(f"{member['name']} can use power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old.")

    def incredible_prs(self):
        print(f"Here is our powerful family {self.last_name}")
        super().family_prs()

incredibles = TheIncredibles([
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
])

incredibles.incredible_prs()

incredibles.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power')

incredibles.incredible_prs()
