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
    <img src="{{ site.url | absolute}}\images\eInvoicing-icon.png" class="category-img"/>
    <h3><a href="#einvoicing-business">eInvoicing FAQ (Business)</a></h3>
</div>

<div class="faq-category">
    <img src="{{ site.url | absolute}}\images\tech-icon.png" class="category-img"/>
    <h3><a href="#einvoicing-technical">eInvoicing FAQ (Technical)</a></h3>

</div>

<div class="faq-category">    
    <img src="{{ site.url | absolute}}\images\security-icon.png" class="category-img"/>
     <h3><a href="#security-privacy">Security and Privacy</a></h3></div>
</div>
<div class="faq-category">
    <img src="{{ site.url | absolute}}\images\council-icon.png" class="category-img"/>
    <h3><a href="#council-faqs">Digital Business Council</a></h3>
</div>

<section id="einvoicing-business" >
<div class="faq-answers">
<h2>eInvoicing FAQs (Business)</h2>

            {% assign i = 0 %}
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "einvoice-business" %}                 
                    <div class="faq-answers-questionblock">
                        <img src="{{site.url |absolute}}/images/question-icon.png"/><a href="#einvoicing-business{{ forloop.index }}" >{{ faq-page.title }}</a>
                    </div>
                    <div class="faq-answers-answerblock" id="einvoicing-business{{ forloop.index }}">
                        <img src="{{site.url |absolute}}/images/answer-icon.png"/> {{ faq-page.content }}
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
                <div class="faq-answers-questionblock">
                    <img src="{{site.url |absolute}}/images/question-icon.png"/><a href="#einvoicing-technical{{ forloop.index }}" >{{ faq-page.title }}</a>  
                    </div>
                    <div class="faq-answers-answerblock" id="einvoicing-technical{{ forloop.index }}">
                        <img src="{{site.url |absolute}}/images/answer-icon.png"/> {{ faq-page.content }}
                        <a href="#" class="expander">^</a>
                    </div> 
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

                <div class="faq-answers-questionblock">
                <img src="{{site.url |absolute}}/images/question-icon.png"/><a href="#security-privacy{{ forloop.index }}" >{{ faq-page.title }}</a>     
                    </div>
                    <div class="faq-answers-answerblock" id="security-privacy{{ forloop.index }}">
                        <img src="{{site.url |absolute}}/images/answer-icon.png"/>{{ faq-page.content }}
                        <a href="#" class="expander">^</a>
                    </div> 
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
                <div class="faq-answers-questionblock">
                    <img src="{{site.url |absolute}}/images/question-icon.png"/><a href="#council-faqs{{ forloop.index }}" >{{ faq-page.title }}</a>       
                    </div> 
                    <div class="faq-answers-answerblock" id="council-faqs{{ forloop.index }}">
                        <img src="{{site.url |absolute}}/images/answer-icon.png"/> {{ faq-page.content }}
                        <a href="#" class="expander">^</a>
                    </div> 
                    <hr/>
                {% endif %}
            {% endfor %}
 <a href="#" class="close">x</a>
</div>
</section>

 <a href="#" class="close">x</a>
</div>
</section>
</div>

### Can't find what you need?  [Click here to ask your question..](mailto:contact@digitalbusinesscouncil.com.au)

<script src="{{site.url | absolute}}/javascripts/classie.js"></script>
<script src="{{site.url | absolute}}/javascripts/overlay.js"></script>
