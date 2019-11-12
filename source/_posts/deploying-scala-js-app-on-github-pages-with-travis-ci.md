---
title: Deploying Scala.js app on Github Pages with Travis CI.
date: 2019-11-08 16:10:37
tags:
	- scala.js
	- github pages
	- travis ci
	- scala.js tutorial
	- scala.js examples
	- compile scala to js
	- sbt
	- scala
	- javascript
	- web
thumbnail: /images/thumbnails/scala.js-travis.png
category:
	- Computer Science
---

Today we are going to use Travis CI (free for an open-source repository) to deploy continuously a Scala.js app on Github pages. All your commit on the master branch put your static files on a `gh-pages` branch once the test is validated.

> [Scala.js](http://www.scala-js.org/) is a compiler that compiles Scala source code to equivalent Javascript code. 
>
> <small>Li Haoyi : http://www.lihaoyi.com/hands-on-scala-js/</small>

> [Travis CI](https://travis-ci.org/) is a hosted [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) service used to build and test software projects hosted at [GitHub](https://en.wikipedia.org/wiki/GitHub).
>
> <small>Wikipedia : https://en.wikipedia.org/wiki/Travis_CI</small> 

## Prerequisites

Before following this tutorial, you need to download and install [sbt](https://www.scala-sbt.org/) and [Node.js](https://nodejs.org/en/), and have an [Github](https://github.com/) account.

##  Create the project 

Run the following command:

```
sbt new scala/hello-world.g8
```

, and enter a name for your project. This creates a Scala project from the "hello-world" template.

## Setup Scala.js 

If you want to start from scratch without Scala.js project you can do this step. 

Create the file `project/plugins.sbt`, and add the following line to adding the Scala.js sbt plugin: 

```scala
addSbtPlugin("org.scala-js" % "sbt-scalajs" % "0.6.29")
```

We also setup basic project settings and enable this plugin in the sbt build file. Add this following line in the `build.sbt` (in the project root directory) :

```scala
enablePlugins(ScalaJSPlugin)
scalaJSUseMainModuleInitializer := true
```

To run this, simply launch `sbt` and invoke the `run` task:

```bash
$ sbt run
[info]   Compilation completed in 9.96s.
[info] Done compiling.
[info] Fast optimizing D:\drafs\scala.js-travis-ci\scala-travis\target\scala-2.13\hello-world-fastopt.js
[info] Running Main
Hello, World!
[success] (...)
```

The `run` task creates the `hello-world-fastopt.js` in `target\scala-2.13\` directory. Remember the name of the file for later.

## Integrating with HTML

To load and launch the created JavaScript, you will need an HTML file. 

Create the folder `source` in the root directory of your project. You will put all your sources files (html, image, script, style) in this folder.

Create the file `source/index.html` with the following content.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Scala.js App</title>
</head>

<body>
    <!-- Include Scala.js compiled code -->
    <script type="text/javascript" src="js/hello-world-fastopt.js"></script>
</body>

</html>
```

## Create the Github repository 

Add `.gitignore` file in the root folder of your project, with the following content:

```
*.class
*.log

.cache/
.history/
.lib/
dist/*
target/
lib_managed/
src_managed/
project/boot/
project/plugins/project/
```

And follow this tutorial to [add an existing project to GitHub using the command line](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). **Your repository should be public if you want to use Travis CI for free.**

## Setup Travis CI

In this part, I use the free version of Travis CI. 

- First, you need to [add Travis CI application to your Github account](https://github.com/marketplace/travis-ci). 

- [Generate a new token](https://github.com/settings/tokens) with **repo** scopes. Remember the token value for later.

- Go to [Applications settings](https://github.com/settings/installations), and configure Travis CI to have access to the repository. You’ll be redirected to the Travis page.

- On the Travis page, go to your repository's setting. Under **Environment Variables**, put **GH_TOKEN** as name and paste the token onto value. Click Add to save it.

- Earlier we created the `source` folder to place the static files of our app in it. To generate static files Travis CI copies the content of a `public` folder to the root of a project and commits it to the `gh-pages` branch. We will create a script to move our static files to a public folder. 

  Add and commit `deploy.sh` file to your repository to generate static files on Travis CI with the following content:
  
```bash
  if [ ! -d "public" ]; then 
  	mkdir public
  fi
  
  cp -fr source/* public/
  
  if [ ! -d "public/js" ]; then 
  	mkdir public/js
  fi
  
  # Generate .js files from Scala
  sbt fastOptJS
  
  cp target/scala-*/*.js public/js/
```

- Add  and commit `.travis.yml` file to your repository to configure Travis CI with the following content:

```yaml
  language: scala
  jdk: openjdk8
  scala:
     - 2.12.10 # scala version
     
  branches:
    only:
      - master # build master branch only
  script:
     - bash deploy.sh # generate static files
  deploy:
    provider: pages
    skip-cleanup: true
    github-token: $GH_TOKEN
    keep-history: true
    on:
      branch: master
    local-dir: public
```

Once Travis CI finish the deployment, the generated pages can be found in the `gh-pages` branch of your repository.

## Your Scala.js App is deployed on Github Pages !

In your GitHub repository setting, navigate to “GitHub Pages” section and change Source to **gh-pages branch**.

<img src="/images/scala.js-travis-ci-exemple.png"
     alt="Scala.js App deployed with Travis CI">

Congratulations! Your Scala.js app is ready and available at **username.github.io/repository-name**. The Scala code:

```scala
object Main extends App {
  println("Hello, World!")
}
```

a well executed (see console).

You can find all the source code used in this tutorial [here](https://github.com/riiswa/scala.js-travis.ci-example).

## To go further

You will go further in your projects than a simple "Hello World". For more information on Scala.js, I invite you to consult the [official documentation](https://www.scala-js.org/doc/index.html).


Sources: 

- <https://www.scala-js.org/doc/tutorial/basic/index.html>

- <https://docs.travis-ci.com/user/languages/scala/>

- <https://docs.travis-ci.com/user/deployment/pages/>

  