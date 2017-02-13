---
layout: blog-master
title: FAQs
permalink: /faqs/
---

# How can we help you?

Choose a category to find the help you need.


<div class="blog-excerpt">
    <h3>eInvoicing FAQ (Business)</h3>
</div>
<div class="blog-excerpt">
    <h3>eInvoicing FAQ (Technical)</h3>
</div>

<div class="blog-excerpt">
    <h3>Security and Privacy</h3>
</div>

<div class="blog-excerpt">
    <h3>Service Provider Accreditation</h3>
</div>

<div class="blog-excerpt">
    <h3>Early Adoption</h3>
</div>

<div class="blog-excerpt">
    <h3>Getting Involved</h3>
</div>

## Can't find what you need?  [Click here to ask your question..](mailto:contact@digitalbusinesscouncil.com.au)

<ul>
  {% for blog-page in site.categories.faq %}
    <div class="blog-excerpt">
    <a href="{{ blog-page.url | absolute_url }}"><h3>{{ blog-page.title }}</h3></a>
    
    <table class="blog-table">
    <tr>
    <td colspan="4"><i>&nbsp;&nbsp;{{ blog-page.date | date: "%a, %d %b %Y" }}</i></td>
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
    <tr>
    <td colspan="8">
    <img src="{{ blog-page.excerpt-image | absolute_url }}" /> {{ blog-page.excerpt }}
    </td>
    </tr>
    </table>
    </div>
  {% endfor %}
</ul>
Click here to see older blogs..
