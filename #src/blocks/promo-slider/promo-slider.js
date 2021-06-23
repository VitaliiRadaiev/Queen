// ==  slider ==========================================================================
{
	let promoSlider = document.querySelector('.promo-slider');
	if (promoSlider) {
		let sliderBg = document.querySelector('.promo-slider__bg');
		let promoSlideBg = new Swiper(sliderBg, {
			slidesPerView: 1,
			effect: 'fade',
			loop: true,
			speed: 600,
			// autoplay: {
			//   delay: document.querySelector('.res-single .res-single__hero.slider') ? 8000 : 4000,
			//    disableOnInteraction: false,
			// },
			//spaceBetween: 15,
			preloadImages: false,
			lazy: {
				loadOnTranstitionStart: false,
				loadPrevNext: true,
			}
		})

		let sliderContent = document.querySelector('.promo-slider__content .swiper-container');
		let promoSliderContent = new Swiper(sliderContent, {
			slidesPerView: 1,
			loop: true,
			speed: 600,
			// autoplay: {
			//   delay: document.querySelector('.res-single .res-single__hero.slider') ? 8000 : 4000,
			//    disableOnInteraction: false,
			// },
			//spaceBetween: 35,
			pagination: {
				el: document.querySelector('.promo-slider__pagination'),
				clickable: true,
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="current">0<span class="' + currentClass + '"></span></span>/<span class="total">0<span class="' + totalClass + '"></span></span>';
				}
			},
			navigation: {
				nextEl: promoSlider.querySelector('.promo-slider__btn-next'),
				prevEl: promoSlider.querySelector('.promo-slider__btn-prev'),
			},
		})

		promoSliderContent.controller.control = promoSlideBg;
	}
}
// == and  slider ==========================================================================