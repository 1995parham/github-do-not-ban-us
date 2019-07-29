.POSIX:

.DEFAULT: main.bin

CC = clang
CFLAGS = \
	-O2\
	-Wall\
	-Werror\
	-Wextra\
	-Wcast-align\
	-Wstrict-aliasing\
	-fstrict-aliasing\
	-g3\
	-static\
	-std=c11\

main.bin: main.c
	$(CC) $(CFLAGS) -o $@ $<
