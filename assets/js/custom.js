/*
Copyright (c) 2017 DoctorDirectory
------------------------------------------------------------------
[Master Javascript]

Project:	DoctorDirectory

-------------------------------------------------------------------*/
var b_url = $('#b_url').val();
(function ($) {
	"use strict";
	var DoctorDirectory = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- DoctorDirectory Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.loginTab();
			this.PopUps();
			this.SidebarOpen();
			
		},
		
		/*-------------- DoctorDirectory Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
        },
        loginTab: function(){
            $('.dd_auth_tab_link > ul').each(function(){
                var $active, $content, $links = $(this).find('a');
                $active = $($links.filter('[href="'+location.hash+'"]')[1] || $links[1]);
                $active.addClass('active');
                $content = $($active[0].hash);
                $links.not($active).each(function () {
                $(this.hash).hide();
                });
                $(this).on('click', 'a', function(e){
                    $active.removeClass('active');
                    $content.hide();
                    $active = $(this);
                    $content = $(this.hash);
                    $active.addClass('active');
                    $content.show();
                    e.preventDefault();
                });
            });
        },
        PopUps: function(){
            $('.dd_popup_link').on('click', function(){
                $('body').addClass('popup_open');
            });
            $('.dd_popup_close').on('click', function(){
                $('body').removeClass('popup_open');
            });
        },
        SidebarOpen: function(){
			$('.dd_nav_toggle').on('click', function(){
				$('body').removeClass('dd_cat_sidebar_open');
				$('body').toggleClass('dd_sidebar_open');
			});
			$('.dd_category_toggle').on('click', function(){
				$('body').removeClass('dd_sidebar_open');
				$('body').toggleClass('dd_cat_sidebar_open');
			});
			$('.dd_sidebar_close').on('click', function(){
				$('body').removeClass('dd_sidebar_open');
				$('body').removeClass('dd_cat_sidebar_open');
			});
            
        },
		BackToTop: function(){
			//Goto Top
			$(window).scroll(function() {
				if ($(this).scrollTop() > 100) {
					$("#dd_backToTop").addClass('btt_show')
				} else {
					$("#dd_backToTop").removeClass('btt_show')
				}
			});
			$("#dd_backToTop").on("click", function() {
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				return false
			});
		}
		
		
	};

	// Load Event
	$(window).on('load', function() {
		$(".dd_loading_wrapper").delay(350).fadeOut("slow");
		
		var body_h = window.innerHeight;
		$('body').css('height',body_h);
		
		// add class on body
		setTimeout(function(){
			$('body').addClass('dd_site_loaded');
		},1000);
	});

	// Resize Event
	$(window).on('resize', function () {
		var body_h = window.innerHeight;
		$('body').css('height',body_h);
	});
	
	$(window).on('scroll', function () {
		
	});
	
	
	// ready function
	$(document).ready(function() {
		DoctorDirectory.init();
		DoctorDirectory.BackToTop();
	});
	
	
})(jQuery);
