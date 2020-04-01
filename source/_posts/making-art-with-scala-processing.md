---
title: 'Making art with Scala & Processing'
date: 2020-03-25 21:00:00
tags:
	- scala
	- creative coding
	- processing
	- art
	- tutorial
thumbnail: /images/thumbnails/processing-art.jpg
category:
	- Creative Coding
---

During my long periods of confinement, I got the idea of exploring new innovative areas of computer science. I really love the procedural generation and mixing it with art to be able to extend the creativity to infinity. I then discovered the Creative Coding that meets my expectations. I wish today to help you to get started with the creative coding with Scala and the Java library [Processing](https://processing.org/).

> Creative coding is a type of computer programming in which the goal is to create something expressive instead of something functional. It is used to create live visuals and for VJing, as well as creating visual art and design, entertainment, art installations, projections and projection mapping, sound art, advertising, product prototypes, and much more.
>
> From [Wikipedia](https://en.wikipedia.org/wiki/Main_Page), the free encyclopedia

## Processing

<img style="display: block;
  margin-left: auto;
  margin-right: auto;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Processing_Logo_Clipped.svg/131px-Processing_Logo_Clipped.svg.png">

[Processing](https://processing.org/) is a software sketchbook and a language for creating visual arts with programming.

![Processing Development Environment(PDE)](https://processing.org/reference/environment/images/ide.gif)

Processing is written in Java, so we can write our programs directly from Scala without going through the PDE. It's possible thanks to the Processing Core [dependency](https://mvnrepository.com/artifact/org.processing/core) that we have to add in your build.sbt (if you work with the sbt build tool).

```scala
// https://mvnrepository.com/artifact/org.processing/core
libraryDependencies += "org.processing" % "core" % "3.3.6"
```

For our first time with Processing, we are going to creates a simple application that create balls (with physics), when the user clicks on his screen.

## Minimal code

To start, this is a minimal example of an empty Processing application in Scala:

```scala
import processing.core.PApplet

object EmptySketch extends PApplet {
  def main(args: Array[String]): Unit = {
    val processingArgs = Array("EmptySketch")
    PApplet.runSketch(processingArgs, this)
  }
}
```

`PApplet` is a class defined in the [Processing Core library](https://processing.github.io/processing-javadocs/core/) and is the base class for all sketches that use processing.core. This class implements a lot of methods and constants needed for image processing and user interaction. In the `main`, we use the `runSketch` static method who opens a window to display the sketch and take two arguments, an array of arguments (like the name of the window) and the sketch to be displayed.

## The Ball class

As I'm not here to teach you programming, I guess you already have the necessary [Scala](https://www.scala-lang.org/) notions to follow this article, so here's the code for the class Ball :

```scala
case class Ball(sketch: PApplet,
                x: Float,
                y: Float,
                size: Float,
                xSpeed: Float,
                ySpeed: Float) {
  def next: Ball = {
    val newX = x + xSpeed
    val newY = y + ySpeed

    Ball(sketch,
         newX,
         newY,
         size,
         if (newX < 0 || newX > sketch.width) -xSpeed else xSpeed,
         if (newY < 0 || newY > sketch.height) -ySpeed else ySpeed)
  }

  def render(): Unit = {
    sketch.fill(size, 127)
    sketch.ellipse(x, y, size, size)
  }
}
```

In the constructor of Ball, there is an unexpected parameter: `sketch: PApplet`. This parameter allows a ball to access the method who are defined in a `PApplet`, for example, the methods for rendering the data. The `next` method simply return a new `Ball` with updated coordinates and speed (for the bouncing). The `render()` method calls the `sketch` methods to draw a ball in the sketch. As you may have guessed the `fill` method is used to choose a color, and the `ellipse` method draws an ellipse from his center and his width and height.

## The application

Now that we've got a ball, we can really start. I remind you of the objective, which is to  create a simple application that creates balls (with physics) when the user clicks on his screen. This is the code for the application :

```scala
object BallApp extends PApplet {
  private val balls: ArrayBuffer[Ball] = ArrayBuffer.empty[Ball]
  override def settings(): Unit = {
    size(500, 500)
    balls += Ball(this,
                  width / 2,
                  height / 2,
                  random(10, 100),
                  random(-10, 10),
                  random(-10, 10))
  }

  override def draw(): Unit = {
    background(255)
    balls.transform(_.next).foreach(_.render())
  }
  
  override def mouseClicked(): Unit =
    balls += Ball(this,
                  mouseX,
                  mouseY,
                  random(10, 100),
                  random(-10, 10),
                  random(-10, 10))

  def main(args: Array[String]): Unit = {
    val processingArgs = Array("Ball App")
    PApplet.runSketch(processingArgs, this)
  }

}
```

The `balls` attribute is used to store the balls of the application. The methods `settings`, `draw`, and `mouseClicked` are defined in the `PApplet` class:

- `settings()`: Defines the actions  that will be called at the launching of the application. Here, I choose a screen size and I put my first ball in the application.
- `draw()`: Continuously executes the lines of code contained inside its block until the program is stopped or `noLoop()` is called. Here, I update the coordinates of the balls and I render them.
- `mouseClicked()`:  Defines the actions that will be called when a user clicks on his mouse. Here, I create and put a new ball in the application.

The application is now ready to use. This is what I obtain after some clicks:<video width="400" height="400" style="display: block;
  margin-left: auto;
  margin-right: auto;" controls >
  <source src="/videos/ball-bouncing-test.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

This was a simple introduction to Creative Coding on my blog, expect to see many more articles on this subject in the coming days. To learn how to use Processing I invite you to follow theses official's [tutorials](https://processing.org/tutorials/). I created a Github [repository](https://github.com/riiswa/creative-coding-scala) where I would put all my creations with Processing and Scala. Thanks to Happy Coding's [article](https://happycoding.io/tutorials/java/processing-in-java) which inspired me a lot.