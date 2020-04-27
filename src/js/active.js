(function ($) {
  "use strict";

  // ScrollUp Active Code
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
    });
  }

  // Sticky Active Code
  if ($.fn.sticky) {
    $("#header").sticky({
      topSpacing: 0,
    });
  }

  // PreventDefault a Click
  $("a[href='#']").on("click", function ($) {
    $.preventDefault();
  });

  // wow Active Code
  if ($.fn.init) {
    new WOW().init();
  }

  // matchHeight Active Code
  if ($.fn.matchHeight) {
    $(".item").matchHeight();
  }

  var $window = $(window);

  // Preloader active code
  $window.on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
})(jQuery);
