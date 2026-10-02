# Math & Statistics for Machine Learning

## 1. Mean

The **mean** is the value you would get if the total of all the values were distributed equally among all observations.

Example:

```text
10, 20, 30

Mean = (10 + 20 + 30) / 3
     = 20
```

---

## 2. Variance

**Variance** tells us how much the values are spread around the mean.

First, we calculate the **deviation** of each value from the mean.

### Deviation

Deviation tells us **how far a value is from the mean**.

For:

```text
10, 20, 30
```

The mean is:

```text
20
```

So the deviations are:

```text
10 → -10
20 →  0
30 → +10
```

The problem is that if we simply average the deviations:

```text
(-10 + 0 + 10) / 3 = 0
```

the positive and negative deviations cancel each other out.

So we **square the deviations**:

```text
(-10)² = 100
0²     = 0
10²    = 100
```

Then take the average:

```text
(100 + 0 + 100) / 3
= 200 / 3
= 66.67
```

That is the **variance**.

---

## 3. Standard Deviation

Standard deviation is the **square root of the variance**.

It is useful because variance is measured in **squared units**, while standard deviation is in the **same unit as the original data**.

So if our data is measured in:

```text
years
```

the variance is in:

```text
years²
```

while the standard deviation is back in:

```text
years
```

This makes standard deviation easier to interpret.

---

# Mean vs Median

The **mean is much more sensitive to extreme values**, while the **median is more resistant to them**.

Example:

```text
5, 5, 5, 5, 100
```

The 100 pulls the mean upward, but the median remains 5.

---

# An Important Analysis Question

Before deciding that the mean represents our data well, ask:

> **What does the distribution of the data look like, and is the mean actually a good representative of it?**

If the data is **skewed** or contains **extreme outliers**, the median can be more useful because it tells us where the middle of the data actually lies.

In Pandas:

```python
df["age"].mean()
df["age"].median()
```

Then compare them.

Ask:

> **Are they very different? If so, why?**

A large difference can be a clue that the data is skewed or contains extreme values.

---

# 4. Distribution

A **distribution** describes how the values in our dataset are spread out and how frequently different values occur.

In other words:

> **What does the overall pattern of the data look like?**

We can use things like **histograms** to see the distribution.

A common rule of thumb:

```text
Mean > Median  → often right-skewed
Mean < Median  → often left-skewed
Mean ≈ Median  → often roughly symmetric
```

This is a useful clue, but it is **not an absolute rule**. We should look at the actual distribution as well.

---

# 5. Outliers

An **outlier** is an observation that is unusually far from the rest of the data.

Outliers are important because this is where **data analysis can turn into data cleaning**.

We don't automatically delete an outlier.

First:

```text
Detect it
   ↓
Investigate it
   ↓
Ask why it is unusual
   ↓
Decide whether to keep, correct, or remove it
```

An outlier could be:

- a data-entry error
- a measurement error
- a legitimate extreme value
- a rare event
- a genuinely unusual observation

---

## Detecting Outliers

### A. IQR Method — Interquartile Range

The IQR focuses on the **middle 50% of the data**.

We look at:

```text
Q1 → 25th percentile
Q2 → 50th percentile (median)
Q3 → 75th percentile
```

The IQR tells us how wide the middle 50% of the data is:

$$
IQR = Q3-Q1
$$

Then we calculate the boundaries:

$$
Lower\ Bound = Q1-1.5(IQR)
$$

$$
Upper\ Bound = Q3+1.5(IQR)
$$

Values outside these boundaries are flagged as **potential outliers**.

---

### B. Z-score

A z-score tells us:

> **How many standard deviations away from the mean an observation is.**

$$
z=\frac{x-\mu}{\sigma}
$$

Where:

- \(x\) = observation
- \(\mu\) = mean
- \(\sigma\) = standard deviation

A common rule is:

```text
|z| > 3 → flag as a potential outlier
```

Again, this is a **flag**, not proof that the observation is wrong.

---

# 6. Probability

**Probability** describes how likely something is to happen.

It helps us reason about **uncertainty**.

Probability ranges from:

```text
0 → impossible
1 → certain
```

For example:

```text
P(rain tomorrow) = 0.7
```

means there is a 70% probability of rain according to that probability estimate.

---

# 7. Independent Events

Two events are **independent** when the occurrence of one does not affect the probability of the other.

For independent events:

$$
P(A\cap B)=P(A)\times P(B)
$$

The symbol:

$$
A\cap B
$$

means **A and B both happen**.

---

# 8. Conditional Probability

Conditional probability asks:

> **What is the probability that something happens given that something else has already happened?**

It is written:

$$
P(A|B)
$$

and means:

> **Probability of A given B has already happened.**

The formula is:

$$
P(A|B)=\frac{P(A\cap B)}{P(B)}
$$

The important idea is that **B becomes the condition or the group we are looking at**.

