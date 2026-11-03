# PyTorch Fundamentals

## 1. Introduction to PyTorch

PyTorch is an open-source Python framework used to build, train, and work with machine-learning and deep-learning models.

It provides tools for:

- Working with tensors.
- Building neural networks.
- Performing automatic differentiation.
- Training models using optimizers.
- Running computations on CPUs and GPUs.

```python
import torch
import torch.nn as nn
```

## 2. What is a Tensor?

A tensor is a multidimensional data structure used to store numerical values.

PyTorch uses tensors to represent input data, weights, biases, predictions, and other numerical computations.

### A. Scalar — 0D Tensor

A scalar contains a single numerical value.

```python
x = torch.tensor(5)

print(x)
print(x.ndim)
```

Output:

```text
tensor(5)
0
```

### B. Vector — 1D Tensor

A vector contains a sequence of values.

```python
x = torch.tensor([10, 20, 30])

print(x)
print(x.ndim)
```

### C. Matrix — 2D Tensor

A matrix contains rows and columns.

```python
x = torch.tensor([
    [10, 20, 30],
    [40, 50, 60]
])

print(x)
print(x.ndim)
```

Shape: `(2, 3)` — 2 rows and 3 columns.

### D. 3D Tensor

A 3D tensor contains multiple matrices.

```python
x = torch.tensor([
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
])

print(x.ndim)
print(x.shape)
```

Output:

```text
3
torch.Size([2, 2, 2])
```

### Important Tensor Properties

| Property   | Purpose                          |
| ---------- | -------------------------------- |
| `.shape`   | Returns tensor dimensions        |
| `.ndim`    | Returns number of dimensions     |
| `.numel()` | Returns total number of elements |
| `.dtype`   | Returns data type                |

Common data types:

- `torch.float32` — 32-bit floating-point numbers.
- `torch.float64` — 64-bit floating-point numbers.
- `torch.int64` — 64-bit integers.
- `torch.bool` — Boolean values.

For neural network inputs, `float32` is commonly used.

**Important:** If a dataset has 1,000 samples and 5 features, its input tensor generally has shape `(1000, 5)`.

Rows represent samples; columns represent features.

---

## 3. Autograd and Automatic Differentiation

Autograd is PyTorch's automatic differentiation engine.

It tracks mathematical operations performed on tensors and automatically calculates gradients when requested.

Gradients indicate how changes in model parameters affect the loss.

### Example

```python
x = torch.tensor(3.0, requires_grad=True)

y = x ** 2

y.backward()

print(x.grad)
```

Output:

```text
tensor(6.)
```

Explanation:

- `requires_grad=True`: tells PyTorch to track operations involving this tensor.
- `y = x ** 2`: performs a mathematical operation.
- `y.backward()`: calculates gradients through automatic differentiation.
- `x.grad`: retrieves the calculated gradient.

**Connection to neural networks:** During backpropagation, Autograd calculates gradients for the model's learnable parameters.

---

## 4. Building Neural Networks with nn.Module

`nn.Module` is the base class used to define neural network models in PyTorch.

It allows us to:

- Define layers.
- Connect layers together.
- Manage learnable parameters (weights and biases).
- Define forward propagation.

Instead of manually calculating every neuron's weighted sum, we can use predefined layers.

### A. Understanding nn.Linear

`nn.Linear` performs a linear transformation using weights and biases.

```python
layer = nn.Linear(3, 2)
```

This means:

- 3 input features.
- 2 output neurons.

Mathematically:

$$
Y=XW^T+b
$$

`nn.Linear` performs the transformation but does not automatically apply an activation function.

### B. Creating a Custom Neural Network

```python
class MyNeuralNetwork(nn.Module):

    def __init__(self):
        super().__init__()

        self.layer1 = nn.Linear(4, 8)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(8, 3)

    def forward(self, x):

        x = self.layer1(x)
        x = self.relu(x)
        x = self.layer2(x)

        return x
```

