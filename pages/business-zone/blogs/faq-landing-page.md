---
layout: faq-master
title: FAQs
permalink: /faqs/
---

# How can we help you?

Choose a category to find the help you need.

<div class="faq-toc">

{% assign sorted_faqs = (site.categories.faq | sort: 'title') %}

<div class="faq-category">
    <img src="{{ site.url | absolute}}\images\security.png" class="category-img"/>
    <h3><a href="#einvoicing-business">eInvoicing FAQ (Business)</a></h3>
</div>

<div class="faq-category">
    <img src="{{ site.url | absolute}}\images\security.png" class="category-img"/>
    <h3><a href="#einvoicing-technical">eInvoicing FAQ (Technical)</a></h3>
</div>

<div class="faq-category">     <img src="{{ site.url | absolute}}\images\security.png" class="category-img"/>
     <h3><a href="#security-privacy">Security and Privacy</a></h3></div>

<div class="faq-category">
    <img src="{{ site.url | absolute}}\images\security.png" class="category-img"/>
    <h3><a href="#provider-accreditation">Provider Accreditation</a></h3>
</div>


<div class="faq-category">
    <img src="{{ site.url | absolute}}\images\security.png" class="category-img"/>
    <h3><a href="#early-adoption">Early Adoption</a></h3>
</div>

<div class="faq-category">
    <img src="{{ site.url | absolute}}\images\security.png" class="category-img"/>
    <h3><a href="#council-faqs">Digital Business Council</a></h3>
</div>

<section id="einvoicing-business" >
<div class="faq-answers">
<h2>eInvoicing FAQs (Business)</h2>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "einvoice-business" %}
                    {% assign hash_string = ((faq-page.title | url_encode) | sha256) %}
                    
                    {{ faq-page.title | remove: ' ' | strip_newlines | downcase | md5 }}
                    
                    <h4>Q: <a href="#{{ faq-page.title | remove: ' ' | strip_newlines | downcase | md5 }}" >{{ faq-page.title }}</a></h4>
                    
                    <div class="faq-answers-answerblock" id="{{ faq-page.title | remove: ' ' | strip_newlines | downcase | md5 }}">
                        <h4>A:</h4> {{ faq-page.content }}
                        <a href="#" class="expander">^</a>
                    </div>
                    
                    <hr/>
                {% endif %}
            {% endfor %}
 <a href="#" class="close">x</a>
</div>
</section>

<section id="einvoicing-technical" >
<div class="faq-answers">
<h2>eInvoicing FAQs (Technical)</h2>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "einvoice-tech" %}
                    <h4>Q: {{ faq-page.title }}</h4>
                    <h4>A:</h4> {{ faq-page.content }}
                    <hr/>
                {% endif %}
            {% endfor %}
 <a href="#" class="close">x</a>
</div>
</section>

<section id="security-privacy" >
<div class="faq-answers">
<h2>Security and Privacy FAQs</h2>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "security" %}
                    <h4>Q: {{ faq-page.title }}</h4>
                    <h4>A:</h4> {{ faq-page.content }}
                    <hr/>
                {% endif %}
            {% endfor %}
 <a href="#" class="close">x</a>
</div>
</section>

<section id="early-adoption" >
<div class="faq-answers">
<h2>Early Adoption FAQs</h2>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "adoption" %}
                    <h4>Q: {{ faq-page.title }}</h4>
                    <h4>A:</h4> {{ faq-page.content }}
                    <hr/>
                {% endif %}
            {% endfor %}
 <a href="#" class="close">x</a>
</div>
</section>

<section id="council-faqs" >
<div class="faq-answers">
<h2>Digital Business Council FAQs</h2>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "council" %}
                    <h4>Q: {{ faq-page.title }}</h4>
                    <h4>A:</h4> {{ faq-page.content }}
                    <hr/>
                {% endif %}
            {% endfor %}
 <a href="#" class="close">x</a>
</div>
</section>

<section id="provider-accreditation" >
<div class="faq-answers">
<h2>Service Provider Accreditation FAQs</h2>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "accreditation" %}
                    <h4>Q: {{ faq-page.title }}</h4>
                    <h4>A:</h4> {{ faq-page.content }}
                    <hr/>
                {% endif %}
            {% endfor %}
 <a href="#" class="close">x</a>
</div>
</section>
</div>

### Can't find what you need?  [Click here to ask your question..](mailto:contact@digitalbusinesscouncil.com.au)

<script src="{{site.url | absolute}}/javascripts/classie.js"></script>
<script src="{{site.url | absolute}}/javascripts/overlay.js"></script>
