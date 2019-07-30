; We are using MacOS 64 bit assembler syntax. Run code with the following command:
; nasm -fmacho64 github_for_everyone.asm && gcc github_for_everyone.o && ./a.out

global    _main
          extern    _puts

          section   .text
_main:    push      rbx                     ; Call stack must be aligned
          lea       rdi, [rel message]      ; First argument is address of message
          call      _puts                   ; puts(message)
          pop       rbx                     ; Fix up stack before returning
          ret

          section   .data
message:  db        "GitHub is for everyone!", 0        ; C strings need a zero byte at the end
