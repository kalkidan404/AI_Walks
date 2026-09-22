# Data Analysis Project

The project is divided into stages so you learn the data-analysis workflow step by step.

You will work with a real dataset and move through the same general process a data analyst would use:

```text
Set up
  ↓
Load the data
  ↓
Clean the data
  ↓
Explore the data
  ↓
Visualize the data
  ↓
Analyze relationships
  ↓
Use statistics
  ↓
Compare findings
  ↓
Build something with the data
```

The dataset and subject can change. The important thing is learning the **process**.

---

# Part 1 — Git & Environment Setup

### Goal

Set up a proper Python data-analysis project and become comfortable using Git before working with the data.

### Tasks

#### 1. Create the repository

- Create a GitHub repository.
- Clone it locally.
- Create a Python virtual environment using `venv` or `conda`.

#### 2. Create the project environment

Add:

```text
.gitignore
requirements.txt
```

Your `.gitignore` should exclude things such as:

```text
data/
*.csv
.ipynb_checkpoints/
venv/
```

#### 3. Git branches

Create a working branch for the project.

Practice:

- creating branches
- switching branches
- committing
- pushing
- merging

#### 4. Conventional commits

Make at least 3 commits using Conventional Commit messages.

Examples:

```text
init: add project structure
chore: set up virtual environment
ci: add GitHub Actions workflow
```

#### 5. Basic CI

Create:

```text
.github/workflows/ci.yml
```

The workflow should run on pushes to `main` and perform a basic Python setup/check.

---

# Part 2 — Loading & Understanding the Data

### Goal

Before cleaning or analyzing anything, understand what you actually have.

### Tasks

#### Load the dataset

Use Pandas:

```python
import pandas as pd

df = pd.read_csv("your_dataset.csv")
```

#### Inspect the dataset

Investigate:

- number of rows
- number of columns
- column names
- data types
- first few rows
- last few rows
- unique values
- categorical columns
- numerical columns

Useful commands include:

```python
df.shape
df.head()
df.tail()
df.info()
df.dtypes
df.describe()
```

### Questions to answer

- What does one row represent?
- What does each important column represent?
- Which columns are numerical?
- Which columns are categorical?
- Are there date/time columns?
- Which columns might be useful for analysis?
- Are there obvious problems with the data?

---

# Part 3 — Data Cleaning

### Goal

Turn the raw dataset into a reliable dataset that is suitable for analysis.

**This is the part where you actually clean the data.**

Data cleaning can include:

```text
Missing values
Duplicate rows
Incorrect data types
Incorrect formats
Inconsistent categories
Invalid values
Outliers
Rows/columns that should not be included
```

The important rule is:

> **Do not blindly change the data. Every major cleaning decision should have a reason.**

---

## 3.1 Handle Missing Values

First identify missing data.

```python
df.isna().sum()
```

Calculate the percentage of missing values per column.

Investigate:

- Which columns contain missing values?
- How much data is missing?
- Are some columns missing more than others?
- Could the missing data affect your analysis?

Decide how to handle the missing values.

Possible approaches include:

```text
drop rows
drop columns
fill values
forward-fill
backward-fill
use another appropriate method
```

Document why you chose your method.

---

## 3.2 Handle Sentinel Values

Sometimes datasets use special numbers to represent missing or invalid data.

For example:

```text
-999
```

might actually mean:

```text
missing / unavailable
```

Convert those values into proper missing values:

```python
df = df.replace(-999, np.nan)
```

**Do this before calculating statistics.**

---

## 3.3 Remove Duplicate Data

Check for duplicate rows:

```python
df.duplicated().sum()
```

If duplicates exist, investigate them and remove them when appropriate:

```python
df = df.drop_duplicates()
```

Document:

- how many duplicates existed
- why they were considered duplicates
- what you did with them

---

## 3.4 Fix Data Types and Formats

Check whether columns have the correct type.

For example, dates may initially be stored as separate numbers or as strings.

Convert them into proper datetime values.

For a dataset with `YEAR` and `DOY`:

```python
df["DATE"] = pd.to_datetime(
    df["YEAR"] * 1000 + df["DOY"],
    format="%Y%j"
)
```

Then create useful date information:

```python
df["Month"] = df["DATE"].dt.month
```

The goal is to make the data easier and safer to work with.

---

## 3.5 Check Invalid or Impossible Values

