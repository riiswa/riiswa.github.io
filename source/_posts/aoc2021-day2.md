---
layout: article
title: "AoC 2021 in Scala - Day 2: Dive!"
date: 2021-12-02 23:00:37
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

https://adventofcode.com/2021/day/2

## Part One

The first part of this problem is to update the state of a submarine (horizontal position and depth) according to the following commands:
- `forward X` increases the horizontal position by `X` units.
- `down X` increases the depth by `X` units.
- `up X` decreases the depth by `X` units.

Finally, the product of the horizontal position and the depth must be calculated from the final state of the submarine.

Let's represent our different commands by an enum:

```scala
enum Move:
  case Forward(x: Int)
  case Down(x: Int)
  case Up(x: Int)
```

And a utility function to parse strings:

```scala
object Move:
  def fromString(s: String): Move = {
    s.split(" ") match {
      case Array("forward", x) => Forward(x.toInt)
      case Array("down", x)    => Down(x.toInt)
      case Array("up", x)      => Up(x.toInt)
    }
  }
```

The state of a submarine can be stored in a class, and we can easily write a method that updates the state according to a `Move`.

```scala
case class Submarine(horizontalPos: Int = 0, depth: Int = 0) {
  def move(m: Move): Submarine = m match {
    case Move.Forward(x) => Submarine(horizontalPos + x, depth)
    case Move.Down(x)    => Submarine(horizontalPos, depth + x)
    case Move.Up(x)      => Submarine(horizontalPos, depth - x)
  }

  def solution: Int = horizontalPos * depth
}
```

To update the state of our submarine and get the solution we can now iterate on the command list with the `foldLeft[B](z: B)(op: (B, A) => B): B` method.

> Applies a binary operator to a start value and all elements of this sequence, going left to right.

Our starting value will be a submarine at its original position, and the operator to apply on the accumulator will be the `move(m: Move): Submarine` method which will take as argument the parsed command:

```scala
input.foldLeft(Submarine()) {
  case (acc, v) => acc.move(Move.fromString(v))
}.solution
```

## Part Two

The second part introduces a new variable `aim` to add to the state of the submarine. The commands have the following new effects:
- `down X` increases your aim by `X` units.
- `up X` decreases your aim by `X` units.
- `forward X` does two things:
  - It increases your horizontal position by `X` units.
  - It increases your depth by your aim multiplied by `X`.

This involves adding the `aim` attribute to the submarine class and creating and modifying the `move` method according to the new specifications:

```scala
case class Submarine(horizontalPos: Int = 0, depth: Int = 0, aim: Int = 0) {
  ...
  def moveWithAim(m: Move): Submarine = m match {
    case Move.Forward(x) => Submarine(horizontalPos + x, depth + aim * x, aim)
    case Move.Down(x)    => Submarine(horizontalPos, depth, aim + x)
    case Move.Up(x)      => Submarine(horizontalPos, depth, aim - x)
  }
  ...
}
```

The calculation of the solution is done in the same way as in the first part.

## Full Solution

```scala
enum Move:
  case Forward(x: Int)
  case Down(x: Int)
  case Up(x: Int)

object Move:
  def fromString(s: String): Move = {
    s.split(" ") match {
      case Array("forward", x) => Forward(x.toInt)
      case Array("down", x)    => Down(x.toInt)
      case Array("up", x)      => Up(x.toInt)
    }
  }

case class Submarine(horizontalPos: Int = 0, depth: Int = 0, aim: Int = 0) {
  def move(m: Move): Submarine = m match {
    case Move.Forward(x) => Submarine(horizontalPos + x, depth)
    case Move.Down(x)    => Submarine(horizontalPos, depth + x)
    case Move.Up(x)      => Submarine(horizontalPos, depth - x)
  }

  def moveWithAim(m: Move): Submarine = m match {
    case Move.Forward(x) => Submarine(horizontalPos + x, depth + aim * x, aim)
    case Move.Down(x)    => Submarine(horizontalPos, depth, aim + x)
    case Move.Up(x)      => Submarine(horizontalPos, depth, aim - x)
  }

  def solution: Int = horizontalPos * depth
}

@main def diveSolution() = {
  val input = scala.io.Source.fromResource("2021/day/2/input.txt").getLines().toList
  print("PART ONE: ")
  println(input.foldLeft(Submarine()) {
    case (acc, v) => acc.move(Move.fromString(v))
  }.solution)
  print("PART TWO: ")
  println(input.foldLeft(Submarine()) {
    case (acc, v) => acc.moveWithAim(Move.fromString(v))
  }.solution)
}
```

