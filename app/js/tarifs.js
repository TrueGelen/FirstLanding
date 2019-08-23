window.addEventListener('load', function () {
	this.console.log("script from tarifs.js is working")

	const tarifArr = this.document.querySelectorAll('.section6 .container .sec6Wrap2 .wrapTarif .wrapTarif_item')

	const chevronLeftLG = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .wrapTarif_btn-prev')
	const chevronRightLG = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .wrapTarif_btn-next')
	chevronLeftLG.style.display = 'none'
	chevronRightLG.style.display = 'none'

	const chevronLeftSM = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .sliderBtn-tarifSM-prev')
	const chevronRightSM = this.document.querySelector('.section6 .container .sec6Wrap2 .wrapTarif .sliderBtn-tarifSM-next')
	chevronLeftSM.style.display = 'none'
	chevronRightSM.style.display = 'none'

	const prevArr = [chevronLeftLG, chevronLeftSM]
	const nextArr = [chevronRightLG, chevronRightSM]
	let counter = 1;

	function starter() {
		if (this.innerWidth <= 1100 && this.innerWidth > 780) {
			chevronLeftSM.style.display = 'none'
			chevronRightSM.style.display = 'none'
			chevronLeftLG.style.display = 'block'
			chevronRightLG.style.display = 'block'
		} else if (this.innerWidth <= 780) {
			chevronLeftLG.style.display = 'none'
			chevronRightLG.style.display = 'none'
			chevronLeftSM.style.display = 'block'
			chevronRightSM.style.display = 'block'
		} else {
			chevronLeftLG.style.display = 'none'
			chevronRightLG.style.display = 'none'
			chevronLeftSM.style.display = 'none'
			chevronRightSM.style.display = 'none'
		}

		prevArr.forEach((item) => {
			item.addEventListener('click', function () {
				tarifArr[counter].classList.remove('wrapTarif_item-show')
				checker(false)
			})
		})

		nextArr.forEach((item) => {
			item.addEventListener('click', function () {
				tarifArr[counter].classList.remove('wrapTarif_item-show')
				checker(true)
			})
		})
	}

	function checker(toggle) {
		if (toggle) {
			if ((counter + 1) >= tarifArr.length) {
				counter = 0
				tarifArr[counter].classList.add('wrapTarif_item-show')
			} else {
				counter++
				tarifArr[counter].classList.add('wrapTarif_item-show')
			}
		} else {
			if ((counter - 1) < 0) {
				counter = tarifArr.length - 1
				tarifArr[counter].classList.add('wrapTarif_item-show')
			} else {
				counter--
				tarifArr[counter].classList.add('wrapTarif_item-show')
			}
		}
	}
	starter()

	this.window.addEventListener('resize', function () {
		starter()
	})

})