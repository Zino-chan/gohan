import '../scss/_main.scss';
import glideInit from './glideSlider';
import {pageAnimation, smoothScroll} from './animation';

window.addEventListener('DOMContentLoaded',() => {

	if(document.querySelector('.spinner-wrapper')){
		document.querySelector('.spinner-wrapper').style.display = 'none';
	}

	//SmoothScrollbar
	smoothScroll();

	//Glide
	glideInit();

	//Gsap
	pageAnimation();


	//Nav-toggle
	document.querySelector('.menu-toggler').addEventListener('click', () => {
		document.querySelector('.navbar-nav').classList.toggle('open');
	})

 })




