$(document).ready(function () {
	const prevBtn = document.querySelector('#prev')
	const nextBtn = document.querySelector('#next')

	console.log("script from settingOwl.js is working")
	let slider = $('.owl-carousel')
	slider.owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		items: 1,
		singleItem: true
	})

	prevBtn.addEventListener('click', function () {
		slider.trigger('prev.owl.carousel')
	})

	nextBtn.addEventListener('click', function () {
		slider.trigger('next.owl.carousel')
	})
});
