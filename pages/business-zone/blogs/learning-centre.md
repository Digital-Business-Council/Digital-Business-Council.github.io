---
layout: blog-master
title: Learning Centre
permalink: /learning-centre/
---

Our learning centre is designed to share information to our readers.  You will find short articles that you may like to commont upon or share with your colleagues.

Council would like to build trust through a community with share interests in the benefits of digitisation and eInvoicing.

<table>
<tr>
<td colspan="2">Digital Capability Publishers DCP: Getting to know the components of Australia’s eInvoicing Framework </td>
</tr>
<tr>
<td colspan="2">1 Jan 2017</td>
</tr>
<tr>
<td>
<img src="https://digital-business-council.github.io/images/blogs/Framework.jpg" alt="Framework Diagram" />
</td>
<td>
The Digital Business Council is striving toward the implementation of a standard and open digital commercial exchange mechanism for business documents. It has described an Interoperability Framework that enables this. The Framework will support, in the first instance, the implementation of eInvoicing. It will also support other standardised digital document types.
The Framework is based on a four corner model similar to the one adopted by <a href="http://peppol.eu">PEPPOL</a>. The Framework is illustrated in the picture below. Let us use the example of a supplier sending an eInvoice to a buyer. The supplier... 
Continue reading...
</td>
</tr>
</table>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
<ul>
  {% for blog-page in site.pages/business-zone/blogs %}
    <li>
      <a href="{{ blog-page.url }}">{{ blog-page.title }}</a>
    </li>
  {% endfor %}
</ul>

Click here to see older blogs..
