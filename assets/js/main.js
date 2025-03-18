/***************************************************
==================== JS INDEX ======================
****************************************************
01. preLoader
02. back-to-top
03. common
04. mobile menu
05. sticky header
06. offcanvas
07. nice Select
08. faq-class-active
09. title-animation
10. for header language
11. menu-list Active
12. ecommerce
13. product active
14. mouse custom cursor
15. hover reveal for image
16. smooth scroll
17. flatpickr Date
18. flatpickr time
19. counter
20. masonary
21. magnificPopup img view
22. magnificPopup video view
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	/*---------- 01. preLoader Js ----------*/
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	/*----------- 02. back-to-top Js -------*/
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	/*----------- 03. common Js ----------*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	/*-----------  04. mobile Menu Js ----------*/
	var atMenuWrap = $('.at-mobile-menu-active > ul').clone();
	var atSideMenu = $('.at-offcanvas-menu nav');
	atSideMenu.append(atMenuWrap);
	if ($(atSideMenu).find('.at-submenu, .at-mega-menu').length != 0) {
		$(atSideMenu).find('.at-submenu, .at-mega-menu').parent().append
			('<button class="at-menu-close"><i class="fa-solid fa-chevron-right"></i></button>');
	}
	var sideMenuList =
		$('.at-offcanvas-menu nav > ul > li button.at-menu-close, .at-offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.at-submenu, .at-mega-menu').slideDown();
		} else {
			$(this).siblings('.at-submenu, .at-mega-menu').slideUp();
			$(this).parent().removeClass('active');
		}
	});

	/*----------- 05. sticky Header Js -----------*/
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 20) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	/*----------- 06. offcanvas Js ---------------*/
	$(".at-offcanvas-toogle").on('click', function () {
		$(".at-offcanvas").addClass("opend");
		$(".body-overlay").addClass("opend");
	});

	$(".at-offcanvas-close-toggle,.body-overlay").on('click', function () {
		$(".at-offcanvas").removeClass("opend");
		$(".body-overlay").removeClass("opend");
	});

	/*------------ 06. magnificPopup img view --------------*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*------------ 07. nice Select Js ---------------*/
	$('select').niceSelect();

	/*------------- 08. faq-class-active -----------------*/
	$('.at-faq .accordion-items').on("click", function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	/*------------- 09. title-animation ----------------*/
	if ($('.at-title-animation').length > 0) {
		let char_come = gsap.utils.toArray(".at-title-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
				{
					duration: .5,
					delay: 0.2,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05
				});
		});
	}

	/*----------------- 10. for header language ---------------*/
	if ($("#at-header-lang-toggle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('at-header-lang-toggle').contains(e.target)) {
				$(".at-lang-list").toggleClass("at-lang-list-open");
			}
			else {
				$(".at-lang-list").removeClass("at-lang-list-open");
			}
		});
	}

	/*----------- 11. menu-list Active ----------*/
	$(".at-menus-list").on("mouseenter", function () {
		$(".at-menus-list").removeClass("active");
		$(this).addClass("active");
	});

	/*----------------- 12. ecommerce ---------------*/
	function at_ecommerce() {
		$('.at-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.at-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});

		$('.at-checkout-payment-item label').on('click', function () {
			$(this).siblings('.at-checkout-payment-desc').slideToggle(400);

		});

		// 17. Show Login Toggle Js
		$('.at-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});

		// 18. Show Coupon Toggle Js
		$('.at-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});

		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});

		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	at_ecommerce();


	/*----------------- 13. product active -------------------*/
	var grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percenatosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item'
		}
	})

	$('.product-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		grid.isotope({ filter: filterValue });
	});

	//for product menu active class
	$('.product-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});


	/*----------- 14. mouse custom cursor  ----------*/
	function atCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function (s) {
					o ||
						(t.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(e.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
					$("body").on("mouseenter", "button, a, .cursor-pointer", function () {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
					}),
					$("body").on("mouseleave", "button, a, .cursor-pointer", function () {
						($(this).is("a", "button") &&
							$(this).closest(".cursor-pointer").length) ||
							(e.classList.remove("cursor-hover"),
								t.classList.remove("cursor-hover"));
					}),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	atCursor();

	$(".at-cursor-point-area").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});

	$(".at-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	/*-----------  15. hover reveal for image ---------------*/
	const hoverItem = document.querySelectorAll(".at-hover-reveal-item");
	function moveImage(e, hoverItem, index) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[index]) {
			hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item, 1), 50);
		});
	});

	/*----------------- 16. smooth scroll -----------------*/
	function smoothScroll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 300);
			}
		});
	}
	smoothScroll();

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	gsap.config({
		nullTargetWarn: false,
	});

	let smoother = ScrollSmoother.create({
		smooth: .8,
		effects: true,
		smoothTouch: false,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});

	/*------------- 17. flatpickr Date -------------*/
	flatpickr("input[name='dateCalender']", {
		dateFormat: "Y-m-d",
		disableMobile: "true"
	});

	/*-------------  18. flatpickr time -------------*/
	flatpickr("input[name='timeLocal']", {
		noCalendar: true,
		enableTime: true,
		dateFormat: 'h:i K',
		disableMobile: "true"
	});

	/*----------------- 19. counter ---------------- */
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	/*----------------- 20. masonary  ---------------*/
	$('.grid').imagesLoaded(function () {

		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percenatosition: true,
			layoutMode: 'fitRows',
			masonry: {
				columnWidth: 1,
			},

		});

		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 1000,
					easing: "linear",
					queue: false
				}
			});

		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/*----------------- 21. magnificPopup img view  ---------------*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*----------------- 22. magnificPopup video view  ---------------*/
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


})(jQuery);