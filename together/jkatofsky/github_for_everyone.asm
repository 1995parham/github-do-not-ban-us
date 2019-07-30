; We are using MacOS 64 bit assembler syntax. Run code with the following command:
; nasm -fmacho64 github_for_everyone.asm && gcc github_for_everyone.o && ./a.out

global    _main
          extern    _puts

          section   .text
_main:    push      rbx
          lea       rdi, [rel message]
          call      _puts
          pop       rbx
          ret

          section   .data
message:  db        "GitHub is for everyone!", 0