**Understanding the components:**

- `nn.Module`: parent class that provides PyTorch's model functionality.
- `__init__()`: defines the network's layers and components.
- `super().__init__()`: initializes the parent class.
- `forward()`: defines how input data moves through the network.
- `nn.Linear(4, 8)`: transforms 4 input features into 8 outputs.
- `nn.ReLU()`: applies the ReLU activation function.

### C. Using the Model

```python
model = MyNeuralNetwork()

X = torch.randn(100, 4)

predictions = model(X)

print(predictions.shape)
```

Output:

```text
torch.Size([100, 3])
```

We provided 100 samples, each containing 4 features. The network produces 3 outputs for each sample.

**Note:** `nn.Sequential` is another way to organize layers when they execute in a straightforward sequence. Custom `nn.Module` classes provide more flexibility.

---

## 5. Loss Functions in PyTorch

A loss function measures the difference between a model's predictions and the actual target values.

PyTorch provides different loss functions depending on the prediction task.

| Task                      | Example                      | PyTorch loss             |
| ------------------------- | ---------------------------- | ------------------------ |
| Regression                | House Price Prediction       | `nn.MSELoss()`           |
| Binary classification     | Spam Detection               | `nn.BCEWithLogitsLoss()` |
| Binary classification     | Customer Churn               | `nn.BCEWithLogitsLoss()` |
| Multiclass classification | Customer category prediction | `nn.CrossEntropyLoss()`  |

### A. Mean Squared Error (MSE)

Used for regression problems.

It calculates the average squared difference between predictions and actual values.

```python
loss_function = nn.MSELoss()

predictions = torch.tensor([200000.0, 300000.0, 400000.0])
actual = torch.tensor([210000.0, 290000.0, 410000.0])

loss = loss_function(predictions, actual)

print(loss)
```

### B. Binary Cross-Entropy with Logits

Used for binary classification.

```python
loss_function = nn.BCEWithLogitsLoss()
```

It combines sigmoid and binary cross-entropy internally.

It expects raw logits rather than probabilities.

Targets should contain binary values (0 or 1).

### C. Cross-Entropy Loss

Used for multiclass classification.

```python
loss_function = nn.CrossEntropyLoss()
```

It expects raw logits and integer class labels.

For example, a model predicting among three customer categories produces three output scores per sample.

---

## 6. Optimizers in PyTorch

An optimizer uses calculated gradients to update the model's learnable parameters (weights and biases).

PyTorch provides optimizers through `torch.optim`.

Examples:

- SGD
- Adam
- RMSprop
- Adagrad

### Adam Optimizer

Adam is a commonly used optimizer that adapts parameter updates using running averages of gradients and squared gradients.

```python
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)
```

Explanation:

- `model.parameters()`: provides the optimizer with the model's learnable parameters.
- `lr=0.001`: sets the learning rate.

### Three Important Operations

```python
optimizer.zero_grad()
```

Clears previously accumulated gradients.

```python
loss.backward()
```

Calculates gradients using Autograd.

```python
optimizer.step()
```

Updates the model's parameters using the calculated gradients.

These operations are essential parts of the neural network training process.

---

## 7. The Complete Neural Network Training Process

The concepts we learned connect together in the following sequence:

1. Prepare input data and target values.
2. Define the neural network architecture.
3. Perform forward propagation.
4. Calculate the loss.
5. Clear previous gradients.
6. Perform backpropagation using `loss.backward()`.
7. Update parameters using `optimizer.step()`.
8. Repeat the process across batches and epochs.
9. Evaluate the trained model using unseen data.

### The PyTorch Training Sequence

```python
optimizer.zero_grad()

predictions = model(X)

loss = loss_function(predictions, y)

loss.backward()

optimizer.step()
```

This is the foundation of training neural networks in PyTorch. The complete training loop will also include batching, repeated epochs, and validation.
