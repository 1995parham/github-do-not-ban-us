DATA   SEGMENT
PRINT  DB "GitHub is for everyone!", 0AH, 0DH, '$'
DATA   ENDS

STACK  SEGMENT   STACK
       DW  20  DUP(0)
STACK  ENDS

CODE   SEGMENT
ASSUME CS:CODE, DS:DATA, SS:STACK
START:
        MOV AX, DATA                         
        MOV DS, AX
        MOV DX, OFFSET  PRINT
        MOV AH, 09H
        INT 21H
        MOV AH, 4CH
        INT 21H
CODE   ENDS
END    START
