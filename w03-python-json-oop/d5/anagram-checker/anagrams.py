# anagrams.py

from anagram_checker import AnagramChecker

def main():
    word_list_file = 'words.txt'  # Ensure this file exists with a list of valid words
    checker = AnagramChecker(word_list_file)

    while True:
        print("\n--- Anagram Checker ---")
        print("1. Enter a word")
        print("2. Exit")
        choice = input("Choose an option: ")

        if choice == '2':
            print("Goodbye!")
            break

        elif choice == '1':
            user_input = input("Enter a word: ").strip()

            # Validate input
            if len(user_input.split()) > 1:
                print("Error: Please enter only one word.")
                continue
            if not user_input.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue

            # Check if word is valid
            if checker.is_valid_word(user_input):
                print(f"YOUR WORD: \"{user_input.upper()}\"")
                print("This is a valid English word.")
                
                # Get and print anagrams
                anagrams = checker.get_anagrams(user_input)
                if anagrams:
                    print(f"Anagrams for your word: {', '.join(anagrams)}.")
                else:
                    print("No anagrams found.")
            else:
                print(f"'{user_input}' is not a valid English word.")

if __name__ == '__main__':
    main()
