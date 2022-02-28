/**
 * Slider init
 */

import 'owl.carousel';


$('.js-slider .slider__slides').owlCarousel({
	margin: 20,
	center: true,
	items: 1,
	dotsClass: 'slider__paging',
	dotClass: 'slider__dot',
	responsive : {
		1023 : {
			items: 3,
		}
	}
})
