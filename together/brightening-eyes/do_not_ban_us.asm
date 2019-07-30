global _main
extern _printf

section .text
_main:
    push msg
    call _printf
    add esp, 4
    ret

message:
    db "GitHub is for everyone.", 25, 0
