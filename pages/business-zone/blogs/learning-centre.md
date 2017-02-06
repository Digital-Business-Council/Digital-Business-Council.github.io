---
layout: blog-master
title: Learning Centre
permalink: /learning-centre/
---

Our learning centre is designed to share information to our readers.  You will find short articles that you may like to commont upon or share with your colleagues.

Council would like to build trust through a community with share interests in the benefits of digitisation and eInvoicing.


<ul>
  {% for blog-page in site.posts %}
    <li>
    <a href="{{ blog-page.url }}"><h3>{{ blog-page.title }}</h3></a>
    {{ blog-page.date | date: "%a, %d %b %Y" }}
    <br>
    <img src="{{ blog-page.excerpt-image | absolute_url }}" />
    <p>{{ blog-page.excerpt }}</p>
    </li>
  {% endfor %}
</ul>

Click here to see older blogs..
