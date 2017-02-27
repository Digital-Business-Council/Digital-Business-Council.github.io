---
layout: blog-master
title: All Blogs
permalink: /blogs/
---

# Digital Business Council Blog

The following blogs have been created to provide readers with additional insights into the components of the eInvoicing Interoperability Framework and associated early adoption activities.

<div>
  {% for blog-page in site.categories.blog  %}


  {% if blog-page.next.categories contains 'blog' %}
   {% capture year %}{{ blog-page.date | date: '%Y' }}{% endcapture %}
    {% capture nyear %}{{ blog-page.next.date | date: '%Y' }}{% endcapture %}
    {% if year != nyear %}
      {% if forloop.index != 1 %}
        </ul>
      {% endif %}  
      <h2><a name="#{{ blog-page.date | date: '%Y' }}">{{ blog-page.date | date: '%Y' }}</a></h2>
     {% endif %}
  {% else %}
  <h2><a name="#{{ blog-page.date | date: '%Y' }}">{{ blog-page.date | date: '%Y' }}</a></h2>
  {% endif %}

  {% capture month %}{{ blog-page.date | date: '%m%Y' }}{% endcapture %}
  {% if blog-page.next.categories contains 'blog' %}
    {% capture nmonth %}{{ blog-page.next.date | date: '%m%Y' }}{% endcapture %}
    {% if month != nmonth %}
      {% if forloop.index != 1 and year == nyear %}
        </ul>
      {% endif %}
      <h3><a name="#{{ blog-page.date | date: '%B %Y'  }}">{{ blog-page.date | date: '%B %Y' }}</a></h3><ul>
     {% endif %}  
  {% else %}
  <h3><a name="#{{ blog-page.date | date: '%B %Y'  }}">{{ blog-page.date | date: '%B %Y' }}</a></h3><ul>
  {% endif %}

{% if blog-page.link %}
    <h3 class="link-post">
    <a href="{{ site.baseurl }}{{ post.url }}" title="{{ blog-page.title }}">{{ blog-page.title }}</a>
    <a href="{{ blog-page.link }}" target="_blank" title="{{ blog-page.title }}"><i class="fa fa-link"></i></a></h3>
{% else %}
    <div class="blog-excerpt">
        <i>{{ blog-page.date | date: "%a, %d %b %Y" }}</i>
        <a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title }}</a>
  
    <table class="blog-table">
    <tr>
    <td width="25px" padding="0px">
    <a href="http://m.facebook.com/sharer.php?u={{ blog-page.url | absolute_url }}&t={{ blog-page.title }}&sv={{ blog-page.excerpt-image | absolute_url}})"><img src="{{site.url}}/images/favicon/facebook.png" class="social-img" width="20px"/></a>
    </td>
    <td width="25px" padding="0px">
    <a href="https://twitter.com/share?text={{ blog-page.title }}&url={{ blog-page.url | absolute_url }}"><img src="{{site.url}}/images/favicon/twitter.png" width="20px" class="social-img" /></a>
    </td>
    <td width="25px" padding="0px">
    <a href="http://www.linkedin.com/shareArticle?mini=true&summary={{ blog-page.excerpt }}&title={{ blog-page.title }}&url={{ blog-page.url | absolute_url }}"><img src="{{site.url}}/images/favicon/linkedin.jpg" width="20px" class="social-img" /></a>
    </td>
    <td width="25px" padding="0px">
    <a href="mailto:?subject=Digital%20Business%20Council%20-%20{{ blog-page.title }}&body=Hi%2C%0A%0AI%20found%20this%20article%20from%20the%20Digital%20Business%20Council%20that%20I%20thought%20you%20might%20be%20interested%20in%3A%20%0A%0A{{blog-page.url | absolute_url }}"><img src="{{site.url}}/images/favicon/mailto.png" class="social-img" width="20px"/></a>
    </td>
    </tr>
    </table>
    <p>{{blog-page.excerpt | truncate: 250}}</p>
    </div>
    {% endif %}
    
  {% endfor %}
  
