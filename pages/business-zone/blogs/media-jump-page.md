---
layout: blog-master
title: Media
permalink: /media/
---

Our media section is designed to share information to our readers.  You will find short articles that you may like to comment upon or share with your colleagues.

Council would like to build trust through a community with share interests in the benefits of digitisation and eInvoicing.
<table align="top">
<tr>
<th>blogs</th><th>faqs</th><th>events</th>
</tr>
<tr>
<td>
<ul>
  {% for blog-page in site.categories.blog %}
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

</td>
<td>
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
</td>

<td>
<ul>
  {% for blog-page in site.categories.event %}
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
</td>
</tr>
</table>
Click here to see older blogs..




<div class="media-zone-layout">

<div class="media-zone-panel">

<div class="media-zone-cardstack">
<div class="media-zone-cardstack-header"">
     <h3><span>Blogs</span></h3>
</div> 

  {% for blog-page in site.categories.blog %}
    
    <div class="media-zone-card">
    
	<div class="card-title" style="left: 65px; top: 200px;">
    		<a href="{{ blog-page.url | absolute_url }}"><h3>{{ blog-page.title }}</h3></a>
    	</div>
 	
	<div class="card-date" style="left: 65px; top: 200px;">	
		<i>&nbsp;&nbsp;{{ blog-page.date | date: "%a, %d %b %Y" }}</i></td>
	</div>

	<div class="card-social">    
		<table>
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

	</div>

	<div class="card-content">
    		<img src="{{ blog-page.excerpt-image | absolute_url }}" /> {{ blog-page.excerpt }}
    	</div>

	</div>
  {% endfor %}
</div>  //end media-zone-cardstack





</div>  //end media-zone-panel

</div>  //end media-zone-layout


