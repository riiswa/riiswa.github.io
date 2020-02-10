---
title: Automatic & Targeted Instagram Mass Story Viewer
date: 2020-02-11 08:00:00
tags:
	- automation
	- python
	- instagram
	- growth hacking
	- bot

thumbnail: /images/thumbnails/mass-view.png
category: 
	- Programming
---

[Instagram](https://www.instagram.com/) influencers discovered a new way to increase their number of followers. This technique is called [mass story viewing](https://www.konstantinkanin.com/en/instagram-mass-story-viewing/) (or mass story looking). Haven't you ever seen Russian Instagram accounts with thousands of followers watching your insignificant stories?

This method has become popular because contrary to follow-unfollow or spam comments, the mass looking is not known to be very sanctioned by Instagram (Instagram can suspend or delete your account if there are suspicious activities).

A real business has emerged around the mass story viewing. For example, I've seen a site that offers mass looking services for $155 per month. It's very expensive and not accessible for everyone.

Today we will see how to write a cheap (free) and accessible script for everyone (you still need to know how to program) using Python3 and its [instabot](https://instagrambot.github.io/) library.

## User targeting

Before start, you need to connect instabot to your Instagram account with :

```python
import instabot
bot = instabot.Bot()
bot.login(username=YOUR_USERNAME, password=YOUR_PASSWORD) 
```

Our first goal is to obtain a list of users who might potentially be interested in our content. There are many filter to target users on Instagram :

- by location:

  ```python
  bot.get_geotag_users(LOCATION)
  ```

- by hashtag:

  ```python
  bot.get_hashtag_users(HASHTAG)
  ```

- by a user followers:

  ```python
  bot.get_user_followers(USER_ID)
  ```

All these methods return a list of the user ids targeted by the filter.

## Story viewing

instabot really makes story viewing easier with the method `bot.watch_users_reels(USER_ID)`, which takes a user id as a parameter and returns a boolean that represents the success of look. 

It's therefore very easy to combine user targeting with story viewing taking the hashtag filter:

```python
for id in bot.get_hashtag_users("hashtag"):
	bot.watch_users_reels(id)
```

I've written a complete script to target users for a clothing store, with a cool console display to impress your friend :

```python
import instabot
import time
from os import system, name 

def clear(): 
    if name == 'nt': 
        _ = system('cls') 
  
    else: 
        _ = system('clear') 

HASHTAGS = ['fashion', 'style', "model", "shopping", "dress"]
SLEEP_TIME_BETWEEN_MAIN_LOOP = 5 * 60
SLEEP_TIME_BETWEEN_HASHTAG_LOOP = 60
USERNAME = YOUR_USERNAME
PASSWORD = YOUR_PASSWORD

bot = instabot.Bot()

bot.login(username=USERNAME, password=PASSWORD)

# MAIN LOOP
while True:
    try:
        for hashtag in HASHTAGS :
            clear()
            # GET USERS FROM HASHTAG
            users = bot.get_hashtag_users(hashtag)
            for id in users:
                # WATCH USER STORIES
                if bot.watch_users_reels(id):
                    bot.logger.info(f'Instagram user: {id}, Total stories viewed: {bot.total["stories_viewed"]}')
            bot.logger.info(f'Sleeping for {SLEEP_TIME_BETWEEN_HASHTAG_LOOP} seconds...')           
            time.sleep(SLEEP_TIME_BETWEEN_HASHTAG_LOOP)
        bot.logger.info(f'Sleeping for {SLEEP_TIME_BETWEEN_MAIN_LOOP} seconds...')           
        time.sleep(SLEEP_TIME_BETWEEN_MAIN_LOOP)

    except Exception as e:
        bot.logger.info(e)
        time.sleep(SLEEP_TIME_BETWEEN_MAIN_LOOP)
```

It's a script that can run on a machine 24 hours a day,  7 days a week, to watch thousands upon thousands of stories and has rest periods to avoid detection of suspicious activity by Instagram. You can also [use a proxy](https://github.com/instagrambot/instabot/issues/262#issuecomment-313595253) to avoid problems with your account.

Very short article but I hope that it can save people from spending their money on mass looking through overpriced services...