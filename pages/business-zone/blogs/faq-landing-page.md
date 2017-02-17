---
layout: blog-master
title: FAQs
permalink: /faqs/
---

# How can we help you?

Choose a category to find the help you need.

<div class="faq-toc">

{% assign sorted_faqs = (site.categories.faq | sort: 'title') %}

<div class="faq-category">
<h3><a href="#einvoicing-business">eInvoicing FAQ (Business)</a></h3>
    <ul>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "einvoice-business" %}
                    <li><a href="{{ faq-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
                {% endif %}
            {% endfor %}
    </ul>
</div>
<section id="einvoicing-business" >
<div class="faq-answers">
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "einvoice-business" %}
                    <h4>{{ faq-page.title }}</h4>
                    {{ faq-page.content }}
                {% endif %}
            {% endfor %}
</div>
</section>

<div class="faq-category">
    <h3>eInvoicing FAQ (Technical)</h3>
    <ul>
            {% for faq-page in sorted_faqs %}
            {% if faq-page.categories contains "einvoice-tech" %}
            <li><a href="{{ faq-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% endif %}
            {% endfor %}
    </ul>
</div>

<div class="faq-category">
    <h3>Security and Privacy</h3>
    <ul>
            {% for faq-page in sorted_faqs %}
            {% if faq-page.categories contains "security" %}
            <li><a href="{{ faq-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% endif %}
            {% endfor %}
    </ul>
    <img src="{{ site.url | absolute}}\images\security.png" class="category-img"/>
</div>

<div class="faq-category">
    <h3>Provider Accreditation</h3>
    <ul>
            {% for faq-page in sorted_faqs %}
            {% if faq-page.categories contains "accreditation" %}
            <li><a href="{{ faq-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% endif %}
            {% endfor %}
    </ul>
</div>

<div class="faq-category">
    <h3>Early Adoption</h3>
    <ul>
            {% for faq-page in sorted_faqs %}
            {% if faq-page.categories contains "adoption" %}
            <li><a href="{{ faq-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% endif %}
            {% endfor %}
    </ul>
</div>

<div class="faq-category">
    <h3>Other</h3>
    <ul>
             {% for faq-page in sorted_faqs %}
            <li><a href="{{ faq-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% else %}
                No FAQs available.  
            {% endfor %}
    </ul>
</div>


</div>

### Can't find what you need?  [Click here to ask your question..](mailto:contact@digitalbusinesscouncil.com.au)

<script src="{{site.url | absolute}}/javascripts/classie.js"></script>
<script>
(function(){

  // handle the swanky navigation/section stuff
  ////////////////////////////////////////////////////////////

  var nav_links = document.querySelectorAll("nav.cmn-overlays-nav a");
    
  /* loop through all nav links */
  [].slice.call(nav_links).forEach(function(el, i) {
    
    /* fetch vars */
    var href = el.getAttribute("href"),
        id = href.substr(1),
        section = document.querySelector(href),
        close = section.querySelector("a.close");

    /* listen for nav clicks */
    el.addEventListener("click", function(e) {
      e.preventDefault();
      if (!classie.has(section, "active")) {
        classie.add(section, "active");
      }
    });

    /* listen for close clicks on the mask */
    section.addEventListener("click", function(e) {
      if (e.target.tagName == "SECTION") {
        e.preventDefault();
        if (classie.has(section, "active")) {
          classie.remove(section, "active");
        }
      }
    });

    /* listen for close clicks on the close button */
    close.addEventListener("click", function(e) {
      e.preventDefault();
      if (classie.has(section, "active")) {
        classie.remove(section, "active");
      }
    });

  });

})();
</script>
