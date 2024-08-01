import json
import os

root_dir = os.path.dirname(os.path.abspath(__file__))

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data['company']['employee']['payable']['salary']
print("Salary: ", salary)

data['company']['employee']['birth_date'] = "1990-01-01"

with open(root_dir + '/modified_sample.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)