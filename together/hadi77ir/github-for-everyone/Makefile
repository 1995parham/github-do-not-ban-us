CC ?= gcc
LD ?= ld
CCPARAMS := -ffreestanding -nostdlib -Wall -Wextra -m32 -march=i686 -I.
LDPARAMS := assets/libgcc.a -nostdlib -melf_i386
QEMU := qemu-system-i386
MKISOFS ?= mkisofs
ISOFILES := github-for-everyone.img \
			assets/syslinux/syslinux.cfg \
			assets/syslinux/isolinux.bin \
			assets/syslinux/ldlinux.c32 \
			assets/syslinux/libcom32.c32 \
			assets/syslinux/mboot.c32 \
			assets/syslinux/pxelinux.0

dist: github-for-everyone.iso

.PHONY: dist qemu clean

qemu: github-for-everyone.iso
	$(QEMU) -cdrom github-for-everyone.iso -display sdl

clean:
	rm -rf temp
	rm -f github-for-everyone.img github-for-everyone.iso main.o loader.o

github-for-everyone.iso: $(ISOFILES)
	@mkdir -p temp/syslinux
	@cp -a assets/syslinux temp/
	@cp -a github-for-everyone.img temp/syslinux/kernel.img
	@$(MKISOFS) -o github-for-everyone.iso -b syslinux/isolinux.bin -c syslinux/boot.cat -no-emul-boot -boot-load-size 4 -boot-info-table temp

github-for-everyone.img: layout.ld loader.o main.o
	$(LD) -T layout.ld -o github-for-everyone.img loader.o main.o $(LDPARAMS)

main.o: main.c
	$(CC) -c $(CCPARAMS) -o main.o main.c

loader.o: loader.S
	$(CC) -c $(CCPARAMS) -o loader.o loader.S