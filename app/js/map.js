//window.addEventListener('load', function () {
ymaps.ready(init);
function init() {
	var myMap = new ymaps.Map("map", {
		center: [54.17221957, 45.21519050],
		zoom: 16,
		controls: []
	});

	myMap.geoObjects.add(new ymaps.Placemark([54.17221957, 45.21519050], {
		balloonContent: 'Он тут сидел, когда это писал',
		iconCaption: 'Gelen'
	}))

	myMap.behaviors.disable(['scrollZoom', 'drag'])
}
//})
