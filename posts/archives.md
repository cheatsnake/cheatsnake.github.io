---
title: Working with archives
publish_date: 2025-05-26
---

The use of archives in Linux is a common practice. Many programs, modules, entire datasets, media files, etc. are delivered in archived form. Therefore, the skill to work confidently with archives will be a definite plus for any developer. In this post I will try to describe possible scenarios of working with archives briefly and with examples.

## Common Archive Formats

There are several common archive formats that work according to different algorithms and have different compression rates:

| **Extension**     | **Created** | **Compression Strength** | **Common Usage**                            |
| ----------------- | ----------- | ------------------------ | ------------------------------------------- |
| `.tar`            | 1979        | None                     | Bundling files, backups without compression |
| `.zip`            | 1989        | Medium                   | General-purpose archiving, file sharing     |
| `.gz`             | 1992        | Medium                   | Compressing single log or text files        |
| `.tar.gz` `.tgz`  | 1992        | Medium                   | Linux packaging, source code distribution   |
| `.rar`            | 1993        | High                     | Multimedia archives, proprietary use        |
| `.bz2` `.tar.bz2` | 1996        | High                     | Compressing single files, archival          |
| `.7z`             | 1999        | Very High                | Maximum compression, large archives         |
| `.xz` `.tar.xz`   | 2009        | Very High                | Replacement for `.bz2`, very compact        |

## Tape Archive (.tar)

📦 Create a new archive (without compression) with some files and folder inside:

```sh
tar -cf archive.tar file1 file2 dir/
```

📦 Create a compressed archive with files and folders inside:

```sh
tar -czf archive.tar.gz file1 file2 dir/
```

📦 Shorthand with .tgz (same command, just a different extension):

```sh
tar -czf archive.tgz file1 file2 dir/
```

📂 Extract files from archive to specified directory:

```sh
tar -xf archive.tar -C /path/to/extract
```

📂 Extract files from the compressed archive to a specified directory:

```sh
tar -xzf archive.tar.gz -C /path/to/extract
```

📂 Extract .tgz:

```sh
tar -xzf archive.tgz -C /path/to/extract
```

🚩 Flags description:

- `-c`: Create a new archive
- `-f`: File name of the archive
- `-x`: Extract files from an archive
- `-z`: Use gzip compression
- `-t`: List contents of the archive
- `-v`: Shows the files being processed
- `-C`: (uppercase C) Change the directory where the files will be extracted to

## Zip Archive (.zip)

📦 Create a new archive with some files and folder inside:

```sh
zip -r archive.zip file1 file2 dir/
```

📂 Extract files from archive to specified directory:

```sh
unzip archive.zip -d /path/to/extract
```

## Gzip Archive (.gz)

> `.gz` compresses only single files — not folders. To compress multiple files, use it together with `tar`, e.g., `.tar.gz`.

📦 Compress a single file:

```sh
gzip file.txt
```

📂 Decompress a `.gz` file to a current directory:

```sh
gzip -d file.txt.gz
```

## RAR Archive (.rar)

> RAR is a proprietary format. You’ll need to install `rar` (for creating) and `unrar` (for extracting) on most Linux systems.

📦 Create a new .rar archive with files and a folder inside:

```sh
rar a archive.rar file1 file2 dir/
```

📂 Extract files from the archive to a specified directory:

```sh
unrar x archive.rar /path/to/extract/
```

## Bzip2 Archive (.bz2)

> `.bz2` compresses a single file. To compress multiple files or directories, combine it with `tar` (i.e., use `.tar.bz2`).

📦 Compress a single file:

```sh
bzip2 file.txt
```

📂 Decompress a .bz2 file to a current directory:

```sh
bzip2 -d file.txt.bz2
```

## 7-Zip Archive (.7z)

> Requires the `p7zip` package (`p7zip-full` on most distros).

📦 Create a .7z archive with files and folders inside:

```sh
7z a archive.7z file1 file2 dir/
```

📂 Extract files from the archive to a specified directory:

```sh
7z x archive.7z -o/path/to/extract/
```

🚩 Flags description:

- `a`: Add files to archive (used to create)
- `x`: Extract with full directory structure
- `e`: Extract without directory structure (all files to current dir)
- `-o`: Set the output directory for extraction (no space after -o)
- `-p`: Set a password for encryption/decryption (optional)
- `-m0=lzma2`: Specify compression method (LZMA2 is default)

## XZ Archive (.xz)

> `.xz` compresses a single file. To compress folders or multiple files, combine it with `tar` (see `.tar.xz`).

📦 Compress a single file:

```sh
xz file.txt
```

📂 Decompress a .xz file to a specified directory:

```sh
xz -d file.txt.xz
```

🚩 Flags description:

- (no flag): Compress the specified file
- `-d`: Decompress the file (same as unxz)
- `-k`: Keep the original file instead of deleting it after compression/decompression
- `-v`: Verbose output
- `-T`N: Use N threads for compression (e.g., `-T4`)
