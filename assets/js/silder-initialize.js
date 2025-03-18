(function ($) {
	"use strict";

	//slider
	let sliderOne = new Swiper('.at-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		speed: 2000,
		effect: 'fade',
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".at-pagination",
			clickable: true,
		},

	});

	//Testimonial
	let testiSlider = new Swiper('.at-testimonial-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		speed: 1000,
		effect: 'slide',
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".at-testimonial-dots, .at-testimonial-number",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		}

	});

	//Testimonial 2
	let testi2Slider = new Swiper('.at-testi-2-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: true,
		speed: 1000,
		spaceBetween: 100,
		effect: 'slide',
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".at-testimonial-dots, .at-testimonial-number",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		}

	});

	//Event
	let eventSlider = new Swiper('.at-event-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		speed: 1000,
		spaceBetween: 100,
		effect: 'slide',
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				spaceBetween: 50,
				slidesPerView: 4,
			},
			'992': {
				spaceBetween: 40,
				slidesPerView: 3,
			},
			'768': {
				spaceBetween: 30,
				slidesPerView: 3,
			},
			'576': {
				spaceBetween: 0,
				slidesPerView: 1,
			},
			'0': {
				spaceBetween: 0,
				slidesPerView: 1,
			},
		}

	});

	//History
	let historySlider = new Swiper('.at-history-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: true,
		speed: 1000,
		spaceBetween: 100,
		effect: 'slide',
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			'992': {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			'768': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'576': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		}

	});

	// text-slider-1
	var atTextSlide = new Swiper(".rolling-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-2
	var atTextSlide = new Swiper(".rolling-2-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 15000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	//Brand
	let brandSlide = new Swiper('.at-brand-active', {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 174,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 4000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },

	});

	//Instagram
	let instaSlide = new Swiper('.at-instagram-active', {
		slidesPerView: 4,
		loop: true,
		autoplay: true,
		speed: 1000,
		spaceBetween: 0,
		effect: 'slide',
		breakpoints: {
			'1700': {
				slidesPerView: 4,
			},
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}

	});

	//Product-Menus
	let productSlide = new Swiper('.at-product-active', {
		slidesPerView: 4,
		loop: true,
		autoplay: true,
		speed: 1000,
		spaceBetween: 0,
		effect: 'slide',
		breakpoints: {
			'1700': {
				slidesPerView: 4,
			},
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		}

	});

	//Team
	let teamSlide = new Swiper('.at-team-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: true,
		speed: 1000,
		spaceBetween: 50,
		effect: 'slide',
		breakpoints: {
			'1700': {
				slidesPerView: 3,
			},
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			'992': {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			'768': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'576': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			'0': {
				slidesPerView: 1,
			},
		}

	});

	//History
	let serviceSlider = new Swiper('.at-service-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: true,
		speed: 1000,
		spaceBetween: 80,
		effect: 'slide',
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			'992': {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			'768': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'576': {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		}

	});


})(jQuery);