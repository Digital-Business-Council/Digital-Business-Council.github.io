---
layout: page
title: Digital Business Processes
permalink: /digital-business-processes/
---

# Digital Business Processes

The Digital Business Council exists to develop, deploy and facilitate the adoption of digital standards in Australia. Digitisation will keep you in the game… and it may even let you change the rules.

## eInvoicing

According to research, eInvoicing can be up to 80% more efficient than traditional paper-based invoicing.
Paper based invoicing is costly, prone to error and requires manual processing by both the sender and recipient.
Studies have found that fixing an invoicing error can cost up to $50 each time. eInvoicing can reduce error rates dramatically.
Increasingly, businesses – *large and especially small* – are using accounting software to help manage their businesses. They know it saves time and money.

eInvoicing standardises and digitises invoice information exchange for all types and sizes of businesses. The invoice becomes an exchange of data and not an exchange of paper.

It means that any business can create and process invoices consistently, securely and reliably. It will help you manage your cash flow. It will reduce the time you spend entering data into your system. And it will start giving you the control over your business that you always wanted.

<div>
<style>
.mySlides {display:none}
.w3-left, .w3-right, .w3-badge {cursor:pointer}
.w3-badge {height:13px;width:13px;padding:0}
.w3-border{border:1px solid #ccc!important}
.w3-transparent{background-color:transparent!important}
.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}
.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-center{display:inline-block;width:auto}
.w3-padding-left{padding-left:16px!important}
.w3-padding-right{padding-right:16px!important}
.w3-large{font-size:18px!important}
.w3-display-container{position:relative}
.w3-container{padding:0.01em 16px}
.w3-container:after,.w3-container:before{content:"";display:table;clear:both}
.w3-content{max-width:980px;margin:auto}
</style>

<div class="w3-container">
  <h2>The journey towards eInvoicing</h2>
  <p>The following slide show highlight the journey the Digital Business Council is taking towards invoice digitsation.</p>
</div>

<div class="w3-content w3-display-container" style="max-width:800px">
  <img class="mySlides" src="{{site.url | absolute}}/images/StratSourcing.png" style="width:80%">
  <img class="mySlides" src="{{site.url | absolute}}/images/einvoicing-current-state.png" style="width:80%">
  <img class="mySlides" src="{{site.url | absolute}}/images/einvoicing-current-state2.png" style="width:80%">
  <img class="mySlides" src="{{site.url | absolute}}/images/einvoicing-approach.png" style="width:80%">
   
  <div class="w3-center w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:80%">
    <div class="w3-left w3-padding-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
    <div class="w3-right w3-padding-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
        <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(4)"></span>
  </div>
</div>
  
<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
</script>
