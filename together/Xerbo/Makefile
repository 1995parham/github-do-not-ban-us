INPUT="ForEveryone.asm"
OBJECT="/tmp/ForEveryone.o"
OUTPUT="ForEveryone"

all:
	nasm -g -f elf64 -o $(OBJECT) $(INPUT)
	ld -o $(OUTPUT) $(OBJECT)

run:
	nasm -g -f elf64 -o $(OBJECT) $(INPUT)
	ld -o $(OUTPUT) $(OBJECT)
	./$(OUTPUT)
