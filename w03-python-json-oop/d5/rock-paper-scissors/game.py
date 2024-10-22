import random

class Game:
    def get_user_item(self):
        """Ask the user to select rock, paper, or scissors."""
        options = ['rock', 'paper', 'scissors']
        user_input = None

        while user_input not in options:
            user_input = input("Please select (rock, paper, scissors): ").lower().strip()
            if user_input not in options:
                print("Invalid choice. Please try again.")

        return user_input

    def get_computer_item(self):
        """Randomly select rock, paper, or scissors for the computer."""
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        """Determine the result of the game."""
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or \
             (user_item == 'scissors' and computer_item == 'paper') or \
             (user_item == 'paper' and computer_item == 'rock'):
            return 'win'
        else:
            return 'loss'

    def play(self):
        """Play a single game of rock-paper-scissors."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You selected {user_item}. The computer selected {computer_item}.")
        if result == 'win':
            print("You win!")
        elif result == 'loss':
            print("You lose!")
        else:
            print("It's a draw!")

        return result
