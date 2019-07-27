; Place to define initialized variables
section .data
	text:	db "GitHub is for everyone", 0xa
	len:	equ $-text

section .text
	global	_start

; Entry point
_start:
	; Start syscall
	mov		rax, 1
	; File descriptor
	mov		rdi, 1
	
	; Load message + length into appropriate registers
	mov		rsi, text
	mov		rdx, len
	
	; Call syscall
	syscall
	
	; Exit
	jmp		.exit

.exit:
	; Exit syscall
	mov		rax, 60
	; Exit code
	mov		rdi, 0
	; Call syscall
	syscall
