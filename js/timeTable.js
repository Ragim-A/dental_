
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
adultDentist=[
//Monday
  [ //Hekim.........//Bashlama vaxti .................//Bitme vaxti
    ["<p>Eric Synder</p>",new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),"<img src='images/user01.jpg'>"]  ,   
    ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Tuesday
  [
    ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='images/user02.jpg'>"]     
  ],
//Wednesday
  [
    ["<p>Eric Synder</p>",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),"<img src='images/user01.jpg'>"]  ,   
  ],
//THursday
  [
    ["Carolyn  Hunt",new Date("April 20, 2017 11:00:00"),new Date("April 20, 2017 15:00:00"),"<img src='images/user02.jpg'>"]     
    
  ],
//Friday

  [
    ["<p>Eric Synder</p>",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),"<img src='images/user01.jpg'>"]  ,   
    ["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Saturday
  [
    
    ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),"<img src='images/user03.jpg'>"]  
  ],
//Sunday
  [   
    ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),"<img src='images/user03.jpg'>"]
  ]

]

dentist=[
//Monday
  [
    ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Tuesday
  [
    ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='images/user02.jpg'>"],      
    ["Carolyn  Hunt",new Date("April 18, 2017 014:00:00"),new Date("April 18, 2017 18:00:00"),"<img src='images/user02.jpg'>"],     
  ],
//Wednesday
  [
    ["<p>Eric Synder</p>",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),"<img src='images/user01.jpg'>"]  ,   
    ["<p>Eric Synder</p>",new Date("April 19, 2017 09:00:00"),new Date("April 19, 2017 11:00:00"),"<img src='images/user01.jpg'>"]  ,   
  ],
//THursday
  [
    ["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00"),"<img src='images/user02.jpg'>"]     
    
  ],
//Friday
  [
    ["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Saturday
  [
    ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),"<img src='images/user03.jpg'>"]

        
  ],
//Sunday

  [
    ["<p>Eric Synder</p>",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00"),"<img src='images/user01.jpg'>"]  ,   
    ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00"),"<img src='images/user03.jpg'>"]     
  ]

]

