window.addEventListener('load', function () {
	console.log("script from responsiveMenu is working")

	const mobMenu = document.querySelector('header .container .menuwrapper .mobMenu')
	const menu = document.querySelector('header .container .menuwrapper .menu')
	const headerTitle = document.querySelector('header .container .mainTitle')
	const btn = document.querySelector('header .container .firstBtn')

	//behavior of MobMenu on click
	mobMenu.addEventListener('click', function () {
		if (menu.style.display !== 'block') {
			menu.style.display = 'block'
			headerTitle.style.visibility = 'hidden'
			btn.style.visibility = 'hidden'
		}
		else {
			menu.style.display = 'none'
			headerTitle.style.visibility = 'visible'
			btn.style.visibility = 'visible'
		}
	})

	//behavior of menu on resize
	this.window.addEventListener('resize', function () {
		this.console.log('this.pageXOffset', this.innerWidth)
		if (this.innerWidth > 960)
			menu.style.display = 'block'
		else
			menu.style.display = 'none'
	})
})