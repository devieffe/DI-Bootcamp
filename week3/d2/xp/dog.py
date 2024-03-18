#ex3 Dogs Domesticated
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean 
# and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True
# play: takes a parameter which value is a few names of other Dog instances (use *args). 
# The method should print the following string: “dog_names all play together”.
# do_a_trick: If the dog is trained the method should print one of the following 
# sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.


from random import choice

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


from pet_dog import PetDog

pet_dog = PetDog("Buddy", 5, 30)
print(pet_dog.train())
print(pet_dog.play("Max", "Charlie"))
print(pet_dog.do_a_trick())