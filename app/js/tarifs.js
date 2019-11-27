window.addEventListener('load', function () {
	//get tarifs
	const tarifArr = this.document.querySelectorAll('.section6 .container .sec6Wrap2 .wrapTarif .wrapTarif_item')

	//get buttons and set them style
	const chevronLeftLG = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .wrapTarif_btn-prev')
	const chevronRightLG = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .wrapTarif_btn-next')
	chevronLeftLG.style.display = 'none'
	chevronRightLG.style.display = 'none'

	const chevronLeftSM = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .sliderBtn-tarifSM-prev')
	const chevronRightSM = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .sliderBtn-tarifSM-next')
	chevronLeftSM.style.display = 'none'
	chevronRightSM.style.display = 'none'

	//push button into two array
	const prevArr = [chevronLeftLG, chevronLeftSM]
	const nextArr = [chevronRightLG, chevronRightSM]

	//GLOBAL COUNTER
	let counter = 1;

	//function for start styles and setting event listeners
	function starter() {
		if (window.innerWidth <= 1100 && window.innerWidth > 780) {
			resetJS()
			tarifArr[1].style.display = 'flex'
			chevronLeftSM.style.display = 'none'
			chevronRightSM.style.display = 'none'
			chevronLeftLG.style.display = 'inline-block'
			chevronRightLG.style.display = 'inline-block'
		} else if (window.innerWidth <= 780) {
			resetJS()
			tarifArr[1].style.display = 'flex'
			chevronLeftLG.style.display = 'none'
			chevronRightLG.style.display = 'none'
			chevronLeftSM.style.display = 'inline-block'
			chevronRightSM.style.display = 'inline-block'
		} else {
			resetJS()
			tarifArr[1].style.display = 'flex'
			chevronLeftLG.style.display = 'none'
			chevronRightLG.style.display = 'none'
			chevronLeftSM.style.display = 'none'
			chevronRightSM.style.display = 'none'
		}
	}

	prevArr.forEach((item) => {
		item.addEventListener('click', function () {
			tarifArr[counter].style.display = 'none'
			checker(false)
		})
	})

	nextArr.forEach((item) => {
		item.addEventListener('click', function () {
			tarifArr[counter].style.display = 'none'
			checker(true)
		})
	})

	starter()

	function resetJS() {
		tarifArr.forEach(tarif => {
			tarif.style.display = ''
		})
	}

	//function for work tarif slider
	function checker(toggle) {
		if (toggle) {
			if ((counter + 1) >= tarifArr.length) {
				counter = 0
				tarifArr[counter].style.display = 'flex'
			} else {
				counter++
				tarifArr[counter].style.display = 'flex'
			}
		} else {
			if ((counter - 1) < 0) {
				counter = tarifArr.length - 1
				tarifArr[counter].style.display = 'flex'
			} else {
				counter--
				tarifArr[counter].style.display = 'flex'
			}
		}
	}

	//listener for changing styles on resize
	this.window.addEventListener('resize', function () {
		starter()
	})

})