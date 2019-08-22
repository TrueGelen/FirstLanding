"use strict"

window.onload = function () {

    /*let about = document.querySelector('.section2 .container .aboutWrap1 .about');  //get a desired object
    let test = document.querySelector('.section3 .container .section3_wrapper .section3_wrapper-title1');
    let a = test.getBoundingClientRect().top;
    // let b = window.pageYOffset;
    console.log(a);
    console.log('winH/2 ' + window.innerHeight / 2);
    console.log('tst ' + test.clientHeight);
    console.log('test*n ' + test.clientHeight * 10);
    console.log('winH/2 - tet*n ' + (window.innerHeight / 2  - test.clientHeight * 10));
    console.log('rect - res ' + (test.getBoundingClientRect().top - (window.innerHeight / 2  - test.clientHeight * 10)));


    let scrollTo = function (element, step = 0, ind = 0, toggle = true ) {
            let i = ind;
            if (toggle == true) {
                console.log(element);
                // step = (element.getBoundingClientRect().top - (window.innerHeight / 2  - element.clientHeight * 8)) / 100;
                step = 50;
                console.log(i);
                scrollTo1(element, step, i, false);
            } else if (ind == 80) {
                return;
            } else {
                i = ind;
                setTimeout(function () {
                    let current = i * step;
                    i++;
                    current += step;
                    console.log('setCur ' + current);
                    console.log('setI ' + i);
                    window.scrollTo(0, current);
                    scrollTo1(element, step, i, false);
                }, 0);
            }
        }*/
    // scrollTo(test);

    let firstAnim = function () {   //function for appearance of the elements of the header with animation
        let logoAndMenu = document.querySelector('header .container .menuwrapper'); //get the logo and menu
        let firstBtn = document.querySelector('header .container .firstBtn');   //get our button
        let mainTitle = document.querySelector('header .container .mainTitle'); //get main title of the header

        let removeClasses = function () {       //function for remove Classes if function "firstBtnOnClick" was called
            let logo = document.querySelector('header .container .menuwrapper .logo'); //get only the logo
            let menu = document.querySelector('header .container .menuwrapper .menu'); //get only the menu

            logoAndMenu.classList.remove('fadeIn'); //remove classes
            firstBtn.classList.remove('fadeIn');
            mainTitle.classList.remove('rotateInDownLeft');
            mainTitle.classList.remove('hinge');
            logo.classList.remove('fadeOutDownBig');
            menu.classList.remove('rotateOutDownRight');
            firstBtn.classList.remove('fadeOut');
        }

        removeClasses(); //call function

        logoAndMenu.classList.add('fadeIn'); //add an animation class for appearance of the logo and menu
        firstBtn.classList.add('fadeIn');   //add an animation class for appearance of the button
        mainTitle.classList.add('rotateInDownLeft'); //add an animation class for appearance of the main title
    }

    let firstBtnOnClick = function () {     //function is an event on click on the button
        let firstBtn = document.querySelector('header .container .firstBtn'); //get the button

        let clickFirstBtn = function (e) {   //sub function to add classes of fade animation
            let mainTitle = document.querySelector('header .container .mainTitle'); //get the main title
            let logo = document.querySelector('header .container .menuwrapper .logo'); //get only the logo
            let menu = document.querySelector('header .container .menuwrapper .menu');  //get only the menu

            let afterAnimate = function () {    //sub function to scroll to a desired object
                let about = document.querySelector('.section2 .container .aboutWrap1 .about');  //get a desired object
                let a = about.getClientRects();
                about.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                // window.scrollTo(0, ((about.getBoundingClientRect().top + window.pageYOffset) - 80)); //scroll to a desired object
                // scrollTo1(about);
                firstAnim();    //call first function to return our header
                mainTitle.removeEventListener('animationend', afterAnimate); //remove the "animationend event" after finish of the animation
            }

            mainTitle.classList.add('hinge'); //add the animation classes to make to fade elements of the header
            firstBtn.classList.add('fadeOut');
            logo.classList.add('fadeOutDownBig');
            menu.classList.add('rotateOutDownRight');

            e.preventDefault();
            mainTitle.addEventListener('animationend', afterAnimate);   //call next function after finish of the animation
        }
        firstBtn.addEventListener('click', clickFirstBtn);  //call next function after click on the button
    }

    let animateOnScroll = function () {
        let progressLines = document.querySelectorAll('.section2 .container .aboutWrap2 .skills .skills_it2 .skills_it2_pair .skills_it2_pair-line');
        let animationMods = ['skillsLineMod88', 'skillsLineMod76', 'skillsLineMod81', 'skillsLineMod71', 'teamprofile-mod1', 'teamprofile-mod2', 'circlePosition0', 'circlePosition1', 'circlePosition2', 'circlePosition3'];
        let teamProfiles = document.querySelectorAll('.section4 .container .teamprofiles .teamprofile');
        let circles = document.querySelectorAll('.section5 .container .circle');

        let watchScroll = function () {
            let positionY = this.pageYOffset;  // присваиваем координаты в переменную
            // console.log('Yoffset' + ' ' + positionY);
            if (positionY >= 1215) {                               //начинаем линии
                progressLines[0].classList.add(animationMods[0]);
                // console.log('Yoffset' + ' ' + positionY);
            }
            if (positionY >= 1300)
                progressLines[1].classList.add(animationMods[1]);
            if (positionY >= 1382)
                progressLines[2].classList.add(animationMods[2]);
            if (positionY >= 1430)
                progressLines[3].classList.add(animationMods[3]); // заканчиваем линии
            // window.removeEventListener('scroll', watchScroll);
            if (positionY >= 3185) {                               // начинаем теампрофили
                for (let i = 0; i < 4; i += 2) {
                    teamProfiles[i].classList.add(animationMods[4]);
                    for (let i = 1; i < 4; i += 2)
                        teamProfiles[i].classList.add(animationMods[5]);
                }
            }  
            if (document.documentElement.clientWidth > 1453452){ //УЧЕСТЬ АДАПТИВНОСТЬ И ИЗМЕНЯЮЩИЕСЯ КООРДИНАТЫ БЛОКОВ!!!
                //if (positionY >= 3600) {                                //начинаем раздвигать круги в секции 5
                    if (positionY >= 3600) {
                    let j = 6;
                    for (let i = 0; i < 4; i++) {
                        circles[i].classList.add(animationMods[j]);
                        j++;
                    }
                }   
            }                                                     //заканчиваем теампрофили                                                                //заканчиваем с кругами в секции 5
        }
        window.addEventListener('scroll', watchScroll);
    }

    animateOnScroll();
    firstBtnOnClick();
    firstAnim();

    let popupCoffees = new MySlider({
        images: '.popup .helper .popup-imgs img',
        btnNext: '.popup .helper .popup-imgs .popup-buttons .popup-btnNext',
        btnBack: '.popup .helper .popup-imgs .popup-buttons .popup-btnBack',
        showClass: 'popup-show'
    });
    popupCoffees.run();

    let popupProjects = new MySlider({
        images: '.popup .projects .popup-imgs img',
        btnNext: '.popup .projects .popup-imgs .popup-buttons .popup-btnNext',
        btnBack: '.popup .projects .popup-imgs .popup-buttons .popup-btnBack',
        showClass: 'popup-show'
    });
    popupProjects.run();
    // popupProjects.debug();

    let popupClients = new MySlider({
        images: '.popup .clients .popup-imgs img',
        btnNext: '.popup .clients .popup-imgs .popup-buttons .popup-btnNext',
        btnBack: '.popup .clients .popup-imgs .popup-buttons .popup-btnBack',
        showClass: 'popup-show'
    });
    popupClients.run();

    let popupAwards = new MySlider({
        images: '.popup .awards .popup-imgs img',
        btnNext: '.popup .awards .popup-imgs .popup-buttons .popup-btnNext',
        btnBack: '.popup .awards .popup-imgs .popup-buttons .popup-btnBack',
        showClass: 'popup-show'
    });
    popupAwards.run();

    let circlePopup = new MyPopup({
        overlay: '.overlay', //just an overlay
        popups: '.popup .popup_wrapper', //an array of popups
        elementsArray: '.section5 .container .circle .circle_border', //an array of elements with which help windows are opened.
        className: 'popup-show' //the class with which help we show our popup
    });

    // testPopup.debug();
    circlePopup.run();
}