dentalHygienist=[
//Monday
  [
    ["<p>Eric Synder</p>",new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),"<img src='images/user01.jpg'>"]  ,   
    ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Tuesday
  [
    ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='images/user02.jpg'>"]     
  ],
//Wednesday
  [
    ["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),"<img src='images/user01.jpg'>"] ,   
  ],
//THursday
  [
    ["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00"),"<img src='images/user02.jpg'>"]     
    
  ],
//Friday
  [
    ["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Saturday
  [
    ["Eric Synder",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00"),"<img src='images/user01.jpg'>"],
    ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),"<img src='images/user03.jpg'>"]

        
  ],
//Sunday
  [
    ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00"),"<img src='images/user03.jpg'>"]     
  ]
]

cosmeticDentist=[
//Monday
  [

    ["Eric Synder",new Date("April 17, 2017 10:00:00"),new Date("April 17, 2017 12:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Christina Holland",new Date("April 17, 2017 16:00:00"),new Date("April 17, 2017 18:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Tuesday
  [
    ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='images/user02.jpg'>"]     
  ],
//Wednesday
  [
    ["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Eric Synder",new Date("April 19, 2017 08:00:00"),new Date("April 19, 2017 10:00:00"),"<img src='images/user01.jpg'>"] ,   
  ],
//THursday
  [
    ["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00"),"<img src='images/user02.jpg'>"]     
    
  ],
//Friday

  [
    ["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Christina Holland",new Date("April 21, 2017 12:00:00"),new Date("April 21, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Saturday
  [
    ["Eric Synder",new Date("April 22, 2017 12:00:00"),new Date("April 22, 2017 16:00:00"),"<img src='images/user01.jpg'>"],
    ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 11:00:00"),"<img src='images/user03.jpg'>"]

  ],
//Sunday

  [
    ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00"),"<img src='images/user03.jpg'>"]     
  ]
]

pediatricDentist=[
//Monday
  [
    ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Tuesday
  [
    ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='images/user02.jpg'>"]     
  ],
//Wednesday
  [
    ["Eric Synder",new Date("April 19, 2017 14:00:00"),new Date("April 19, 2017 17:00:00"),"<img src='images/user01.jpg'>"]     
  ],
//THursday
  [
    ["Carolyn  Hunt",new Date("April 20, 2017 10:00:00"),new Date("April 20, 2017 13:00:00"),"<img src='images/user02.jpg'>"],
    ["Eric Synder",new Date("April 20, 2017 15:00:00"),new Date("April 20, 2017 18:00:00"),"<img src='images/user01.jpg'>"]   
    
  ],
//Friday
  [
    ["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00"),"<img src='images/user03.jpg'>"]     
  ],
//Saturday
  [
    ["Eric Synder",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00"),"<img src='images/user01.jpg'>"],
    ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),"<img src='images/user03.jpg'>"]
        
  ],
//Sunday

  [
    ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00"),"<img src='images/user01.jpg'>"] ,   
    ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00"),"<img src='images/user03.jpg'>"]     
  ]
]

////////////////////////////////////////////////////////////////////////////////

doctors=[adultDentist,dentist,dentalHygienist,cosmeticDentist,pediatricDentist]
console.log(doctors[0][0][0][0]);

for(var i=1;i<=10;i++){
  tr=$("#timeTable table tbody tr:nth-child("+i+")")
  // console.log(tr);
  for(var j=0;j<7;j++){
    $('<td></td>').appendTo(tr);
  }
}

function time_table(index){

  $("#timeTable table tbody tr td:not(:nth-child(1)").empty()

  for(var j=0; j<7;j++){
    for(var i=0; i<doctors[index][j].length;i++){
      // var color="rgb("+(200-i*2+j*10)+","+(200-i*7+j*18)+","+(i*10+j*2)+")";
      var color=["#18afd3","#f57e57"];


      var dentist=doctors[index][j][i];
      console.log(doctors[index]);
      var lengthOfDiv=dentist[2].getHours()-dentist[1].getHours();
      // console.log(lengthOfDiv);
      var startPosition=dentist[1].getHours()-8;

      $('<div></div>',{
        class:"doctor",
        style:"color:white ;background: "+color[i]+"; height:"+100*lengthOfDiv+"%",
      }).append(dentist[3])
      .append("<p>"+dentist[0]+"</p>")
      .appendTo($("#timeTable table tbody tr:nth-child("+(startPosition+1)+") td:nth-child(+"+(j+2)+")"))
    }
  }

  // $("<img>").attr('src','images/user01.jpg').css({"border-radius":"50px","display":"block"}).appendTo($("#timeTable table tbody tr td div"))
}

$("#timeTable ul li").click(function(){

  var index=$("#timeTable ul li").index($(this));
  // console.log(index);
  time_table(index)
  $("#timeTable ul li").removeClass("active")
  $(this).addClass("active")
  // $("#timeTable ul .active").addClass("noneH5")
  // $("#timeTable ul li h5").toggleClass("noneH5")
  // $(this).($("#timeTable ul li h5")).addClass("noneH5");
  if(self.innerWidth<992){
    $(this).append($("#timeTable #scroll"))
  }

})

function checkAccordion(){
  if(this.innerWidth<992){
    $('#timeTable ul li').css("display",'block');
    $('#timeTable ul .active').append($("#timeTable #scroll"));
    // $("#timeTable ul li").click(function(){
    //  $("#timeTable ul li").removeClass("active")
    //  $(this).toggleClass("active")
    // })

  }
  else{
    $('#timeTable ul li').css("display",'inline-block');
    $('#timeTable .menu').after($('#timeTable #scroll'));
  }
 }
$(document).ready(function(){
  time_table(0);
  checkAccordion();
})
$(window).resize(function(){
  checkAccordion()
})

  

