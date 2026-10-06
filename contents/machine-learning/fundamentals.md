# Machine Learning Fundamentals

## 1. Traditional Programming vs Machine Learning

What makes traditional programming different from machine learning is **how the rules are created**.

### Traditional programming

In traditional programming, we explicitly give the computer the rules.

For example:

```text
IF an email contains "win money"
→ classify it as spam
```

The programmer defines the logic.

```text
Rules + Data → Output
```

### Machine Learning

In machine learning, instead of manually writing every rule, we give the model many examples where the correct answer is already known.

For example:

```text
Email 1 → Spam
Email 2 → Not Spam
Email 3 → Spam
Email 4 → Not Spam
...
```

The model learns patterns from these examples and uses the learned patterns to make predictions about new emails.

```text
Data + Known Answers → Model → Prediction
```

The important difference is:

> **Traditional programming explicitly provides the rules; machine learning learns useful patterns from examples.**

---

# 2. Features

**Features are the input variables or pieces of information that a model uses to make a prediction.**

For example, if we want to predict a student's exam score:

```text
hours_studied
attendance
previous_score
sleep_hours
```

These are features.

The feature values are used by the model to predict the target.

Features are often represented as **X**.

```text
X → Features / Inputs
y → Target / Label
```

A feature does not necessarily have to be useful. Some features may be irrelevant, noisy, or redundant.

---

# 3. Training

**Training is the process of using data to allow a machine learning model to learn patterns and determine its parameters.**

For supervised learning, the training examples contain both:

```text
Features → Known Target
```

For example:

```text
Hours studied = 5
Attendance = 90%
Previous score = 70
                ↓
             Score = 82
```

The model examines many such examples and adjusts its parameters so that its predictions become better.

So training can be thought of as:

> **Giving the model examples with known answers so it can learn the relationship between the inputs and the target.**

---

# 4. Testing

**Testing is evaluating the trained model on data that it did not see during training.**

The purpose is to find out whether the model can **generalize** to new data.

```text
Training data
     ↓
Learn patterns
     ↓
Model
     ↓
Unseen test data
     ↓
Evaluate predictions
```

The test data should not be used to teach or tune the model.

---

# 5. Inference

**Inference is using a trained model to make predictions on new data.**

For example:

```text
New email
   ↓
Trained spam classifier
   ↓
Spam
```

Training is when the model **learns**.

Inference is when the model **uses what it learned**.

---

# 6. Supervised Learning

In **supervised learning**, the model learns from examples where the correct answers are already known.

```text
Features + Known Target
          ↓
       Training
          ↓
        Model
          ↓
    New prediction
```

There are two major types:

### Regression

Predicts a **continuous numerical value**.

Examples:

- house price
- temperature
- salary
- exam score

### Classification

Predicts a **category or class**.

Examples:

- spam / not spam
- pass / fail
- fraud / not fraud
- cat / dog

---

# 7. Unsupervised Learning

In **unsupervised learning**, we give the model data without known target answers and ask it to find useful patterns or structure in the data.

For example, we might give a model information about customers without telling it what groups they belong to.

The model may discover groups of customers with similar behavior.

So:

```text
Supervised → Learn from known answers
Unsupervised → Find patterns without known answers
```

---

# 8. Regression

Regression is a supervised learning problem where the target is a numerical value.

For example:

```text
Hours studied → Exam score
```

If we plot the observations, we might try to find a line that describes the relationship.

The basic linear regression equation is:

$$
\hat{y}=b_0+b_1x
$$

or equivalently:

$$
\hat{y}=b+mx
$$

where:

- \(\hat y\) = predicted value
- \(x\) = input feature
- \(b_0\) = intercept
- \(b_1\) = slope/coefficient

The model is trying to find the parameters that produce predictions as close as possible to the actual values.

---

# 9. Error and Least Squares

For every observation, we have an error:

$$
Error = Actual - Predicted
$$

For example:

```text
Actual = 80
Predicted = 75

Error = 80 - 75
      = 5
```

But simply adding errors can cause a problem.

For example:

```text
+10
-10
```

would give:

```text
0
```

even though the model made two errors.

So we square the errors:

$$
Error^2=(Actual-Predicted)^2
$$

Squaring does two important things:

1. It prevents positive and negative errors from cancelling each other.
2. It makes larger mistakes count more heavily.

### Least Squares

**Least Squares means choosing the model parameters that make the total squared error as small as possible.**

$$
SSE=\sum_{i=1}^{n}(y_i-\hat y_i)^2
$$

So the basic idea is:

