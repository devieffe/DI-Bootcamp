#ex1
#Challenge 1 : Sorting
#Instructions
#Write a program that accepts a comma separated sequence of words as input and 
#prints the words in a comma-separated sequence after sorting them alphabetically.
#Use List Comprehension
#Example:
#Suppose the following input is supplied to the program: without,hello,bag,world
#Then, the output should be: bag,hello,without,world


words_sequence = input("Enter sequence of words with \",\": ")

words = [word.strip() for word in words_sequence.split(",")]

sorted_words = sorted(words)

print(",".join(sorted_words))




#ex2
#Challenge 2 : Longest Word
#Instructions
#Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
#Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
#Examples
#longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
#longest_word("A thing of beauty is a joy forever.") ➞ "forever."
#longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"


def longest_word(sentence):
    words = sentence.split()
    longest = ""
    xlen = 0
    for word in words:
        clean_word = "".join(char for char in word if char.isalpha())
        if len(clean_word) > xlen:
            longest = word
            xlen = len(clean_word)
    return longest

print(longest_word("Margaret's toy is a pretty doll.")) 
print(longest_word("A thing of beauty is a joy forever.")) 
print(longest_word("Forgetfulness is by all means powerless!"))