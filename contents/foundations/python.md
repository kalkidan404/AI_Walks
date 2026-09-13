# Python → Data Analysis

### A practical course for someone who already knows JavaScript

> **Goal:** Learn enough Python to comfortably work with data.
> **Not the goal:** Become a Python expert.

#this isn`t a programming course only a way toward ML/AI so it doesn`t focus on python for brgginers.

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

# 📚 Resources

Don't treat these as homework where you have to watch everything.

They're your **second explanation** when my notes aren't enough.

## 🐍 Python fundamentals

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
