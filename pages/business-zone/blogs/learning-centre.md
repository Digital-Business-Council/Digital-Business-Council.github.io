---
layout: blog-master
title: Learning Centre
permalink: /learning-centre/
---

Our learning centre is designed to share information to our readers.  You will find short articles that you may like to commont upon or share with your colleagues.

Council would like to build trust through a community with share interests in the benefits of digitisation and eInvoicing.

<ul>
  {% for blog-page in site.posts %}
    <div class="blog-excerpt">
    <a href="{{ blog-page.url | absolute_url }}"><h3>{{ blog-page.title }}</h3></a>
    
    <table>
    <tr>
    <td colspan="4">
    {{ blog-page.date | date: "%a, %d %b %Y" }} 
    </td>
    <td width="40px" padding="0px">
    <a href="http://m.facebook.com/sharer.php?u={{ blog-page.url | absolute_url }}&t={{ blog-page.title }}&sv={{ blog-page.excerpt-image | absolute_url}})"><img src="{{site.url}}/images/favicon/facebook.png" width="25px"/></a>
    </td>
    <td width="40px" padding="0px">
    <a href="https://twitter.com/share?text={{ blog-page.title }}&url={{ blog-page.url | absolute_url }}"><img src="{{site.url}}/images/favicon/twitter.png" width="25px"/></a>
    </td>
    <td width="40px" padding="0px">
    <a href="http://www.linkedin.com/shareArticle?mini=true&summary={{ blog-page.excerpt }}&title={{ blog-page.title }}&url={{ blog-page.url | absolute_url }}">LinkedIn</a>
    </td>
    <td width="40px" padding="0px">
    </td>
    </tr>
    <tr>
    <td colspan="1">
    <img src="{{ blog-page.excerpt-image | absolute_url }}" /> 
    </td>
    <td colspan="7">
    {{ blog-page.excerpt }}
    </td>
    </tr>
    </table>
    </div>
  {% endfor %}
</ul>
Click here to see older blogs..
