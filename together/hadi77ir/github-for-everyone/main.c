#define VGA_MEM_START 0xB8000

static inline void putc(char c, int pos){
    char* p = VGA_MEM_START + (pos * 2);
    *p = c;
    *(p+1) = 0x07;
}

void kmain(void)
{
    int i;
    for (i = 0; i < 80*25; i++)
    {
        putc(' ', i);
    }
    
    const char txt[] = "Github for Everyone";
    
    // print at the middle of our screen
    i = 12 * 80 + 40 - sizeof(txt)/2;
    for (char* cur = txt; *cur; cur++)
    {
        putc(*cur, i++);
    }

    while(1);
}