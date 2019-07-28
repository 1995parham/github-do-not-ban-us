#define STACK_SIZE 327680

.section .text
.global _start
.extern kmain

_start:
    cli
    movl $InitialStack, %esp
    call kmain
    hlt

.section .data

.section .bss
.space STACK_SIZE
InitialStack: