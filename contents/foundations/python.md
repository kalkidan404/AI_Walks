# Python → Data Analysis

### A practical course for someone who already knows JavaScript

> **Goal:** Learn enough Python to comfortably work with data.
> **Not the goal:** Become a Python expert.

##this isn`t a programming course only a way toward ML/AI so it doesn`t focus on python for brgginers.

---

# 1. Python's basic idea

Python is a general-purpose programming language, but we're learning it here mainly because it is the dominant language for **data analysis, machine learning, and AI**.

The nice thing for you is that you already understand programming through JavaScript.

So when you see:

```python
if age >= 18:
    print("Adult")
```

you should mentally recognize:

```js
if (age >= 18) {
  console.log("Adult");
}
```

The programming idea is the same.

The syntax is different.

Python generally uses **indentation instead of `{}`** to define blocks.

---

# 2. Lists

A Python list is similar to a JavaScript array.

```python
numbers = [1, 2, 3, 4, 5, 6]
```

You can access an element by its index:

```python
numbers[0]
```

gives:

```text
1
```

Python also has **negative indexing**:

```python
numbers[-1]
```

gives:

```text
6
```

So `-1` means the last element.

---

## 2.1 Slicing

Slicing is extremely useful in Python.

```python
numbers = [1, 2, 3, 4, 5, 6]

numbers[1:4]
```

gives:

```python
[2, 3, 4]
```

The syntax is:

```text
[start : stop]
```

The important detail:

**`start` is included, `stop` is excluded.**

So:

```python
numbers[1:4]
```

means:

```text
index 1
index 2
index 3
```

but **not index 4**.

### Taking every nth element

You can also provide a step:

```python
numbers[::2]
```

This means:

```text
[start : stop : step]
```

Because start and stop are omitted:

```python
numbers[::2]
```

means:

> Start from the beginning, go to the end, and take every second element.

Result:

```python
[1, 3, 5]
```

### Resource

