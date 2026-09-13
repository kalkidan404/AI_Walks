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

## Resources

- [NumPy Quickstart](https://numpy.org/doc/stable/user/quickstart.html)
- [Pandas Getting Started Tutorials](https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/)
- [Matplotlib Getting Started](https://matplotlib.org/stable/users/getting_started/)
- [Python Full Course for Beginners](https://www.youtube.com/watch?v=rfscVS0vtbw)
- [Pandas Getting Started](https://pandas.pydata.org/getting_started.html)
