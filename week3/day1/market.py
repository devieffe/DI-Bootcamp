#Daily challenge mcdonalds
            

class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, a=1):
        if animal in self.animals:
            self.animals[animal] += a
        else:
            self.animals[animal] = a

    def get_info(self):
        info = f'{self.name}\'s farm\n\n'
        for animal, a in self.animals.items():
            info += f'{animal} : {a}\n'
        info += '\n\tE-I-E-I-0!'
        return info


macdonald = Farm('McDonald')
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())


