window.addEventListener('load', function () {
	//getting menu items
	const links = this.document.querySelectorAll('header .container .menuwrapper .menu .menu-link')
	const menuItems = this.document.querySelectorAll('header .container .menuwrapper .menu ul .liForJs')
	let arrayOfElem = [];

	//getting elements to which we need to scroll
	links.forEach(item => {
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

	//button pageUP
	const pageUp = this.document.querySelector('.pageUp')
	const header = this.document.querySelector('header')

	this.window.addEventListener('scroll', function () {
		if (window.pageYOffset > 800)
			pageUp.style.display = 'block'
		else
			pageUp.style.display = 'none'
	})

	pageUp.addEventListener('click', function () {
		header.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
})