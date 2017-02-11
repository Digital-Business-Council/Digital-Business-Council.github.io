---
layout: blog-master
title: Media
permalink: /media/
---

Our media section is designed to share information to our readers.  You will find short articles that you may like to comment upon or share with your colleagues.

Council would like to build trust through a community with share interests in the benefits of digitisation and eInvoicing.
<div class="media-zone-layout">

<div class="media-zone-panel">

<div class="media-zone-cardstack">
<div class="media-zone-cardstack-header">
     <h3><span>Blogs</span></h3>
</div> 

  {% for blog-page in site.categories.blog %}
    
    <div class="media-zone-card">
    
	<div class="card-title">
    		<a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title | truncate: 102}}</a>
    	</div>
 	
	<div class="card-date">	
		<i>&nbsp;&nbsp;{{ blog-page.date | date: "%a, %d %b %Y" }}</i>
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
		</tr>
		</table>
	</div>

	<div class="card-content">
    		<img src="{{ blog-page.excerpt-image | absolute_url }}" /> {{ blog-page.excerpt | truncate: 315 }}
    	</div>

	<div class="card-action">
		<a href="{{blog-page.url}}">Continue reading..</a>
    	</div>
	
	</div>
  {% endfor %}
  
  <div class="media-zone-cardstack-footer">
     <a href="#">View all...</a>
</div> 

</div>  


<div class="media-zone-cardstack">
<div class="media-zone-cardstack-header">
     <h3><span>FAQs</span></h3>
</div> 

  {% for blog-page in site.categories.faq %}
    
    <div class="media-zone-card">
    
	<div class="card-title">
    		<a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title | truncate: 102}}</a>
    	</div>
 	
	<div class="card-date">	
		<i>&nbsp;&nbsp;{{ blog-page.date | date: "%a, %d %b %Y" }}</i>
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
		</tr>
		</table>
	</div>

	<div class="card-content">
    		<img src="{{ blog-page.excerpt-image | absolute_url }}" /> {{ blog-page.excerpt | truncate: 315 }}
    	</div>

	<div class="card-action">
		<a href="{{blog-page.url}}">Continue reading..</a>
    	</div>

	
	</div>
  {% endfor %}
</div>  


<div class="media-zone-cardstack">
<div class="media-zone-cardstack-header">
     <h3><span>Events</span></h3>
</div> 

  {% for blog-page in site.categories.event %}
    
    <div class="media-zone-card">
    
	<div class="card-title">
    		<a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title | truncate: 102}}</a>
    	</div>
 	
	<div class="card-date">	
		<i>&nbsp;&nbsp;{{ blog-page.date | date: "%a, %d %b %Y" }}</i>
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
		</tr>
		</table>
	</div>

	<div class="card-content">
    		<img src="{{ blog-page.excerpt-image | absolute_url }}" /> {{ blog-page.excerpt | truncate: 315 }}
    	</div>

	<div class="card-action">
		<a href="{{blog-page.url}}">Continue reading..</a>
    	</div>

	
	</div>
  {% endfor %}
</div>  


</div> 

</div>  