```text
Make predictions
      ↓
Calculate errors
      ↓
Square errors
      ↓
Add them together
      ↓
Find parameters that minimize the total
```

---

# 10. Overfitting

**Overfitting occurs when a model learns the training data too specifically, including noise and unnecessary details, instead of learning the general pattern.**

For example, imagine a model that tries so hard to explain every training observation that it effectively memorizes them.

It may perform extremely well on training data but poorly on new data.

```text
Training performance → Excellent
Test performance     → Poor
```

The problem is that the model has learned the training data rather than the general relationship.

---

# 11. Regularization

Regularization helps control model complexity.

Instead of saying:

> "Only minimize prediction error."

we say:

> **"Minimize prediction error, but also avoid unnecessarily large or complicated model parameters."**

Conceptually:

$$
Total\ Cost =
Prediction\ Error + Complexity\ Penalty
$$

The complexity penalty discourages the model from relying too heavily on large coefficients.

Regularization is mainly used to improve **generalization** and reduce overfitting.

---

# 12. Ridge Regression

Ridge adds a penalty based on the **squared coefficients**.

Conceptually:

$$
Loss + \lambda\sum b_j^2
$$

where \(\lambda\) controls how strongly the model is penalized for large coefficients.

Ridge is basically saying:

> **"I want low prediction error, but I also don't want unnecessarily large coefficients."**

Ridge generally shrinks coefficients toward zero but usually does not make them exactly zero.

---

# 13. Lasso Regression

Lasso uses the **absolute values of the coefficients** instead of their squares.

$$
Loss+\lambda\sum|b_j|
$$

Lasso can shrink some coefficients all the way to exactly zero.

Therefore, Lasso can perform **feature selection**.

For example:

```text
Feature A → coefficient = 4.2
Feature B → coefficient = 0
Feature C → coefficient = 1.7
```

Feature B may effectively be removed from the model.

So:

```text
Ridge → Shrinks coefficients
Lasso → Can shrink coefficients to zero
```

---

# 14. Classification

Classification is a supervised learning problem where the target is a category.

For example:

```text
Email → Spam / Not Spam
```

One important classification model is **Logistic Regression**.

---

# 15. Logistic Regression

Logistic Regression takes the input features and estimates the **probability that an observation belongs to a class**.

First, it calculates a linear score:

$$
z=b_0+b_1x_1+b_2x_2+\cdots+b_nx_n
$$

Then it passes that score through the sigmoid function:

$$
p=\frac{1}{1+e^{-z}}
$$

The sigmoid converts any real number into a value between 0 and 1.

So:

```text
Linear score
     ↓
Sigmoid
     ↓
Probability
```

For example:

```text
p = 0.90
```

means the model estimates a 90% probability of belonging to the positive class.

With the usual 0.5 decision threshold:

```text
p ≥ 0.5 → Class 1
p < 0.5 → Class 0
```

Since \(p=0.5\) occurs when \(z=0\):

```text
z > 0 → p > 0.5 → Class 1
z < 0 → p < 0.5 → Class 0
```

A **positive coefficient** pushes the prediction toward class 1.

A **negative coefficient** pushes the prediction toward class 0.

---

# 16. Logistic Regression Loss

Linear Regression commonly uses squared error / least squares.

Logistic Regression uses a different loss function called **Log Loss**, also known as **Binary Cross-Entropy** for binary classification.

$$
L=-[y\log(p)+(1-y)\log(1-p)]
$$

The intuition is:

> **Being confidently wrong should be punished much more than being uncertain.**

For example:

```text
Actual = 1

Prediction = 0.9 → good
Prediction = 0.6 → somewhat good
Prediction = 0.1 → very bad
```

Log loss is designed to capture this difference.

---

# 17. k-Nearest Neighbors (k-NN)

k-NN works differently from Logistic Regression.

Instead of learning a mathematical decision boundary, k-NN looks at the **nearest observations in the training data**.

The basic idea is:

> **"Find the examples most similar to this new example and use them to make the prediction."**

For classification:

```text
Find k nearest neighbors
        ↓
Look at their classes
        ↓
Majority vote
        ↓
Prediction
```

For regression:

```text
Find k nearest neighbors
        ↓
Look at their target values
        ↓
Average them
        ↓
Prediction
```

---

# 18. Euclidean Distance

A common way to measure distance between observations is **Euclidean distance**.

For two points:

$$
A=(x_1,x_2)
$$

and

$$
B=(y_1,y_2)
$$

the distance is:

$$
d(A,B)=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}
$$

The model uses this type of distance to determine which training examples are closest.

