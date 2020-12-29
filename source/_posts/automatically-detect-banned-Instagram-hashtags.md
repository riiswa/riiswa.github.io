---
title: How to automatically detect banned Instagram hashtags?
date: 2020-12-29 21:54:01
tags:
	- instagram
	- automation
	- bot
	- python
	- social network
	- growth hacking
thumbnail: /images/thumbnails/banned-hashtags.png
category: Programming
---

On [Instagram](www.instagram.com), if a hashtag is often used on a publication type that [violates Instagram's usage and community guidelines, it risks being banned](https://help.instagram.com/861508690592298). The problem with these banned hashtags is that when used by a user, they can greatly decrease the engagement rate of the posts. According to some figures, on average 10% of your followers will see your posts on their feeds.

Our goal today will be to see how Instagram marks its banned hashtags and how to detect them automatically with a program.

Note that banned hashtag lists are regularly updated by Instagram, so it is difficult for a human to track all changes.

## How to identify banned hashtags as a human

Before automating our detection we need to see how a classic user can easily spot banned hashtags.

When you go on the page of a hashtag (link with the format of https://www.instagram.com/explore/tags/your_tag/), two cases can occur to you if the hashtag is banned :

- If you scroll to the bottom of the page this type of message may be present: 

  <img alt="Message for banned hashtags" src="/images/banned_hashtags_01.png">

- The page may simply not exist:

  <img alt="Page not available message" src="/images/banned_hashtags_02.png">

If you have thousands of hashtags on your account checking them one by one can be very tedious. We will now see how to automate the process.

## How to identify banned hashtags as a bot

My first approach was to use Web Scrapping to check the validity of a hastag. Indeed by digging in the sources of a hashtag page we can notice that when the hashtag is banned, there is in the sources a `div` html tag with the class `_4Kbb_` which contains the message that allows to know manually if a hashtag is banned :

```html
<div class="_4Kbb_">
    <p class="_dyez">Recent posts from # sexy are currently hidden because the community has reported some content that may not meet Instagram's community guidelines. <a class="sqdOP yWX7d    y3zKF    ZIAjV " target="_blank" href="https://help.instagram.com/861508690592298" tabindex="0">Learn more</a>
    </p>
</div>
```

The problem with this method is that it depends a lot on the Instagram sources because if the sources are updated the method has a high chance of becoming obsolete. 

Let's look for a more stable method. After long research, I decided to [inspect the network activity with Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/network).

Bingo! I noticed that before loading the HTML page Instagram makes a GET request with the  `?__a=1` parameter, to get all the information of a hashtag in the form of a JSON document :

<img alt="Screenshot of JSON document" src="/images/banned_hashtags_03.png">

Like users, hashtags can be followed on Instagram. Banned hashtags are hashtags that a user cannot follow. I quickly saw in the JSON document the key `graphql.hashtag.allow_following` which has a boolean value. **Knowing if a hashtag is banned is like checking the value of our key.** In the case of a non-existent page, the JSON will be empty.

Easily with the Python language and the Selenium library (for browser automation), we can define a function that determines if a hashtag is valid or not :

```python
from selenium import webdriver
import json

def tag_is_valid(tag):
    url = f"https://www.instagram.com/explore/tags/{tag}/?__a=1"
    browser = webdriver.Firefox()
    content = browser.find_element_by_id('json').text
    parsed_json = json.loads(content)
    return parsed_json['graphql']['hashtag']['allow_following']
```

Easy, right? Unfortunately, there are security features that prevent this kind of request from being used so easily. That's why I made for you a python script that can analyze and detect all the banned hashtags on the posts of an account. The sources are available at the following address: 

https://github.com/riiswa/instagram-hashtag-checker.

To use it you just need to have Python3 on your machine, download the sources on Github, install the requirements with `pip install -r requirements.txt` and run the `main.py` script. Then you just have to follow the instructions in your terminal. Your Instagram login credentials will be required to run the program.

Thank you for reading my article, and I hope you find it useful. As usual, don't hesitate to contribute to the project or report bugs. See you soon 😄.