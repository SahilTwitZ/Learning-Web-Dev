# Useful Terminal Commands for Full Stack Development

This document lists essential terminal commands commonly used in full-stack development, with examples for clarity.

## 1. List Files and Directories

```bash
ls
```

- **Description:** Lists all files and directories in the current directory.
- **Example:**

    ```bash
    $ ls
    Documents  Downloads  Music  Pictures  Videos
    ```

## 2. Change Directory

```bash
cd <directory_name>
```

- **Description:** Navigates into the specified directory.
- **Example:**

    ```bash
    cd Documents
    ```

## 3. Go Back to User's Home Directory

```bash
cd ~
```

- **Description:** Changes the current directory to the user's home directory.
- **Example:**

    ```bash
    cd ~
    ```

## 4. Go Up One Directory

```bash
cd ..
```

- **Description:** Moves up one level in the directory structure.
- **Example:**

    ```bash
    cd ..
    ```

## 5. Move Cursor to Change Written Path/Code

```bash
Alt + ← or Alt + →
```

- **Description:** Moves the cursor left or right by one word.
- **Example:** Press `Alt + ←` to move the cursor to the left.

## 6. Clear the Written Path/Code

```bash
Ctrl + U
```

- **Description:** Clears the line from the cursor to the beginning.
- **Example:** Press `Ctrl + U` when you want to erase the current input.

## 7. Make a New Directory

```bash
mkdir <directory_name>
```

- **Description:** Creates a new directory with the specified name.
- **Example:**

    ```bash
    mkdir new_folder
    ```

## 8. Create a New File Inside a Folder

```bash
touch <file_name>
```

- **Description:** Creates a new empty file with the specified name.
- **Example:**

    ```bash
    touch new_folder/example.txt
    ```

## 9. Open a File with Default Application

```bash
open <file_name>
```

- **Description:** Opens a file using the system's default application.
- **Example:**

    ```bash
    open example.txt
    ```

## 10. Open a File with Defined Application

```bash
open -a <application_name> <file_name>
```

- **Description:** Opens a file with a specified application.
- **Example:**

    ```bash
    open -a "TextEdit" example.txt
    ```

## 11. Delete a File from a Folder

```bash
rm <file_name>
```

- **Description:** Deletes the specified file.
- **Example:**

    ```bash
    rm example.txt
    ```

## 12. Delete All Files from a Folder

```bash
rm *
```

- **Description:** Deletes all files in the current directory (use with caution).
- **Example:**

    ```bash
    rm *
    ```

## 13. Check Current Directory

```bash
pwd
```

- **Description:** Prints the current working directory path.
- **Example:**

    ```bash
    $ pwd
    /Users/username/Documents
    ```

## 14. Delete a Directory

```bash
rm -r <directory_name>
```

- **Description:** Recursively deletes a directory and its contents.
- **Example:**

    ```bash
    rm -r new_folder
    ```

## Additional Useful Commands

### 15. Copy Files

```bash
cp <source> <destination>
```

- **Description:** Copies a file from the source to the destination.
- **Example:**

    ```bash
    cp example.txt backup_example.txt
    ```

### 16. Move or Rename Files

```bash
mv <source> <destination>
```

- **Description:** Moves or renames a file or directory.
- **Example:**

    ```bash
    mv old_name.txt new_name.txt
    ```

### 17. View File Contents

```bash
cat <file_name>
```

- **Description:** Displays the contents of a file.
- **Example:**

    ```bash
    cat example.txt
    ```

### 18. Search for a Text in Files

```bash
grep <search_term> <file_name>
```

- **Description:** Searches for the specified term within the file.
- **Example:**

    ```bash
    grep "hello" example.txt
    ```

### 19. Create a Symbolic Link

```bash
ln -s <target> <link_name>
```

- **Description:** Creates a symbolic link pointing to the target file/directory.
- **Example:**

    ```bash
    ln -s /path/to/original /path/to/link
    ```

### 20. Check Disk Usage

```bash
du -sh
```

- **Description:** Displays the total disk usage of the current directory.
- **Example:**

    ```bash
    du -sh
    ```

### 21. List All Running Processes

```bash
ps aux
```

- **Description:** Displays a snapshot of current processes.
- **Example:**

    ```bash
    ps aux
    ```

### 22. Kill a Process

```bash
kill <PID>
```

- **Description:** Terminates a process with the given process ID.
- **Example:**

    ```bash
    kill 12345
    ```

### 23. Update Package Manager (Homebrew example)

```bash
brew update
```

- **Description:** Updates the package manager (Homebrew in this case).
- **Example:**

    ```bash
    brew update
    ```

### 24. Install a Package (Homebrew example)

```bash
brew install <package_name>
```

- **Description:** Installs a package using the package manager.
- **Example:**

    ```bash
    brew install git
    ```
