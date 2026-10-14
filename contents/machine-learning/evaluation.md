# Phase 3: Model Evaluation

## 1. Regression Metrics

Used to evaluate numerical predictions, such as house prices or temperatures.

### MAE — Mean Absolute Error

- Formula: `MAE = sum(|actual - predicted|) / n`
- Calculate each prediction error, take its absolute value, add them, and divide by the number of predictions.
- Less sensitive to large errors than MSE and RMSE.
- Uses the same units as the target.
- Lower is better.

### MSE — Mean Squared Error

- Formula: `MSE = sum((actual - predicted)²) / n`
- Square each prediction error, add the squared errors, and calculate their average.
- Penalizes large errors more heavily.
- Uses squared units.
- Lower is better.

### Training Loss vs. Evaluation Metric

- **Training loss:** A quantity the model's training process tries to minimize.
- **Evaluation metric:** A quantity used to assess model performance.
- They can be the same, but they do not have to be.

### RMSE — Root Mean Squared Error

- Formula: `RMSE = sqrt(MSE)`
- Take the square root of MSE.
- Penalizes large errors more heavily than MAE.
- Returns the error to the target's original units.
- Lower is better.

### R² — Coefficient of Determination

R² compares a model's squared prediction errors with the variation in the actual values around their mean.

**A. Total Sum of Squares (SST)**

- Measures how much actual values vary around their mean.
- Formula: `SST = sum((actual - mean of actual values)²)`

**B. Residual Sum of Squares (SSE)**

- Measures the squared prediction errors made by the model.
- Formula: `SSE = sum((actual - predicted)²)`

**R² formula:**

`R² = 1 - SSE/SST`

Interpretation:

- `R² = 1`: Perfect predictions.
- `R² = 0`: Performs as well as predicting the mean, in terms of squared error.
- `R² < 0`: Performs worse than the mean-prediction baseline.

An R² of 0.85 means the model's squared error is 85% lower than the mean-prediction baseline's squared error on that dataset. It does not mean 85% accuracy.

---

## 2. Classification Metrics

For binary classification, there are four possible outcomes:

- **True Positive (TP):** Actual positive, predicted positive.
- **True Negative (TN):** Actual negative, predicted negative.
- **False Positive (FP):** Actual negative, predicted positive.
- **False Negative (FN):** Actual positive, predicted negative.

### Accuracy

The proportion of all predictions that are correct.

`Accuracy = (TP + TN) / (TP + TN + FP + FN)`

Accuracy can be misleading when classes are imbalanced.

### Precision

Of all the cases predicted as positive, how many were actually positive?

`Precision = TP / (TP + FP)`

Important when false positives are costly.

Example: Avoiding incorrectly flagging legitimate bank transactions as fraud.

### Recall

Of all the actual positive cases, how many did the model identify?

`Recall = TP / (TP + FN)`

Important when missing a positive case is costly.

Example: Detecting as many actual disease cases as possible.

### F1-Score

The harmonic mean of precision and recall.

`F1 = 2 × (Precision × Recall) / (Precision + Recall)`

- Balances precision and recall.
- A low precision or recall lowers the F1-score.
- Useful when both false positives and false negatives matter.

### ROC — Receiver Operating Characteristic

The ROC curve shows the relationship between the true positive rate and false positive rate at different classification thresholds.

**True Positive Rate (TPR):**

`TPR = TP / (TP + FN) = Recall`

**False Positive Rate (FPR):**

`FPR = FP / (FP + TN)`

### ROC-AUC

Measures how well a model distinguishes positive cases from negative cases across thresholds.

- `AUC = 1.0`: Perfect ranking.
- `AUC = 0.5`: Random-ranking performance.
- `AUC < 0.5`: Worse-than-random ranking under the usual score convention.

An AUC of 0.92 does not mean 92% accuracy. It indicates strong ability to rank positive cases above negative cases.

### Classification Threshold

The threshold converts predicted probabilities into class predictions.

For a threshold of 0.5:

- Probability ≥ 0.5 → Positive.
- Probability < 0.5 → Negative.

