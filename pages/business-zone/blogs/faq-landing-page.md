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
    <h3>eInvoicing FAQ (Business)</h3>
    <ul>
            {% for faq-page in sorted_faqs %}
                {% if faq-page.categories contains "einvoice-business" %}
                    <li><a href="{{ faq-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
                {% endif %}
            {% endfor %}
    </ul>
</div>
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

