---
layout: blog-master
title: FAQs
permalink: /faqs/
---

# How can we help you?

Choose a category to find the help you need.

<div class="faq-toc">
{% for faq-page in site.categories.faq %}
<div class="faq-category">
    <h3>eInvoicing FAQ (Business)</h3>
    <ul>
            {% if faq-page.categories contains "einvoice-business" %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% else %}
                No FAQs available.  
            {% endif %}
    </ul>
</div>
<div class="faq-category">
    <h3>eInvoicing FAQ (Technical)</h3>
    <ul>
            {% if faq-page.categories contains "einvoice-tech" %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% else %}
                No FAQs available.  
            {% endif %}
    </ul>
</div>

<div class="faq-category">
    <h3>Security and Privacy</h3>
    <ul>
            {% if faq-page.categories contains "security" %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% else %}
                No FAQs available.  
            {% endif %}
    </ul>
</div>

<div class="faq-category">
    <h3>Service Provider Accreditation</h3>
    <ul>
            {% if faq-page.categories contains "accreditation" %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% else %}
                No FAQs available.  
            {% endif %}
    </ul>
</div>

<div class="faq-category">
    <h3>Early Adoption</h3>
    <ul>
            {% if faq-page.categories contains "adoption" %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ faq-page.title }}</a></li>
            {% else %}
                No FAQs available.  
            {% endif %}
    </ul>
</div>

<div class="faq-category">
    <h3>Other</h3>
    <ul>
            <li><a href="{{ blog-page.url | absolute_url }}">{{ faq-page }}</a></li>
    </ul>
</div>

{% endfor %}
</div>

### Can't find what you need?  [Click here to ask your question..](mailto:contact@digitalbusinesscouncil.com.au)

