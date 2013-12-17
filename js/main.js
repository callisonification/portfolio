// JavaScript Document
// author : chris allison
// date : 10-10-13
// project : portfolio
$(function() {
   
   
   //carousel actions
	$('.carousel').carousel({
		interval : 5000,
		wrap : true,
		pause : 'hover'   
	});
	
	//change carousel mouse pointer - may remove
	$('.carousel-control').on('mouseover',function(){
		$(this).css({'cursor':'default'});
	});
	
	//offcanvas actions
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
		
	//skills list - animate action
	var pb = $('.progress-bar');	
	
	$(pb).each(function() {
       	var pct = $(this).attr('aria-valuenow');
		$(this).animate({'width' : pct+'%'}, 1000);	
    });
	
	//tooltip rollover effect
	$(pb).on('mouseover', function(){
		var value = $(this).attr('aria-valuenow');
		getValue(value);
	});
	//destorys the tooltip and removes it from the DOM
	$(pb).on('mouseout', function(){
		$('.progress').tooltip('destroy');
		$(document).find('.tooltip').remove();
	});
	
	//fn accepts var and assigns value to the tooltip
	var getValue = function(val){
		$('.progress').tooltip({
			selector: "[data-toggle=tooltip]",
			container: "body",
			animation : true,
			placement : 'auto top',
			title : val+"% Comprehension",
			trigger : 'hover'
		});
	};
		
	//back to top btn action
	$('.btt').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;	
	});
	
	//portfolio CTA actions
	$('.btn-trigger').on('click', function(){
		if( $(this).hasClass('design') ){
			$('html,body').scrollTo($('.design_feature'), 800, {});
		}else if( $(this).hasClass('code') ){
			$('html,body').scrollTo($('.code_feature'), 800, {});
		}else if( $(this).hasClass('launch') ){
			$('html,body').scrollTo($('.launch_feature'), 800, {});
		}	
		return false;
	});
	
	//social btn rollover effect
	var rollover = $('.social a img');
	
	//rollover on
	$(rollover).on('mouseenter', function(){
		
		src = $(this).attr('src');
		offsrc = $(this).attr('data-off');
		onsrc = $(this).attr('data-on');
		
		if( src == offsrc ){
			$(this).attr('src',onsrc);
		}
	});
	//rollover off
	$(rollover).on('mouseleave', function(){
		
		src = $(this).attr('src');
		offsrc = $(this).attr('data-off');
		onsrc = $(this).attr('data-on');
		
		if( src == onsrc ){
			$(this).attr('src',offsrc);	
		}
	});
	
	//changes title of resume thumbnail so it doesnt show
	//download link on hover
	var thumb = $('.res_thumb');
	
	$(thumb).on('mouseenter', function(){
		var title = $(this).attr('title');
		var html = 'Download My Resume';
		$(thumb).prop('title', html)
	});
	
	//changes title back to link when images is clicked
	//applies only to visible img element
	$(thumb).on('click', function(){
		var title = $(this).attr('title');
		var html = "<a href='../resumes/cv_template_v4.pdf' target='new'>Download</a> My PDF Resume";
		$(thumb).prop('title', html)
	});
	
	//initialize and load prettyPhoto.js
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme : 'dark_square',
		ie6_fallback : true
	});
   
});//end doc.ready()