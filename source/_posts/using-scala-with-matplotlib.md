---
title: Using Matplotlib with Scala on Jupyter Notebook (and more...)
date: 2019-12-14 18:10:59
tags:
	- data visualization
	- scala
	- python
	- data science
	- matplotlib
	- jupyter notebook
thumbnail: /images/thumbnails/scala-matplotlib.png
category:
	- Data Science
---

Data visualization is very important in the life of a data scientist. It helps him to explore data more intuitively than thousands of digital values and to communicate his ideas. Notebooks are very appreciative by data scientist because it ensures a perfect fusion between programming codes, data visualization, and explanatory texts.

The Scala programming language is **commonly** used for Data engineering (building and maintaining data infrastructure) contrary to languages like Python and R used for Data Science (data processing and analysis). Even if is possible to do Data science with Scala (e.g. Spark MLLIB or Smile), it's logic there are fewer data visualization libraries than in Python. 

When I search on Google for "data visualization Scala", I very quickly find [Vegas - The Missing Matplotlib for Scala](https://www.vegas-viz.org/). 

<img src="https://activewizards.com/content/blog/Top_15_scala_libs_2018/vegas-(1).jpg" alt="Vegas - The missing Matplotlib for Scala">

Hm... the first thing I see is "The Missing Matplotlib"? Even if Vegas is an excellent library and fits well with the functional part of Scala, the *real* Matplotlib offers more options, more documentation, and more community support than Vegas. What if I told you that you can directly use the *real* Matplotlib library with Scala.

<u>Note</u>: The solution I will present to you below does not represent **THE solution**. You can use Scala libraries directly in your notebooks, but I am addressing here people who are familiar (like me) with using Matplotlib, but who prefer to do their processing with Scala.

## BeakerX - Extensions for Jupyter Notebook

[BeakerX](http://beakerx.com/) is a collection of kernels and extensions to the [Jupyter](http://jupyter.org/) interactive computing environment. It provides JVM support, Spark cluster support, polyglot programming, interactive plots, tables, forms, publishing, and more.

What will allow us to use Matplotlib with Scala today is BeakerX's autotranslation functionality. This feature allowing you to access multiple languages in the same notebook (included Scala) and seamlessly communicate between them.

The first step will be to install BeakerX (you need to [**have Jupyter Notebook**](https://jupyter.readthedocs.io/en/latest/install.html) before). Follow this [link](http://beakerx.com/documentation#tutorials-and-examples) to see how to install it.

When you create a new notebook, thanks to BeakerX, you will have a wider choice of kernels, make sure to choose the "Scala" option.

<img src="/images/beakerx_scala_option.png" alt="Scala option on Jupyter Notebook">

To illustrate an example with Matplotlib, I will first create tables containing the states of the cosine and sine functions with Scala:

```scala
import scala.math.{Pi, sin, cos}

val x = 0.0 to 1.0 by 0.01
val ySin = x.map(v => sin(v*Pi*5))
val yCos = x.map(v => cos(v*Pi*5))
```

The goal is now to transfer and autotranslate the Scala data to Python. For that, it is necessary to use the global object `beakerx` and assign to this the values:

```scala
beakerx.x = x
beakerx.y_sin = ySin
beakerx.y_cos = yCos
```

<u>Note</u>: The values assigned to the beakerx object should only be some AnyVal of the Scala standard lib (Int, Float, Char, Double...) and collections (Map, List, Seq, Set, Range...) to ensure the success of autotranslation.

Now that the data have been defined, it is Python's turn to do the visualization. Just import the beakerx object into python with `from beakerx.object import beakerx`, and you will be able to access the attributes previously assigned. The magic `%%python` allows you to switch language:

```python
%%python
from beakerx.object import beakerx
import numpy as np
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot(beakerx.x, beakerx.y_sin)
ax.plot(beakerx.x, beakerx.y_cos)
```

This is what the final result should look like: 

<img src="/images/result_scala_matplotlib.png" alt="Data from Scala plot with Matplotlib"> 

 ## To go much further

Today I used as an example Matplotlib, but it is possible to do the same with any Python library. Even better, it is possible not to limit yourself only to the Scala language, BeakerX supports also Groovy, Clojure, Kotlin, Java, JavaScript and SQL, and autotranslation works between all these languages. I think it's a shame that BeakerX doesn't support the R language.

To switch between languages, you just have to use the magic `%%languageName` at the beginning of the cell concerned.

