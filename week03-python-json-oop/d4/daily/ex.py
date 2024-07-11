# The goal of the exercise is to create a class that will help you analyze 
# a specific text. A text can be just a simple string, like “Today, is a happy day” 
# or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes 
# cost as much as a good house.”
# Create a class called Text that takes a string as an argument and store the 
# text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code
# Implement the following methods:
# a method to return the frequency of a word in the text 
# (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

# Part II
# Then, we will analyze a text coming from an external text file. 
# Download the_stranger.txt file.
# Implement a classmethod that returns a Text instance but with a text file:
# >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
# Now, use the provided the_stranger.txt file and try using 
# the class you created above.

# Bonus:
# Create a class called TextModification that inherits from Text.
# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words 
# (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements 
# those methods as static methods in the Text class.
# Note: Feel free to implement/create any attribute, method 
# or function needed to make this work, be creative :)



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

# Example usage
text = Text("A good book would sometimes cost as much as a good house.")
print("Frequency of 'good':", text.word_frequency('good'))
print("Most common word:", text.most_common_word())
print("Unique words:", text.unique_words())



import string
import re
from nltk.corpus import stopwords # type: ignore

class TextModification(Text):
    def remove_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    def remove_stop_words(self):
        stop_words = set(stopwords.words('english'))
        filtered_words = [word for word in self.words if word not in stop_words]
        return ' '.join(filtered_words)

    def remove_special_characters(self):
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)

# Example usage
text_mod = TextModification("A good book would sometimes cost as much as a good house.")
print("Text without punctuation:", text_mod.remove_punctuation())
print("Text without stop-words:", text_mod.remove_stop_words())
print("Text without special characters:", text_mod.remove_special_characters())

# Example usage with a file
text_instance_mod = TextModification.from_file('the_stranger.txt')
print("Text without punctuation:", text_instance_mod.remove_punctuation())
print("Text without stop-words:", text_instance_mod.remove_stop_words())
print("Text without special characters:", text_instance_mod.remove_special_characters())