#ex1

def display_message():
    print('Learning Python')

display_message()    



#ex2

def favorite_book(title):
    print('One of my fav books is' + title)

favorite_book('Python Basics')



#ex3

def describe_city(city, country):
    print(f'{city} is in {country}')

describe_city('Madrid','Spain')



#ex4

from random import randint

def rand(num):
    randnum = randint(1, 100)
    if num == randnum:
        print('Success!')
    else:
        print(f'Fail with {num} and {randnum}')

rand(10)



#ex5

def make_shirt(size='L', text='I love Python'):
    if size != 'M' or size != 'L':
        text
    print(f'The size of the shirt is {size} and the text is {text}')

make_shirt(size='S',text='Nike')
make_shirt(size='M')
make_shirt()



#6
#Using this list of magician’s names
#magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
#Create a function called show_magicians(), which prints the name of each magician in the list.
#Write a function called make_great() that modifies the original list of magicians by adding 
#the phrase "the Great" to each magician’s name.
#Call the function make_great().
#Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

#def show_magicians(magicians = magician_names):
#    print(magicians)
#show_magicians()

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

show_magicians(magician_names)

def make_great(magicians):
    for i in range(len(magicians)):
        print("Great " + magicians[i])        

make_great(magician_names)




#ex7
#Create a function called get_random_temp().
#This function should return an integer between -10 and 40 degrees (Celsius), 
#selected at random. Test your function to make sure it generates expected results.
#
#Create a function called main().
#Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#Inform the user of the temperature in a friendly message, eg. “The temperature 
#right now is 32 degrees Celsius.”
#
#Let’s add more functionality to the main() function. Write some friendly advice 
#relating to the temperature:
#below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#between 16 and 23
#between 24 and 32
#between 32 and 40
#
#Change the get_random_temp() function:
#Add a parameter to the function, named ‘season’.
#Inside the function, instead of simply generating a random number between -10 and 40, 
#set lower and upper limits based on the season, eg. if season is ‘winter’, 
#temperatures should only fall between -10 and 16.
#Now that we’ve changed get_random_temp(), let’s change the main() function:
#Before calling get_random_temp(), we will need to decide on a season, so that 
#we can call the function correctly. Ask the user to type in a season - ‘summer’, 
#‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
#Use the season as an argument when calling get_random_temp().
#
#Bonus: Give the temperature as a floating-point number instead of an integer.
#Bonus: Instead of asking for the season, ask the user for the number 
#of the month (1 = January, 12 = December). Determine the season according to the month.


def get_random_temp(season):
    if season == 'winter':
        rtemp = randint(-10,10)
    if season == 'spring' or season == 'autumn':
        rtemp = randint(10,20)
    if season == 'summer':
        rtemp = randint(20,40)
    return rtemp

print(get_random_temp('winter'))

def main(temp):
    tempc = int(temp)
    print(f'The temperature right now is {tempc} degrees Celsius.')
    if tempc < 0:
        print('Brrr, that\'s freezing! Wear some extra layers today')
    if tempc >=0 and tempc < 16:
        print('Quite chilly! Don\'t forget your coat')
    if tempc >=16 and tempc < 32:
        print('It\'s a new t-shirt day')
    if tempc >=32 and tempc < 40:
        print('I\'ll stay at home')    


main(get_random_temp('summer'))   

#float......



#ex8
#This project allows users to take a quiz to test their Star Wars knowledge.
#The number of correct/incorrect answers are tracked and the user receives 
#different messages depending on how well they did on the quiz.
#
#Here is an array of dictionaries, containing those questions and answers
#
#Create a function that asks the questions to the user, and check his answers. 
#Track the number of correct, incorrect answers. Create a list of wrong_answers
#Create a function that informs the user of his number of correct/incorrect answers.
#Bonus : display to the user the questions he answered wrong, his answer, 
#and the correct answer.
#If he had more then 3 wrong answers, ask him to play again.


data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quiz(questions):
    corrects = 0
    incorrects = 0
    wrongs = []

    for question_data in questions:
        question = question_data["question"]
        correct_answer = question_data["answer"]
        user_answer = input(question + ": ").strip()

        if user_answer.lower() == correct_answer.lower():
            print("Correct!")
            corrects += 1
        else:
            print("Incorrect!")
            incorrects += 1
            wrongs.append({"question": question, "user_answer": user_answer, "correct_answer": correct_answer})

    return corrects, incorrects, wrongs


def display_results(corrects, incorrects, wrongs):
    print("\nSuccess!\nQuiz Results:")
    print("Correct:", corrects)
    print("Incorrect:", incorrects)

    if incorrects > 0:
        print("\nWrong Answers:")
        for wrong_answer in wrongs:
            print("Question:", wrong_answer["question"])
            print("Your Answer:", wrong_answer["user_answer"])
            print("Correct Answer:", wrong_answer["correct_answer"])
            print()

    if incorrects > 3:
        print("Fail. You had more than 3 wrong answers. Please play again.")
        return False
    else:
        return True


def base():
    data = [
        {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
        {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
        {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
        {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
        {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
        {"question": "What species is Chewbacca?", "answer": "Wookiee"}
    ]

    corrects, incorrects, wrongs = quiz(data)
    play_again = display_results(corrects, incorrects, wrongs)

    while not play_again:
        corrects, incorrects, wrongs = quiz(data)
        play_again = display_results(corrects, incorrects, wrongs)

base()