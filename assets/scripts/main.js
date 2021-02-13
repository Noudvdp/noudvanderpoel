$(document).ready(function (){
   AOS.init({
      duration: 800,
   });

   $(window).scroll(function (){
      let current = $('#header').height();
      let nav = $("#nav");

      if($(this).scrollTop() >= current){
         if(!nav.hasClass("under-header")){
            nav.addClass("under-header");
         }
      }
      else {
         nav.removeClass("under-header");
      }
   });
});