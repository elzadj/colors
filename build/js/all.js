jQuery(document).ready(function() {
  
  var scrollWin = function (selector) {
      jQuery('html, body').animate({
      scrollTop: jQuery(selector).offset().top-35
      }, 800);
    }
    
    jQuery("[href^=#]").click(function(e) {
      scrollWin (jQuery(this).attr("href"));
      return false;
    });

});