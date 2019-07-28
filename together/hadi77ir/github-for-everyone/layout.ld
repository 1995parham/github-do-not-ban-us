/* Magic number: multiboot 1 */
MB_MAGIC = 0x1badb002;
MB_FLAGS = 0x0;

OUTPUT_FORMAT(elf32-i386)
ENTRY(_start)
SECTIONS
 {
   . = 0x100000;
   .boot : {
      header_start = .;

      /* Magic number */
      LONG(MB_MAGIC)
      /* Flags */
      LONG(MB_FLAGS)
      /* Checksum */
      LONG(0x100000000 - (MB_MAGIC + (header_end - header_start)))

      /* -- a.out load info -- */
      /* Header Address */
      LONG(0)
      /* Load Address */
      LONG(0)
      /* Load End Address */
      LONG(0)
      /* BSS End Address */
      LONG(0)
      /* Entry Address */
      LONG(0)

      /* -- Video info -- */
      /* Mode Type */
      LONG(0)
      /* Width */
      LONG(0)
      /* Height */
      LONG(0)
      /* Depth */
      LONG(0)

      header_end = .;
   }
   .text : { *(.text) }
   .data : { *(.data) }
   .bss  : { *(.bss)  }
 }
