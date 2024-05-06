#ex1 Pets
#Using this code:
# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, 
# one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which 
# value is an instance of the Pet class, and pass the variable all_cats to 
# the new instance.
# Take all the cats for a walk, use the walk method.


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


#new class
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# instances of each cat breed
bengal_cat = Bengal("Bengal", 3)
chartreux_cat = Chartreux("Chartreux", 4)
siamese_cat = Siamese("Siamese", 2)

# all cats
all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Pets instance with all cats
sara_pets = Pets(all_cats)

# all the cats for a walk
sara_pets.walk()



#ex2 Dogs
Create a class called Dog with the following attributes name, age, weight.
Implement the following methods in the Dog class:
bark: returns a string which states: “<dog_name> is barking”.
run_speed: returns the dogs running speed (weight/age*10).
fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

Create 3 dogs and run them through your class.

