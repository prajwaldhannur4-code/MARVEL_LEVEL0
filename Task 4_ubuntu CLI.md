# Task 4 - Command Line on Ubuntu


## What is Ubuntu?

Ubuntu is a free and open source Linux based operating system widely used
by developers and engineers. Unlike Windows, Ubuntu is controlled largely
through the terminal — a text based interface where you type commands to
interact with the system.

---

## What is the Command Line?

The command line or terminal is a text interface where you type commands
to perform operations on the computer. It is faster and more powerful than
a graphical interface for many tasks like creating files, managing folders
and running scripts.

---

## Commands I Learned

| Command | Purpose |
|---|---|
| `mkdir` | Create a new directory |
| `cd` | Change into a directory |
| `touch` | Create a blank file without text editor |
| `ls` | List all files and folders |
| `echo` | Write text into a file |
| `cat` | Display and concatenate file contents |
| `wc -l` | Count number of lines or items |

---

## What I Did

### Step 1 — Create test folder
````bash
mkdir test
cd test
````

### Step 2 — Create a blank file
````bash
touch myfile.txt
ls
````

### Step 3 — Create 2600 folders
````bash
for i in $(seq 1 100); do mkdir A$i; done
for i in $(seq 1 100); do mkdir B$i; done
for i in $(seq 1 100); do mkdir C$i; done
# repeated for all 26 letters
ls | wc -l
````
Output: **2601** (2600 folders + 1 file)

### Step 4 — Create two text files and concatenate
````bash
echo "Hello I am learning Linux commands." > file1.txt
echo "This is the second file with more text." > file2.txt
cat file1.txt file2.txt
```

Output:
```
Hello I am learning Linux commands.
This is the second file with more text.
````

---

## What I Learned

- How to navigate the Linux file system using terminal
- How to create files and folders without a graphical interface
- How to use loops in bash to automate repetitive tasks
- How to concatenate files using cat command
- Why Linux terminal is powerful for developers

---

## Pics

![Ubuntu Terminal - cat output](pics/task4_ubuntu_cat.jpeg)

---

## Conclusion

Working with the Ubuntu command line was a great learning experience.
Tasks that would take many clicks in a graphical interface can be done
in seconds with the right commands. This is why developers prefer Linux
terminals for their day to day work.

---

*Report by: Prajwal Dhannur*
