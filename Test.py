import random

mylist = ["apple", "banana", "cherry"]

print(random.choices(mylist, weights = [10, 0, 0], k = 14))