class MySlider {
    constructor(obj) {
        this.photos = document.querySelectorAll(obj.images);
        this.btnNext = document.querySelector(obj.btnNext);
        this.btnBack = document.querySelector(obj.btnBack);
        this.showClass = obj.showClass || 'showed';
        this.i = parseInt(obj.positionShowClass) || 0;
    }

    /*debug() {
        console.log(this.photos);
        console.log(this.btnNext);
        console.log(this.btnBack);
        console.log(this.showClass);
        console.log(this.i);
    }*/
    //почему то решил вынести в отдельный метод. На сколько это в данном случае уместно и уместно ли это делать вообще?
    toggle(toggle) {
        this.photos[this.i].classList.remove(this.showClass);
        if (toggle) {
            this.i++;
            if (this.i > this.photos.length - 1)
                this.i = 0;
        } else {
            this.i--;
            if (this.i < 0)
                this.i = this.photos.length - 1;
        }
        this.photos[this.i].classList.add(this.showClass);
    }

    run() {
        this.photos[this.i].classList.add(this.showClass);
        this.btnNext.addEventListener('click', () => {
            this.toggle(true);
        });
        this.btnBack.addEventListener('click', () => {
            this.toggle(false);
        });
    }
}

class MyPopup {
    constructor(obj) {
        this.overlay = document.querySelector(obj.overlay);
        this.popups = document.querySelectorAll(obj.popups);
        this.className = obj.className;
        this.elements = document.querySelectorAll(obj.elementsArray);
        this.showMarker = undefined;
    }

    /*debug() {
        console.log(this.overlay);
        console.log(this.popups);
        console.log(this.className);
        console.log(this.elements);
    }*/

    show(numOfElem) {
        this.overlay.classList.add(this.className);
        this.popups[numOfElem].classList.add(this.className);
    }

    close() {
        console.log(this.showMarker + 'close');
        this.overlay.classList.remove(this.className);
        this.popups[this.showMarker].classList.remove(this.className);
    }

    run() {
        console.log(this.elements);
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener('click', () => {
                this.showMarker = i;
                this.show(i);
            });
        }
        this.overlay.addEventListener('click', () => {
            this.close();
        })
    }
}

    // export {animateOnScroll, firstBtnOnClick, firstAnim} from "./anim";