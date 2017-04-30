var nav_start = document.querySelector('.menu_responsive');
var nav_start_width =nav_start.clientWidth;
nav_start.style.left=-nav_start_width+"px";

$(window).resize(function(){
	if ($(window).width() >= 920){
		$(".contact_responsive").hide();
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

	// window.onscroll = function (e) {
	//    var a = window.scrollY;
	// 	 if (a>100) {
	// 	 	$(".nav_wrapper").addClass("fixed");
	// 	}else{
	// 		$(".nav_wrapper").removeClass("fixed");
	// 	}
	// };
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


(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      
      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      
      $self.data('countTo', data);
      
      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      
      // initialize the element with the starting value
      render(value);
      
      function updateTimer() {
        value += increment;
        loopCount++;
        
        render(value);
        
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        
        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  
  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };
  
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, '');
  }
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
  }
});
//sonu
//skill bars
$(".skills").addClass("active")
$(".skills .skill  span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
});

