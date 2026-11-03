OH, now I get you. 😭

We're putting Deep Learning aside completely.

You want to create **The Odin Project-style assignments for the four ML projects we've already completed**, so each project has a proper assignment page documenting what you were supposed to build, why, and how.

Here are the four assignments.

# MACHINE LEARNING — PROJECT PORTFOLIO

## 01. California Housing — House Price Prediction

**Project type:** Supervised Learning · Regression

**Project description**

Build a machine learning model that predicts median house values in California using housing and demographic information.

The objective is to develop a regression model capable of estimating house prices from multiple input features.

**Assignment**

1. Obtain and understand the California Housing dataset.
2. Perform exploratory data analysis.
3. Investigate feature distributions and correlations.
4. Identify missing values and potential outliers.
5. Prepare features and target variables.
6. Split the dataset into training and testing sets.
7. Establish a baseline regression model.
8. Train and compare multiple regression algorithms.
9. Evaluate models using MAE and R².
10. Improve the best-performing model.
11. Save the trained model.
12. Load the saved model and make predictions on new inputs.

**Completed project highlights**

- Compared multiple regression approaches.
- Selected HistGradientBoostingRegressor.
- Achieved test R² of approximately 0.8481.
- Achieved test MAE of approximately 0.2941.
- Saved the trained model using Joblib.

---

## 02. SMS Spam Detection

**Project type:** Supervised Learning · Binary Classification · NLP

**Project description**

Build a machine learning classifier that identifies whether an SMS message is legitimate or spam.

The objective is to develop a text-classification model that can distinguish unwanted messages from normal communication.

**Assignment**

1. Obtain and understand the SMS Spam Collection dataset.
2. Explore the dataset and examine class distributions.
3. Investigate missing values and duplicate messages.
4. Clean and prepare the text data.
5. Convert text into numerical representations using TF-IDF.
6. Split the dataset into training and testing sets.
7. Establish a baseline classifier.
8. Train multiple classification algorithms.
9. Evaluate models using:
   - Accuracy
   - Precision
   - Recall
   - F1-score
   - Confusion matrix

10. Investigate false positives and false negatives.
11. Examine the impact of class imbalance.
12. Compare models using cross-validation.
13. Select and save the best-performing model.
14. Test the model using new SMS messages.

**Completed project highlights**

- Compared Multinomial Naive Bayes, Logistic Regression, and Linear SVM.
- Selected Linear SVM.
- Achieved approximately 98.16% test accuracy.
- Achieved approximately 0.89 spam recall.
- Evaluated performance using five-fold cross-validation.

---

## 03. Customer Churn Prediction

**Project type:** Supervised Learning · Binary Classification

**Project description**

Build a machine learning model that predicts whether a telecommunications customer is likely to discontinue their service.

The objective is to identify customers who may churn based on their account information, subscription details, and service usage.

**Assignment**

1. Obtain and understand the Telco Customer Churn dataset.
2. Explore the dataset structure and target distribution.
3. Investigate missing values and inconsistent records.
4. Perform exploratory data analysis.
5. Identify relationships between customer characteristics and churn.
6. Clean and preprocess the data.
7. Encode categorical variables.
8. Split the dataset into training and testing sets.
9. Establish a baseline classification model.
10. Train and compare multiple classification algorithms.
11. Evaluate models using:
    - Accuracy
    - Precision
    - Recall
    - F1-score
    - Confusion matrix

12. Investigate class imbalance.
13. Experiment with class weighting and decision thresholds.
14. Compare model performance.
15. Select and save the final model.
16. Test predictions using new customer records.

**Completed project highlights**

- Compared Logistic Regression, Random Forest, Gradient Boosting, and XGBoost.
- Investigated class imbalance.
- Experimented with different classification thresholds.
- Selected a balanced Logistic Regression approach with a 0.4 decision threshold.
- Achieved approximately 0.64 recall for the churn class on validation data.

---

## 04. Customer Segmentation

**Project type:** Unsupervised Learning · Clustering

**Project description**

A UK-based online retailer wants to understand its customer base better.

Rather than treating every customer the same, the business wants to discover groups of customers with similar purchasing behaviors.

Your task is to develop a machine learning solution that identifies meaningful customer segments using historical transaction data.

**Assignment**

1. Obtain and understand the UCI Online Retail dataset.
2. Explore the transaction records and understand their structure.
3. Investigate missing customer identifiers, cancelled invoices, negative quantities, and duplicate records.
4. Clean the transaction data.
5. Engineer a TotalPrice feature.
6. Aggregate transaction records into customer-level data.
7. Calculate RFM features:
   - Recency
   - Frequency
   - Monetary

8. Investigate feature distributions and skewness.
9. Apply logarithmic transformation.
10. Standardize the features.
11. Determine an appropriate number of clusters using:
    - Elbow Method
    - Silhouette Score

12. Train a K-Means clustering model.
13. Interpret and profile the resulting clusters.
14. Visualize customer segments.
15. Evaluate clustering quality using silhouette analysis.
16. Investigate clustering stability using Adjusted Rand Index.
17. Analyze customer and revenue distribution across clusters.
18. Develop business interpretations for each segment.
19. Save the scaler and clustering model.
20. Load the saved models and assign clusters to new customer records.

**Completed project highlights**

- Created four customer segments.
- Achieved an overall silhouette score of approximately 0.3375.
- Tested clustering stability using ARI.
- Discovered that approximately 16.44% of customers generated 64.89% of total revenue.
- Saved and successfully tested the clustering model.

---

# Portfolio completion

| Project               | ML category    | Status |
| --------------------- | -------------- | ------ |
| House Prediction      | Regression     | ✅     |
| Spam Detection        | Classification | ✅     |
| Customer Churn        | Classification | ✅     |
| Customer Segmentation | Clustering     | ✅     |

These are the four assignments that document your completed work.

**Important:** These are reconstructed project assignments based on what we actually did, not claims that you completed additional tasks.

We can use this same assignment-documentation approach for every future ML project.
