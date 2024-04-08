import os


my_files = ['article1.html', 'article2.html', 'article3.html', 'article4.html', 'article5.html']

my_file = ['article1.html']

#for filename in my_files:
#   print(filename)


# Define the phrases to search for
phrases_to_find = ['phrase1', 'phrase2', 'phrase3']

# Function to search for phrases in a file
def search_phrases_in_file(my_file):
     with open(my_file, 'r') as file:
         content = file.read()
         found_phrases = [phrase for phrase in phrases_to_find if phrase in content]
         return found_phrases

# # Function to process files in a directory
def process_files(directory):
     for filename in os.listdir(directory):
         if filename.endswith(".txt"):
             file_path = os.path.join(directory, filename)
             found_phrases = search_phrases_in_file(file_path)
             if found_phrases:
                 print(f"Found phrases in {filename}: {', '.join(found_phrases)}")

# # Usage
 directory_to_scan = sys.path[0]
 process_files(directory_to_scan)