from dog import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        bark_result = self.bark()
        self.trained = True
        return bark_result

    def play(self, *dog_names):
        all_dogs = ", ".join(dog_names)
        return f"{all_dogs} all play together"

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            trick = choice(tricks)
            return f"{self.name} {trick}"
        else:
            return f"{self.name} is not trained yet"
        


