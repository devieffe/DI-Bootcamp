#Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
#Display a little cake as seen below:
#       ___iiiii___
#      |:H:a:p:p:y:|
#    __|___________|__
#   |^^^^^^^^^^^^^^^^^|
#   |:B:i:r:t:h:d:a:y:|
#   |                 |
#   ~~~~~~~~~~~~~~~~~~~
#
#The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.
#Bonus : If they were born on a leap year, display two cakes !


birth = input("Enter birthdate DD/MM/YYYY: ")

year = int(birth.split("/")[-1])

is_leap_year = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

age = 2024 - year
last_digit = age % 10
num_candles = last_digit if last_digit > 0 else 1

cake = f"""
       ___{'i' * num_candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""

print(cake)

if is_leap_year:
    print("Leap year, another cake!")
    print(cake)