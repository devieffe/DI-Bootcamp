# anagram_checker.py

class AnagramChecker:
    def __init__(self, word_list_file):
        # Load the word list file into a list of words
        with open(word_list_file, 'r') as f:
            self.words = [line.strip().lower() for line in f.readlines()]

    def is_valid_word(self, word):
        """Checks if the word is valid."""
        word = word.lower()
        return word in self.words

    def is_anagram(self, word1, word2):
        """Returns True if word1 and word2 are anagrams, otherwise False."""
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        """Finds all anagrams for the given word."""
        word = word.lower()
        anagrams = [w for w in self.words if self.is_anagram(word, w) and w != word]
        return anagrams
