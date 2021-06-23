// ==  slider ==========================================================================
{
	let slider = document.querySelector('.testimonials-slider__body');
	if(slider) {
		let promoSliderContent = new Swiper(slider.querySelector('.swiper-container'), {
			slidesPerView: 1,
			spaceBetween: 40,
			loop: true,
			speed: 600,
			autoHeight: true,
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
		})

	}
}
// == and  slider ==========================================================================