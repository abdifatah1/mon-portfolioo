$(".menu-mobile-icon").click(function(){
  $(".menu-list").fadeToggle(800);

});
(function($){
  $(document).ready(function(){
    $('#realisation img').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
    var offset = $(".menu-list").offset().top;
    $(document).scroll(function(){
      var scrollTop = $(document).scrollTop();
      if(scrollTop > offset){
        $(".logo").hide();

       $(".title a").css("color", "black");
        $(".menu-list").css({
          'position': 'fixed',
          'color': 'white',
          'background-color':'#F0FFF0',
          'width':'100%',
         
          'z-index': '1'
        });
      }
      else {
        $(".menu-list").css({
          "position": "static",
          "margin-top": "0"
        });
        $(".title a").css("color", "black");

	
	if (window.matchMedia("(max-width: 768px)").matches) {
          $(".logo").hide();
        }else{
          $(".logo").show();

        }

      }
    });
  });
})(jQuery);
