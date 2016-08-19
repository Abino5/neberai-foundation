$(function(){

	setInterval(function(){ 
		$('.loader').fadeOut();
		$('.row').fadeIn();
				$('.fullWidth3').fadeIn();
var width = $(".title-holder").width();
	$('.title-holder').css('height',width+'px');
		var width = $(".connections").width();
	$('.connections').css('height',width+'px');
		 }, 5000);






	

//var width = $(".loader-div").width();
//$('.loader-div').css('height',width+'px');


$('#projects').click(function(){
	$('html, body').animate({
		scrollTop: $(".projects-area").offset().top
	}, 1000);
});



})