Look for values that don't make sense.

Examples:

```text
negative age
temperature that is physically impossible
percentage greater than 100
negative rainfall
invalid category
```

Do not automatically delete unusual values.

First investigate them.

Ask:

> Is this actually an error, or is it a legitimate unusual observation?

---

## 3.6 Handle Outliers

Outliers are observations that are unusually far from the rest of the data.

One method is using a Z-score.

Calculate Z-scores for appropriate numerical variables and identify observations where:

```text
|Z| > 3
```

Then investigate the flagged observations.

Possible decisions:

```text
retain
remove
cap
transform
```

The important part is explaining **why**.

An outlier should not automatically be deleted simply because it looks unusual.

---

## 3.7 Final Cleaning Check

After cleaning, check the dataset again.

Ask:

- Are there still missing values?
- Are duplicates gone?
- Are data types correct?
- Are invalid values handled?
- Were outliers investigated?
- Does the dataset still contain enough observations?
- Can I now trust this dataset enough to analyze it?

Then export the cleaned dataset if appropriate:

```text
data/cleaned_data.csv
```

Keep raw and cleaned data separate.

---

# Part 4 — Exploratory Data Analysis (EDA)

### Goal

Start asking questions about the cleaned data.

EDA is where you **explore what the data is telling you**.

---

## 4.1 Summary Statistics

Use:

```python
df.describe()
```

Investigate:

- mean
- median
- standard deviation
- minimum
- maximum
- quartiles

Don't just produce the table.

Write a short interpretation.

For example:

```text
The average temperature is...
The median is...
The relatively large standard deviation suggests...
```

---

## 4.2 Ask Questions

Come up with questions that can actually be answered using your dataset.

For example:

- How does the variable change over time?
- Which category has the highest average?
- Which group varies the most?
- Are two variables related?
- Are there unusual observations?
- Does one period differ from another?

Try to create **at least 5 questions**.

---

## 4.3 Filtering and Grouping

Practice:

```python
df[df["column"] > value]
```

and:

```python
df.groupby("category")["value"].mean()
```

Explore:

- groups
- averages
- counts
- minimums
- maximums
- variation

---

# Part 5 — Data Visualization

### Goal

Use visualizations to communicate patterns that are difficult to see in raw numbers.

Every visualization should answer or support a question.

---

## 5.1 Time Series

If the dataset contains time:

Create a line chart showing how an important variable changes over time.

Investigate:

- trends
- seasonal patterns
- peaks
- drops
- unusual periods

---

## 5.2 Bar Charts

Use bar charts to compare categories.

For example:

```text
Average value by category
```

---

## 5.3 Histograms

Use a histogram to understand the distribution of a numerical variable.

Investigate:

- shape
- center
- spread
- skew
- unusual values

---

## 5.4 Boxplots

Use boxplots to compare distributions between groups.

Look for:

- median
- spread
- outliers
- differences between groups

---

## 5.5 Scatter Plots

Use scatter plots when investigating the relationship between two numerical variables.

For example:

```text
Variable A vs Variable B
```

Look for:

- positive relationships
- negative relationships
- weak relationships
- strong relationships
- clusters
- outliers

---

# Part 6 — Relationship Analysis

### Goal

Investigate whether variables appear to be related.

Choose interesting numerical variables from your dataset.

Create:

- scatter plots
- correlation matrix / heatmap

Calculate correlations where appropriate.

Then identify the strongest relationships.

### Important concept

**Correlation does not mean causation.**

If two variables move together, that does not automatically mean one causes the other.

### Investigate

- What is the direction of the relationship?
- How strong is it?
- Are there outliers affecting it?
- Does the relationship make sense?
- Could another variable explain it?

---

# Part 7 — Distribution & Anomaly Analysis

### Goal

Go beyond the obvious patterns and investigate unusual parts of the dataset.

## Distribution

Choose an important numerical variable and investigate its distribution.

Use:

- histogram
- boxplot
- summary statistics

Explain what the distribution tells you.

---

## Anomalies

Find at least one unusual observation or pattern.

It could be:

- an extreme value
- sudden change
- unusual category
- unusual group
- unexpected missing-data pattern

Investigate it.

Ask:

> Is this a data problem or a real-world observation?

If you remove it, compare the analysis before and after.

---

# Part 8 — Statistical Analysis

### Goal

Move from simply describing the data to testing a specific statistical question.

