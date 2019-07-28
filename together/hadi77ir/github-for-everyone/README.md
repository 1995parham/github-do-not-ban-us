# Github for Everyone Simple Kernel

## Building

To build it, you need to have `cdrtools` (`mkisofs`), `gcc`, `ld` and `binutils` installed.
```
make dist   # creates github-for-everyone.iso bootable
```

## Running

You can use any x86-compatible emulator or virtual machine, such as VirtualBox or Bochs to boot the resulting ISO.

If you have `qemu` in your PATH, simply execute the following:
```
make qemu
```


## Notes

Some precompiled binaries are required by this piece of code to properly
compile and execute and are included in the "assets" folder:

- libgcc.a from precompiled GCC 6.2.0 i686-elf toolchain (https://github.com/rm-hull/barebones-toolchain)
- SYSLINUX 6.03 official binaries, under GPLv2

## License

MIT