For more detail, the official Python tutorial covers lists and sequence operations:
[Python official tutorial](https://docs.python.org/3.11/tutorial/?utm_source=chatgpt.com)

---

# 3. Important list methods

These are worth knowing because you'll use them constantly.

### `append()`

Adds something to the end:

```python
numbers.append(7)
```

Now:

```python
[1, 2, 3, 4, 5, 6, 7]
```

JavaScript equivalent:

```js
numbers.push(7);
```

---

### `sort()`

Sorts the list:

```python
numbers.sort()
```

For example:

```python
numbers = [5, 2, 8, 1]
numbers.sort()
```

becomes:

```python
[1, 2, 5, 8]
```

---

### `pop()`

Removes and returns an element.

```python
numbers.pop()
```

By default it removes the last element.

You can also specify an index:

```python
numbers.pop(2)
```

---

# 4. Tuples

A tuple looks similar to a list:

```python
numbers = (1, 2, 3)
```

The major difference is that tuples are **immutable**.

That means once created, their elements cannot be changed.

```python
numbers[0] = 10
```

would cause an error.

### When do we use tuples?

When the collection represents values that shouldn't change.

For example:

```python
coordinates = (9.03, 38.74)
```

You can think of:

```text
list   → collection that may change
tuple  → fixed collection
```

You don't need to obsess over tuples. Just understand **why they exist and what immutable means**.

---

# 5. Sets

A set is useful when you want **unique values**.

Suppose:

```python
departments = ["IS", "CS", "IS", "SE", "CS"]
```

You want only the unique departments:

```python
unique_departments = set(departments)
```

Result:

```python
{"IS", "CS", "SE"}
```

Sets automatically remove duplicates.

You can also create one directly:

```python
departments = {"IS", "CS", "IS", "SE"}
```

The repeated `"IS"` is only represented once.

### Think of it as:

> "I don't care about duplicates. Give me the unique values."

This becomes useful in data cleaning and analysis.

---

# 6. Dictionaries

This is one of the most important Python data structures.

A Python dictionary is very similar to a **JavaScript object**.

JavaScript:

```js
const student = {
  name: "Kal",
  age: 23,
};
```

Python:

```python
student = {
    "name": "Kal",
    "age": 23
}
```

The dictionary stores:

```text
key → value
```

So:

```text
"name" → "Kal"
"age"  → 23
```

---

## Accessing values

```python
student["name"]
```

gives:

```text
Kal
```

---

## Adding a value

```python
student["school"] = "AAU"
```

Now the dictionary contains:

```python
{
    "name": "Kal",
    "age": 23,
    "school": "AAU"
}
```

---

## Changing a value

```python
student["age"] = 24
```

---

# 7. Lists + dictionaries together

This is worth understanding because data will often look like this:

```python
students = [
    {
        "name": "Kal",
        "age": 23,
        "department": "IS"
    },
    {
        "name": "Sara",
        "age": 21,
        "department": "CS"
    }
]
```

This should look very familiar to you as a JavaScript developer.

You have:

```text
list
   ↓
dictionary
   ↓
key/value data
```

This structure is common before you move into Pandas.

---

# 8. Loops

Python's `for` loop is simpler than the traditional JavaScript `for` loop.

Instead of:

```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

Python lets you directly loop through the values:

```python
for n in numbers:
    print(n)
```

Read this as:

> For every `n` in `numbers`, print `n`.

---

# 9. `range()`

Sometimes you actually need numbers/indexes.

```python
for i in range(5):
    print(i)
```

produces:

```text
0
1
2
3
4
```

Notice:

```text
range(5)
```

stops **before 5**.

So:

```python
range(5)
```

means:

```text
0, 1, 2, 3, 4
```

You can think of it similarly to the counting part of a JavaScript loop.

---

# 10. `enumerate()`

Sometimes you need both:

- the index
- the value

Instead of manually managing the index:

```python
for i in range(len(students)):
    print(i, students[i])
```

Python gives you:

```python
for i, student in enumerate(students):
    print(i, student)
```

You'll see this pattern frequently.

---

# 11. While loops

Python also has `while` loops:

```python
while condition:
    # code
```

For example:

```python
count = 0

while count < 5:
    print(count)
    count += 1
```

You already understand the concept from JavaScript, so don't spend much time here.

**Just make sure you can read and write one.**

---

# 12. Functions

Python functions start with `def`.

```python
def add(a, b):
    return a + b
```

Then:

```python
result = add(1, 2)
```

gives:

```text
3
```

Your original note used:

```python
def add(a,b):
    print(a+b)
```

That's valid too, but notice the difference:

### `print`

Displays something.

### `return`

Sends a value back to whoever called the function.

Usually, for reusable functions, you want:

```python
def add(a, b):
    return a + b
```

rather than:

```python
def add(a, b):
    print(a + b)
```

---

# 13. Functions are objects too

Python treats functions as objects.

For example:

```python
def add(a, b):
    return a + b
```

You can do:

```python
x = add
```

Now `x` refers to the same function.

So:

```python
x(2, 3)
```

returns:

```text
5
```

This is similar to JavaScript, where functions can be stored in variables:

```js
const x = add;
```

This idea is important because Python, like JavaScript, treats functions as **first-class objects**.

---

# 14. Comprehensions

This is one of Python's really useful features.

Suppose:

```python
numbers = [1, 2, 3, 4, 5]
```

You want their squares.

The traditional way:

```python
squares = []

for number in numbers:
    squares.append(number ** 2)
```

Python lets you write:

```python
squares = [number ** 2 for number in numbers]
```

Result:

```python
[1, 4, 9, 16, 25]
```

Read it as:

> Give me `number²` for every number in `numbers`.

---

## Comprehension with a condition

```python
even_numbers = [number for number in numbers if number % 2 == 0]
```

Result:

```python
[2, 4]
```

This is called a **list comprehension**.

You'll see comprehensions often in Python code, so learn to **read them comfortably**.

Don't spend a week trying to memorize every possible comprehension trick.

---

# 15. Modules

A module is essentially a Python file/library containing code that you can use elsewhere.

For example:

```python
import math
```

Then:

```python
math.sqrt(25)
```

gives:

```text
5.0
```

You can also import something specifically:

```python
from math import sqrt
```

Then:

```python
sqrt(25)
```

---

## JavaScript comparison

JavaScript:

```js
import something from "./something.js";
```

Python:

```python
from something import something
```

The exact module systems differ, but the general idea is the same:

> Don't rewrite code that already exists. Import and use it.

---

# 16. Exception handling

Sometimes your program encounters something it can't handle normally.

Python uses:

```python
try:
    # code that might fail
except:
    # what to do if it fails
```

For example:

```python
try:
    number = int("hello")
except ValueError:
    print("That isn't a number.")
```

You can also use:

```python
finally:
    # runs whether an error occurred or not
```

So the basic structure is:

```python
try:
    ...
except SomeError:
    ...
finally:
    ...
```

### JavaScript comparison

```js
try {
    ...
} catch (error) {
    ...
} finally {
    ...
}
```

Same basic idea.

---

# 17. File handling

Python can read files directly.

A recommended pattern is:

```python
with open("data.txt") as file:
    content = file.read()
```

The `with` statement handles closing the file automatically.

You don't have to manually do:

```python
file.close()
```

when using this pattern.

This matters because data analysis often involves reading data from files.

---

# 18. OOP basics

You already understand objects from JavaScript, so **do not over-invest here**.

You mainly need to understand:

```text
class
object
attribute
method
constructor
```

Example:

```python
class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduction(self):
        print(f"My name is {self.name}")
```

Create an object:

```python
student = Student("Kal", 23)
```

Access an attribute:

```python
student.name
```

Call a method:

```python
student.introduction()
```

---

## What is `self`?

This is one of the main differences you'll notice from JavaScript.

JavaScript:

```js
this.name;
```

Python:

```python
self.name
```

`self` refers to the particular object you're working with.

And:

```python
__init__()
```

is essentially the constructor that runs when the object is created.

### JS → Python

| JavaScript      | Python        |
| --------------- | ------------- |
| `class`         | `class`       |
| `this`          | `self`        |
| `constructor()` | `__init__()`  |
| object method   | object method |

That's enough OOP for **this stage**.

---

# 19. Virtual environments

When working on Python projects, you will install packages.

But different projects might need different package versions.

A **virtual environment** gives each project its own isolated Python environment.

Create one:

```bash
python -m venv venv
```

You'll get something like:

```text
project/
│
├── venv/
├── main.py
└── ...
```

The `venv` contains the isolated environment for the project.

---

## Activate it on Windows

```bash
venv\Scripts\activate
```

You should then see something like:

```text
(venv)
```

in your terminal.

---

# 20. `pip`

`pip` is Python's package installer.

Think of it as roughly similar to:

```text
npm
```

in JavaScript.

JavaScript:

```bash
npm install package
```

Python:

```bash
pip install package
```

For example:

```bash
pip install numpy pandas matplotlib
```

You'll use this a lot.

The official Python documentation has the authoritative Python and package-management references. [Python documentation](https://docs.python.org/3/?utm_source=chatgpt.com)

---

# 21. Jupyter Notebook

Now we're starting to move away from **general Python programming** and toward **data analysis**.

Jupyter Notebook gives you an interactive environment where you can write code in separate cells and immediately see the result.

For example:

**Cell 1**

```python
numbers = [1, 2, 3, 4, 5]
```

**Cell 2**

```python
sum(numbers)
```

Output:

```text
15
```

Then you can write more code below it.

This is extremely convenient for data analysis because you can:

```text
load data
↓
inspect
↓
run analysis
↓
see result
↓
make graph
↓
write explanation
```

all inside one notebook.

---

# 22. NumPy

Now we enter the actual data/scientific Python ecosystem.

Import:

```python
import numpy as np
```

NumPy's central object is the **array**.

```python
numbers = np.array([1, 2, 3, 4])
```

One of the major advantages is that NumPy can perform operations across an entire array.

```python
numbers * 2
```

gives:

```text
[2, 4, 6, 8]
```

Instead of manually doing:

```python
result = []

for number in numbers:
    result.append(number * 2)
```

This is part of what is called **vectorized computation**.

---

# 23. NumPy multidimensional arrays

You can create a 2D array:

```python
array = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
```

Conceptually:

```text
1  2  3
4  5  6
```

This resembles a matrix.

Check its shape:

```python
array.shape
```

Result:

```text
(2, 3)
```

Meaning:

```text
2 rows
3 columns
```

This idea becomes **very important later in machine learning**, because you'll constantly encounter arrays/tensors with different dimensions.

The official NumPy quickstart specifically covers multidimensional arrays, shape, axes, and operations without traditional loops. ([NumPy][1])

[NumPy Quickstart](https://numpy.org/doc/stable/user/quickstart.html?highlight=np+arange&utm_source=chatgpt.com)

---

# 24. Pandas

This is where Python becomes particularly useful for **data analysis**.

Import:

```python
import pandas as pd
```

Pandas is designed for working with **tabular/structured data**.

Think:

> Excel/SQL table + Python.

The central object you'll work with is the:

```text
DataFrame
```

---

# 25. DataFrames

Imagine this table:

| name | age | department |
| ---- | --: | ---------- |
| Kal  |  23 | IS         |
| Sara |  21 | CS         |
| Alex |  22 | SE         |

In Pandas, this becomes a DataFrame.

```python
data = {
    "name": ["Kal", "Sara", "Alex"],
    "age": [23, 21, 22],
    "department": ["IS", "CS", "SE"]
}

df = pd.DataFrame(data)
```

`df` is now your table.

---

# 26. Loading a real dataset

This is one of the most important commands in this whole course:

```python
df = pd.read_csv("data.csv")
```

Now your CSV file is a Pandas DataFrame.

And you're ready to start analyzing it.

---

# 27. Inspecting data

When someone gives you a dataset, **don't immediately start manipulating it.**

First understand it.

### `head()`

```python
df.head()
```

Shows the first rows.

### `tail()`

```python
df.tail()
```

Shows the last rows.

### `shape`

```python
df.shape
```

Example:

```text
(1000, 8)
```

means:

```text
1000 rows
8 columns
```

### `dtypes`

```python
df.dtypes
```

Shows the data type of each column.

**Important correction from your original notes:** `dtypes` is an **attribute**, so don't write:

```python
df.dtypes()
```

Write:

```python
df.dtypes
```

### `info()`

```python
df.info()
```

This gives you a useful overview of:

- columns
- data types
- non-null values
- memory usage

### `describe()`

```python
df.describe()
```

Provides statistical summaries such as:

```text
count
mean
std
min
25%
50%
75%
max
```

---

# 28. Selecting data

You can select a column:

```python
df["age"]
```

Multiple columns:

```python
df[["name", "age"]]
```

---

# 29. Filtering

Suppose you only want students older than 20:

```python
df[df["age"] > 20]
```

Read this as:

> Give me the rows where the age is greater than 20.

This is one of the most important Pandas patterns to become comfortable with.

---

# 30. Missing data

Real-world datasets are rarely perfect.

You might encounter:

```text
name     age     salary
Kal      23      50000
Sara     NaN     60000
Alex     22      NaN
```

`NaN` indicates missing data.

Check for missing values:

```python
df.isna()
```

Count them:

```python
df.isna().sum()
```

This is much more useful because you'll see something like:

```text
name      0
age       1
salary    1
```

Now you know exactly where the problems are.

---

# 31. Cleaning data

### Remove missing rows

```python
df.dropna()
```

### Fill missing values

```python
df.fillna(...)
```

For example:

```python
df["age"] = df["age"].fillna(df["age"].mean())
```

Meaning:

> Replace missing ages with the average age.

### Remove duplicates

```python
df.drop_duplicates()
```

These are examples of **data cleaning**.

---

# 32. Manipulating data

You need to be able to change and derive information from the dataset.

For example:

```python
df["salary_k"] = df["salary"] / 1000
```

Now you've created a new column.

You can sort:

```python
df.sort_values("salary")
```

Descending:

```python
df.sort_values("salary", ascending=False)
```

---

# 33. Grouping

This is one of the most important Pandas concepts.

Imagine:

| department | salary |
| ---------- | -----: |
| IS         | 50,000 |
| IS         | 60,000 |
| CS         | 70,000 |
| CS         | 80,000 |

You can ask:

> What's the average salary for each department?

```python
df.groupby("department")["salary"].mean()
```

The idea is:

```text
GROUP BY department
        ↓
calculate
        ↓
mean salary
```

This should feel familiar if you've worked with SQL.

---

# 34. Basic analysis

You can calculate:

```python
df["salary"].mean()
```

Average.

```python
df["salary"].median()
```

Middle value.

```python
df["salary"].min()
```

Minimum.

```python
df["salary"].max()
```

Maximum.

And:

```python
df["salary"].count()
```

Number of values.

These simple operations are the foundation of exploratory data analysis.

The official Pandas tutorials cover reading/writing tabular data, selecting data, creating columns, summary statistics, grouping, plotting, and more. ([Pandas][2])

[Pandas Getting Started Tutorials](https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/?utm_source=chatgpt.com)

---

# 35. Matplotlib

Now we want to **see** the data.

Import:

```python
import matplotlib.pyplot as plt
```

Matplotlib is a visualization library.

---

## Line plot

```python
plt.plot(df["month"], df["sales"])
plt.show()
```

Useful for showing trends.

---

## Bar chart

```python
plt.bar(df["department"], df["students"])
plt.show()
```

Useful for comparing categories.

---

## Histogram

```python
plt.hist(df["age"])
plt.show()
```

Useful for understanding the distribution of values.

---

## Scatter plot

```python
plt.scatter(
    df["study_hours"],
    df["exam_score"]
)

plt.show()
```

Useful for investigating relationships between two numerical variables.

For example:

> Do students who study more tend to have higher exam scores?

The graph can help you investigate that.

Matplotlib's official getting-started guide provides the basic plotting workflow and examples. ([Matplotlib][3])

[Matplotlib Getting Started](https://matplotlib.org/stable/users/getting_started/?utm_source=chatgpt.com)

---

# 36. The complete data-analysis workflow

This is the part I want you to **really remember**.

When someone gives you a dataset, don't randomly start writing Pandas commands.

Follow this workflow:

## ① LOAD

```python
df = pd.read_csv("data.csv")
```

↓

## ② INSPECT

```python
df.head()
df.tail()
df.shape
df.info()
df.dtypes
df.describe()
```

Ask:

- How big is the dataset?
- What columns exist?
- What types are they?
- How many values are missing?
- What do the numbers look like?

↓

## ③ UNDERSTAND

Ask:

> What does each column actually mean?

For example:

```text
age
salary
department
attendance
exam_score
```

You need to understand what those variables represent **before** analyzing them.

Also check:

- missing values
- duplicates
- strange values
- incorrect data types
- impossible values

↓

## ④ CLEAN

Possible operations:

```python
df.dropna()
df.fillna(...)
df.drop_duplicates()
```

You might also convert data types or fix incorrect values.

↓

## ⑤ MANIPULATE

For example:

```python
df["new_column"] = ...
```

Filter:

```python
df[df["age"] > 20]
```

Sort:

```python
df.sort_values(...)
```

Group:

```python
df.groupby(...)
```

↓

## ⑥ ANALYZE

Calculate things such as:

```text
mean
median
count
min
max
percentages
group averages
relationships
```

↓

## ⑦ VISUALIZE

Use:

```text
line charts
bar charts
histograms
scatter plots
```

↓

## ⑧ EXPLAIN

This is the final and most important part.

Don't just say:

> "Here is a graph."

Say:

> "The data suggests that students with higher attendance generally achieved higher exam scores, although there are some exceptions."

**Data analysis isn't just producing numbers and graphs. It's extracting and communicating meaning from the data.**

---

# Your checkpoint

You don't need to know every Python feature.

You don't need to become a Python expert.

You don't need to memorize Pandas.

You don't need to know 100 different Matplotlib functions.

Your checkpoint is:

> **Give me a dataset and I can load it, inspect it, clean it, manipulate it, analyze it, visualize it, and explain what I found.**

If you can do that, **move on to the next stage of your AI journey.**

---

# Resources

Don't treat these as homework where you have to watch everything.

They're your **second explanation** when my notes aren't enough.

## Python fundamentals

### Video — full Python course

[Learn Python — Full Course for Beginners — freeCodeCamp.org](https://www.youtube.com/watch?v=rfscVS0vtbw&utm_source=chatgpt.com)

This one is particularly useful because it covers the exact fundamentals you're learning: lists, tuples, functions, dictionaries, loops, exceptions, files, modules, pip, classes, and objects. ([YouTube][4])

**Don't watch all 4+ hours just because it's there.** Since you already know JS, jump to the sections you need.

The video chapters include:

- Lists — 1:03
- Tuples — 1:18
- Functions — 1:24
- Dictionaries — 2:07
- While loops — 2:14
- For loops — 2:32
- Try/Except — 3:04
- Reading files — 3:12
- Modules & pip — 3:28
- Classes & objects — 3:43 ([YouTube][4])

### Official documentation

[Python Tutorial](https://docs.python.org/3.11/tutorial/?utm_source=chatgpt.com)

The official Python documentation is your **reference**, not something you need to read cover-to-cover.

---

# NumPy

### Official

[NumPy Quickstart](https://numpy.org/doc/stable/user/quickstart.html?highlight=np+arange&utm_source=chatgpt.com)

Focus on:

- arrays
- dimensions
- shape
- indexing
- operations
- vectorization

That's enough for this stage.

---

# 🐼 Pandas

### Official beginner tutorials

[Pandas Getting Started Tutorials](https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/?utm_source=chatgpt.com)

Especially:

- What kind of data does Pandas handle?
- Reading/writing data
- Selecting subsets
- Creating columns
- Summary statistics
- Grouping
- Plotting

Pandas' own documentation specifically recommends its getting-started material for new users. ([Pandas][5])

---

# 📈 Matplotlib

### Official

[Matplotlib Getting Started](https://matplotlib.org/stable/users/getting_started/?utm_source=chatgpt.com)

Focus on learning:

```text
plot
bar
hist
scatter
```

and then basic labels/titles.

You don't need to memorize the entire Matplotlib API.

---

# Jupyter

For Jupyter, the main thing is simply to **use it while doing your data projects**.

You don't need a giant separate Jupyter course.

The workflow will naturally become:

```text
Jupyter Notebook
      ↓
Python
      ↓
NumPy
      ↓
Pandas
      ↓
Matplotlib
      ↓
Data analysis
```

---

# One important correction to your original notes

A few tiny syntax/details to keep straight:

```python
# Correct
df.dtypes

# Not
df.dtypes()
```

`dtypes` is an attribute.

Also:

```python
# Correct
df.groupby("department")["salary"].mean()
```

not:

```python
df.groupby("department").["salary"].mean()
```

And:

```python
# Correct
import pandas as pd
```

not:

```python
import panda as pd
```

And your dictionary needs `=`:

```python
students = {
    "name": "Kal",
    "age": 23
}
```

And creating an object:

```python
student = Student("Kal", 23)
```

not:

```python
student(Kal, 23)
```

Those are just little syntax corrections — **your underlying understanding was mostly on the right track.**

---

## Your actual plan from here

**Tonight:** you've got the organized notes.

**Tomorrow:** use your own dataset/file and build **more than one small project if you want**. That's actually better than doing one artificial tutorial project and moving on.

And while you're building, don't try to remember every command.

When you forget:

> **Look it up → use it → understand why it worked → continue.**

That's how you want to learn Python at this stage.

The goal isn't _"I memorized Pandas."_

The goal is:

> **"Give me data. I know what to do with it."**

[1]: https://numpy.org/doc/stable/user/quickstart.html?highlight=np+arange&utm_source=chatgpt.com "NumPy quickstart — NumPy v2.5 Manual"
[2]: https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/?utm_source=chatgpt.com "Getting started tutorials — pandas 3.0.4 documentation"
[3]: https://matplotlib.org/stable/users/getting_started/?utm_source=chatgpt.com "Getting started — Matplotlib 3.11.2 documentation"
[4]: https://www.youtube.com/watch?v=rfscVS0vtbw&utm_source=chatgpt.com "Learn Python - Full Course for Beginners [Tutorial] - YouTube"
[5]: https://pandas.pydata.org/getting_started.html?utm_source=chatgpt.com "pandas - Python Data Analysis Library"
