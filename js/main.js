$(".menu-mobile-icon").click(function(){
  $(".menu-list").fadeToggle(800);

});
$(window).resize(function(){

       if ($('.logo').width() == 320 ){
         $("this").hide();

       }

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

        $(".title a").css("color", "white");

        $(".menu-list").css({
          'position': 'fixed',
          'color': 'white',
          'background-color':'#627883',
          'width':'100%',
          'margin-top':'-2%',
          'z-index': '1'
        });
      }
      else {
        $(".menu-list").css({
          "position": "static",
          "margin-top": "0",
        });
        // $(".title a").css("color", "black");
        $(".logo").show();

      }
    });
  });
})(jQuery);
