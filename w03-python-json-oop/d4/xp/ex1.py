import random
import os

root_dir = os.path.dirname(os.path.abspath(__file__))
file_path = root_dir + '/sowpods.txt'


def get_words(file_path):
    with open(file_path, 'r') as file:
        words = file.read().splitlines()
    return words

def get_random(length, words):
    return ' '.join(random.choices(words, k=length)).lower()

def main():
    try:
        length = int(input("Words in sentence (2 to 20): "))
        
        if length < 2 or length > 20:
            print("Not 2 to 20.")
            return
        
        words = get_words(file_path)
        sentence = get_random(length, words)
        print(f"Random sentence: {sentence}")
    
    except ValueError:
        print("Not integer.")

if __name__ == "__main__":
    main()
