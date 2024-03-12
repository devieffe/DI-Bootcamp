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

A__ = [
    ('7','i','i'),
    ('T','s','x'),
    ('h','%','?'),
    ('i',' ','#'),
    ('s','M',' '),
    ('$','a',' '),
    ('$','a',' '),
    ('#','t','%'),
    ('^','r','!')
]

A = '''7ii
Tsx
h%?
i #
sM 
$a 
$a 
#t%
^r!'''


COLUMN = 3
ROWS = 8

rows_str = A.split('\n')
rows = [rows[1:] for row in rows_str]
print(rows)

matrix = [list(row) for row in rows]

transposed_matrix = list(zip(*matrix))
print(transposed_matrix)

print matrix

transposed_message = [''.join(char) for char in transposed_matrix]
print(transposed_message)
dec_message = ''
final_str = dec_message.join(transposed_message)

decrypter_message = ''

char = ''

for chars in final_str:
    if char.isalpha():
        decrypter_message += char
    else:
        decrypter_message += ' '

print(decrypter_message)

dec_message = ' '.join(decrypter_message.split())



for i in range(0, len(A), COLUMN):
    sublist = list(A[i:i+COLUMN])
    matrix.append(sublist)

print(A)    


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



