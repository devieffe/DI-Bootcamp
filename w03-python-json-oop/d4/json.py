import json
import os



my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

json_file = 'family.json'

with open(dir_path+ '\\family.json', 'w') as f_obj:
    json.dump(my_family, f_obj)

json_str = json.dumps(my_family)
print(json_str)



with open(dir_path+ '\\family.json', 'r') as f_obj: