$(document).ready(function() {

  $("#owl-demo").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
  });

});
