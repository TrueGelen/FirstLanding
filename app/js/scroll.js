window.addEventListener('load', function () {

	//getting Progress line and their coordinates and setting their mods
	const progressLines = document.querySelectorAll('.section2 .container .aboutWrap2 .skills .skills_it2 .skills_it2_pair .skills_it2_pair-line');
	let progressLinesCoordinates = []
	progressLines.forEach((item, i) => {
		let coordinate = item.getBoundingClientRect().y - this.window.innerHeight + 25 + this.pageYOffset
		progressLinesCoordinates.push(coordinate)
		//this.console.log(`progressLinesCoordinates[${i}]`, progressLinesCoordinates[i])
	})
	const nonanimationPL = ['MMskillsLineMod88', 'MMskillsLineMod76', 'MMskillsLineMod81', 'MMskillsLineMod71']
	const animationModsPL = ['skillsLineMod88', 'skillsLineMod76', 'skillsLineMod81', 'skillsLineMod71']

	//getting team profiles and their coordinates and setting their mods
	const teamProfiles = document.querySelectorAll('.section4 .container .teamprofiles .teamprofile');
	const teamProfilesCoordinate = teamProfiles[0].getBoundingClientRect().y - this.window.innerHeight + 430 + this.pageYOffset
	const animationModsTP = ['teamprofile-mod1', 'teamprofile-mod2']

	//getting circles and their coordinates and setting their mods
	const circles = document.querySelectorAll('.section5 .container .circle')
	const circleCoordinate = circles[0].getBoundingClientRect().y - this.window.innerHeight + 160 + this.pageYOffset
	const animationModsC = ['circlePosition0', 'circlePosition1', 'circlePosition2', 'circlePosition3']

	//function for adding animate classes
	let watchAnimateScroll = function () {
		let positionY = window.pageYOffset;
		//for progress lines 
		if (positionY >= progressLinesCoordinates[0])
			progressLines[0].classList.add(animationModsPL[0])
		if (positionY >= progressLinesCoordinates[1])
			progressLines[1].classList.add(animationModsPL[1])
		if (positionY >= progressLinesCoordinates[2])
			progressLines[2].classList.add(animationModsPL[2])
		if (positionY >= progressLinesCoordinates[3])
			progressLines[3].classList.add(animationModsPL[3])

		//for team profiles
		if (positionY >= teamProfilesCoordinate) {
			for (let i = 0; i < 4; i += 2) {
				teamProfiles[i].classList.add(animationModsTP[0]);
				for (let i = 1; i < 4; i += 2)
					teamProfiles[i].classList.add(animationModsTP[1]);
			}
		}

		//for circles
		if (positionY >= circleCoordinate) {
			for (let i = 0; i < 4; i++) {
				circles[i].classList.add(animationModsC[i]);
			}
		}
	}

	//function for adding classes without animate
	let watchNonAnimateScroll = function () {
		//for progress lines
		progressLines[0].classList.add(nonanimationPL[0])
		progressLines[1].classList.add(nonanimationPL[1]);
		progressLines[2].classList.add(nonanimationPL[2]);
		progressLines[3].classList.add(nonanimationPL[3]); // заканчиваем линии

		//for team profiles
		teamProfiles.forEach((item) => {
			item.style.visibility = 'visible';
		})

		//for circles
		circles.forEach(item => {
			console.log
			item.style.left = '0';
		})
	}

	//choosing the function to start
	if (window.innerWidth > 780)
		window.addEventListener('scroll', watchAnimateScroll)
	else
		watchNonAnimateScroll()

	//choosing the listener on change resize
	window.addEventListener('resize', function () {
		if (window.innerWidth <= 780) {
			removeAnimateClasses()
			this.window.removeEventListener('scroll', watchAnimateScroll)
			watchNonAnimateScroll()
		} else {
			removeAnimateClasses()
			watchAnimateScroll()
			window.addEventListener('scroll', watchAnimateScroll)
		}
	});

	//clean classes on change resize
	function removeAnimateClasses() {
		//for progress lines
		progressLines.forEach((item, i) => {
			item.classList.remove(nonanimationPL[i])
			item.classList.remove(animationModsPL[i])
		})

		//for team profiles
		teamProfiles.forEach((item) => {
			item.style.visibility = 'hidden';
		})

		circles.forEach((item, i) => {
			item.classList.remove(animationModsC[i])
			item.style.left = '43%';
		})
	}

})