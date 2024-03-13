#Exercise 1 : Hello World-I Love Python
#Print the following output in one line of code:

print('Hello world\n' * 4 + 'I love python\n' * 4)


#Exercise 2 : What Is The Season ?
#Ask the user to input a month (1 to 12).
#Display the season of the month received :
#Spring runs from March (3) to May (5)
#Summer runs from June (6) to August (8)
#Autumn runs from September (9) to November (11)
#Winter runs from December (12) to February (2)


month = input('Month 1 to 12 pls: ')

if 2 < int(month) < 6:
    print('It\'s spring.')
if 5 < int(month) < 9:
    print('It\'s summer.')
if 8 < int(month) < 12:
    print('It\'s autumn.')
if 11 < int(month) < 2:
    print('It\'s winter.')

