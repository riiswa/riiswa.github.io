---
layout: article
title: "Road to project success with Git: An Another Git Workflow"
date: 2020-11-04 15:00:05
tags:
	- git
	- management
	- project
	- success
category:
	- Programming
thumbnail: /images/thumbnails/git_workflow_tb.png
---

[Git](https://git-scm.com/) is for a long time my favorite [version-control](https://en.wikipedia.org/wiki/Version_control) system. I use it in almost all of my projects, and I really can't do without it. Today, I would like to share with you my way of managing projects with this excellent tool. Git is easy to use but can be extremely powerful when used properly.

Based on my different experiences (Freelance work, school project, hackathon...), this article is for people who already have the basics of Git. I invite complete beginners to read this [excellent article written by Anne Bonner](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6).  For more details about commands, I invite you to read the [Git Reference Manual](https://git-scm.com/docs).

Before introducing my Git workflow, let me define five rules:

- The main branch for development is the branch called `develop`
- The project must be divided into as many features as possible, so there will be ONE branch per feature.
- Avoid unnecessary new commits (which does not add new features)
- Branches for adding new features have the suffix `feature/` and branches for fixing and patches  have the suffix `fix/`.
- Do not merge directly into `develop`, the merge of a feature must usually be done by a developer of the team, so you have to make a pull request.

Now that the rules have been defined here is my workflow:

<center>
<img alt="My Git Workflow" src="/images/git_workflow.png">
</center>

The use of this cycle will ensure good management of your project. Contact me if you have any suggestions, I would be happy to improve my model.