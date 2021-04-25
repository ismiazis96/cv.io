$(document).ready(function(){


	// slide up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
		// removing smooth scrool on slide-up button click
		$('html').css("scrollBehavior","auto");
	});

	// typing animated sript header
	var typed = new Typed(".typing",{
		strings: ["Developer","Designer","Programmer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	// typing animated sript about
	var typed = new Typed(".typing-2",{
		strings: ["Developer","Youtuber","Designer","Programmer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});


});	