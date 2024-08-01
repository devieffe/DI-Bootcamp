# 'decrypt' a matrix string

#    7ii
#    Tsx
#    h%?
#    i #
#    sM 
#    $a 
#    #t%
#    ^r!

#To decrypt the matrix, Neo reads each column from top to bottom, 
#starting from the leftmost column, selecting only the alpha characters 
#and connecting them. Then he replaces every group of symbols between 
#two alpha characters by a space.
#Using his technique, try to decode this matrix.

#Hints:
# lists for storing data
# Loops for going through the data
# if/else statements to check the data
# String for the output of the message

#A__ = [
#    ('7','i','i'),
#    ('T','s','x'),
#    ('h','%','?'),
#    ('i',' ','#'),
#    ('s','M',' '),
#    ('$','a',' '),
#    ('$','a',' '),
#    ('#','t','%'),
#    ('^','r','!')
#]

#for i in len(range(A)):
#    print(A[i])

#x = A[0]

#print(x[0])

#print("A =", A) 

#print("A[1] =", A[1])      # 2nd row
#A[1] = [-5, 8, 9, 0]

#print("A[1][2] =", A[1][2])   # 3rd element of 2nd row
#A[1][2] = 9

#print("A[0][-1] =", A[0][-1])   # Last element of 1st Row
#A[0][-1] = 12

#column = [];        # empty list
#for row in A:
#  column.append(row[2])   

#print("3rd column =", column)
#3rd column = [5, 9, 11]

# Given matrix string
A_str = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

rows = A_str.strip().split("\n")

cols = max(len(row) for row in rows)

matrix = [list(row.ljust(cols)) for row in rows]

print(matrix)

row = 0
col = 0

decrypted_message = ""

for col in range(cols):
    in_group = False
    for row in range(len(matrix)):
        char = matrix[row][col]
        if char.isalpha():
            decrypted_message += char
            in_group = True
        elif in_group:
            decrypted_message += " "
            in_group = False


print(f"Message: {decrypted_message}")

