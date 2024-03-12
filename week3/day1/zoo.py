class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, *new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        print(self.animals)

    def sort_animals(self):
        self.animals.sort()
        groups = []
        counter = 1
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in groups:
                groups[first_letter] = [animal]
            else:
                groups[first_letter].append(animal)
        return groups
    

ramatgan_safari = Zoo('Safari Ramat Gan')
ramatgan_safari.addanimals('Turtle', 'Elephant', 'Zebra')
print(ramat_gan_safari.sort_animals())    