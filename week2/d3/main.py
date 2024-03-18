
user = {
    'name' : 'John',
    'age' : 68,
    'married' : True,
    'email' : 'jogn@mail.net',
    'address' : 'Tel Aviv',
    'pets' : ['Caramel', 'Info'],
    'family' : {
        'name' : 'Ana',
        'rel' : 'wife',
        'age' : 70
    }
}

print(user['name'])


#sample product list
items = [
    {
        'name' : 'T-shirt',
        'color' : 'Red',
        'size' : 'L',
        'price' : 200
    },
    {
        'name' : 'Jeans',
        'color' : 'Blue',
        'size' : 'M',
        'price' : 450
    },
    {
        'name' : 'Sweater',
        'color' : 'Grey',
        'size' : 'M',
        'price' : 600
    }        
]


#access inner value
sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

#print(sample_dict['class['student'marks['history']']'])



#remove keys
sample_dict = {
  'name': 'Kelly',
  'age': 25,
  'salary': 8000,
  'city': 'New york'
}

keys_to_remove = ['name', 'salary']

for key in keys_to_remove:
    del simple_dictp[key]


print (sample_dict())







#zip



#ex11