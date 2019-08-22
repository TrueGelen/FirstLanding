"use strict"

/*let scrollTo = function (element, step = 0, ind = 0, toggle = true ) {
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
let a = 100;
let b = 10;
let usk = (20 - 5) / 20;
// let usk = 1.0555;
console.log(usk);
let res = 5;
let usk1 = 5;
let n = 0;

/*for (let i = 0; res <= 1000; i++) {
    if (n < 5) {
        n++;
        console.log(i);
        console.log('размер шага ' + usk1);
        console.log('result ' + res);
        console.log('n ' + n);
    } else {
        n = 0;
        usk1 += usk;
        res += usk1;
        console.log(i);
        console.log('размер шага ' + usk1);
        console.log('result ' + res);
//         if ((res + (usk1 + usk) > 1000)) {
//             // usk1 = 0;
//             // usk = ((usk1 + usk) - 1000);
//             console.log('!!!!!!!!!!!!!!!!!!!!!!! ');
//         }
//     }
// }*/

let about = document.querySelector('.section2 .container .aboutWrap1 .about');  //get a desired object
let test = document.querySelector('.section3 .container .section3_wrapper .section3_wrapper-title1');

class Scroller {
    constructor(elems, posOnScreen = 'center', speed = 1) {
        this.elems = elems;
        let toggle = true,
            step = 0,
            ind = 0;
    }


    easeIn(toggle) {
        if (toggle == true) {

        }
    }
}