what make traditional coding different from ML is that for coding u normally just give the rules like: if email has "win money"==spam on the other side for ML u give it many emails that has a label spam and not spam it learns from the pattern and decides for the coming on emails.
features: featuures are the variables that can make a difference in the prediction the learning machine is gonna make
training: giving exaples to the machine that are already solved and has the pattern so teaching it
testing:evaluating on unseen data
inference: making it make the prediction
supervised Learning:the model learn from the known answers
two type of it:
regression: predict continuous numerical value

classification:predict a category
unsupervised Learning:u give the machine data and ask it to figure out the pattern in there
so to focus on regression supervised learning this is the model we use for math works:
and it uses the linear formula y=b+mx
For each observation, we have an error:

error=actual−predicted
Squaring helps quantify error in a way that prevents cancellation and emphasizes large mistakes.
Least Squares means choosing the model parameters that make the total squared error as small as possible.
overfitting :when a model learns random unnecessary things that just complicates the points
regularization:Don't just minimize the prediction error. Also avoid unnecessarily complicated coefficients.
Total Cost=Prediction Error+Complexity Penalty
Ridge:"I want low prediction error, but I also don't want huge coefficients."
Lasso;Instead of squaring the coefficients, Lasso uses their absolute values.
Lasso can perform feature selection.
Regularization tries to improve generalization by preventing the model from becoming unnecessarily dependent on the training data.
classification:logistic regression....the probability to sth like Take the input features and estimate the probability that an observation belongs to a class.
Sigmoid Function:p=1/1+e-z z being =b0+b1x1+b2x2...
if z>0=class 1 if z<0 =class 0
A positive coefficient pushes the prediction toward class 1.

A negative coefficient pushes it toward class 0.
logistic regression uses "loss" instead of least squares
"LOG LOSS":binary cross entropy
Being confidently wrong is much worse than being uncertain. and thats where classification loss come in
KNN: instead of doing the cuzlculation all over again it compares with nearest numbers
the most common distance comparing methode:euclidean methode...
decision trees: instead of numbers or neighbors this one focses on sequences of quetsions
entropy measures how impure or mixed a grp is
information gain: how much did this information make our split purer
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
Prediction
│
┌────────────────┼─────────────────┐
│ │ │
Logistic k-NN Decision Tree
│ │ │
Learn boundary Find neighbors Ask questions
SVM(support vector machine):Choose the boundary that leaves the largest possible margin between the two classes.
