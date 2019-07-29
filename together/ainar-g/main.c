#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
	char *lang = getenv("LANG");
	if (!lang) {
		puts("GitHub is for everyone");
		return 0;
	}

	if (!strcmp(lang, "ru_RU.UTF-8")) {
		puts(u8"GitHub для всех");
	} else if (!strcmp(lang, "de_DE.UTF-8")) {
		puts(u8"GitHub ist für alle da");
	} else if (!strcmp(lang, "eo_XX.UTF-8")) {
		puts(u8"GitHub estas por ĉiuj");
	} else {
		puts("GitHub is for everyone");
	}

	return 0;
}
