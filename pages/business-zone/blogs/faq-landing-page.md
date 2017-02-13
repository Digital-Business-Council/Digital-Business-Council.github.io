---
layout: blog-master
title: FAQs
permalink: /faqs/
---

# How can we help you?

Choose a category to find the help you need.

<div class="faq-toc">

<div class="faq-category">
    <h3>eInvoicing FAQ (Business)</h3>
    <ul>
        {% for blog-page in site.categories.faq %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title }}</a></li>
        {% else %}
            No FAQs available.
        {% endfor %}
    </ul>
</div>
<div class="faq-category">
    <h3>eInvoicing FAQ (Technical)</h3>
    <ul>
        {% for blog-page in site.categories.faq %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title }}</a></li>
        {% else %}
            No FAQs available.
        {% endfor %}
    </ul>
</div>

<div class="faq-category">
    <h3>Security and Privacy</h3>
    <ul>
        {% for blog-page in site.categories.faq %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title }}</a></li>
        {% else %}
            No FAQs available.
        {% endfor %}
    </ul>
</div>

<div class="faq-category">
    <h3>Service Provider Accreditation</h3>
    <ul>
        {% for blog-page in site.categories.faq %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title }}</a></li>
        {% else %}
            No FAQs available.
        {% endfor %}
    </ul>
</div>

<div class="faq-category">
    <h3>Early Adoption</h3>
    <ul>
        {% for blog-page in site.categories.faq %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title }}</a></li>
        {% else %}
            No FAQs available.
        {% endfor %}
    </ul>
</div>

<div class="faq-category">
    <h3>Other</h3>
    <ul>
        {% for blog-page in site.categories.faq %}
            <li><a href="{{ blog-page.url | absolute_url }}">{{ blog-page.title }}</a></li>
        {% else %}
            No FAQs available.
        {% endfor %}
    </ul>
</div>

</div>

### Can't find what you need?  [Click here to ask your question..](mailto:contact@digitalbusinesscouncil.com.au)

