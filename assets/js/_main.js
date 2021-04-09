/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // Sticky footer
  var bumpIt = function() {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  };

  bumpIt();
  $(window).resize(
    jQuery.throttle(250, function() {
      bumpIt();
    })
  );

  // FitVids init
  $("#main").fitVids();

  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
    } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });

  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });

  // Smooth scrolling
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 20,
    speed: 400,
    speedAsDuration: true,
    durationMax: 500
  });

  // Gumshoe scroll spy init
  if($("nav.nav__list.nav--toc").length > 0) {
    var spy = new Gumshoe("nav.nav__list a", {
      // Active classes
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content

      // Nested navigation
      nested: false, // if true, add classes to parents of active link
      nestedClass: "active", // applied to the parent items

      // Offset & reflow
      offset: 40, // how far from the top of the page to activate a content area
      reflow: true, // if true, listen for reflows

      // Event support
      events: true // if true, emit custom events
    });
  }
  
  // add lightbox class to all image links
  $(
    "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']"
  ).addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});

var prepareCollapse = function() {
  var collapseContents = document.querySelectorAll(".collapse-content");

  if (collapseContents.length === 0) {
    return
  }

  var expandButtons = $(".expand-button");
  var collapseButtons = $(".collapse-button");
  var toggleButtons = $(".collapse-toggle-button");
  var expandAll = document.getElementById("expand-all");
  var collapseAll = document.getElementById("collapse-all");

  var i;
  for (i = 0; i < expandButtons.length; i++) {
    expandButtons[i].addEventListener("click", handleExpand);
  }

  var j;
  for (j = 0; j < collapseButtons.length; j++) {
    collapseButtons[j].addEventListener("click", handleCollapse);
  }

  var k;
  for (k = 0; k < toggleButtons.length; k++) {
    toggleButtons[k].addEventListener("click", handleToggle);
  }

  if (expandAll) {
    expandAll.addEventListener("click", handleExpandAll);
  }
  
  if (collapseAll) {
    collapseAll.addEventListener("click", handleCollapseAll);
  }

  function handleExpand() {
    this.style.display = "none";
    var expandContent = this.nextElementSibling;
    var collapseButton = expandContent.nextElementSibling;
    expand(expandContent);
    collapseButton.style.display = "block";
  }

  function handleCollapse() {
    this.style.display = "none";
    var collapseContent = this.previousElementSibling;
    var expandButton = collapseContent.previousElementSibling;
    collapse(collapseContent);
    expandButton.style.display = "block";
  }

  function handleToggle(e) {
    e.target.blur();
    var toggleContent = this.nextElementSibling;
    var maxHeight = toggleContent.style.maxHeight;
    if (!maxHeight || maxHeight === "0px") {
      expand(toggleContent, this);
    } else {
      collapse(toggleContent, this);
    }
  }

  function handleExpandAll() {
    collapseContents.forEach(function (element) {
      expand(element, element.previousElementSibling);
    });
  }

  function handleCollapseAll() {
    collapseContents.forEach(function (element) {
      collapse(element, element.previousElementSibling);
    });
  }

  function expand(element, button) {
    button && button.classList.add("expanded");
    var height = element.scrollHeight;
    element.childNodes.forEach(function(child) {
      if (child.scrollHeight) {
        height += child.scrollHeight;
      }
      child.childNodes.forEach(function(grandChild) {
        if (grandChild.scrollHeight) {
          height += grandChild.scrollHeight;
        }
      })
    });
    element.style.maxHeight = height + "px";
  }

  function collapse(element, button) {
    button && button.classList.remove("expanded");
    element.style.maxHeight = 0;
  }
};

prepareCollapse();