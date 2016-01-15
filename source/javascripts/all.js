(function($){
  $(function(){ 
      // scroll is still position
      var scroll = $(document).scrollTop();
      var headerHeight = $('.dtv-header').outerHeight();
      //console.log(headerHeight);
      
      $(window).scroll(function() {
        // scrolled is new position just obtained
        var scrolled = $(document).scrollTop();
                
        // optionally emulate non-fixed positioning behaviour
      
        if (scrolled > headerHeight){
          $('.dtv-header').addClass('off-canvas');
        } else {
          $('.dtv-header').removeClass('off-canvas');
        }

          if (scrolled > scroll){
               // scrolling down
           $('.dtv-header').removeClass('fixed');
            } else {
            //scrolling up
            $('.dtv-header').addClass('fixed');
          }       
         
        scroll = $(document).scrollTop(); 
       });
    
    
  });
})(jQuery);  