# PHASE 5: UNSUPERVISED LEARNING

## 1. Introduction to Unsupervised Learning

Unsupervised learning differs from supervised learning because the data is not provided with predefined answers or labels for the model to learn from.

Instead, the algorithm examines the available features and discovers patterns, structures, similarities, and unusual observations within the data.

**Supervised learning:** Learns from labeled examples to predict known outcomes.

**Unsupervised learning:** Discovers patterns and structures without predefined outcome labels.

### Main applications

- Clustering: Discovering groups of similar observations.
- Dimensionality reduction: Reducing the number of features while preserving useful information.
- Anomaly detection: Identifying observations that differ significantly from normal patterns.

---

# 2. CLUSTERING

Clustering is an unsupervised learning technique that groups data points based on how similar they are to each other.

The objective is to:

- Group similar observations together.
- Separate observations that are sufficiently different.

For example, a business might group customers based on purchasing behavior, spending habits, and purchase frequency.

The algorithm creates the groups. We then analyze the characteristics of each group to understand what they represent.

### Main clustering algorithms

1. K-Means
2. Hierarchical Clustering
3. DBSCAN

---

# 3. K-MEANS CLUSTERING

K-Means is an unsupervised clustering algorithm that divides data into K groups based on the distance between observations and their cluster centers.

### Important concepts

**K:** The number of clusters we want the algorithm to create.

**Centroid:** The center of a cluster, calculated as the mean position of all observations assigned to that cluster.

A centroid does not necessarily have to be an actual observation in the dataset.

**Distance:** Measures how far an observation is from a centroid. Euclidean distance is commonly used.

### How K-Means works

1. Choose the number of clusters (K).
2. Initialize K centroids.
3. Calculate the distance between each observation and every centroid.
4. Assign each observation to its nearest centroid.
5. Recalculate each centroid using the mean of its assigned observations.
6. Repeat the assignment and recalculation steps until the clusters stabilize or a stopping condition is reached.

### Within-Cluster Sum of Squares (WCSS)

WCSS measures how close observations are to their assigned cluster centroids.

It calculates the sum of squared distances between observations and their respective centroids.

A lower WCSS generally indicates that observations are closer to their cluster centers.

However, WCSS naturally decreases as K increases because more clusters allow observations to be closer to their respective centroids.

This creates a challenge: increasing K can always improve WCSS, but too many clusters are not necessarily useful.

### Elbow Method

The Elbow Method helps us estimate an appropriate number of clusters (K).

How it works:

1. Run K-Means using different K values.
2. Calculate the WCSS for each K.
3. Plot K against WCSS.
4. Look for the point where the rate of WCSS reduction begins to slow down significantly.

This point is called the elbow.

The idea is to find a balance between reducing within-cluster distances and avoiding unnecessarily many clusters.

**Important:** The elbow is not always obvious. Sometimes the graph doesn't provide a clear answer.

### Silhouette Score

When the Elbow Method doesn't provide a satisfying answer, we can also use the Silhouette Score to evaluate clustering quality.

Unlike WCSS, it considers two things:

**A. Cohesion**

How close an observation is to other observations in its own cluster.

Lower average distance means better cohesion.

**B. Separation**

How far an observation is from observations in its nearest alternative cluster.

Higher distance means better separation.

Formula:

S = (b - a) / max(a, b)

Where:

- a = Average distance to observations in the same cluster.
- b = Average distance to observations in the nearest alternative cluster.

The score ranges from -1 to +1:

- Close to +1: The observation is well matched to its cluster.
- Around 0: The observation is close to a cluster boundary.
- Close to -1: The observation may have been assigned to the wrong cluster.

A higher average Silhouette Score generally indicates better-separated, more cohesive clusters.

### Limitations of K-Means

K-Means works particularly well when clusters are relatively compact and roughly spherical.

However, it has several weaknesses:

1. You must specify K beforehand.
2. Outliers can pull centroids away from their appropriate positions.
3. It struggles with irregularly shaped clusters.
4. Different initial centroids can produce different results.
5. Feature scaling matters because features with larger numerical ranges can dominate distance calculations.

---

# 4. HIERARCHICAL CLUSTERING

Hierarchical clustering builds a hierarchy of clusters rather than immediately dividing the dataset into a predefined number of groups.

There are two approaches:

### A. Agglomerative Clustering (Bottom-Up)

1. Start with every observation as an individual cluster.
2. Find the closest observations or clusters.
3. Merge them.
4. Repeat until everything becomes one large cluster.

### B. Divisive Clustering (Top-Down)

1. Start with all observations in one large cluster.
2. Divide the cluster into smaller clusters.
3. Continue dividing until observations are separated into individual clusters or another stopping condition is reached.

Agglomerative clustering is the more commonly used approach.

### Linkage Methods

Linkage methods determine how we measure the distance between two clusters.

**1. Single Linkage — Minimum Distance**

Measures the distance between two clusters by finding the two closest observations, one from each cluster.

_Chaining Effect:_

Single linkage can produce a chaining effect.

