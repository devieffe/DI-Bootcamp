#words
#user's word : "ppoeemm" ➞ "poem"

word = "ppoemm"

res = []

for i in range(len(word)):
    if word[i-1] != word[i]:
        res.append(word[i])

print(res)

