$(function() {

	if(window.innerWidth<=1024){		
		$('.absolute-menu').click(function(){
			$('#menuLateral').addClass('open');
			$('html,body').addClass('fixed');
		});

		$('.closeLateral, #menuLateral ul a').click(function(){
			$('#menuLateral').removeClass('open');
			$('html,body').removeClass('fixed');
		});
		/*Change right via window resize*/
		// $('#menuLateral').css('right',-window.innerWidth);
		// $(window).resize(function(){
		// 	$('#menuLateral').css('right',-window.innerWidth);
		// });		
	} else {		
		$('.absolute-menu').click(function(){
			$('#menuLateral').addClass('open');
		});

		$('.closeLateral, #menuLateral ul a').click(function(){
			$('#menuLateral').removeClass('open');
		});
		/*Const right via window resize*/
		// $('#menuLateral').css('right','-732px');
		// $(window).resize(function(){
		// 	$('#menuLateral').css('right','-732px');
		// });	
	}
	
	/* modal toggle*/
	var e;

	$('a.view-destination').click(function(e){		
		e.preventDefault();
		$('#destinations-modal').css('display','block');
	});

	$('.close_modal a').click(function(e){
		e.preventDefault();
		$('#destinations-modal').css('display','none');
	});

	/* Form submit */
	$('#reg_form').submit(function(e){
		if(($('#name').val()=="" || $('#surname').val()=="" || $('#email').val()=="" || $('#tel').val()=="") && $('#eng_level').val()=="0"){
			e.preventDefault();
			alert('Please enter a valid all fields\nPlease select your english level.');
		} else if($('#name').val()=="" || $('#surname').val()=="" || $('#email').val()=="" || $('#tel').val()==""){
			e.preventDefault();
			alert('Please enter a valid all fields.');
		}
	});

	/* Akordion */
	var liToggle = $('#sector-faqs li');

	liToggle.click(function(){
		if($(this).hasClass('open')){
			liToggle.removeClass('open');
		} else{
			liToggle.removeClass('open');
			$(this).addClass('open');
		}		
	});

	/* Animate Scroll */
	$('#mainMenu a, #menuLateral ul a, .catch-holder>a, .join, .up').click(function(){		
		var id_target = $(this).attr('href');
		$('html,body').animate({
			scrollTop: $(id_target).offset().top
		},900);
	});
	
});