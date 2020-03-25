---
title: Conference Blog
layout: archive
permalink: /blog/
author_profile: false
sidebar: false
read_time: false
share: true
comments: false
classes: wide
---

Based on the positive reception of the blogs for the ACL 2019 conferences, the ACL 2020 website will also include a blog that will feature posts from conference chairs &amp; invited guests. Links to all posts will be listed below in chronological order. Each post will include a comment area for readers to share their thoughts. 

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
