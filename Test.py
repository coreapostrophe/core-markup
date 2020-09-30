# import random

# mylist = ["apple", "banana", "cherry"]

# print(random.choices(mylist, weights = [1, 1, 1], k = 1))


# test = [1]*10

# print(test)

# def haha(*args):
#     print(args)

# haha("lol","lmaop")

import textwrap 
  
value = """This function wraps the input paragraph such that each line 
in the paragraph is at most width characters long. The wrap method 
returns a list of output lines. The returned list 
is empty if the wrapped 
output has no content."""
  
# Wrap this text. 
wrapper = textwrap.TextWrapper(width=5) 
  
word_list = wrapper.wrap(text=value) 
  
# Print each line. 
for element in word_list: 
    print(element) 