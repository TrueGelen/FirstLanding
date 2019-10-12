import GnativeSlider from './GnativeSlider'
window.addEventListener('load', function () {
	new GnativeSlider({
		loop: true,
		itemsContainer: '.section7 .container .sec7Wrap1 .slider .imgs',
		animationTime: 300,
		margin: '5px',
		btnNext: '.section7 .container .sec7Wrap1 .slider .buttonsWrap .sliderBtn-next',
		btnPrev: '.section7 .container .sec7Wrap1 .slider .buttonsWrap .sliderBtn-prev',
		dotsContainer: '.section7 .container .sec7Wrap1 .slider .dotsForSec7Slider',
		exampleOfDot: '.section7 .container .sec7Wrap1 .slider .dotsForSec7Slider_dot',
		activeDotClass: 'dotsForSec7Slider_dot-active',
		itemsCount: 1,
		nav: true,
		dots: true
	}).createSlider()

})