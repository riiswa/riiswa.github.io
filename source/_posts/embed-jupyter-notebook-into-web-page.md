---
title: Embed a Jupyter Notebook in Github into your web page in only 2 min.
date: 2021-01-15 15:24:04
tags:
	- github
	- jupyter notebook
	- python
thumbnail: /images/thumbnails/ipynb2html.png
category:
	- Programming
---

Do you have a Github repository that contains Jupyter Notebooks? Do you want to integrate this Jupyter Notebook into your web page or into a markdown file (Github's README.md files for example)?

This very short article will explain how to do that in only 2 minutes. Please note that your repository must be public for our manipulation to work. If you don't have a repository containing your notebooks, [you can easily create one](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo).

## Step 1 - Access the notebook to be embedded by browsing through your Github repository.

Let's take the following notebook as a base: https://github.com/jupyter/notebook/blob/d85323aad74dcda8f403b24508fc4ba2b67c23ac/docs/source/examples/Notebook/What%20is%20the%20Jupyter%20Notebook.ipynb

![](/images/ipynb_integration_1.png)

## Step 2 - Inspect the page by accessing the development tools (F12 key on the keyboard).

![](/images/ipynb_integration_2.png)

## Step 3 - Find (with Ctrl+F) the first `iframe` tag in the source code, then copy the element to your clipboard.

![](/images/ipynb_integration_3.png)

## Step 4 - Paste the copied code into your HTML sources.

Example:

```html
<iframe class="render-viewer " src="https://render.githubusercontent.com/view/ipynb?color_mode=dark&amp;commit=d85323aad74dcda8f403b24508fc4ba2b67c23ac&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6a7570797465722f6e6f7465626f6f6b2f643835333233616164373464636461386634303362323435303866633462613262363763323361632f646f63732f736f757263652f6578616d706c65732f4e6f7465626f6f6b2f5768617425323069732532307468652532304a7570797465722532304e6f7465626f6f6b2e6970796e62&amp;nwo=jupyter%2Fnotebook&amp;path=docs%2Fsource%2Fexamples%2FNotebook%2FWhat+is+the+Jupyter+Notebook.ipynb&amp;repository_id=33653601&amp;repository_type=Repository#b380132b-0274-44dd-99a6-d3ad978a3538" sandbox="allow-scripts allow-same-origin allow-top-navigation" title="File display">
          Viewer requires iframe.
      </iframe>
```

<iframe class="render-viewer " src="https://render.githubusercontent.com/view/ipynb?color_mode=dark&amp;commit=d85323aad74dcda8f403b24508fc4ba2b67c23ac&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6a7570797465722f6e6f7465626f6f6b2f643835333233616164373464636461386634303362323435303866633462613262363763323361632f646f63732f736f757263652f6578616d706c65732f4e6f7465626f6f6b2f5768617425323069732532307468652532304a7570797465722532304e6f7465626f6f6b2e6970796e62&amp;nwo=jupyter%2Fnotebook&amp;path=docs%2Fsource%2Fexamples%2FNotebook%2FWhat+is+the+Jupyter+Notebook.ipynb&amp;repository_id=33653601&amp;repository_type=Repository#b380132b-0274-44dd-99a6-d3ad978a3538" sandbox="allow-scripts allow-same-origin allow-top-navigation" title="File display">
          Viewer requires iframe.
      </iframe>

## Bonus - Full page `iframe`

For a perfect integration of the ``iframe` to the page you must add to your tag the following attributes: `frameborder="0" style="display: block;border: none;width: 100%;height: 100%;"`

Example:

```html
<iframe frameborder="0" style="display: block;border: none;width: 100%;height: 100%;"   class="render-viewer " src="https://render.githubusercontent.com/view/ipynb?color_mode=dark&amp;commit=d85323aad74dcda8f403b24508fc4ba2b67c23ac&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6a7570797465722f6e6f7465626f6f6b2f643835333233616164373464636461386634303362323435303866633462613262363763323361632f646f63732f736f757263652f6578616d706c65732f4e6f7465626f6f6b2f5768617425323069732532307468652532304a7570797465722532304e6f7465626f6f6b2e6970796e62&amp;nwo=jupyter%2Fnotebook&amp;path=docs%2Fsource%2Fexamples%2FNotebook%2FWhat+is+the+Jupyter+Notebook.ipynb&amp;repository_id=33653601&amp;repository_type=Repository#b380132b-0274-44dd-99a6-d3ad978a3538" sandbox="allow-scripts allow-same-origin allow-top-navigation" title="File display">
          Viewer requires iframe.
      </iframe>
```

<iframe   frameborder="0"  style="display: block;border: none;width: 100%;"  onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+\'px\';"  class="render-viewer " src="https://render.githubusercontent.com/view/ipynb?color_mode=dark&amp;commit=d85323aad74dcda8f403b24508fc4ba2b67c23ac&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6a7570797465722f6e6f7465626f6f6b2f643835333233616164373464636461386634303362323435303866633462613262363763323361632f646f63732f736f757263652f6578616d706c65732f4e6f7465626f6f6b2f5768617425323069732532307468652532304a7570797465722532304e6f7465626f6f6b2e6970796e62&amp;nwo=jupyter%2Fnotebook&amp;path=docs%2Fsource%2Fexamples%2FNotebook%2FWhat+is+the+Jupyter+Notebook.ipynb&amp;repository_id=33653601&amp;repository_type=Repository#b380132b-0274-44dd-99a6-d3ad978a3538" sandbox="allow-scripts allow-same-origin allow-top-navigation" title="File display">
          Viewer requires iframe.
      </iframe>