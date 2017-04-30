// nav bar goes left before page load

var nav_start = document.querySelector('.nav_start');
var nav_start_width =nav_start.clientWidth;
nav_start.style.left=-nav_start_width+"px";

$(function() {
  // main slider start
  var images = ["img/main_back.jpg","img/background-02.jpg","img/background-03.jpg"];
  var texth2 = ["HIGH QUALITY MEDICAL CARE THAT'S FAST AND CONVENIENT","AFFORDABLE PEDIATRIC DENTISTRY SERVICES","WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES"];
  var textp = ["Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.","We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.","Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care."];

  var dots = $('.slider_dots span');
  var main_text = $('.first_slider_left_content h2');
  var second_text = $('.first_slider_left_content p');
  // main slider opacity effect
  var slider_back = $(".header_slider");
  slider_back.css({"opacity":"1"});

  val = 0;
  for (var i = 0; i < dots.length; i++) {
    dots.eq(i).click(function(e) {
      val = e.target.getAttribute("data-value");
      for (var i = 0; i < images.length; i++) {
        dots[i].classList.remove("active_dot"); //elave olunacq
        main_text.text(texth2[val]);
        second_text.text(textp[val]);
      }
      slider_back.css({"backgroundImage":"url(" + images[val] + ")","opacity":"1"});
      e.target.classList.add("active_dot"); //elave olunacq
    })
  }
  // main slider end

  $(window).resize(function(){
	if ($(window).width() >= 1199){
		$(".contact_responsive").hide();
	}
});

  var b = $(".gallery_sub");
  $(".slide_down").click(function() {
    $(this).toggleClass("active_sub");
    var a = $(this).attr("data-val");
    $(b[a]).toggle();
  })

  $('.menu_button,.button_close').hover(
    function () {
      $(this).css({"background":"#18afd3"});
      $(this).find("i").css({"color":"#fff"});
        },
    function () {
      $(this).css({"background":"#fff"});
      $(this).find("i").css({"color":"#18afd3"});
        }
    );

  $(".menu_button").click(function() {
    nav_start.style.left=0+"px";
  });
  $(".button_close").click(function() {
    nav_start.style.left=-nav_start_width+"px";
  });
  $(".button_close").click(function(e) {
    e.stopPropagation();
    return false;
});

$('.gallery_sub li').hover(
  function () {
    $(this).find(".i_hover").css({"font-size":"20px","padding-right":"10px"});
      },
  function () {
    $(this).find(".i_hover").css({"font-size":"0px","padding-right":"0"});
      }
  );

  $('.testimonials .dot').click(function() {
      $('.testimonials .dot').removeClass('dotActive');
      $('.testimonials .dotty').removeClass('dottyActive');
      $(this).addClass('dotActive');
      $(this).parent().addClass('dottyActive');
  });

  $(".select").click(function() {
    $(".options").toggle();
  });
  $(".options p").click(function() {
  var text = $(this).text();
  $(".select>div>.text_change").text(text);
  })

  $(".three_dots").click(function() {
    $(".contact_responsive").toggle();
  })
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


 function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.3774315, lng: 49.8541026},
          scrollwheel: false,
          zoom: 17
        });
      }