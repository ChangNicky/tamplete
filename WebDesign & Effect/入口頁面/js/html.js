$(document).ready(function(){
	$(".nav a").hover(function(){
		$(this).children(".i1").animate({opacity:0},10);
		$(this).children(".i").animate({opacity:1},300);
	},function(){
		$(this).children(".i").animate({opacity:0},10);
		$(this).children(".i1").animate({opacity:1},300);
	});
	
	$(".sliderbox ul li").hover(function(){
		$(this).addClass("hover");
		$(this).children(".zz").fadeIn(300);
		$(this).find(".txt").animate({"margin-top":-47,"height":94},200);
	},function(){
		$(this).removeClass("hover");
		$(this).children(".zz").fadeOut(10);
		$(this).find(".txt").animate({"margin-top":-27,"height":54},100);
	});
});	