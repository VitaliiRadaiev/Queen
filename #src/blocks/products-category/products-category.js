{
	const slider = document.querySelector('.products-category__list');
	if (slider) {
		let mySwiper;
		mySwiper = new Swiper(slider, {
			slidesPerView: 4,
			spaceBetween: 30,
			speed: 600,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
			},
			pagination: {
				el: slider.querySelector('.slider-pagination'),
				clickable: true,
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="current">0<span class="' + currentClass + '"></span></span>/<span class="total">0<span class="' + totalClass + '"></span></span>';
				}
			},
			navigation: {
				nextEl: slider.querySelector('.promo-slider__btn-next'),
				prevEl: slider.querySelector('.promo-slider__btn-prev'),
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}

}