This happens when observations gradually connect through nearby neighbors, causing two clusters whose farthest points are quite distant to become one large cluster.

**2. Complete Linkage — Maximum Distance**

Measures the distance between two clusters using the farthest pair of observations, one from each cluster.

It tends to produce more compact clusters and reduces the chaining effect.

However, it can be sensitive to outliers because one unusually distant observation can increase the distance between two clusters.

**3. Average Linkage — Average Distance**

Calculates the average distance between all pairs of observations across two clusters.

It provides a compromise between single and complete linkage.

**4. Ward's Linkage**

Ward's method considers how much merging two clusters would increase the total within-cluster variation.

It chooses the merge that causes the smallest increase in that variation.

The objective is to avoid creating clusters that become unnecessarily spread out.

### Dendrogram

A dendrogram is a tree-like visualization showing how clusters are merged during hierarchical clustering.

Important concepts:

- The horizontal axis represents observations.
- The vertical axis represents the distance or linkage value at which clusters merge.
- A horizontal cut through the dendrogram determines the resulting clusters.
- The number of branches intersected by the cut indicates the number of clusters.

A large vertical gap between merges can indicate a useful place to cut because it suggests that the next merge would combine relatively dissimilar clusters.

**Important:** Hierarchical clustering builds the hierarchy, but we still decide where to cut it to obtain the final clusters.

---

# 5. DBSCAN

DBSCAN stands for Density-Based Spatial Clustering of Applications with Noise.

Unlike K-Means, which uses centroids, DBSCAN identifies clusters based on the density of observations in an area.

It is particularly useful for:

- Finding irregularly shaped clusters.
- Identifying noise and outliers.
- Clustering without specifying K beforehand.

### Two Main Parameters

**A. Epsilon (ε)**

Epsilon defines the maximum distance around an observation for considering other observations its neighbors.

Imagine ε = 2.

If Customer A is at position (5, 5), DBSCAN examines observations within distance 2 of that customer.

Think of epsilon as the size of the neighborhood we're examining.

**B. MinPts**

MinPts specifies the minimum number of observations required within an epsilon neighborhood for an observation to qualify as a core point.

For example:

ε = 2
MinPts = 4

An observation needs at least four observations in its epsilon neighborhood to qualify as a core point.

The observation itself is included in this count under the standard DBSCAN definition.

### Three Types of Points

**1. Core Point**

An observation that has at least MinPts observations within its epsilon neighborhood.

Core points can expand clusters.

**2. Border Point**

An observation that has fewer than MinPts observations in its own neighborhood but lies within the neighborhood of a core point.

It belongs to a cluster but cannot independently expand it.

**3. Noise Point**

An observation that is neither a core point nor density-reachable from a core point.

It is treated as noise or an outlier.

### How DBSCAN Forms Clusters

1. Select an observation.
2. Examine its epsilon neighborhood.
3. If it meets MinPts, classify it as a core point.
4. Expand the cluster using neighboring core points.
5. Include reachable border points.
6. Observations that cannot be connected to any cluster remain noise.

A chain of connected core points can connect two dense areas, even if the endpoints are far apart.

This allows DBSCAN to discover irregularly shaped clusters.

### Limitations of DBSCAN

1. Choosing appropriate epsilon and MinPts values can be difficult.
2. It struggles when clusters have significantly different densities because one parameter setting may not work well for all clusters.
3. It is sensitive to feature scaling.
4. It can struggle with high-dimensional datasets.

### Comparing the Three Clustering Algorithms

| Characteristic            | K-Means    | Hierarchical             | DBSCAN                      |
| ------------------------- | ---------- | ------------------------ | --------------------------- |
| Main approach             | Centroids  | Cluster hierarchy        | Density                     |
| Requires K?               | Yes        | No, not initially        | No                          |
| Irregular shapes          | Struggles  | Depends on linkage       | Handles well                |
| Detects noise explicitly? | No         | No                       | Yes                         |
| Main challenge            | Choosing K | Choosing linkage and cut | Choosing epsilon and MinPts |

---

# 6. DIMENSIONALITY REDUCTION

Dimensionality refers to the number of features or columns in a dataset.

For example, a dataset with 50 features has 50 dimensions.

As the number of dimensions increases, several problems can arise:

- Data becomes harder to visualize.
- Computation becomes more expensive.
- Features may contain redundant information.
- Distances can become less meaningful in high-dimensional spaces (the curse of dimensionality).

### What is Dimensionality Reduction?

It is the process of reducing the number of dimensions while trying to preserve useful information.

There are two main approaches:

### A. Feature Selection

Select existing features and remove unnecessary ones.

Example:

You have 10 features but discover that 3 are irrelevant.

You remove those 3 and keep the remaining 7 unchanged.

### B. Feature Extraction

Create new features by combining information from existing features.

Instead of selecting existing columns, you transform them into a smaller set of new features.

PCA is an example of feature extraction.

---

# 7. PRINCIPAL COMPONENT ANALYSIS (PCA)

PCA is a dimensionality reduction technique that transforms original features into new features called principal components.

