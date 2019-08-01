ENCODDE = '''
result = []
Freedom = sum(map(lambda x:ord(x), [char for char in "FREE"])) - sum(map(lambda x:ord(x), [char for char in "DOM"]))

for char in map(lambda x: ord(x), "GitHub is for everyone"):
    result.append((5 * char) - Free)

text = []
for char in result:
    text.append(chr(char))
Message = ''.join(text)
'''

# -- Decode --

# First, we've got a meaningless message.
Message = u'ġǋȂǆȇƨ^ǋǽ^ƼǩǸ^ƷȌƷǸțǩǤƷ'
# With Freedom, 
Freedom = sum(map(lambda x:ord(x), [char for char in "FREE"])) - sum(map(lambda x:ord(x), [char for char in "DOM"]))
# We shall decode it.
print(''.join(list(map(lambda x: chr(int((ord(x) + Freedom) / 5)), Message))))
# Build software better, TOGETHER.