Lowering the threshold often increases recall but may reduce precision because more negative cases are incorrectly classified as positive.

---

## 3. Training, Validation, and Test Sets

### Training Set

The data used to train the model and learn its parameters.

### Validation Set

The data used to compare models, tune hyperparameters, and make model-development decisions.

### Test Set

The data reserved for the final evaluation of the selected model.

The test set should not repeatedly influence model-development decisions. Otherwise, it is no longer an independent final evaluation.

### Overfitting

If a model performs very well on training data but struggles with unseen data, it may have overfitted.

Example:

- Training accuracy: 99%.
- Test accuracy: 72%.

The large gap suggests poor generalization.

---

## 4. Cross-Validation

Cross-validation evaluates a model using multiple training and validation splits.

### K-Fold Cross-Validation

1. Divide the dataset into K folds.
2. Train on K−1 folds.
3. Validate on the remaining fold.
4. Repeat until every fold has been used for validation.
5. Calculate the average validation score.

For 5-fold cross-validation, the model is trained and evaluated five times for a given configuration.

Benefits:

- Provides a more robust performance estimate than relying on one split.
- Helps compare models.
- Reveals variability in performance across folds.

Important variations:

- **Stratified K-Fold:** Helps preserve class proportions in classification.
- **Time-series validation:** Preserves chronological order.
- **Group-based validation:** Keeps related observations together when necessary.

---

## 5. Parameters and Hyperparameters

### Parameters

Values learned by the model during training.

Examples:

- Linear regression weights.
- Linear regression intercept.

### Hyperparameters

Settings chosen before or around the training process.

Examples:

- KNN's number of neighbors, `k`.
- A decision tree's maximum depth.
- The number of trees in a Random Forest.
- Ridge and Lasso regularization strength, `λ`.
- SVM's `C` and `gamma`.

### Hyperparameter Tuning

Trying different hyperparameter settings and using validation performance or cross-validation to choose among them.

Example:

- KNN with `k = 1`: May overfit.
- KNN with `k = 10`: May generalize better.
- KNN with `k = 100`: May underfit.

Choose the setting with the best appropriate validation performance, not by repeatedly adjusting the model based on test results.

---

## 6. Class Imbalance

Class imbalance occurs when one class has significantly more observations than another.

Example:

- 9,900 legitimate transactions.
- 100 fraudulent transactions.

A model that predicts every transaction as legitimate achieves 99% accuracy but detects no fraud.

Therefore, accuracy alone is insufficient.

Possible approaches:

- Evaluate precision, recall, and F1.
- Consider ROC-AUC and precision–recall AUC.
- Adjust the classification threshold.
- Use class weights.
- Consider oversampling or undersampling.

Resampling should be performed only on training data to avoid data leakage.

---

## 7. Baseline Models

A baseline is a simple reference model used to judge whether a more complex model provides useful improvement.

**Regression baseline:**

- Predict the training-set mean or median.
- The mean minimizes squared error; the median minimizes absolute error.

**Classification baseline:**

- Always predict the majority class.

A machine-learning model should be compared with an appropriate baseline rather than judged by its score alone.

---

## 8. Data Leakage

Data leakage occurs when information that should not be available during training or prediction influences the model.

It can make evaluation scores look unrealistically good.

### Target Leakage

A feature directly or indirectly reveals the target.

Example: Using a treatment given only after a disease diagnosis to predict whether the patient has that disease.

### Train–Test Contamination

Information from the test set influences training or preprocessing.

Example: Calculating missing-value imputation statistics from the entire dataset before splitting it.

### Prevention

- Split the data appropriately.
- Fit preprocessing steps on training data only.
- Apply those transformations to validation and test data.
- Use pipelines where appropriate.
- Keep the test set independent of model selection.

---

## 9. Generalization

Generalization is a model's ability to perform well on new, unseen data—not just the data it was trained on.

Example:

- Model A: 97% training accuracy, 96% test accuracy.
- Model B: 99% training accuracy, 72% test accuracy.

Model A appears to generalize better because its performance remains strong on unseen data.

**The goal is not simply to memorize training data. It is to learn patterns that remain useful on new observations.**
