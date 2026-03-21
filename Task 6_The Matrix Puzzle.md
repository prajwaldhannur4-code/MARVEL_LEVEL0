# Task 6 - The Matrix Puzzle — Decode with NumPy


## What is NumPy?

NumPy (Numerical Python) is a powerful Python library for working with
arrays and matrices. It provides fast mathematical operations and is the
foundation of most data science and machine learning work in Python.

---

## What is Matplotlib?

Matplotlib is a Python library for creating visualizations and plots.
In this task it was used to display the decoded matrix as an image
using `imshow()`.

---

## The Puzzle

I was given a scrambled matrix file and had to decode it into a hidden
image using NumPy operations. Three clues were provided:

- **Clue 1:** "Try reshaping the encoded array into a square — how many
elements are there?"
- **Clue 2:** "The structure may be upright, but the data might be
sideways. Look at its orientation."
- **Clue 3:** "Sometimes the end is actually the beginning."

---

## How I Decoded It

### Step 1 — Load and inspect the matrix
```python
import numpy as np
import matplotlib.pyplot as plt

data = np.load('encoded_array.npy')
print("Shape:", data.shape)        # Output: (200, 50)
print("Total elements:", data.size) # Output: 10000
```

Original shape was **(200, 50)** — clearly not a square image.
Total elements = 10000 = 100 × 100 → perfect square!

### Step 2 — Reshape into square (Clue 1)
```python
size = int(np.sqrt(data.size))  # size = 100
reshaped = data.reshape(size, size)
print("Reshaped to:", reshaped.shape)  # Output: (100, 100)
```

### Step 3 — Transpose (Clue 2)
The data was sideways so I transposed it to fix orientation:
```python
transposed = reshaped.T
```

### Step 4 — Flip vertically (Clue 3)
"End is the beginning" meant the image was upside down:
```python
decoded = np.flipud(transposed)
```

### Step 5 — Display the image
```python
plt.imshow(decoded, cmap='gray')
plt.title('Decoded Image')
plt.axis('off')
plt.show()
```

---

## NumPy Operations Used

| Operation | Function | What it does |
|---|---|---|
| Load file | `np.load()` | Loads .npy file into array |
| Check shape | `.shape` | Shows dimensions of array |
| Check size | `.size` | Total number of elements |
| Square root | `np.sqrt()` | Find side length of square |
| Reshape | `.reshape(100,100)` | Changes array from (200,50) to (100,100) |
| Transpose | `.T` | Swaps rows and columns |
| Flip vertical | `np.flipud()` | Flips array upside down |

---

## Result

The decoded image revealed a **robot/sad server face** — a white circle
with two eyes and a hat on a black background. 10000 pixel values
arranged as a 100×100 grid formed this hidden image!

---

## What I Learned

- How to load and inspect NumPy arrays using .shape and .size
- How reshape changes array dimensions without changing data
- What transpose does — swaps rows and columns
- What flipud does — flips array vertically
- How 2D arrays represent images — each value is a pixel brightness
- How to visualize arrays as images using Matplotlib imshow()

---

## Pics

![Decoded Image](https://raw.githubusercontent.com/prajwaldhannur4-code/MARVEL_LEVEL0/main/pics/task6_decoded_image.png)
![Colab Code](https://raw.githubusercontent.com/prajwaldhannur4-code/MARVEL_LEVEL0/main/pics/task6_colab_code.png)

---

## Conclusion

This task was a fun way to learn NumPy operations. The scrambled matrix
had shape (200, 50) with 10000 total elements. By reshaping to (100,100),
transposing and flipping vertically I revealed the hidden robot face image.
This showed me how NumPy manipulates data and how images are just 2D
arrays of numbers.

---

*Report by: Prajwal Dhannur*