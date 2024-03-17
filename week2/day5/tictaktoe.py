
#Create a TicTacToe game in python, where two users can play together.
#The game is played on a grid that’s 3 squares by 3 squares.
#Players take turns putting their marks (O or X) in empty squares.
#The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
#When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
#Hint
#To do this project, you basically need to create four functions:
#display_board() – To display the Tic Tac Toe board (GUI).
#player_input(player) – To get the position from the player.
#check_win() – To check whether there is a winner or not.
#play() – The main function, which calls all the functions created above.
#Note: The 4 functions above are just an example. You can implement many more helper 
#functions or choose a completely different appoach if you want.
#Tips : Consider The Following:
#What functionality will need to accur every turn to make this program work?
#After contemplating the question above, think about splitting your code into smaller pieces (functions).
#Remember to follow the single responsibility principle! each function should do one thing and do it well!


def display_board(board):
    for row in board:
        print("|".join(row))
        print("-" * 5)

def player_input(player):
    position = input(f"Player {player}, enter like row,column: ")
    row, col = position.split(",")
    return int(row) - 1, int(col) - 1

def check_win(board, player):
    for i in range(3):
        if all(board[i][j] == player for j in range(3)) or all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    current_player = 0

    display_board(board)
    for _ in range(9):
        row, col = player_input(players[current_player])
        if board[row][col] != " ":
            print("Position already taken.")
            continue
        board[row][col] = players[current_player]
        display_board(board)
        if check_win(board, players[current_player]):
            print(f"{players[current_player]} wins!")
            break
        current_player = (current_player + 1) % 2
    else:
        print("It's a tie.")

play()
