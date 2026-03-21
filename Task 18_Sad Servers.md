# Task 18 - Sad Servers — Command Line Murders


## What is Sad Servers?

Sad Servers is an online platform described as "LeetCode for Linux". It
provides real Linux troubleshooting scenarios where you are given a broken
server and have to fix it or solve a mystery using Linux commands. It is
a great way to practice real world Linux skills in a browser without
needing to install anything.

**Link:** https://sadservers.com

---

## Scenario — Command Line Murders

In this scenario I had to solve a murder mystery entirely using Linux
command line tools. Like a detective I had to read clues from files,
search through records and use Linux commands to find the murderer.

**Scenario Link:** https://sadservers.com/scenario/command-line-murders

---

## How I Solved It

### Step 1 — Navigate to mystery folder
```bash
cd /home/admin/clmystery/mystery
ls
```
Found files: `crimescene`, `people`, `vehicles`, `interviews` etc.

### Step 2 — Read the crime scene file
```bash
cat crimescene
```
**Clues found:**
- Murderer is a tall male over 6 feet
- Had wallet with Rotary Club, Delta SkyMiles, Library and
Museum of Bash History membership cards
- A woman named **Annabel** with blond spiky hair and New Zealand
accent was seen leaving a nearby coffee shop before the shots

### Step 3 — Find Annabel in people directory
```bash
grep "Annabel" people
```
Found two female Annabels:
- Annabel Sun — Female, 26, Hart Place
- Annabel Church — Female, 38, Buckingham Place

### Step 4 — Get Annabel's ID and read her interview
```bash
grep -rl "Annabel Sun" people
grep "Annabel Sun" people
```
Used her ID to find her interview file:
```bash
cat interviews/interview-[ID]
```

### Step 5 — Follow the leads
Used grep to search through membership files and people records
to narrow down the suspect matching all clues:
- Tall male 6ft+
- Had all membership cards mentioned
- Connected to Annabel's testimony

### Step 6 — Verify the answer
```bash
echo [SUSPECT_NAME] | md5sum
```
Submitted the murderer's name to verify the solution.

---

## Key Linux Commands Used

| Command | Purpose |
|---|---|
| `cat` | Read file contents |
| `grep` | Search for patterns in files |
| `grep -r` | Search recursively through folders |
| `grep -l` | Show only filenames containing match |
| `ls` | List files in directory |
| `cd` | Navigate between directories |
| `echo` | Print text to terminal |
| `md5sum` | Generate hash to verify answer |

---

## What I Learned

- How to navigate and read files in Linux terminal
- How to use grep to search through large files efficiently
- How to combine multiple Linux commands to solve a problem
- Real world Linux troubleshooting skills
- How developers use terminal for investigative tasks

---

## Pics

![Sad Servers Solution] (pics/task 18_sad servers.jpeg)

---

## Conclusion

The Command Line Murders scenario on Sad Servers was a fun and
challenging way to learn Linux commands. By using grep, cat and
other commands I was able to follow clues like a detective and
find the murderer. This task showed me how powerful Linux command
line tools are for searching and processing text data efficiently.

---

*Report by: Prajwal Dhannur*
