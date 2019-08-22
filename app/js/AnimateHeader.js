window.addEventListener('load', function () {
	this.console.log("script from AnimateHeader.js is working")

	//const logoAndMenu = document.querySelector('header .container .menuwrapper'); //get the logo and menu
	const logo = document.querySelector('header .container .menuwrapper .logo'); //get only the logo
	const menu = document.querySelector('header .container .menuwrapper .menu'); //get only the menu
	const firstBtn = document.querySelector('header .container .firstBtn');   //get our button
	const mainTitle = document.querySelector('header .container .mainTitle'); //get main title of the header

	//function which sets classes for the appearance of the header elements
	function setClassesForHeader() {
		console.log("setClassesFfrHeader")
		logo.classList.add('fadeIn'); //add an animation class for appearance of the logo 
		menu.classList.add('fadeIn'); //add an animation class for appearance of the menu
		firstBtn.classList.add('fadeIn');   //add an animation class for appearance of the button
		mainTitle.classList.add('rotateInDownLeft'); //add an animation class for appearance of the main title
	}
	setClassesForHeader();

	//function for remove Classes if function "firstBtnOnClick" was called
	function removeClassesFofHeader() {
		firstBtn.classList.remove('fadeIn');
		mainTitle.classList.remove('rotateInDownLeft');
		mainTitle.classList.remove('hinge');
		logo.classList.remove('fadeOutDownBig');
		menu.classList.remove('rotateOutDownRight');
		firstBtn.classList.remove('fadeOut');
	}

	//function which reacts to click on the button and starts the fade out animation
	let clickFirstBtn = function (e) {
		e.preventDefault();
		//add the animation classes to make to fade elements of the header
		mainTitle.classList.add('hinge');
		firstBtn.classList.add('fadeOut');
		logo.classList.add('fadeOutDownBig');
		menu.classList.add('rotateOutDownRight');
		mainTitle.addEventListener('animationend', afterAnimate);   //call next function after finish of the animation
	}

	//function to scroll to a desired object
	let afterAnimate = function () {
		console.log("afterAnimate")
		let about = document.querySelector('.section2 .container .aboutWrap1 .about');  //get a desired object
		let a = about.getClientRects();
		about.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})

		removeClassesFofHeader()
		setClassesForHeader()

		//remove the "animationend event" after finish of the animation
		mainTitle.removeEventListener('animationend', afterAnimate);
	}


	firstBtn.addEventListener('click', clickFirstBtn);  //call next function after click on the button

})