---
layout: article
title: "AoC 2021 in Scala - Day 1: Sonar Sweep"
date: 2021-12-01 23:08:38
tags:
- advent of code
- scala
- competitive programming
- algorithms
category:
- Programming 
thumbnail: /images/thumbnails/aoc.png
---

## Puzzle description

https://adventofcode.com/2021/day/1

## Part One

The first part of the problem is to count the number of times a depth measurement increases from the previous measurement. To solve this problem we can simply use the Scala `sliding[B >: A](size: Int, step: Int = 1): GroupedIterator[B]` method.

> Returns an iterator which presents a "sliding window" view of another iterator. The first argument is the window size, and the second is how far to advance the window on each iteration; defaults to 1.

In you case the size parameter should be 2. Then you just have to "slide" the window step by step and count the times when the first element is smaller than the second. This is translated in computer terms by iterating over the list and comparing the values of the pairs.

```scala
input.sliding(2).count { 
  case List(a, b) => a < b 
}
```

## Part Two

This second part is quite similar to the first one except that instead of comparing integers we have to compare the sum of windows of size 3. The solution is obvious:

```scala
input.sliding(3).sliding(2).count { 
  case Seq(l1, l2) => l1.sum < l2.sum 
}
```

## Full Solution

```scala
val input = scala.io.Source.fromResource("2021/day/1/input.txt")
  .getLines().map(_.toInt).toList
print("PART ONE: ")
println(input.sliding(2).count { 
  case List(a, b) => a < b 
})

print("PART TWO: ")
println(input.sliding(3).sliding(2).count { 
  case Seq(l1, l2) => l1.sum < l2.sum 
})
```