Choose a question that fits your dataset.

Possible methods include:

```text
Correlation
t-test
ANOVA
Kruskal–Wallis
```

You don't need to use every statistical test.

Choose an appropriate one.

### Explain:

1. What question are you asking?
2. What is your null hypothesis?
3. Why is this test appropriate?
4. What assumptions matter?
5. What result did you get?
6. What does the p-value suggest?
7. What are the limitations?

The goal is not just to run a statistical function.

The goal is to understand **what the test is actually telling you**.

---

# Part 9 — Comparing Groups

### Goal

Use your analysis skills to compare multiple groups in the dataset.

Depending on the dataset, groups could be:

```text
countries
cities
departments
products
age groups
regions
categories
```

Compare important variables using:

- summary tables
- line charts
- bar charts
- boxplots
- distributions
- statistical tests

The exact comparisons should depend on the dataset.

### Questions

- How are the groups different?
- Which groups have similar patterns?
- Which groups are more variable?
- Are the differences large?
- Are the differences statistically meaningful?

Do not force a comparison if the dataset does not support it.

---

# Part 10 — Communicating Your Findings

### Goal

Turn your analysis into a story that another person can understand.

Write a short findings section containing:

### 1. Main findings

What did you discover?

### 2. Interesting findings

What surprised you?

### 3. Important patterns

What patterns appeared repeatedly?

### 4. Limitations

What can your dataset **not** tell you?

### 5. Next questions

What would you investigate if you had more data?

The goal is:

> Don't just show the charts. Explain what they mean.

---

# Part 11 — Build Something With Your Analysis

### Goal

Turn your analysis into a small interactive application.

Build a Streamlit dashboard.

The dashboard should allow someone else to explore the dataset without opening your notebook.

Include:

- dataset overview
- interactive filters
- summary statistics
- at least two visualizations
- filtered data preview

Possible interactive controls:

```text
multiselect
slider
selectbox
checkbox
```

For example:

```text
Select categories
       ↓
Select date range
       ↓
Select variable
       ↓
Charts update
```

Keep the dashboard focused on communicating your findings.

---

# Part 12 — Final Challenge

Now repeat the process with a **completely different dataset**.

Do not follow a tutorial step by step.

You should be able to independently:

```text
Find a dataset
      ↓
Understand it
      ↓
Clean it
      ↓
Explore it
      ↓
Visualize it
      ↓
Investigate relationships
      ↓
Analyze an anomaly
      ↓
Ask a statistical question
      ↓
Communicate findings
      ↓
Build a small dashboard
```

The subject of the dataset is your choice.

The goal is to prove that you learned the **data-analysis workflow**, not one particular dataset.

---

# What You Should Know After This Project

By the end, you should be comfortable with:

### Git & Environment

- Git
- GitHub
- branches
- commits
- virtual environments
- requirements files
- basic CI

### Data Loading

- Pandas
- CSV files
- DataFrames
- inspecting datasets
- understanding columns and data types

### Data Cleaning

- missing values
- duplicates
- sentinel values
- data types
- date conversion
- invalid values
- outliers

### EDA

- filtering
- sorting
- grouping
- aggregation
- summary statistics
- asking data-driven questions

### Visualization

- line charts
- bar charts
- histograms
- boxplots
- scatter plots
- heatmaps

### Statistics

- correlation
- hypothesis testing
- p-values
- ANOVA / other appropriate tests
- limitations of statistical conclusions

### Communication

- interpreting results
- explaining charts
- identifying limitations
- telling a data story

### Building

- Streamlit
- interactive controls
- connecting analysis to an application

---

# The Important Distinction

Throughout the project, keep this mental model:

```text
DATA LOADING
    ↓
"What do I have?"

DATA CLEANING
    ↓
"Can I trust and work with it?"

EDA
    ↓
"What is happening in the data?"

VISUALIZATION
    ↓
"How can I see and communicate the patterns?"

RELATIONSHIP ANALYSIS
    ↓
"How are these variables connected?"

STATISTICS
    ↓
"Can I test a specific claim/question?"

COMMUNICATION
    ↓
"What does all of this mean?"

STREAMLIT
    ↓
"Can I let someone else explore it?"
```

That's the complete project.

The dataset can change. The domain can change. **The workflow stays the same.**
[my github for reference](https://github.com/kalkidan404/AI_Walks-Climate)
