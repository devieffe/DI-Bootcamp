# Daily Challenge: Translator
# Consider this list
# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module. 
# Take a look at the googletrans module


from googletrans import Translator

translator = Translator()

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

translations = {}

for word in french_words:
    translation = translator.translate(word, src='fr', dest='en')
    translations[word] = translation.text

print(translations)