---

# 9. Correlation

Correlation asks:

> **Do two numerical variables move together?**

For example:

```text
House size ↑
House price ↑
```

There may be a positive relationship.

The **correlation coefficient**, usually written as \(r\), measures the direction and strength of a **linear relationship**.

$$
-1\leq r\leq1
$$

Roughly:

```text
r > 0  → positive relationship
r < 0  → negative relationship
r ≈ 0  → little/no linear relationship
```

A **scatter plot** is useful for visually examining the relationship.

Important:

> **Correlation does not mean causation.**

---

# 10. Sampling

**Sampling** means taking a smaller group of observations from a larger population so we can study the population without necessarily collecting data from everyone.

```text
Population
     ↓
  Sample
     ↓
Analyze sample
     ↓
Learn about population
```

The way we choose the sample matters because a biased sample can give us misleading results.

### Parameter vs Statistic

When we calculate something from a **population**, it is called a **parameter**.

When we calculate something from a **sample**, it is called a **statistic**.

---

# 11. Exponential Functions

An exponential function involves **constant multiplication** rather than constant addition.

Example:

$$
f(x)=2^x
$$

Think of the difference like this:

```text
Linear:
constant addition

2, 4, 6, 8, 10
+2  +2  +2  +2


Exponential:
constant multiplication

2, 4, 8, 16, 32
×2 ×2  ×2  ×2
```

So:

> **Linear = constant addition.**

> **Exponential = constant multiplication.**

---

# 12. Logarithms

A logarithm is the inverse of an exponential.

Logs are useful in data analysis when data is **highly skewed** or spans several orders of magnitude.

They can compress very large values and make patterns easier to see.

---

# 13. Vectors

A **vector** is simply a list of numbers representing something.

For example, a house could be represented as:

```text
[150, 3, 10]
```

where:

```text
150 → size
3   → bedrooms
10  → age
```

So the vector represents the features of one house.

---

# 14. Dot Product

The **dot product** lets a model combine features with their weights to produce a number.

For example:

```text
features:
[150, 3]

weights:
[2000, 10000]
```

The model combines them:

$$
150(2000)+3(10000)
$$

This idea becomes the foundation of many machine-learning models.

---

# 15. Derivatives

The key question:

> **How can a model figure out which direction to change its parameters to make its predictions better?**

A **derivative** tells us how fast something is changing.

In machine learning, we use derivatives to understand:

> **If I change a parameter a little, how does the loss change?**

For example, if changing a parameter makes the loss increase, we want to move in the opposite direction.

This leads us to:

```text
Derivative
    ↓
Partial derivatives
    ↓
Gradient
    ↓
Gradient descent
```

---

# 16. Partial Derivatives

When a function has multiple parameters, a **partial derivative** tells us how the loss changes when we change **one parameter while keeping the others fixed**.

For example:

$$
L(w_1,w_2)
$$

We can calculate:

$$
\frac{\partial L}{\partial w_1}
$$

and:

$$
\frac{\partial L}{\partial w_2}
$$

Each one tells us how that particular parameter affects the loss.

---

# 17. Gradient

The **gradient** collects all the partial derivatives into one vector.

For example:

$$
\nabla L=
\begin{bmatrix}
\frac{\partial L}{\partial w_1}\\
\frac{\partial L}{\partial w_2}
\end{bmatrix}
$$

The gradient tells us the direction in which the loss increases most rapidly.

Therefore, **gradient descent moves in the opposite direction**.

---

# 18. Gradient Descent

The basic idea:

```text
Model
  ↓
Make prediction
  ↓
Calculate loss
  ↓
Calculate gradient
  ↓
Move opposite the gradient
  ↓
Update parameters
  ↓
Make prediction again
  ↓
Repeat
```

The update rule is:

$$
w_{new}=w_{old}-\alpha\nabla L
$$

where:

- \(w\) = model parameter
- \(\alpha\) = learning rate
- \(\nabla L\) = gradient

The **loss tells us how wrong the model is**.

The **gradient tells us how the parameters are affecting that loss**.

**Gradient descent actually changes the parameters.**

The learning rate controls **how big each step is**.

```text
Too small → very slow learning

Reasonable → steady progress

Too large → can overshoot the minimum
```

The goal is to adjust the parameters so that the model's **loss becomes smaller**.

---

# The Big Picture

All of these concepts connect:

```text
DATA
 ↓
Understand the distribution
 ↓
Mean / Median / Variance / Standard deviation
 ↓
Probability / Sampling / Correlation
 ↓
Represent data as vectors
 ↓
Use functions to model relationships
 ↓
Derivative
 ↓
Partial derivatives
 ↓
Gradient
 ↓
Gradient descent
 ↓
Machine Learning
```

The main thing I need to remember is:

> **Math isn't the goal. The goal is understanding what the model is doing with the data.**
