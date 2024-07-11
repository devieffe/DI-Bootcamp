import os

file_path = os.path.dirname(os.path.abspath(__file__)) + '/the_stranger.txt'

class Text:
    def __init__(self, text):
        self.text = text.lower()
        self.words = self.text.split()

    def word_frequency(self, word):
        word = word.lower()
        frequency = self.words.count(word)
        if frequency == 0:
            return None
        return frequency

    def most_common_word(self):
        word_counts = {}
        for word in self.words:
            if word in word_counts:
                word_counts[word] += 1
            else:
                word_counts[word] = 1
        most_common = max(word_counts, key=word_counts.get)
        return most_common

    def unique_words(self):
        return list(set(self.words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            text = file.read()
        return cls(text)

# Example usage with a file
text_instance = Text.from_file(file_path)
print("Frequency of 'the':", text_instance.word_frequency('the'))
print("Most common word:", text_instance.most_common_word())
print("Unique words:", text_instance.unique_words())