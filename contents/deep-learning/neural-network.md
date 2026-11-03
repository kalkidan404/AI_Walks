Deep Learning is a subfield of Machine Learning that uses structures called artificial neural networks to learn patterns from data.
The entire process is:

Inputs→Weights→Weighted Sum+Bias→Activation→Output
Activation functions introduce nonlinearity, allowing neural networks to learn more complicated relationships.
A. ReLU (Rectified Linear Unit)

Formula:

$$ f(x)=\max(0,x) $$

It works simply:

If the input is positive, return it.
If the input is negative, return zero.
B. Sigmoid

Formula:

$$ f(x)=\frac{1}{1+e^{-x}} $$

Sigmoid transforms any real-valued input into a number between 0 and 1.
Sigmoid is useful for binary classification because its output can represent a probability.
Tanh (Hyperbolic Tangent)

Tanh transforms inputs into values between -1 and 1.
Sigmoid and Tanh can suffer from a problem called vanishing gradients.
Forward propagation is the process of passing input data through a neural network, layer by layer, until the network produces a prediction.
Higher loss generally means a worse prediction. Lower loss means a better prediction.
Loss functions depend on the task
-Mean Squared Error (MSE)
Binary Cross-Entropy (BCE)

Commonly used for binary classification.
Binary cross-entropy measures how well predicted probabilities match the actual binary labels.
| Gradient | Meaning |
| -------- | ------------------------------------------------------------------- |
| Positive | Increasing the weight increases the loss locally. |
| Negative | Increasing the weight decreases the loss locally. |
| Zero | A small change in the weight has no first-order effect on the loss. |
Forward propagation produces a prediction.
Loss function measures the error.
Backpropagation calculates gradients.
Gradient descent uses those gradients to update weights and biases.
Forward propagation runs again with the updated parameters.