Because k-NN depends heavily on distance, **feature scaling is especially important**.

---

# 19. Decision Trees

A Decision Tree makes predictions through a sequence of questions about the features.

For example:

```text
Is attendance > 80%?
        ↓
      Yes
        ↓
Is previous score > 70?
        ↓
      Yes
        ↓
      Pass
```

The structure contains:

- Root → first question
- Branches → possible outcomes
- Internal nodes → additional questions
- Leaves → final predictions

The tree repeatedly searches for useful splits.

```text
All data
   ↓
Try possible splits
   ↓
Measure split quality
   ↓
Choose best split
   ↓
Split data
   ↓
Repeat
   ↓
Build branches
   ↓
Stop
   ↓
Prediction
```

---

# 20. Entropy

**Entropy measures how mixed or impure a group is.**

The formula is:

$$
H(S)=-\sum p_i\log_2(p_i)
$$

If a group contains only one class, it is completely pure:

$$
Entropy=0
$$

If a binary group is evenly divided between two classes, it has high impurity:

$$
Entropy=1
$$

The tree tries to create splits that make the resulting groups more pure.

---

# 21. Information Gain

**Information Gain measures how much a split reduces impurity.**

Conceptually:

$$
Information\ Gain
=
Entropy_{before}
-
Entropy_{after}
$$

So a good split is one that creates cleaner groups.

```text
Before split
    ↓
Very mixed

      ↓ split

After split
   ↓       ↓
Mostly   Mostly
Class A  Class B
```

The tree chooses splits that provide high information gain or another suitable impurity reduction measure.

---

# 22. Comparing Classification Models

The basic idea behind the models is different:

```text
Logistic Regression
        ↓
Learn a decision boundary

k-NN
        ↓
Find nearby observations

Decision Tree
        ↓
Ask a sequence of questions

SVM
        ↓
Find a boundary with maximum margin
```

---

# 23. Support Vector Machine (SVM)

A Support Vector Machine tries to find a decision boundary that separates classes while leaving the **largest possible margin** between them.

Imagine:

```text
Class A     |     Class B
  ● ●       |       ○ ○
  ● ●       |       ○ ○
```

Instead of simply finding any boundary, SVM tries to find the boundary that gives the classes the greatest separation.

The decision boundary can be represented as:

$$
w^Tx+b=0
$$

The points closest to the boundary are called **support vectors**.

They are especially important because they help determine the position of the boundary.

---

# 24. SVM — C

**C controls how much the model cares about classification mistakes.**

Conceptually:

### Smaller C

```text
Allow more mistakes
       ↓
Wider margin
       ↓
Simpler boundary
```

### Larger C

```text
Penalize mistakes more
       ↓
Try harder to classify training points correctly
       ↓
Potentially more complex boundary
```

---

# 25. SVM — Gamma

Gamma is important for certain nonlinear kernels, such as the RBF kernel.

It controls how much influence an individual training point has.

### Low gamma

```text
Individual points have wider influence
          ↓
Smoother boundary
```

### High gamma

```text
Individual points have more local influence
          ↓
More complex boundary
```

So:

```text
Low gamma  → smoother
High gamma → more complex
```

---

# 26. Ensemble Learning

**Ensemble learning means combining multiple models to create a stronger overall model.**

The basic idea is:

> **Instead of trusting one model, combine several models so their strengths can compensate for each other's weaknesses.**

One important ensemble method is the **Random Forest**.

---

# 27. Random Forest

A Random Forest is a collection of Decision Trees whose predictions are combined.

For classification:

```text
Tree 1 → Class A
Tree 2 → Class B
Tree 3 → Class A
Tree 4 → Class A
       ↓
Majority vote
       ↓
Class A
```

For regression, the predictions are usually averaged.

Random Forest introduces randomness in two major ways.

### 1. Random samples of training data

Each tree can receive a different **bootstrap sample** of the training data.

### 2. Random subsets of features

When a tree considers a split, it does not necessarily consider every feature.

It considers a randomly selected subset.

This creates diversity between the trees.

---

# 28. Bagging

Bagging stands for **Bootstrap Aggregating**.

The basic process is:

```text
Original training data
        ↓
Create different bootstrap samples
        ↓
Train separate models
   ↓      ↓      ↓
Model 1 Model 2 Model 3
   ↓      ↓      ↓
       Combine
```

For regression:

> Average the predictions.

For classification:

> Use majority voting.

The models are trained **independently**, which means they can be trained in parallel.

Random Forest is related to bagging because it combines bootstrap sampling with additional randomness in feature selection for Decision Trees.

