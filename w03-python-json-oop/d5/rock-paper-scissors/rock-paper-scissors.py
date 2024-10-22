from game import Game

def get_user_menu_choice():
    """Display a menu and get the user's choice."""
    print("\nMenu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    
    choice = input("Enter your choice: ").strip()

    while choice not in ['1', '2', '3']:
        print("Invalid choice. Please try again.")
        choice = input("Enter your choice: ").strip()

    return choice

def print_results(results):
    """Print the results of the games played."""
    print("\nGame Results:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thank you for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
        choice = get_user_menu_choice()

        if choice == '1': 
            game = Game()
            result = game.play()

            if result == 'win':
                results['win'] += 1
            elif result == 'loss':
                results['loss'] += 1
            else:
                results['draw'] += 1

        elif choice == '2': 
            print_results(results)

        elif choice == '3':  
            print_results(results)
            break

if __name__ == '__main__':
    main()
