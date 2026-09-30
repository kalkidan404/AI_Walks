1, mean
mean is the vakue you would get if the total number were distributed equally among all observation
variance: how much values spread around the mean
distribution:what the whole pattern of values look like
outliers:unusuall distant observation

# mean is much more sensitive to extreme values while median is more resistant to them

first analysis quetsion should be: how is the distribution of the data and is mean rlt the right representative of them
so when a data is skewed or has extreme outliers the median would be the help cuz it would be telling us the data is mostly ard this value
df["age"].mean() and df["age"].median() now compare is our data that different?why?
deviation: how far is a value from the mean of the data
10, 20, 30 the deviation would be: -10,0,10 how far is it..
then: square them and go average 100,0,100=200/3=66.67 that is variance
standard deviation being the squared root of variance making the variance in to a more formal unit which is same as the original value
distribution: how the value in our dataset r spread out and how frequently different values occur
often it is: if mean>median it is right skewed or positively skewed and visevarsa
outliers are where a data anlysis changes in to a data cleaning process
how to detect outliers"
a,IQR methode-inter quartile range
like 25%, 50% and 75%- how wide the middle50% of our data is
IQR= Q3-Q1 upper boundary=Q3+1.5(Q1)
Lower bound=Q1−1.5(IQR)
Upper bound=Q3+1.5(IQR)
b, z-score
how standard deviations away from mean is an observation
z=x-mean/std.....if z>3 should b flagged as a potential outlier
probablity: how likely is it for sth to happen, describes uncertainity
Independent events: when the occurence of one doesnt affect the other
P(A and B)=P(A)×P(B)
conditional probabilty: the probability sth happens given that sth has already happened
P(A∣B)...probability of A given B already had happened
P(A∣B)=P(A∩B)/P(B)
​
correlation:do two numerical datas go together: or move together
correlation coeficient:(r) which is -1<r<1......scatterplot
sampling: taking a sample in different ways to study the whole population

When we calculate something from a population, it's called a parameter.

When we calculate it from a sample, it's called a statistic.