---

# 29. Random Forest Hyperparameters

Some important Random Forest hyperparameters include:

### `n_estimators`

Number of trees in the forest.

```text
More trees → generally more stable predictions
```

but more computation is required.

### `max_depth`

Controls how deep each tree can grow.

```text
Too deep → can overfit
Too shallow → can underfit
```

### `max_features`

Controls how many features are considered when looking for a split.

These are **hyperparameters**, meaning they are settings we choose rather than parameters the model learns directly from the training data.

---

# 30. Boosting

Boosting is another ensemble approach.

Instead of building models independently like bagging, boosting builds models **sequentially**.

The basic idea is:

```text
Model 1
   ↓
Find what it gets wrong
   ↓
Model 2 focuses on improving those mistakes
   ↓
Model 3 improves further
   ↓
Combine the models
```

So:

> **Bagging → models are trained independently.**

> **Boosting → models are trained sequentially, with later models improving on earlier ones.**

---

# 31. AdaBoost

AdaBoost is one type of boosting.

The basic intuition is:

> **"Let's train another model that pays more attention to the examples the current model struggled with."**

The process is roughly:

```text
Start with equal importance for examples
        ↓
Train a weak learner
        ↓
Identify difficult/misclassified examples
        ↓
Give those examples more weight
        ↓
Train another learner
        ↓
Repeat
        ↓
Combine learners
```

So AdaBoost focuses increasingly on difficult examples.

---

# 32. Gradient Boosting

Gradient Boosting follows the same general sequential boosting idea, but it uses the **gradient of the loss function** to determine how the next model should improve the current model.

Conceptually:

```text
Current model
      ↓
Make predictions
      ↓
Calculate loss
      ↓
Determine direction that reduces the loss
      ↓
Train another model to make that correction
      ↓
Add the correction to the existing model
      ↓
Repeat
```

The model can be represented conceptually as:

$$
F_m(x)=F_{m-1}(x)+\eta h_m(x)
$$

where:

- \(F\_{m-1}(x)\) = current model
- \(h_m(x)\) = new model making a correction
- \(\eta\) = learning rate

For squared-error regression, the next tree behaves much like it is learning the current residuals.

---

# 33. XGBoost

**XGBoost stands for Extreme Gradient Boosting.**

It is not a completely different idea from Gradient Boosting.

Instead, it is a highly optimized and more advanced implementation of **gradient-boosted decision trees**.

It adds techniques such as:

- regularization
- efficient tree construction
- model complexity control
- handling of missing values
- optimization improvements
- use of gradient and second-order information

The basic idea is still:

```text
Tree 1
  ↓
Correction
  ↓
Tree 2
  ↓
Correction
  ↓
Tree 3
  ↓
...
  ↓
Strong combined model
```

So the mental map is:

```text
Ensemble Learning
│
├── Bagging
│      └── Random Forest
│
└── Boosting
       ├── AdaBoost
       ├── Gradient Boosting
       └── XGBoost
```

---

# 34. Underfitting

**Underfitting occurs when the model is too simple to capture important patterns in the data.**

```text
Model too simple
      ↓
Misses important patterns
      ↓
Poor training performance
      ↓
Poor test performance
```

For example, trying to describe a complicated nonlinear relationship with an overly simple model can lead to underfitting.

---

# 35. Overfitting

**Overfitting occurs when a model becomes too focused on the training data and learns noise or unnecessary details instead of the general pattern.**

```text
Model too flexible
      ↓
Learns patterns + noise
      ↓
Excellent training performance
      ↓
Poor test performance
```

So:

> **Underfitting → model hasn't learned enough.**

> **Overfitting → model has learned the training data too specifically.**

---

# 36. Bias and Variance

Bias and variance help us understand different sources of model error.

### High Bias

A high-bias model is often too simple.

```text
Model too simple
      ↓
Misses important patterns
      ↓
Underfitting
```

Think:

> **"Is my model making systematic mistakes because it is too simple?"**

### High Variance

A high-variance model is very sensitive to the particular training data it receives.

```text
Model too flexible
      ↓
Learns training-specific details
      ↓
Overfitting
```

Think:

> **"Is my model too sensitive to this particular training dataset?"**

A useful intuition is:

```text
High Bias
   ↓
Underfitting

High Variance
   ↓
Overfitting
```

These are related, but bias and underfitting are not literally the same thing, and variance and overfitting are not literally the same thing.

---

# 37. Bias-Variance Tradeoff

As model complexity increases:

