# Task 3 - Working with GitHub


## What is GitHub?

GitHub is basically like Instagram but for coders. Just like Instagram where
people share photos, GitHub is where developers share their code. You can find
thousands of open source projects on GitHub — meaning the code is free for
anyone to read, use, learn from and contribute to. It is one of the most
important tools in the software world.

---

## Key Concepts I Learned

**Repository (Repo)** — A folder on GitHub that contains all the code and
files of a project. Like a project folder but online and version controlled.

**Fork** — Making your own personal copy of someone else's repository. This
lets you make changes without affecting the original project.

**Issue** — A way to report a bug or problem found in a repository. It's like
raising your hand and saying "I found something wrong here!"

**Pull Request (PR)** — After fixing a bug in your forked copy, a pull request
is how you ask the original repository owner to accept your fix into their
code.

**README** — A markdown file in every repository that explains what the
project is about and what to do. Always the first thing to read!

---

## What I Did

### Step 1 — Read the README
I went to the MARVEL GitHub repository and first read the README file
carefully. The README had all the instructions explaining what needed to be
done for the task.

### Step 2 — Fork the Repository
Following the instructions, I forked the MARVEL git-task repository to create
my own personal copy of it on my GitHub account.

- **Original repo:** github.com/UVCE-Marvel/git-task
- **My fork:** github.com/prajwaldhannur4-code/git-task

### Step 3 — Find the Bug
I went through the code in `main.py` carefully and found a bug in the `add`
function. The function was supposed to add two numbers but was returning a
wrong result.

**Buggy code:**
```python
def add(number_a, number_b):
    return number_a + number_b + 1
```

The extra `+ 1` was causing the function to always return a value that was
1 more than the correct answer. For example, `add(2, 3)` would return `6`
instead of `5`.

### Step 4 — Fix the Bug
I removed the extra `+ 1` to fix the function:

**Fixed code:**
```python
def add(number_a, number_b):
    return number_a + number_b
```

### Step 5 — Raise an Issue
I created Issue **#272** on the MARVEL repository titled:
> "Bug: add function returns wrong value due to extra +1"

This formally reported the bug to the repository maintainers.

### Step 6 — Open a Pull Request
After fixing the bug in my forked copy, I opened Pull Request **#273** to
request that my fix be merged into the original repository. The PR showed
no conflicts with the base branch.

---

## Links

- **My Fork:** https://github.com/prajwaldhannur4-code/git-task
- **Issue #272:** https://github.com/UVCE-Marvel/git-task/issues/272
- **Pull Request #273:** https://github.com/UVCE-Marvel/git-task/pull/273

---

## Conclusion

Through this task I learned how GitHub works in a real open source workflow.
Reading the README, forking a repository, finding and fixing a bug, raising
an issue and opening a pull request — these are the exact steps real
developers follow every day. GitHub is truly the Instagram of coders and now
I understand why every developer uses it!

---

*Report by: Prajwal Dhannur*
