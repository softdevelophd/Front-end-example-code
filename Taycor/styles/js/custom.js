$(document).ready(function () {

	//////////////////////////////////////////////
	/// ==             PUBLIC JS            == ///
	//////////////////////////////////////////////

    var w = $( window ).width();

	/*show sub-menu*/
	$('.main-menu-bar li').hover(
		function () {
			index = $(this).index() + 1;

			$('.menu-sub').addClass('show');
			$('.menu-sub .sub-menu-content').removeClass('show');
			$('.menu-sub .sub-menu-content:nth-child(' + index + ')').addClass('show');
		}
	);

	$('.menu-wrapper').mouseleave(function () {
		$('.menu-sub').removeClass('show');
	})
	$('.submenu-arr-up').click(function () {
		$('.menu-sub').removeClass('show');
	})

	/*process click call-me and leave-a-mesage*/
	$(document).mouseup(function (e) {
	    var container1 = $('.leave_message');
	    var container2 = $('.callmenow');

	    if (!container1.is(e.target) && !container2.is(e.target) 
	        && container1.has(e.target).length === 0 && container2.has(e.target).length === 0 )
	    {
			$('.rollup_message').hide();
			$('.rollup_callme').hide();
	    }
	});

	$('.callmenow a').on('click', function (e) {
		$('.rollup_callme').toggle();
		$('.rollup_message').hide();
	})
	$('.leave_message a').on('click', function (e) {
		$('.rollup_message').toggle();
		$('.rollup_callme').hide();
	})

	/*scroll apply now*/
    $(window).scroll(function(){
        var y = parseInt($(window).scrollTop());
	    if (y > 80) {
	        $('div#scroll-nav').removeClass('hide-nav');
	    } else {
	        $('div#scroll-nav').addClass('hide-nav');
	    }

    });

    /*set height of contact part*/
	if (w>768) {
		var height = $('.contactusContainer').innerHeight();
		$('.addressContact iframe').height(height);				
	}



	//////////////////////////////////////////////
	/// ==              SUBPAGE            == ///
	//////////////////////////////////////////////

    /*show content below slider*/
    function show_content (attr) {
        slider_content = $('.subpage-landing-inner' + attr);
        slider_old_content = $('.subpage-landing-inner.active');
        slider_content.fadeIn(400);
        slider_content.addClass('active');
        slider_old_content.fadeOut(400);
        slider_old_content.removeClass('active');
    }

    /*
    *
    *********************
    * Slider in subpage
    *********************
    */
    $('body').on('click', '.s_slider_container .s_slider', function () {

    	if (!$(this).hasClass('disabled')) {
    		$('.s_slider_container .s_slider').addClass('disabled');

	    	container = $('.s_slider_container');

	        attr = $(this).attr('alt');
	    	curr = Math.abs($(this).index() - $('.s_slider_container .s_slider:nth-child(1)').index());
	    	if (curr != 0) {
		    	/*show content below slider*/
		        show_content(attr);
	    	};

	        if (curr == 1) {
		    	slider = $('.s_slider_container > div:nth-child(1)');
		    	slider.clone().appendTo(container);
		    	container.animate({
			        left: '-33.33%'
			        },800, function() {
			            slider.remove();
			            container.css('left', '0');
    					$('.s_slider_container .s_slider').removeClass('disabled');
			        }
			    );
	        } else if (curr == 2){
		    	slider = $('.s_slider_container > div:nth-child(1)');
		    	slider.clone().appendTo(container);
		    	slider2 = $('.s_slider_container > div:nth-child(2)');
		    	slider2.clone().appendTo(container);
		    	container.animate({
			        left: '-66.66%'
			        },800, function() {
			            slider.remove();
			            slider2.remove();
			            container.css('left', '0');
    					$('.s_slider_container .s_slider').removeClass('disabled');
			        }
			    );
	        } else 
        		$('.s_slider_container .s_slider').removeClass('disabled');
	    }
		
    })

    $('body').on('click', '.s_slider_control .right-arrow a', function () {
    	if (!$(this).hasClass('disabled')) {
    		$('.s_slider_control div a').addClass('disabled');

	    	container = $('.s_slider_container');

	        attr = container.find('.s_slider:nth-child(2)').attr('alt');
	    	
	    	/*show content below slider*/
	        show_content(attr);

	    	slider = $('.s_slider_container > div:nth-child(1)');
	    	slider.clone().appendTo(container);
	    	container.animate({
		        left: '-33.33%'
		        },800, function() {
		            slider.remove();
		            container.css('left', '0');
    				$('.s_slider_control div a').removeClass('disabled');
		        }
		    );
    	};
    })

    $('body').on('click', '.s_slider_control .left-arrow a', function () {
    	if (!$(this).hasClass('disabled')) {
    		$('.s_slider_control div a').addClass('disabled');

	    	container = $('.s_slider_container');
	    	container.css('left', '-33.33%')
	    	slider = $('.s_slider_container > div:last-child');
	    	slider.clone().prependTo(container);

	        attr = container.find('.s_slider:nth-child(1)').attr('alt');
	    	
	    	/*show content below slider*/
	        show_content(attr);

	        console.log(attr);
	    	container.animate({
		        left: '0'
		        },800, function() {
		            slider.remove();
		            container.css('left', '0');
    				$('.s_slider_control div a').removeClass('disabled');
		        }
		    );

    	};
    })

    /*click collapse in subpage*/
    $('body').on('click', 'a.sub_collapse', function () {
    	$(this).parent().find('.sub_collapse').removeClass('sub_collapse_none');
    	$(this).addClass('sub_collapse_none');
    })
    /*==========End slider=============*/
	$.textRotator = function(element, options) {
		var defaults = {
			random : false,
			fadeIn : 2500,
			fadeOut : 1000,
			duration : 3500, 
			easingin : 'swing',
			easingout : 'swing'
		}
		var plugin = this;
		plugin.settings = {}
		plugin.globals = {
			child_select : 1,
			$child_select : null
		}
		var $element = $(element), element = element;
        // the "constructor" method that gets called when the object is created
		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			if (plugin.settings.random){ plugin._shuffle($element.children());	}
			plugin.globals.$child_select = $element.find('li:nth-child('+ plugin.globals.child_select+')');
			plugin._fadeIn();
		}
		//resizes main image
		plugin._fadeIn = function() {			
			plugin.globals.$child_select.fadeIn({
					duration : plugin.settings.fadeIn,
					easing: plugin.globals.$child_select.data('easingin') ? plugin.globals.$child_select.data('easingin') : plugin.settings.easingin,
					complete: function () {
						if ($element.find('li').length > 1) {plugin._fadeOut();	}						
					}				
				});		 
		}
		plugin._shuffle = function($el) {
			var allElems = $el.get(),
				getRandom = function(max) {	return Math.floor(Math.random() * max);	},
				shuffled = $.map(allElems, function(){
					var random = getRandom(allElems.length),
						randEl = $(allElems[random]).clone(true)[0];
					allElems.splice(random, 1);
					return randEl;
				});	 
			$el.each(function(i){$(this).replaceWith($(shuffled[i]));});
		}
		
		plugin._fadeOut = function() {
			var sliedDuration = plugin.globals.$child_select.data('duration') ? plugin.globals.$child_select.data('duration') : plugin.settings.duration;
			plugin.globals.$child_select.delay(sliedDuration).fadeOut({
				duration : plugin.settings.fadeOut,
				easing: plugin.globals.$child_select.data('easingout') ? plugin.globals.$child_select.data('easingout') : plugin.settings.easingout,
				complete: function () {
					if  ((plugin.globals.$child_select.index() + 1) == $element.children().length){
						plugin.globals.$child_select = $element.children().first();													
					}
					else {
						plugin.globals.$child_select = plugin.globals.$child_select.next('li');								
					}
					plugin._fadeIn();						
				}				
			});		 			
		}
		plugin.init();
	}
    // add the plugin to the jQuery.fn object
	$.fn.textRotator = function(options) {
		// iterate through the DOM elements we are attaching the plugin to
		return this.each(function() {
			// if plugin has not already been attached to the element
			if (undefined == $(this).data('textRotator')) {
				var plugin = new $.textRotator(this, options);
				$(this).data('textRotator', plugin);
			}
		});
	}

    $(".dropdown").click(function(){
        $(this).find(".dropdown-menu").slideToggle("2500");
    });

    //animate slide toggle text and image
    $(".wrapper_img_text_inner").hover(function(){
    	if ($(this).hasClass('animated-top')) {
    		$(this).animate({
			    top: "0",
			    }, 500, 'swing', function() {
			        $(this).removeClass('animated-top');
			    }
			);
    	} else {
    		$(this).animate({
			    top: "-100%",
			    }, 500, 'swing', function() {
    				$(this).addClass('animated-top');
			    }
			);
    	}
        
    });


	//////////////////////////////////////////////
	/// ==           LANDING PAGE           == ///
	//////////////////////////////////////////////

	/*form in step 3*/
	if (w<380) {
		$('.landing-name-phone-left input').prop('placeholder', 'Your Full Name');
		$('.landing-name-phone-right input').prop('placeholder', 'Telephone Number');
	};

	/*validate form*/
	step = 1;
	function change_status(step) {
		if(step == 1){
			status = 'Step one of four';
			$('.hback').hide();
		}else if (step == 2) {
			status = 'Step two of four';
		} else if (step == 3) {
			status = 'Step three of four';
		} else if (step == 4) {
			status = 'Final step'
		};
		$('.hstatus').text(status);
	}

	//Step1
	$('.landing-next').click(function (e) {
		e.preventDefault();
		value = $('#inpExcelCost').val();

		if (!value) {
			$('#inpExcelCost').css('outline', 'red solid 4px');
		} else {
			$('#inpExcelCost').css('outline', 'red solid 0px');

			step++;
			change_status(step);

			$('.hback').show();
			$('.banner-content').removeClass('landingin');
			$(this).parent().parent().parent().addClass('landingout');
			$(this).parent().parent().parent().next().addClass('landingin');
		};
	})

	function validatePhone(txtPhone) {
	    var a = txtPhone.val();
	    var filter = /^[0-9-+]+$/;
	    if (filter.test(a)) return true;
	    else return false;
	}

	//Step3
	$('.landing-continue').click(function (e) {
		e.preventDefault();
		name  = $('#inpExcelName').val();
		phone = $('#inpExcelNumber').val();

		

		if (!name || !phone) {
			if (!name)
				$('#inpExcelName').css('outline', 'red solid 4px');
			if (!phone)
				$('#inpExcelNumber').css('outline', 'red solid 4px');
		} else {
			if (!validatePhone($('#inpExcelNumber'))) {
				swal({
					title: 'Warning!',
					text: "You must fill telephone number!",
					type: 'warning',
					confirmButtonColor: '#BB312E'
				})
			}
			else {
				$('#inpExcelName').css('outline', 'red solid 0px');
				$('#inpExcelNumber').css('outline', 'red solid 0px');

				step++;
				change_status(step);
				
				$('.hback').show();
				$('.banner-content').removeClass('landingin');
				$(this).parent().parent().parent().addClass('landingout');
				$(this).parent().parent().parent().next().addClass('landingin');
			}
		};
	})

	//Step4 Done
	$('body').on('click', '#finalLanding', function (e) {
		e.preventDefault();
		swal(
			'Congratilation!',
			'Success!',
			'success'
		).then(function() {
			$(this).submit();
		});
	})

	/*click back*/
	$('.landing-step-fixed span:nth-child(1)').click(function () {
		$('.banner-content:nth-child(' + step + ')').removeClass('landingin');
		step--;
		change_status(step);
		$('.banner-content:nth-child(' + step + ')').removeClass('landingout');
	})

    
})

/*modify width leavemessage and callme suitale with reponsive*/
$( window ).load(function() {

	//////////////////////////////////////////////
	/// ==             PUBLIC JS            == ///
	//////////////////////////////////////////////
	
	/*with of message and call box*/
	var w = $( window ).width();
	if (w>640) {
		var w1 = $('.leave_message>a').width();
		$('.callmenow>a').width(w1);
	}


	//////////////////////////////////////////////
	/// ==              SUBPAGE            == ///
	//////////////////////////////////////////////
	
    /*add collapse for slider*/
    if (w < 768) {

    	$('.subpage-landing-inner').removeClass('active');
    	$('.subpage-landing-inner').addClass('collapse');

    	$('.subpage-landing-inner1').clone().appendTo($('#s_slider_content_1'));
    	$('.subpage-landing-inner2').clone().appendTo($('#s_slider_content_2'));
    	$('.subpage-landing-inner3').clone().appendTo($('#s_slider_content_3'));
	    /*off event click*/
	    $('body').off('click', '.s_slider_container .s_slider');
    } else {
    	$('.s_slider_content').remove();
    };

});