```text
Too simple
    ↓
High bias
    ↓
Underfitting

        ↓
   Sweet spot
        ↓
Good generalization

        ↓
Too complex
    ↓
High variance
    ↓
Overfitting
```

The goal is not to make the model as simple as possible or as complicated as possible.

The goal is to find a model that learns the important patterns while still generalizing well to unseen data.

---

# 38. Feature Engineering

**Feature engineering is creating, transforming, or representing features in a way that helps a model learn useful patterns.**

For example:

```text
Date of birth → Age
```

Other examples:

```text
Date → Month
Height + Weight → BMI
Income → log(Income)
Purchase history → Days since last purchase
```

Feature engineering can also create interaction features.

For example:

$$
StudyHours \times Attendance
$$

This may represent an interaction between two variables.

A useful real-world example from the AI_WALKS climate project is:

```text
YEAR + DOY
     ↓
Date
     ↓
Month
```

We are transforming the raw information into features that may be more useful for analysis or modeling.

Feature engineering can be powerful, but it must be done carefully to avoid introducing **data leakage**.

---

# 39. Feature Selection

**Feature selection means choosing which existing features should be kept for the model.**

For example:

```text
Features
│
├── age              → keep
├── income           → keep
├── previous_score   → keep
├── student_id       → remove
├── favorite_color   → maybe remove
└── random_number    → remove
```

Feature selection can help:

- reduce noise
- reduce unnecessary complexity
- reduce computation
- improve interpretability
- reduce redundancy
- sometimes reduce overfitting

There are three major approaches:

### Filter Methods

Evaluate features independently of a particular model.

Examples:

- correlation
- statistical tests
- mutual information

### Wrapper Methods

Try different subsets of features and evaluate how well a model performs with them.

They can be computationally expensive.

### Embedded Methods

Feature selection happens as part of model training.

For example, **Lasso** can drive some coefficients to zero.

```text
Feature Selection
│
├── Filter methods
├── Wrapper methods
└── Embedded methods
```

An important rule:

> **Feature selection should be based on training data, not the test data.**

Otherwise, information from the test set can influence the model-building process.

---

# 40. Data Leakage

**Data leakage occurs when information that should not be available during prediction enters the model-training process.**

The easiest question to ask is:

> **"Would I actually have this information at the exact moment I make the prediction?"**

If the answer is no, it may be leakage.

For example, suppose we want to predict whether a student will pass an exam **before the exam happens**.

Valid features might be:

```text
study_hours
attendance
previous_score
```

But:

```text
final_exam_score
```

would be leakage because we only know it after the exam.

The model would be getting information from the future.

---

## Data Leakage Through the Test Set

The test set should remain unseen.

For example, if we use the entire dataset to decide which features are important and then split into training and testing data:

```text
TRAIN + TEST
     ↓
Feature Selection
     ↓
Split
```

the test data has influenced the model-building process.

A safer process is:

```text
TRAIN + TEST
     ↓
Split
  ↙     ↘
TRAIN   TEST
  ↓
Learn feature choices
  ↓
Train model

TEST
  ↓
Only evaluate
```

The same principle applies to preprocessing such as scaling.

The general rule is:

> **Anything that learns information from the data should learn it from the training set, then be applied to the test set.**

---

# 41. The Overall ML Mental Map

The concepts we've covered fit together like this:

```text
                    MACHINE LEARNING
                          │
              ┌───────────┴───────────┐
              │                       │
        SUPERVISED              UNSUPERVISED
              │
       ┌──────┴──────┐
       │             │
   REGRESSION   CLASSIFICATION
       │             │
 Linear Regression   Logistic Regression
 Multiple Regression k-NN
 Ridge               Decision Trees
 Lasso               SVM
                     │
                     ↓
                ENSEMBLES
                     │
              ┌──────┴──────┐
              │             │
           BAGGING       BOOSTING
              │             │
       Random Forest    AdaBoost
                        Gradient Boosting
                        XGBoost
```

And around all of these models, we have concepts that help us build better models:

```text
                    MODEL
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
Feature Engineering  Feature      Regularization
                     Selection
       │              │              │
       └──────────────┼──────────────┘
                      ↓
              Generalization
                      │
              ┌───────┴───────┐
              ↓               ↓
         Underfitting      Overfitting
              │               │
          High Bias       High Variance
```

And one thing we must always watch for:

```text
             DATA LEAKAGE 🚨
                  ↓
Information enters the
training process that
wouldn't be available
during real prediction
```

The ultimate goal of all of this is:

> **Learn useful patterns from training data and use those patterns to make reliable predictions on unseen data.**