Its objective is to preserve as much of the original data's variance as possible using fewer dimensions.

### Variance

Variance measures how spread out values are from their mean.

- Low variance: Values are close to each other.
- High variance: Values are more spread out.

PCA searches for directions in the data that capture the greatest amount of variance.

### Principal Components

Principal components are new directions through the data that capture its variation.

**PC1 — First Principal Component**

Captures the greatest possible variance in the dataset.

**PC2 — Second Principal Component**

Captures the greatest remaining variance while being perpendicular (90 degrees) to PC1.

Additional components follow the same principle: each captures as much remaining variance as possible while being perpendicular to the previous components.

### Explained Variance Ratio

The explained variance ratio tells us how much of the original dataset's variance each principal component captures.

For example:

- PC1 = 70%
- PC2 = 20%
- PC3 = 5%

The first two components together explain 90% of the original variance.

This means we can reduce the dimensions while retaining 90% of the variance.

### Eigenvectors and Eigenvalues

These mathematical concepts are used to calculate principal components.

**Eigenvectors:** Determine the directions of the principal components.

**Eigenvalues:** Tell us how much variance each direction captures.

Remember:

- Eigenvector = Direction.
- Eigenvalue = Amount of variance.

### Important PCA Considerations

1. PCA creates new components rather than simply retaining selected original features.
2. Components can combine information from multiple original features.
3. PCA is sensitive to feature scales, so numerical features are generally standardized before applying it.
4. High variance does not automatically mean useful information for a particular prediction task.
5. PCA components can be harder to interpret than original features.

---

# 8. ANOMALY DETECTION

Anomaly detection is the process of identifying observations that are significantly different from the normal patterns in a dataset.

An anomaly is an observation that doesn't fit the general behavior of the data.

### Example

Imagine a bank's transaction dataset:

Most customers make transactions between $20 and $50.

One customer suddenly makes a transaction of $8,000.

The transaction is unusual and may be flagged for investigation.

However, unusual does not automatically mean fraudulent. It could be a legitimate transaction.

### Supervised vs. Unsupervised Anomaly Detection

**Supervised:**

Historical observations are labeled as normal or anomalous.

A classification model learns from these labels to identify future anomalies.

**Unsupervised:**

The data has no predefined anomaly labels.

The algorithm examines the data and identifies observations that differ significantly from normal patterns.

This is useful when we don't already know exactly what an anomaly looks like.

### Common Anomaly Detection Algorithms

**1. Isolation Forest**

- Randomly splits the dataset into smaller groups.
- Unusual observations tend to get isolated more quickly.
- Useful for identifying anomalies in larger datasets.

The basic idea is that unusual observations are easier to separate from the rest of the data.

**2. Local Outlier Factor (LOF)**

- Compares the local density around an observation with the density around its neighbors.
- If an observation is considerably less dense than its neighbors, it may be an anomaly.

LOF focuses on local density rather than comparing every observation against one global definition of normality.

**3. One-Class SVM**

- Learns a boundary around normal observations.
- Identifies observations that fall outside the learned boundary as potential anomalies.

### DBSCAN vs. LOF

Both use density concepts, but their purposes differ.

- DBSCAN uses density to discover clusters and identify noise.
- LOF uses local density comparisons to identify potential outliers.

---

# PHASE 5 SUMMARY

| Topic                    | Main Concept                                         |
| ------------------------ | ---------------------------------------------------- |
| Unsupervised Learning    | Discovering patterns without predefined labels       |
| Clustering               | Grouping similar observations                        |
| K-Means                  | Clustering using centroids                           |
| WCSS                     | Measuring within-cluster distances                   |
| Elbow Method             | Estimating an appropriate K                          |
| Silhouette Score         | Measuring cohesion and separation                    |
| Hierarchical Clustering  | Building a hierarchy of clusters                     |
| Linkage Methods          | Measuring distances between clusters                 |
| DBSCAN                   | Density-based clustering and noise detection         |
| Dimensionality Reduction | Reducing the number of features                      |
| Feature Selection        | Keeping existing useful features                     |
| Feature Extraction       | Creating new features from existing ones             |
| PCA                      | Creating principal components that preserve variance |
| Anomaly Detection        | Identifying unusual observations                     |
| Isolation Forest         | Isolating unusual observations                       |
| LOF                      | Comparing local densities                            |
| One-Class SVM            | Learning a boundary around normal observations       |

## Practical Project: Customer Segmentation

**Objective:** Discover customer groups automatically using their purchasing behavior.

**Proposed dataset:** UCI Online Retail Dataset.

**Planned workflow:**

1. Load and inspect the data.
2. Clean the dataset.
3. Perform exploratory data analysis.
4. Engineer customer-level features.
5. Apply dimensionality reduction where appropriate.
6. Apply clustering algorithms.
7. Evaluate the clustering results.
8. Interpret and describe the customer segments.
9. Save the model and results.

The final objective is not simply to produce clusters, but to understand what makes each customer group different and how a business could use that information.
