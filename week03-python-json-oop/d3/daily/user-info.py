# Information From The User
# Notice : solve this exercise using a lambda function.
# Ask a user for the following inputs 5 times:
# Name (string)
# Age (int)
# Score (int)
# Build a list of tuples using these inputs, each tuple should contain a name, age and score.
# Sort the list by the following priority Name > Age > Score.
# If the following tuples are given as input to the script:
# Tom,19,80
# John,20,90
# Jony,17,91
# Jony,17,93
# Json,21,85
# Then, the output of the program should be:
# [('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]
# Note : The lambda function will not print but sort

user_data = []

for _ in range(5):
    name = input("Name: ")
    age = input("Age: ")
    score = input("Score: ")
    user_data.append((name, age, score))
    print("\n")

sorted_data = sorted(user_data, key=lambda x: (x[0], int(x[1]), int(x[2])))

print(sorted_data)