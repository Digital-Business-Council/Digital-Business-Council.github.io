(function(){

  // handle the swanky top level navigation/section stuff
  ////////////////////////////////////////////////////////////

  var nav_links = document.querySelectorAll(".faq-toc .faq-category a");
    
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

//}

  // handle the lower level navigation/div stuff
  ////////////////////////////////////////////////////////////

  var faq_links = document.querySelectorAll(".faq-toc section .faq-answers a");
    
  /* loop through all nav links */
  [].slice.call(faq_links).forEach(function(el, i) {
    
    /* fetch vars */
    var divhref = el.getAttribute("href"),
        id = divhref.substr(1),
        divelement = document.querySelector(divhref),
        expander = divelement.querySelector("a.expander");

    /* listen for nav clicks */
    el.addEventListener("click", function(e) {
      e.preventDefault();
      if (!classie.has(divelement, "active")) {
        classie.add(divelement, "active");
      }
    });

    /* listen for close clicks on the close button */
    expander.addEventListener("click", function(e) {
      e.preventDefault();
      if (classie.has(divelement, "active")) {
        classie.remove(divelement, "active");
      }
    });

  });

}
 
 
)();
