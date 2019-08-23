window.addEventListener('load', function () {
	this.console.log("script from scrollTo.js is working")
	//getting menu items
	const menuItems = this.document.querySelectorAll('header .container .menuwrapper .menu .menu-link')
	let arrayOfElem = [];

	//getting elements to which we need to scroll
	menuItems.forEach(item => {
		let id = item.getAttribute('href').replace('#', '')
		let elem = document.querySelector(`#${id}`)
		arrayOfElem.push(elem)
	})

	//setting the listener on click for scrolling
	menuItems.forEach((item, i) => {
		item.addEventListener('click', function (e) {
			e.preventDefault()
			arrayOfElem[i].scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		})
	})
})