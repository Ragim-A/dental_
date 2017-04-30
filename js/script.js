var nav_start = document.querySelector('.menu_responsive');
console.log(nav_start);
var nav_start_width =nav_start.clientWidth;
console.log(nav_start_width);
nav_start.style.left=-nav_start_width+"px";

$(window).resize(function(){
	if ($(window).width() >= 992){
		$(".contact_responsive").hide();
	}
});

$(window).resize(function(){
	if ($(window).width() >= 992){
		$(".menu_responsive").hide();
	}else {
		$(".menu_responsive").show();
	}
});

$(function(){
  $('.gallery_sub li').hover(
  function () {
    $(this).find(".i_hover").css({"font-size":"20px","padding-right":"10px"});
      },
  function () {
    $(this).find(".i_hover").css({"font-size":"0px","padding-right":"0"});
      }
  );

  var b = $(".gallery_sub");
  $(".slide_down").click(function() {
    $(this).toggleClass("active_sub");
    var a = $(this).attr("data-val");
    $(b[a]).toggle();
  })

  $(".three_dots").click(function() {
    $(".contact_responsive").toggle();
  })

	window.onscroll = function(e) {
	   var b = window.scrollY;
		 if (b>150) {
		 	$(".nav_wrapper").addClass("fixed");
		}else{
			$(".nav_wrapper").removeClass("fixed");
		}
	};

	$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.footer_button').css({"bottom":"-100px"});
			} else {
				$('.footer_button').css({"bottom":"0"});
			}
		});

		$('.footer_button').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

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

$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.footer_button').css({
				"visibility":"visible",
				"bottom":"30px"
			});
		} else {
			$('.footer_button').css({
				"visibility":"hidden",
				"bottom":"-50"
			});
		}
	});

	$('.footer_button').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});

});
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("is-active") === true) {
        this.classList.remove("is-active");
        nav_start.style.left=-nav_start_width+"px";
      }else {
        this.classList.add("is-active");
        nav_start.style.left=0+"px";
      }
    });
  }

})();
